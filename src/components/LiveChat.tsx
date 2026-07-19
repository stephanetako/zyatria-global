import { useState, useEffect } from 'react';
import { MessageCircle, X, Send, Minimize2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useLanguage } from '../lib/language-context';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
}

export default function LiveChat() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const content = {
    en: {
      title: 'Live Chat',
      subtitle: 'We typically reply in a few minutes',
      placeholder: 'Type your message...',
      send: 'Send',
      welcome: 'Hello! 👋 How can we help you today?',
      offline: 'We\'re currently offline. Leave us a message!',
      typing: 'Agent is typing...'
    },
    fr: {
      title: 'Chat en Direct',
      subtitle: 'Nous répondons généralement en quelques minutes',
      placeholder: 'Tapez votre message...',
      send: 'Envoyer',
      welcome: 'Bonjour ! 👋 Comment pouvons-nous vous aider aujourd\'hui ?',
      offline: 'Nous sommes actuellement hors ligne. Laissez-nous un message !',
      typing: 'L\'agent écrit...'
    },
    es: {
      title: 'Chat en Vivo',
      subtitle: 'Normalmente respondemos en unos minutos',
      placeholder: 'Escribe tu mensaje...',
      send: 'Enviar',
      welcome: '¡Hola! 👋 ¿Cómo podemos ayudarte hoy?',
      offline: 'Actualmente estamos fuera de línea. ¡Déjanos un mensaje!',
      typing: 'El agente está escribiendo...'
    },
    pt: {
      title: 'Chat ao Vivo',
      subtitle: 'Normalmente respondemos em alguns minutos',
      placeholder: 'Digite sua mensagem...',
      send: 'Enviar',
      welcome: 'Olá! 👋 Como podemos ajudá-lo hoje?',
      offline: 'Estamos offline no momento. Deixe-nos uma mensagem!',
      typing: 'O agente está digitando...'
    }
  };

  const t = content[language];

  // Initialize with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: '1',
        text: t.welcome,
        sender: 'agent',
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length, t.welcome]);

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: message,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    setIsTyping(true);

    // Simulate agent response (replace with real chat API)
    setTimeout(() => {
      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: language === 'en' 
          ? 'Thank you for your message! Our team will get back to you shortly.'
          : language === 'fr'
          ? 'Merci pour votre message ! Notre équipe vous répondra sous peu.'
          : language === 'es'
          ? '¡Gracias por tu mensaje! Nuestro equipo te responderá pronto.'
          : 'Obrigado pela sua mensagem! Nossa equipe responderá em breve.',
        sender: 'agent',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, agentMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground rounded-full p-4 shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-pulse-glow"
        aria-label="Open live chat"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-white dark:border-gray-900"></span>
      </button>
    );
  }

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 bg-card border border-border rounded-2xl shadow-2xl transition-all ${
        isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'
      } max-w-[calc(100vw-3rem)] max-h-[calc(100vh-3rem)]`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-primary text-primary-foreground rounded-t-2xl">
        <div className="flex items-center gap-3">
          <div className="relative">
            <MessageCircle className="w-6 h-6" />
            <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-primary"></span>
          </div>
          <div>
            <h3 className="font-semibold text-sm">{t.title}</h3>
            {!isMinimized && (
              <p className="text-xs opacity-90">{t.subtitle}</p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="hover:bg-primary-foreground/10 p-1.5 rounded-lg transition-colors"
            aria-label={isMinimized ? 'Maximize' : 'Minimize'}
          >
            <Minimize2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:bg-primary-foreground/10 p-1.5 rounded-lg transition-colors"
            aria-label="Close chat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[calc(100%-8rem)]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    msg.sender === 'user'
                      ? 'bg-primary text-primary-foreground rounded-br-sm'
                      : 'bg-muted text-foreground rounded-bl-sm'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {msg.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-muted text-foreground rounded-2xl rounded-bl-sm px-4 py-2">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce delay-100"></span>
                    <span className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce delay-200"></span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={t.placeholder}
                className="flex-1"
              />
              <Button
                onClick={handleSend}
                disabled={!message.trim()}
                size="icon"
                className="flex-shrink-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
