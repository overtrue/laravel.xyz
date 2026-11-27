import { correctCount } from '../lib/quiz-score';

// Guest keys retain the site's original format. Each account has a separate cache and pending edits.
const guest = 'artisan-orbit:';
const root = 'orbit-cloud:';
export const actorKey = root + 'active';
const base = (id:string) => root + id + ':';
const pendingPrefix = (id:string) => base(id) + 'change:';
const ackKey = (id:string,field:string) => base(id) + 'ack:' + field;
export type Values = Record<string,string>;
export type Account = { id:string; revision:number; values:Values };
export type Edit = { value:string | null; token:string };

export function activeAccount() {
  try { return localStorage.getItem(actorKey); } catch { return null; }
}
export function canStore() {
  try { const key = root + 'probe'; localStorage.setItem(key,'1'); localStorage.removeItem(key); return true; } catch { return false; }
}
let lastRaw: string | null = null, cached: Account | undefined;
export function snapshot(id:string): Account {
  const raw = localStorage.getItem(base(id) + 'state');
  if (raw && raw === lastRaw && cached?.id === id) return cached;
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      if (parsed?.id === id && Number.isSafeInteger(parsed.revision) && parsed.values && typeof parsed.values === 'object') {
        const account:Account = parsed; cached = account; lastRaw = raw; return account;
      }
    } catch { /* Restore an unreadable cache from the cloud. */ }
  }
  return {id,revision:0,values:{}};
}
export function install(account:Account, activate = false) {
  const old = snapshot(account.id);
  if (!localStorage.getItem(base(account.id) + 'state') || account.revision >= old.revision) {
    const raw = JSON.stringify(account);
    if (raw !== localStorage.getItem(base(account.id) + 'state')) localStorage.setItem(base(account.id) + 'state',raw);
  }
  if (activate) localStorage.setItem(actorKey,account.id);
}
export function pending(id:string): Map<string,Edit> {
  const items = new Map<string,Edit>(), prefix = pendingPrefix(id);
  for (let i=0; i<localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key?.startsWith(prefix)) {
      const raw = localStorage.getItem(key);
      if (raw) {
        const field = key.slice(prefix.length), edit:Edit = JSON.parse(raw);
        if (edit.token !== localStorage.getItem(ackKey(id,field))) items.set(field,edit);
      }
    }
  }
  return items;
}
export function acknowledge(id:string, edits:Map<string,Edit>) {
  // A response acknowledges its own edit without deleting another tab's newer write.
  for (const [field,edit] of edits) localStorage.setItem(ackKey(id,field),edit.token);
}
export function detach(id:string, discard:boolean) {
  if (activeAccount() === id) localStorage.removeItem(actorKey);
  const keep = discard ? new Set<string>() : new Set([...pending(id).keys()].map(key => pendingPrefix(id) + key));
  const keys = Object.keys(localStorage).filter(key => key.startsWith(base(id)) && !keep.has(key));
  for (const key of keys) localStorage.removeItem(key);
  try {
    for (const key of Object.keys(sessionStorage)) if (key.startsWith('orbit-quiz:' + id + ':')) sessionStorage.removeItem(key);
  } catch { /* Tab storage is optional. */ }
  cached = undefined; lastRaw = null;
  window.dispatchEvent(new Event('orbit:activity'));
}
export function readValue(key:string) {
  try {
    const id = activeAccount();
    if (!id) return localStorage.getItem(guest + key);
    const raw = localStorage.getItem(pendingPrefix(id) + key);
    if (raw) {
      const edit:Edit = JSON.parse(raw);
      if (edit.token !== localStorage.getItem(ackKey(id,key))) return edit.value;
    }
    return snapshot(id).values[key] ?? null;
  } catch { return null; }
}
export function writeValue(key:string, value:string | null):boolean {
  try {
    const id = activeAccount();
    if (!id) {
      if (value === null) localStorage.removeItem(guest + key);
      else localStorage.setItem(guest + key,value);
    } else if (readValue(key) !== value) {
      localStorage.setItem(pendingPrefix(id) + key,JSON.stringify({value,token:crypto.randomUUID()} satisfies Edit));
      window.dispatchEvent(new Event('orbit:pending'));
    }
    return true;
  } catch { return false; }
}
export function accountReads(id:string) {
  const values = {...snapshot(id).values};
  for (const [key,edit] of pending(id)) {
    if (edit.value === null) delete values[key]; else values[key] = edit.value;
  }
  return new Set(Object.keys(values).filter(key => key.startsWith('read:')).map(key => key.slice(5)));
}

// Only known learning and collection fields can leave the browser.
export async function guestProgress(merge = false):Promise<Values> {
  const response = await fetch('/account-catalog.json');
  if (!response.ok) throw new Error('catalog');
  const catalog: {lessons:string[];bookmarks:string[];stamps:string[];routes:string[];quizzes?:Record<string,string>} = await response.json();
  const values:Values = {};
  let read:unknown = [];
  try { read = JSON.parse(localStorage.getItem('fieldbook-read-guides') ?? '[]'); } catch { /* Other guest progress is still usable. */ }
  for (const id of catalog.lessons) {
    if (localStorage.getItem(guest + 'task:' + id) === '1') values['task:' + id] = '1';
    if (Array.isArray(read) && read.includes(id)) values['read:' + id] = '1';
  }
  for (const id of catalog.stamps) if (localStorage.getItem(guest + 'stamp:' + id) === '1') values['stamp:' + id] = '1';
  for (const key of catalog.bookmarks) {
    const time = localStorage.getItem(guest + 'saved:' + key);
    if (time && /^[1-9]\d{0,14}$/.test(time)) values['saved:' + key] = time;
  }
  const route = localStorage.getItem(guest + 'route'), last = localStorage.getItem(guest + 'last-lesson');
  if (route && catalog.routes.includes(route)) values.route = route;
  if (last && catalog.lessons.includes(last)) values['last-lesson'] = last;
  if (merge) for (const key of Object.keys(values)) if (readValue(key) !== null) delete values[key];
  for (const [id, answers] of Object.entries(catalog.quizzes ?? {})) {
    const key = 'quiz:' + id;
    const sheet = localStorage.getItem(guest + key);
    const hits = correctCount(sheet, answers);
    const previous = merge ? correctCount(readValue(key), answers) : null;
    if (sheet && hits !== null && hits > (previous ?? -1)) values[key] = sheet;
  }
  return values;
}
