/**
 * 🚦 Rate Limiter pour l'API Mistral
 * 
 * Gère les délais entre les requêtes pour éviter de dépasser
 * les limites de taux de l'API Mistral
 */

interface RateLimiterConfig {
  minDelay: number; // Délai minimum entre les requêtes (ms)
  maxRequestsPerMinute: number; // Nombre max de requêtes par minute
  maxRequestsPerHour: number; // Nombre max de requêtes par heure
}

interface RequestRecord {
  timestamp: number;
  success: boolean;
}

class RateLimiter {
  private config: RateLimiterConfig;
  private requests: RequestRecord[] = [];
  private lastRequestTime: number = 0;

  constructor(config: Partial<RateLimiterConfig> = {}) {
    this.config = {
      minDelay: config.minDelay || 1000, // 1 seconde par défaut
      maxRequestsPerMinute: config.maxRequestsPerMinute || 20,
      maxRequestsPerHour: config.maxRequestsPerHour || 500,
    };
  }

  /**
   * Attend le délai nécessaire avant la prochaine requête
   */
  async waitIfNeeded(): Promise<void> {
    const now = Date.now();
    const timeSinceLastRequest = now - this.lastRequestTime;

    if (timeSinceLastRequest < this.config.minDelay) {
      const waitTime = this.config.minDelay - timeSinceLastRequest;
      console.log(`⏱️ Rate limiter : Attente de ${waitTime}ms avant la prochaine requête`);
      await this.sleep(waitTime);
    }

    this.lastRequestTime = Date.now();
  }

  /**
   * Vérifie si on peut faire une nouvelle requête
   */
  canMakeRequest(): { allowed: boolean; reason?: string; retryAfter?: number } {
    const now = Date.now();
    
    // Nettoyer les anciennes requêtes (> 1 heure)
    this.requests = this.requests.filter(
      req => now - req.timestamp < 60 * 60 * 1000
    );

    // Vérifier les limites par minute
    const requestsLastMinute = this.requests.filter(
      req => now - req.timestamp < 60 * 1000
    ).length;

    if (requestsLastMinute >= this.config.maxRequestsPerMinute) {
      const oldestRequest = this.requests
        .filter(req => now - req.timestamp < 60 * 1000)
        .sort((a, b) => a.timestamp - b.timestamp)[0];
      
      const retryAfter = 60 * 1000 - (now - oldestRequest.timestamp);
      
      return {
        allowed: false,
        reason: `Limite de ${this.config.maxRequestsPerMinute} requêtes/minute atteinte`,
        retryAfter: Math.ceil(retryAfter / 1000), // en secondes
      };
    }

    // Vérifier les limites par heure
    const requestsLastHour = this.requests.length;

    if (requestsLastHour >= this.config.maxRequestsPerHour) {
      const oldestRequest = this.requests
        .sort((a, b) => a.timestamp - b.timestamp)[0];
      
      const retryAfter = 60 * 60 * 1000 - (now - oldestRequest.timestamp);
      
      return {
        allowed: false,
        reason: `Limite de ${this.config.maxRequestsPerHour} requêtes/heure atteinte`,
        retryAfter: Math.ceil(retryAfter / 1000), // en secondes
      };
    }

    return { allowed: true };
  }

  /**
   * Enregistre une requête
   */
  recordRequest(success: boolean = true): void {
    this.requests.push({
      timestamp: Date.now(),
      success,
    });
  }

  /**
   * Obtient les statistiques d'utilisation
   */
  getStats(): {
    requestsLastMinute: number;
    requestsLastHour: number;
    successRate: number;
    timeSinceLastRequest: number;
  } {
    const now = Date.now();
    
    const requestsLastMinute = this.requests.filter(
      req => now - req.timestamp < 60 * 1000
    ).length;

    const requestsLastHour = this.requests.length;

    const successfulRequests = this.requests.filter(req => req.success).length;
    const successRate = requestsLastHour > 0 
      ? (successfulRequests / requestsLastHour) * 100 
      : 100;

    const timeSinceLastRequest = now - this.lastRequestTime;

    return {
      requestsLastMinute,
      requestsLastHour,
      successRate,
      timeSinceLastRequest,
    };
  }

  /**
   * Réinitialise le rate limiter
   */
  reset(): void {
    this.requests = [];
    this.lastRequestTime = 0;
  }

  /**
   * Fonction sleep utilitaire
   */
  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Instance singleton du rate limiter
let rateLimiterInstance: RateLimiter | null = null;

/**
 * Obtient l'instance du rate limiter (singleton)
 */
export function getRateLimiter(): RateLimiter {
  if (!rateLimiterInstance) {
    rateLimiterInstance = new RateLimiter({
      minDelay: 1000, // 1 seconde entre chaque requête
      maxRequestsPerMinute: 20, // 20 requêtes/minute max
      maxRequestsPerHour: 500, // 500 requêtes/heure max
    });
  }
  return rateLimiterInstance;
}

/**
 * Réinitialise le rate limiter (utile pour les tests)
 */
export function resetRateLimiter(): void {
  if (rateLimiterInstance) {
    rateLimiterInstance.reset();
  }
  rateLimiterInstance = null;
}

export default RateLimiter;
