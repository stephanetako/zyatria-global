import type { SubscriptionData } from './stripe-webhook-helpers';

/**
 * 🎯 LOGIQUE MÉTIER AVANCÉE POUR LES ABONNEMENTS
 * Utilise toutes les dates disponibles pour des fonctionnalités intelligentes
 */

// ============================================
// 1. GESTION DE LA PÉRIODE D'ESSAI
// ============================================

/**
 * Vérifie si l'abonnement est en période d'essai
 */
export function isInTrial(data: SubscriptionData): boolean {
  if (!data.trial_end) return false;
  return data.trial_end > new Date();
}

/**
 * Calcule les jours restants dans la période d'essai
 */
export function getTrialDaysLeft(data: SubscriptionData): number {
  if (!data.trial_end || !isInTrial(data)) return 0;
  
  const now = new Date();
  const msLeft = data.trial_end.getTime() - now.getTime();
  return Math.ceil(msLeft / (1000 * 60 * 60 * 24));
}

/**
 * Détermine si on doit envoyer un rappel de fin d'essai
 */
export function shouldSendTrialReminder(data: SubscriptionData): {
  send: boolean;
  daysLeft: number;
  urgency: 'high' | 'medium' | 'low';
} {
  const daysLeft = getTrialDaysLeft(data);
  
  if (daysLeft === 0) {
    return { send: false, daysLeft: 0, urgency: 'low' };
  }
  
  // Envoyer rappel à 7, 3 et 1 jour(s) restant(s)
  const shouldSend = [7, 3, 1].includes(daysLeft);
  const urgency = daysLeft === 1 ? 'high' : daysLeft === 3 ? 'medium' : 'low';
  
  return { send: shouldSend, daysLeft, urgency };
}

// ============================================
// 2. GESTION DE LA PÉRIODE DE FACTURATION
// ============================================

/**
 * Calcule les jours restants dans la période actuelle
 */
export function getBillingDaysLeft(data: SubscriptionData): number {
  const now = new Date();
  const msLeft = data.current_period_end.getTime() - now.getTime();
  return Math.ceil(msLeft / (1000 * 60 * 60 * 24));
}

/**
 * Calcule le pourcentage de la période écoulée
 */
export function getBillingPeriodProgress(data: SubscriptionData): number {
  const now = new Date();
  const total = data.current_period_end.getTime() - data.current_period_start.getTime();
  const elapsed = now.getTime() - data.current_period_start.getTime();
  
  return Math.min(100, Math.max(0, (elapsed / total) * 100));
}

/**
 * Détermine si on doit envoyer un rappel de renouvellement
 */
export function shouldSendRenewalReminder(data: SubscriptionData): {
  send: boolean;
  daysLeft: number;
  message: string;
} {
  const daysLeft = getBillingDaysLeft(data);
  
  // Envoyer rappel à 7 et 3 jours avant renouvellement
  if ([7, 3].includes(daysLeft)) {
    return {
      send: true,
      daysLeft,
      message: `Votre abonnement sera renouvelé dans ${daysLeft} jours`
    };
  }
  
  return { send: false, daysLeft, message: '' };
}

// ============================================
// 3. GESTION DES ANNULATIONS
// ============================================

/**
 * Vérifie si l'abonnement est programmé pour annulation
 */
export function isScheduledForCancellation(data: SubscriptionData): boolean {
  return data.cancel_at_period_end;
}

/**
 * Calcule les jours avant l'annulation effective
 */
export function getDaysUntilCancellation(data: SubscriptionData): number | null {
  if (!data.cancel_at_period_end) return null;
  
  const now = new Date();
  const msLeft = data.current_period_end.getTime() - now.getTime();
  return Math.ceil(msLeft / (1000 * 60 * 60 * 24));
}

/**
 * Détermine si on doit proposer une offre de rétention
 */
export function shouldOfferRetention(data: SubscriptionData): {
  offer: boolean;
  daysLeft: number | null;
  discount: number;
  message: string;
} {
  if (!data.cancel_at_period_end) {
    return { offer: false, daysLeft: null, discount: 0, message: '' };
  }
  
  const daysLeft = getDaysUntilCancellation(data);
  
  if (daysLeft && daysLeft <= 7) {
    return {
      offer: true,
      daysLeft,
      discount: 20,
      message: `Restez avec nous ! 20% de réduction sur votre prochain mois`
    };
  }
  
  return { offer: false, daysLeft, discount: 0, message: '' };
}

// ============================================
// 4. ANALYSE DE L'ABONNEMENT
// ============================================

/**
 * Calcule la durée totale de l'abonnement
 */
export function getSubscriptionDuration(data: SubscriptionData): {
  days: number;
  months: number;
  status: 'new' | 'active' | 'long-term';
} {
  const now = new Date();
  const start = data.current_period_start;
  
  const msDuration = now.getTime() - start.getTime();
  const days = Math.floor(msDuration / (1000 * 60 * 60 * 24));
  const months = Math.floor(days / 30);
  
  let status: 'new' | 'active' | 'long-term' = 'new';
  if (months >= 6) status = 'long-term';
  else if (months >= 1) status = 'active';
  
  return { days, months, status };
}

/**
 * Génère un statut détaillé de l'abonnement
 */
export function getSubscriptionStatus(data: SubscriptionData): {
  status: string;
  inTrial: boolean;
  trialDaysLeft: number;
  billingDaysLeft: number;
  scheduledForCancellation: boolean;
  daysUntilCancellation: number | null;
  healthScore: number; // 0-100
  recommendations: string[];
} {
  const inTrial = isInTrial(data);
  const trialDaysLeft = getTrialDaysLeft(data);
  const billingDaysLeft = getBillingDaysLeft(data);
  const scheduledForCancellation = isScheduledForCancellation(data);
  const daysUntilCancellation = getDaysUntilCancellation(data);
  
  // Calcul du score de santé (0-100)
  // Par défaut, tout est à 100% - on baisse uniquement pour les VRAIS problèmes
  let healthScore = 100;
  
  // VRAIS PROBLÈMES qui baissent le score :
  if (scheduledForCancellation) healthScore -= 50; // Annulation programmée
  if (data.status === 'past_due') healthScore -= 50; // Paiement en retard
  if (data.status === 'unpaid') healthScore -= 50; // Non payé
  if (data.status === 'canceled') healthScore -= 100; // Annulé
  if (data.status === 'incomplete') healthScore -= 30; // Incomplet
  if (data.status === 'incomplete_expired') healthScore -= 100; // Expiré
  
  // Note: La période d'essai est NORMALE, donc ne baisse PAS le score
  // Note: Un renouvellement proche est NORMAL, donc ne baisse PAS le score
  
  // Recommandations
  const recommendations: string[] = [];
  
  if (inTrial && trialDaysLeft <= 3) {
    recommendations.push('Envoyer rappel de fin d\'essai');
  }
  
  if (scheduledForCancellation) {
    recommendations.push('Proposer offre de rétention');
    recommendations.push('Contacter le client pour feedback');
  }
  
  if (billingDaysLeft <= 7 && !scheduledForCancellation) {
    recommendations.push('Envoyer rappel de renouvellement');
  }
  
  if (data.status === 'past_due') {
    recommendations.push('URGENT: Problème de paiement à résoudre');
  }
  
  if (data.status === 'unpaid') {
    recommendations.push('CRITIQUE: Paiement non reçu');
  }
  
  return {
    status: data.status,
    inTrial,
    trialDaysLeft,
    billingDaysLeft,
    scheduledForCancellation,
    daysUntilCancellation,
    healthScore: Math.max(0, healthScore),
    recommendations
  };
}

// ============================================
// 5. ACTIONS AUTOMATIQUES
// ============================================

/**
 * Détermine toutes les actions à effectuer pour cet abonnement
 */
export function getAutomatedActions(data: SubscriptionData): {
  sendEmail: boolean;
  emailType: 'trial_reminder' | 'renewal_reminder' | 'retention_offer' | 'payment_failed' | null;
  updateCRM: boolean;
  notifyTeam: boolean;
  priority: 'high' | 'medium' | 'low';
  actions: string[];
} {
  const actions: string[] = [];
  let sendEmail = false;
  let emailType: 'trial_reminder' | 'renewal_reminder' | 'retention_offer' | 'payment_failed' | null = null;
  let updateCRM = true; // Toujours mettre à jour le CRM
  let notifyTeam = false;
  let priority: 'high' | 'medium' | 'low' = 'low';
  
  // Vérifier période d'essai
  const trialReminder = shouldSendTrialReminder(data);
  if (trialReminder.send) {
    sendEmail = true;
    emailType = 'trial_reminder';
    priority = trialReminder.urgency;
    actions.push(`Envoyer rappel d'essai (${trialReminder.daysLeft} jours restants)`);
  }
  
  // Vérifier renouvellement
  const renewalReminder = shouldSendRenewalReminder(data);
  if (renewalReminder.send) {
    sendEmail = true;
    emailType = 'renewal_reminder';
    actions.push(renewalReminder.message);
  }
  
  // Vérifier annulation
  const retention = shouldOfferRetention(data);
  if (retention.offer) {
    sendEmail = true;
    emailType = 'retention_offer';
    priority = 'high';
    notifyTeam = true;
    actions.push(retention.message);
    actions.push('Notifier l\'équipe commerciale');
  }
  
  // Vérifier problèmes de paiement
  if (data.status === 'past_due' || data.status === 'unpaid') {
    sendEmail = true;
    emailType = 'payment_failed';
    priority = 'high';
    notifyTeam = true;
    actions.push('URGENT: Résoudre problème de paiement');
  }
  
  return {
    sendEmail,
    emailType,
    updateCRM,
    notifyTeam,
    priority,
    actions
  };
}

// ============================================
// 6. FORMATAGE POUR L'AFFICHAGE
// ============================================

/**
 * Formate les dates pour l'affichage
 */
export function formatSubscriptionDates(data: SubscriptionData): {
  currentPeriod: string;
  trial: string | null;
  cancellation: string | null;
} {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };
  
  const currentPeriod = `${formatDate(data.current_period_start)} - ${formatDate(data.current_period_end)}`;
  
  const trial = data.trial_end && isInTrial(data)
    ? `Essai jusqu'au ${formatDate(data.trial_end)}`
    : null;
  
  const cancellation = data.cancel_at_period_end
    ? `Annulation prévue le ${formatDate(data.current_period_end)}`
    : null;
  
  return { currentPeriod, trial, cancellation };
}

/**
 * Génère un résumé textuel de l'abonnement
 */
export function getSubscriptionSummary(data: SubscriptionData): string {
  const status = getSubscriptionStatus(data);
  const dates = formatSubscriptionDates(data);
  
  let summary = `Abonnement ${data.subscription_id}\n`;
  summary += `Statut: ${data.status}\n`;
  summary += `Période: ${dates.currentPeriod}\n`;
  
  if (dates.trial) {
    summary += `${dates.trial} (${status.trialDaysLeft} jours restants)\n`;
  }
  
  if (dates.cancellation) {
    summary += `⚠️ ${dates.cancellation}\n`;
  }
  
  summary += `Score de santé: ${status.healthScore}/100\n`;
  
  if (status.recommendations.length > 0) {
    summary += `\nRecommandations:\n`;
    status.recommendations.forEach(rec => {
      summary += `  • ${rec}\n`;
    });
  }
  
  return summary;
}

