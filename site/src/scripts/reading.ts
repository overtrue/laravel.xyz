import { activeAccount, accountReads, writeValue } from './activity';
const key = 'fieldbook-read-guides';

export function getReadGuides(): Set<string> | undefined {
  try {
    const id = activeAccount();
    if (id) return accountReads(id);
    const stored:unknown = JSON.parse(localStorage.getItem(key) ?? '[]');
    return new Set(Array.isArray(stored) ? stored.filter((item):item is string => typeof item === 'string') : []);
  } catch { return undefined; }
}
export function markRead(slug:string, done:boolean) {
  if (activeAccount()) return writeValue('read:' + slug,done ? '1' : null);
  const set = getReadGuides();
  if (!set) return false;
  if (done) set.add(slug); else set.delete(slug);
  try { localStorage.setItem(key,JSON.stringify([...set])); return true; } catch { return false; }
}
