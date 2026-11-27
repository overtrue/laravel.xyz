import { acknowledge, activeAccount, actorKey, canStore, detach, install, pending, snapshot, type Account } from './activity';

export class AccountError extends Error {
  constructor(public status:number, code:string, public account?:Account) { super(code); }
}
export async function api<T>(path:string, method = 'GET', data?:unknown):Promise<T> {
  const response = await fetch('/api/' + path,{
    method,mode:'same-origin',credentials:'same-origin',cache:'no-store',
    signal: typeof AbortSignal.timeout === 'function' ? AbortSignal.timeout(20000) : undefined,
    ...(data === undefined ? {} : {headers:{'Content-Type':'application/json'},body:JSON.stringify(data)}),
  });
  if (!response.headers.get('content-type')?.includes('application/json')) throw new AccountError(503,'unavailable');
  const result = await response.json();
  if (!response.ok) throw new AccountError(response.status,result.error,result.account);
  return result;
}

let state: 'local' | 'syncing' | 'synced' | 'offline' | 'expired' = 'local';
export function syncState() { return state; }
function report(next:typeof state) {
  state = next;
  window.dispatchEvent(new Event('orbit:sync-status'));
}
export function connect(account:Account) {
  const old = activeAccount();
  if (old && old !== account.id) detach(old,false);
  install(account,true);
  window.dispatchEvent(new Event('orbit:activity'));
  report('synced');
}
export function disconnect(id:string, discard = true) {
  detach(id,discard); report(discard ? 'local' : 'expired');
}

async function exchange(discover:boolean) {
  const id = activeAccount();
  if ((!id && !discover) || !canStore()) return;
  if (id) report('syncing');
  try {
    if (!id || !pending(id).size) {
      const {account} = await api<{account:Account|null}>('account');
      if (activeAccount() !== id) return;
      if (!account) { if (id) disconnect(id,false); else report('local'); return; }
      connect(account);
      if (!id || account.id !== id) { if (pending(account.id).size) schedule(); return; }
    }
    for (let attempt=0; attempt<5 && activeAccount() === id; attempt++) {
      const edits = pending(id);
      if (!edits.size) { report('synced'); return; }
      const changes = Object.fromEntries([...edits].map(([key,edit]) => [key,edit.value]));
      try {
        const {account}: {account:Account} = await api<{account:Account}>('progress','PATCH',{account:id,revision:snapshot(id).revision,changes});
        if (activeAccount() !== id || account.id !== id) return;
        install(account);
        acknowledge(id,edits);
        window.dispatchEvent(new Event('orbit:activity'));
      } catch (error) {
        if (error instanceof AccountError && error.message === 'conflict' && error.account?.id === id && activeAccount() === id) {
          const latest = error.account;
          install(latest);
          // A successful write can lose its response. Skip repeating changes already present.
          acknowledge(id,new Map([...edits].filter(([key,edit]) => (latest.values[key] ?? null) === edit.value)));
          window.dispatchEvent(new Event('orbit:activity'));
          continue;
        }
        throw error;
      }
    }
    if (activeAccount() === id && pending(id).size) schedule(); else report('synced');
  } catch (error) {
    if (activeAccount() !== id) return;
    if (error instanceof AccountError && id && (error.status === 401 || error.message === 'different_account')) {
      disconnect(id,false);
    } else report('offline');
  }
}
let flight: Promise<void> | undefined, timer:number, lastPull = 0;
export function synchronize(discover = false) {
  if (!flight) {
    lastPull = Date.now();
    const id = activeAccount();
    const operation = id && navigator.locks
      ? navigator.locks.request('orbit-sync:' + id,() => activeAccount() === id ? exchange(discover) : undefined)
      : exchange(discover);
    flight = operation.then(() => undefined, () => report('offline')).finally(() => { flight = undefined; });
  }
  return flight;
}
function schedule() {
  window.clearTimeout(timer);
  timer = window.setTimeout(() => {
    if (flight) { schedule(); return; }
    void synchronize();
  },220);
}
window.addEventListener('orbit:pending',schedule);
window.addEventListener('online',() => { if (activeAccount()) schedule(); });
window.addEventListener('storage',event => {
  if (event.key === actorKey || event.key === null) { window.dispatchEvent(new Event('orbit:activity')); report(activeAccount() ? 'synced' : 'local'); }
  if (event.key?.startsWith('orbit-cloud:') && event.key.includes(':change:') && activeAccount() && event.newValue) schedule();
});
document.addEventListener('visibilitychange',() => {
  if (document.visibilityState === 'visible' && activeAccount() && Date.now()-lastPull > 30000) schedule();
});
window.addEventListener('pageshow',event => { if (event.persisted && activeAccount()) schedule(); });
if (activeAccount()) void synchronize();
