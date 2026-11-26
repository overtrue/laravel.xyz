import type { Locale } from '../lib/locale';

const copy = (en: string, zh: string) => ({ en, zh });
const challenges = {
  blade: {
    name: copy('View finder', '视图寻踪'), category: 'Blade', file: 'routes/web.php', output:'resources/views/tasks/index.blade.php',
    code: "return view('tasks.index');",
    question: copy('Which template will Laravel open?', 'Laravel 会打开哪个模板？'),
    answers: [copy('tasks.blade.php','tasks.blade.php'), copy('tasks/index.blade.php','tasks/index.blade.php'), copy('index/tasks.blade.php','index/tasks.blade.php')],
    feedback: [copy('The view name has two parts. The first one is a folder.', '视图名有两段，第一段指向文件夹。'), copy('The dot becomes a slash inside resources/views.', '点号对应目录分隔符，模板位于 resources/views 下。'), copy('Read the view name from left to right. It starts in tasks/.', '按从左到右的顺序找，先进入 tasks/ 文件夹。')],
    correct: 1, color: 'violet', home: '/', lesson: 'first-project',
  },
  artisan: {
    name: copy('Model maker', '模型工匠'), category: 'Artisan', file: 'Terminal', output:'database/migrations/…_create_tasks_table.php',
    code: 'php artisan make:model Task -m',
    question: copy('What does the -m flag add?', '-m 会额外生成什么？'),
    answers: [copy('A factory','模型工厂'), copy('A controller','控制器'), copy('A migration','迁移文件')],
    feedback: [copy('A factory uses the -f flag.', '模型工厂对应 -f。'), copy('A controller uses the -c flag.', '控制器对应 -c。'), copy('Laravel creates the Task model and a migration for its table.', '除了 Task 模型，Laravel 还会为它的数据表生成迁移文件。')],
    correct: 2, color: 'coral', home: '/tools/', lesson: 'first-project',
  },
  validation: {
    name: copy('API detective', '接口侦探'), category: 'JSON API', file: 'StoreTaskRequest.php', output:'HTTP 422 · errors.title',
    code: "'title' => ['required', 'string']",
    question: copy('A request expects JSON but omits title. Which status does Laravel return?', '请求期望 JSON 响应，却漏传了 title。Laravel 会返回什么状态码？'),
    answers: [copy('422','422'), copy('401','401'), copy('201','201')],
    feedback: [copy('Validation failed. The JSON response includes errors for title.', '验证失败，JSON 响应的 errors 中会列出 title 的错误。'), copy('401 is for an unauthenticated request. Here the missing field is the problem.', '401 表示未认证。这次请求的问题是缺少字段。'), copy('201 means a resource was created. Validation runs before that.', '201 表示资源已创建。字段验证发生在创建之前。')],
    correct: 0, color: 'blue', home: '/learn/api-validated-writes/', lesson: 'api-validated-writes',
  },
  queues: {
    name: copy('Queue keeper', '队列守护者'), category: 'Queues', file: 'OrderService.php', output:'ShipOrder::dispatch($order)->afterCommit();',
    code: 'ShipOrder::dispatch($order);',
    question: copy('Which method waits for the database transaction to commit?', '怎样让任务等到数据库事务提交后再入队？'),
    answers: [copy('onQueue()','onQueue()'), copy('afterCommit()','afterCommit()'), copy('delay()','delay()')],
    feedback: [copy('onQueue() chooses a queue, regardless of transaction timing.', 'onQueue() 选择队列，不决定事务提交时机。'), copy('afterCommit() dispatches after commit. A rollback discards the pending job.', 'afterCommit() 会等事务提交后再派发，回滚时会丢弃待派发任务。'), copy('A fixed delay cannot tell whether a transaction has committed.', '固定延迟无法判断事务是否已经提交。')],
    correct: 1, color: 'mint', home: '/ecosystem/', lesson: 'dispatch-after-commit',
  },
} as const;
export type ChallengeId = keyof typeof challenges;
export const challengeIds = Object.keys(challenges) as ChallengeId[];

export function getChallenge(id: ChallengeId, locale: Locale) {
  const challenge = challenges[id];
  return { ...challenge, id, name: challenge.name[locale], question: challenge.question[locale],
    answers: challenge.answers.map(answer => answer[locale]), feedback: challenge.feedback.map(answer => answer[locale]) };
}
