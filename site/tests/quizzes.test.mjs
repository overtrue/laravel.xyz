import assert from 'node:assert/strict';
import test from 'node:test';
import { chromium } from 'playwright-core';
import { answerQuestion, finishRound, foundation } from './quiz-round.mjs';

const origin = process.env.ORBIT_TEST_URL || 'http://localhost:4379';

test('beginner and builder paths take readers from a browser exercise to the next task', {timeout:180000}, async () => {
  const browser = await chromium.launch({channel:process.env.ORBIT_CHROME_CHANNEL || 'chrome'});
  try {
    for (const prefix of ['', '/zh']) {
      const page = await browser.newPage({viewport:{width:390,height:844},reducedMotion:'reduce'});
      const open = path => page.goto(origin+prefix+path,{waitUntil:'domcontentloaded'});
      const path = () => new URL(page.url()).pathname;
      const reply = page.locator('[data-example]:visible');
      await open('/');
      assert.equal(await page.locator('[data-path]').count(),2);
      await page.locator('[data-resume-link]').click();
      assert.equal(path(),prefix+'/learn/laravel-request-lab/');
      await page.locator('#try-it label').nth(1).click();
      assert.deepEqual(JSON.parse(await reply.locator('pre').innerText()),{units:2,total_cents:798});
      await page.keyboard.press('ArrowRight');
      assert.equal(await reply.locator('.reply-head strong').innerText(),'422');
      assert.ok(JSON.parse(await reply.locator('pre').innerText()).errors.units);
      await page.locator('[data-complete]').click();
      assert.equal(await page.locator('[data-next-checkpoint]').getAttribute('href'),prefix+'/learn/first-project/');
      await open('/orbit/');
      await page.locator('[data-resume-link]').click();
      assert.equal(path(),prefix+'/learn/first-project/');
      await page.locator('[data-complete]').click();
      await page.locator('[data-next-checkpoint]').click();
      assert.equal(path(),prefix+'/learn/form-validation/');
      await page.locator('[data-complete]').click();
      await open('/courses/?route=web&level=beginner');
      await page.locator('[data-roadmap][data-ready]').waitFor();
      assert.equal(await page.locator('[data-progress-label]').innerText(),'3 / 3');
      await page.locator('[data-next-task]').click();
      await page.locator('[data-roadmap][data-track=api][data-ready]').waitFor();
      assert.equal(await page.locator('#skill').inputValue(),'builder');
      assert.deepEqual(await page.locator('[data-stop]:visible').evaluateAll(links=>links.map(a=>a.dataset.stop)),['rest-api','api-access']);
      await page.locator('[data-next-task]').click();
      assert.equal(path(),prefix+'/learn/api-resource-pagination/');
      const first = JSON.parse(await reply.locator('pre').innerText());
      await page.locator('#try-it label').nth(1).click();
      const second = JSON.parse(await reply.locator('pre').innerText());
      assert.notEqual(first.data[0].id,second.data[0].id);
      assert.deepEqual(second.meta,{current_page:2,per_page:1,total:2});
      await page.locator('#try-it label').nth(2).click();
      assert.ok(JSON.parse(await reply.locator('pre').innerText()).errors.per_page);
      await page.locator('[data-complete]').click();
      await open('/learn/laravel-request-lab/');
      await open('/');
      assert.equal(await page.locator('[data-resume-link]').getAttribute('href'),prefix+'/learn/api-validated-writes/');
      await open('/challenges/');
      assert.equal(await page.locator('[data-quiz-row]:visible').count(),4);
      assert.equal(await page.locator('[data-recommend]').getAttribute('href'),prefix+'/challenges/rest-api/');
      await page.locator('#more-rounds summary').click();
      assert.equal(await page.locator('[data-quiz-row]:visible').count(),9);
      await page.locator('[data-recommend]').click();
      const hint = page.locator('[data-question="0"] .quiz-hint');
      await hint.locator('summary').click();
      assert.ok(await hint.locator('p').isVisible());
      await answerQuestion(page,0,1);
      assert.ok(await hint.isHidden());
      if (!prefix) {
        const catalog = await (await page.request.get(origin+'/account-catalog.json')).json();
        await page.locator('[data-question="0"] [data-advance]').click();
        await finishRound(page,[...catalog.quizzes['rest-api']].map(Number),1);
        for (const course of ['php-composer','taskboard','api-access']) {
          await open('/challenges/'+course+'/');
          await finishRound(page,[...catalog.quizzes[course]].map(Number));
        }
        await open('/challenges/');
        assert.equal(await page.locator('[data-clears]').innerText(),'4');
        assert.equal(await page.locator('[data-recommend]').getAttribute('href'),'#more-rounds');
        await page.locator('[data-recommend]').click();
        assert.equal(await page.locator('[data-quiz-row]:visible').count(),9);
      }
      await open('/courses/?route=web&level=beginner&station=eloquent');
      await page.waitForURL(origin+prefix+'/courses/eloquent/');
      await page.close();
    }
    const plain = await browser.newPage({javaScriptEnabled:false,viewport:{width:320,height:700}});
    await plain.goto(origin+'/zh/courses/?route=api&level=builder',{waitUntil:'domcontentloaded'});
    await plain.locator('a[href="/zh/learn/api-resource-pagination/"]:visible').first().click();
    await plain.locator('#try-it label').nth(2).click();
    assert.equal(await plain.locator('[data-example]:visible .reply-head strong').innerText(),'422');
    assert.equal(await plain.evaluate(()=>document.documentElement.scrollWidth <= innerWidth),true);
  } finally { await browser.close(); }
});

test('course challenges grade locked answers, resume bilingually and keep personal bests', {timeout:origin.startsWith('https:') ? 300000 : 120000}, async () => {
  const browser = await chromium.launch({channel:process.env.ORBIT_CHROME_CHANNEL || 'chrome'});
  try {
    const page = await browser.newPage({viewport:{width:390,height:844},reducedMotion:'reduce'});
    page.setDefaultNavigationTimeout(45000);
    const open = path => page.goto(origin+path,{waitUntil:'domcontentloaded'});
    const errors = []; page.on('pageerror',e => errors.push(e.message));
    await open('/');
    await page.locator('.home-lab a[href="/challenges/"]').click();
    assert.equal(await page.locator('[data-quiz-row]').count(),9);
    await page.locator('[data-recommend]').click();
    assert.equal(new URL(page.url()).pathname,'/challenges/php-composer/');
    assert.ok(await page.locator('[data-question="0"] [type=submit]').isDisabled());
    await answerQuestion(page,0,foundation.half[0]);
    assert.equal(await page.locator('[data-round-score]').innerText(),'25');
    await page.locator('.language-link').click();
    await page.locator('[data-question="0"] [data-explanation]').waitFor();
    assert.equal(await page.locator('html').getAttribute('lang'),'zh-CN');
    assert.ok(await page.locator('[data-question="0"] input').first().isDisabled());
    await page.locator('[data-question="0"] [data-advance]').click();
    await page.reload(); await page.locator('[data-question="1"]').waitFor();
    await finishRound(page,foundation.half,1);
    assert.equal(await page.locator('[data-round-score]').innerText(),'50');
    assert.equal(await page.locator('[data-review-for]:visible').count(),2);
    assert.ok(await page.locator('[data-next-round]').isHidden());
    assert.equal(await page.locator('#result-title').evaluate(el=>el===document.activeElement),true);
    const reviewLinks = await page.locator('[data-review-for]:visible a').evaluateAll(links=>links.map(a=>a.getAttribute('href')));
    assert.deepEqual(new Set(reviewLinks),new Set(['/zh/learn/laravel-request-lab/','/zh/learn/php-stock-values/']));
    await page.locator('[data-review-for]:visible a').first().click();
    await page.goBack(); await page.locator('[data-result-screen]').waitFor();

    await page.locator('[data-replay]').click(); await finishRound(page,foundation.pass);
    assert.equal(await page.locator('[data-result-screen]').getAttribute('data-passed'),'true');
    assert.equal(await page.locator('[data-next-round]').getAttribute('href'),'/zh/challenges/taskboard/');
    await page.locator('[data-replay]').click(); await finishRound(page,[0,0,1,2]);
    assert.equal(await page.locator('[data-round-score]').innerText(),'0');
    assert.equal(await page.locator('[data-personal-best]').innerText(),'75 / 100');
    await page.locator('[data-replay]').click(); await finishRound(page,foundation.perfect);
    assert.ok(await page.locator('[data-review]').isHidden());
    await page.locator('[data-result-screen] a[href*="/orbit/"]').click();
    await page.waitForFunction(()=>document.querySelector('[data-total-score]')?.textContent==='100');
    assert.equal(await page.locator('[data-clears]').innerText(),'1');
    await page.locator('#quiz-record .record-cta').click();
    assert.equal(await page.locator('[data-quiz-row="php-composer"]').getAttribute('data-result'),'perfect');
    assert.equal(await page.locator('[data-recommend]').getAttribute('href'),'/zh/challenges/taskboard/');
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
    assert.deepEqual(errors,[]);

    const urls = await page.locator('[data-quiz-row]').evaluateAll(rows=>rows.map(row=>row.dataset.quizRow));
    const catalog = await (await page.request.get(origin+'/account-catalog.json')).json();
    for (const id of urls) {
      for (const locale of ['','/zh']) {
        const response = await page.request.get(origin+locale+'/challenges/'+id+'/');
        assert.equal(response.status(),200);
        const html = await response.text();
        assert.ok(html.includes('data-key="'+catalog.quizzes[id]+'"'));
        assert.equal((html.match(/data-question="/g) || []).length,4);
        assert.equal((html.match(/type="radio"/g) || []).length,12);
      }
    }
    await open('/zh/courses/php-composer/');
    assert.match(await page.locator('[data-course-quiz] span').innerText(),/100\/100/);
    await open('/zh/courses/?route=ship&level=advanced');
    await page.locator('[data-roadmap][data-ready]').waitFor();
    await page.locator('.map-stats a').click();
    assert.equal(await page.locator('[data-recommend]').getAttribute('href'),'/zh/challenges/deploy-operate/');
    for (const id of urls.filter(id=>id!=='php-composer')) {
      await open('/zh/challenges/'+id+'/');
      await finishRound(page,[...catalog.quizzes[id]].map(Number));
    }
    await open('/zh/challenges/');
    assert.equal(await page.locator('[data-clears]').innerText(),'9');
    assert.equal(await page.locator('[data-total-score]').innerText(),'900');
    assert.equal(await page.locator('[data-recommend]').getAttribute('href'),'#rounds');

    const privateTab = await browser.newContext();
    await privateTab.addInitScript(()=>{
      Storage.prototype.setItem = () => { throw new DOMException('Unavailable','QuotaExceededError'); };
    });
    const localOnly = await privateTab.newPage();
    await localOnly.goto(origin+'/challenges/php-composer/',{waitUntil:'domcontentloaded',timeout:45000});
    await finishRound(localOnly,foundation.pass);
    await localOnly.locator('[data-save-warning]').waitFor();
    assert.equal(await localOnly.locator('[data-round-score]').innerText(),'75');
    await privateTab.close();
    const plain = await browser.newContext({javaScriptEnabled:false});
    const paper = await plain.newPage();
    await paper.goto(origin+'/challenges/taskboard/',{waitUntil:'domcontentloaded',timeout:45000});
    assert.equal(await paper.locator('.quiz-paper details').count(),4);
    await paper.locator('.quiz-paper summary').first().click();
    assert.ok(await paper.locator('.quiz-paper details').first().locator('strong').isVisible());
  } finally { await browser.close(); }
});
