import type { APIRoute } from 'astro';
import { sections, tools } from '../data/catalog';
import { getGuides } from '../lib/site';
import { coursePath, courses } from '../data/courses';
import { quizPath } from '../data/quizzes';
import { localize } from '../lib/locale';

export const GET: APIRoute = async ({ site }) => {
  const paths = site ? [
    '/', '/orbit/', '/about/', '/privacy/', '/courses/', '/challenges/', '/tools/', '/ecosystem/',
    ...courses.map(({ id }) => coursePath(id)),
    ...courses.map(({ id }) => quizPath(id)),
    ...Object.keys(sections).map((section) => `/${section}/`),
    ...(await getGuides('en')).map(({ id }) => `/learn/${id}/`),
    ...tools.map(({ id }) => `/tools/${id}/`),
  ] : [];
  const urls = paths.flatMap((path) => [path, localize('zh').href(path)])
    .map((path) => `<url><loc>${new URL(path, site).href}</loc></url>`).join('');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
