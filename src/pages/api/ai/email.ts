import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const { sender, subject, body } = await request.json();

    if (!body) {
      return new Response(
        JSON.stringify({ error: 'Le corps du message est requis' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Simuler une réponse intelligente pour les emails
    // Dans un vrai système, vous intégreriez avec votre service email
    const emailResponses = [
      `Merci pour votre email concernant "${subject}". Notre équipe va traiter votre demande dans les plus brefs délais.`,
      `Nous avons bien reçu votre message. Un de nos experts va vous répondre sous 24h.`,
      `Votre demande a été enregistrée avec succès. Nous reviendrons vers vous très prochainement.`
    ];

    const response = emailResponses[Math.floor(Math.random() * emailResponses.length)];

    // Log pour le suivi
    console.log('Email reçu:', { sender, subject, body });

    return new Response(
      JSON.stringify({
        success: true,
        response,
        ticketId: `EMAIL-${Date.now()}`,
        estimatedResponseTime: '24 heures'
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    console.error('Erreur lors du traitement de l\'email:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Erreur lors du traitement de votre email',
        message: error instanceof Error ? error.message : 'Erreur inconnue'
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};
