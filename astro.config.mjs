import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Site 100% statique : servi directement par le CDN Cloudflare Pages
  // (ultra rapide, gratuit, aucun Worker requis)
  output: 'static',
  base: '/',

  site: 'https://zyatriaglobal.com',

  devToolbar: {
    enabled: false,
  },

  server: {
    port: 3000,
    host: true,
  },

  integrations: [
    react(),
  ],

  build: {
    inlineStylesheets: 'auto',
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
    },
  },
});