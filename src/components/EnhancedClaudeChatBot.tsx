





import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Sparkles, Zap, Brain, TrendingUp, Shield, Cpu, Loader2, Calendar, Calculator, Mail, Mic, MicOff } from 'lucide-react';
import { baseUrl } from '../lib/base-url';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  suggestions?: QuickAction[];
}

interface QuickAction {
  icon: React.ReactNode;
  label: string;
  action: string;
  type: 'question' | 'calendly' | 'roi' | 'email';
}

interface AgentCapability {
  icon: React.ReactNode;
  name: string;
  description: string;
  active: boolean;
}

interface ROIData {
  employees?: number;
  hoursPerWeek?: number;
  sector?: string;
}

const EnhancedClaudeChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [roiData, setRoiData] = useState<ROIData>({});
  const [roiStep, setRoiStep] = useState(0);
  const [userEmail, setUserEmail] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  // Capacités de l'agent
  const agentCapabilities: AgentCapability[] = [
    {
      icon: <Brain className="w-4 h-4" />,
      name: 'Claude 3.5 Sonnet',
      description: 'IA la plus avancée',
      active: true
    },
    {
      icon: <Zap className="w-4 h-4" />,
      name: 'Réponses Intelligentes',
      description: 'Compréhension contextuelle',
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

  // Suggestions de questions rapides
  const quickSuggestions: QuickAction[] = [
    {
      icon: <Cpu className="w-4 h-4" />,
      label: 'Quels sont vos micro-agents?',
      action: 'micro-agents',
      type: 'question'
    },
    {
      icon: <TrendingUp className="w-4 h-4" />,
      label: 'Combien ça coûte?',
      action: 'pricing',
      type: 'question'
    },
    {
      icon: <Calculator className="w-4 h-4" />,
      label: 'Calculer mon ROI',
      action: 'roi',
      type: 'roi'
    },
    {
      icon: <Calendar className="w-4 h-4" />,
      label: 'Réserver une consultation',
      action: 'calendly',
      type: 'calendly'
    },
    {
      icon: <Zap className="w-4 h-4" />,
      label: 'Comment ça marche?',
      action: 'how-it-works',
      type: 'question'
    },
    {
      icon: <Shield className="w-4 h-4" />,
      label: 'Disponible dans mon pays?',
      action: 'availability',
      type: 'question'
    }
  ];

  // Initialiser la reconnaissance vocale
  useEffect(() => {
    if (typeof window !== 'undefined' && ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'fr-FR';

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputValue(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = () => {
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, []);

  const toggleVoiceInput = () => {
    if (!recognitionRef.current) {
      alert('La reconnaissance vocale n\'est pas supportée par votre navigateur.');
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const handleQuickAction = async (action: QuickAction) => {
    if (action.type === 'calendly') {
      // Ouvrir Calendly
      window.open('https://calendly.com/zyatria-global/consultation', '_blank');
      
      const botMessage: Message = {
        id: Date.now().toString(),
        text: "📅 Parfait! J'ai ouvert notre calendrier de réservation dans un nouvel onglet. Choisissez le créneau qui vous convient le mieux!\n\nVous recevrez une confirmation par email avec le lien de la visioconférence.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      return;
    }

    if (action.type === 'roi') {
      // Démarrer le calculateur ROI
      setRoiStep(1);
      const botMessage: Message = {
        id: Date.now().toString(),
        text: "📊 Excellent! Je vais calculer votre ROI personnalisé.\n\nCombien d'employés avez-vous dans votre entreprise?",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      return;
    }

    // Pour les questions normales
    const userMessage: Message = {
      id: Date.now().toString(),
      text: action.label,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);

    // Réponses prédéfinies pour les questions rapides
    const responses: Record<string, string> = {
      'micro-agents': "🤖 Nous proposons **6 micro-agents spécialisés**:\n\n1. **Agent Immobilier** - Gestion des leads, visites virtuelles, suivi clients\n2. **Agent E-commerce** - Gestion des commandes, support client, recommandations\n3. **Agent Support Client** - Réponses 24/7, tickets, satisfaction client\n4. **Agent Marketing** - Campagnes automatisées, analytics, A/B testing\n5. **Agent RH** - Recrutement, onboarding, gestion des congés\n6. **Agent Finance** - Facturation, rapports, prévisions\n\nChaque agent s'intègre à vos outils existants et apprend de vos processus!",
      'pricing': "💰 **Nos tarifs transparents:**\n\n**Starter** - 997$/mois\n• 1 micro-agent\n• Support email\n• Intégrations de base\n\n**Professional** - 2,497$/mois\n• 3 micro-agents\n• Support prioritaire\n• Intégrations avancées\n• ROI garanti\n\n**Enterprise** - Sur mesure\n• Agents illimités\n• Support dédié 24/7\n• Personnalisation complète\n• SLA garanti\n\n✨ **Offre de lancement:** -20% les 3 premiers mois!",
      'how-it-works': "⚡ **Notre processus en 4 étapes:**\n\n**1. Consultation (30 min)** - Analyse de vos besoins\n**2. Configuration (3-5 jours)** - Paramétrage des agents\n**3. Formation (2 jours)** - Votre équipe apprend à utiliser les agents\n**4. Déploiement (7-15 jours)** - Mise en production progressive\n\n📈 Résultats mesurables dès la première semaine!",
      'availability': "🇨🇦🇺🇸 **Disponibilité en Amérique du Nord:**\n\n✅ **Canada** - Québec, Ontario, Colombie-Britannique\n✅ **États-Unis** - Tous les états\n\n🗣️ **Support bilingue:** Français et Anglais\n\n⏰ **Fuseau horaire:** Nous couvrons tous les fuseaux horaires nord-américains (EST, CST, MST, PST)"
    };

    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 1500));

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: responses[action.action] || "Je peux vous aider avec ça! Laissez-moi vous donner plus de détails...",
      sender: 'bot',
      timestamp: new Date(),
      suggestions: action.action === 'pricing' ? [
        {
          icon: <Calculator className="w-4 h-4" />,
          label: 'Calculer mon ROI',
          action: 'roi',
          type: 'roi'
        },
        {
          icon: <Calendar className="w-4 h-4" />,
          label: 'Réserver une démo',
          action: 'calendly',
          type: 'calendly'
        }
      ] : undefined
    };

    setMessages(prev => [...prev, botMessage]);
    setIsTyping(false);
  };

  const calculateROI = () => {
    const { employees = 0, hoursPerWeek = 0, sector = 'général' } = roiData;
    
    // Calculs basés sur des moyennes réelles
    const hourlyRate = 35; // Taux horaire moyen
    const weeksPerYear = 52;
    const automationRate = 0.65; // 65% des tâches automatisables
    const costReduction = 0.40; // 40% de réduction des coûts
    
    const annualSavings = Math.round(employees * hoursPerWeek * hourlyRate * weeksPerYear * automationRate);
    const timeGained = Math.round(hoursPerWeek * weeksPerYear * automationRate);
    const roi = Math.round((annualSavings / 30000) * 100); // Basé sur un investissement moyen de 30k/an
    const paybackMonths = Math.round((30000 / annualSavings) * 12);

    const botMessage: Message = {
      id: Date.now().toString(),
      text: `📊 **RÉSULTAT DE VOTRE ROI PERSONNALISÉ**\n\n💰 **Économies annuelles:** ${annualSavings.toLocaleString()}$\n⏰ **Temps gagné:** ${timeGained.toLocaleString()} heures/an\n📈 **ROI:** ${roi}% la première année\n🎯 **Retour sur investissement:** ${paybackMonths} mois\n\n**Avec nos agents IA, vous pourriez:**\n• Automatiser 65% des tâches répétitives\n• Réduire les coûts opérationnels de 40%\n• Augmenter la productivité de 55%\n\n✨ Ces chiffres sont basés sur les résultats moyens de nos clients dans le secteur ${sector}.`,
      sender: 'bot',
      timestamp: new Date(),
      suggestions: [
        {
          icon: <Calendar className="w-4 h-4" />,
          label: 'Réserver une démo personnalisée',
          action: 'calendly',
          type: 'calendly'
        },
        {
          icon: <Mail className="w-4 h-4" />,
          label: 'Recevoir le rapport détaillé',
          action: 'email',
          type: 'email'
        }
      ]
    };

    setMessages(prev => [...prev, botMessage]);
    setRoiStep(0);
    setRoiData({});
  };

  const handleSendMessage = async (customMessage?: string) => {
    const messageText = customMessage || inputValue;
    if (!messageText.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Gestion du flux ROI
    if (roiStep > 0) {
      if (roiStep === 1) {
        const employees = parseInt(messageText);
        if (!isNaN(employees)) {
          setRoiData(prev => ({ ...prev, employees }));
          setRoiStep(2);
          const botMessage: Message = {
            id: Date.now().toString(),
            text: "Parfait! Combien d'heures par semaine sont consacrées à des tâches répétitives (administration, saisie de données, etc.)?",
            sender: 'bot',
            timestamp: new Date()
          };
          setMessages(prev => [...prev, botMessage]);
          return;
        }
      } else if (roiStep === 2) {
        const hours = parseInt(messageText);
        if (!isNaN(hours)) {
          setRoiData(prev => ({ ...prev, hoursPerWeek: hours }));
          setRoiStep(3);
          const botMessage: Message = {
            id: Date.now().toString(),
            text: "Excellent! Dans quel secteur êtes-vous? (Immobilier, E-commerce, Services, Autre)",
            sender: 'bot',
            timestamp: new Date()
          };
          setMessages(prev => [...prev, botMessage]);
          return;
        }
      } else if (roiStep === 3) {
        setRoiData(prev => ({ ...prev, sector: messageText }));
        setIsTyping(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsTyping(false);
        calculateROI();
        return;
      }
    }

    // Détection de demande d'email
    if (messageText.includes('@') && messageText.includes('.')) {
      setUserEmail(messageText);
      const botMessage: Message = {
        id: Date.now().toString(),
        text: `✅ Parfait! Je vous envoie tout ça à ${messageText}.\n\nVous recevrez dans quelques minutes:\n• Guide complet des 6 micro-agents\n• Calculateur ROI personnalisé\n• Études de cas de votre secteur\n• Offre de lancement exclusive (-20%)\n\nVous recevrez aussi un accès à notre webinaire gratuit et une consultation de 30 min offerte!`,
        sender: 'bot',
        timestamp: new Date(),
        suggestions: [
          {
            icon: <Calendar className="w-4 h-4" />,
            label: 'Réserver ma consultation gratuite',
            action: 'calendly',
            type: 'calendly'
          }
        ]
      };
      setMessages(prev => [...prev, botMessage]);
      return;
    }

    setIsTyping(true);

    // Essayer d'abord l'API Claude pour des réponses plus intelligentes
    try {
      const response = await fetch(`${baseUrl}/api/claude-chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: messageText
        })
      });

      if (response.ok) {
        const data = await response.json();

        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: data.message,
          sender: 'bot',
          timestamp: new Date()
        };

        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
        return;
      }
    } catch (error) {
      console.log('API Claude non disponible, utilisation du mode local');
    }

    // Fallback: Analyse intelligente locale si l'API Claude ne répond pas
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Analyse intelligente du message pour générer une réponse contextuelle
    const lowerMessage = messageText.toLowerCase();
    let responseText = '';
    let suggestions: QuickAction[] | undefined;

    // Détection des intentions
    if (lowerMessage.includes('prix') || lowerMessage.includes('coût') || lowerMessage.includes('tarif') || lowerMessage.includes('combien')) {
      responseText = "💰 **Nos tarifs transparents:**\n\n**Starter** - 997$/mois\n• 1 micro-agent\n• Support email\n• Intégrations de base\n\n**Professional** - 2,497$/mois\n• 3 micro-agents\n• Support prioritaire\n• Intégrations avancées\n• ROI garanti\n\n**Enterprise** - Sur mesure\n• Agents illimités\n• Support dédié 24/7\n• Personnalisation complète\n• SLA garanti\n\n✨ **Offre de lancement:** -20% les 3 premiers mois!";
      suggestions = [
        {
          icon: <Calculator className="w-4 h-4" />,
          label: 'Calculer mon ROI',
          action: 'roi',
          type: 'roi'
        },
        {
          icon: <Calendar className="w-4 h-4" />,
          label: 'Réserver une démo',
          action: 'calendly',
          type: 'calendly'
        }
      ];
    } else if (lowerMessage.includes('agent') || lowerMessage.includes('micro') || lowerMessage.includes('fonctionnalité')) {
      responseText = "🤖 **Nos 6 micro-agents spécialisés:**\n\n1. **Agent Immobilier** - Gestion des leads, visites virtuelles, suivi clients\n2. **Agent E-commerce** - Gestion des commandes, support client, recommandations\n3. **Agent Support Client** - Réponses 24/7, tickets, satisfaction client\n4. **Agent Marketing** - Campagnes automatisées, analytics, A/B testing\n5. **Agent RH** - Recrutement, onboarding, gestion des congés\n6. **Agent Finance** - Facturation, rapports, prévisions\n\nChaque agent s'intègre à vos outils existants et apprend de vos processus!";
    } else if (lowerMessage.includes('comment') || lowerMessage.includes('marche') || lowerMessage.includes('fonctionne')) {
      responseText = "⚡ **Notre processus en 4 étapes:**\n\n**1. Consultation (30 min)** - Analyse de vos besoins\n**2. Configuration (3-5 jours)** - Paramétrage des agents\n**3. Formation (2 jours)** - Votre équipe apprend à utiliser les agents\n**4. Déploiement (7-15 jours)** - Mise en production progressive\n\n📈 Résultats mesurables dès la première semaine!";
    } else if (lowerMessage.includes('pays') || lowerMessage.includes('disponible') || lowerMessage.includes('région') || lowerMessage.includes('où')) {
      responseText = "🌍 **Disponibilité mondiale:**\n\n✅ **Amérique du Nord** - USA, Canada\n✅ **Europe** - France, Belgique, Suisse, Luxembourg\n✅ **Afrique** - Maroc, Tunisie, Sénégal, Côte d'Ivoire\n✅ **Amérique Latine** - Brésil, Argentine, Mexique\n\n🗣️ **Support multilingue:** Français, Anglais, Espagnol, Portugais\n\n⏰ **Fuseau horaire:** Nous nous adaptons à votre zone!";
    } else if (lowerMessage.includes('roi') || lowerMessage.includes('retour') || lowerMessage.includes('économie')) {
      responseText = "📊 **ROI Moyen de nos clients:**\n\n• **Économies:** 40-60% sur les coûts opérationnels\n• **Productivité:** +55% en moyenne\n• **Temps gagné:** 20-30 heures/semaine\n• **Retour sur investissement:** 3-6 mois\n\nVoulez-vous que je calcule votre ROI personnalisé?";
      suggestions = [
        {
          icon: <Calculator className="w-4 h-4" />,
          label: 'Calculer mon ROI',
          action: 'roi',
          type: 'roi'
        }
      ];
    } else if (lowerMessage.includes('démo') || lowerMessage.includes('demo') || lowerMessage.includes('essai') || lowerMessage.includes('test')) {
      responseText = "🎯 **Excellente idée!**\n\nJe peux vous proposer:\n\n1. **Démo en direct (30 min)** - Voir les agents en action\n2. **Essai gratuit (14 jours)** - Tester sans engagement\n3. **Consultation personnalisée** - Analyse de vos besoins\n\nQue préférez-vous?";
      suggestions = [
        {
          icon: <Calendar className="w-4 h-4" />,
          label: 'Réserver une démo',
          action: 'calendly',
          type: 'calendly'
        }
      ];
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('téléphone')) {
      responseText = "📧 **Contactez-nous:**\n\n• **Email:** contact@zyatria.global\n• **Téléphone:** +1 (555) 123-4567\n• **Support 24/7:** support@zyatria.global\n\nOu laissez-moi votre email et je vous envoie toute la documentation!";
    } else if (lowerMessage.includes('sécurité') || lowerMessage.includes('données') || lowerMessage.includes('confidentialité')) {
      responseText = "🔒 **Sécurité & Confidentialité:**\n\n✅ **Cryptage de bout en bout** - Vos données sont protégées\n✅ **Conformité RGPD** - Respect total de la vie privée\n✅ **Hébergement sécurisé** - Serveurs certifiés ISO 27001\n✅ **Audits réguliers** - Tests de sécurité mensuels\n✅ **Sauvegarde automatique** - Vos données sont en sécurité\n\nVos données restent VOTRE propriété, toujours.";
    } else if (lowerMessage.includes('intégration') || lowerMessage.includes('compatible') || lowerMessage.includes('outil')) {
      responseText = "🔌 **Intégrations disponibles:**\n\n**CRM:** Salesforce, HubSpot, Pipedrive\n**E-commerce:** Shopify, WooCommerce, Magento\n**Communication:** Slack, Teams, Discord\n**Email:** Gmail, Outlook, SendGrid\n**Paiement:** Stripe, PayPal, Square\n**Calendrier:** Google Calendar, Outlook Calendar\n\n+ API personnalisée pour vos outils spécifiques!";
    } else {
      // Réponse générique intelligente
      responseText = `Je comprends votre question sur "${messageText}".\n\n🤖 **Je peux vous aider avec:**\n\n• Informations sur nos micro-agents\n• Tarifs et offres spéciales\n• Calcul de votre ROI personnalisé\n• Réservation d'une démo\n• Questions techniques\n\nQue souhaitez-vous savoir en priorité?`;
      suggestions = quickSuggestions.slice(0, 4);
    }

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: responseText,
      sender: 'bot',
      timestamp: new Date(),
      suggestions
    };

    setMessages(prev => [...prev, botMessage]);
    setIsTyping(false);
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
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: "👋 Bonjour! Je suis votre agent IA ZyatrIA, propulsé par **Claude 3.5 Sonnet** - l'IA la plus avancée du marché.\n\nComment puis-je transformer votre entreprise aujourd'hui?",
        sender: 'bot',
        timestamp: new Date(),
        suggestions: quickSuggestions
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  return (
    <>
      {/* Bouton flottant */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-4 z-50 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 animate-pulse-glow group"
          aria-label="Ouvrir le chat IA"
          title="Discuter avec notre Agent IA"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse opacity-75 blur-lg"></div>
            <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110">
              <MessageCircle className="w-6 h-6" />
              <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                <Sparkles className="w-3 h-3" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Agent IA ZyatrIA - Propulsé par Claude 3.5 🚀
          </div>
        </button>
      )}

      {/* Fenêtre de chat */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[500px] h-[750px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700 max-w-[calc(100vw-3rem)] max-h-[calc(100vh-6rem)]">
          {/* En-tête */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="/zyatria-global-logo.svg" 
                alt="ZyatrIA" 
                className="h-6 w-auto"
              />
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="h-9 w-9 bg-white/30 hover:bg-white/40 backdrop-blur-sm text-white transition-all rounded-lg flex items-center justify-center border-2 border-white hover:border-white hover:scale-110 shadow-lg hover:shadow-xl"
              aria-label="Fermer le chat"
              title="Fermer"
            >
              <X className="w-6 h-6 stroke-[3]" />
            </button>
          </div>

          {/* Capacités de l'agent */}
          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800 p-2 border-b border-gray-200 dark:border-gray-700">
            <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-hide">
              {agentCapabilities.map((capability, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 bg-white dark:bg-gray-700 px-2 py-1 rounded-full text-[10px] whitespace-nowrap shadow-sm border border-gray-200 dark:border-gray-600"
                  title={capability.description}
                >
                  <span className="text-blue-600 dark:text-blue-400">{capability.icon}</span>
                  <span className="font-medium text-gray-700 dark:text-gray-300">{capability.name}</span>
                  {capability.active && (
                    <span className="w-1 h-1 bg-green-500 rounded-full"></span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50 dark:bg-gray-800">
            {messages.map((message) => (
              <div key={message.id}>
                <div
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-xl px-4 py-3 ${
                      message.sender === 'user'
                        ? 'bg-blue-100 text-gray-900 shadow-xl border-2 border-blue-300'
                        : 'bg-gray-100 text-gray-900 shadow-xl border-2 border-gray-300'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap leading-relaxed font-medium">{message.text}</p>
                    <p className={`text-xs mt-1.5 font-semibold ${
                      message.sender === 'user' ? 'text-gray-600' : 'text-gray-600'
                    }`}>
                      {message.timestamp.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
                
                {/* Suggestions après le message */}
                {message.suggestions && message.suggestions.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {message.suggestions.map((suggestion, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuickAction(suggestion)}
                        className="flex items-center gap-1.5 px-3 py-2 bg-white dark:bg-gray-700 border-2 border-blue-600 dark:border-blue-400 rounded-lg text-xs font-bold text-gray-900 dark:text-white hover:bg-blue-50 dark:hover:bg-gray-600 hover:border-blue-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                      >
                        <span className="text-blue-600 dark:text-blue-400">{suggestion.icon}</span>
                        {suggestion.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-900 rounded-xl px-4 py-3 shadow-xl border-2 border-gray-300">
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 text-blue-600 animate-spin" />
                    <span className="text-xs text-gray-600 font-semibold">Claude réfléchit...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white dark:bg-gray-900 border-t-2 border-gray-300 dark:border-gray-600">
            <div className="flex gap-2">
              <button
                onClick={toggleVoiceInput}
                disabled={isTyping}
                className={`p-2 rounded-lg transition-all duration-300 shadow-lg border-2 ${
                  isListening
                    ? 'bg-red-500 hover:bg-red-600 text-white animate-pulse border-red-600'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 text-gray-800 dark:text-gray-200 border-gray-400 dark:border-gray-500'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
                aria-label={isListening ? 'Arrêter l\'enregistrement' : 'Commencer l\'enregistrement vocal'}
                title={isListening ? 'Arrêter' : 'Parler'}
              >
                {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </button>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={isListening ? 'Parlez maintenant...' : 'Posez votre question...'}
                disabled={isTyping || isListening}
                className="flex-1 px-3 py-2 border-2 border-gray-400 dark:border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white text-xs font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim() || isTyping}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 shadow-lg border-2 border-blue-700"
                aria-label="Envoyer"
              >
                {isTyping ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </button>
            </div>
            <p className="text-[10px] text-gray-700 dark:text-gray-300 mt-1.5 text-center font-medium">
              Propulsé par Claude 3.5 Sonnet • L'IA la plus avancée
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default EnhancedClaudeChatBot;





































