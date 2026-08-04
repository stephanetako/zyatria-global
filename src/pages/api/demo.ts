import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    // Validation basique
    if (!data.email || !data.name) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Email et nom requis",
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // TODO: Intégrer avec votre CRM ou service d'email
    // Exemple: envoyer à Formspree, HubSpot, etc.
    
    return new Response(
      JSON.stringify({
        success: true,
        message: "Démo demandée avec succès ! Nous vous contacterons sous 24h.",
        data: {
          email: data.email,
          name: data.name,
          timestamp: new Date().toISOString(),
        },
      }),
      {
        status: 200,
        headers: { 
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store',
        },
      }
    );
  } catch (error) {
    console.error('Erreur API /api/demo:', error);
    
    return new Response(
      JSON.stringify({
        success: false,
        message: "Erreur lors du traitement de la demande",
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};

// Optionnel: Support GET pour vérifier que l'endpoint existe
export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      endpoint: '/api/demo',
      method: 'POST',
      description: 'Demande de démonstration ZyatrIA Global',
      requiredFields: ['email', 'name'],
      optionalFields: ['company', 'phone', 'message'],
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
};
