import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, User, Loader2, AlertCircle, CheckCircle2, Minimize2, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Alert, AlertDescription } from './ui/alert';
import { baseUrl } from '../lib/base-url';
import { useLanguage } from '../lib/language-context';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface DebugLog {
  timestamp: string;
  action: string;
  data?: any;
}

const translations = {
  fr: {
    title: 'Assistant IA ZyatrIA',
    subtitle: 'Posez vos questions',
    placeholder: 'Posez votre question...',
    startConversation: 'Commencez une conversation...',
    ready: 'Prêt',
    sending: 'Envoi en cours...',
    error: 'Erreur',
    errorMessage: 'Désolé, une erreur s\'est produite',
    tryAgain: 'Veuillez réessayer',
  },
  en: {
    title: 'ZyatrIA AI Assistant',
    subtitle: 'Ask your questions',
    placeholder: 'Ask your question...',
    startConversation: 'Start a conversation...',
    ready: 'Ready',
    sending: 'Sending...',
    error: 'Error',
    errorMessage: 'Sorry, an error occurred',
    tryAgain: 'Please try again',
  },
  es: {
    title: 'Asistente IA ZyatrIA',
    subtitle: 'Haz tus preguntas',
    placeholder: 'Haz tu pregunta...',
    startConversation: 'Comienza una conversación...',
    ready: 'Listo',
    sending: 'Enviando...',
    error: 'Error',
    errorMessage: 'Lo siento, ocurrió un error',
    tryAgain: 'Por favor, inténtalo de nuevo',
  },
  pt: {
    title: 'Assistente IA ZyatrIA',
    subtitle: 'Faça suas perguntas',
    placeholder: 'Faça sua pergunta...',
    startConversation: 'Comece uma conversa...',
    ready: 'Pronto',
    sending: 'Enviando...',
    error: 'Erro',
    errorMessage: 'Desculpe, ocorreu um erro',
    tryAgain: 'Por favor, tente novamente',
  },
};

export default function MistralChatBot() {
  const { language } = useLanguage();
  const t = translations[language] || translations.fr;
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<'ready' | 'sending' | 'error'>('ready');
  const [debugLogs, setDebugLogs] = useState<DebugLog[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Debug: Vérifier que le composant est monté
  useEffect(() => {
    console.log('✅ MistralChatBot monté et prêt !');
    console.log('📍 Position: fixed bottom-6 right-6');
    console.log('🎨 Couleur: bg-primary (devrait être visible)');
    return () => {
      console.log('❌ MistralChatBot démonté');
    };
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addDebugLog = (action: string, data?: any) => {
    const timestamp = new Date().toLocaleTimeString();
    const log = { timestamp, action, data };
    console.log(`[${timestamp}] ${action}`, data || '');
    setDebugLogs(prev => [...prev, log]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim() || isLoading) {
      addDebugLog('❌ Input vide ou déjà en cours');
      return;
    }

    const userMessage = input.trim();
    addDebugLog('📤 Envoi du message utilisateur', { userMessage });
    
    const newUserMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: userMessage,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setInput('');
    setIsLoading(true);
    setStatus('sending');
    setError(null);

    try {
      const apiUrl = `${baseUrl}/api/mistral-chat`;
      addDebugLog('🌐 URL de l\'API', { apiUrl });

      const requestBody = {
        messages: [...messages, newUserMessage].map(m => ({
          role: m.role,
          content: m.content
        }))
      };
      addDebugLog('📦 Corps de la requête', requestBody);

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });

      addDebugLog('📡 Réponse reçue', { 
        status: response.status, 
        statusText: response.statusText,
        ok: response.ok 
      });

      if (!response.ok) {
        const errorText = await response.text();
        addDebugLog('❌ Erreur de réponse', { errorText });
        throw new Error(`Erreur ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      addDebugLog('✅ Données reçues', data);

      if (!data || typeof data !== 'object' || !('response' in data)) {
        addDebugLog('❌ Pas de réponse dans les données', data);
        throw new Error('Réponse invalide du serveur');
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: (data as { response: string }).response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      setStatus('ready');
      addDebugLog('✅ Message ajouté avec succès');

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
      addDebugLog('❌ Erreur capturée', { error: errorMessage });
      setError(errorMessage);
      setStatus('error');
      
      const errorMsg: Message = {
        id: (Date.now() + 2).toString(),
        role: 'assistant',
        content: `${t.errorMessage}: ${errorMessage}. ${t.tryAgain}.`,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
      addDebugLog('🏁 Requête terminée');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log('🖱️ CLIC DÉTECTÉ !');
          console.log('📂 État actuel isOpen:', isOpen);
          setIsOpen(true);
          console.log('✅ setIsOpen(true) appelé - le chat devrait s\'ouvrir');
        }}
        className="fixed bottom-6 right-6 z-[9999] bg-primary text-primary-foreground rounded-full p-4 shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-pulse-glow"
        aria-label="Open AI Chat"
        style={{ 
          cursor: 'pointer',
          pointerEvents: 'auto',
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 9999
        }}
      >
        <Sparkles className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-muted rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></span>
      </button>
    );
  }

  return (
    <div 
      className={`fixed bottom-6 right-6 z-[9999] bg-card border border-border rounded-2xl shadow-2xl transition-all flex flex-col ${
        isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'
      } max-w-[calc(100vw-3rem)] max-h-[calc(100vh-3rem)]`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-primary text-primary-foreground rounded-t-2xl flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Sparkles className="w-6 h-6" />
            <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-muted rounded-full border-2 border-primary"></span>
          </div>
          <div>
            <h3 className="font-semibold text-sm">{t.title}</h3>
            {!isMinimized && (
              <p className="text-xs opacity-90">{t.subtitle}</p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMinimized(!isMinimized)}
            className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
          >
            <Minimize2 className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
                {t.startConversation}
              </div>
            )}
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    msg.role === 'user'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-foreground'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                  <span className="text-xs opacity-70 mt-1 block">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                {msg.role === 'user' && (
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl px-4 py-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Status Indicator */}
          <div className="px-4 py-2 border-t border-border bg-muted/50 flex-shrink-0">
            <div className="flex items-center gap-2 text-xs">
              {status === 'ready' && (
                <>
                  <CheckCircle2 className="w-3 h-3 text-foreground" />
                  <span className="text-muted-foreground">{t.ready}</span>
                </>
              )}
              {status === 'sending' && (
                <>
                  <Loader2 className="w-3 h-3 animate-spin text-primary" />
                  <span className="text-muted-foreground">{t.sending}</span>
                </>
              )}
              {status === 'error' && (
                <>
                  <AlertCircle className="w-3 h-3 text-destructive" />
                  <span className="text-destructive">{t.error}</span>
                </>
              )}
            </div>
          </div>

          {/* Error Alert */}
          {error && (
            <div className="px-4 pb-2 flex-shrink-0">
              <Alert variant="destructive" className="py-2">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription className="text-xs">{error}</AlertDescription>
              </Alert>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-border bg-background flex-shrink-0">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t.placeholder}
                disabled={isLoading}
                className="flex-1"
                onKeyDown={handleKeyPress}
              />
              <Button 
                type="submit" 
                size="icon"
                disabled={!input.trim() || isLoading}
                className="flex-shrink-0"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </Button>
            </form>
          </div>
        </>
      )}

      {/* Debug Panel - Development Only */}
      {import.meta.env.DEV && debugLogs.length > 0 && (
        <details className="absolute bottom-full right-0 mb-2 w-96 max-w-[calc(100vw-3rem)] bg-card border border-border rounded-lg shadow-lg p-4 text-xs">
          <summary className="cursor-pointer font-semibold mb-2">🐛 Debug Logs ({debugLogs.length})</summary>
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {debugLogs.map((log, i) => (
              <div key={i} className="border-b border-border pb-2">
                <div className="font-mono text-muted-foreground">{log.timestamp}</div>
                <div className="font-semibold">{log.action}</div>
                {log.data && (
                  <pre className="mt-1 p-2 bg-muted rounded text-[10px] overflow-x-auto">
                    {JSON.stringify(log.data, null, 2)}
                  </pre>
                )}
              </div>
            ))}
          </div>
        </details>
      )}
    </div>
  );
}









