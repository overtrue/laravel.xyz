import { activeAccount } from './activity';
import { bestScore, keepBest, nextStop, type Stop } from './quiz-progress';
import { getLocale, localize } from '../lib/locale';
import { passCount, points, questionCount } from '../lib/quiz-score';

const {t,href} = localize(getLocale(location.pathname));
type Draft = { index:number; answers:number[] };
const fresh = ():Draft => ({index:0, answers:[]});
function restore(key:string):Draft | undefined {
  try {
    const value = JSON.parse(sessionStorage.getItem(key) ?? 'null');
    if (value && Number.isInteger(value.index) && value.index >= 0 && value.index <= questionCount &&
        Array.isArray(value.answers) && value.answers.length <= questionCount &&
        [value.index,value.index+1].includes(value.answers.length) &&
        value.answers.every((a:unknown) => a === 0 || a === 1 || a === 2)) return value;
  } catch { /* An unavailable tab store still permits a round. */ }
}
for (const root of document.querySelectorAll<HTMLElement>('[data-quiz]')) {
  const id = root.dataset.quiz!, key = root.dataset.key!;
  const stops:Stop[] = JSON.parse(root.dataset.stops!);
  const find = <T extends HTMLElement = HTMLElement>(selector:string) => root.querySelector<T>(selector)!;
  const stages = [...root.querySelectorAll<HTMLElement>('[data-question]')];
  const result = find('[data-result-screen]'), warning = find('[data-save-warning]');
  const owner = () => 'orbit-quiz:' + (activeAccount() ?? 'guest') + ':v1:' + id;
  let store = owner(), draft = restore(store) ?? fresh();
  const right = (index:number) => draft.answers[index] === Number(key[index]);
  const score = () => draft.answers.filter((_,i) => right(i)).length;
  function remember() {
    try { sessionStorage.setItem(store,JSON.stringify(draft)); } catch { /* The active round remains usable. */ }
  }
  function shuffleOptions() {
    for (const field of root.querySelectorAll('fieldset')) {
      const labels = [...field.querySelectorAll('label')];
      for (let i=labels.length-1; i>0; i--) {
        const j = Math.floor(Math.random()*(i+1));
        [labels[i],labels[j]] = [labels[j],labels[i]];
      }
      field.append(...labels);
    }
  }
  function refreshRecord() {
    const best = bestScore(id,key);
    find('[data-personal-best]').textContent = best === null ? '—' : points(best) + ' / 100';
    if (draft.index !== questionCount) return;
    const link = find<HTMLAnchorElement>('[data-next-round]');
    link.hidden = score() < passCount;
    if (!link.hidden) {
      const next = nextStop(stops,id);
      link.href = next ? href('/challenges/'+next.id+'/') : href('/challenges/');
      link.querySelector('span')!.textContent = next ? t('Next round · ','下一关 · ') + next.title : t('View challenge trail','查看闯关全程');
    }
  }
  function render(focus = false) {
    const hits = score();
    find('[data-round-score]').textContent = String(points(hits));
    const finished = draft.index === stages.length;
    result.hidden = !finished;
    for (const [i,stage] of stages.entries()) {
      const answered = i < draft.answers.length;
      find('[data-signal="'+i+'"]').dataset.state = answered ? (right(i) ? 'correct' : 'wrong') : i === draft.index ? 'active' : 'waiting';
      stage.hidden = draft.index !== i;
      if (stage.hidden) continue;
      const hint = stage.querySelector('details');
      if (hint) { hint.hidden = answered; if (answered) hint.open = false; }
      const field = stage.querySelector('fieldset')!;
      field.disabled = answered;
      for (const radio of field.querySelectorAll('input')) {
        const value = Number(radio.value), label = radio.closest('label')!;
        radio.checked = answered && draft.answers[i] === value;
        const state = answered && value === Number(key[i]) ? 'correct' : radio.checked ? 'wrong' : '';
        label.dataset.choice = state;
        label.querySelector('small')!.textContent = state === 'correct' ? t('Correct','正确答案') : state === 'wrong' ? t('Your choice','你的选择') : '';
      }
      const submit = stage.querySelector<HTMLButtonElement>('[type=submit]')!;
      submit.hidden = answered; submit.disabled = true;
      const feedback = stage.querySelector<HTMLElement>('[data-explanation]')!;
      feedback.hidden = !answered;
      stage.querySelector<HTMLElement>('[data-advance]')!.hidden = !answered;
      if (answered) {
        feedback.dataset.correct = String(right(i));
        feedback.querySelector('h3')!.textContent = right(i) ? t('Correct · +'+points(1)+' points','答对了 · +'+points(1)+' 分') : t('Why this answer missed','错题解析');
      }
      if (focus) (answered ? feedback.querySelector('h3') : stage.querySelector('h2'))!.focus();
    }
    if (finished) {
      const passed = hits >= passCount;
      result.dataset.passed = String(passed);
      const heading = find('#result-title');
      heading.textContent = hits === questionCount ? t('A perfect round.','满分通关！') : passed ? t('Round cleared.','闯关成功！') : t('Try another round.','再试一轮。');
      const detail = t(hits+' of '+questionCount+' correct · '+points(hits)+'/100.', '答对 '+hits+' / '+questionCount+' 题，本轮 '+points(hits)+' 分。');
      find('[data-result-detail]').textContent = detail + (passed ? '' : t(' Get '+(passCount-hits)+' more right to clear this round.','再答对 '+(passCount-hits)+' 题即可过关。'));
      find('[data-review]').hidden = hits === questionCount;
      for (const item of result.querySelectorAll<HTMLElement>('[data-review-for]')) {
        item.hidden = item.dataset.reviewFor!.split(' ').every(n => right(Number(n)));
      }
      if (focus) heading.focus();
    }
    refreshRecord();
  }
  async function saveRound() {
    if (draft.answers.length !== questionCount) return;
    const scope = store, sheet = 'v1:' + draft.answers.join('');
    const saved = await keepBest(id,key,sheet).catch(() => false);
    if (scope === store) { warning.hidden = saved; refreshRecord(); }
  }
  for (const [index,stage] of stages.entries()) {
    const form = stage.querySelector('form')!;
    const button = form.querySelector('button')!;
    form.addEventListener('change',() => { button.disabled = !form.querySelector('input:checked'); });
    form.addEventListener('submit',event => {
      event.preventDefault();
      const choice = form.querySelector<HTMLInputElement>('input:checked');
      if (!choice || draft.index !== index || draft.answers.length !== index) return;
      draft.answers.push(Number(choice.value)); remember(); render(true);
      if (draft.answers.length === questionCount) void saveRound();
    });
    stage.querySelector('[data-advance]')!.addEventListener('click',() => {
      if (draft.index !== index || draft.answers.length !== index+1) return;
      draft.index++; remember(); render(true);
    });
  }
  find('[data-replay]').addEventListener('click',() => {
    draft = fresh(); warning.hidden = true; shuffleOptions(); remember(); render(true);
  });
  function sync() {
    const next = owner();
    if (next !== store) {
      store = next; draft = restore(store) ?? fresh(); warning.hidden = true; shuffleOptions(); render(); void saveRound();
    } else refreshRecord();
  }
  shuffleOptions(); find('[data-play]').hidden = false; render(); void saveRound();
  window.addEventListener('pageshow',event => {
    sync();
    // A visit in the other language may have advanced this tab while the page was cached.
    const saved = event.persisted && restore(store);
    if (saved) { draft = saved; render(); void saveRound(); }
  });
  window.addEventListener('storage',sync); window.addEventListener('orbit:activity',sync);
}
