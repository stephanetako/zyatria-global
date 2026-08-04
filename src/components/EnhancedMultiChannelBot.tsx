import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Mail, Phone, Send, X, Minimize2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { baseUrl } from '../lib/base-url';

type Channel = 'chat' | 'email' | 'call';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
  channel: Channel;
}

interface EnhancedMultiChannelBotProps {
  mistralApiKey?: string;
  backendUrl?: string;
}

export default function EnhancedMultiChannelBot({ 
  mistralApiKey,
  backendUrl = baseUrl 
}: EnhancedMultiChannelBotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [currentChannel, setCurrentChannel] = useState<Channel>('chat');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: 'Bonjour ! Je suis votre assistant multicanal intelligent. Comment puis-je vous aider ?',
      timestamp: new Date(),
      channel: 'chat'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll vers le bas
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus sur l'input quand on ouvre le chat
  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  const addMessage = (sender: 'user' | 'bot', text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      sender,
      text,
      timestamp: new Date(),
      channel: currentChannel
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSendMessage = async () => {
    const message = inputValue.trim();
    if (!message || isLoading) return;

    // Ajouter le message utilisateur
    addMessage('user', message);
    setInputValue('');
    setIsLoading(true);

    try {
      let response;

      switch (currentChannel) {
        case 'chat':
          response = await fetch(`${backendUrl}/api/mistral-chat`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
              message,
              conversationHistory: messages
                .filter(m => m.channel === 'chat')
                .slice(-10)
                .map(m => ({
                  role: m.sender === 'user' ? 'user' : 'assistant',
                  content: m.text
                }))
            })
          });
          break;

        case 'email':
          response = await fetch(`${backendUrl}/api/ai/email`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              sender: 'client@example.com',
              subject: 'Demande d\'information',
              body: message
            })
          });
          break;

        case 'call':
          response = await fetch(`${backendUrl}/api/twilio/transcription`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              caller_id: '+1234567890',
              transcript: message
            })
          });
          break;

        default:
          throw new Error('Canal non supporté');
      }

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const data = await response.json();
      const botResponse = (data as any).response || (data as any).message || (data as any).reply || 'Désolé, je n\'ai pas compris.';
      
      addMessage('bot', botResponse);
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      addMessage('bot', '❌ Désolé, une erreur est survenue. Veuillez réessayer dans quelques instants.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleChannelChange = (channel: Channel) => {
    setCurrentChannel(channel);
    const channelNames = {
      chat: 'Chat en direct',
      email: 'Email',
      call: 'Appel vocal'
    };
    addMessage('bot', `✅ Mode ${channelNames[channel]} activé. Posez votre question !`);
  };

  const getChannelIcon = (channel: Channel) => {
    switch (channel) {
      case 'chat': return <MessageCircle className="w-4 h-4" />;
      case 'email': return <Mail className="w-4 h-4" />;
      case 'call': return <Phone className="w-4 h-4" />;
    }
  };

  const getChannelColor = (channel: Channel) => {
    switch (channel) {
      case 'chat': return 'bg-blue-500 hover:bg-blue-600';
      case 'email': return 'bg-green-500 hover:bg-green-600';
      case 'call': return 'bg-purple-500 hover:bg-purple-600';
    }
  };

  return (
    <>
      {/* Bouton flottant (FAB) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className={`fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-50 ${getChannelColor(currentChannel)}`}
          aria-label="Ouvrir le chat"
        >
          {getChannelIcon(currentChannel)}
        </button>
      )}

      {/* Fenêtre de chat */}
      {isOpen && (
        <Card className={`fixed bottom-6 right-6 w-[380px] shadow-2xl z-50 flex flex-col transition-all duration-300 ${
          isMinimized ? 'h-14' : 'h-[600px]'
        }`}>
          {/* En-tête */}
          <div className={`flex items-center justify-between p-4 border-b ${getChannelColor(currentChannel)} text-white rounded-t-lg`}>
            <div className="flex items-center gap-2">
              {getChannelIcon(currentChannel)}
              <h3 className="font-semibold">Assistant ZyatrIA</h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="hover:bg-white/20 p-1 rounded transition-colors"
                aria-label={isMinimized ? "Agrandir" : "Réduire"}
              >
                <Minimize2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 p-1 rounded transition-colors"
                aria-label="Fermer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Onglets de canaux */}
              <Tabs value={currentChannel} onValueChange={(v) => handleChannelChange(v as Channel)} className="flex-none">
                <TabsList className="w-full grid grid-cols-3 rounded-none">
                  <TabsTrigger value="chat" className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    <span className="hidden sm:inline">Chat</span>
                  </TabsTrigger>
                  <TabsTrigger value="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span className="hidden sm:inline">Email</span>
                  </TabsTrigger>
                  <TabsTrigger value="call" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span className="hidden sm:inline">Appel</span>
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              {/* Zone de messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/20">
                {messages
                  .filter(m => m.channel === currentChannel)
                  .map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                          message.sender === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-foreground'
                        }`}
                      >
                        <p className="text-sm whitespace-pre-wrap break-words">{message.text}</p>
                        <span className="text-xs opacity-70 mt-1 block">
                          {message.timestamp.toLocaleTimeString('fr-FR', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </span>
                      </div>
                    </div>
                  ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-muted rounded-2xl px-4 py-2">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Zone de saisie */}
              <div className="p-4 border-t bg-background">
                <div className="flex gap-2">
                  <Input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={`Écrivez votre message...`}
                    disabled={isLoading}
                    className="flex-1"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={isLoading || !inputValue.trim()}
                    size="icon"
                    className={getChannelColor(currentChannel)}
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  Propulsé par ZyatrIA • {currentChannel === 'chat' ? 'Mistral AI' : 'IA Multicanal'}
                </p>
              </div>
            </>
          )}
        </Card>
      )}
    </>
  );
}

