import type Stripe from 'stripe';

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

export async function sendPaymentConfirmationEmail(
  email: string,
  paymentData: PaymentData
): Promise<void> {
  console.log(`?? Email de confirmation à envoyer à: ${email}`);
  console.log('Données:', paymentData);
}

export async function notifyTeam(
  eventType: string,
  data: PaymentData | SubscriptionData
): Promise<void> {
  console.log(`?? Notification équipe: ${eventType}`);
  console.log('Données:', data);
}

export async function savePaymentToDatabase(paymentData: PaymentData): Promise<void> {
  console.log('?? Sauvegarde en base de données:', paymentData);
}

export async function updateCRM(
  customerEmail: string,
  paymentData: PaymentData
): Promise<void> {
  console.log('?? Mise à jour CRM pour:', customerEmail);
}

export function isTestMode(event: Stripe.Event): boolean {
  return event.livemode === false;
}
