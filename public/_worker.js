// Cloudflare Pages Worker for Astro SSR
export default {
  async fetch(request, env, ctx) {
    try {
      // Import the Astro server handler
      const { onRequest } = await import('./server/entry.mjs');

      // Create Astro locals object with Cloudflare bindings
      const locals = {
        runtime: {
          env,
          cf: request.cf,
          ctx
        }
      };

      // Call Astro's request handler
      return await onRequest({
        request,
        locals
      });
    } catch (error) {
      console.error('Worker error:', error);
      return new Response('Internal Server Error', { 
        status: 500,
        headers: { 'Content-Type': 'text/plain' }
      });
    }
  }
};
