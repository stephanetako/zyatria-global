

import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Sparkles, Zap, Brain, TrendingUp, Shield, Cpu } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  thinking?: boolean;
}

interface AgentCapability {
  icon: React.ReactNode;
  name: string;
  description: string;
  active: boolean;
}

const GrokStyleChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activeAgent, setActiveAgent] = useState<string>('general');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Capacités de l'agent (style Grok)
  const agentCapabilities: AgentCapability[] = [
    {
      icon: <Brain className="w-4 h-4" />,
      name: 'Raisonnement Avancé',
      description: 'Analyse contextuelle profonde',
      active: true
    },
    {
      icon: <Zap className="w-4 h-4" />,
      name: 'Réponses Instantanées',
      description: 'Traitement en temps réel',
      active: true
    },
    {
      icon: <TrendingUp className="w-4 h-4" />,
      name: 'Apprentissage Continu',
      description: 'Amélioration constante',
      active: true
    },
    {
      icon: <Shield className="w-4 h-4" />,
      name: 'Sécurité Maximale',
      description: 'Données cryptées',
      active: true
    },
    {
      icon: <Cpu className="w-4 h-4" />,
      name: 'Multi-Tâches',
      description: 'Gestion parallèle',
      active: true
    }
  ];

  // Base de connaissances avancée (style Grok)
  const knowledgeBase = {
    greeting: [
      "👋 Bonjour! Je suis votre agent IA ZyatrIA, propulsé par une technologie de pointe similaire à Grok. Comment puis-je transformer votre entreprise aujourd'hui?",
      "🚀 Salut! Agent IA ZyatrIA en ligne. Prêt à déployer des solutions d'automatisation avancées. Quelle est votre mission?",
      "✨ Hey! Votre assistant IA haute performance est là. Parlons de vos objectifs d'automatisation!"
    ],
    services: [
      "🎯 **Nos Services d'IA de Pointe:**\n\n" +
      "**1. Agents IA Conversationnels** 🤖\n" +
      "- Compréhension contextuelle avancée\n" +
      "- Réponses en temps réel\n" +
      "- Support multilingue (FR, EN, ES, PT)\n" +
      "- Intégration omnicanale\n\n" +
      "**2. Automatisation Intelligente** ⚡\n" +
      "- Workflows adaptatifs\n" +
      "- Prise de décision autonome\n" +
      "- Optimisation continue\n" +
      "- ROI mesurable\n\n" +
      "**3. Micro-Agents Spécialisés** 🎯\n" +
      "- Qualification de leads\n" +
      "- Support client 24/7\n" +
      "- Gestion de rendez-vous\n" +
      "- Analyse prédictive\n\n" +
      "**4. Intégrations Avancées** 🔗\n" +
      "- CRM (Salesforce, HubSpot)\n" +
      "- E-commerce (Shopify, WooCommerce)\n" +
      "- Communication (Slack, Teams)\n" +
      "- Bases de données\n\n" +
      "Quel service vous intéresse?"
    ],
    microagents: [
      "🤖 **Nos 6 Micro-Agents Ultra-Performants:**\n\n" +
      "**1. Agent Immobilier** 🏠 - 299$/mois\n" +
      "- Qualification automatique des prospects\n" +
      "- Planification de visites\n" +
      "- Suivi personnalisé\n" +
      "- Analyse de marché en temps réel\n\n" +
      "**2. Agent E-commerce** 🛒 - 349$/mois\n" +
      "- Recommandations intelligentes\n" +
      "- Gestion des paniers abandonnés\n" +
      "- Support client instantané\n" +
      "- Upselling automatisé\n\n" +
      "**3. Agent Support Client** 💬 - 399$/mois\n" +
      "- Résolution autonome de 80% des tickets\n" +
      "- Escalade intelligente\n" +
      "- Base de connaissances dynamique\n" +
      "- Satisfaction client optimisée\n\n" +
      "**4. Agent Lead Qualification** 🎯 - 279$/mois\n" +
      "- Scoring prédictif avancé\n" +
      "- Enrichissement de données\n" +
      "- Routage intelligent\n" +
      "- Conversion optimisée\n\n" +
      "**5. Agent Rendez-vous** 📅 - 249$/mois\n" +
      "- Planification automatique\n" +
      "- Rappels intelligents\n" +
      "- Gestion des annulations\n" +
      "- Optimisation d'agenda\n\n" +
      "**6. Agent Analytique** 📊 - 449$/mois\n" +
      "- Insights en temps réel\n" +
      "- Prédictions avancées\n" +
      "- Rapports automatisés\n" +
      "- Recommandations stratégiques\n\n" +
      "Lequel correspond à vos besoins?"
    ],
    pricing: [
      "💰 **Tarification Transparente & Flexible:**\n\n" +
      "**🎯 Consultation Stratégique** - 149$ CAD\n" +
      "- Analyse complète de vos besoins\n" +
      "- Plan d'implémentation personnalisé\n" +
      "- ROI projeté\n" +
      "- Roadmap détaillée\n\n" +
      "**🚀 Packages Micro-Agents:**\n" +
      "- Agent unique: 249-449$/mois\n" +
      "- Pack 3 agents: -15%\n" +
      "- Pack 6 agents: -25%\n" +
      "- Enterprise: Sur mesure\n\n" +
      "**✨ Inclus dans tous les plans:**\n" +
      "✅ Déploiement en 7-15 jours\n" +
      "✅ Formation complète\n" +
      "✅ Support 24/7\n" +
      "✅ Mises à jour continues\n" +
      "✅ Garantie de performance\n\n" +
      "**🎁 Offre de lancement:**\n" +
      "Premier mois à -50% pour les 10 premiers clients!\n\n" +
      "Voulez-vous réserver votre consultation?"
    ],
    technology: [
      "🔬 **Notre Stack Technologique de Pointe:**\n\n" +
      "**Intelligence Artificielle:**\n" +
      "- Modèles de langage avancés (GPT-4, Claude, Mistral)\n" +
      "- Apprentissage par renforcement\n" +
      "- Traitement du langage naturel (NLP)\n" +
      "- Vision par ordinateur\n\n" +
      "**Architecture:**\n" +
      "- Microservices distribués\n" +
      "- Edge computing\n" +
      "- Scalabilité automatique\n" +
      "- Haute disponibilité (99.9%)\n\n" +
      "**Sécurité:**\n" +
      "- Chiffrement end-to-end\n" +
      "- Conformité RGPD/CCPA\n" +
      "- Authentification multi-facteurs\n" +
      "- Audits de sécurité réguliers\n\n" +
      "**Performance:**\n" +
      "- Latence < 100ms\n" +
      "- Traitement parallèle\n" +
      "- Cache intelligent\n" +
      "- CDN global\n\n" +
      "Notre technologie rivalise avec les meilleurs du marché!"
    ],
    deployment: [
      "⚡ **Déploiement Ultra-Rapide:**\n\n" +
      "**Phase 1: Analyse (Jours 1-3)**\n" +
      "- Audit de vos systèmes\n" +
      "- Définition des objectifs\n" +
      "- Architecture personnalisée\n\n" +
      "**Phase 2: Configuration (Jours 4-7)**\n" +
      "- Intégration des systèmes\n" +
      "- Entraînement des agents\n" +
      "- Tests de performance\n\n" +
      "**Phase 3: Déploiement (Jours 8-12)**\n" +
      "- Mise en production progressive\n" +
      "- Formation de votre équipe\n" +
      "- Optimisation continue\n\n" +
      "**Phase 4: Optimisation (Jours 13-15)**\n" +
      "- Ajustements finaux\n" +
      "- Validation des KPIs\n" +
      "- Documentation complète\n\n" +
      "**Résultat:** Votre agent IA opérationnel en 7-15 jours!\n\n" +
      "Prêt à commencer?"
    ],
    roi: [
      "📈 **ROI Mesurable & Garanti:**\n\n" +
      "**Gains Typiques:**\n" +
      "- 🎯 +40% de leads qualifiés\n" +
      "- ⚡ -60% de temps de réponse\n" +
      "- 💰 -50% de coûts opérationnels\n" +
      "- 😊 +35% de satisfaction client\n" +
      "- 🚀 +25% de conversions\n\n" +
      "**Exemple Concret:**\n" +
      "Entreprise de 50 employés:\n" +
      "- Investissement: 1,500$/mois\n" +
      "- Économies: 8,000$/mois\n" +
      "- ROI: 433%\n" +
      "- Retour sur investissement: 3 semaines\n\n" +
      "**Garantie de Performance:**\n" +
      "Si vous n'atteignez pas un ROI de 200% en 6 mois,\n" +
      "nous travaillons gratuitement jusqu'à l'atteindre!\n\n" +
      "Calculons votre ROI personnalisé?"
    ],
    contact: [
      "📞 **Contactez-Nous Maintenant:**\n\n" +
      "**Consultation Gratuite de 30 minutes:**\n" +
      "- Analyse de vos besoins\n" +
      "- Démonstration personnalisée\n" +
      "- Estimation de ROI\n" +
      "- Plan d'action\n\n" +
      "**Coordonnées:**\n" +
      "📧 Email: contact@zyatria.global\n" +
      "📱 Téléphone: +1 (555) 123-4567\n" +
      "💬 Chat: Disponible 24/7\n" +
      "🌐 Web: https://zyatria.global\n\n" +
      "**Bureaux:**\n" +
      "🇨🇦 Amérique du Nord\n" +
      "🇫🇷 Europe\n" +
      "🇧🇷 Amérique Latine\n" +
      "🇿🇦 Afrique\n\n" +
      "**Réponse garantie en moins de 2 heures!**\n\n" +
      "Voulez-vous réserver votre consultation maintenant?"
    ]
  };

  // Système de compréhension avancé (style Grok)
  const analyzeIntent = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    // Salutations
    if (/(bonjour|salut|hello|hi|hey|bonsoir)/i.test(lowerMessage)) {
      return 'greeting';
    }
    
    // Services
    if (/(service|offre|solution|que faites|what do|capacité|fonctionnalité)/i.test(lowerMessage)) {
      return 'services';
    }
    
    // Micro-agents
    if (/(micro.?agent|agent|bot|chatbot|assistant)/i.test(lowerMessage)) {
      return 'microagents';
    }
    
    // Prix
    if (/(prix|tarif|coût|cost|price|combien|budget)/i.test(lowerMessage)) {
      return 'pricing';
    }
    
    // Technologie
    if (/(technologie|tech|stack|comment|architecture|grok|performance)/i.test(lowerMessage)) {
      return 'technology';
    }
    
    // Déploiement
    if (/(déploiement|deploy|installation|mise en place|implémentation|délai)/i.test(lowerMessage)) {
      return 'deployment';
    }
    
    // ROI
    if (/(roi|retour|rentabilité|économie|gain|bénéfice|résultat)/i.test(lowerMessage)) {
      return 'roi';
    }
    
    // Contact
    if (/(contact|rendez.?vous|consultation|démo|essai|commencer|réserver)/i.test(lowerMessage)) {
      return 'contact';
    }
    
    return 'general';
  };

  // Génération de réponse intelligente
  const generateResponse = (intent: string): string => {
    const responses = knowledgeBase[intent as keyof typeof knowledgeBase];
    
    if (Array.isArray(responses)) {
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    // Réponse par défaut avec intelligence contextuelle
    return "🤔 Excellente question! Je peux vous aider avec:\n\n" +
           "• 🎯 Nos services d'IA et automatisation\n" +
           "• 🤖 Nos 6 micro-agents spécialisés\n" +
           "• 💰 Tarification et packages\n" +
           "• 🔬 Notre technologie de pointe\n" +
           "• ⚡ Processus de déploiement rapide\n" +
           "• 📈 ROI et résultats mesurables\n" +
           "• 📞 Réserver une consultation\n\n" +
           "Que souhaitez-vous explorer en premier?";
  };

  // Effet de frappe réaliste (style Grok)
  const simulateTyping = async (text: string): Promise<void> => {
    setIsTyping(true);
    
    // Simulation de "réflexion"
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const botMessage: Message = {
      id: Date.now().toString(),
      text: text,
      sender: 'bot',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, botMessage]);
    setIsTyping(false);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Analyse de l'intention
    const intent = analyzeIntent(inputValue);
    setActiveAgent(intent);

    // Génération de la réponse
    const response = generateResponse(intent);
    await simulateTyping(response);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      simulateTyping(knowledgeBase.greeting[0]);
    }
  }, [isOpen]);

  return (
    <>
      {/* Bouton flottant avec effet Grok */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 group"
          aria-label="Ouvrir le chat"
        >
          <div className="relative">
            {/* Effet de pulsation */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse opacity-75 blur-lg"></div>
            
            {/* Bouton principal */}
            <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110">
              <MessageCircle className="w-6 h-6" />
              
              {/* Badge de notification */}
              <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                <Sparkles className="w-3 h-3" />
              </div>
            </div>
          </div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Agent IA ZyatrIA - Style Grok 🚀
          </div>
        </button>
      )}

      {/* Fenêtre de chat style Grok */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[420px] h-[650px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700">
          {/* Header avec gradient Grok */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Brain className="w-6 h-6" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="font-bold text-lg">Agent IA ZyatrIA</h3>
                <p className="text-xs text-white/80 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Propulsé par technologie Grok-style
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="bg-white hover:bg-gray-100 p-3 rounded-full transition-all duration-200 hover:scale-110 shadow-lg border-2 border-white/50"
              aria-label="Fermer le chat"
              title="Fermer"
            >
              <X className="w-6 h-6 text-gray-900 stroke-[3]" />
            </button>
          </div>

          {/* Capacités de l'agent */}
          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800 p-3 border-b border-gray-200 dark:border-gray-700">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {agentCapabilities.map((capability, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 bg-white dark:bg-gray-700 px-3 py-1.5 rounded-full text-xs whitespace-nowrap shadow-sm border border-gray-200 dark:border-gray-600"
                  title={capability.description}
                >
                  <span className="text-blue-600 dark:text-blue-400">{capability.icon}</span>
                  <span className="font-medium text-gray-700 dark:text-gray-300">{capability.name}</span>
                  {capability.active && (
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-800">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-md border border-gray-200 dark:border-gray-600'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-white/70' : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    {message.timestamp.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-gray-700 rounded-2xl px-4 py-3 shadow-md border border-gray-200 dark:border-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-pink-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Agent en réflexion...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input avec style Grok */}
          <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Posez votre question..."
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-xl hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 shadow-lg"
                aria-label="Envoyer"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
              Propulsé par IA avancée • Réponses en temps réel
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default GrokStyleChatBot;




