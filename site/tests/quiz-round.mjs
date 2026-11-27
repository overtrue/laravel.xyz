import assert from 'node:assert/strict';

// Canonical choice IDs for the four PHP / Composer scenarios. Display order is shuffled.
export const foundation = { half:[1,2,1,2], pass:[1,2,0,0], perfect:[1,2,0,1] };

export async function answerQuestion(page,index,option) {
  const stage = page.locator('[data-question="' + index + '"]');
  await stage.locator('input[value="' + option + '"]').check();
  await stage.locator('[type=submit]').click();
  await stage.locator('[data-explanation]').waitFor();
  assert.ok(await stage.locator('input').first().isDisabled(), 'submitting locks this answer');
}

export async function finishRound(page,answers,start = 0) {
  for (let i = start; i < answers.length; i++) {
    await answerQuestion(page,i,answers[i]);
    await page.locator('[data-question="' + i + '"] [data-advance]').click();
  }
  await page.locator('[data-result-screen]').waitFor();
}
