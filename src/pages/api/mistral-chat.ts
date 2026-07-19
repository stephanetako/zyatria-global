import type { APIRoute } from 'astro';
import { getRateLimiter } from '../../lib/rate-limiter';
import { getMistralCache } from '../../lib/lru-cache';

// Réponses de fallback par défaut
const FALLBACK_RESPONSES: Record<string, string> = {
  'bonjour': '👋 Bonjour ! Je suis l\'assistant virtuel de ZyatrIA Global. Comment puis-je vous aider aujourd\'hui ?\n\n💡 Je peux vous renseigner sur :\n• Nos services d\'agents IA\n• Nos tarifs et plans\n• Réserver une démo gratuite\n• Nos micro-agents spécialisés',
  
  'services': '🤖 **Nos Services :**\n\n1. **Agents IA Intelligents** - Automatisation complète de vos processus métier\n2. **Micro-agents Spécialisés** - Support client 24/7, qualification de leads, gestion de RDV\n3. **Intégrations CRM** - Connexion avec vos outils existants (Salesforce, HubSpot, etc.)\n4. **Formation & Support** - Accompagnement complet de votre équipe\n\n⚡ Déploiement rapide en 7-15 jours\n🌍 Disponible en Amérique du Nord, Europe, Afrique et Amérique Latine\n\n📧 Questions ? ZyatrIA.contact@gmail.com',
  
  'prix': '💰 **Nos Plans Tarifaires :**\n\n🚀 **Starter** - 297$/mois\n   • 1 agent IA personnalisé\n   • 1000 conversations/mois\n   • Support email\n\n💼 **Business** - 697$/mois\n   • 3 agents IA\n   • 5000 conversations/mois\n   • Support prioritaire\n\n🏢 **Enterprise** - 1497$/mois\n   • Agents illimités\n   • Conversations illimitées\n   • Support dédié 24/7\n\n🎯 **Services Professionnels :**\n   • Audit IA : 497$\n   • Consultation stratégique : 997$\n   • Formation équipe : 1497$\n\n📧 Devis personnalisé : ZyatrIA.contact@gmail.com',
  
  'contact': '📞 **Contactez ZyatrIA Global :**\n\n• 📧 Email : ZyatrIA.contact@gmail.com\n• 🌍 Localisation : Québec, Canada\n• ⏰ Disponibilité : Lun-Ven, 9h-17h EST\n\nNous vous répondons généralement en moins de 24h !\n\n💬 Vous pouvez aussi continuer à me poser vos questions ici.',
  
  'demo': '🎯 **Réservez votre Démo Gratuite !**\n\nDécouvrez comment nos agents IA peuvent transformer votre entreprise en 30 minutes.\n\n✨ Au programme :\n• Démonstration en direct de nos agents IA\n• Analyse de vos besoins spécifiques\n• Proposition de solution personnalisée\n• Questions & réponses\n\n📧 Contactez-nous pour planifier : ZyatrIA.contact@gmail.com',
  
  'micro-agents': '🎯 **Nos Micro-Agents Spécialisés :**\n\n1. **Agent Support Client** - Réponses instantanées 24/7\n2. **Agent Qualification de Leads** - Identifie vos meilleurs prospects\n3. **Agent Prise de RDV** - Gestion automatique de votre agenda\n4. **Agent E-commerce** - Recommandations produits personnalisées\n5. **Agent Immobilier** - Gestion des visites et qualifications\n\n⚡ Déploiement en 7-15 jours\n🔧 Intégration avec vos outils existants\n\n📧 Intéressé ? ZyatrIA.contact@gmail.com',
  
  'automatisation': '⚙️ **Automatisation Intelligente :**\n\nNos agents IA automatisent :\n• Réponses aux questions fréquentes\n• Qualification et scoring de leads\n• Prise de rendez-vous\n• Suivi client personnalisé\n• Mise à jour CRM automatique\n• Rapports et analytics\n\n📊 Résultats moyens :\n• -60% temps de réponse\n• +40% taux de conversion\n• -70% coûts support\n\n📧 Audit gratuit : ZyatrIA.contact@gmail.com',
  
  'secteurs': '🏢 **Secteurs d\'Expertise :**\n\n• 🛒 E-commerce - Recommandations et support\n• 🏠 Immobilier - Gestion visites et qualifications\n• 💼 Coaching - Automatisation suivi clients\n• 💻 SaaS & Tech - Onboarding et support\n• 🏥 Santé & Bien-être - Prise de RDV\n• ⚖️ Services Professionnels - Qualification leads\n\nChaque solution est personnalisée selon votre secteur.\n\n📧 Parlons de votre projet : ZyatrIA.contact@gmail.com',
  
  'deploiement': '🚀 **Processus de Déploiement (7-15 jours) :**\n\n**Semaine 1 :**\n• Jour 1-2 : Audit et analyse de vos besoins\n• Jour 3-5 : Configuration et personnalisation\n• Jour 6-7 : Tests et ajustements\n\n**Semaine 2 :**\n• Jour 8-10 : Formation de votre équipe\n• Jour 11-12 : Déploiement progressif\n• Jour 13-15 : Optimisation et support\n\n✅ Accompagnement complet inclus\n\n📧 Commençons : ZyatrIA.contact@gmail.com',
  
  'avantages': '✨ **Pourquoi Choisir ZyatrIA Global ?**\n\n🚀 Déploiement ultra-rapide (7-15 jours)\n🌍 Expertise internationale (4 continents)\n🤖 Technologie de pointe (IA avancée)\n💰 ROI prouvé (retour sur investissement rapide)\n🔧 Intégrations complètes (tous vos outils)\n📚 Formation incluse (équipe autonome)\n🎯 Support dédié (disponible 24/7)\n\n📊 +127 clients satisfaits\n⭐ 4.9/5 de satisfaction\n\n📧 Rejoignez-nous : ZyatrIA.contact@gmail.com',
  
  'fonctionnement': '🔧 **Comment ça fonctionne ?**\n\nNos agents IA utilisent l\'intelligence artificielle avancée pour :\n\n**1. Comprendre** 🧠\n   • Analyse du langage naturel\n   • Détection des intentions\n   • Compréhension du contexte\n\n**2. Traiter** ⚙️\n   • Recherche d\'informations\n   • Prise de décisions intelligentes\n   • Intégration avec vos systèmes\n\n**3. Répondre** 💬\n   • Réponses personnalisées\n   • Actions automatiques\n   • Apprentissage continu\n\n**Exemple concret :**\nUn client demande un RDV → L\'agent vérifie votre agenda → Propose des créneaux → Confirme et envoie les invitations → Met à jour votre CRM\n\n✨ Tout cela en quelques secondes, 24/7 !\n\n📧 Vous voulez voir ça en action ? ZyatrIA.contact@gmail.com',
  
  'default': '💬 Je suis là pour vous aider ! Voici ce que je peux faire pour vous :\n\n• 🤖 Expliquer nos services d\'agents IA\n• 💰 Détailler nos tarifs et plans\n• 🎯 Vous aider à choisir le bon micro-agent\n• 📅 Organiser une démo gratuite\n• 🌍 Parler de nos secteurs d\'expertise\n\n❓ Posez-moi une question spécifique ou contactez-nous :\n📧 ZyatrIA.contact@gmail.com'
};

// Fonction pour trouver une réponse de fallback appropriée
function getFallbackResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  // Salutations
  if (lowerMessage.match(/\b(bonjour|salut|hello|hi|hey|bonsoir)\b/)) {
    return FALLBACK_RESPONSES.bonjour;
  }
  
  // Fonctionnement
  if (lowerMessage.match(/\b(comment|fonctionne|marche|ça marche|fonctionnement|processus|étape)\b/)) {
    return FALLBACK_RESPONSES.fonctionnement;
  }
  
  // Services
  if (lowerMessage.match(/\b(service|offre|proposez|faites|solution|produit)\b/)) {
    return FALLBACK_RESPONSES.services;
  }
  
  // Prix et tarifs
  if (lowerMessage.match(/\b(prix|coût|tarif|plan|abonnement|combien|€|\$)\b/)) {
    return FALLBACK_RESPONSES.prix;
  }
  
  // Contact
  if (lowerMessage.match(/\b(contact|joindre|appeler|téléphone|email|parler)\b/)) {
    return FALLBACK_RESPONSES.contact;
  }
  
  // Démo
  if (lowerMessage.match(/\b(démo|demo|essai|test|essayer|tester)\b/)) {
    return FALLBACK_RESPONSES.demo;
  }
  
  // Micro-agents
  if (lowerMessage.match(/\b(micro.?agent|agent|bot|chatbot|assistant)\b/)) {
    return FALLBACK_RESPONSES['micro-agents'];
  }
  
  // Automatisation
  if (lowerMessage.match(/\b(automatisation|automatiser|automation|workflow|processus)\b/)) {
    return FALLBACK_RESPONSES.automatisation;
  }
  
  // Secteurs
  if (lowerMessage.match(/\b(secteur|industrie|domaine|e.?commerce|immobilier|santé)\b/)) {
    return FALLBACK_RESPONSES.secteurs;
  }
  
  // Déploiement
  if (lowerMessage.match(/\b(déploiement|déployer|installation|installer|mise en place|combien de temps)\b/)) {
    return FALLBACK_RESPONSES.deploiement;
  }
  
  // Avantages
  if (lowerMessage.match(/\b(avantage|pourquoi|bénéfice|différence|meilleur|choisir)\b/)) {
    return FALLBACK_RESPONSES.avantages;
  }
  
  // Questions générales
  if (lowerMessage.match(/\b(qui|quoi|comment|où|quand|pourquoi|quel)\b/)) {
    return FALLBACK_RESPONSES.default;
  }
  
  return FALLBACK_RESPONSES.default;
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

    // Vérifier si on peut faire une requête
    const canRequest = rateLimiter.canMakeRequest();
    
    if (!canRequest.allowed) {
      console.warn(`⏱️ Rate limit atteint : ${canRequest.reason}`);
      console.warn(`⏱️ Réessayer dans ${canRequest.retryAfter} secondes`);
      
      // Fallback : réponse par défaut avec information sur le délai
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
          status: 429, // Too Many Requests
          headers: { 
            'Content-Type': 'application/json',
            'Retry-After': String(canRequest.retryAfter || 60)
          } 
        }
      );
    }

    // Attendre le délai nécessaire (1 seconde minimum entre les requêtes)
    await rateLimiter.waitIfNeeded();

    // Récupérer la clé API Mistral depuis les variables d'environnement
    const apiKey = locals?.runtime?.env?.MISTRAL_API_KEY || import.meta.env.MISTRAL_API_KEY;

    if (!apiKey) {
      console.error('❌ Configuration manquante : MISTRAL_API_KEY non définie');
      
      // Enregistrer l'échec
      rateLimiter.recordRequest(false);
      
      // Fallback : réponse par défaut
      const lastMessage = messages[messages.length - 1]?.content || '';
      const fallbackResponse = getFallbackResponse(lastMessage);
      
      return new Response(
        JSON.stringify({ 
          response: fallbackResponse,
          fallback: true
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Log des statistiques avant la requête
    const stats = rateLimiter.getStats();
    console.log('📊 Rate limiter stats:', {
      requestsLastMinute: stats.requestsLastMinute,
      requestsLastHour: stats.requestsLastHour,
      successRate: `${stats.successRate.toFixed(1)}%`,
      timeSinceLastRequest: `${stats.timeSinceLastRequest}ms`
    });

    console.log('🚀 Appel API Mistral (pas de cache disponible)');

    // Appel à l'API Mistral avec la configuration optimale
    const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'mistral-medium', // Modèle plus performant
        messages: [
          {
            role: 'system',
            content: `You are a professional AI assistant for ZyatrIA Global, a Canadian company specializing in AI agents and automation.

**IMPORTANT - MULTILINGUAL SUPPORT:**
You MUST detect the user's language and respond in the SAME language (French, English, Spanish, or Portuguese).
- If user writes in French → respond in French
- If user writes in English → respond in English  
- If user writes in Spanish → respond in Spanish
- If user writes in Portuguese → respond in Portuguese

**About ZyatrIA Global:**
- 🌍 Canadian company based in Quebec
- 🤖 Specialized in AI agents, automation and micro-agents
- ⚡ Fast deployment: 7-15 days
- 🌐 Operating in North America, Europe, French-speaking Africa and Latin America
- 📧 Contact: ZyatrIA.contact@gmail.com

**Our Services:**
1. **Intelligent AI Agents** - Complete process automation
2. **Specialized Micro-agents** - Customer support, lead qualification, appointment management
3. **CRM Integrations** - Connection with your existing tools
4. **Training & Support** - Complete team support

**Our Plans:**
- 🚀 Starter: $297/month - 1 AI agent, 1000 conversations/month
- 💼 Business: $697/month - 3 AI agents, 5000 conversations/month
- 🏢 Enterprise: $1497/month - Unlimited agents, unlimited conversations
- 🎯 Professional Services: AI Audit ($497), Consultation ($997), Training ($1497)

**Sectors of expertise:**
E-commerce, Real Estate, Coaching, SaaS & Tech, Health & Wellness, Professional Services

**How our AI agents work:**
Our agents use advanced AI to understand requests, process information and respond in a personalized way. They integrate with your existing systems (CRM, calendars, etc.) and continuously learn to improve.

**Your role:**
- Respond in a conversational and natural way
- Help customers understand our services clearly
- Be courteous, professional and concise
- Adapt your responses to the conversation context
- Suggest a free demo when relevant
- Use emojis to make the conversation engaging
- Don't repeat the same information if it has already been given
- Answer questions directly without listing all options every time
- ALWAYS respond in the user's language (FR/EN/ES/PT)

**MULTILINGUAL CAPABILITIES:**
Our AI agents support multiple languages including:
- 🇫🇷 French (Français)
- 🇬🇧 English (Anglais)
- 🇪🇸 Spanish (Español)
- 🇵🇹 Portuguese (Português)

They can understand and respond naturally in all these languages, making them perfect for international businesses.`
          },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 800 // Augmenté pour des réponses plus complètes
      })
    });

    // Vérifier le statut de la réponse (équivalent de raise_for_status)
    if (!response.ok) {
      const statusCode = response.status;
      let errorMessage = `Erreur API Mistral: ${statusCode}`;
      
      // Enregistrer l'échec
      rateLimiter.recordRequest(false);
      
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorData.error || errorMessage;
        console.error('❌ Erreur API Mistral:', {
          status: statusCode,
          error: errorData
        });
      } catch {
        console.error('❌ Erreur API Mistral:', statusCode);
      }

      // Gestion spécifique des erreurs
      if (statusCode === 401) {
        console.error('🔑 Erreur d\'authentification : Clé API invalide ou révoquée');
      } else if (statusCode === 429) {
        console.error('⏱️ Limite de taux dépassée : Trop de requêtes');
      } else if (statusCode >= 500) {
        console.error('🔧 Erreur serveur Mistral : Service temporairement indisponible');
      }

      // Fallback : réponse par défaut basée sur le message
      const lastMessage = messages[messages.length - 1]?.content || '';
      const fallbackResponse = getFallbackResponse(lastMessage);
      
      return new Response(
        JSON.stringify({ 
          response: fallbackResponse,
          fallback: true,
          error: errorMessage
        }),
        { 
          status: 200, // On retourne 200 pour ne pas casser l'UX
          headers: { 'Content-Type': 'application/json' } 
        }
      );
    }

    const data = await response.json() as { 
      choices?: Array<{ 
        message?: { 
          content?: string 
        } 
      }> 
    };
    
    const assistantMessage = data.choices?.[0]?.message?.content;

    if (!assistantMessage) {
      console.error('❌ Réponse vide de l\'API Mistral');
      
      // Enregistrer l'échec
      rateLimiter.recordRequest(false);
      
      // Fallback : réponse par défaut
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

    // Fallback : réponse par défaut
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
          response: FALLBACK_RESPONSES.default,
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












