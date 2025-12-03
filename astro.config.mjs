// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://olankens.com',
  // site: 'https://olankens.github.io',
  // base: '/olanpage',
  vite: {
    plugins: [tailwindcss()],
  },
});
