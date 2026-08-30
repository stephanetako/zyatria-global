import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/',
  devToolbar: {
    enabled: false,
  },
  server: {
    port: 3000,
    host: true,
  },
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
