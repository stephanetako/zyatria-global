/**
 * 🔇 TWILIO VOICE HANDLER - MODE DORMANT
 * 
 * Gère les enregistrements vocaux après que l'utilisateur a parlé.
 * À activer en même temps que voice.ts
 */

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  return new Response(
    JSON.stringify({ 
      message: 'Twilio voice handler dormant. Voir voice.ts pour activer.' 
    }),
    { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    }
  );
};

/* 
// ========================================
// 🔊 CODE À DÉCOMMENTER
// ========================================

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const formData = await request.formData();
    const recordingUrl = formData.get('RecordingUrl')?.toString();
    const callSid = formData.get('CallSid')?.toString();
    const from = formData.get('From')?.toString();

    console.log('🎙️ Enregistrement reçu:', {
      callSid,
      from,
      recordingUrl,
    });

    // Ici tu peux :
    // 1. Sauvegarder l'enregistrement dans une base de données
    // 2. L'envoyer à un service de transcription
    // 3. Notifier ton équipe par email
    // 4. Analyser le sentiment de l'appel

    // Réponse TwiML pour terminer l'appel
    const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="Polly.Celine" language="fr-FR">Merci pour votre message. Nous vous recontacterons rapidement. Au revoir.</Say>
  <Hangup/>
</Response>`;

    return new Response(twiml, {
      status: 200,
      headers: { 'Content-Type': 'text/xml' }
    });
  } catch (error) {
    console.error('Error in voice handler:', error);
    
    const errorTwiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="Polly.Celine" language="fr-FR">Merci pour votre appel. Au revoir.</Say>
  <Hangup/>
</Response>`;
    
    return new Response(errorTwiml, {
      status: 200,
      headers: { 'Content-Type': 'text/xml' }
    });
  }
};

// ========================================
// FIN DU CODE
// ========================================
*/
