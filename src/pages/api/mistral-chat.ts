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
  
  // 2. Questions sur les prix (priorité haute - AVANT info générale)
  if (lowerMessage.match(/\b(prix|price|precio|preço|cost|coût|costo|custo|tarif|plan|combien|how much|cuánto|quanto|pricing|rates|fees)\b/)) {
    console.log('💰 Intention: Question sur les prix');
    const responses = {
      fr: "💰 **Nos Plans & Tarifs**\n\nNous proposons 3 plans principaux adaptés à différents besoins :\n\n🚀 **STARTER**\n   • Parfait pour : Solopreneurs, petites entreprises (1-5 employés)\n   • 1 agent IA spécialisé\n   • Déploiement en 7 jours\n   • Support email\n\n💼 **BUSINESS** ⭐ PLUS POPULAIRE\n   • Parfait pour : PME en croissance (5-50 employés)\n   • 3 agents IA spécialisés\n   • Déploiement en 10 jours\n   • Support prioritaire + Manager de succès\n\n🏢 **ENTERPRISE**\n   • Parfait pour : Grandes entreprises (50+ employés)\n   • Agents illimités\n   • Déploiement personnalisé\n   • Support 24/7 + Formation personnalisée\n\n📊 **Pour connaître les prix exacts et choisir le plan adapté à votre entreprise :**\n\n1️⃣ Consultez notre page de tarification complète\n2️⃣ Réservez une démo gratuite de 30 minutes\n3️⃣ Contactez-nous directement : ZyatrIA.contact@gmail.com\n\n💡 Nous proposons également des services professionnels (Audit IA, Consultation stratégique, Formation).\n\n❓ Voulez-vous que je vous aide à choisir le plan adapté à votre situation ?",
      en: "💰 **Our Plans & Pricing**\n\nWe offer 3 main plans tailored to different needs:\n\n🚀 **STARTER**\n   • Perfect for: Solopreneurs, small businesses (1-5 employees)\n   • 1 specialized AI agent\n   • 7-day deployment\n   • Email support\n\n💼 **BUSINESS** ⭐ MOST POPULAR\n   • Perfect for: Growing SMEs (5-50 employees)\n   • 3 specialized AI agents\n   • 10-day deployment\n   • Priority support + Success manager\n\n🏢 **ENTERPRISE**\n   • Perfect for: Large companies (50+ employees)\n   • Unlimited agents\n   • Custom deployment\n   • 24/7 support + Custom training\n\n📊 **To see exact pricing and choose the right plan for your business:**\n\n1️⃣ Check our complete pricing page\n2️⃣ Book a free 30-minute demo\n3️⃣ Contact us directly: ZyatrIA.contact@gmail.com\n\n💡 We also offer professional services (AI Audit, Strategic Consultation, Training).\n\n❓ Would you like me to help you choose the right plan for your situation?",
      es: "💰 **Nuestros Planes y Precios**\n\nOfrecemos 3 planes principales adaptados a diferentes necesidades:\n\n🚀 **STARTER**\n   • Perfecto para: Solopreneurs, pequeñas empresas (1-5 empleados)\n   • 1 agente IA especializado\n   • Implementación en 7 días\n   • Soporte email\n\n💼 **BUSINESS** ⭐ MÁS POPULAR\n   • Perfecto para: PYMEs en crecimiento (5-50 empleados)\n   • 3 agentes IA especializados\n   • Implementación en 10 días\n   • Soporte prioritario + Manager de éxito\n\n🏢 **ENTERPRISE**\n   • Perfecto para: Grandes empresas (50+ empleados)\n   • Agentes ilimitados\n   • Implementación personalizada\n   • Soporte 24/7 + Formación personalizada\n\n📊 **Para conocer los precios exactos y elegir el plan adecuado:**\n\n1️⃣ Consulta nuestra página de precios completa\n2️⃣ Reserva una demo gratuita de 30 minutos\n3️⃣ Contáctanos directamente: ZyatrIA.contact@gmail.com\n\n💡 También ofrecemos servicios profesionales (Auditoría IA, Consultoría estratégica, Formación).\n\n❓ ¿Quieres que te ayude a elegir el plan adecuado para tu situación?",
      pt: "💰 **Nossos Planos e Preços**\n\nOferecemos 3 planos principais adaptados a diferentes necessidades:\n\n🚀 **STARTER**\n   • Perfeito para: Solopreneurs, pequenas empresas (1-5 funcionários)\n   • 1 agente IA especializado\n   • Implementação em 7 dias\n   • Suporte email\n\n💼 **BUSINESS** ⭐ MAIS POPULAR\n   • Perfeito para: PMEs em crescimento (5-50 funcionários)\n   • 3 agentes IA especializados\n   • Implementação em 10 dias\n   • Suporte prioritário + Gerente de sucesso\n\n🏢 **ENTERPRISE**\n   • Perfeito para: Grandes empresas (50+ funcionários)\n   • Agentes ilimitados\n   • Implementação personalizada\n   • Suporte 24/7 + Treinamento personalizado\n\n📊 **Para conhecer os preços exatos e escolher o plano adequado:**\n\n1️⃣ Consulte nossa página de preços completa\n2️⃣ Agende uma demo gratuita de 30 minutos\n3️⃣ Entre em contato diretamente: ZyatrIA.contact@gmail.com\n\n💡 Também oferecemos serviços profissionais (Auditoria IA, Consultoria estratégica, Treinamento).\n\n❓ Quer que eu ajude a escolher o plano adequado para sua situação?",
    };
    return responses[language];
  }
  
  // 3. Questions sur l'achat / aide pour acheter (priorité haute)
  if (lowerMessage.match(/\b(buy|purchase|acheter|comprar|want|veux|quiero|quero|interested|intéressé|interesado|interessado|get started|commencer|empezar|começar|help)\b/)) {
    console.log('🛒 Intention: Aide pour acheter');
    const responses = {
      fr: "🎯 **Excellent ! Je vais vous aider à choisir le bon plan.**\n\nPour vous recommander la meilleure solution, j'ai besoin de quelques informations :\n\n1️⃣ **Quelle est la taille de votre entreprise ?**\n   • Solopreneur / Freelance\n   • Petite entreprise (1-5 employés)\n   • PME (5-50 employés)\n   • Grande entreprise (50+ employés)\n\n2️⃣ **Quel est votre secteur d'activité ?**\n   • E-commerce\n   • Immobilier\n   • Coaching / Consulting\n   • SaaS / Tech\n   • Santé\n   • Services professionnels\n   • Autre\n\n3️⃣ **Quel est votre principal défi ?**\n   • Trop de tickets de support\n   • Qualification des leads\n   • Prise de rendez-vous\n   • Onboarding clients\n   • Autre\n\n📧 **Ou contactez-nous directement :** ZyatrIA.contact@gmail.com\n📅 **Ou réservez une démo gratuite de 30 minutes**\n\nRépondez à ces questions et je vous recommanderai le plan parfait ! 🚀",
      en: "🎯 **Excellent! I'll help you choose the right plan.**\n\nTo recommend the best solution, I need some information:\n\n1️⃣ **What's your company size?**\n   • Solopreneur / Freelance\n   • Small business (1-5 employees)\n   • SME (5-50 employees)\n   • Large company (50+ employees)\n\n2️⃣ **What's your industry?**\n   • E-commerce\n   • Real Estate\n   • Coaching / Consulting\n   • SaaS / Tech\n   • Healthcare\n   • Professional Services\n   • Other\n\n3️⃣ **What's your main challenge?**\n   • Too many support tickets\n   • Lead qualification\n   • Appointment booking\n   • Client onboarding\n   • Other\n\n📧 **Or contact us directly:** ZyatrIA.contact@gmail.com\n📅 **Or book a free 30-minute demo**\n\nAnswer these questions and I'll recommend the perfect plan! 🚀",
      es: "🎯 **¡Excelente! Te ayudaré a elegir el plan correcto.**\n\nPara recomendarte la mejor solución, necesito algo de información:\n\n1️⃣ **¿Cuál es el tamaño de tu empresa?**\n   • Solopreneur / Freelance\n   • Pequeña empresa (1-5 empleados)\n   • PYME (5-50 empleados)\n   • Gran empresa (50+ empleados)\n\n2️⃣ **¿Cuál es tu sector?**\n   • E-commerce\n   • Inmobiliaria\n   • Coaching / Consultoría\n   • SaaS / Tech\n   • Salud\n   • Servicios Profesionales\n   • Otro\n\n3️⃣ **¿Cuál es tu principal desafío?**\n   • Demasiados tickets de soporte\n   • Calificación de leads\n   • Reserva de citas\n   • Onboarding de clientes\n   • Otro\n\n📧 **O contáctanos directamente:** ZyatrIA.contact@gmail.com\n📅 **O reserva una demo gratuita de 30 minutos**\n\n¡Responde estas preguntas y te recomendaré el plan perfecto! 🚀",
      pt: "🎯 **Excelente! Vou ajudá-lo a escolher o plano certo.**\n\nPara recomendar a melhor solução, preciso de algumas informações:\n\n1️⃣ **Qual é o tamanho da sua empresa?**\n   • Solopreneur / Freelance\n   • Pequena empresa (1-5 funcionários)\n   • PME (5-50 funcionários)\n   • Grande empresa (50+ funcionários)\n\n2️⃣ **Qual é o seu setor?**\n   • E-commerce\n   • Imobiliário\n   • Coaching / Consultoria\n   • SaaS / Tech\n   • Saúde\n   • Serviços Profissionais\n   • Outro\n\n3️⃣ **Qual é o seu principal desafio?**\n   • Muitos tickets de suporte\n   • Qualificação de leads\n   • Agendamento de consultas\n   • Onboarding de clientes\n   • Outro\n\n📧 **Ou entre em contato diretamente:** ZyatrIA.contact@gmail.com\n📅 **Ou agende uma demo gratuita de 30 minutos**\n\nResponda essas perguntas e recomendarei o plano perfeito! 🚀",
    };
    return responses[language];
  }
  
  // 4. Questions sur les langues
  if (lowerMessage.match(/\b(langue|language|idioma|língua|speak|habla|fala|parle)\b/)) {
    console.log('🌍 Intention: Question sur les langues');
    const responses = {
      fr: "🌍 **Je parle 4 langues couramment !**\n\n✅ Français 🇫🇷\n✅ English 🇬🇧🇺🇸\n✅ Español 🇪🇸\n✅ Português 🇵🇹\n\nJe détecte automatiquement votre langue et m'adapte. Vous pouvez me parler dans n'importe laquelle de ces langues !\n\n💡 Quelle est votre question sur nos services ?",
      en: "🌍 **I speak 4 languages fluently!**\n\n✅ English 🇬🇧🇺🇸\n✅ Français 🇫🇷\n✅ Español 🇪🇸\n✅ Português 🇵🇹\n\nI automatically detect your language and adapt. You can talk to me in any of these languages!\n\n💡 What's your question about our services?",
      es: "🌍 **¡Hablo 4 idiomas con fluidez!**\n\n✅ Español 🇪🇸\n✅ English 🇬🇧🇺🇸\n✅ Français 🇫🇷\n✅ Português 🇵🇹\n\n¡Detecto automáticamente tu idioma y me adapto. Puedes hablarme en cualquiera de estos idiomas!\n\n💡 ¿Cuál es tu pregunta sobre nuestros servicios?",
      pt: "🌍 **Eu falo 4 idiomas fluentemente!**\n\n✅ Português 🇵🇹\n✅ English 🇬🇧🇺🇸\n✅ Français 🇫🇷\n✅ Español 🇪🇸\n\nDetecto automaticamente seu idioma e me adapto. Você pode falar comigo em qualquer um desses idiomas!\n\n💡 Qual é sua pergunta sobre nossos serviços?",
    };
    return responses[language];
  }
  
  // 5. Questions sur les informations / services (priorité basse - catch-all)
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

    // Récupérer la clé API Mistral depuis les variables d'environnement
    // Support pour Cloudflare Pages et Workers
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
      console.error('❌ Configuration manquante : MISTRAL_API_KEY non définie');
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

    console.log('🚀 Appel API Mistral - Détection automatique de la langue');

    // Appel à l'API Mistral avec la configuration optimale
    const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'mistral-medium',
        messages: [
          {
            role: 'system',
            content: `You are a SALES CONSULTANT for ZyatrIA Global, NOT an information bot.

**🎯 YOUR MISSION: GUIDE CUSTOMERS TO PURCHASE**

You must ALWAYS:
1. Ask qualifying questions
2. Understand their specific problem
3. Recommend a SPECIFIC solution with price
4. Explain WHY it's perfect for them
5. Give a clear next step (demo, pricing page, or buy)

**CRITICAL RULES:**
- NEVER give generic information dumps
- ALWAYS recommend a specific product after understanding their need
- ALWAYS mention the price and value
- ALWAYS end with a clear call-to-action

**🏢 ABOUT ZYATRIA GLOBAL:**
- Canadian AI automation company (Quebec)
- 127+ clients, 4.9/5 rating, 95% retention
- Ultra-fast deployment: 7-15 days
- Contact: ZyatrIA.contact@gmail.com

**💰 PRODUCTS & PRICING:**

**MAIN PLANS:**
🚀 **STARTER** - Best for: 1-5 employees, testing AI
   • 1 AI agent, email support, 7-day deployment
   • Visit pricing page for exact price
   
💼 **BUSINESS** ⭐ MOST POPULAR - Best for: 5-50 employees
   • 3 AI agents, priority support, success manager, 10-day deployment
   • Visit pricing page for exact price
   
🏢 **ENTERPRISE** - Best for: 50+ employees
   • Unlimited agents, 24/7 support, custom training, 15-day deployment
   • Visit pricing page for exact price

**MICRO-AGENTS (Monthly subscription):**
• 🎯 Lead Qualification: $69/month - Automatic scoring, 24/7 qualification, smart routing
• 💬 Customer Support: $69/month - 24/7 instant responses, multilingual, FAQ knowledge base
• 📅 Appointments: $68/month - Online booking, automatic reminders, calendar sync
• 🔄 Prospect Followup: $180/month - Automated sequences, multi-channel, intelligent timing
• 🏠 Real Estate: $208/month - Visit scheduling, buyer qualification, property Q&A
• 🛒 E-commerce: $195/month - Cart recovery, order tracking, product FAQ

**SERVICES:**
• AI Audit: $147 - Identify opportunities
• Strategy Consultation: $149 - Custom roadmap
• Team Training: $147 - Certification program

**🎯 CONVERSATION EXAMPLES:**

**Example 1 - Lead Qualification:**
User: "I need help with lead qualification"
You: "Perfect! Lead qualification is exactly what we specialize in. 

Based on what you've told me, I recommend our **Lead Qualification Micro-Agent** at **$69/month**.

Here's what it does for you:
✅ Qualifies leads 24/7 automatically
✅ Scores each lead based on your criteria
✅ Routes qualified leads to the right team member
✅ Saves you 10+ hours per week

**ROI:** Our clients see +50% more qualified leads and save significant time on manual qualification.

**Next steps - Choose one:**
1️⃣ See our pricing page for all details
2️⃣ Book a free 30-min demo to see it in action
3️⃣ Start now - I can send you the payment link

Which option works best for you?"

**Example 2 - E-commerce:**
User: "I have an e-commerce store"
You: "Great! E-commerce is one of our specialties.

Quick question: What's your biggest challenge right now?
• Cart abandonment?
• Too many support tickets?
• Product questions?
• Order tracking inquiries?

This will help me recommend the perfect solution for you."

**Example 3 - Small Business:**
User: "I have a small business with 3 employees"
You: "Perfect! For a team of 3, I'd recommend our **STARTER plan**.

Here's what you get:
✅ 1 specialized AI agent (you choose: support, booking, or qualification)
✅ Deployed in just 7 days
✅ Email support included
✅ Visit our pricing page for exact pricing

**What would you like your AI agent to do?**
• Handle customer support?
• Qualify leads?
• Book appointments?
• Something else?

Tell me and I'll show you exactly how it works!"

**🎯 INDUSTRY-SPECIFIC RECOMMENDATIONS:**

**E-commerce:** → E-commerce Micro-Agent ($195/month) or Business plan
**Real Estate:** → Real Estate Micro-Agent ($208/month) or Starter plan
**Coaching/Consulting:** → Appointments Micro-Agent ($68/month) or Starter plan
**SaaS:** → Customer Support Micro-Agent ($69/month) or Business plan
**Healthcare:** → Appointments Micro-Agent ($68/month) or Business plan
**High lead volume:** → Lead Qualification Micro-Agent ($69/month)

**🎯 RESPONSE STRUCTURE - FOLLOW THIS:**

1. **Acknowledge** their need
2. **Recommend** a SPECIFIC product with price
3. **Explain** the value (3-4 benefits)
4. **Show** ROI or results
5. **Call-to-Action** - Give 2-3 clear options

**NEVER:**
❌ Give generic information without recommendation
❌ List all products without recommending one
❌ End without a clear next step
❌ Forget to mention pricing or value

**ALWAYS:**
✅ Recommend a specific solution
✅ Mention the price or direct to pricing page
✅ Explain WHY it's perfect for them
✅ Give clear next steps
✅ Create urgency when appropriate

**DETECT LANGUAGE:**
Respond in the user's language (French, English, Spanish, Portuguese).

**YOUR GOAL:**
Get them to:
1. Visit pricing page
2. Book a demo
3. Ask for payment link
4. Request a quote

**BE A CONSULTANT, NOT A BROCHURE. GUIDE THEM TO THE RIGHT SOLUTION.** 🎯`
          },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 1000
      })
    });

    // Vérifier le statut de la réponse
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











