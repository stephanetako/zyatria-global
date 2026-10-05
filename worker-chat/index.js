// ============================================================
// ZyatrIA Global — Worker Cloudflare
// RAG (Vectorize) + Claude + Mistral + Images Pexels
// ============================================================

export default {
  async fetch(request, env) {
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS'
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    const url = new URL(request.url);

    // ---- ROUTE : /chat ----
    if (url.pathname === '/chat' && request.method === 'POST') {
      try {
        const { messages, lang = 'fr' } = await request.json();
        const lastMsg = messages[messages.length - 1]?.content || '';

        // 1. RECHERCHE RAG dans Vectorize
        const context = await searchKnowledge(lastMsg, env);

        // 2. CONSTRUIRE LE PROMPT SYSTÈME
        const systemPrompt = buildSystemPrompt(lang, context);

        // 3. APPEL CLAUDE (priorité)
        let reply = await callClaude(systemPrompt, messages, env);
        // 4. FALLBACK MISTRAL
        if (!reply) reply = await callMistral(systemPrompt, messages, env);
        // 5. FALLBACK FINAL
        if (!reply) {
          reply = lang === 'en'
            ? "Our assistant is temporarily unavailable. Contact us at ZyatrIA.contact@gmail.com"
            : "Notre assistante est momentanément indisponible. Contactez-nous à ZyatrIA.contact@gmail.com";
        }

        return new Response(JSON.stringify({ reply }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      } catch (e) {
        return new Response(JSON.stringify({ reply: 'Erreur serveur. Réessayez.' }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }
    }

    // ---- ROUTE : /image?q=... (Pexels proxy) ----
    if (url.pathname === '/image' && request.method === 'GET') {
      const query = url.searchParams.get('q') || 'technology';
      try {
        const res = await fetch(
          `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`,
          { headers: { Authorization: env.PEXELS_API_KEY } }
        );
        const data = await res.json();
        const photo = data.photos?.[0]?.src?.large2x || data.photos?.[0]?.src?.large;
        return new Response(JSON.stringify({ url: photo }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      } catch (e) {
        return new Response(JSON.stringify({ url: null }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }
    }

    return new Response('ZyatrIA Worker — OK', { headers: corsHeaders });
  }
};

// ---- RECHERCHE VECTORIELLE ----
async function searchKnowledge(query, env) {
  try {
    // Générer l'embedding de la question
    const embRes = await env.AI.run('@cf/baai/bge-m3', { text: [query] });
    const embedding = embRes.data[0];

    // Chercher dans Vectorize
    const results = await env.VECTORIZE.query(embedding, {
      topK: 3,
      returnMetadata: true
    });

    if (!results.matches?.length) return '';
    return results.matches.map(m => m.metadata?.text || '').join('\n\n');
  } catch (e) {
    return '';
  }
}

// ---- PROMPT SYSTÈME ----
function buildSystemPrompt(lang, context) {
  const base = lang === 'en'
    ? `You are Zyra, AI sales assistant for ZyatrIA Global (Canadian agency, Quebec). You guide clients to the right micro-agent or plan. Warm, professional, never pushy. Keep replies short (2-4 sentences).

CONTEXT FROM KNOWLEDGE BASE:
${context || 'No specific context found.'}

RULES:
- Use the context above to answer accurately.
- Qualify the need (industry, size, problem) before recommending.
- Always end with a question or action (demo, purchase, contact).
- Contact: ZyatrIA.contact@gmail.com · +1 438 887 4507.`
    : `Tu es Zyra, assistante IA commerciale de ZyatrIA Global (agence canadienne, Québec). Tu guides le client vers le bon micro-agent ou plan. Chaleureuse, professionnelle, jamais insistante. Réponses courtes (2-4 phrases).

CONTEXTE DEPUIS LA BASE DE CONNAISSANCES :
${context || 'Aucun contexte spécifique trouvé.'}

RÈGLES :
- Utilise le contexte ci-dessus pour répondre précisément.
- Qualifie le besoin (secteur, taille, problème) avant de recommander.
- Termine toujours par une question ou une action (démo, achat, contact).
- Contact : ZyatrIA.contact@gmail.com · +1 438 887 4507.`;
  return base;
}

// ---- CLAUDE ----
async function callClaude(system, messages, env) {
  if (!env.CLAUDE_API_KEY) return null;
  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': env.CLAUDE_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 400,
        system,
        messages
      })
    });
    if (!r.ok) return null;
    const d = await r.json();
    return d.content?.[0]?.text || null;
  } catch (e) { return null; }
}

// ---- MISTRAL ----
async function callMistral(system, messages, env) {
  if (!env.MISTRAL_API_KEY) return null;
  try {
    const r = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + env.MISTRAL_API_KEY
      },
      body: JSON.stringify({
        model: 'mistral-large-latest',
        max_tokens: 400,
        messages: [{ role: 'system', content: system }, ...messages]
      })
    });
    if (!r.ok) return null;
    const d = await r.json();
    return d.choices?.[0]?.message?.content || null;
  } catch (e) { return null; }
}
