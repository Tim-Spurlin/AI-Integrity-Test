import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'bg-root': '#0A0806',
        'bg-element': '#1A1612',
        'accent-primary': '#A85E2E',
        'accent-secondary': '#D09A6A',
        'text-primary': '#F0E8E0',
        'text-secondary': '#C0B8B0',
        'integrity-honest': '#4A8A68',
        'integrity-lied': '#A04840',
        'integrity-partial': '#B07030',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
} as Config;