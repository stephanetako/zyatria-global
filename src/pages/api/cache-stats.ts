import type { APIRoute } from 'astro';
import { getMistralCache } from '../../lib/lru-cache';

/**
 * 📊 Endpoint pour obtenir les statistiques du cache
 * 
 * GET /api/cache-stats
 */
export const GET: APIRoute = async () => {
  try {
    const cache = getMistralCache();
    
    // Nettoyer les entrées expirées
    const cleaned = cache.cleanup();
    
    // Obtenir les statistiques
    const stats = cache.getStats();
    
    // Obtenir les questions les plus fréquentes
    const topQuestions = cache.getTopQuestions(10);
    
    return new Response(
      JSON.stringify({
        stats: {
          size: stats.size,
          maxSize: stats.maxSize,
          hits: stats.hits,
          misses: stats.misses,
          hitRate: stats.hitRate,
          usage: `${Math.round((stats.size / stats.maxSize) * 100)}%`,
        },
        topQuestions,
        cleaned,
        timestamp: new Date().toISOString(),
      }, null, 2),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('❌ Erreur lors de la récupération des stats du cache:', error);
    
    return new Response(
      JSON.stringify({
        error: 'Erreur lors de la récupération des statistiques',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};

/**
 * 🗑️ Endpoint pour vider le cache
 * 
 * DELETE /api/cache-stats
 */
export const DELETE: APIRoute = async () => {
  try {
    const cache = getMistralCache();
    cache.clear();
    
    return new Response(
      JSON.stringify({
        message: 'Cache vidé avec succès',
        timestamp: new Date().toISOString(),
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('❌ Erreur lors du vidage du cache:', error);
    
    return new Response(
      JSON.stringify({
        error: 'Erreur lors du vidage du cache',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};
