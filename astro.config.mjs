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
  output: 'server',
  devToolbar: {enabled: false},
  server: {port: 3000, host: true},
  adapter: cloudflare({
    mode: 'directory',
    platformProxy: {enabled: true},
    wasmModuleImports: true,
  }),
  integrations: [
    react(),
    injectDevScript({scriptPath: '/generated/dev-only.js'}),
  ],
  vite: {
    plugins: [tailwindcss(), patchViteErrorOverlay()],
    server: {
      watch: {
        usePolling: true,
        interval: 1000,
        ignored: ['**/lost+found/**', '**/dist/**', '**/node_modules/**', '**/src/site-components/**', '**/*.md', /[/\\]webflow\.json$/],
      },
    },
    resolve: {
      alias: import.meta.env.PROD ? {'react-dom/server': 'react-dom/server.edge'} : undefined,
    },
  },
});