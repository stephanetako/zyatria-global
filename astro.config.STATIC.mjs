import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  base: '/',
  output: 'server',
  adapter: cloudflare({
    mode: 'directory'
  }),
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
    ssr: {
      noExternal: ['lucide-react']
    }
  },
});
