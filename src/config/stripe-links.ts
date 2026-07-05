







/**
 * Stripe Payment Links Configuration
 * 
 * ⚠️ IMPORTANT: Remplacez ces liens de test par vos vrais liens Stripe
 * 
 * Pour créer vos Payment Links:
 * 1. Allez sur https://dashboard.stripe.com/test/payment-links
 * 2. Cliquez sur "+ New" pour chaque produit
 * 3. Créez les produits avec les prix indiqués ci-dessous
 * 4. Copiez les liens générés et remplacez-les ici
 * 
 * Format attendu: https://buy.stripe.com/test_xxxxxxxxxxxxx
 */

export const STRIPE_PAYMENT_LINKS = {
  // 🟢 STARTER
  starter: {
    oneTime: 'https://buy.stripe.com/test_5kQ9ALeT4eyB3FmbL93VC0w', // 997 CAD - Déploiement Complet
    monthly: 'https://buy.stripe.com/test_28E14fcKWaildfW8yX3VC0x',  // 97 CAD/mois - Abonnement Mensuel
  },
  
  // 🔵 PROFESSIONAL
  professional: {
    oneTime: 'https://buy.stripe.com/test_eVqbITfX84Y15Nu16v3VC0s', // 2997 CAD - Déploiement Complet
    monthly: 'https://buy.stripe.com/test_5kQ5kv4eq1LP5Nug1p3VC0t',  // 297 CAD/mois - Abonnement Mensuel
  },
  
  // 🟣 ENTERPRISE
  enterprise: {
    oneTime: 'https://buy.stripe.com/test_fZu7sD3am4Y1gs8aH53VC0u', // 9997 CAD - Déploiement Complet
    monthly: 'https://buy.stripe.com/test_cNi28jaCOeyB5Nu4iH3VC0v',  // 997 CAD/mois - Abonnement Mensuel
  },
  
  // 🤖 MICRO-AGENTS
  microAgents: {
    leadQualification: 'https://buy.stripe.com/test_cNi00b8uGgGJ5NuaH53VC0i', // 197 CAD/mois - Qualification Automatique des Leads
    customerSupport: 'https://buy.stripe.com/test_9B6aEPeT4eyBb7OeXl3VC0j',    // 147 CAD/mois - Réponses Clients 24/7
    appointments: 'https://buy.stripe.com/test_bJe9AL6mydux8ZGcPd3VC0k',       // 127 CAD/mois - Gestion des Rendez-vous
    prospectFollowup: 'https://buy.stripe.com/test_4gMfZ93am2PT5Nu4iH3VC0l',   // 177 CAD/mois - Suivi des Prospects
    realEstate: 'https://buy.stripe.com/test_bJebIT5iu2PTgs8cPd3VC0m',         // 247 CAD/mois - Micro-Agent Immobilier
    ecommerce: 'https://buy.stripe.com/test_bJe8wHeT42PTfo4dTh3VC0n',          // 197 CAD/mois - Micro-Agent Commerce
  },
  
  // 🎯 SERVICES ADDITIONNELS
  services: {
    audit: 'https://buy.stripe.com/test_5kQ00b6iy0HLb7O9Bd3VC0p',        // 497 CAD - Audit IA Complet
    consultation: 'https://buy.stripe.com/test_6oE5kv8uG1LP3Fm7tT3VC0o', // 147 CAD - Consultation
  },
} as const;

// Alias pour compatibilité avec Pricing.tsx
export const stripeLinks = STRIPE_PAYMENT_LINKS;

// Détails des produits pour l'affichage
export const productDetails = {
  starter: {
    name: 'Starter',
    subtitle: 'Parfait pour démarrer',
    description: 'Idéal pour les petites entreprises qui veulent automatiser leurs processus de base.',
    oneTime: {
      price: 997,
      label: 'Paiement unique - Déploiement complet'
    },
    monthly: {
      price: 97,
      label: 'Par mois - Support et maintenance inclus'
    }
  },
  professional: {
    name: 'Professional',
    subtitle: 'Le plus populaire',
    description: 'Pour les entreprises en croissance qui ont besoin d\'automatisation avancée et d\'intégrations.',
    oneTime: {
      price: 2997,
      label: 'Paiement unique - Déploiement complet'
    },
    monthly: {
      price: 297,
      label: 'Par mois - Support prioritaire inclus'
    }
  },
  enterprise: {
    name: 'Enterprise',
    subtitle: 'Solution complète',
    description: 'Pour les grandes organisations qui nécessitent une solution IA complète et personnalisée.',
    oneTime: {
      price: 9997,
      label: 'Paiement unique - Solution sur mesure'
    },
    monthly: {
      price: 997,
      label: 'Par mois - Support 24/7 et SLA inclus'
    }
  },
  audit: {
    name: 'Audit IA Complet',
    subtitle: 'Analyse approfondie',
    description: 'Évaluation complète de vos processus et recommandations personnalisées pour l\'automatisation IA.',
    price: 497
  },
  consultation: {
    name: 'Consultation Stratégique',
    subtitle: '60 minutes avec un expert',
    description: 'Session de conseil personnalisée pour définir votre stratégie d\'automatisation IA.',
    price: 147
  }
} as const;

/**
 * Configuration des produits pour référence
 */
export const STRIPE_PRODUCTS = {
  starter: {
    oneTime: {
      name: 'ZyatrIA Starter - Déploiement Complet',
      price: 997.00,
      currency: 'CAD',
      type: 'one-time',
      description: '1 agent IA intelligent, automatisation de base, déploiement en 7 jours',
    },
    monthly: {
      name: 'ZyatrIA Starter - Abonnement Mensuel',
      price: 97.00,
      currency: 'CAD',
      type: 'recurring',
      interval: 'month',
      description: 'Support continu, mises à jour mensuelles, maintenance incluse',
    },
  },
  
  professional: {
    oneTime: {
      name: 'ZyatrIA Professional - Déploiement Complet',
      price: 2997.00,
      currency: 'CAD',
      type: 'one-time',
      description: '3 agents IA + 5 micro-agents, automatisation avancée, déploiement en 10 jours',
    },
    monthly: {
      name: 'ZyatrIA Professional - Abonnement Mensuel',
      price: 297.00,
      currency: 'CAD',
      type: 'recurring',
      interval: 'month',
      description: 'Support prioritaire, optimisations continues, analytics avancés',
    },
  },
  
  enterprise: {
    oneTime: {
      name: 'ZyatrIA Enterprise - Déploiement Complet',
      price: 9997.00,
      currency: 'CAD',
      type: 'one-time',
      description: 'Solution complète sur mesure, agents illimités, déploiement en 15 jours',
    },
    monthly: {
      name: 'ZyatrIA Enterprise - Abonnement Mensuel',
      price: 997.00,
      currency: 'CAD',
      type: 'recurring',
      interval: 'month',
      description: 'Support dédié 24/7, SLA garanti, développement continu',
    },
  },
  
  services: {
    audit: {
      name: 'Audit IA Complet',
      price: 497.00,
      currency: 'CAD',
      type: 'one-time',
      description: 'Analyse complète de vos processus, recommandations personnalisées',
    },
    consultation: {
      name: 'Consultation Stratégique',
      price: 147.00,
      currency: 'CAD',
      type: 'one-time',
      description: 'Session de consultation avec nos experts IA',
    },
  },
} as const;

/**
 * Helper pour obtenir un lien de paiement
 */
export function getPaymentLink(
  plan: 'starter' | 'professional' | 'enterprise',
  type: 'oneTime' | 'monthly'
): string {
  return STRIPE_PAYMENT_LINKS[plan][type];
}

/**
 * Helper pour obtenir un lien de service
 */
export function getServiceLink(service: 'audit' | 'consultation'): string {
  return STRIPE_PAYMENT_LINKS.services[service];
}

/**
 * Validation des liens (pour développement)
 */
export function validatePaymentLinks(): { valid: boolean; missing: string[] } {
  const missing: string[] = [];
  
  // Vérifier les plans
  (['starter', 'professional', 'enterprise'] as const).forEach(plan => {
    (['oneTime', 'monthly'] as const).forEach(type => {
      const link = STRIPE_PAYMENT_LINKS[plan][type];
      if (link.includes('VOTRE_LIEN_ICI')) {
        missing.push(`${plan}.${type}`);
      }
    });
  });
  
  // Vérifier les services
  (['audit', 'consultation'] as const).forEach(service => {
    const link = STRIPE_PAYMENT_LINKS.services[service];
    if (link.includes('VOTRE_LIEN_ICI')) {
      missing.push(`services.${service}`);
    }
  });
  
  return {
    valid: missing.length === 0,
    missing,
  };
}




















