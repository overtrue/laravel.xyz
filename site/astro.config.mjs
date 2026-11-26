import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL,
  trailingSlash: 'always',
  vite: { tsconfig: './tsconfig.json' },
  markdown: { shikiConfig: { theme: 'github-light' } },
});
