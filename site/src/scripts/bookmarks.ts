import { getLocale, localize } from '../lib/locale';
import { savedAt, saveItem } from './orbit';

const { t } = localize(getLocale(location.pathname));

export function renderSave(button: HTMLButtonElement) {
  const active = Boolean(savedAt(button.dataset.save!));
  const name = button.dataset.name ?? '';
  const action = active ? t('Remove from saved', '取消收藏') : t('Save', '收藏');
  button.setAttribute('aria-pressed', String(active));
  button.setAttribute('aria-label', action + ' ' + name);
  button.title = action + ' ' + name;
  const label = button.querySelector('[data-save-label]');
  if (label) label.textContent = active ? t('Saved', '已收藏') : t('Save', '收藏');
  button.hidden = false;
}

function sync() {
  document.querySelectorAll<HTMLButtonElement>('button[data-save]').forEach(renderSave);
}

const status = document.querySelector<HTMLElement>('[data-save-notice]');
let timer: number;
document.addEventListener('click', event => {
  const button = event.target instanceof Element ? event.target.closest<HTMLButtonElement>('button[data-save]') : null;
  if (!button?.dataset.save) return;
  const id = button.dataset.save;
  const active = !savedAt(id);
  const success = saveItem(id, active);
  if (status) {
    status.textContent = success
      ? active ? t('Saved to My Orbit', '已加入我的小宇宙') : t('Removed from saved items', '已取消收藏')
      : t('This browser could not save the change.', '当前浏览器无法保存这次更改。');
    status.dataset.visible = '';
    window.clearTimeout(timer);
    timer = window.setTimeout(() => { delete status.dataset.visible; status.textContent = ''; }, 3600);
  }
  if (success) {
    sync();
    document.dispatchEvent(new CustomEvent('orbit:saved', { detail:button }));
  }
});
sync();
window.addEventListener('pageshow', sync);
window.addEventListener('storage', sync); window.addEventListener('orbit:activity',sync);
