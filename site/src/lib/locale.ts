export type Locale = 'en' | 'zh';

export const siteNames = { en: 'Artisan Orbit', zh: 'Laravel 小宇宙' } as const;

export function getLocale(pathname: string): Locale {
  return pathname === '/zh' || pathname.startsWith('/zh/') ? 'zh' : 'en';
}

export function withoutLocale(pathname: string) {
  return getLocale(pathname) === 'zh' ? pathname.slice(3) || '/' : pathname;
}

export function localize(locale: Locale) {
  return {
    locale,
    t: (english: string, chinese: string) => locale === 'zh' ? chinese : english,
    href: (path: string) => locale === 'zh' && path.startsWith('/') ? `/zh${path}` : path,
  };
}
