import { defineConfig } from 'astro/config';
import { rename } from 'node:fs/promises';

export default defineConfig({
  site: process.env.SITE_URL,
  trailingSlash: 'always',
  integrations: [{
    name: 'localized-404',
    hooks: {
      // Workers serves the nearest 404.html for a missing URL.
      'astro:build:done': ({ dir }) => rename(new URL('zh/404/index.html', dir), new URL('zh/404.html', dir)),
    },
  }],
  vite: { tsconfig: './tsconfig.json' },
  markdown: { shikiConfig: { theme: 'github-light' } },
});
