import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Sparkles, Zap, Brain, TrendingUp, Shield, Cpu, Loader2 } from 'lucide-react';
import { baseUrl } from '../lib/base-url';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface AgentCapability {
  icon: React.ReactNode;
  name: string;
  description: string;
  active: boolean;
}

const ClaudePoweredChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

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

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      // Appel à l'API Claude via notre endpoint
      const response = await fetch(`${baseUrl}/api/claude-chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputValue
        })
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la communication avec Claude');
      }

      const data = await response.json();

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.message,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Erreur:', error);
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "😔 Désolé, je rencontre un problème technique. Veuillez réessayer dans quelques instants ou contactez-nous directement à contact@zyatria.global",
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
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
        text: "👋 Bonjour! Je suis votre agent IA ZyatrIA, propulsé par **Claude 3.5 Sonnet** - l'IA la plus avancée du marché.\n\nComment puis-je transformer votre entreprise aujourd'hui?\n\n💡 Je peux vous aider avec:\n• Nos services d'IA et automatisation\n• Nos 6 micro-agents spécialisés\n• Tarification et packages\n• ROI et résultats mesurables\n• Réserver une consultation gratuite",
        sender: 'bot',
        timestamp: new Date()
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
            Agent IA ZyatrIA - Propulsé par Claude 3.5 🚀
          </div>
        </button>
      )}

      {/* Fenêtre de chat */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[420px] h-[650px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700">
          {/* Header */}
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
                  Propulsé par Claude 3.5 Sonnet
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="h-9 w-9 text-white hover:bg-white/30 hover:text-white transition-all rounded-lg flex items-center justify-center"
              aria-label="Fermer le chat"
              title="Fermer"
            >
              <X className="w-6 h-6 stroke-[2.5]" />
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
                    <Loader2 className="w-4 h-4 text-blue-600 animate-spin" />
                    <span className="text-xs text-gray-500 dark:text-gray-400">Claude réfléchit...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Posez votre question..."
                disabled={isTyping}
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-xl hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 shadow-lg"
                aria-label="Envoyer"
              >
                {isTyping ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
              Propulsé par Claude 3.5 Sonnet • L'IA la plus avancée
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ClaudePoweredChatBot;


