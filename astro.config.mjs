import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // Mode SERVER pour Cloudflare Pages avec fonctionnalités dynamiques
  // (chatbot IA, formulaires, API routes)
  output: 'server',
  adapter: cloudflare({
    mode: 'directory',
    functionPerRoute: false,
    // Force l'utilisation d'ES Modules
    platformProxy: {
      enabled: true,
    },
  }),
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
      // Force ES Modules dans le build
      target: 'esnext',
      rollupOptions: {
        external: [],
        output: {
          format: 'es',
        },
      },
    },
    optimizeDeps: {
      exclude: ['@formspree/react'],
    },
    ssr: {
      noExternal: ['@formspree/react'],
      external: [],
      // Force ES Modules pour SSR
      target: 'webworker',
    },
  },
});




