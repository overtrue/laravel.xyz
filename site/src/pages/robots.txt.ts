import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => new Response(
  site ? `User-agent: *\nAllow: /\nSitemap: ${new URL('/sitemap.xml', site)}\n` : 'User-agent: *\nAllow: /\n',
  { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
);
