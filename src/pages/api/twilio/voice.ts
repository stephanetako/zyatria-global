/**
 * 🔇 ENDPOINT TWILIO - MODE DORMANT
 * 
 * Ce fichier est prêt à être activé quand tu veux intégrer les vrais appels Twilio.
 * 
 * POUR ACTIVER :
 * 1. Crée un compte Twilio : https://www.twilio.com/try-twilio
 * 2. Achète un numéro de téléphone (~1€/mois)
 * 3. Ajoute dans .env :
 *    TWILIO_ACCOUNT_SID=ACxxxx
 *    TWILIO_AUTH_TOKEN=xxxxx
 *    TWILIO_PHONE_NUMBER=+1234567890
 * 4. Configure le webhook Twilio vers : https://ton-site.com/api/twilio/voice
 * 5. Décommente le code ci-dessous
 */

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, locals }) => {
  return new Response(
    JSON.stringify({ 
      message: 'Twilio endpoint dormant. Voir instructions dans le fichier pour activer.' 
    }),
    { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    }
  );
};

/* 
// ========================================
// 🔊 CODE TWILIO À DÉCOMMENTER
// ========================================

import type { APIRoute } from 'astro';

interface TwilioRequest {
  From?: string;
  To?: string;
  CallSid?: string;
  SpeechResult?: string;
  Digits?: string;
}

async function generateVoiceResponse(
  speechText: string,
  apiKey: string
): Promise<string> {
  const systemPrompt = `
Tu es un agent téléphonique ultra-professionnel pour ZyatrIA Global.
Réponds en français, de manière claire, concise et chaleureuse.
Limite tes réponses à 2-3 phrases maximum (pour la voix).
Sois direct et efficace.
  `.trim();

  const userPrompt = `
Transcription de l'appel : "${speechText}"

Réponds de manière professionnelle et concise (max 2-3 phrases).
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
        max_tokens: 150,
      }),
    });

    if (!response.ok) {
      throw new Error(`Mistral API error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error generating voice response:', error);
    return "Je suis désolé, je rencontre un problème technique. Un membre de notre équipe vous rappellera rapidement.";
  }
}

function generateTwiMLResponse(text: string, recordCall: boolean = true): string {
  const baseUrl = import.meta.env.PUBLIC_SITE_URL || 'https://votre-site.com';
  
  let twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="Polly.Celine" language="fr-FR">${escapeXml(text)}</Say>`;

  if (recordCall) {
    twiml += `
  <Record 
    action="${baseUrl}/api/twilio/voice-handler" 
    transcribe="true" 
    transcribeCallback="${baseUrl}/api/twilio/transcription"
    maxLength="30"
    playBeep="true"
  />`;
  }

  twiml += `
  <Say voice="Polly.Celine" language="fr-FR">Merci pour votre appel. Au revoir.</Say>
</Response>`;

  return twiml;
}

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    // Récupérer la clé API Mistral
    const apiKey = locals?.runtime?.env?.MISTRAL_API_KEY || import.meta.env.MISTRAL_API_KEY;
    
    if (!apiKey) {
      const errorTwiml = generateTwiMLResponse(
        "Désolé, le service est temporairement indisponible. Veuillez rappeler plus tard.",
        false
      );
      return new Response(errorTwiml, {
        status: 200,
        headers: { 'Content-Type': 'text/xml' }
      });
    }

    // Parser les données Twilio (form-urlencoded)
    const formData = await request.formData();
    const twilioData: TwilioRequest = {
      From: formData.get('From')?.toString(),
      To: formData.get('To')?.toString(),
      CallSid: formData.get('CallSid')?.toString(),
      SpeechResult: formData.get('SpeechResult')?.toString(),
      Digits: formData.get('Digits')?.toString(),
    };

    console.log('📞 Appel Twilio reçu:', {
      from: twilioData.From,
      callSid: twilioData.CallSid,
      speech: twilioData.SpeechResult,
    });

    let responseText: string;

    if (twilioData.SpeechResult) {
      // L'appelant a parlé, générer une réponse intelligente
      responseText = await generateVoiceResponse(twilioData.SpeechResult, apiKey);
    } else {
      // Premier appel, message d'accueil
      responseText = "Bonjour et bienvenue chez ZyatrIA Global. Comment puis-je vous aider aujourd'hui ?";
    }

    // Générer la réponse TwiML
    const twiml = generateTwiMLResponse(responseText, true);

    return new Response(twiml, {
      status: 200,
      headers: { 
        'Content-Type': 'text/xml',
        'Cache-Control': 'no-cache'
      }
    });
  } catch (error) {
    console.error('Error in Twilio voice endpoint:', error);
    
    const errorTwiml = generateTwiMLResponse(
      "Désolé, une erreur est survenue. Veuillez rappeler plus tard.",
      false
    );
    
    return new Response(errorTwiml, {
      status: 200,
      headers: { 'Content-Type': 'text/xml' }
    });
  }
};

// ========================================
// FIN DU CODE TWILIO
// ========================================
*/
