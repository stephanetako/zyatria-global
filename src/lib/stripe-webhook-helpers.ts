import type Stripe from 'stripe';

/**
 * Helpers pour les webhooks Stripe
 * Fonctions utilitaires pour traiter les événements
 */

export interface PaymentData {
  type: string;
  timestamp: string;
  session_id?: string;
  customer_id?: string | Stripe.Customer | Stripe.DeletedCustomer | null;
  customer_email?: string | null;
  amount: number;
  currency: string;
  payment_status?: string;
  metadata?: Stripe.Metadata;
}

export interface SubscriptionData {
  subscription_id: string;
  customer_id: string | Stripe.Customer | Stripe.DeletedCustomer | null;
  status: string;
  current_period_start: Date;
  current_period_end: Date;
  trial_start: Date | null;
  trial_end: Date | null;
  ended_at: Date | null;
  canceled_at: Date | null;
  cancel_at_period_end: boolean;
}

/**
 * Formate les données de paiement pour le logging
 */
export function formatPaymentData(session: Stripe.Checkout.Session): PaymentData {
  return {
    type: 'checkout_completed',
    timestamp: new Date().toISOString(),
    session_id: session.id,
    customer_id: session.customer,
    customer_email: session.customer_details?.email,
    amount: session.amount_total ? session.amount_total / 100 : 0,
    currency: session.currency?.toUpperCase() || 'USD',
    payment_status: session.payment_status,
    metadata: session.metadata || {},
  };
}

/**
 * Formate les données d'abonnement
 */
export function formatSubscriptionData(subscription: Stripe.Subscription): SubscriptionData {
  return {
    subscription_id: subscription.id,
    customer_id: subscription.customer,
    status: subscription.status,
    current_period_start: new Date((subscription as any).current_period_start * 1000),
    current_period_end: new Date((subscription as any).current_period_end * 1000),
    trial_start: subscription.trial_start ? new Date(subscription.trial_start * 1000) : null,
    trial_end: subscription.trial_end ? new Date(subscription.trial_end * 1000) : null,
    ended_at: subscription.ended_at ? new Date(subscription.ended_at * 1000) : null,
    canceled_at: subscription.canceled_at ? new Date(subscription.canceled_at * 1000) : null,
    cancel_at_period_end: subscription.cancel_at_period_end,
  };
}

/**
 * Envoie une notification email (à implémenter avec votre service d'email)
 */
export async function sendPaymentConfirmationEmail(
  email: string,
  paymentData: PaymentData
): Promise<void> {
  console.log(`📧 Email de confirmation à envoyer à: ${email}`);
  console.log('Données:', paymentData);
  
  // TODO: Implémenter avec SendGrid, Mailgun, Resend, etc.
  // Exemple avec fetch vers votre service d'email:
  /*
  await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      personalizations: [{
        to: [{ email }],
        subject: 'Confirmation de paiement - ZyatrIA Global',
      }],
      from: { email: 'noreply@zyatria.global' },
      content: [{
        type: 'text/html',
        value: generateEmailHTML(paymentData),
      }],
    }),
  });
  */
}

/**
 * Envoie une notification à votre équipe
 */
export async function notifyTeam(
  eventType: string,
  data: PaymentData | SubscriptionData
): Promise<void> {
  console.log(`🔔 Notification équipe: ${eventType}`);
  console.log('Données:', data);
  
  // TODO: Implémenter avec Slack, Discord, email, etc.
  // Exemple avec Slack:
  /*
  await fetch(process.env.SLACK_WEBHOOK_URL!, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      text: `Nouveau paiement reçu!`,
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `*${eventType}*\nMontant: ${data.amount} ${data.currency}`,
          },
        },
      ],
    }),
  });
  */
}

/**
 * Sauvegarde les données de paiement dans votre base de données
 */
export async function savePaymentToDatabase(paymentData: PaymentData): Promise<void> {
  console.log('💾 Sauvegarde en base de données:', paymentData);
  
  // TODO: Implémenter avec votre base de données
  // Exemple avec Supabase, Firebase, MongoDB, etc.
  /*
  const { data, error } = await supabase
    .from('payments')
    .insert([paymentData]);
  
  if (error) {
    console.error('Erreur sauvegarde:', error);
    throw error;
  }
  */
}

/**
 * Met à jour le CRM avec les informations client
 */
export async function updateCRM(
  customerEmail: string,
  paymentData: PaymentData
): Promise<void> {
  console.log('📊 Mise à jour CRM pour:', customerEmail);
  
  // TODO: Implémenter avec votre CRM
  // Exemple avec HubSpot:
  /*
  await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.HUBSPOT_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      properties: {
        email: customerEmail,
        last_payment_amount: paymentData.amount,
        last_payment_date: paymentData.timestamp,
      },
    }),
  });
  */
}

/**
 * Génère le HTML pour l'email de confirmation
 */
export function generateEmailHTML(paymentData: PaymentData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #C98769; color: white; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
        .amount { font-size: 24px; font-weight: bold; color: #C98769; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Confirmation de paiement</h1>
        </div>
        <div class="content">
          <p>Bonjour,</p>
          <p>Nous avons bien reçu votre paiement de <span class="amount">${paymentData.amount} ${paymentData.currency}</span>.</p>
          <p><strong>Détails de la transaction:</strong></p>
          <ul>
            <li>Date: ${new Date(paymentData.timestamp).toLocaleDateString('fr-FR')}</li>
            <li>Montant: ${paymentData.amount} ${paymentData.currency}</li>
            <li>Statut: ${paymentData.payment_status}</li>
          </ul>
          <p>Merci pour votre confiance!</p>
        </div>
        <div class="footer">
          <p>ZyatrIA Global - IA Sans Frontières</p>
          <p>contact@zyatria.global</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

/**
 * Vérifie si un webhook est en mode test
 */
export function isTestMode(event: Stripe.Event): boolean {
  return event.livemode === false;
}

/**
 * Extrait le plan/produit depuis les métadonnées
 */
export function extractPlanFromMetadata(metadata?: Stripe.Metadata): string {
  if (!metadata) return 'unknown';
  return metadata.plan || metadata.product || 'unknown';
}

/**
 * Calcule le montant total avec taxes
 */
export function calculateTotalWithTax(
  amount: number,
  taxRate: number = 0
): number {
  return amount * (1 + taxRate);
}

/**
 * Formate un montant pour l'affichage
 */
export function formatCurrency(
  amount: number,
  currency: string = 'USD'
): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: currency.toUpperCase(),
  }).format(amount);
}


