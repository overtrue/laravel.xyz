import { getCollection, type CollectionEntry } from 'astro:content';
import { localize, type Locale } from './locale';
import { courses } from '../data/courses';

export const repository = 'https://github.com/overtrue/laravel.xyz';
export const sponsor = 'https://github.com/sponsors/overtrue';
export const publisher = 'ca-pub-2163469583563094';
export const adSlot = import.meta.env.ADSENSE_GUIDE_SLOT;

export const adsEnabled = Boolean(
  import.meta.env.SITE &&
  import.meta.env.ADSENSE_ENABLED === 'true' &&
  typeof adSlot === 'string' && /^\d+$/.test(adSlot),
);

export function communityMission(locale: Locale) {
  const { t } = localize(locale);
  return adsEnabled
    ? t('An independent community project that promotes Laravel.', '一个旨在推广 Laravel 框架的独立社区项目。')
    : t('An independent community project that promotes Laravel and currently operates on a nonprofit basis.', '这是一个独立社区项目，目前以非营利方式运营，旨在推广 Laravel 框架。');
}

export type Guide = CollectionEntry<'guides'> | CollectionEntry<'guidesZh'>;

export async function getGuides(locale: Locale): Promise<Guide[]> {
  return (await getCollection(locale === 'zh' ? 'guidesZh' : 'guides')).sort((a, b) => a.data.order - b.data.order);
}

export async function getCourses(locale: Locale) {
  const guides = await getGuides(locale);
  return courses.map(({ id, level, ...copy }) => ({
    id, level, ...copy[locale], lessons: guides.filter(({ data }) => data.course === id),
  }));
}

export type Course = Awaited<ReturnType<typeof getCourses>>[number];
export type CourseSummary = Pick<Course, 'id' | 'title' | 'level'>;

export async function getGuidePages(locale: Locale) {
  return (await getCourses(locale)).flatMap(({ id, level, title, lessons }) => {
    const steps = lessons.map(guide => ({id:guide.id, title:guide.data.title}));
    return lessons.map((guide, index) => ({
      guide, course:{id, level, title}, steps,
      before:steps[index - 1], after:steps[index + 1], total:steps.length,
    }));
  });
}
