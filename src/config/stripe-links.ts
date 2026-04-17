/**
 * Stripe Payment Links Configuration
 * 
 * Ces liens sont générés depuis le tableau de bord Stripe.
 * Pour mettre à jour : https://dashboard.stripe.com/payment-links
 */

export const stripeLinks = {
  // Plans principaux - Paiements uniques
  starter: {
    oneTime: 'https://buy.stripe.com/8x26oz6mP7Hr689eMI9oc00', // 5 000 $CA
    monthly: 'https://buy.stripe.com/28EfZ9fXp2n7cwxeMI9oc01', // 299 $CA/mois
  },
  professional: {
    oneTime: 'https://buy.stripe.com/28E4gr9z12n7gMN1ZW9oc02', // 1 500 $CA
    monthly: 'https://buy.stripe.com/14A4grbH9aTDaopaws9oc03', // 799 $CA/mois
  },
  enterprise: {
    oneTime: 'https://buy.stripe.com/7sYfZ93aDbXHgMN5c89oc05', // 45 000 $CA
    monthly: 'https://buy.stripe.com/fZu5kv3aD5zjdABeMI9oc06', // 2 499 $CA/mois
  },
  
  // Services complémentaires
  services: {
    audit: 'https://buy.stripe.com/eVqfZ99z14vf9kl9so9oc04', // 2 500 $CA - Audit IA Complet + Plan d'Action 90 jours
    consultation: 'https://buy.stripe.com/4gM00b7qT6DndAB9so9oc07', // 500 $CA - Consultation Stratégique IA
  },
} as const;

// Détails des produits pour affichage
export const productDetails = {
  starter: {
    name: 'Bot IA Starter',
    subtitle: 'Déploiement Initial',
    description: 'Solution idéale pour démarrer avec l\'IA',
    oneTime: {
      price: 5000,
      currency: 'CAD',
      label: 'Paiement unique',
    },
    monthly: {
      price: 299,
      currency: 'CAD',
      label: 'Abonnement mensuel',
    },
  },
  professional: {
    name: 'Bot IA Professional',
    subtitle: 'Déploiement 3 Bots',
    description: 'Pour les entreprises en croissance',
    oneTime: {
      price: 1500,
      currency: 'CAD',
      label: 'Paiement unique',
    },
    monthly: {
      price: 799,
      currency: 'CAD',
      label: 'Abonnement mensuel',
    },
  },
  enterprise: {
    name: 'Bot IA Enterprise',
    subtitle: 'Suite Complète 7 Bots',
    description: 'Solution complète pour grandes organisations',
    oneTime: {
      price: 45000,
      currency: 'CAD',
      label: 'Paiement unique',
    },
    monthly: {
      price: 2499,
      currency: 'CAD',
      label: 'Abonnement mensuel',
    },
  },
  audit: {
    name: 'Audit IA Complet',
    subtitle: 'Plan d\'Action 90 jours',
    description: 'Audit détaillé de vos processus avec identification des opportunités d\'automatisation et plan d\'action sur 90 jours',
    price: 2500,
    currency: 'CAD',
  },
  consultation: {
    name: 'Consultation Stratégique IA',
    subtitle: 'Session personnalisée',
    description: 'Consultation d\'expert pour définir votre stratégie IA',
    price: 500,
    currency: 'CAD',
  },
} as const;
