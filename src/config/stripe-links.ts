

/**
 * Stripe Payment Links Configuration - LIVE MODE
 * 
 * ✅ TOUS LES LIENS SONT EN MODE PRODUCTION (LIVE)
 * 
 * IMPORTANT: Remplacez ces liens par VOS VRAIS liens Stripe Payment Links
 * créés dans votre Dashboard Stripe en mode LIVE.
 * 
 * Pour créer vos liens:
 * 1. Allez sur https://dashboard.stripe.com/payment-links
 * 2. Créez un Payment Link pour chaque produit
 * 3. Copiez l'URL complète ici
 * 
 * Dernière mise à jour: 22 mars 2025
 * Total: 14 produits configurés
 */

export const stripeLinks = {
  // Plans principaux
  plans: {
    // Starter Plan
    starterMonthly: 'https://buy.stripe.com/3cI4gr3aDbXH2VX9so',
    starterOneTime: 'https://buy.stripe.com/fZufZ97qTgdX1RT9so',
    
    // Professional Plan
    professionalMonthly: 'https://buy.stripe.com/bJedR19z1bXH2VXbAw',
    professionalOneTime: 'https://buy.stripe.com/dRmfZ9cLd9Pz7cd5c8',
    
    // Enterprise Plan
    enterpriseMonthly: 'https://buy.stripe.com/bJeeV57qT1j3eEFcEA',
    enterpriseOneTime: 'https://buy.stripe.com/eVq28j26zbXH5455c8',
  },

  // Services additionnels
  services: {
    audit: 'https://buy.stripe.com/9B600b9z11j3gMNbAw',
    consultation: 'https://buy.stripe.com/aFabIT9z10eZ7cd1ZW',
    formation: 'https://buy.stripe.com/00wfZ9eTle5P0NP9so',
  },

  // Micro-agents
  microAgents: {
    leadQualification: 'https://buy.stripe.com/5kQeV59z1bXH4018ok',
    customerSupport: 'https://buy.stripe.com/00wdR13aDe5P7cd8ok',
    appointments: 'https://buy.stripe.com/28E9ALbH92n7gMN484',
    prospectFollowup: 'https://buy.stripe.com/5kQeV5cLdaTD2VXeMI',
    realEstate: 'https://buy.stripe.com/6oUaEP9z14vf9kl6gc',
    ecommerce: 'https://buy.stripe.com/aFa28j3aD6Dn4017kg',
  },
};

// Alias pour compatibilité avec Pricing.tsx
export const STRIPE_PAYMENT_LINKS = stripeLinks;

// Détails des produits pour l'affichage
export const productDetails = {
  starter: {
    name: 'Starter',
    subtitle: 'Parfait pour démarrer',
    description: 'Idéal pour les petites entreprises qui veulent automatiser leurs processus de base.',
    oneTime: {
      price: 0,
      label: 'Non disponible en paiement unique'
    },
    monthly: {
      price: 68,
      label: 'Par mois - Support et maintenance inclus'
    }
  },
  professional: {
    name: 'Professional',
    subtitle: 'Le plus populaire',
    description: 'Pour les entreprises en croissance qui ont besoin d\'automatisation avancée et d\'intégrations.',
    oneTime: {
      price: 697,
      label: 'Paiement unique - Déploiement complet'
    },
    monthly: {
      price: 208,
      label: 'Par mois - Support prioritaire inclus'
    }
  },
  enterprise: {
    name: 'Enterprise',
    subtitle: 'Solution complète',
    description: 'Pour les grandes organisations qui nécessitent une solution IA complète et personnalisée.',
    oneTime: {
      price: 997,
      label: 'Paiement unique - Solution sur mesure'
    },
    monthly: {
      price: 698,
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
  },
  formation: {
    name: 'Formation IA pour Équipes',
    subtitle: 'Formation complète',
    description: 'Formation approfondie pour transformer vos équipes avec l\'IA.',
    price: 997
  },
  // Détails des micro-agents
  microAgents: {
    leadQualification: {
      name: 'Qualification Automatique des Leads',
      price: 69,
      description: 'Qualification intelligente 24/7, scoring automatique, routage vers les bonnes équipes.'
    },
    customerSupport: {
      name: 'Réponses Clients 24/7',
      price: 69,
      description: 'Réponses instantanées 24/7, support multilingue, base de connaissances FAQ.'
    },
    appointments: {
      name: 'Gestion des Rendez-vous',
      price: 68,
      description: 'Réservation en ligne directe, rappels automatiques, synchronisation agenda.'
    },
    prospectFollowup: {
      name: 'Suivi des Prospects',
      price: 180,
      description: 'Séquences automatisées, multi-canal (email, SMS, WhatsApp), timing intelligent.'
    },
    realEstate: {
      name: 'Micro-Agent Immobilier',
      price: 208,
      description: 'Planification des visites, qualification des acheteurs, réponses sur les biens.'
    },
    ecommerce: {
      name: 'Micro-Agent E-commerce',
      price: 195,
      description: 'Récupération de paniers abandonnés, suivi de commandes, FAQ produits.'
    }
  }
} as const;

/**
 * Configuration des produits pour référence
 */
export const STRIPE_PRODUCTS = {
  starter: {
    oneTime: null,
    monthly: {
      name: 'Bot IA Starter - Déploiement Initial',
      price: 68.00,
      currency: 'CAD',
      type: 'recurring',
      interval: 'month',
      description: 'Support continu, mises à jour mensuelles, maintenance incluse',
    },
  },
  
  professional: {
    oneTime: {
      name: 'Bot IA Professional - Déploiement 3 Bots',
      price: 697.00,
      currency: 'CAD',
      type: 'one-time',
      description: '3 agents IA, automatisation avancée, déploiement rapide',
    },
    monthly: {
      name: 'Bot IA Professional - Déploiement 3 Bots',
      price: 208.00,
      currency: 'CAD',
      type: 'recurring',
      interval: 'month',
      description: 'Support prioritaire, optimisations continues, analytics avancés',
    },
  },
  
  enterprise: {
    oneTime: {
      name: 'Bot IA Enterprise - Suite Complète 7 Bots',
      price: 997.00,
      currency: 'CAD',
      type: 'one-time',
      description: 'Solution complète, 7 agents IA, déploiement rapide',
    },
    monthly: {
      name: 'Bot IA Enterprise - Suite Complète 7 Bots',
      price: 698.00,
      currency: 'CAD',
      type: 'recurring',
      interval: 'month',
      description: 'Support dédié 24/7, SLA garanti, développement continu',
    },
  },
  
  services: {
    audit: {
      name: 'Audit IA Complet + Plan d\'Action 90 jours',
      price: 497.00,
      currency: 'CAD',
      type: 'one-time',
      description: 'Analyse complète de vos processus, recommandations personnalisées',
    },
    consultation: {
      name: 'Consultation Stratégique IA',
      price: 147.00,
      currency: 'CAD',
      type: 'one-time',
      description: 'Session de consultation avec nos experts IA',
    },
    formation: {
      name: 'Formation IA pour Équipes',
      price: 997.00,
      currency: 'CAD',
      type: 'one-time',
      description: 'Formation complète pour transformer vos équipes avec l\'IA',
    },
  },
  
  microAgents: {
    leadQualification: {
      name: 'Micro-Agent - Qualification Automatique des Leads',
      price: 69.00,
      currency: 'CAD',
      type: 'recurring',
      interval: 'month',
      description: 'Qualification intelligente 24/7, scoring automatique, routage vers les bonnes équipes',
    },
    customerSupport: {
      name: 'Micro-Agent - Réponses Clients 24/7',
      price: 69.00,
      currency: 'CAD',
      type: 'recurring',
      interval: 'month',
      description: 'Réponses instantanées 24/7, support multilingue, base de connaissances FAQ',
    },
    appointments: {
      name: 'Micro-Agent - Gestion des Rendez-vous',
      price: 68.00,
      currency: 'CAD',
      type: 'recurring',
      interval: 'month',
      description: 'Réservation en ligne directe, rappels automatiques, synchronisation agenda',
    },
    prospectFollowup: {
      name: 'Micro-Agent - Suivi des Prospects',
      price: 180.00,
      currency: 'CAD',
      type: 'recurring',
      interval: 'month',
      description: 'Séquences automatisées, multi-canal (email, SMS, WhatsApp), timing intelligent',
    },
    realEstate: {
      name: 'Micro-Agent - Immobilier',
      price: 208.00,
      currency: 'CAD',
      type: 'recurring',
      interval: 'month',
      description: 'Planification des visites, qualification des acheteurs, réponses sur les biens',
    },
    ecommerce: {
      name: 'Micro-Agent - E-commerce',
      price: 195.00,
      currency: 'CAD',
      type: 'recurring',
      interval: 'month',
      description: 'Récupération de paniers abandonnés, suivi de commandes, FAQ produits',
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
  const link = STRIPE_PAYMENT_LINKS[plan][type];
  if (!link) {
    console.warn(`No payment link available for ${plan} ${type}`);
    return '';
  }
  return link;
}

/**
 * Helper pour obtenir un lien de service
 */
export function getServiceLink(service: 'audit' | 'consultation' | 'formation'): string {
  return STRIPE_PAYMENT_LINKS.services[service];
}

/**
 * Helper pour obtenir un lien de micro-agent
 */
export function getMicroAgentLink(
  agent: 'leadQualification' | 'customerSupport' | 'appointments' | 'prospectFollowup' | 'realEstate' | 'ecommerce'
): string {
  return STRIPE_PAYMENT_LINKS.microAgents[agent];
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
      if (!link && !(plan === 'starter' && type === 'oneTime')) {
        missing.push(`${plan}.${type}`);
      }
    });
  });
  
  // Vérifier les services
  (['audit', 'consultation', 'formation'] as const).forEach(service => {
    const link = STRIPE_PAYMENT_LINKS.services[service];
    if (!link) {
      missing.push(`services.${service}`);
    }
  });
  
  // Vérifier les micro-agents
  (['leadQualification', 'customerSupport', 'appointments', 'prospectFollowup', 'realEstate', 'ecommerce'] as const).forEach(agent => {
    const link = STRIPE_PAYMENT_LINKS.microAgents[agent];
    if (!link) {
      missing.push(`microAgents.${agent}`);
    }
  });
  
  return {
    valid: missing.length === 0,
    missing,
  };
}


