import { useState } from 'react';
import { MessageCircle, X, Send, Minimize2 } from 'lucide-react';

const translations = {
  en: {
    title: "Chat with us",
    subtitle: "We typically reply in minutes",
    placeholder: "Type your message...",
    send: "Send",
    online: "Online",
    typing: "Agent is typing...",
    welcome: "Hi! 👋 How can we help you today?",
    quickReplies: {
      demo: "Request a demo",
      pricing: "Questions about pricing",
      technical: "Technical question",
      other: "Something else"
    }
  },
  fr: {
    title: "Discutez avec nous",
    subtitle: "Nous répondons généralement en quelques minutes",
    placeholder: "Tapez votre message...",
    send: "Envoyer",
    online: "En ligne",
    typing: "Un agent écrit...",
    welcome: "Bonjour ! 👋 Comment pouvons-nous vous aider aujourd'hui ?",
    quickReplies: {
      demo: "Demander une démo",
      pricing: "Questions sur les tarifs",
      technical: "Question technique",
      other: "Autre chose"
    }
  },
  es: {
    title: "Chatea con nosotros",
    subtitle: "Normalmente respondemos en minutos",
    placeholder: "Escribe tu mensaje...",
    send: "Enviar",
    online: "En línea",
    typing: "El agente está escribiendo...",
    welcome: "¡Hola! 👋 ¿Cómo podemos ayudarte hoy?",
    quickReplies: {
      demo: "Solicitar una demostración",
      pricing: "Preguntas sobre precios",
      technical: "Pregunta técnica",
      other: "Otra cosa"
    }
  },
  pt: {
    title: "Converse conosco",
    subtitle: "Normalmente respondemos em minutos",
    placeholder: "Digite sua mensagem...",
    send: "Enviar",
    online: "Online",
    typing: "Agente está digitando...",
    welcome: "Olá! 👋 Como podemos ajudá-lo hoje?",
    quickReplies: {
      demo: "Solicitar uma demonstração",
      pricing: "Perguntas sobre preços",
      technical: "Pergunta técnica",
      other: "Outra coisa"
    }
  }
};

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{ text: string; sender: 'user' | 'agent'; time: string }>>([]);
  const [lang] = useState<'en' | 'fr' | 'es' | 'pt'>('en');
  
  const t = translations[lang];

  const handleSend = () => {
    if (!message.trim()) return;
    
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages([...messages, { text: message, sender: 'user', time: now }]);
    setMessage('');

    // Simulate agent response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "Thanks for reaching out! A member of our team will be with you shortly. In the meantime, you can also schedule a demo at /demo",
        sender: 'agent',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }, 2000);
  };

  const handleQuickReply = (reply: string) => {
    setMessage(reply);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group animate-float"
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-foreground text-background text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          💬 Need help? Chat with us!
          <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-foreground"></div>
        </div>
      </button>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 bg-card border border-border rounded-2xl shadow-2xl transition-all duration-300 ${
      isMinimized ? 'w-80 h-14' : 'w-96 h-[600px]'
    }`}>
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-4 rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div>
            <div className="font-semibold">{t.title}</div>
            <div className="text-xs opacity-90 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              {t.online}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="hover:bg-primary-foreground/10 p-2 rounded-lg transition-colors"
            aria-label="Minimize chat"
          >
            <Minimize2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:bg-primary-foreground/10 p-2 rounded-lg transition-colors"
            aria-label="Close chat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages Area */}
          <div className="h-[400px] overflow-y-auto p-4 space-y-4 bg-muted/30">
            {/* Welcome message */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm flex-shrink-0">
                AI
              </div>
              <div className="flex-1">
                <div className="bg-background border border-border rounded-2xl rounded-tl-none p-3 shadow-sm">
                  <p className="text-sm">{t.welcome}</p>
                </div>
                <div className="text-xs text-muted-foreground mt-1">Just now</div>
              </div>
            </div>

            {/* Quick replies */}
            {messages.length === 0 && (
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground px-2">Quick replies:</p>
                {Object.entries(t.quickReplies).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => handleQuickReply(value)}
                    className="w-full text-left px-4 py-2 bg-background border border-border rounded-lg text-sm hover:bg-muted transition-colors"
                  >
                    {value}
                  </button>
                ))}
              </div>
            )}

            {/* User messages */}
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 ${
                  msg.sender === 'user' ? 'flex-row-reverse' : ''
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 ${
                  msg.sender === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground'
                }`}>
                  {msg.sender === 'user' ? 'You' : 'AI'}
                </div>
                <div className="flex-1">
                  <div className={`rounded-2xl p-3 shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-primary text-primary-foreground rounded-tr-none'
                      : 'bg-background border border-border rounded-tl-none'
                  }`}>
                    <p className="text-sm">{msg.text}</p>
                  </div>
                  <div className={`text-xs text-muted-foreground mt-1 ${
                    msg.sender === 'user' ? 'text-right' : ''
                  }`}>
                    {msg.time}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-border bg-background rounded-b-2xl">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t.placeholder}
                className="flex-1 px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
              <button
                onClick={handleSend}
                disabled={!message.trim()}
                className="bg-primary text-primary-foreground p-2 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label={t.send}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              {t.subtitle}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
