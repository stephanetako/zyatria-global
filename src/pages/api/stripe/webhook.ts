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
  apiVersion: '2024-12-18.acacia',
});

export const POST: APIRoute = async ({ request }) => {
  const sig = request.headers.get('stripe-signature');
  const webhookSecret = import.meta.env.STRIPE_WEBHOOK_SECRET;

  if (!sig) {
    console.error('❌ Pas de signature Stripe');
    return new Response('No signature', { status: 400 });
  }

  if (!webhookSecret) {
    console.error('❌ STRIPE_WEBHOOK_SECRET manquant');
    return new Response('Webhook secret not configured', { status: 500 });
  }

  let event: Stripe.Event;

  try {
    const body = await request.text();
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err: any) {
    console.error('❌ Erreur webhook:', err.message);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  console.log(`\n🎯 Événement reçu: ${event.type}`);
  console.log(`📅 ID: ${event.id}`);
  console.log(`🧪 Mode test: ${isTestMode(event) ? 'OUI' : 'NON'}`);

  try {
    switch (event.type) {
      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log('✅ Paiement réussi!');
        console.log(`   💰 Montant: ${paymentIntent.amount / 100} ${paymentIntent.currency.toUpperCase()}`);
        console.log(`   👤 Client: ${paymentIntent.customer || 'N/A'}`);
        break;
      }

      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log('❌ Paiement échoué!');
        console.log(`   💰 Montant: ${paymentIntent.amount / 100} ${paymentIntent.currency.toUpperCase()}`);
        console.log(`   ⚠️  Raison: ${paymentIntent.last_payment_error?.message || 'Inconnue'}`);
        break;
      }

      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        const paymentData = formatPaymentData(session);
        
        console.log('🎉 Checkout complété!');
        console.log(`   💰 Montant: ${paymentData.amount} ${paymentData.currency}`);
        console.log(`   📧 Email: ${paymentData.customer_email || 'N/A'}`);
        console.log(`   🆔 Session: ${paymentData.session_id}`);

        // Actions automatiques
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
        
        console.log(`📋 Abonnement ${event.type.split('.').pop()}!`);
        console.log(`   🆔 ID: ${subData.subscription_id}`);
        console.log(`   👤 Client: ${subData.customer_id}`);
        console.log(`   📊 Statut: ${subData.status}`);
        console.log(`   📅 Période: ${subData.current_period_start.toLocaleDateString()} → ${subData.current_period_end.toLocaleDateString()}`);
        
        if (subData.trial_end) {
          console.log(`   🎁 Essai jusqu'au: ${subData.trial_end.toLocaleDateString()}`);
        }
        
        if (subData.canceled_at) {
          console.log(`   ⚠️  Annulé le: ${subData.canceled_at.toLocaleDateString()}`);
        }

        await notifyTeam(event.type, subData);
        break;
      }

      default:
        console.log(`ℹ️  Événement non géré: ${event.type}`);
    }

    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('❌ Erreur traitement webhook:', error);
    return new Response(`Error: ${error.message}`, { status: 500 });
  }
};
