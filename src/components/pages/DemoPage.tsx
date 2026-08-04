import { useState, useRef, useEffect } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Send, Loader2, MessageCircle, Mail, Phone, Sparkles } from 'lucide-react';
import { baseUrl } from '../../lib/base-url';

type Channel = 'chat' | 'email' | 'call';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  channel: Channel;
  intent?: string;
}

const channelConfig = {
  chat: {
    icon: MessageCircle,
    label: 'Chat en Direct',
    color: 'bg-blue-500',
    placeholder: 'Tapez votre message...',
    description: 'Conversation instantanée avec l\'agent IA',
  },
  email: {
    icon: Mail,
    label: 'Email',
    color: 'bg-primary',
    placeholder: 'Écrivez votre email...',
    description: 'Réponse email professionnelle et structurée',
  },
  call: {
    icon: Phone,
    label: 'Appel Vocal',
    color: 'bg-purple-500',
    placeholder: 'Transcription de votre appel...',
    description: 'Simulation de réponse à un appel client',
  },
};

const exampleMessages: Record<Channel, string[]> = {
  chat: [
    "Bonjour, je veux des informations sur vos agents IA",
    "Quels sont vos tarifs ?",
    "Comment puis-je intégrer vos agents dans mon CRM ?",
  ],
  email: [
    "Je souhaite obtenir un devis pour un agent IA personnalisé",
    "J'ai un problème avec mon service, pouvez-vous m'aider ?",
    "Je veux commander un agent IA pour mon entreprise",
  ],
  call: [
    "Bonjour, c'est urgent, j'ai besoin d'aide immédiatement",
    "Je voudrais parler à quelqu'un au sujet de vos services",
    "Pouvez-vous m'expliquer comment fonctionnent vos micro-agents ?",
  ],
};

export default function DemoPage() {
  const [channel, setChannel] = useState<Channel>('chat');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Bonjour ! 👋 Je suis l\'agent IA de ZyatrIA Global. Sélectionnez un canal et posez-moi une question pour voir comment je réponds !',
      timestamp: new Date(),
      channel: 'chat',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const userId = useRef(`demo_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
      channel,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      let endpoint = '';
      let body: any = {};

      switch (channel) {
        case 'chat':
          endpoint = `${baseUrl}/api/ai/chat`;
          body = {
            user_id: userId.current,
            message: input,
          };
          break;
        case 'email':
          endpoint = `${baseUrl}/api/ai/email`;
          body = {
            sender: 'demo@example.com',
            subject: 'Demande d\'information',
            body: input,
          };
          break;
        case 'call':
          endpoint = `${baseUrl}/api/ai/chat`;
          body = {
            user_id: userId.current,
            message: `[Appel vocal transcrit] ${input}`,
          };
          break;
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: (data as any).content || 'Désolé, une erreur est survenue. Veuillez réessayer ou nous contacter directement.',
        timestamp: new Date((data as any).timestamp),
        channel,
        intent: (data as any).intent,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);

      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Désolé, une erreur est survenue. Veuillez réessayer ou nous contacter directement.',
        timestamp: new Date(),
        channel,
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const useExample = (example: string) => {
    setInput(example);
  };

  const ChannelIcon = channelConfig[channel].icon;

  return (
    <div className="max-w-5xl mx-auto">
      {/* Channel Selector */}
      <Card className="p-6 mb-6 bg-card/50 backdrop-blur">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          Sélectionnez un Canal de Communication
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {(Object.keys(channelConfig) as Channel[]).map((ch) => {
            const config = channelConfig[ch];
            const Icon = config.icon;
            const isActive = channel === ch;

            return (
              <button
                key={ch}
                onClick={() => setChannel(ch)}
                className={`p-4 rounded-lg border-2 transition-all text-left ${
                  isActive
                    ? 'border-primary bg-primary/10 shadow-lg'
                    : 'border-border hover:border-primary/50 hover:bg-muted/50'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-lg ${config.color} text-white`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold">{config.label}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{config.description}</p>
              </button>
            );
          })}
        </div>
      </Card>

      {/* Chat Interface */}
      <Card className="overflow-hidden shadow-xl">
        {/* Header */}
        <div className={`${channelConfig[channel].color} text-white p-4`}>
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
              <ChannelIcon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{channelConfig[channel].label}</h3>
              <p className="text-sm opacity-90">Agent IA • En ligne</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="h-[500px] overflow-y-auto p-6 space-y-4 bg-muted/20">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl p-4 ${
                  message.role === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card border border-border shadow-sm'
                }`}
              >
                {message.intent && (
                  <div className="text-xs opacity-70 mb-2 flex items-center gap-1">
                    <Sparkles className="h-3 w-3" />
                    Intention détectée : <span className="font-semibold">{message.intent}</span>
                  </div>
                )}
                <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                <p className="text-xs opacity-70 mt-2">
                  {message.timestamp.toLocaleTimeString('fr-FR', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-card border border-border rounded-2xl p-4 shadow-sm">
                <div className="flex items-center gap-2">
                  <Loader2 className="h-5 w-5 animate-spin text-primary" />
                  <span className="text-sm text-muted-foreground">L'agent réfléchit...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Examples */}
        <div className="px-6 py-3 bg-muted/30 border-t border-border">
          <p className="text-xs text-muted-foreground mb-2">💡 Exemples de messages :</p>
          <div className="flex flex-wrap gap-2">
            {exampleMessages[channel].map((example, idx) => (
              <button
                key={idx}
                onClick={() => useExample(example)}
                className="text-xs px-3 py-1.5 bg-card border border-border rounded-full hover:bg-primary/10 hover:border-primary transition-all"
                disabled={isLoading}
              >
                {example}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border bg-background">
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={channelConfig[channel].placeholder}
              className="flex-1 px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              disabled={isLoading}
            />
            <Button
              onClick={sendMessage}
              disabled={!input.trim() || isLoading}
              size="lg"
              className="bg-primary hover:bg-primary/90 px-6"
            >
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <>
                  <Send className="h-5 w-5 mr-2" />
                  Envoyer
                </>
              )}
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            🤖 Propulsé par <span className="font-semibold">Mistral AI</span> • Réponses en temps réel
          </p>
        </div>
      </Card>

      {/* Info Box */}
      <Card className="mt-6 p-6 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border-primary/20">
        <div className="flex items-start gap-4">
          <div className="text-3xl">💡</div>
          <div>
            <h3 className="font-semibold mb-2">Comment ça fonctionne ?</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>✅ <strong>Analyse d'intention :</strong> L'agent détecte automatiquement le type de demande</li>
              <li>✅ <strong>Réponse intelligente :</strong> Génération de réponse adaptée au contexte</li>
              <li>✅ <strong>Multi-canal :</strong> Même intelligence sur chat, email et appels</li>
              <li>✅ <strong>Temps réel :</strong> Réponses en moins de 3 secondes</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}

