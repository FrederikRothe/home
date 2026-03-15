// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://frothe.dk',
  integrations: [mdx(), sitemap(), react()],

  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
});