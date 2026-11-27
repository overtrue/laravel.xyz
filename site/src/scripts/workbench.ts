import { getLocale, localize } from '../lib/locale';

const workbench = document.querySelector<HTMLElement>('[data-tool]')!;
const { t } = localize(getLocale(location.pathname));

function field<T extends HTMLInputElement | HTMLSelectElement>(name: string) {
  return workbench.querySelector<T>(`[name="${name}"]`)!;
}

function publish(code: string, message = '', cron = '') {
  const target = document.querySelector('#tool-result')!;
  const status = document.querySelector<HTMLElement>('#tool-status')!;
  const cronResult = document.querySelector('#cron-result');
  target.textContent = code;
  status.textContent = message;
  status.hidden = !message;
  if (cronResult) cronResult.textContent = cron;
  workbench.querySelector<HTMLButtonElement>('[data-copy="tool-result"]')!.disabled = !code;
  const cronCopy = workbench.querySelector<HTMLButtonElement>('[data-copy="cron-result"]');
  if (cronCopy) cronCopy.disabled = !cron;
}

function mountArtisan() {
  const samples: Record<string, string> = {
    model: 'Task', controller: 'TaskController', request: 'StoreTaskRequest', job: 'MarkTaskReminder',
    migration: 'create_tasks_table', seeder: 'TaskSeeder', test: 'TaskCreationTest',
  };
  const type = field<HTMLSelectElement>('resource-type');
  const name = field<HTMLInputElement>('resource-name');
  let previousType = type.value;

  function update() {
    const kind = type.value;
    if (kind !== previousType) {
      if (!name.value || name.value === samples[previousType]) name.value = samples[kind];
      previousType = kind;
    }

    const migration = kind === 'migration';
    workbench.querySelector('[data-resource-label]')!.textContent = migration ? t('Migration name', '迁移名称') : t('Class name', '类名');
    workbench.querySelector('[data-resource-hint]')!.textContent = migration
      ? t('Use lowercase letters, digits, and underscores, e.g. create_tasks_table.', '使用小写字母、数字和下划线，如 create_tasks_table。')
      : t('Use a slash for a subdirectory, e.g. Admin/Task.', '可用斜杠指定子目录，如 Admin/Task。');
    for (const group of workbench.querySelectorAll<HTMLFieldSetElement>('[data-flags]')) {
      group.hidden = group.dataset.flags !== kind;
    }

    const resource = name.value.trim().replaceAll('\\', '/');
    const format = migration ? /^[a-z][a-z0-9_]*$/ : /^[A-Za-z_]\w*(?:\/[A-Za-z_]\w*)*$/;
    if (!format.test(resource)) {
      publish('', migration ? t('Enter a valid migration name.', '请输入有效的迁移名称。') : t('Enter a valid PHP class name. Use slashes for subdirectories.', '请输入有效的 PHP 类名，可以用斜杠分隔子目录。'));
      return;
    }

    const flags = [...workbench.querySelectorAll<HTMLInputElement>('[data-flags]:not([hidden]) input:checked')].map((input) => input.value);
    publish([`php artisan make:${kind}`, resource, ...flags].join(' '));
  }

  workbench.addEventListener('input', update);
  update();
}

interface RuleField { name: string; type: string; required: boolean; min?: number; max?: number }

function mountValidation() {
  const fields = workbench.querySelector<HTMLElement>('[data-rule-fields]')!;
  const template = document.querySelector<HTMLTemplateElement>('#rule-field')!;
  const sizes = new Set(['string', 'email', 'integer', 'numeric', 'array']);
  const presets: Record<string, RuleField[]> = {
    task: [{ name: 'title', type: 'string', required: true, max: 120 }, { name: 'due_at', type: 'date', required: false }],
    contact: [{ name: 'email', type: 'email', required: true, max: 255 }, { name: 'company', type: 'string', required: false, max: 120 }],
  };

  function add(initial?: RuleField) {
    const row = template.content.firstElementChild!.cloneNode(true) as HTMLElement;
    if (initial) {
      row.querySelector<HTMLInputElement>('[data-field="name"]')!.value = initial.name;
      row.querySelector<HTMLSelectElement>('[data-field="type"]')!.value = initial.type;
      row.querySelector<HTMLInputElement>('[data-field="required"]')!.checked = initial.required;
      row.querySelector<HTMLInputElement>('[data-field="min"]')!.value = initial.min?.toString() ?? '';
      row.querySelector<HTMLInputElement>('[data-field="max"]')!.value = initial.max?.toString() ?? '';
    }
    fields.append(row);
    return row;
  }

  function update() {
    const names = new Set<string>();
    const lines: string[] = [];
    let error = '';

    [...fields.querySelectorAll<HTMLElement>('.rule-field')].forEach((row, index) => {
      const name = row.querySelector<HTMLInputElement>('[data-field="name"]')!.value.trim();
      const type = row.querySelector<HTMLSelectElement>('[data-field="type"]')!.value;
      const required = row.querySelector<HTMLInputElement>('[data-field="required"]')!.checked;
      const min = row.querySelector<HTMLInputElement>('[data-field="min"]')!;
      const max = row.querySelector<HTMLInputElement>('[data-field="max"]')!;
      const hasSize = sizes.has(type);
      row.querySelector('[data-legend]')!.textContent = t(`Field ${index + 1}`, `字段 ${index + 1}`);
      row.querySelector<HTMLElement>('[data-limits]')!.hidden = !hasSize;

      if (!/^[A-Za-z_][\w-]*(?:\.(?:[\w-]+|\*))*$/.test(name)) {
        error ||= t(`Enter a valid name for field ${index + 1}, e.g. title or items.*.name.`, `请填写字段 ${index + 1} 的有效名称，如 title 或 items.*.name。`);
      } else if (names.has(name)) {
        error ||= t(`The field name ${name} is used more than once.`, `字段名 ${name} 重复。`);
      }
      names.add(name);

      const rules = [required ? 'required' : 'nullable'];
      if (type === 'email') rules.push('string');
      rules.push(type);
      if (hasSize) {
        if (!min.validity.valid || !max.validity.valid) error ||= t('Limits must be integers from 0 to 1,000,000.', '范围需为 0 到 1000000 的整数。');
        if (min.value && max.value && min.valueAsNumber > max.valueAsNumber) error ||= t('The minimum must be at most the maximum.', '最小值不能大于最大值。');
        if (min.value) rules.push(`min:${min.valueAsNumber}`);
        if (max.value) rules.push(`max:${max.valueAsNumber}`);
      }
      lines.push(`    '${name}' => [${rules.map((rule) => `'${rule}'`).join(', ')}],`);
    });

    if (!lines.length) error = t('Add a field to generate rules.', '添加一个字段即可生成规则。');
    publish(error ? '' : `[\n${lines.join('\n')}\n]`, error);
  }

  function usePreset(name: string) {
    fields.replaceChildren();
    for (const row of presets[name]) add(row);
    update();
  }

  workbench.addEventListener('input', update);
  workbench.addEventListener('click', (event) => {
    if (!(event.target instanceof HTMLButtonElement)) return;
    const button = event.target;
    if (button.dataset.preset) usePreset(button.dataset.preset);
    if (button.hasAttribute('data-add-rule')) {
      add().querySelector<HTMLInputElement>('[data-field="name"]')!.focus();
      update();
    }
    if (button.hasAttribute('data-remove-rule')) {
      button.closest('.rule-field')?.remove();
      workbench.querySelector<HTMLButtonElement>('[data-add-rule]')!.focus();
      update();
    }
  });

  usePreset('task');
}

function mountSchedule() {
  const timeOption = workbench.querySelector<HTMLElement>('[data-run-time]')!;
  const dayOption = workbench.querySelector<HTMLElement>('[data-run-day]')!;

  function update() {
    const command = field<HTMLInputElement>('schedule-command').value.trim();
    const frequency = field<HTMLSelectElement>('frequency').value;
    const time = field<HTMLInputElement>('run-time').value;
    const day = field<HTMLSelectElement>('day').value;
    const zone = field<HTMLSelectElement>('timezone').value;
    const timed = frequency === 'daily' || frequency === 'weekly';
    timeOption.hidden = !timed;
    dayOption.hidden = frequency !== 'weekly';

    if (!/^[a-z][\w:-]*$/i.test(command)) {
      publish('', t('Enter an Artisan command name, e.g. reports:daily.', '请输入 Artisan 命令名，例如 reports:daily。'));
      return;
    }
    if (timed && !/^\d{2}:\d{2}$/.test(time)) {
      publish('', t('Select a valid time.', '请选择有效的执行时间。'));
      return;
    }

    const [hours, minutes] = time.split(':').map(Number);
    const variants: Record<string, [method: string, cron: string]> = {
      daily: [`dailyAt('${time}')`, `${minutes} ${hours} * * *`],
      weekly: [`weeklyOn(${day}, '${time}')`, `${minutes} ${hours} * * ${day}`],
      hourly: ['hourly()', '0 * * * *'],
      five: ['everyFiveMinutes()', '*/5 * * * *'],
    };
    const [method, cron] = variants[frequency];
    publish(`use Illuminate\\Support\\Facades\\Schedule;\n\nSchedule::command('${command}')\n    ->${method}\n    ->timezone('${zone}');`, '', cron);
  }

  workbench.addEventListener('input', update);
  update();
}

function inspectEnvironment(text: string) {
  // Consume quoted multi-line values before scanning another assignment.
  const assignments = /^[ \t]*(?:export[ \t]+)?([\w.-]+)[ \t]*=[ \t]*(?:"((?:\\.|[^"\\])*)"|'([^']*)'|([^\r\n]*))/gm;
  const settings = new Map<string, string>();
  const duplicates = new Set<string>();
  for (const [, key, doubleQuoted, singleQuoted, bare] of text.matchAll(assignments)) {
    if (settings.has(key)) duplicates.add(key);
    settings.set(key, doubleQuoted ?? singleQuoted ?? bare.split('#', 1)[0].trim());
  }

  const notes: string[] = [];
  if (duplicates.size) {
    const keys = [...duplicates].slice(0, 8).join(', ');
    notes.push(t(`These settings are defined more than once (${keys}). Check the effective values.`, `发现重复定义（${keys}），请确认实际读取的配置。`));
  }
  if (settings.get('APP_ENV') !== 'production') notes.push(t('Set APP_ENV to production or confirm that your deployment injects it.', '将 APP_ENV 设为 production，或确认部署环境会注入该值。'));
  if (!/^(?:false|\(false\)|0)$/i.test(settings.get('APP_DEBUG') ?? '')) notes.push(t('Set APP_DEBUG to false in production to keep debug information off error pages.', '确认生产的 APP_DEBUG 为 false，避免在出错时显示调试信息。'));

  const key = settings.get('APP_KEY');
  if (!key || key.startsWith('$')) {
    notes.push(t('Confirm that APP_KEY is set at runtime. Keep the existing key for an application already in production.', '确认运行环境已注入 APP_KEY。已有生产环境应保留原密钥。'));
  } else if (key.startsWith('base64:')) {
    try {
      if (![16, 32].includes(atob(key.slice(7)).length)) notes.push(t('The APP_KEY length needs to match the configured cipher.', 'APP_KEY 长度需要与应用配置的加密算法一致。'));
    } catch {
      notes.push(t('The APP_KEY Base64 value is invalid.', 'APP_KEY 的 Base64 格式不完整。'));
    }
  }

  try {
    if (new URL(settings.get('APP_URL') ?? '').protocol !== 'https:') notes.push(t('Use HTTPS for the public APP_URL.', '确认面向用户的 APP_URL 使用 HTTPS。'));
  } catch {
    notes.push(t('Check that APP_URL is the full public URL.', '确认 APP_URL 是对外提供服务的完整 URL。'));
  }
  if (settings.get('QUEUE_CONNECTION') === 'sync') notes.push(t('The sync queue runs jobs in the current request. To process jobs in the background, use a persistent queue and run a worker.', '队列配置为 sync，任务会在当前请求执行。需要后台处理时，选择持久化队列并启动 Worker。'));
  return notes;
}

function mountEnvironment() {
  const input = document.querySelector<HTMLTextAreaElement>('#env-content')!;
  const status = document.querySelector('#env-status')!;
  const findings = document.querySelector('#env-findings')!;
  const pending = t('Paste your settings, then select Check configuration.', '输入配置后点击「检查配置」。');

  function run() {
    findings.replaceChildren();
    if (!input.value.trim()) {
      status.textContent = t('Paste your configuration or try the example.', '请先粘贴配置，或试用示例。');
      input.focus();
      return;
    }

    const notes = inspectEnvironment(input.value);
    status.textContent = notes.length ? t(`${notes.length} ${notes.length === 1 ? 'setting needs' : 'settings need'} attention.`, `发现 ${notes.length} 项需要确认的配置。`) : t('Common checks passed. Verify the effective settings at runtime.', '常见检查通过。请在运行环境中再确认一次。');
    for (const note of notes) {
      const item = document.createElement('li');
      item.textContent = note;
      findings.append(item);
    }
  }

  workbench.querySelector('[data-run-check]')!.addEventListener('click', run);
  workbench.querySelector('[data-env-demo]')!.addEventListener('click', () => {
    input.value = 'APP_ENV=local\nAPP_DEBUG=true\nAPP_KEY=\nAPP_URL=http://localhost\nQUEUE_CONNECTION=sync';
    run();
  });
  workbench.querySelector('[data-env-clear]')!.addEventListener('click', () => {
    input.value = '';
    status.textContent = pending;
    findings.replaceChildren();
    input.focus();
  });
  input.addEventListener('input', () => {
    status.textContent = pending;
    findings.replaceChildren();
  });
}

const tools: Record<string, () => void> = { artisan: mountArtisan, validation: mountValidation, schedule: mountSchedule, 'env-check': mountEnvironment };
tools[workbench.dataset.tool!]?.();
