import { getLocale, localize } from '../lib/locale';

const timers = new WeakMap<HTMLButtonElement, number>();
const { t } = localize(getLocale(location.pathname));

document.addEventListener('click', async (event) => {
  if (!(event.target instanceof Element)) return;
  const button = event.target.closest<HTMLButtonElement>('button[data-copy]');
  if (!button?.dataset.copy) return;

  const target = document.getElementById(button.dataset.copy);
  const caption = button.querySelector<HTMLElement>('[data-copy-caption]') ?? button;
  const label = button.dataset.copyLabel ??= caption.textContent?.trim() || t('Copy', '复制');
  const value = target instanceof HTMLTextAreaElement ? target.value : target?.textContent;
  if (!value?.trim()) return;

  window.clearTimeout(timers.get(button));
  try {
    await navigator.clipboard.writeText(value.trim());
    caption.textContent = t('Copied', '已复制');
  } catch {
    caption.textContent = t('Copy manually', '请手动复制');
    if (target instanceof HTMLTextAreaElement) {
      target.select();
    } else if (target) {
      const range = document.createRange();
      range.selectNodeContents(target);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
    }
  }
  timers.set(button, window.setTimeout(() => { caption.textContent = label; }, 2400));
});
