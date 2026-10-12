




/**
 * Stripe Payment Links Configuration - LIVE MODE
 *
 * ✅ LIENS STRIPE CONFIGURÉS ET FONCTIONNELS
 *
 * Tous les liens pointent vers les vrais Payment Links Stripe en mode LIVE.
 *
 * Dernière mise à jour: liens réels confirmés par le client
 */

export const stripeLinks = {
  // Plans principaux (abonnements mensuels)
  plans: {
    starterMonthly: 'https://buy.stripe.com/6oU5kvbH9f9T2VX1ZW9oc1b', // 102$ CA/mois
    professionalMonthly: 'https://buy.stripe.com/aFafZ94eHe5P1RTeMI9oc14', // 146$ CA/mois
    enterpriseMonthly: 'https://buy.stripe.com/9B64greTlgdXdAB5c89oc19', // 698$ CA/mois
  },

  // Services additionnels (paiement unique)
  services: {
    audit: 'https://buy.stripe.com/9B600b9z11j3gMNbAw9oc0P', // 497$ - Audit IA Complet + Plan d'Action 90 jours
    consultation: 'https://buy.stripe.com/aFabIT9z10eZ7cd1ZW9oc0K', // 147$ - Consultation stratégique
    formation: 'https://buy.stripe.com/14AaEP26zbXH1RT5c89oc17', // 995$ - Formation IA pour Équipes
  },

  // Frais de déploiement initial (paiement unique, par plan)
  setupFees: {
    starter: 'https://buy.stripe.com/8x2bITeTl2n7dAB5c89oc1a', // 495$
    professional: 'https://buy.stripe.com/5kQeV56mPf9T5459so9oc1c', // 697$
    enterprise: 'https://buy.stripe.com/00wdR18uX6Dn1RT5c89oc18', // 997$
  },

  // Micro-agents (tous mensuels)
  microAgents: {
    leadQualification: 'https://buy.stripe.com/8x2cMX6mP7Hr7cd3409oc10', // 75$/mois
    customerSupport: 'https://buy.stripe.com/00wdR13aDe5P7cd8ok9oc0w', // 69$/mois
    appointments: 'https://buy.stripe.com/28E9ALbH92n7gMN4849oc0R', // 68$/mois
    prospectFollowup: 'https://buy.stripe.com/5kQeV5cLdaTD2VXeMI9oc0y', // 180$/mois
    realEstate: 'https://buy.stripe.com/6oUaEP9z14vf9kl6gc9oc0z', // 208$/mois
    ecommerce: 'https://buy.stripe.com/aFa28j3aD6Dn4017kg9oc0A', // 195$/mois
  },
};

// Alias pour compatibilité
export const STRIPE_PAYMENT_LINKS = stripeLinks;

/**
 * Retourne le lien de paiement Stripe, ou un lien de contact par courriel
 * en attendant qu'un vrai Payment Link Stripe soit configuré.
 */
export function getPaymentLink(link: string, subject: string): string {
  if (link) return link;
  return `mailto:ZyatrIA.contact@gmail.com?subject=${encodeURIComponent(subject)}`;
}

// Détails des produits pour l'affichage
export const productDetails = {
  starter: {
    name: 'Starter',
    subtitle: 'Parfait pour démarrer',
    description: 'Idéal pour les petites entreprises qui veulent automatiser leurs processus de base.',
    monthly: {
      price: 102,
      label: 'Par mois - Support et maintenance inclus',
    },
  },
  professional: {
    name: 'Professional',
    subtitle: 'Le plus populaire',
    description: "Pour les entreprises en croissance qui ont besoin d'automatisation avancée et d'intégrations.",
    monthly: {
      price: 146,
      label: 'Par mois - Déploiement 3 bots',
    },
  },
  enterprise: {
    name: 'Enterprise',
    subtitle: 'Solution complète',
    description: 'Pour les grandes organisations qui nécessitent une solution IA complète et personnalisée.',
    monthly: {
      price: 698,
      label: 'Par mois - Support 24/7 et SLA inclus',
    },
  },
  audit: {
    name: 'Audit IA Complet + Plan d\'Action 90 jours',
    subtitle: 'Analyse approfondie',
    description: "Évaluation complète de vos processus et recommandations personnalisées pour l'automatisation IA, avec un plan d'action détaillé sur 90 jours.",
    price: 497,
  },
  consultation: {
    name: 'Consultation Stratégique',
    subtitle: '60 minutes avec un expert',
    description: "Session de conseil personnalisée pour définir votre stratégie d'automatisation IA.",
    price: 147,
  },
  formation: {
    name: 'Formation IA pour Équipes',
    subtitle: 'Formation complète de votre équipe',
    description: "Formation approfondie pour votre équipe sur l'utilisation, la gestion et l'optimisation de vos agents IA.",
    price: 995,
  },
  setupFees: {
    starter: {
      name: 'Bot IA Starter - Déploiement Initial',
      price: 495,
    },
    professional: {
      name: 'Bot IA Professionnel - Déploiement 3 Bots',
      price: 697,
    },
    enterprise: {
      name: 'Bot IA Enterprise - Suite Complète 7 Bots',
      price: 997,
    },
  },
  // Détails des micro-agents
  microAgents: {
    leadQualification: {
      name: 'Qualification Automatique des Leads',
      price: 75,
      description: 'Qualification intelligente 24/7, scoring automatique, routage vers les bonnes équipes.',
    },
    customerSupport: {
      name: 'Réponses Clients 24/7',
      price: 69,
      description: 'Réponses instantanées 24/7, support multilingue, base de connaissances FAQ.',
    },
    appointments: {
      name: 'Gestion des Rendez-vous',
      price: 68,
      description: 'Réservation en ligne directe, rappels automatiques, synchronisation agenda.',
    },
    prospectFollowup: {
      name: 'Suivi des Prospects',
      price: 180,
      description: 'Séquences automatisées, multi-canal (email, SMS, WhatsApp), timing intelligent.',
    },
    realEstate: {
      name: 'Micro-Agent Immobilier',
      price: 208,
      description: 'Planification des visites, qualification des acheteurs, réponses sur les biens.',
    },
    ecommerce: {
      name: 'Micro-Agent E-commerce',
      price: 195,
      description: 'Récupération de paniers abandonnés, suivi de commandes, FAQ produits.',
    },
  },
} as const;

/**
 * Configuration des produits pour référence
 */
export const STRIPE_PRODUCTS = {
  starter: {
    monthly: {
      name: 'Bot IA Starter - Abonnement Mensuel',
      price: 102.0,
      currency: 'CAD',
      type: 'recurring',
      interval: 'month',
      description: 'Support continu, mises à jour mensuelles, maintenance incluse',
    },
  },

  professional: {
    monthly: {
      name: 'Bot IA Professional - Déploiement 3 Bots',
      price: 146.0,
      currency: 'CAD',
      type: 'recurring',
      interval: 'month',
      description: 'Support prioritaire, optimisations continues, analytics avancés',
    },
  },

  enterprise: {
    monthly: {
      name: 'Bot IA Enterprise - Abonnement Mensuel',
      price: 698.0,
      currency: 'CAD',
      type: 'recurring',
      interval: 'month',
      description: 'Support dédié 24/7, SLA garanti, développement continu',
    },
  },

  services: {
    audit: {
      name: "Audit IA Complet + Plan d'Action 90 jours",
      price: 497.0,
      currency: 'CAD',
      type: 'one-time',
      description: "Analyse complète de vos processus et plan d'action détaillé sur 90 jours",
    },
    consultation: {
      name: 'Consultation Stratégique IA',
      price: 149.0,
      currency: 'CAD',
      type: 'one-time',
      description: 'Session de consultation avec nos experts IA',
    },
  },

  microAgents: {
    leadQualification: {
      name: 'Micro-Agent - Qualification Automatique des Leads',
      price: 69.0,
      currency: 'CAD',
      type: 'recurring',
      interval: 'month',
      description: 'Qualification intelligente 24/7, scoring automatique, routage vers les bonnes équipes',
    },
    customerSupport: {
      name: 'Micro-Agent - Réponses Clients 24/7',
      price: 69.0,
      currency: 'CAD',
      type: 'recurring',
      interval: 'month',
      description: 'Réponses instantanées 24/7, support multilingue, base de connaissances FAQ',
    },
    appointments: {
      name: 'Micro-Agent - Gestion des Rendez-vous',
      price: 68.0,
      currency: 'CAD',
      type: 'recurring',
      interval: 'month',
      description: 'Réservation en ligne directe, rappels automatiques, synchronisation agenda',
    },
    prospectFollowup: {
      name: 'Micro-Agent - Suivi des Prospects',
      price: 180.0,
      currency: 'CAD',
      type: 'recurring',
      interval: 'month',
      description: 'Séquences automatisées, multi-canal (email, SMS, WhatsApp), timing intelligent',
    },
    realEstate: {
      name: 'Micro-Agent - Immobilier',
      price: 208.0,
      currency: 'CAD',
      type: 'recurring',
      interval: 'month',
      description: 'Planification des visites, qualification des acheteurs, réponses sur les biens',
    },
    ecommerce: {
      name: 'Micro-Agent - E-commerce',
      price: 195.0,
      currency: 'CAD',
      type: 'recurring',
      interval: 'month',
      description: 'Récupération de paniers abandonnés, suivi de commandes, FAQ produits',
    },
  },
} as const;

/**
 * Helper pour obtenir un lien de service
 */
export function getServiceLink(service: 'audit' | 'consultation'): string {
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
  const planKeys = ['starterMonthly', 'professionalMonthly', 'enterpriseMonthly'] as const;
  planKeys.forEach((key) => {
    if (!STRIPE_PAYMENT_LINKS.plans[key]) {
      missing.push(`plans.${key}`);
    }
  });

  // Vérifier les services
  (['audit', 'consultation'] as const).forEach((service) => {
    const link = STRIPE_PAYMENT_LINKS.services[service];
    if (!link) {
      missing.push(`services.${service}`);
    }
  });

  // Vérifier les micro-agents
  (['leadQualification', 'customerSupport', 'appointments', 'prospectFollowup', 'realEstate', 'ecommerce'] as const).forEach(
    (agent) => {
      const link = STRIPE_PAYMENT_LINKS.microAgents[agent];
      if (!link) {
        missing.push(`microAgents.${agent}`);
      }
    }
  );

  return {
    valid: missing.length === 0,
    missing,
  };
}









