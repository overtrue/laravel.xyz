import { getLocale, localize } from '../lib/locale';
import { getChoice, isDone, saveChoice } from './learning';
import { isTrack, isSkill, tracks, itinerary, learningStart, belongsToRoute, stationLayout, trailPoints, type Track, type Skill } from '../data/roadmap';
import { coursePath, type CourseId } from '../data/courses';

const { locale, t, href } = localize(getLocale(location.pathname));
const root = document.querySelector<HTMLElement>('[data-roadmap]')!;
const query = <T extends Element = HTMLElement>(selector: string) => root.querySelector<T>(selector)!;
const skillSelect = query<HTMLSelectElement>('#skill');
const settings = query<HTMLDetailsElement>('[data-route-settings]');
const compact = matchMedia('(max-width:760px)');
function fitSettings() { settings.open = !compact.matches; }
fitSettings();
compact.addEventListener('change',fitSettings);
const radios = [...root.querySelectorAll<HTMLInputElement>('[name="track"]')];
const dots = [...root.querySelectorAll<HTMLAnchorElement>('[data-stop]')];
const scenery = [...root.querySelectorAll<HTMLElement>('[data-scenery]')];
const panels = [...root.querySelectorAll<HTMLElement>('[data-panel]')];
const allTasks = new Map(panels.map(panel => [panel.dataset.panel!, [...panel.querySelectorAll<HTMLAnchorElement>('[data-task]')]]));
let tasks = allTasks;
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let lastPath = '';
let drawings: Animation[] = [];
let track: Track;
let skill: Skill;
let selected: CourseId;
let currentStops: CourseId[];

function render() {
  const route = tracks[track];
  root.dataset.track = track;
  scenery.forEach(scene => { scene.hidden = scene.dataset.scenery !== track; });
  const routeTasks = currentStops.flatMap(id => tasks.get(id)!);
  const remaining = routeTasks.filter(a => !isDone(a.dataset.task!));
  const done = routeTasks.length - remaining.length;
  const layouts = {wide:stationLayout(currentStops.length,3), narrow:stationLayout(currentStops.length,2)};
  skillSelect.value = skill;
  radios.forEach(radio => { radio.checked = radio.value === track; });
  query('#route-name').textContent = route[locale];
  query('[data-selected-path]').textContent = route[locale];
  query('[data-route-goal]').textContent = (learningStart(track,skill)?.goal ?? route.goal)[locale];
  query('[data-station-count]').textContent = t(currentStops.length + (currentStops.length === 1 ? ' stop' : ' stops'), currentStops.length + ' 站');
  const firstIncomplete = currentStops.findIndex(id => tasks.get(id)!.some(a => !isDone(a.dataset.task!)));
  const path = track + '/' + skill;
  const changed = path !== lastPath;
  if (changed) { drawings.forEach(animation => animation.cancel()); drawings = []; }
  for (const size of ['wide','narrow'] as const) {
    const coords = layouts[size];
    const wire = query<SVGGElement>('[data-wire="' + size + '"]');
    const line = wire.querySelector<SVGPolylineElement>('[data-trail]')!;
    line.setAttribute('points',trailPoints(coords));
    wire.querySelector('[data-traveled]')!.setAttribute('points',trailPoints(firstIncomplete === -1 ? coords : coords.slice(0,firstIncomplete + 1)));
    query('#route-map').style.setProperty('--rows-' + size,String(Math.ceil(coords.length / (size === 'wide' ? 3 : 2))));
    if (lastPath && changed && coords.length > 1 && !reducedMotion.matches && line.animate) {
      drawings.push(line.animate([{strokeDasharray:'100 100',strokeDashoffset:'100'}, {strokeDasharray:'100 100',strokeDashoffset:'0'}],{duration:530,easing:'ease-out'}));
    }
  }
  lastPath = path;
  dots.forEach(dot => {
    const id = dot.dataset.stop as CourseId;
    const index = currentStops.indexOf(id);
    dot.hidden = index < 0;
    dot.toggleAttribute('data-finish', id === currentStops.at(-1));
    if (dot.hidden) {
      dot.removeAttribute('aria-current');
      dot.removeAttribute('data-done');
      return;
    }
    for (const size of ['wide','narrow'] as const) {
      dot.style.setProperty('--' + size + '-x', layouts[size][index].x + '%');
      dot.style.setProperty('--' + size + '-y', layouts[size][index].y + '%');
    }
    const completed = tasks.get(id)!.every(task => isDone(task.dataset.task!));
    dot.toggleAttribute('data-done', completed);
    if (id === selected) dot.setAttribute('aria-current','step'); else dot.removeAttribute('aria-current');
    dot.setAttribute('aria-label', dot.querySelector('.stop-title')!.textContent + (completed ? t(', completed','，已完成') : ''));
    const destination = new URL(location.pathname,location.origin);
    destination.search = new URLSearchParams({route:track,level:skill,station:id}).toString();
    destination.hash = 'missions';
    dot.href = destination.href;
  });
  for (const panel of panels) {
    panel.hidden = panel.dataset.panel !== selected;
    if (panel.hidden) continue;
    const number = String(currentStops.indexOf(selected) + 1).padStart(2,'0');
    panel.querySelector('[data-stop-index]')!.textContent = t('Stop ' + number, '第 ' + number + ' 站');
    for (const a of tasks.get(selected)!) {
      const completed = isDone(a.dataset.task!);
      a.toggleAttribute('data-done', completed);
      a.querySelector('.task-state')!.setAttribute('aria-label',completed ? t('Completed', '已完成') : t('Task ' + a.querySelector('.task-state span')!.textContent, '任务 ' + a.querySelector('.task-state span')!.textContent));
    }
  }
  const progress = query<HTMLProgressElement>('#route-progress');
  progress.max = routeTasks.length;
  progress.value = done;
  query('[data-progress-label]').textContent = done + ' / ' + routeTasks.length;
  const link = query<HTMLAnchorElement>('[data-next-task]');
  const selectedTasks = tasks.get(selected)!;
  const nextHere = selectedTasks.find(task => !isDone(task.dataset.task!));
  const selectedIndex = currentStops.indexOf(selected);
  const nextStop = currentStops.slice(selectedIndex + 1).flatMap(id => tasks.get(id)!).find(a => !isDone(a.dataset.task!));
  const next = nextHere ?? nextStop ?? remaining[0];
  const finishedPath = !next ? learningStart(track,skill) : undefined;
  link.hidden = !next && !finishedPath;
  if (next) {
    link.href = next.href;
    link.firstChild!.textContent = done ? t('Continue ', '继续学习 ') : t('Start lesson ', '开始学习 ');
  } else if (finishedPath) {
    link.href = href(finishedPath.next.url);
    link.firstChild!.textContent = finishedPath.next[locale]+' ';
  }
  query('[data-resume-label]').textContent = next ? next.querySelector('strong')!.textContent : t('All '+routeTasks.length+' tasks complete','已完成全部 '+routeTasks.length+' 个任务');
  query('[data-next-label]').textContent = next ? t('Your next lesson','你的下一课') : t('Path complete','路线已完成');
}

function load(remember = false) {
  const params = new URLSearchParams(location.search);
  const saved = getChoice();
  const requestedTrack = params.get('route'), requestedSkill = params.get('level');
  track = isTrack(requestedTrack) ? requestedTrack : saved.track;
  skill = isSkill(requestedSkill) ? requestedSkill : saved.skill;
  currentStops = itinerary(track, skill);
  const stop = params.get('station') as CourseId | null;
  if (stop && !currentStops.includes(stop) && tracks[track].stops.slice(tracks[track].start[skill]).some(id => id === stop)) {
    location.replace(href(coursePath(stop)));
    return;
  }
  tasks = new Map([...allTasks].map(([id, links]) => [id, links.filter(link => {
    const included = belongsToRoute(track,skill,link.dataset.task!);
    link.closest('li')!.hidden = !included;
    return included;
  })]));
  selected = stop && currentStops.includes(stop) ? stop : currentStops.find(id => tasks.get(id)!.some(task => !isDone(task.dataset.task!))) ?? currentStops[0];
  if (remember && (isTrack(requestedTrack) || isSkill(requestedSkill))) saveChoice(track, skill);
  render();
  syncLanguage();
}
function syncLanguage() {
  const link = document.querySelector<HTMLAnchorElement>('.language-link');
  if (link) { link.search = location.search; link.hash = location.hash; }
}
function choose(nextTrack: Track, nextSkill: Skill, stop?: CourseId) {
  const url = new URL(location.href);
  url.searchParams.set('route',nextTrack);
  url.searchParams.set('level',nextSkill);
  if (stop) url.searchParams.set('station',stop); else url.searchParams.delete('station');
  history.replaceState(null,'',url);
  load(true);
}
skillSelect.addEventListener('change', () => { if (isSkill(skillSelect.value)) choose(track,skillSelect.value); });
radios.forEach(r => r.addEventListener('change', () => { if (r.checked && isTrack(r.value)) choose(r.value,skill); }));
dots.forEach(dot => dot.addEventListener('click', event => {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  choose(track, skill, dot.dataset.stop as CourseId);
  const heading = query<HTMLElement>('[data-panel]:not([hidden]) h2');
  heading.tabIndex = -1;
  heading.focus({preventScroll:true});
  heading.scrollIntoView({block:'nearest'});
}));
function showLevel() {
  const level = document.getElementById(location.hash.slice(1));
  if (level instanceof HTMLDetailsElement) level.open = true;
}
load(true);
showLevel();
query<HTMLFieldSetElement>('[data-route-controls]').disabled = false;
root.dataset.ready = '';
reducedMotion.addEventListener('change', () => { if (reducedMotion.matches) drawings.forEach(animation => animation.cancel()); });
window.addEventListener('pageshow',() => load());
window.addEventListener('storage', () => load()); window.addEventListener('orbit:activity',() => load());
window.addEventListener('popstate',() => load());
window.addEventListener('hashchange',showLevel);
