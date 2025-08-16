import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

export default defineConfig({
  integrations: [preact()],
  output: 'static',
  site: 'https://yourusername.github.io/ai-integrity-test',
  base: '/ai-integrity-test',
  build: {
    format: 'file',
  },
});