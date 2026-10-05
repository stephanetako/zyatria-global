/**
 * 🚀 CHATBOT SIMPLE ET FONCTIONNEL
 * Système hybride Claude + Mistral avec Phosphor Icons
 */

import React, { useState, useEffect, useRef } from 'react';
import { baseUrl } from '../lib/base-url';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  aiUsed?: 'claude' | 'mistral' | 'fallback';
}

interface ChatResponse {
  message: string;
  aiUsed?: 'claude' | 'mistral' | 'fallback';
}

const SimpleChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Charger Phosphor Icons
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@phosphor-icons/web';
    script.async = true;
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

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
      const response = await fetch(`${baseUrl}/api/ai/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: inputValue,
          messages: messages.map(m => ({
            role: m.sender === 'user' ? 'user' : 'assistant',
            content: m.text
          }))
        })
      });

      if (response.ok) {
        const data = await response.json() as ChatResponse;
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: data.message,
          sender: 'bot',
          timestamp: new Date(),
          aiUsed: data.aiUsed
        };
        setMessages(prev => [...prev, botMessage]);
      } else {
        throw new Error('API error');
      }
    } catch (error) {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "👋 Je suis là pour vous aider ! Posez-moi vos questions sur nos micro-agents et tarifs.",
        sender: 'bot',
        timestamp: new Date(),
        aiUsed: 'fallback'
      };
      setMessages(prev => [...prev, botMessage]);
    }

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
        text: "👋 Salut ! Moi c'est Marc, consultant chez ZyatrIA.\n\nJe suis propulsé par un système hybride intelligent qui combine Claude 3.5 Sonnet et Mistral pour vous offrir les meilleures réponses !\n\nDis-moi, c'est quoi ton plus gros défi en ce moment ?",
        sender: 'bot',
        timestamp: new Date(),
        aiUsed: 'fallback'
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  const getAIColor = (aiUsed?: string) => {
    switch (aiUsed) {
      case 'claude': return 'border-purple-400 bg-purple-50';
      case 'mistral': return 'border-orange-400 bg-orange-50';
      default: return 'border-gray-300 bg-gray-100';
    }
  };

  const getAIBadge = (aiUsed?: string) => {
    if (!aiUsed) return null;
    const badges = {
      claude: { icon: 'brain', label: 'Claude', color: 'bg-purple-100 text-purple-700' },
      mistral: { icon: 'lightning', label: 'Mistral', color: 'bg-orange-100 text-orange-700' },
      fallback: { icon: 'shield', label: 'Local', color: 'bg-gray-100 text-gray-700' }
    };
    const badge = badges[aiUsed as keyof typeof badges];
    return (
      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-bold ${badge.color} mt-1`}>
        <i className={`ph ph-${badge.icon}`}></i>
        {badge.label}
      </span>
    );
  };

  return (
    <>
      {/* Bouton flottant avec Phosphor Icons */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-[9999] w-16 h-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          style={{
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }}
          aria-label="Ouvrir le chat IA"
          title="Discuter avec notre Agent IA"
        >
          <div className="relative">
            <i className="ph ph-chat-circle text-4xl"></i>
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
              <i className="ph ph-sparkle text-xs text-white"></i>
            </span>
          </div>
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Agent IA ZyatrIA - Propulsé par Claude 3.5 🚀
          </div>
        </button>
      )}

      {/* Fenêtre de chat */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-[9999] w-[500px] h-[750px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden border-2 border-gray-300 dark:border-gray-700 max-w-[calc(100vw-3rem)] max-h-[calc(100vh-6rem)]">
          {/* En-tête */}
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-orange-600 text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <i className="ph ph-robot text-2xl text-purple-600"></i>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h3 className="font-bold text-sm">Agent IA Hybride</h3>
                  <p className="text-xs opacity-90">Claude + Mistral • En ligne</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="h-9 w-9 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white transition-all rounded-lg flex items-center justify-center border-2 border-white hover:scale-110 shadow-lg"
                aria-label="Fermer"
              >
                <i className="ph ph-x text-xl font-bold"></i>
              </button>
            </div>
          </div>

          {/* Status bar */}
          <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-orange-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800 p-2 border-b-2 border-gray-300 dark:border-gray-700">
            <div className="flex gap-2 overflow-x-auto pb-1">
              <div className="flex items-center gap-1.5 bg-white dark:bg-gray-700 px-2 py-1 rounded-full text-xs whitespace-nowrap shadow-sm border border-gray-200 dark:border-gray-600">
                <i className="ph ph-brain text-purple-600"></i>
                <span className="font-bold text-gray-700 dark:text-gray-300">Claude 3.5</span>
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              </div>
              <div className="flex items-center gap-1.5 bg-white dark:bg-gray-700 px-2 py-1 rounded-full text-xs whitespace-nowrap shadow-sm border border-gray-200 dark:border-gray-600">
                <i className="ph ph-lightning text-orange-600"></i>
                <span className="font-bold text-gray-700 dark:text-gray-300">Mistral</span>
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              </div>
              <div className="flex items-center gap-1.5 bg-white dark:bg-gray-700 px-2 py-1 rounded-full text-xs whitespace-nowrap shadow-sm border border-gray-200 dark:border-gray-600">
                <i className="ph ph-target text-blue-600"></i>
                <span className="font-bold text-gray-700 dark:text-gray-300">Routeur IA</span>
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50 dark:bg-gray-800">
            {messages.map((message) => (
              <div key={message.id}>
                <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-xl px-4 py-3 shadow-lg border-2 ${
                    message.sender === 'user'
                      ? 'bg-blue-100 text-gray-900 border-blue-300'
                      : `${getAIColor(message.aiUsed)} text-gray-900`
                  }`}>
                    <p className="text-sm whitespace-pre-wrap leading-relaxed font-medium">{message.text}</p>
                    <div className="flex items-center justify-between mt-1.5">
                      <p className="text-xs font-semibold text-gray-600 flex items-center gap-1">
                        <i className="ph ph-clock"></i>
                        {message.timestamp.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                      </p>
                      {message.sender === 'bot' && getAIBadge(message.aiUsed)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-900 rounded-xl px-4 py-3 shadow-lg border-2 border-gray-300">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                    <span className="text-xs text-gray-600 font-semibold">IA en réflexion...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white dark:bg-gray-900 border-t-2 border-gray-300 dark:border-gray-600">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Posez votre question..."
                disabled={isTyping}
                className="flex-1 px-3 py-2 border-2 border-gray-400 dark:border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white text-sm font-medium disabled:opacity-50"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="bg-gradient-to-r from-purple-600 to-orange-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 shadow-lg border-2 border-purple-700 font-bold text-sm flex items-center gap-1"
                aria-label="Envoyer"
              >
                {isTyping ? (
                  <i className="ph ph-hourglass animate-spin"></i>
                ) : (
                  <i className="ph ph-paper-plane-tilt"></i>
                )}
              </button>
            </div>
            <p className="text-xs text-gray-700 dark:text-gray-300 mt-1.5 text-center font-medium flex items-center justify-center gap-1">
              <i className="ph ph-robot"></i>
              Routage intelligent • Claude 3.5 + Mistral • Réponses optimales
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default SimpleChatbot;
