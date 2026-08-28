import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://zatullier.github.io',
  base: '/portfolio',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
