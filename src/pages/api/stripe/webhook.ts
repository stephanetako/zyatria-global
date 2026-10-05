
import type { APIRoute } from 'astro';
import Stripe from 'stripe';
import {
  formatPaymentData,
  formatSubscriptionData,
  sendPaymentConfirmationEmail,
  notifyTeam,
  savePaymentToDatabase,
  updateCRM,
  isTestMode,
} from '../../../lib/stripe-webhook-helpers';

export const prerender = false;

const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-05-27.dahlia',
  typescript: true,
});

export const POST: APIRoute = async ({ request }) => {
  const sig = request.headers.get('stripe-signature');
  const webhookSecret = import.meta.env.STRIPE_WEBHOOK_SECRET;

  if (!sig) {
    console.error('[STRIPE] No signature');
    return new Response('No signature', { status: 400 });
  }

  if (!webhookSecret) {
    console.error('[STRIPE] STRIPE_WEBHOOK_SECRET missing');
    return new Response('Webhook secret not configured', { status: 500 });
  }

  let event: Stripe.Event;

  try {
    const body = await request.text();
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err: any) {
    console.error('[STRIPE] Webhook error:', err.message);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  console.log(`\n[STRIPE] Event received: ${event.type}`);
  console.log(`[STRIPE] ID: ${event.id}`);
  console.log(`[STRIPE] Test mode: ${isTestMode(event) ? 'YES' : 'NO'}`);

  try {
    switch (event.type) {
      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log('[STRIPE] Payment succeeded!');
        console.log(`[STRIPE] Amount: ${paymentIntent.amount / 100} ${paymentIntent.currency.toUpperCase()}`);
        console.log(`[STRIPE] Customer: ${paymentIntent.customer || 'N/A'}`);
        break;
      }

      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log('[STRIPE] Payment failed!');
        console.log(`[STRIPE] Amount: ${paymentIntent.amount / 100} ${paymentIntent.currency.toUpperCase()}`);
        console.log(`[STRIPE] Reason: ${paymentIntent.last_payment_error?.message || 'Unknown'}`);
        break;
      }

      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        const paymentData = formatPaymentData(session);
        
        console.log('[STRIPE] Checkout completed!');
        console.log(`[STRIPE] Amount: ${paymentData.amount} ${paymentData.currency}`);
        console.log(`[STRIPE] Email: ${paymentData.customer_email || 'N/A'}`);
        console.log(`[STRIPE] Session: ${paymentData.session_id}`);

        // Automatic actions
        if (paymentData.customer_email) {
          await sendPaymentConfirmationEmail(paymentData.customer_email, paymentData);
          await updateCRM(paymentData.customer_email, paymentData);
        }
        
        await savePaymentToDatabase(paymentData);
        await notifyTeam('checkout_completed', paymentData);
        break;
      }

      case 'customer.subscription.created':
      case 'customer.subscription.updated':
      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription;
        const subData = formatSubscriptionData(subscription);
        
        console.log(`[STRIPE] Subscription ${event.type.split('.').pop()}!`);
        console.log(`[STRIPE] ID: ${subData.subscription_id}`);
        console.log(`[STRIPE] Customer: ${subData.customer_id}`);
        console.log(`[STRIPE] Status: ${subData.status}`);
        console.log(`[STRIPE] Period: ${subData.current_period_start.toLocaleDateString()} -> ${subData.current_period_end.toLocaleDateString()}`);
        
        if (subData.trial_end) {
          console.log(`[STRIPE] Trial until: ${subData.trial_end.toLocaleDateString()}`);
        }
        
        if (subData.canceled_at) {
          console.log(`[STRIPE] Canceled on: ${subData.canceled_at.toLocaleDateString()}`);
        }

        await notifyTeam(event.type, subData);
        break;
      }

      default:
        console.log(`[STRIPE] Unhandled event: ${event.type}`);
    }

    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('[STRIPE] Webhook processing error:', error);
    return new Response(`Error: ${error.message}`, { status: 500 });
  }
};

