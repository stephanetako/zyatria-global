
import {defineConfig} from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

function patchViteErrorOverlay() {
  return {
    name: 'patch-vite-error-overlay',
    transform(code, id) {
      if (id.includes('vite/dist/client/client.mjs')) {
        return code.replace(
          /const editorLink = this\.createLink\(`Open in editor\${[^}]*}\`, void 0\);[\s\S]*?codeHeader\.appendChild\(editorLink\);/g,
          ''
        );
      }
    },
  };
}

function injectDevScript(options = {}) {
  const {scriptPath} = options;
  if (!scriptPath) {
    throw new Error('injectDevScript requires a scriptPath');
  }
  return {
    name: 'inject-dev-script',
    hooks: {
      'astro:config:setup': ({injectScript, command, logger}) => {
        if (command === 'dev') {
          logger.info(`Injecting dev script: ${scriptPath}`);
          injectScript('page', `import "${scriptPath}";`);
        }
      },
    },
  };
}

export default defineConfig({
  base: '',
  output: 'static',
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  devToolbar: {
    enabled: false,
  },
  server: {
    port: 3000,
    host: true,
  },
  integrations: [
    react(),
    injectDevScript({
      scriptPath: '../../generated/dev-only.js',
    }),
  ],
  vite: {
    plugins: [tailwindcss(), patchViteErrorOverlay()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
    },
    optimizeDeps: {
      exclude: ['@formspree/react'],
    },
    ssr: {
      noExternal: ['@formspree/react'],
    },
  },
});
