import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Minimize2, Globe, ShoppingCart, Calendar, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { baseUrl } from '../lib/base-url';

type Language = 'fr' | 'en' | 'es' | 'pt';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
  aiModel?: 'claude' | 'mistral';
}

const translations = {
  fr: {
    title: 'Assistant ZyatrIA',
    placeholder: 'Posez votre question...',
    poweredBy: 'Propulsé par Claude & Mistral AI',
    greeting: '👋 **Bonjour !** Je suis votre assistant intelligent ZyatrIA.\n\n**Je peux vous aider avec :**\n\n🛒 Choisir le forfait idéal pour vous\n💬 Répondre à toutes vos questions\n📅 Réserver une démo gratuite\n🌍 Parler 4 langues (FR, EN, ES, PT)\n\n**Comment puis-je vous aider aujourd\'hui ?**'
  },
  en: {
    title: 'ZyatrIA Assistant',
    placeholder: 'Ask your question...',
    poweredBy: 'Powered by Claude & Mistral AI',
    greeting: '👋 **Hello!** I\'m your intelligent ZyatrIA assistant.\n\n**I can help you with:**\n\n🛒 Choose the perfect plan for you\n💬 Answer all your questions\n📅 Book a free demo\n🌍 Speak 4 languages (FR, EN, ES, PT)\n\n**How can I help you today?**'
  },
  es: {
    title: 'Asistente ZyatrIA',
    placeholder: 'Haz tu pregunta...',
    poweredBy: 'Impulsado por Claude & Mistral AI',
    greeting: '👋 **¡Hola!** Soy tu asistente inteligente ZyatrIA.\n\n**Puedo ayudarte con:**\n\n🛒 Elegir el plan perfecto para ti\n💬 Responder todas tus preguntas\n📅 Reservar una demo gratuita\n🌍 Hablar 4 idiomas (FR, EN, ES, PT)\n\n**¿Cómo puedo ayudarte hoy?**'
  },
  pt: {
    title: 'Assistente ZyatrIA',
    placeholder: 'Faça sua pergunta...',
    poweredBy: 'Desenvolvido por Claude & Mistral AI',
    greeting: '👋 **Olá!** Sou seu assistente inteligente ZyatrIA.\n\n**Posso ajudá-lo com:**\n\n🛒 Escolher o plano perfeito para você\n💬 Responder todas as suas perguntas\n📅 Agendar uma demo gratuita\n🌍 Falar 4 idiomas (FR, EN, ES, PT)\n\n**Como posso ajudá-lo hoje?**'
  }
};

// Base de connaissances ZyatrIA
const knowledgeBase = {
  pricing: {
    starter: {
      name: 'Starter',
      price: 297,
      features: [
        '1 micro-agent spécialisé',
        'Support email 48h',
        'Déploiement en 7 jours',
        'Formation de base incluse'
      ]
    },
    professional: {
      name: 'Professional',
      price: 697,
      features: [
        '3 micro-agents spécialisés',
        'Support prioritaire 24h',
        'Déploiement en 10 jours',
        'Formation avancée + documentation',
        'Intégrations CRM'
      ]
    },
    enterprise: {
      name: 'Enterprise',
      price: 1497,
      features: [
        'Micro-agents illimités',
        'Support dédié 24/7',
        'Déploiement en 15 jours',
        'Formation complète + accompagnement',
        'Intégrations avancées',
        'API personnalisée'
      ]
    }
  },
  microAgents: [
    'Agent Immobilier - Qualification de leads, visites virtuelles',
    'Agent E-commerce - Recommandations produits, suivi commandes',
    'Agent Support Client - Réponses instantanées 24/7',
    'Agent RH - Recrutement, onboarding',
    'Agent Marketing - Génération de contenu, campagnes',
    'Agent Comptable - Facturation, rapports financiers'
  ],
  languages: ['Français', 'English', 'Español', 'Português'],
  deploymentTime: '7-15 jours selon le forfait',
  support: 'Email, Chat, Téléphone selon le forfait'
};

export default function SuperChatbotFamily() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [language, setLanguage] = useState<Language>('fr');
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialiser avec le message de bienvenue
  useEffect(() => {
    setMessages([{
      id: '1',
      sender: 'bot',
      text: translations[language].greeting,
      timestamp: new Date(),
      aiModel: 'claude'
    }]);
  }, [language]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  const addMessage = (sender: 'user' | 'bot', text: string, aiModel?: 'claude' | 'mistral') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      sender,
      text,
      timestamp: new Date(),
      aiModel
    };
    setMessages(prev => [...prev, newMessage]);
  };

  // Détection intelligente du contexte
  const analyzeIntent = (message: string): { intent: string; useAI: 'claude' | 'mistral' | 'both' } => {
    const lowerMessage = message.toLowerCase();
    
    // Questions sur les prix
    if (lowerMessage.match(/prix|price|cost|coût|tarif|forfait|plan/)) {
      return { intent: 'pricing', useAI: 'claude' };
    }
    
    // Questions sur les micro-agents
    if (lowerMessage.match(/micro.?agent|agent|automation|automatisation/)) {
      return { intent: 'microagents', useAI: 'mistral' };
    }
    
    // Questions techniques
    if (lowerMessage.match(/technique|technical|api|intégration|integration/)) {
      return { intent: 'technical', useAI: 'mistral' };
    }
    
    // Prise de rendez-vous
    if (lowerMessage.match(/rendez.?vous|appointment|réunion|meeting|démo/)) {
      return { intent: 'booking', useAI: 'claude' };
    }
    
    // Questions générales - les deux IA travaillent ensemble
    return { intent: 'general', useAI: 'both' };
  };

  // Réponse locale intelligente (sans API si possible)
  const getLocalResponse = (message: string, intent: string, lang: Language): string | null => {
    const lowerMessage = message.toLowerCase();

    // Réponses sur les prix
    if (intent === 'pricing') {
      if (lowerMessage.includes('starter')) {
        const responses = {
          fr: `💼 **Forfait Starter - ${knowledgeBase.pricing.starter.price}$ CAD/mois**\n\n${knowledgeBase.pricing.starter.features.map(f => `✅ ${f}`).join('\n')}\n\n🎯 Parfait pour démarrer avec l'IA !`,
          en: `💼 **Starter Plan - ${knowledgeBase.pricing.starter.price}$ CAD/month**\n\n✅ 1 specialized micro-agent\n✅ Email support 48h\n✅ Deployment in 7 days\n✅ Basic training included\n\n🎯 Perfect to get started with AI!`,
          es: `💼 **Plan Starter - ${knowledgeBase.pricing.starter.price}$ CAD/mes**\n\n✅ 1 micro-agente especializado\n✅ Soporte por email 48h\n✅ Despliegue en 7 días\n✅ Formación básica incluida\n\n🎯 ¡Perfecto para empezar con IA!`,
          pt: `💼 **Plano Starter - ${knowledgeBase.pricing.starter.price}$ CAD/mês**\n\n✅ 1 micro-agente especializado\n✅ Suporte por email 48h\n✅ Implantação em 7 dias\n✅ Treinamento básico incluído\n\n🎯 Perfeito para começar com IA!`
        };
        return responses[lang];
      }
      if (lowerMessage.includes('professional')) {
        const responses = {
          fr: `🚀 **Forfait Professional - ${knowledgeBase.pricing.professional.price}$ CAD/mois**\n\n${knowledgeBase.pricing.professional.features.map(f => `✅ ${f}`).join('\n')}\n\n⭐ Notre forfait le plus populaire !`,
          en: `🚀 **Professional Plan - ${knowledgeBase.pricing.professional.price}$ CAD/month**\n\n✅ 3 specialized micro-agents\n✅ Priority support 24h\n✅ Deployment in 10 days\n✅ Advanced training + documentation\n✅ CRM integrations\n\n⭐ Our most popular plan!`,
          es: `🚀 **Plan Professional - ${knowledgeBase.pricing.professional.price}$ CAD/mes**\n\n✅ 3 micro-agentes especializados\n✅ Soporte prioritario 24h\n✅ Despliegue en 10 días\n✅ Formación avanzada + documentación\n✅ Integraciones CRM\n\n⭐ ¡Nuestro plan más popular!`,
          pt: `🚀 **Plano Professional - ${knowledgeBase.pricing.professional.price}$ CAD/mês**\n\n✅ 3 micro-agentes especializados\n✅ Suporte prioritário 24h\n✅ Implantação em 10 dias\n✅ Treinamento avançado + documentação\n✅ Integrações CRM\n\n⭐ Nosso plano mais popular!`
        };
        return responses[lang];
      }
      if (lowerMessage.includes('enterprise')) {
        const responses = {
          fr: `👑 **Forfait Enterprise - ${knowledgeBase.pricing.enterprise.price}$ CAD/mois**\n\n${knowledgeBase.pricing.enterprise.features.map(f => `✅ ${f}`).join('\n')}\n\n🏆 Pour les entreprises ambitieuses !`,
          en: `👑 **Enterprise Plan - ${knowledgeBase.pricing.enterprise.price}$ CAD/month**\n\n✅ Unlimited micro-agents\n✅ Dedicated support 24/7\n✅ Deployment in 15 days\n✅ Complete training + coaching\n✅ Advanced integrations\n✅ Custom API\n\n🏆 For ambitious companies!`,
          es: `👑 **Plan Enterprise - ${knowledgeBase.pricing.enterprise.price}$ CAD/mes**\n\n✅ Micro-agentes ilimitados\n✅ Soporte dedicado 24/7\n✅ Despliegue en 15 días\n✅ Formación completa + acompañamiento\n✅ Integraciones avanzadas\n✅ API personalizada\n\n🏆 ¡Para empresas ambiciosas!`,
          pt: `👑 **Plano Enterprise - ${knowledgeBase.pricing.enterprise.price}$ CAD/mês**\n\n✅ Micro-agentes ilimitados\n✅ Suporte dedicado 24/7\n✅ Implantação em 15 dias\n✅ Treinamento completo + acompanhamento\n✅ Integrações avançadas\n✅ API personalizada\n\n🏆 Para empresas ambiciosas!`
        };
        return responses[lang];
      }
      // Liste tous les forfaits
      const responses = {
        fr: `💰 **Nos Forfaits ZyatrIA**\n\n📦 **Starter** - ${knowledgeBase.pricing.starter.price}$ CAD/mois\n🚀 **Professional** - ${knowledgeBase.pricing.professional.price}$ CAD/mois\n👑 **Enterprise** - ${knowledgeBase.pricing.enterprise.price}$ CAD/mois\n\n✨ Tous incluent le déploiement rapide en 7-15 jours !\n\n**Quel forfait vous intéresse ?**`,
        en: `💰 **Our ZyatrIA Plans**\n\n📦 **Starter** - ${knowledgeBase.pricing.starter.price}$ CAD/month\n🚀 **Professional** - ${knowledgeBase.pricing.professional.price}$ CAD/month\n👑 **Enterprise** - ${knowledgeBase.pricing.enterprise.price}$ CAD/month\n\n✨ All include fast deployment in 7-15 days!\n\n**Which plan interests you?**`,
        es: `💰 **Nuestros Planes ZyatrIA**\n\n📦 **Starter** - ${knowledgeBase.pricing.starter.price}$ CAD/mes\n🚀 **Professional** - ${knowledgeBase.pricing.professional.price}$ CAD/mes\n👑 **Enterprise** - ${knowledgeBase.pricing.enterprise.price}$ CAD/mes\n\n✨ ¡Todos incluyen despliegue rápido en 7-15 días!\n\n**¿Qué plan te interesa?**`,
        pt: `💰 **Nossos Planos ZyatrIA**\n\n📦 **Starter** - ${knowledgeBase.pricing.starter.price}$ CAD/mês\n🚀 **Professional** - ${knowledgeBase.pricing.professional.price}$ CAD/mês\n👑 **Enterprise** - ${knowledgeBase.pricing.enterprise.price}$ CAD/mês\n\n✨ Todos incluem implantação rápida em 7-15 dias!\n\n**Qual plano te interessa?**`
      };
      return responses[lang];
    }

    // Réponses sur les micro-agents
    if (intent === 'microagents') {
      const responses = {
        fr: `🤖 **Nos Micro-Agents Spécialisés**\n\n${knowledgeBase.microAgents.map((agent, i) => `${i + 1}. ${agent}`).join('\n')}\n\n✨ Chaque micro-agent est personnalisé pour votre industrie !\n\n**Quel type d'agent vous intéresse ?**`,
        en: `🤖 **Our Specialized Micro-Agents**\n\n1. Real Estate Agent - Lead qualification, virtual tours\n2. E-commerce Agent - Product recommendations, order tracking\n3. Customer Support Agent - 24/7 instant responses\n4. HR Agent - Recruitment, onboarding\n5. Marketing Agent - Content generation, campaigns\n6. Accounting Agent - Invoicing, financial reports\n\n✨ Each micro-agent is customized for your industry!\n\n**Which type of agent interests you?**`,
        es: `🤖 **Nuestros Micro-Agentes Especializados**\n\n1. Agente Inmobiliario - Calificación de leads, tours virtuales\n2. Agente E-commerce - Recomendaciones, seguimiento de pedidos\n3. Agente de Soporte - Respuestas instantáneas 24/7\n4. Agente RH - Reclutamiento, onboarding\n5. Agente Marketing - Generación de contenido, campañas\n6. Agente Contable - Facturación, informes financieros\n\n✨ ¡Cada micro-agente está personalizado para tu industria!\n\n**¿Qué tipo de agente te interesa?**`,
        pt: `🤖 **Nossos Micro-Agentes Especializados**\n\n1. Agente Imobiliário - Qualificação de leads, tours virtuais\n2. Agente E-commerce - Recomendações, rastreamento de pedidos\n3. Agente de Suporte - Respostas instantâneas 24/7\n4. Agente RH - Recrutamento, onboarding\n5. Agente Marketing - Geração de conteúdo, campanhas\n6. Agente Contábil - Faturamento, relatórios financeiros\n\n✨ Cada micro-agente é personalizado para sua indústria!\n\n**Qual tipo de agente te interessa?**`
      };
      return responses[lang];
    }

    // Réponses sur les langues
    if (lowerMessage.match(/langue|language|idioma|língua/)) {
      const responses = {
        fr: `🌍 **Support Multilingue**\n\nNos agents IA parlent :\n${knowledgeBase.languages.map(l => `✅ ${l}`).join('\n')}\n\n🎯 Servez vos clients dans leur langue préférée !`,
        en: `🌍 **Multilingual Support**\n\nOur AI agents speak:\n✅ Français\n✅ English\n✅ Español\n✅ Português\n\n🎯 Serve your clients in their preferred language!`,
        es: `🌍 **Soporte Multilingüe**\n\nNuestros agentes IA hablan:\n✅ Français\n✅ English\n✅ Español\n✅ Português\n\n🎯 ¡Sirve a tus clientes en su idioma preferido!`,
        pt: `🌍 **Suporte Multilíngue**\n\nNossos agentes IA falam:\n✅ Français\n✅ English\n✅ Español\n✅ Português\n\n🎯 Sirva seus clientes em seu idioma preferido!`
      };
      return responses[lang];
    }

    // Réponses sur le déploiement
    if (lowerMessage.match(/déploiement|deployment|délai|time|rapide|quick|despliegue|implantação/)) {
      const responses = {
        fr: `⚡ **Déploiement Ultra-Rapide**\n\n📦 Starter : 7 jours\n🚀 Professional : 10 jours\n👑 Enterprise : 15 jours\n\n✨ Nous sommes les plus rapides du marché !`,
        en: `⚡ **Ultra-Fast Deployment**\n\n📦 Starter: 7 days\n🚀 Professional: 10 days\n👑 Enterprise: 15 days\n\n✨ We're the fastest on the market!`,
        es: `⚡ **Despliegue Ultra-Rápido**\n\n📦 Starter: 7 días\n🚀 Professional: 10 días\n👑 Enterprise: 15 días\n\n✨ ¡Somos los más rápidos del mercado!`,
        pt: `⚡ **Implantação Ultra-Rápida**\n\n📦 Starter: 7 dias\n🚀 Professional: 10 dias\n👑 Enterprise: 15 dias\n\n✨ Somos os mais rápidos do mercado!`
      };
      return responses[lang];
    }

    return null;
  };

  // Auto-detect language from user message
  const detectLanguage = (message: string): Language => {
    const lowerMessage = message.toLowerCase();
    
    // English detection
    if (lowerMessage.match(/\b(hello|hi|hey|how|what|when|where|why|can|do|does|is|are|speak|english|price|cost)\b/)) {
      return 'en';
    }
    
    // Spanish detection
    if (lowerMessage.match(/\b(hola|qué|cuánto|cómo|cuál|dónde|cuándo|por qué|habla|español|precio|costo)\b/)) {
      return 'es';
    }
    
    // Portuguese detection
    if (lowerMessage.match(/\b(olá|oi|como|quanto|qual|onde|quando|por que|fala|português|preço|custo)\b/)) {
      return 'pt';
    }
    
    // Default to current language or French
    return language || 'fr';
  };

  const handleSendMessage = async () => {
    const message = inputValue.trim();
    if (!message || isLoading) return;

    // Auto-detect and switch language
    const detectedLang = detectLanguage(message);
    if (detectedLang !== language) {
      setLanguage(detectedLang);
    }

    addMessage('user', message);
    setInputValue('');
    setIsLoading(true);

    try {
      // Analyser l'intention
      const { intent, useAI } = analyzeIntent(message);

      // Essayer d'abord une réponse locale
      const localResponse = getLocalResponse(message, intent, detectedLang);
      
      if (localResponse) {
        // Réponse instantanée depuis la base de connaissances
        setTimeout(() => {
          addMessage('bot', localResponse, 'claude');
          setIsLoading(false);
        }, 500);
        return;
      }

      // Sinon, utiliser l'IA appropriée
      const conversationHistory = messages
        .slice(-10)
        .map(m => ({
          role: m.sender === 'user' ? 'user' : 'assistant',
          content: m.text
        }));

      // Contexte enrichi pour l'IA
      const languageNames = {
        fr: 'français',
        en: 'English',
        es: 'español',
        pt: 'português'
      };

      const systemContext = `Tu es l'assistant intelligent de ZyatrIA Global, une entreprise qui vend des agents IA et de l'automatisation.

INFORMATIONS IMPORTANTES :
- Forfaits : Starter (${knowledgeBase.pricing.starter.price}$ CAD), Professional (${knowledgeBase.pricing.professional.price}$ CAD), Enterprise (${knowledgeBase.pricing.enterprise.price}$ CAD)
- Déploiement : 7-15 jours selon le forfait
- Langues supportées : ${knowledgeBase.languages.join(', ')}
- Micro-agents disponibles : ${knowledgeBase.microAgents.length} types différents

MISSION :
1. Guider les clients vers le bon forfait
2. Répondre avec précision et enthousiasme
3. Être multilingue (langue actuelle : ${languageNames[detectedLang]})
4. Proposer des démos et rendez-vous
5. Mettre en avant nos avantages : rapidité, expertise, support

IMPORTANT : Réponds UNIQUEMENT en ${languageNames[detectedLang]}. Si le client écrit en anglais, réponds en anglais. Si en espagnol, réponds en espagnol, etc.`;

      let response;

      if (useAI === 'claude' || useAI === 'both') {
        // Utiliser Claude pour les questions commerciales et générales
        response = await fetch(`${baseUrl}/api/claude-chat`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            message: `${systemContext}\n\nQuestion du client : ${message}`,
            conversationHistory
          })
        });

        if (response.ok) {
          const data = await response.json();
          addMessage('bot', data.response || data.message, 'claude');
        } else {
          throw new Error('Claude API error');
        }
      } else if (useAI === 'mistral') {
        // Utiliser Mistral pour les questions techniques
        response = await fetch(`${baseUrl}/api/mistral-chat`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            message: `${systemContext}\n\nQuestion technique : ${message}`,
            conversationHistory
          })
        });

        if (response.ok) {
          const data = await response.json();
          addMessage('bot', data.response || data.message, 'mistral');
        } else {
          throw new Error('Mistral API error');
        }
      }

    } catch (error) {
      console.error('Erreur chatbot:', error);
      
      // Message d'erreur amical
      const errorMessages = {
        fr: '😊 Désolé, je rencontre un petit problème technique. Mais je peux quand même vous aider ! Posez-moi une question sur nos forfaits, nos micro-agents ou prenez rendez-vous avec notre équipe.',
        en: '😊 Sorry, I\'m having a small technical issue. But I can still help you! Ask me about our plans, micro-agents, or book a meeting with our team.',
        es: '😊 Lo siento, tengo un pequeño problema técnico. ¡Pero aún puedo ayudarte! Pregúntame sobre nuestros planes, micro-agentes o reserva una reunión con nuestro equipo.',
        pt: '😊 Desculpe, estou tendo um pequeno problema técnico. Mas ainda posso ajudá-lo! Pergunte-me sobre nossos planos, micro-agentes ou agende uma reunião com nossa equipe.'
      };
      
      addMessage('bot', errorMessages[detectedLang]);
    } finally {
      setIsLoading(false);
    }
  };

  const t = translations[language];

  return (
    <>
      {/* Bouton flottant avec animation */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full shadow-2xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-indigo-500/50 z-50 animate-pulse-glow"
          aria-label="Ouvrir le chat"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
        </button>
      )}

      {/* Fenêtre de chat */}
      {isOpen && (
        <Card className={`fixed bottom-6 right-6 w-[350px] shadow-2xl z-50 flex flex-col transition-all duration-300 ${
          isMinimized ? 'h-14' : 'h-[500px]'
        }`}>
          {/* En-tête avec gradient */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-t-lg">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Sparkles className="w-6 h-6 animate-pulse" />
                <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{t.title}</h3>
                <p className="text-xs text-indigo-100">Claude & Mistral AI</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {/* Sélecteur de langue */}
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="bg-white/20 text-white text-xs rounded px-2 py-1 border-0 cursor-pointer hover:bg-white/30 transition-colors"
              >
                <option value="fr">🇫🇷 FR</option>
                <option value="en">🇬🇧 EN</option>
                <option value="es">🇪🇸 ES</option>
                <option value="pt">🇵🇹 PT</option>
              </select>
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="hover:bg-white/20 p-1.5 rounded transition-colors"
                aria-label={isMinimized ? "Agrandir" : "Réduire"}
              >
                <Minimize2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 p-1.5 rounded transition-colors"
                aria-label="Fermer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Zone de messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white'
                          : 'bg-white text-gray-800 border border-gray-200'
                      }`}
                    >
                      <div className="text-sm whitespace-pre-wrap break-words leading-relaxed">
                        {message.text.split('\n').map((line, i) => {
                          // Handle bold text with **
                          const parts = line.split(/(\*\*.*?\*\*)/g);
                          return (
                            <p key={i} className={i > 0 ? 'mt-2' : ''}>
                              {parts.map((part, j) => {
                                if (part.startsWith('**') && part.endsWith('**')) {
                                  return (
                                    <strong key={j} className="font-bold">
                                      {part.slice(2, -2)}
                                    </strong>
                                  );
                                }
                                return <span key={j}>{part}</span>;
                              })}
                            </p>
                          );
                        })}
                      </div>
                      <div className="flex items-center justify-between mt-2 gap-2">
                        <span className={`text-xs ${message.sender === 'user' ? 'text-indigo-100' : 'text-gray-500'}`}>
                          {message.timestamp.toLocaleTimeString(language === 'fr' ? 'fr-FR' : language === 'en' ? 'en-US' : language === 'es' ? 'es-ES' : 'pt-PT', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </span>
                        {message.sender === 'bot' && message.aiModel && (
                          <span className="text-xs bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-2 py-0.5 rounded-full font-medium">
                            {message.aiModel === 'claude' ? '🧠 Claude' : '⚡ Mistral'}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-sm">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-2.5 h-2.5 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-2.5 h-2.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Suggestions rapides */}
              <div className="px-4 py-2 bg-gray-50 border-t border-gray-200 flex gap-2 overflow-x-auto">
                <button
                  onClick={() => setInputValue(language === 'fr' ? 'Quels sont vos forfaits ?' : language === 'en' ? 'What are your plans?' : language === 'es' ? '¿Cuáles son sus planes?' : 'Quais são seus planos?')}
                  className="text-xs bg-white border border-gray-300 text-gray-700 px-3 py-1.5 rounded-full hover:bg-indigo-50 hover:border-indigo-300 transition-colors whitespace-nowrap flex items-center gap-1"
                >
                  <ShoppingCart className="w-3 h-3" />
                  {language === 'fr' ? 'Forfaits' : language === 'en' ? 'Plans' : language === 'es' ? 'Planes' : 'Planos'}
                </button>
                <button
                  onClick={() => setInputValue(language === 'fr' ? 'Quels micro-agents proposez-vous ?' : language === 'en' ? 'What micro-agents do you offer?' : language === 'es' ? '¿Qué micro-agentes ofrecen?' : 'Quais micro-agentes vocês oferecem?')}
                  className="text-xs bg-white border border-gray-300 text-gray-700 px-3 py-1.5 rounded-full hover:bg-purple-50 hover:border-purple-300 transition-colors whitespace-nowrap flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3" />
                  {language === 'fr' ? 'Micro-agents' : language === 'en' ? 'Micro-agents' : language === 'es' ? 'Micro-agentes' : 'Micro-agentes'}
                </button>
                <button
                  onClick={() => setInputValue(language === 'fr' ? 'Je veux une démo' : language === 'en' ? 'I want a demo' : language === 'es' ? 'Quiero una demo' : 'Quero uma demonstração')}
                  className="text-xs bg-white border border-gray-300 text-gray-700 px-3 py-1.5 rounded-full hover:bg-green-50 hover:border-green-300 transition-colors whitespace-nowrap flex items-center gap-1"
                >
                  <Calendar className="w-3 h-3" />
                  {language === 'fr' ? 'Démo' : language === 'en' ? 'Demo' : language === 'es' ? 'Demo' : 'Demo'}
                </button>
              </div>

              {/* Zone de saisie */}
              <div className="p-4 border-t bg-white">
                <div className="flex gap-2">
                  <Input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                    placeholder={t.placeholder}
                    disabled={isLoading}
                    className="flex-1 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={isLoading || !inputValue.trim()}
                    size="icon"
                    className="bg-gradient-to-br from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-md"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  {t.poweredBy}
                </p>
              </div>
            </>
          )}
        </Card>
      )}
    </>
  );
}








