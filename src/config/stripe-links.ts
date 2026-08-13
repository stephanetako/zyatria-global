/**
 * Stripe Payment Links Configuration - LIVE MODE
 * 
 * ✅ LIENS STRIPE CONFIGURÉS ET FONCTIONNELS
 * 
 * Tous les liens pointent vers les vrais Payment Links Stripe en mode LIVE.
 * 
 * Dernière mise à jour: 22 mars 2025
 * Liens reçus et configurés
 */

export const stripeLinks = {
  // Plans principaux
  plans: {
    // Professional Plan - 208$/mois ou 697$ one-time
    professionalMonthly: 'https://buy.stripe.com/8x200baD51j3cwxdIE9oc0T',
    professionalOneTime: 'https://buy.stripe.com/cNieV59z16DnbstfQM9oc0U',
    
    // Starter et Enterprise - utiliser Professional en attendant
    starterMonthly: 'https://buy.stripe.com/8x200baD51j3cwxdIE9oc0T',
    starterOneTime: 'https://buy.stripe.com/cNieV59z16DnbstfQM9oc0U',
    enterpriseMonthly: 'https://buy.stripe.com/8x200baD51j3cwxdIE9oc0T',
    enterpriseOneTime: 'https://buy.stripe.com/cNieV59z16DnbstfQM9oc0U',
  },

  // Services additionnels
  services: {
    consultation: 'https://buy.stripe.com/aFabIT9z10eZ7cd1ZW9oc0K', // 149$
    audit: 'https://buy.stripe.com/14A5kv6mP7Hr1RT4849oc0h', // 147$ (Consultation Stratégique)
    formation: 'https://buy.stripe.com/14A5kv6mP7Hr1RT4849oc0h', // Utilise consultation pour l'instant
  },

  // Micro-agents (tous mensuels)
  microAgents: {
    leadQualification: 'https://buy.stripe.com/cNi4gr6mP5zjfIJ0VS9oc0S', // 69$/mois
    customerSupport: 'https://buy.stripe.com/00wdR13aDe5P7cd8ok9oc0w', // 69$/mois
    appointments: 'https://buy.stripe.com/28E9ALbH92n7gMN4849oc0R', // 68$/mois
    prospectFollowup: 'https://buy.stripe.com/5kQeV5cLdaTD2VXeMI9oc0y', // 180$/mois
    realEstate: 'https://buy.stripe.com/6oUaEP9z14vf9kl6gc9oc0z', // 208$/mois
    ecommerce: 'https://buy.stripe.com/aFa28j3aD6Dn4017kg9oc0A', // 195$/mois
  },
};

// Alias pour compatibilité
export const STRIPE_PAYMENT_LINKS = stripeLinks;

// Détails des produits pour l'affichage
export const productDetails = {
  starter: {
    name: 'Starter',
    subtitle: 'Parfait pour démarrer',
    description: 'Idéal pour les petites entreprises qui veulent automatiser leurs processus de base.',
    oneTime: {
      price: 697,
      originalPrice: 697,
      label: 'Paiement unique - Déploiement complet'
    },
    monthly: {
      price: 208,
      originalPrice: 208,
      discount: 0,
      label: 'Par mois - Support et maintenance inclus'
    }
  },
  professional: {
    name: 'Professional',
    subtitle: 'Le plus populaire',
    description: 'Pour les entreprises en croissance qui ont besoin d\'automatisation avancée et d\'intégrations.',
    oneTime: {
      price: 697,
      originalPrice: 697,
      label: 'Paiement unique - Déploiement 3 Bots'
    },
    monthly: {
      price: 208,
      originalPrice: 208,
      discount: 0,
      label: 'Par mois - Déploiement 3 Bots'
    }
  },
  enterprise: {
    name: 'Enterprise',
    subtitle: 'Solution complète',
    description: 'Pour les grandes organisations qui nécessitent une solution IA complète et personnalisée.',
    oneTime: {
      price: 697,
      originalPrice: 697,
      label: 'Paiement unique - Solution sur mesure'
    },
    monthly: {
      price: 208,
      originalPrice: 208,
      discount: 0,
      label: 'Par mois - Support 24/7 et SLA inclus'
    }
  },
  audit: {
    name: 'Audit IA Complet',
    subtitle: 'Analyse approfondie',
    description: 'Évaluation complète de vos processus et recommandations personnalisées pour l\'automatisation IA.',
    price: 147
  },
  consultation: {
    name: 'Consultation Stratégique',
    subtitle: '60 minutes avec un expert',
    description: 'Session de conseil personnalisée pour définir votre stratégie d\'automatisation IA.',
    price: 149
  },
  formation: {
    name: 'Formation IA pour Équipes',
    subtitle: 'Formation complète',
    description: 'Formation approfondie pour transformer vos équipes avec l\'IA.',
    price: 147
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
    oneTime: {
      name: 'Bot IA Starter - Paiement Unique',
      price: 697.00,
      currency: 'CAD',
      type: 'one-time',
      description: 'Déploiement complet, support inclus',
    },
    monthly: {
      name: 'Bot IA Starter - Abonnement Mensuel',
      price: 208.00,
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
      name: 'Bot IA Enterprise - Paiement Unique',
      price: 697.00,
      currency: 'CAD',
      type: 'one-time',
      description: 'Solution complète, 7 agents IA, déploiement rapide',
    },
    monthly: {
      name: 'Bot IA Enterprise - Abonnement Mensuel',
      price: 208.00,
      currency: 'CAD',
      type: 'recurring',
      interval: 'month',
      description: 'Support dédié 24/7, SLA garanti, développement continu',
    },
  },
  
  services: {
    audit: {
      name: 'Consultation Stratégique IA',
      price: 147.00,
      currency: 'CAD',
      type: 'one-time',
      description: 'Analyse complète de vos processus, recommandations personnalisées',
    },
    consultation: {
      name: 'Consultation Stratégique IA',
      price: 149.00,
      currency: 'CAD',
      type: 'one-time',
      description: 'Session de consultation avec nos experts IA',
    },
    formation: {
      name: 'Formation IA pour Équipes',
      price: 147.00,
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
  const planKeyMap: Record<string, string> = {
    'starter-oneTime': 'starterOneTime',
    'starter-monthly': 'starterMonthly',
    'professional-oneTime': 'professionalOneTime',
    'professional-monthly': 'professionalMonthly',
    'enterprise-oneTime': 'enterpriseOneTime',
    'enterprise-monthly': 'enterpriseMonthly'
  };
  
  const key = `${plan}-${type}`;
  const stripeLinkKey = planKeyMap[key];
  const link = (STRIPE_PAYMENT_LINKS.plans as any)[stripeLinkKey];
  
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
  const planKeys = ['starterMonthly', 'starterOneTime', 'professionalMonthly', 'professionalOneTime', 'enterpriseMonthly', 'enterpriseOneTime'];
  planKeys.forEach(key => {
    if (!(STRIPE_PAYMENT_LINKS.plans as any)[key]) {
      missing.push(`plans.${key}`);
    }
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
