import type { APIRoute } from 'astro';
import knowledgeBase from '../../data/knowledge-base.json';
import salesScripts from '../../data/sales-scripts.json';

// Stripe payment links
const STRIPE_LINKS = {
  starter: 'https://buy.stripe.com/test_6oE5lq0Hy0Hy5ry6oo',
  professional: 'https://buy.stripe.com/test_00g15a0Hy0Hy5ry000',
  enterprise: 'mailto:ZyatrIA.contact@gmail.com?subject=Démo%20Enterprise',
  audit: 'https://buy.stripe.com/test_3cs01614C5XS5ry3cd',
  consultation: 'https://buy.stripe.com/test_5kA4hm0Hy0Hy5ry4gh'
};

// Detect language from message
function detectLanguage(message: string): 'fr' | 'en' | 'es' | 'pt' {
  const lowerMsg = message.toLowerCase();
  
  if (lowerMsg.match(/\b(hola|gracias|precio|cuanto|cuando)\b/)) return 'es';
  if (lowerMsg.match(/\b(olá|obrigado|preço|quanto|quando)\b/)) return 'pt';
  if (lowerMsg.match(/\b(hello|thanks|price|how much|when)\b/)) return 'en';
  
  return 'fr'; // Default
}

// Analyze user intent and qualification
function analyzeIntent(message: string, conversationHistory: any[]) {
  const lowerMsg = message.toLowerCase();
  
  // Check for buying signals
  const buyingSignals = {
    high: ['acheter', 'buy', 'commander', 'order', 'réserver', 'book', 'maintenant', 'now', 'immédiatement', 'immediately'],
    medium: ['intéressé', 'interested', 'prix', 'price', 'tarif', 'cost', 'combien', 'how much'],
    low: ['info', 'information', 'détails', 'details', 'expliquer', 'explain']
  };
  
  let intent = 'discovery';
  if (buyingSignals.high.some(signal => lowerMsg.includes(signal))) intent = 'ready_to_buy';
  else if (buyingSignals.medium.some(signal => lowerMsg.includes(signal))) intent = 'considering';
  else if (buyingSignals.low.some(signal => lowerMsg.includes(signal))) intent = 'learning';
  
  // Check for objections
  const objections = {
    price: ['cher', 'expensive', 'coût', 'cost', 'budget'],
    timing: ['plus tard', 'later', 'réfléchir', 'think', 'attendre', 'wait'],
    complexity: ['compliqué', 'complicated', 'difficile', 'difficult', 'technique', 'technical']
  };
  
  let objection = null;
  for (const [type, keywords] of Object.entries(objections)) {
    if (keywords.some(kw => lowerMsg.includes(kw))) {
      objection = type;
      break;
    }
  }
  
  return { intent, objection };
}

// Recommend product based on user profile
function recommendProduct(userProfile: any) {
  const { volume, budget, urgency } = userProfile;
  
  // Enterprise
  if (volume === '100+' || budget === '500$+') {
    return 'enterprise';
  }
  
  // Professional
  if (volume === '50-100' || volume === '10-50' || budget === '300-500$') {
    return 'professional';
  }
  
  // Starter
  return 'starter';
}

// Generate sales response
function generateSalesResponse(intent: string, objection: string | null, userProfile: any, lang: 'fr' | 'en' | 'es' | 'pt') {
  // Handle objections first
  if (objection && salesScripts.objections[objection]) {
    return salesScripts.objections[objection][lang] || salesScripts.objections[objection].fr;
  }
  
  // If ready to buy, recommend product
  if (intent === 'ready_to_buy' || intent === 'considering') {
    const product = recommendProduct(userProfile);
    const recommendation = salesScripts.recommendations[product];
    
    if (recommendation) {
      const pitch = recommendation.pitch[lang] || recommendation.pitch.fr;
      const cta = recommendation.cta[lang] || recommendation.cta.fr;
      const link = recommendation.stripe_link;
      
      return `${pitch}\n\n${cta}\n\n👉 [Réserver maintenant](${link})`;
    }
  }
  
  return null;
}

// Build system prompt for sales
function buildSalesPrompt(lang: 'fr' | 'en' | 'es' | 'pt') {
  const prompts = {
    fr: `Tu es Zyra, l'agent IA commercial de ZyatrIA Global. Tu es une vendeuse experte, persuasive mais authentique.

MISSION : Qualifier les prospects, recommander le bon produit, et CLOSER la vente.

STYLE DE VENTE :
- Consultative mais directe
- Crée l'urgence sans être agressif
- Utilise des émojis et du storytelling
- Pose des questions de qualification
- Réponds aux objections avec des preuves
- Pousse vers l'action (réserver, acheter, démo)

PRODUITS DISPONIBLES :
1. Plan Starter - 102$/mois (1 bot, 1000 interactions)
2. Plan Professional - 146$/mois (3 bots, 5000 interactions) ⭐ POPULAIRE
3. Plan Enterprise - Sur devis (7 bots, illimité)

MICRO-AGENTS (69-208$/mois) :
- Qualification leads
- Support 24/7
- Gestion RDV
- Suivi prospects
- Immobilier
- E-commerce

OFFRES SPÉCIALES :
- 1er mois -30% sur tous les plans
- Setup gratuit (valeur 200-500$)
- Garantie 30 jours satisfait ou remboursé

QUESTIONS DE QUALIFICATION :
1. Volume de demandes/jour ?
2. Budget mensuel ?
3. Urgence de démarrage ?

TECHNIQUES DE CLOSING :
- Scarcité : "Plus que 3 places ce mois-ci"
- Urgence : "Offre valable jusqu'à minuit"
- Preuve sociale : "78% choisissent Pro"
- ROI : "Économisez 1200$/mois"
- Garantie : "Satisfait ou remboursé 30 jours"

GESTION DES OBJECTIONS :
- Prix → ROI + Garantie
- Timing → Concurrence + Déploiement rapide
- Complexité → Simplicité + Support

TOUJOURS :
- Qualifier avant de recommander
- Créer l'urgence
- Donner des preuves (chiffres, témoignages)
- Proposer un CTA clair
- Inclure le lien Stripe quand approprié

Contact : ZyatrIA.contact@gmail.com | +1 438 887 4507`,
    
    en: `You are Zyra, the AI sales agent for ZyatrIA Global. You are an expert, persuasive but authentic salesperson.

MISSION: Qualify prospects, recommend the right product, and CLOSE the sale.

SALES STYLE:
- Consultative but direct
- Create urgency without being aggressive
- Use emojis and storytelling
- Ask qualifying questions
- Answer objections with proof
- Push towards action (book, buy, demo)

AVAILABLE PRODUCTS:
1. Starter Plan - $102/month (1 bot, 1000 interactions)
2. Professional Plan - $146/month (3 bots, 5000 interactions) ⭐ POPULAR
3. Enterprise Plan - Custom quote (7 bots, unlimited)

MICRO-AGENTS ($69-208/month):
- Lead qualification
- 24/7 Support
- Appointment management
- Prospect follow-up
- Real estate
- E-commerce

SPECIAL OFFERS:
- 1st month -30% on all plans
- Free setup (value $200-500)
- 30-day money-back guarantee

QUALIFICATION QUESTIONS:
1. Volume of requests/day?
2. Monthly budget?
3. Start urgency?

CLOSING TECHNIQUES:
- Scarcity: "Only 3 spots left this month"
- Urgency: "Offer valid until midnight"
- Social proof: "78% choose Pro"
- ROI: "Save $1200/month"
- Guarantee: "30-day money-back"

OBJECTION HANDLING:
- Price → ROI + Guarantee
- Timing → Competition + Fast deployment
- Complexity → Simplicity + Support

ALWAYS:
- Qualify before recommending
- Create urgency
- Give proof (numbers, testimonials)
- Propose clear CTA
- Include Stripe link when appropriate

Contact: ZyatrIA.contact@gmail.com | +1 438 887 4507`
  };
  
  return prompts[lang] || prompts.fr;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const { message, conversationHistory = [], userProfile = {} } = await request.json();
    
    if (!message) {
      return new Response(JSON.stringify({ error: 'Message requis' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Detect language
    const lang = detectLanguage(message);
    
    // Analyze intent
    const { intent, objection } = analyzeIntent(message, conversationHistory);
    
    // Try to generate sales response
    const salesResponse = generateSalesResponse(intent, objection, userProfile, lang);
    
    if (salesResponse) {
      return new Response(JSON.stringify({ 
        response: salesResponse,
        intent,
        objection,
        recommendedProduct: recommendProduct(userProfile)
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Fallback to AI response
    const systemPrompt = buildSalesPrompt(lang);
    const context = knowledgeBase.map(item => item.text).join('\n\n');
    
    // Build conversation history
    const messages = [
      { role: 'system', content: `${systemPrompt}\n\nBASE DE CONNAISSANCES:\n${context}` },
      ...conversationHistory.map((msg: any) => ({
        role: msg.role,
        content: msg.content
      })),
      { role: 'user', content: message }
    ];
    
    // Call Mistral AI
    const mistralResponse = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.MISTRAL_API_KEY}`
      },
      body: JSON.stringify({
        model: 'mistral-small-latest',
        messages,
        temperature: 0.7,
        max_tokens: 800
      })
    });
    
    if (!mistralResponse.ok) {
      throw new Error('Erreur API Mistral');
    }
    
    const data = await mistralResponse.json();
    const aiResponse = data.choices[0].message.content;
    
    return new Response(JSON.stringify({ 
      response: aiResponse,
      intent,
      objection,
      lang
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    console.error('Erreur chat sales:', error);
    return new Response(JSON.stringify({ 
      error: 'Erreur serveur',
      details: error instanceof Error ? error.message : 'Erreur inconnue'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
