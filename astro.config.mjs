import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

export default defineConfig({
  integrations: [preact()],
  output: 'static',
  site: 'https://Tim-Spurlin.github.io',
  base: '/AI-Integrity-Test',
  build: {
    format: 'file',
  },
});