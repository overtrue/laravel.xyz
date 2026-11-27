import type { APIRoute } from 'astro';
import { publisher } from '../lib/site';

export const GET: APIRoute = ({ site }) => new Response(
  site ? `google.com, ${publisher.replace(/^ca-/, '')}, DIRECT, f08c47fec0942fa0\n` : '# Advertising is disabled.\n',
  { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
);
