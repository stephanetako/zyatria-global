import type { APIRoute } from 'astro';

interface EmailRequest {
  sender: string;
  subject: string;
  body: string;
}

async function generateEmailResponse(
  body: string,
  subject: string,
  apiKey: string
): Promise<string> {
  const systemPrompt = `
Tu es un agent client ultra-professionnel pour ZyatrIA Global, une entreprise de solutions d'automatisation IA.
Tu réponds à des emails clients en français, de manière claire, professionnelle et courtoise.
Sois concis mais chaleureux. Utilise un ton moderne et accessible.
  `.trim();

  const userPrompt = `
Sujet de l'email : "${subject}"
Message du client : "${body}"

Rédige une réponse professionnelle en français.
  `.trim();

  try {
    const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'mistral-small-latest',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt },
        ],
        temperature: 0.7,
        max_tokens: 400,
      }),
    });

    if (!response.ok) {
      throw new Error(`Mistral API error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error generating email response:', error);
    return `Bonjour,\n\nMerci pour votre message concernant "${subject}".\n\nNous avons bien reçu votre demande et notre équipe vous répondra dans les plus brefs délais.\n\nCordialement,\nL'équipe ZyatrIA Global`;
  }
}

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    // Récupérer la clé API Mistral
    const apiKey = locals?.runtime?.env?.MISTRAL_API_KEY || import.meta.env.MISTRAL_API_KEY;
    
    if (!apiKey) {
      return new Response(
        JSON.stringify({ 
          error: 'Configuration error: MISTRAL_API_KEY not found',
          response: 'Désolé, le service est temporairement indisponible. Veuillez réessayer plus tard.',
        }),
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Parser le body
    const body = await request.json() as EmailRequest;
    
    if (!body.body || !body.sender) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: sender and body' }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Générer la réponse
    const responseText = await generateEmailResponse(
      body.body,
      body.subject || 'Demande client',
      apiKey
    );

    // Retourner la réponse
    return new Response(
      JSON.stringify({
        response: responseText,
        to: body.sender,
        timestamp: new Date().toISOString(),
      }),
      {
        status: 200,
        headers: { 
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate'
        },
      }
    );
  } catch (error) {
    console.error('Error in email endpoint:', error);
    
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error',
        response: 'Désolé, une erreur est survenue. Veuillez réessayer.',
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};
