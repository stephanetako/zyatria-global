import type { APIRoute } from 'astro';
import Stripe from 'stripe';

interface CheckoutSessionBody {
  priceId: string;
  successUrl?: string;
  cancelUrl?: string;
}

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    // Get Stripe secret key from environment
    const stripeSecretKey = locals?.runtime?.env?.STRIPE_SECRET_KEY || import.meta.env.STRIPE_SECRET_KEY;
    
    if (!stripeSecretKey) {
      console.error('STRIPE_SECRET_KEY is not configured');
      return new Response(
        JSON.stringify({ error: 'Payment configuration error' }), 
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: '2026-01-28.clover',
    });

    // Parse request body
    const body = await request.json() as CheckoutSessionBody;
    const { priceId, successUrl, cancelUrl } = body;

    if (!priceId) {
      return new Response(
        JSON.stringify({ error: 'Price ID is required' }), 
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: successUrl || `${new URL(request.url).origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl || `${new URL(request.url).origin}/pricing`,
      billing_address_collection: 'required',
      allow_promotion_codes: true,
      subscription_data: {
        trial_period_days: 14, // 14-day free trial
      },
      customer_email: undefined, // Will be filled by customer
    });

    return new Response(
      JSON.stringify({ 
        sessionId: session.id,
        url: session.url 
      }), 
      { 
        status: 200, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );

  } catch (error: any) {
    console.error('Stripe Checkout Session Error:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message || 'Failed to create checkout session' 
      }), 
      { 
        status: 500, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );
  }
};

