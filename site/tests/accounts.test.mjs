import assert from 'node:assert/strict';
import test from 'node:test';
import { chromium } from 'playwright-core';
import { finishRound, foundation } from './quiz-round.mjs';

const origin = process.env.ORBIT_TEST_URL || 'http://localhost:4379';
const sponsor = 'https://github.com/sponsors/overtrue';

test('passkeys, guest import, two-device sync, recovery and sponsorship', {timeout:origin.startsWith('https:') ? 300000 : 180000}, async () => {
  const browser = await chromium.launch({channel:process.env.ORBIT_CHROME_CHANNEL || 'chrome'});
  const devices = [];
  let ownId;
  async function device(locale = '') {
    const context = await browser.newContext({viewport:{width:390,height:844},reducedMotion:'reduce'});
    const page = await context.newPage();
    page.setDefaultTimeout(15000);
    page.setDefaultNavigationTimeout(45000);
    const cdp = await context.newCDPSession(page);
    await cdp.send('WebAuthn.enable');
    const {authenticatorId} = await cdp.send('WebAuthn.addVirtualAuthenticator',{options:{
      protocol:'ctap2',transport:'internal',hasResidentKey:true,hasUserVerification:true,isUserVerified:true,automaticPresenceSimulation:true,
    }});
    const result = {context,page,cdp,authenticatorId,open: (path) => page.goto(origin+locale+path,{waitUntil:'domcontentloaded'})};
    devices.push(result);
    return result;
  }
  const profile = page => page.evaluate(async () => (await (await fetch('/api/account')).json()).account);
  async function waitForCloud(page,predicate) {
    const limit = Date.now() + 15000;
    do {
      const account = await profile(page);
      if (account && predicate(account.values)) return;
      await new Promise(resolve => setTimeout(resolve,160));
    } while (Date.now() < limit);
    assert.fail('Cloud progress did not reach the expected state');
  }
  const hasCloudValue = (page,key,expected) => waitForCloud(page,values=>(values[key] ?? null) === expected);
  async function pressAuth(page,mode,click) {
    const done = page.waitForResponse(r=>new URL(r.url()).pathname === '/api/auth/'+mode+'/finish');
    await click();
    const response = await done;
    const result = await response.json();
    assert.equal(response.status(),200,result.error || 'passkey ceremony');
    await page.locator('[data-member-controls]').waitFor();
    return result;
  }
  async function gift(page) {
    for (const href of await page.locator('a[href*="github.com/sponsors/"]').evaluateAll(links=>links.map(link=>link.href))) assert.equal(href,sponsor);
    assert.ok(await page.locator('a[href="'+sponsor+'"]').count() >= 1);
  }
  try {
    const a = await device('/zh'), b = await device(), replacement = await device('/zh');
    const {page:p} = a, {page:q} = b, {page:z} = replacement;
    const guestAPI = [];
    p.on('request',r=>{ if (new URL(r.url()).pathname.startsWith('/api/')) guestAPI.push(r.url()); });
    await a.open('/');
    await p.evaluate(()=>localStorage.setItem('unrelated-browser-preference','private-to-device'));
    await gift(p);
    await p.locator('[data-answer="1"]').click();
    await a.open('/tools/');
    await p.locator('[data-save="/tools/artisan/"]').click();
    await a.open('/learn/first-project/');
    await p.locator('[data-complete]').click(); await p.locator('[data-read-button]').click();
    await a.open('/challenges/php-composer/'); await finishRound(p,foundation.half);
    assert.equal(guestAPI.length,0,'guest learning pages stay static');
    await a.open('/orbit/#account');
    const created = await pressAuth(p,'register',()=>p.locator('[data-auth=register]').click());
    ownId = created.account.id;
    const backup = await p.locator('#issued-code').inputValue();
    assert.ok(/^[a-f0-9]{4}(-[a-f0-9]{4}){7}$/.test(backup));
    await p.locator('[data-hide-code]').click();
    const data = (await profile(p)).values;
    for (const key of ['read:first-project','task:first-project','stamp:blade','saved:/tools/artisan/']) assert.ok(data[key],key);
    assert.equal(data['last-lesson'],'first-project');
    assert.equal(data['quiz:php-composer'],'v1:1212','guest score imported at registration');
    assert.ok(!Object.values(data).includes('private-to-device'));
    const session = (await a.context.cookies()).find(c => c.name === '__Host-orbit-session');
    assert.ok(session?.httpOnly && session.secure);
    assert.equal(await p.evaluate(()=>document.cookie.includes('__Host-orbit-session')),false);

    // Emulate a password manager syncing this test's passkey to a second browser.
    const {credentials} = await a.cdp.send('WebAuthn.getCredentials',{authenticatorId:a.authenticatorId});
    await b.cdp.send('WebAuthn.addCredential',{authenticatorId:b.authenticatorId,credential:credentials[0]});
    await b.open('/tools/');await q.locator('[data-save="/tools/schedule/"]').click();
    await b.open('/challenges/php-composer/'); await finishRound(q,foundation.perfect);
    await b.open('/orbit/#account');
    await pressAuth(q,'login',()=>q.locator('[data-auth=login]').click());
    assert.equal((await profile(q)).id,ownId);
    assert.equal((await profile(q)).values['quiz:php-composer'],'v1:1212','second device received the account score');
    assert.equal((await profile(q)).values['saved:/tools/schedule/'],undefined,'guest data on another device is not imported on login');
    await a.open('/challenges/php-composer/'); await a.context.setOffline(true);
    await finishRound(p,foundation.pass);
    await q.locator('[data-manage] summary').click(); await q.locator('[data-import]').click();
    await hasCloudValue(q,'task:first-project','1');
    await waitForCloud(q,values=>Boolean(values['saved:/tools/schedule/']));
    await hasCloudValue(q,'quiz:php-composer','v1:1201');
    await a.context.setOffline(false);
    await p.waitForFunction(()=>document.querySelector('[data-personal-best]')?.textContent === '100 / 100');
    assert.equal((await profile(p)).values['quiz:php-composer'],'v1:1201','offline lower score preserved the cloud best');

    // Hold one normal save while another device commits a different edit.
    await a.open('/tools/');await b.open('/tools/');
    let release;
    const held = new Promise(resolve=>{ release=resolve; });
    const arrived = p.waitForRequest(r=>new URL(r.url()).pathname === '/api/progress' && r.method() === 'PATCH');
    let conflicted = false;
    p.on('response',r=>{ if (new URL(r.url()).pathname === '/api/progress' && r.status() === 409) conflicted = true; });
    await p.route('**/api/progress',async route=>{await held;await route.continue();},{times:1});
    await p.locator('[data-save="/tools/validation/"]').click();
    await arrived;
    try {
      await q.locator('[data-save="/tools/artisan/"][aria-pressed=true]').click();
      await hasCloudValue(q,'saved:/tools/artisan/',null);
    } finally { release(); }
    await waitForCloud(p,values=>Boolean(values['saved:/tools/validation/']));
    assert.ok(conflicted,'the stale device rebased its edit');
    const merged = await profile(p);
    assert.equal(merged.values['saved:/tools/artisan/'],undefined);
    assert.ok(merged.values['saved:/tools/schedule/']);
    await a.context.setOffline(true);
    await p.locator('[data-save="/tools/env-check/"]').click();
    await a.context.setOffline(false);
    await waitForCloud(q,values=>Boolean(values['saved:/tools/env-check/']));

    await a.open('/orbit/#account');await p.locator('[data-sign-out]').click();
    await p.locator('[data-auth=login]').waitFor();
    assert.equal(await profile(p),null);
    assert.equal(await p.locator('[data-collection] [data-save="/tools/artisan/"]').count(),1,'original guest activity is preserved');
    assert.equal(await p.locator('[data-collection] [data-save="/tools/validation/"]').count(),0);
    assert.equal((await profile(q)).id,ownId,'one device signing out leaves other sessions intact');

    await replacement.open('/orbit/#account');await z.locator('[data-recover] summary').click();
    await z.locator('#orbit-recovery').fill(backup);
    const recovered = await pressAuth(z,'recover',()=>z.locator('[data-recovery-form] button').click());
    assert.equal(recovered.account.id,ownId);
    assert.ok(recovered.recoveryCode !== backup,'recovery issues a new code');
    assert.ok(recovered.account.values['saved:/tools/validation/']);
    await z.locator('[data-hide-code]').click();
    assert.equal(await profile(q),null,'recovery invalidates older sessions');
    await z.locator('[data-manage] summary').click();
    z.once('dialog',d=>d.accept());
    await z.locator('[data-delete]').click();await z.locator('[data-auth=login]').waitFor();
    assert.equal(await profile(z),null);
    assert.ok(await z.evaluate(()=>document.documentElement.scrollWidth <= innerWidth+1),'account panel fits mobile');
  } finally {
    // Only clean up the throwaway identity created by this run.
    try {
      for (const {page} of devices) {
        if (!ownId || !page.url().startsWith(origin+'/')) continue;
        await page.evaluate(async id=>{
          const {account} = await (await fetch('/api/account')).json();
          if (account?.id === id) await fetch('/api/account',{method:'DELETE',headers:{'Content-Type':'application/json'},body:JSON.stringify({account:id})});
        },ownId).catch(()=>{});
      }
    } finally { await browser.close(); }
  }
});
