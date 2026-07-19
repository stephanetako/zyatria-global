import type { APIRoute } from 'astro';
import Stripe from 'stripe';

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    // Récupérer la clé secrète Stripe
    const stripeSecretKey = 
      locals?.runtime?.env?.STRIPE_SECRET_KEY || 
      import.meta.env.STRIPE_SECRET_KEY;

    if (!stripeSecretKey) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Configuration Stripe manquante'
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: '2024-12-18.acacia',
    });

    const body = await request.json();
    const { 
      planName, 
      amount, 
      currency = 'CAD', 
      type = 'payment',
      customerEmail,
      successUrl,
      cancelUrl 
    } = body;

    console.log('📦 Création de session Stripe avec taxation automatique:', { 
      planName, 
      amount, 
      currency, 
      type 
    });

    // Configuration de base de la session
    const sessionConfig: Stripe.Checkout.SessionCreateParams = {
      mode: type === 'subscription' ? 'subscription' : 'payment',
      customer_email: customerEmail,
      success_url: successUrl || `${request.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl || `${request.headers.get('origin')}/pricing`,
      
      // 🎯 TAXATION AUTOMATIQUE ACTIVÉE
      automatic_tax: {
        enabled: true,
      },
      
      // Métadonnées pour tracking
      metadata: {
        plan: planName,
        source: 'zyatria_website',
      },
      
      // Configuration des items
      line_items: [
        {
          price_data: {
            currency: currency.toLowerCase(),
            product_data: {
              name: planName,
              description: `Plan ${planName} - ZyatrIA Global`,
            },
            unit_amount: Math.round(amount * 100), // Convertir en centimes
            ...(type === 'subscription' && {
              recurring: {
                interval: 'month',
              },
            }),
          },
          quantity: 1,
          // Code de taxe pour les services SaaS
          tax_behavior: 'exclusive', // Les taxes sont ajoutées au prix
        },
      ],
      
      // Options de paiement
      payment_method_types: ['card'],
      
      // Permettre les codes promo
      allow_promotion_codes: true,
      
      // Collecter l'adresse de facturation pour les taxes
      billing_address_collection: 'required',
      
      // Pour les abonnements
      ...(type === 'subscription' && {
        subscription_data: {
          metadata: {
            plan: planName,
          },
        },
      }),
    };

    // Créer la session Stripe
    const session = await stripe.checkout.sessions.create(sessionConfig);

    console.log('✅ Session Stripe créée avec succès:', session.id);

    return new Response(
      JSON.stringify({
        success: true,
        sessionId: session.id,
        url: session.url,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

  } catch (error) {
    console.error('❌ Erreur création session Stripe:', error);
    
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Erreur inconnue',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};
