import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  try {
    // Polyfill pour require() dans l'environnement Workers
    if (typeof globalThis.require === 'undefined') {
      // @ts-ignore
      globalThis.require = (id: string) => {
        console.warn(`require() called for ${id} - using empty polyfill`);
        return {};
      };
    }

    // Continuer avec la requête
    return await next();
  } catch (error) {
    console.error('Middleware error:', error);
    return await next();
  }
});
