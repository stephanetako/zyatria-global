const axios = require('axios');

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
};

exports.handler = async (event) => {
  // Préflight CORS
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: CORS, body: '' };
  }
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: CORS, body: 'Method Not Allowed' };
  }

  try {
    const { messages, lang } = JSON.parse(event.body || '{}');
    if (!messages || !Array.isArray(messages)) {
      return { statusCode: 400, headers: CORS, body: JSON.stringify({ error: 'messages requis' }) };
    }

    const systemPrompt = lang === 'en'
      ? `You are Zyra, the AI assistant of ZyatrIA Global, a Canadian company (Quebec) specializing in AI agents and business automation.
Answer in English, concisely (2-4 sentences max), warm and professional.
Key facts: micro-agents from $68 CAD/month, deployment in 7-15 days, plans Starter $102/mo, Professional $146/mo (most popular), Enterprise on quote, currently -30% pre-launch, 30-day money-back guarantee, 4 languages (FR EN ES PT), support up to 24/7.
If the user wants a demo or a complex answer, invite them to book via the "Free demo" button or contact ZyatrIA.contact@gmail.com.`
      : `Tu es Zyra, l'assistante IA de ZyatrIA Global, entreprise canadienne (Québec) spécialisée en agents IA et automatisation d'entreprise.
Réponds en français, de façon concise (2-4 phrases max), chaleureuse et professionnelle.
Faits clés : micro-agents à partir de 68 $CA/mois, déploiement en 7-15 jours, plans Starter 102 $/mois, Professional 146 $/mois (le plus populaire), Enterprise sur devis, actuellement -30% en offre pré-lancement, garantie satisfait ou remboursé 30 jours, 4 langues (FR EN ES PT), support jusqu'à 24/7.
Si l'utilisateur veut une démo ou une réponse complexe, invite-le à réserver via le bouton « Démo gratuite » ou à contacter ZyatrIA.contact@gmail.com.`;

    // Appel à l'API Mistral (remplacez MISTRAL_API_KEY par votre variable Netlify)
    const r = await axios.post('https://api.mistral.ai/v1/chat/completions', {
      model: 'mistral-small-latest',
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages.slice(-10)
      ],
      max_tokens: 250,
      temperature: 0.7
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.MISTRAL_API_KEY}`
      }
    });

    const reply = r.data.choices[0].message.content;

    return {
      statusCode: 200,
      headers: CORS,
      body: JSON.stringify({ reply })
    };
  } catch (e) {
    return {
      statusCode: 200,  // 200 pour que le front affiche le fallback proprement
      headers: CORS,
      body: JSON.stringify({
        reply: lang === 'en'
          ? "Sorry, I'm unavailable right now. Contact us at ZyatrIA.contact@gmail.com"
          : "Désolée, je suis indisponible pour le moment. Écrivez-nous à ZyatrIA.contact@gmail.com"
      })
    };
  }
};
