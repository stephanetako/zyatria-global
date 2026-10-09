// Force reload: 2024-10-05 04:30
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),
  cacheDir: './.astro-cache',
  vite: {
    ssr: {
      external: ['node:async_hooks']
    },
    clearScreen: false
  }
});

