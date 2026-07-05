import type { APIRoute } from 'astro';

interface ChatRequest {
  user_id: string;
  message: string;
}

interface MistralMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

// Analyser l'intention du message
async function analyzeIntent(text: string, apiKey: string): Promise<string> {
  const prompt = `
Classifie l'intention principale de ce message client en UN SEUL mot parmi :
- demande_info
- reclamation
- commande
- support_technique
- urgent
- autre

Message : "${text}"
Intention :
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
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.1,
        max_tokens: 10,
      }),
    });

    if (!response.ok) {
      throw new Error(`Mistral API error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content.trim().toLowerCase();
  } catch (error) {
    console.error('Error analyzing intent:', error);
    
    // Fallback : analyse simple par mots-clés
    const lowerText = text.toLowerCase();
    if (lowerText.includes('urgent') || lowerText.includes('rapidement')) {
      return 'urgent';
    } else if (lowerText.includes('problème') || lowerText.includes('bug') || lowerText.includes('erreur')) {
      return 'reclamation';
    } else if (lowerText.includes('commande') || lowerText.includes('acheter') || lowerText.includes('prix')) {
      return 'commande';
    } else if (lowerText.includes('comment') || lowerText.includes('aide') || lowerText.includes('support')) {
      return 'support_technique';
    } else {
      return 'demande_info';
    }
  }
}

// Générer une réponse adaptée
async function generateResponse(
  text: string,
  intent: string,
  channel: string,
  apiKey: string
): Promise<string> {
  const systemPrompt = `
Tu es un agent client ultra-professionnel pour ZyatrIA Global, une entreprise de solutions d'automatisation IA.
Réponds en français, de manière claire, professionnelle et adaptée au canal (${channel}).
Sois concis mais chaleureux. Utilise un ton moderne et accessible.
  `.trim();

  const userPrompt = `
Canal : ${channel}
Intention : ${intent}
Message client : "${text}"

Réponds en français de manière professionnelle et adaptée.
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
        max_tokens: 300,
      }),
    });

    if (!response.ok) {
      throw new Error(`Mistral API error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error generating response:', error);
    
    // Réponses prédéfinies en fallback
    const fallbackResponses: Record<string, string> = {
      demande_info: "Merci pour votre message ! Je serais ravi de vous aider. Pouvez-vous me donner plus de détails sur ce que vous recherchez ?",
      reclamation: "Je suis sincèrement désolé pour ce désagrément. Votre satisfaction est notre priorité. Pouvez-vous me donner plus de détails pour que je puisse vous aider au mieux ?",
      commande: "Excellent ! Pour passer une commande ou obtenir un devis personnalisé, je vous invite à remplir notre formulaire de contact ou à réserver une consultation gratuite.",
      support_technique: "Je comprends votre besoin d'assistance technique. Notre équipe d'experts est là pour vous aider. Pouvez-vous me décrire le problème rencontré ?",
      urgent: "Votre demande est prioritaire. Un membre de notre équipe vous contactera dans les plus brefs délais. En attendant, pouvez-vous me donner plus de détails ?",
      autre: "Merci pour votre message. Je prends note de votre demande et la transmets à l'équipe concernée. Nous reviendrons vers vous rapidement.",
    };

    return fallbackResponses[intent] || fallbackResponses.autre;
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
          channel: 'chat',
          content: 'Désolé, le service est temporairement indisponible. Veuillez réessayer plus tard.',
          timestamp: new Date().toISOString()
        }),
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Parser le body
    const body = await request.json() as ChatRequest;
    
    if (!body.message || !body.user_id) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: message and user_id' }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Analyser l'intention
    const intent = await analyzeIntent(body.message, apiKey);
    
    // Générer la réponse
    const responseText = await generateResponse(body.message, intent, 'chat', apiKey);

    // Retourner la réponse
    return new Response(
      JSON.stringify({
        channel: 'chat',
        recipient: body.user_id,
        content: responseText,
        intent: intent,
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
    console.error('Error in chat endpoint:', error);
    
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error',
        channel: 'chat',
        content: 'Désolé, une erreur est survenue. Veuillez réessayer.',
        timestamp: new Date().toISOString()
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};
