import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const body = await request.json() as { messages: Array<{ role: string; content: string }> };
    const { messages } = body;

    // Récupérer la clé API Mistral depuis les variables d'environnement
    const apiKey = locals?.runtime?.env?.MISTRAL_API_KEY || import.meta.env.MISTRAL_API_KEY;

    if (!apiKey) {
      return new Response(
        JSON.stringify({ 
          error: 'Configuration manquante',
          message: 'Désolé, le service de chat n\'est pas configuré. Veuillez contacter le support.' 
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Appel à l'API Mistral
    const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'mistral-tiny', // Modèle gratuit
        messages: [
          {
            role: 'system',
            content: 'Tu es un assistant IA professionnel pour ZyatrIA Global, une entreprise spécialisée dans les agents IA et l\'automatisation. Tu aides les clients à comprendre nos services, nos micro-agents, et comment l\'IA peut transformer leur entreprise. Sois courtois, professionnel et concis.'
          },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 500
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Erreur API Mistral:', errorData);
      
      return new Response(
        JSON.stringify({ 
          error: 'Erreur API',
          message: 'Désolé, je rencontre des difficultés techniques. Veuillez réessayer dans quelques instants.' 
        }),
        { status: 502, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json() as { 
      choices?: Array<{ 
        message?: { 
          content?: string 
        } 
      }> 
    };
    const assistantMessage = data.choices?.[0]?.message?.content || 'Désolé, je n\'ai pas pu générer une réponse.';

    return new Response(
      JSON.stringify({ message: assistantMessage }),
      { 
        status: 200, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Erreur serveur:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Erreur serveur',
        message: 'Une erreur inattendue s\'est produite. Veuillez réessayer.' 
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};


