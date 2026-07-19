/**
 * 💾 LRU Cache pour l'API Mistral
 * 
 * Cache les réponses de l'API pour éviter les appels redondants
 * et améliorer les performances
 */

interface CacheEntry<T> {
  value: T;
  timestamp: number;
  hits: number;
}

interface CacheStats {
  size: number;
  maxSize: number;
  hits: number;
  misses: number;
  hitRate: number;
  oldestEntry: number;
  newestEntry: number;
}

class LRUCache<K, V> {
  private cache: Map<K, CacheEntry<V>>;
  private maxSize: number;
  private ttl: number; // Time to live en millisecondes
  private hits: number = 0;
  private misses: number = 0;

  constructor(maxSize: number = 100, ttl: number = 60 * 60 * 1000) {
    this.cache = new Map();
    this.maxSize = maxSize;
    this.ttl = ttl; // 1 heure par défaut
  }

  /**
   * Génère une clé de cache à partir d'un prompt
   */
  private generateKey(prompt: string): string {
    // Normaliser le prompt (minuscules, trim, espaces multiples)
    return prompt
      .toLowerCase()
      .trim()
      .replace(/\s+/g, ' ');
  }

  /**
   * Récupère une valeur du cache
   */
  get(key: K): V | undefined {
    const normalizedKey = typeof key === 'string' ? this.generateKey(key) as K : key;
    const entry = this.cache.get(normalizedKey);

    if (!entry) {
      this.misses++;
      return undefined;
    }

    // Vérifier si l'entrée a expiré
    const now = Date.now();
    if (now - entry.timestamp > this.ttl) {
      this.cache.delete(normalizedKey);
      this.misses++;
      return undefined;
    }

    // Mettre à jour les statistiques
    entry.hits++;
    this.hits++;

    // Déplacer l'entrée à la fin (LRU)
    this.cache.delete(normalizedKey);
    this.cache.set(normalizedKey, entry);

    console.log(`💾 Cache HIT pour la clé: ${String(normalizedKey).substring(0, 50)}...`);
    console.log(`📊 Hits: ${entry.hits} fois`);

    return entry.value;
  }

  /**
   * Ajoute une valeur au cache
   */
  set(key: K, value: V): void {
    const normalizedKey = typeof key === 'string' ? this.generateKey(key) as K : key;

    // Si le cache est plein, supprimer l'entrée la plus ancienne (LRU)
    if (this.cache.size >= this.maxSize && !this.cache.has(normalizedKey)) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
      console.log(`🗑️ Cache plein : Suppression de l'entrée la plus ancienne`);
    }

    // Ajouter la nouvelle entrée
    this.cache.set(normalizedKey, {
      value,
      timestamp: Date.now(),
      hits: 0,
    });

    console.log(`💾 Cache SET pour la clé: ${String(normalizedKey).substring(0, 50)}...`);
    console.log(`📊 Taille du cache: ${this.cache.size}/${this.maxSize}`);
  }

  /**
   * Vérifie si une clé existe dans le cache
   */
  has(key: K): boolean {
    const normalizedKey = typeof key === 'string' ? this.generateKey(key) as K : key;
    const entry = this.cache.get(normalizedKey);

    if (!entry) {
      return false;
    }

    // Vérifier si l'entrée a expiré
    const now = Date.now();
    if (now - entry.timestamp > this.ttl) {
      this.cache.delete(normalizedKey);
      return false;
    }

    return true;
  }

  /**
   * Supprime une entrée du cache
   */
  delete(key: K): boolean {
    const normalizedKey = typeof key === 'string' ? this.generateKey(key) as K : key;
    return this.cache.delete(normalizedKey);
  }

  /**
   * Vide le cache
   */
  clear(): void {
    this.cache.clear();
    this.hits = 0;
    this.misses = 0;
    console.log('🗑️ Cache vidé');
  }

  /**
   * Nettoie les entrées expirées
   */
  cleanup(): number {
    const now = Date.now();
    let cleaned = 0;

    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp > this.ttl) {
        this.cache.delete(key);
        cleaned++;
      }
    }

    if (cleaned > 0) {
      console.log(`🧹 Nettoyage du cache : ${cleaned} entrées expirées supprimées`);
    }

    return cleaned;
  }

  /**
   * Obtient les statistiques du cache
   */
  getStats(): CacheStats {
    const totalRequests = this.hits + this.misses;
    const hitRate = totalRequests > 0 ? (this.hits / totalRequests) * 100 : 0;

    let oldestEntry = Date.now();
    let newestEntry = 0;

    for (const entry of this.cache.values()) {
      if (entry.timestamp < oldestEntry) {
        oldestEntry = entry.timestamp;
      }
      if (entry.timestamp > newestEntry) {
        newestEntry = entry.timestamp;
      }
    }

    return {
      size: this.cache.size,
      maxSize: this.maxSize,
      hits: this.hits,
      misses: this.misses,
      hitRate: Math.round(hitRate * 10) / 10,
      oldestEntry: this.cache.size > 0 ? oldestEntry : 0,
      newestEntry: this.cache.size > 0 ? newestEntry : 0,
    };
  }

  /**
   * Affiche les statistiques du cache
   */
  printStats(): void {
    const stats = this.getStats();
    console.log('\n📊 Statistiques du Cache LRU:');
    console.log(`   Taille: ${stats.size}/${stats.maxSize}`);
    console.log(`   Hits: ${stats.hits}`);
    console.log(`   Misses: ${stats.misses}`);
    console.log(`   Taux de succès: ${stats.hitRate}%`);
    
    if (stats.size > 0) {
      const oldestAge = Math.round((Date.now() - stats.oldestEntry) / 1000);
      const newestAge = Math.round((Date.now() - stats.newestEntry) / 1000);
      console.log(`   Entrée la plus ancienne: ${oldestAge}s`);
      console.log(`   Entrée la plus récente: ${newestAge}s`);
    }
    console.log('');
  }

  /**
   * Obtient les entrées les plus populaires
   */
  getTopEntries(limit: number = 10): Array<{ key: K; hits: number; age: number }> {
    const entries = Array.from(this.cache.entries())
      .map(([key, entry]) => ({
        key,
        hits: entry.hits,
        age: Math.round((Date.now() - entry.timestamp) / 1000),
      }))
      .sort((a, b) => b.hits - a.hits)
      .slice(0, limit);

    return entries;
  }
}

/**
 * Cache spécifique pour les réponses Mistral
 */
interface MistralCacheKey {
  messages: Array<{ role: string; content: string }>;
  model?: string;
}

class MistralCache {
  private cache: LRUCache<string, string>;

  constructor(maxSize: number = 100, ttl: number = 60 * 60 * 1000) {
    this.cache = new LRUCache<string, string>(maxSize, ttl);
  }

  /**
   * Génère une clé unique à partir des messages
   */
  private generateCacheKey(messages: Array<{ role: string; content: string }>): string {
    // Prendre uniquement les messages utilisateur pour la clé
    const userMessages = messages
      .filter(msg => msg.role === 'user')
      .map(msg => msg.content)
      .join('|');

    return userMessages;
  }

  /**
   * Récupère une réponse du cache
   */
  get(messages: Array<{ role: string; content: string }>): string | undefined {
    const key = this.generateCacheKey(messages);
    return this.cache.get(key);
  }

  /**
   * Ajoute une réponse au cache
   */
  set(messages: Array<{ role: string; content: string }>, response: string): void {
    const key = this.generateCacheKey(messages);
    this.cache.set(key, response);
  }

  /**
   * Vérifie si une réponse existe dans le cache
   */
  has(messages: Array<{ role: string; content: string }>): boolean {
    const key = this.generateCacheKey(messages);
    return this.cache.has(key);
  }

  /**
   * Vide le cache
   */
  clear(): void {
    this.cache.clear();
  }

  /**
   * Nettoie les entrées expirées
   */
  cleanup(): number {
    return this.cache.cleanup();
  }

  /**
   * Obtient les statistiques
   */
  getStats(): CacheStats {
    return this.cache.getStats();
  }

  /**
   * Affiche les statistiques
   */
  printStats(): void {
    this.cache.printStats();
  }

  /**
   * Obtient les questions les plus fréquentes
   */
  getTopQuestions(limit: number = 10): Array<{ question: string; hits: number; age: number }> {
    return this.cache.getTopEntries(limit).map(entry => ({
      question: String(entry.key).substring(0, 100) + '...',
      hits: entry.hits,
      age: entry.age,
    }));
  }
}

// Instance singleton du cache Mistral
let mistralCacheInstance: MistralCache | null = null;

/**
 * Obtient l'instance du cache Mistral (singleton)
 */
export function getMistralCache(): MistralCache {
  if (!mistralCacheInstance) {
    mistralCacheInstance = new MistralCache(
      100, // 100 entrées max
      60 * 60 * 1000 // 1 heure de TTL
    );
  }
  return mistralCacheInstance;
}

/**
 * Réinitialise le cache Mistral (utile pour les tests)
 */
export function resetMistralCache(): void {
  if (mistralCacheInstance) {
    mistralCacheInstance.clear();
  }
  mistralCacheInstance = null;
}

export { LRUCache, MistralCache };
export default LRUCache;
