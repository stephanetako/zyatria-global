// ============================================================
// ZyatrIA Global — Worker Cloudflare (zyatria-api)
// RAG (Vectorize + Workers AI bge-m3) + Claude (priorité) + Mistral (repli) + Images Pexels
// Secrets requis : CLAUDE_API_KEY, MISTRAL_API_KEY, ADMIN_KEY, (optionnel) PEXELS_API_KEY
// Bindings requis : AI (Workers AI), VECTORIZE -> index zyatria-knowledge
// ============================================================

const ALLOWED_ORIGINS = [
  "https://zyatria-global-84c507.webflow.io",
  // "https://TON-VRAI-DOMAINE.com", // ajoute-le une fois le domaine branché
];

function corsHeaders(origin) {
  const allow = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Headers": "Content-Type, X-Admin-Key",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  };
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const cors = corsHeaders(origin);

    if (request.method === "OPTIONS") return new Response(null, { headers: cors });

    const url = new URL(request.url);

    // ---- ROUTE : /chat ----
    if (url.pathname === "/chat" && request.method === "POST") {
      try {
        const { messages, lang = "fr" } = await request.json();
        const lastMsg = messages[messages.length - 1]?.content || "";

        const context = await searchKnowledge(lastMsg, env);
        const systemPrompt = buildSystemPrompt(lang, context);

        let reply = await callClaude(systemPrompt, messages, env);
        if (!reply) reply = await callMistral(systemPrompt, messages, env);
        if (!reply) {
          reply =
            lang === "en"
              ? "Our assistant is temporarily unavailable. Contact us at ZyatrIA.contact@gmail.com"
              : "Notre assistante est momentanément indisponible. Contactez-nous à ZyatrIA.contact@gmail.com";
        }

        return new Response(JSON.stringify({ reply }), {
          headers: { ...cors, "Content-Type": "application/json" },
        });
      } catch (e) {
        return new Response(JSON.stringify({ reply: "Erreur serveur. Réessayez." }), {
          status: 500,
          headers: { ...cors, "Content-Type": "application/json" },
        });
      }
    }

    // ---- ROUTE : /image?q=... (Pexels proxy) ----
    if (url.pathname === "/image" && request.method === "GET") {
      if (!env.PEXELS_API_KEY) {
        return new Response(JSON.stringify({ url: null, error: "PEXELS_API_KEY manquant" }), {
          headers: { ...cors, "Content-Type": "application/json" },
        });
      }
      const query = url.searchParams.get("q") || "technology";
      try {
        const res = await fetch(
          `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`,
          { headers: { Authorization: env.PEXELS_API_KEY } }
        );
        const data = await res.json();
        const photo = data.photos?.[0]?.src?.large2x || data.photos?.[0]?.src?.large || null;
        return new Response(JSON.stringify({ url: photo }), {
          headers: { ...cors, "Content-Type": "application/json" },
        });
      } catch (e) {
        return new Response(JSON.stringify({ url: null }), {
          headers: { ...cors, "Content-Type": "application/json" },
        });
      }
    }

    // ---- ROUTE : /admin/index (remplit/majore Vectorize depuis knowledge.json) ----
    // Protégée par le secret ADMIN_KEY — à appeler toi-même une fois (ou après avoir modifié le contenu).
    if (url.pathname === "/admin/index" && request.method === "POST") {
      if (!env.ADMIN_KEY || request.headers.get("X-Admin-Key") !== env.ADMIN_KEY) {
        return new Response(JSON.stringify({ error: "Non autorisé" }), {
          status: 401,
          headers: { ...cors, "Content-Type": "application/json" },
        });
      }
      try {
        const items = await request.json(); // tableau [{id,text,category}, ...]
        if (!Array.isArray(items) || items.length === 0) {
          return new Response(JSON.stringify({ error: "Tableau d'items vide ou invalide" }), {
            status: 400,
            headers: { ...cors, "Content-Type": "application/json" },
          });
        }

        const vectors = [];
        for (const it of items) {
          const embRes = await env.AI.run("@cf/baai/bge-m3", { text: [it.text] });
          vectors.push({
            id: it.id,
            values: embRes.data[0],
            metadata: { text: it.text, category: it.category || "" },
          });
        }

        await env.VECTORIZE.insert(vectors);

        return new Response(JSON.stringify({ inserted: vectors.length }), {
          headers: { ...cors, "Content-Type": "application/json" },
        });
      } catch (e) {
        return new Response(JSON.stringify({ error: "Erreur indexation", detail: String(e) }), {
          status: 500,
          headers: { ...cors, "Content-Type": "application/json" },
        });
      }
    }

    return new Response("ZyatrIA Worker — OK", { headers: cors });
  },
};

// ---- RECHERCHE VECTORIELLE (même modèle qu'à l'indexation : bge-m3) ----
async function searchKnowledge(query, env) {
  try {
    const embRes = await env.AI.run("@cf/baai/bge-m3", { text: [query] });
    const embedding = embRes.data[0];

    const results = await env.VECTORIZE.query(embedding, { topK: 3, returnMetadata: true });
    if (!results.matches?.length) return "";
    return results.matches.map((m) => m.metadata?.text || "").join("\n\n");
  } catch (e) {
    return "";
  }
}

// ---- PROMPT SYSTÈME ----
function buildSystemPrompt(lang, context) {
  return lang === "en"
    ? `You are Zyra, AI sales assistant for ZyatrIA Global (Canadian agency, Quebec). You guide clients to the right micro-agent or plan. Warm, professional, never pushy. Keep replies short (2-4 sentences).

CONTEXT FROM KNOWLEDGE BASE:
${context || "No specific context found."}

RULES:
- Use the context above to answer accurately. If it doesn't cover the question, say you're not sure rather than guessing a price or feature.
- Qualify the need (industry, size, problem) before recommending.
- Always end with a question or action (demo, purchase, contact).
- Contact: ZyatrIA.contact@gmail.com · +1 438 887 4507.`
    : `Tu es Zyra, assistante IA commerciale de ZyatrIA Global (agence canadienne, Québec). Tu guides le client vers le bon micro-agent ou plan. Chaleureuse, professionnelle, jamais insistante. Réponses courtes (2-4 phrases).

CONTEXTE DEPUIS LA BASE DE CONNAISSANCES :
${context || "Aucun contexte spécifique trouvé."}

RÈGLES :
- Utilise le contexte ci-dessus pour répondre précisément. S'il ne couvre pas la question, dis que tu n'es pas certaine plutôt que d'inventer un prix ou une fonctionnalité.
- Qualifie le besoin (secteur, taille, problème) avant de recommander.
- Termine toujours par une question ou une action (démo, achat, contact).
- Contact : ZyatrIA.contact@gmail.com · +1 438 887 4507.`;
}

// ---- CLAUDE (priorité) ----
async function callClaude(system, messages, env) {
  if (!env.CLAUDE_API_KEY) return null;
  try {
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": env.CLAUDE_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 400,
        system,
        messages,
      }),
    });
    if (!r.ok) return null;
    const d = await r.json();
    return d.content?.[0]?.text || null;
  } catch (e) {
    return null;
  }
}

// ---- MISTRAL (repli, pour le chat seulement — pas les embeddings) ----
async function callMistral(system, messages, env) {
  if (!env.MISTRAL_API_KEY) return null;
  try {
    const r = await fetch("https://api.mistral.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + env.MISTRAL_API_KEY,
      },
      body: JSON.stringify({
        model: "mistral-large-latest",
        max_tokens: 400,
        messages: [{ role: "system", content: system }, ...messages],
      }),
    });
    if (!r.ok) return null;
    const d = await r.json();
    return d.choices?.[0]?.message?.content || null;
  } catch (e) {
    return null;
  }
}
