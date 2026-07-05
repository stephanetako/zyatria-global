import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { planName, amount, currency = 'CAD', type = 'payment' } = body;

    console.log('📦 Création de session Stripe:', { planName, amount, currency, type });

    // Pour l'instant, on redirige vers une page de succès
    // Plus tard, tu pourras intégrer l'API Stripe ici
    
    // Simuler une session Stripe
    const sessionUrl = type === 'subscription' 
      ? `https://buy.stripe.com/test/subscription?prefilled_email=client@example.com&client_reference_id=${planName}`
      : `https://buy.stripe.com/test/payment?prefilled_email=client@example.com&client_reference_id=${planName}`;

    return new Response(
      JSON.stringify({
        success: true,
        url: sessionUrl,
        message: 'Session créée avec succès'
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    console.error('❌ Erreur création session:', error);
    
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Erreur inconnue'
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
};
