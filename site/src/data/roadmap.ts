import type { CourseId } from './courses';
import type { IconName } from '../components/Icon.astro';

export const stops = {
  'php-composer': { en: 'First steps', zh: '入门第一站', icon: 'terminal' },
  taskboard: { en: 'Taskboard', zh: '任务看板', icon: 'layers' },
  'rest-api': { en: 'JSON API', zh: 'JSON 接口', icon: 'api' },
  eloquent: { en: 'Eloquent', zh: '数据库性能', icon: 'db' },
  'api-access': { en: 'API access', zh: '认证与权限', icon: 'shield' },
  'async-work': { en: 'Queues', zh: '队列与调度', icon: 'flow' },
  'automated-tests': { en: 'Testing', zh: '自动化测试', icon: 'test' },
  'deploy-operate': { en: 'Deployment', zh: '部署与运维', icon: 'deploy' },
  'reservation-capstone': { en: 'Reservations', zh: '预约服务', icon: 'ticket' },
} as const satisfies Record<CourseId, { en: string; zh: string; icon: IconName }>;

export const skills = {
  beginner: { en: 'New to Laravel', zh: '刚接触 Laravel' },
  builder: { en: 'I can build a form', zh: '会写页面和表单' },
  advanced: { en: 'Experienced', zh: '有项目经验' },
} as const;
export type Skill = keyof typeof skills;

export const tracks = {
  web: {
    en: 'Build a web app', zh: '开发 Web 应用', icon: 'layers',
    goal: { en: 'A working task board, from a PHP script to a tuned database query.', zh: '从 PHP 脚本做起，完成任务看板并调优数据库查询。' },
    stops: ['php-composer', 'taskboard', 'eloquent'], start: { beginner: 0, builder: 1, advanced: 2 },
  },
  api: {
    en: 'Design an API', zh: '设计 API', icon: 'api',
    goal: { en: 'A versioned JSON API with tested permissions and predictable queries.', zh: '做出版本化 JSON 接口，验证访问权限并优化查询。' },
    stops: ['php-composer', 'taskboard', 'rest-api', 'api-access', 'eloquent'], start: { beginner: 0, builder: 2, advanced: 3 },
  },
  ship: {
    en: 'Ship to production', zh: '交付上线', icon: 'deploy',
    goal: { en: 'A reservation service you can test, deploy, and recover.', zh: '交付一个可测试、可部署、可恢复的预约服务。' },
    stops: ['php-composer', 'taskboard', 'async-work', 'automated-tests', 'deploy-operate', 'reservation-capstone'],
    start: { beginner: 0, builder: 2, advanced: 4 },
  },
} as const satisfies Record<string, { en: string; zh: string; icon: IconName; goal: {en:string; zh:string}; stops: readonly CourseId[]; start: Record<Skill, number> }>;
export type Track = keyof typeof tracks;

export const learningStarts = [
  { track:'web', skill:'beginner', courses:['php-composer','taskboard'],
    label:{en:'I’m new to Laravel',zh:'第一次学 Laravel'},
    goal:{en:'Try a route in your browser, then build a page that saves a task.',zh:'先在浏览器里试一条路由，再做一个能保存任务的页面。'},
    next:{url:'/courses/?route=api&level=builder',en:'Start the API path',zh:'开始接口路线'} },
  { track:'api', skill:'builder', courses:['rest-api','api-access'],
    label:{en:'I can build a form',zh:'我会写页面和表单'},
    goal:{en:'Give a task list a JSON API, validate a new task, and test who can edit it.',zh:'给任务清单加一个 JSON 接口，验证新增的数据，再测试谁能修改任务。'},
    next:{url:'/challenges/rest-api/',en:'Try the API challenge',zh:'试试接口闯关'} },
] as const satisfies readonly { track:Track; skill:Skill; courses:readonly CourseId[]; label:{en:string;zh:string}; goal:{en:string;zh:string}; next:{url:string;en:string;zh:string} }[];

export function learningStart(track:Track, skill:Skill) {
  return learningStarts.find(start => start.track === track && start.skill === skill);
}
export const starterTasks:readonly string[] = ['laravel-request-lab','first-project','form-validation'];
export function belongsToRoute(track:Track, skill:Skill, lesson:string) {
  return track !== 'web' || skill !== 'beginner' || starterTasks.includes(lesson);
}
export function primaryPathFor(course:CourseId, lesson:string) {
  return learningStarts.find(path => path.courses.some(id => id === course) && belongsToRoute(path.track,path.skill,lesson));
}
export function isTrack(value: string | null): value is Track { return Object.hasOwn(tracks, value ?? ''); }
export function isSkill(value: string | null): value is Skill { return Object.hasOwn(skills, value ?? ''); }
export function itinerary(track: Track, skill: Skill): CourseId[] {
  const start = learningStart(track, skill);
  if (start) return [...start.courses];
  return tracks[track].stops.slice(tracks[track].start[skill]);
}

export function stationLayout(count: number, columns: number) {
  const cols = count === 4 ? Math.min(2, columns) : Math.min(count, columns);
  const rows = Math.ceil(count / cols);
  return Array.from({length: count}, (_, i) => {
    const row = Math.floor(i / cols);
    const col = row % 2 ? cols - 1 - (i % cols) : i % cols;
    const height = cols === 1 ? .42 : [.49, .23, .49][col];
    return { x: 100 * (col + .5) / cols, y: 100 * (row + height) / rows };
  });
}

export function trailPoints(coords: { x: number; y: number }[]) {
  if (!coords.length) return '';
  const points = [coords[0]];
  for (let i = 1; i < coords.length; i++) {
    const previous = coords[i - 1], next = coords[i];
    if (previous.x !== next.x && previous.y !== next.y) {
      const turn = (previous.x + next.x) / 2;
      points.push({ x:turn, y:previous.y }, { x:turn, y:next.y });
    }
    points.push(next);
  }
  return points.map(p => p.x + ',' + p.y).join(' ');
}
