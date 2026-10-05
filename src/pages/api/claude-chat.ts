

import type { APIRoute } from 'astro';
import { getRateLimiter } from '../../lib/rate-limiter';
import { getMistralCache } from '../../lib/lru-cache';

// Fonction pour détecter la langue du message
function detectLanguage(message: string): 'fr' | 'en' | 'es' | 'pt' {
  const lowerMessage = message.toLowerCase();
  
  // Mots-clés français (AMÉLIORÉ)
  const frenchKeywords = [
    'bonjour', 'salut', 'allo', 'allô', 'bonsoir', 'parlez français', 'pouvez', 'qu', 'comment', 'quand', 'où', 'pourquoi', 
    'prix', 'service', 'aide', 's\'il vous plaît', 'merci', 'oui', 'non',
    'je', 'j\'', 'veux', 'besoin', 'cherche', 'information', 'quelque', 'parlez', 'français',
    'avoir', 'des', 'imformation', 'infomation', 'aimererai', 'aimerais', 'voudrais',
    'svp', 'stp', 'merci', 'salutation', 'coucou', 'hey', 'yo'
  ];
  
  // Mots-clés anglais (élargi)
  const englishKeywords = [
    'hello', 'hi', 'hey', 'you speak english', 'do you', 'can you', 'what', 'how', 'when', 'where', 'why', 
    'price', 'cost', 'service', 'help', 'please', 'thank', 'yes', 'no',
    'i', 'want', 'need', 'looking', 'for', 'about', 'tell', 'me', 'my', 'your', 'the', 'a', 'an',
    'is', 'are', 'have', 'get', 'know', 'information', 'some', 'any', 'would', 'could', 'should',
    'like', 'love', 'good', 'bad', 'best', 'more', 'less', 'much', 'many', 'speak english'
  ];
  
  // Mots-clés espagnols
  const spanishKeywords = [
    'hola', 'buenos', 'hablas español', 'puedes', 'qué', 'cómo', 'cuándo', 'dónde', 'por qué', 
    'precio', 'servicio', 'ayuda', 'por favor', 'gracias', 'sí', 'no',
    'quiero', 'necesito', 'busco', 'información', 'algún', 'hablas', 'español'
  ];
  
  // Mots-clés portugais
  const portugueseKeywords = [
    'olá', 'oi', 'fala português', 'pode', 'o que', 'como', 'quando', 'onde', 'por que',
    'preço', 'serviço', 'ajuda', 'por favor', 'obrigado', 'sim', 'não',
    'quero', 'preciso', 'procuro', 'informação', 'algum', 'fala', 'português'
  ];
  
  // Compter les correspondances
  const frenchMatches = frenchKeywords.filter(keyword => lowerMessage.includes(keyword)).length;
  const englishMatches = englishKeywords.filter(keyword => lowerMessage.includes(keyword)).length;
  const spanishMatches = spanishKeywords.filter(keyword => lowerMessage.includes(keyword)).length;
  const portugueseMatches = portugueseKeywords.filter(keyword => lowerMessage.includes(keyword)).length;
  
  // Log pour debug
  console.log('🔍 Language detection:', {
    message: lowerMessage,
    matches: { fr: frenchMatches, en: englishMatches, es: spanishMatches, pt: portugueseMatches }
  });
  
  // Retourner la langue avec le plus de correspondances
  const maxMatches = Math.max(frenchMatches, englishMatches, spanishMatches, portugueseMatches);
  
  if (maxMatches === 0) {
    // Si aucune correspondance, détecter par défaut selon les caractères
    if (lowerMessage.match(/[àâäéèêëïîôùûüÿœæç]/)) return 'fr';
    if (lowerMessage.match(/[áéíóúñ¿¡]/)) return 'es';
    if (lowerMessage.match(/[ãõâêôáéíóú]/)) return 'pt';
    return 'en';
  }
  
  if (frenchMatches === maxMatches) return 'fr';
  if (spanishMatches === maxMatches) return 'es';
  if (portugueseMatches === maxMatches) return 'pt';
  return 'en';
}

// Réponses de fallback multilingues
const FALLBACK_RESPONSES = {
  fr: {
    greeting: '👋 Bonjour ! Je suis l\'assistant virtuel de ZyatrIA Global. Ravi de vous rencontrer !\n\n💡 Je peux vous aider avec :\n• 🤖 Nos services d\'agents IA et micro-agents\n• 💰 Nos tarifs et plans personnalisés\n• 🎯 Choisir la solution adaptée à votre secteur\n• 📅 Réserver une démo gratuite de 30 minutes\n• ⚡ Notre processus de déploiement rapide (7-15 jours)\n\n❓ Quelle est votre principale question aujourd\'hui ?',
    
    default: '💬 **Bonjour ! Je suis là pour vous aider.**\n\nJe peux répondre à vos questions sur :\n\n**🤖 Nos Services**\n• Agents IA intelligents\n• Micro-agents spécialisés\n• Intégrations CRM et outils\n• Formation et support\n\n**💰 Tarifs & Plans**\n• Plans Starter, Business et Enterprise\n• Tarification flexible et transparente\n• Consultez notre page de tarification pour les détails\n• Services professionnels sur mesure\n\n**🎯 Cas d\'Usage**\n• E-commerce, Immobilier, Coaching\n• SaaS, Santé, Services Pro\n• Votre secteur spécifique\n\n**⚡ Déploiement**\n• Processus rapide (7-15 jours)\n• Formation incluse\n• Support dédié\n\n**📊 Résultats**\n• ROI et métriques\n• Témoignages clients\n• Études de cas\n\n**🎁 Démo Gratuite**\n• 30 minutes de démonstration\n• Analyse de vos besoins\n• Sans engagement\n\n❓ **Quelle est votre principale question ?**\n\nVous pouvez me demander :\n• "Quels sont vos tarifs ?"\n• "Comment ça fonctionne ?"\n• "Avez-vous des exemples pour [mon secteur] ?"\n• "Je veux une démo"\n• "Comment vous contacter ?"\n\nOu posez-moi n\'importe quelle question !\n\n📧 Contact direct : ZyatrIA.contact@gmail.com'
  },
  
  en: {
    greeting: '👋 Hello! I\'m the virtual assistant for ZyatrIA Global. Nice to meet you!\n\n💡 I can help you with:\n• 🤖 Our AI agents and micro-agents services\n• 💰 Our pricing and custom plans\n• 🎯 Choosing the right solution for your industry\n• 📅 Booking a free 30-minute demo\n• ⚡ Our fast deployment process (7-15 days)\n\n❓ What\'s your main question today?',
    
    default: '💬 **Hello! I\'m here to help.**\n\nI can answer your questions about:\n\n**🤖 Our Services**\n• Intelligent AI agents\n• Specialized micro-agents\n• CRM and tool integrations\n• Training and support\n\n**💰 Pricing & Plans**\n• Starter, Business and Enterprise plans\n• Flexible and transparent pricing\n• Check our pricing page for details\n• Custom professional services\n\n**🎯 Use Cases**\n• E-commerce, Real Estate, Coaching\n• SaaS, Healthcare, Professional Services\n• Your specific industry\n\n**⚡ Deployment**\n• Fast process (7-15 days)\n• Training included\n• Dedicated support\n\n**📊 Results**\n• ROI and metrics\n• Client testimonials\n• Case studies\n\n**🎁 Free Demo**\n• 30-minute demonstration\n• Analysis of your needs\n• No commitment\n\n❓ **What\'s your main question?**\n\nYou can ask me:\n• "What are your prices?"\n• "How does it work?"\n• "Do you have examples for [my industry]?"\n• "I want a demo"\n• "How can I contact you?"\n\nOr ask me anything!\n\n📧 Direct contact: ZyatrIA.contact@gmail.com'
  },
  
  es: {
    greeting: '👋 ¡Hola! Soy el asistente virtual de ZyatrIA Global. ¡Encantado de conocerte!\n\n💡 Puedo ayudarte con:\n• 🤖 Nuestros servicios de agentes IA y micro-agentes\n• 💰 Nuestros precios y planes personalizados\n• 🎯 Elegir la solución adecuada para tu sector\n• 📅 Reservar una demo gratuita de 30 minutos\n• ⚡ Nuestro proceso de implementación rápida (7-15 días)\n\n❓ ¿Cuál es tu pregunta principal hoy?',
    
    default: '💬 **¡Hola! Estoy aquí para ayudarte.**\n\nPuedo responder tus preguntas sobre:\n\n**🤖 Nuestros Servicios**\n• Agentes IA inteligentes\n• Micro-agentes especializados\n• Integraciones CRM y herramientas\n• Formación y soporte\n\n**💰 Precios y Planes**\n• Planes Starter, Business y Enterprise\n• Precios flexibles y transparentes\n• Consulta nuestra página de precios para detalles\n• Servicios profesionales personalizados\n\n**🎯 Casos de Uso**\n• E-commerce, Inmobiliaria, Coaching\n• SaaS, Salud, Servicios Profesionales\n• Tu sector específico\n\n**⚡ Implementación**\n• Proceso rápido (7-15 días)\n• Formación incluida\n• Soporte dedicado\n\n**📊 Resultados**\n• ROI y métricas\n• Testimonios de clientes\n• Casos de estudio\n\n**🎁 Demo Gratuita**\n• 30 minutos de demostración\n• Análisis de tus necesidades\n• Sin compromiso\n\n❓ **¿Cuál es tu pregunta principal?**\n\nPuedes preguntarme:\n• "¿Cuáles son sus precios?"\n• "¿Cómo funciona?"\n• "¿Tienen ejemplos para [mi sector]?"\n• "Quiero una demo"\n• "¿Cómo puedo contactarlos?"\n\n¡O pregúntame lo que quieras!\n\n📧 Contacto directo: ZyatrIA.contact@gmail.com'
  },
  
  pt: {
    greeting: '👋 Olá! Sou o assistente virtual da ZyatrIA Global. Prazer em conhecê-lo!\n\n💡 Posso ajudá-lo com:\n• 🤖 Nossos serviços de agentes IA e micro-agentes\n• 💰 Nossos preços e planos personalizados\n• 🎯 Escolher a solução certa para seu setor\n• 📅 Agendar uma demo gratuita de 30 minutos\n• ⚡ Nosso processo de implementação rápida (7-15 dias)\n\n❓ Qual é sua principal pergunta hoje?',
    
    default: '💬 **Olá! Estou aqui para ajudar.**\n\nPosso responder suas perguntas sobre:\n\n**🤖 Nossos Serviços**\n• Agentes IA inteligentes\n• Micro-agentes especializados\n• Integrações CRM e ferramentas\n• Treinamento e suporte\n\n**💰 Preços e Planos**\n• Planos Starter, Business e Enterprise\n• Preços flexíveis e transparentes\n• Consulte nossa página de preços para detalhes\n• Serviços profissionais personalizados\n\n**🎯 Casos de Uso**\n• E-commerce, Imobiliário, Coaching\n• SaaS, Saúde, Serviços Profissionais\n• Seu setor específico\n\n**⚡ Implementação**\n• Processo rápido (7-15 dias)\n• Treinamento incluído\n• Suporte dedicado\n\n**📊 Resultados**\n• ROI e métricas\n• Depoimentos de clientes\n• Estudos de caso\n\n**🎁 Demo Gratuita**\n• 30 minutos de demonstração\n• Análise de suas necessidades\n• Sem compromisso\n\n❓ **Qual é sua principal pergunta?**\n\nVocê pode me perguntar:\n• "Quais são os preços?"\n• "Como funciona?"\n• "Vocês têm exemplos para [meu setor]?"\n• "Quero uma demo"\n• "Como posso entrar em contato?"\n\nOu me pergunte qualquer coisa!\n\n📧 Contato direto: ZyatrIA.contact@gmail.com'
  }
};

// Fonction pour obtenir la réponse de fallback appropriée
function getFallbackResponse(message: string): string {
  const language = detectLanguage(message);
  const lowerMessage = message.toLowerCase();
  
  console.log(`🌍 Langue détectée: ${language.toUpperCase()}`);
  console.log(`📝 Message reçu: "${message}"`);
  
  // 1. Salutations (priorité haute)
  if (lowerMessage.match(/^(bonjour|salut|hello|hi|hey|hola|olá|oi|bonsoir|buenos|bom dia|good morning|good evening)/)) {
    console.log('👋 Intention: Salutation');
    return FALLBACK_RESPONSES[language].greeting;
  }
  
  // 2. Réponse par défaut
  console.log('📋 Intention: Générique - Retour réponse par défaut');
  return FALLBACK_RESPONSES[language].default;
}

export const POST: APIRoute = async ({ request, locals }) => {
  // Obtenir l'instance du rate limiter
  const rateLimiter = getRateLimiter();
  
  // Obtenir l'instance du cache
  const cache = getMistralCache();

  try {
    const body = await request.json() as { 
      message?: string;
      messages?: Array<{ role: string; content: string }> 
    };
    
    // Convertir le format simple en format messages si nécessaire
    let messages: Array<{ role: string; content: string }>;
    
    if (body.message) {
      // Format simple : {message: "..."}
      messages = [{ role: 'user', content: body.message }];
    } else if (body.messages) {
      // Format complet : {messages: [...]}
      messages = body.messages;
    } else {
      throw new Error('Format de requête invalide : message ou messages requis');
    }

    // Vérifier si la réponse est dans le cache
    const cachedResponse = cache.get(messages);
    if (cachedResponse) {
      console.log('💾 Réponse trouvée dans le cache - Pas d\'appel API nécessaire');
      
      // Afficher les statistiques du cache
      const stats = cache.getStats();
      console.log(`📊 Cache stats: ${stats.hits} hits, ${stats.misses} misses, ${stats.hitRate}% hit rate`);
      
      return new Response(
        JSON.stringify({ 
          response: cachedResponse,
          cached: true
        }),
        { 
          status: 200, 
          headers: { 'Content-Type': 'application/json' } 
        }
      );
    }

    // Récupérer la clé API Claude depuis les variables d'environnement
    let apiKey: string | undefined;
    
    // Méthode 1 : import.meta.env (développement local Astro - PRIORITÉ)
    if (import.meta.env.MISTRAL_API_KEY) {
      apiKey = import.meta.env.MISTRAL_API_KEY;
      console.log('🔑 Clé API trouvée via import.meta.env (développement local)');
    }
    // Méthode 2 : Cloudflare Workers (locals.runtime.env)
    else if (locals?.runtime?.env?.MISTRAL_API_KEY) {
      apiKey = locals.runtime.env.MISTRAL_API_KEY;
      console.log('🔑 Clé API trouvée via locals.runtime.env (Cloudflare Workers)');
    }
    // Méthode 3 : Cloudflare Pages (process.env)
    else if (typeof process !== 'undefined' && process.env?.MISTRAL_API_KEY) {
      apiKey = process.env.MISTRAL_API_KEY;
      console.log('🔑 Clé API trouvée via process.env (Cloudflare Pages)');
    }
    
    // Debug : afficher les sources disponibles
    console.log('🔍 Debug - Sources de variables disponibles:', {
      hasImportMetaEnv: !!import.meta.env.MISTRAL_API_KEY,
      hasLocalsRuntime: !!locals?.runtime,
      hasLocalsRuntimeEnv: !!locals?.runtime?.env,
      hasProcessEnv: typeof process !== 'undefined' && !!process.env,
      apiKeyFound: !!apiKey,
      apiKeyLength: apiKey ? apiKey.length : 0,
      apiKeyPreview: apiKey ? `${apiKey.substring(0, 8)}...` : 'none'
    });

    if (!apiKey) {
      console.error('❌ Configuration manquante : MISTRAL_API_KEY (Claude) non définie');
      console.error('💡 Vérifiez que la variable est bien configurée sur Cloudflare Pages');
      
      // Fallback : réponse par défaut SEULEMENT si pas de clé API
      const lastMessage = messages[messages.length - 1]?.content || '';
      const fallbackResponse = getFallbackResponse(lastMessage);
      
      return new Response(
        JSON.stringify({ 
          response: fallbackResponse,
          fallback: true,
          reason: 'API key not configured'
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Vérifier si on peut faire une requête (rate limiting)
    const canRequest = rateLimiter.canMakeRequest();
    
    if (!canRequest.allowed) {
      console.warn(`⏱️ Rate limit atteint : ${canRequest.reason}`);
      console.warn(`⏱️ Réessayer dans ${canRequest.retryAfter} secondes`);
      
      // Fallback SEULEMENT si rate limit atteint
      const lastMessage = messages[messages.length - 1]?.content || '';
      const fallbackResponse = getFallbackResponse(lastMessage);
      
      return new Response(
        JSON.stringify({ 
          response: `${fallbackResponse}\n\n⏱️ Note : Nous recevons beaucoup de demandes en ce moment. Merci de votre patience !`,
          fallback: true,
          rateLimited: true,
          retryAfter: canRequest.retryAfter
        }),
        { 
          status: 429,
          headers: { 
            'Content-Type': 'application/json',
            'Retry-After': String(canRequest.retryAfter || 60)
          } 
        }
      );
    }

    // Attendre le délai nécessaire (1 seconde minimum entre les requêtes)
    await rateLimiter.waitIfNeeded();

    // Log des statistiques avant la requête
    const stats = rateLimiter.getStats();
    console.log('📊 Rate limiter stats:', {
      requestsLastMinute: stats.requestsLastMinute,
      requestsLastHour: stats.requestsLastHour,
      successRate: `${stats.successRate.toFixed(1)}%`,
      timeSinceLastRequest: `${stats.timeSinceLastRequest}ms`
    });

    console.log('🚀 Appel API Claude (Anthropic) - Détection automatique de la langue');

    // Appel à l'API Claude (Anthropic)
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20250514',
        max_tokens: 1024,
        system: `Tu es Marc, consultant senior chez ZyatrIA Global. Tu es un expert en automatisation IA avec 10 ans d'expérience.

**🎯 TON RÔLE : CONSULTANT HUMAIN, PAS UN BOT**

Tu dois avoir une VRAIE conversation, comme un humain. Pas de réponses robotiques.

**📋 RÈGLES D'OR DE LA CONVERSATION :**

1. **COMMENCE PAR COMPRENDRE** 🤝
   - Pose des questions ouvertes
   - Écoute vraiment le client
   - Montre de l'empathie
   - Utilise son prénom si possible

2. **GUIDE LA CONVERSATION** 🎯
   - Une question à la fois
   - Creuse pour comprendre le VRAI problème
   - Reformule pour confirmer ta compréhension
   - Avance étape par étape

3. **SOIS NATUREL** 💬
   - Utilise "tu" ou "vous" selon le contexte
   - Ajoute des émojis avec modération
   - Varie tes phrases
   - Montre de l'enthousiasme authentique

4. **QUALIFIE AVANT DE VENDRE** 🔍
   Questions à poser (pas toutes d'un coup !) :
   - Quel est ton secteur d'activité ?
   - Combien d'employés dans ton équipe ?
   - Quel est ton plus gros défi actuellement ?
   - Qu'est-ce qui te prend le plus de temps ?
   - As-tu déjà utilisé des outils d'automatisation ?
   - Quel est ton budget approximatif ?

5. **RECOMMANDE INTELLIGEMMENT** 💡
   - Explique POURQUOI ce produit est parfait pour lui
   - Donne des exemples concrets de son secteur
   - Mentionne des résultats réels
   - Compare avec sa situation actuelle

**🏢 À PROPOS DE ZYATRIA GLOBAL :**
- Entreprise canadienne (Québec) spécialisée en IA
- 127+ clients satisfaits, 4.9/5 étoiles
- Déploiement ultra-rapide : 7-15 jours
- Support bilingue FR/EN
- Contact : ZyatrIA.contact@gmail.com

**💰 NOS SOLUTIONS (À RECOMMANDER SELON LE BESOIN) :**

**PLANS PRINCIPAUX :**

🚀 **STARTER** - Pour : 1-5 employés, première expérience IA
   • 1 agent IA au choix
   • Support par email
   • Déploiement en 7 jours
   • Idéal pour : Tester l'IA, petite équipe, budget limité
   • Prix : Voir page tarification

💼 **BUSINESS** ⭐ LE PLUS POPULAIRE - Pour : 5-50 employés
   • 3 agents IA
   • Support prioritaire + gestionnaire de succès
   • Déploiement en 10 jours
   • Idéal pour : Croissance rapide, automatisation complète
   • Prix : Voir page tarification

🏢 **ENTERPRISE** - Pour : 50+ employés
   • Agents IA illimités
   • Support 24/7 dédié
   • Formation personnalisée
   • Déploiement en 15 jours
   • Idéal pour : Grande entreprise, besoins complexes
   • Prix : Sur mesure

**MICRO-AGENTS SPÉCIALISÉS (Abonnement mensuel) :**

🎯 **Lead Qualification** - 69$/mois
   • Qualification automatique 24/7
   • Scoring intelligent des prospects
   • Routage vers le bon vendeur
   • Parfait pour : Immobilier, B2B, services
   • ROI : +50% de leads qualifiés

💬 **Customer Support** - 69$/mois
   • Réponses instantanées 24/7
   • Multilingue (FR/EN/ES/PT)
   • Base de connaissances FAQ
   • Parfait pour : E-commerce, SaaS, services
   • ROI : -60% de tickets support

📅 **Appointments** - 68$/mois
   • Réservation en ligne automatique
   • Rappels automatiques
   • Sync calendrier
   • Parfait pour : Coaching, santé, services
   • ROI : +40% de rendez-vous confirmés

🔄 **Prospect Followup** - 180$/mois
   • Séquences automatisées
   • Multi-canal (email, SMS, etc.)
   • Timing intelligent
   • Parfait pour : Ventes B2B, immobilier
   • ROI : +35% de conversion

🏠 **Real Estate** - 208$/mois
   • Planification de visites
   • Qualification acheteurs
   • FAQ propriétés
   • Parfait pour : Agents immobiliers
   • ROI : +3 ventes/mois en moyenne

🛒 **E-commerce** - 195$/mois
   • Récupération paniers abandonnés
   • Suivi de commandes
   • FAQ produits
   • Parfait pour : Boutiques en ligne
   • ROI : +25% de récupération paniers

**SERVICES ADDITIONNELS :**
• Audit IA : 147$ - Identifier les opportunités
• Consultation Stratégie : 149$ - Feuille de route personnalisée
• Formation Équipe : 147$ - Programme de certification

**🎯 EXEMPLES DE CONVERSATIONS NATURELLES :**

**Exemple 1 - Découverte :**
Client : "Je cherche à automatiser mon entreprise"
Toi : "Super ! L'automatisation peut vraiment transformer une entreprise. 😊

Pour que je puisse te guider vers la meilleure solution, dis-moi : c'est quoi ton plus gros défi en ce moment ? Qu'est-ce qui te prend le plus de temps dans ta journée ?"

**Exemple 2 - Qualification :**
Client : "J'ai trop de leads à gérer"
Toi : "Je comprends totalement, c'est un bon problème à avoir ! 😅

Quelques questions pour mieux comprendre :
- Combien de leads tu reçois par semaine environ ?
- Tu les qualifies manuellement ou tu as déjà un système ?
- Quel pourcentage se transforme en clients actuellement ?

Ça va m'aider à te recommander exactement ce qu'il te faut."

**Exemple 3 - Recommandation :**
Client : "Je reçois environ 50 leads par semaine, je les qualifie manuellement, et environ 20% deviennent clients"
Toi : "Ok parfait, je vois exactement ce qu'il te faut ! 🎯

Avec 50 leads/semaine, tu passes probablement 10-15 heures juste à qualifier, c'est ça ?

Je te recommande notre **Micro-Agent Lead Qualification** à 69$/mois. Voici pourquoi c'est parfait pour toi :

✅ Il qualifie les 50 leads automatiquement 24/7
✅ Il score chaque lead selon TES critères
✅ Il route les meilleurs leads directement vers toi
✅ Tu économises 10-15h/semaine

**Résultat concret :** Nos clients dans ta situation passent de 20% à 30-35% de conversion parce qu'ils se concentrent uniquement sur les leads chauds.

**ROI :** Tu économises ~600$/semaine en temps (15h × 40$/h) pour 69$/mois. Ça se paie en 3 jours ! 💰

Tu veux que je te montre comment ça marche en vrai ? Je peux te booker une démo de 15 min."

**Exemple 4 - Objection Prix :**
Client : "C'est un peu cher pour moi"
Toi : "Je comprends, le budget c'est important ! ���

Regarde ça autrement : si tu passes 10h/semaine à qualifier des leads manuellement, ça représente combien en valeur pour toi ? Disons 40$/h, ça fait 400$/semaine, soit 1,600$/mois.

Pour 69$/mois, tu récupères ces 1,600$ de temps. C'est un ROI de 2,200% ! 📈

Et si vraiment le budget est serré maintenant, on peut commencer par un audit gratuit pour identifier exactement où l'IA peut t'aider le plus. Qu'en penses-tu ?"

**🎯 STRUCTURE DE CONVERSATION IDÉALE :**

**Phase 1 - Connexion (1-2 messages)**
- Salutation chaleureuse
- Question ouverte sur leur besoin

**Phase 2 - Découverte (2-4 messages)**
- Comprendre leur secteur
- Identifier leur défi principal
- Quantifier l'impact (temps, argent, frustration)

**Phase 3 - Qualification (1-3 messages)**
- Taille de l'équipe
- Budget approximatif
- Urgence du besoin

**Phase 4 - Recommandation (1-2 messages)**
- Produit SPÉCIFIQUE avec prix
- 3-4 bénéfices concrets
- ROI chiffré
- Exemple de leur secteur

**Phase 5 - Action (1 message)**
- Démo gratuite
- Visite page tarification
- Audit gratuit
- Lien de paiement

**🚫 À ÉVITER ABSOLUMENT :**

❌ Lister tous les produits d'un coup
❌ Parler comme un robot
❌ Donner trop d'infos sans comprendre le besoin
❌ Pousser à la vente sans qualification
❌ Utiliser trop de jargon technique
❌ Réponses génériques type "Je peux vous aider"

**✅ À FAIRE TOUJOURS :**

✅ Poser des questions avant de recommander
✅ Utiliser le prénom du client
✅ Reformuler pour confirmer la compréhension
✅ Donner des exemples concrets de leur secteur
✅ Chiffrer le ROI
✅ Proposer une action claire et simple
✅ Montrer de l'empathie et de l'enthousiasme

**🌍 DÉTECTION DE LANGUE :**
Réponds dans la langue du client (FR, EN, ES, PT). Adapte ton ton selon la culture.

**🎯 TON OBJECTIF :**
Pas juste vendre, mais AIDER le client à trouver la solution qui va vraiment transformer son business.

**SOIS MARC, LE CONSULTANT QUI CHANGE DES VIES D'ENTREPRENEURS ! 🚀**`,
        messages: messages.map(msg => ({
          role: msg.role === 'user' ? 'user' : 'assistant',
          content: msg.content
        }))
      })
    });

    // Vérifier le statut de la réponse
    if (!response.ok) {
      const statusCode = response.status;
      let errorMessage = `Erreur API Claude: ${statusCode}`;
      
      // Enregistrer l'échec
      rateLimiter.recordRequest(false);
      
      try {
        const errorData = await response.json();
        errorMessage = errorData.error?.message || errorData.message || errorMessage;
        console.error('❌ Erreur API Claude:', {
          status: statusCode,
          error: errorData
        });
      } catch {
        console.error('❌ Erreur API Claude:', statusCode);
      }

      // Gestion spécifique des erreurs
      if (statusCode === 401) {
        console.error('🔑 Erreur d\'authentification : Clé API invalide ou révoquée');
      } else if (statusCode === 429) {
        console.error('⏱️ Limite de taux dépassée : Trop de requêtes');
      } else if (statusCode >= 500) {
        console.error('🔧 Erreur serveur Claude : Service temporairement indisponible');
      }

      // Fallback SEULEMENT en cas d'erreur API
      const lastMessage = messages[messages.length - 1]?.content || '';
      const fallbackResponse = getFallbackResponse(lastMessage);
      
      return new Response(
        JSON.stringify({ 
          response: fallbackResponse,
          fallback: true,
          error: errorMessage
        }),
        { 
          status: 200,
          headers: { 'Content-Type': 'application/json' } 
        }
      );
    }

    const data = await response.json() as { 
      content?: Array<{ 
        type?: string;
        text?: string;
      }> 
    };
    
    const assistantMessage = data.content?.[0]?.text;

    if (!assistantMessage) {
      console.error('❌ Réponse vide de l\'API Claude');
      
      // Enregistrer l'échec
      rateLimiter.recordRequest(false);
      
      // Fallback SEULEMENT si réponse vide
      const lastMessage = messages[messages.length - 1]?.content || '';
      const fallbackResponse = getFallbackResponse(lastMessage);
      
      return new Response(
        JSON.stringify({ 
          response: fallbackResponse,
          fallback: true
        }),
        { 
          status: 200, 
          headers: { 'Content-Type': 'application/json' } 
        }
      );
    }

    // Enregistrer le succès
    rateLimiter.recordRequest(true);
    
    // Mettre en cache la réponse
    cache.set(messages, assistantMessage);
    console.log('💾 Réponse mise en cache pour les prochaines fois');
    
    // Log des statistiques après la requête
    const statsAfter = rateLimiter.getStats();
    console.log('✅ Requête réussie - Stats:', {
      requestsLastMinute: statsAfter.requestsLastMinute,
      requestsLastHour: statsAfter.requestsLastHour,
      successRate: `${statsAfter.successRate.toFixed(1)}%`
    });
    
    // Afficher les statistiques du cache
    const cacheStats = cache.getStats();
    console.log('💾 Cache stats:', {
      size: `${cacheStats.size}/${cacheStats.maxSize}`,
      hitRate: `${cacheStats.hitRate}%`
    });

    return new Response(
      JSON.stringify({ response: assistantMessage }),
      { 
        status: 200, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    // Enregistrer l'échec
    rateLimiter.recordRequest(false);
    
    // Gestion des erreurs réseau et autres exceptions
    console.error('❌ Erreur serveur:', error);
    
    let errorMessage = 'Erreur inattendue';
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    // Fallback SEULEMENT en cas d'erreur critique
    try {
      const body = await request.json() as { 
        message?: string;
        messages?: Array<{ role: string; content: string }> 
      };
      
      let lastMessage = '';
      if (body.message) {
        lastMessage = body.message;
      } else if (body.messages && body.messages.length > 0) {
        lastMessage = body.messages[body.messages.length - 1]?.content || '';
      }
      
      const fallbackResponse = getFallbackResponse(lastMessage);
      
      return new Response(
        JSON.stringify({ 
          response: fallbackResponse,
          fallback: true,
          error: errorMessage
        }),
        { 
          status: 200, 
          headers: { 'Content-Type': 'application/json' } 
        }
      );
    } catch {
      // Si même le fallback échoue, retourner une réponse générique
      return new Response(
        JSON.stringify({ 
          response: FALLBACK_RESPONSES.fr.default,
          fallback: true,
          error: errorMessage
        }),
        { 
          status: 200, 
          headers: { 'Content-Type': 'application/json' } 
        }
      );
    }
  }
};


