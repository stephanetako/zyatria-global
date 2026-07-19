





import { useState, useRef, useEffect } from 'react';
import { baseUrl } from '../lib/base-url';
import { MessageCircle, Mail, Phone, X, Send } from 'lucide-react';

type Channel = 'chat' | 'email' | 'call';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

export default function MultiChannelChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentChannel, setCurrentChannel] = useState<Channel>('chat');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: 'Bienvenue chez ZyatrIA Global ! 👋 Je suis votre assistant IA intelligent. Comment puis-je vous aider aujourd\'hui ?',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const userId = useRef(`user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const switchTab = (channel: Channel) => {
    setCurrentChannel(channel);
    const channelNames = {
      chat: 'Chat',
      email: 'Email',
      call: 'Appel',
    };
    addMessage('bot', `Mode ${channelNames[channel]} activé. Posez votre question !`);
  };

  const resetConversation = () => {
    setMessages([
      {
        id: '1',
        sender: 'bot',
        text: 'Bienvenue chez ZyatrIA Global ! 👋 Je suis votre assistant IA intelligent. Comment puis-je vous aider aujourd\'hui ?',
        timestamp: new Date(),
      },
    ]);
    setInput('');
  };

  const addMessage = (sender: 'user' | 'bot', text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      sender,
      text,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    addMessage('user', input);
    const userMessage = input;
    setInput('');
    setIsLoading(true);

    try {
      let endpoint = '';
      let payload: any = {};

      switch (currentChannel) {
        case 'chat':
          endpoint = `${baseUrl}/api/ai/chat`;
          payload = {
            user_id: userId.current,
            message: userMessage,
          };
          break;
        case 'email':
          endpoint = `${baseUrl}/api/ai/email`;
          payload = {
            sender: 'client@example.com',
            subject: 'Demande client',
            body: userMessage,
          };
          break;
        case 'call':
          endpoint = `${baseUrl}/api/ai/chat`;
          payload = {
            user_id: userId.current,
            message: `[Appel téléphonique] ${userMessage}`,
          };
          break;
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Erreur réseau');
      }

      const data = await response.json();
      addMessage('bot', data.content || data.response || "Désolé, je n'ai pas compris.");
    } catch (error) {
      console.error('Erreur:', error);
      addMessage('bot', 'Désolé, une erreur est survenue. Veuillez réessayer.');
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

  return (
    <>
      {/* Bouton flottant */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="chat-fab"
        aria-label="Ouvrir le chat"
      >
        🤖
      </button>

      {/* Fenêtre de chat */}
      {isOpen && (
        <div className="chat-container" style={{ display: 'flex' }}>
          {/* En-tête avec bouton de fermeture */}
          <div className="chat-header">
            <span>Assistant ZyatrIA</span>
            <button
              onClick={() => setIsOpen(false)}
              className="chat-close-btn"
              aria-label="Fermer le chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Onglets - MAINTENANT APRÈS L'EN-TÊTE */}
          <div className="chat-tabs">
            <div
              className={`chat-tab ${currentChannel === 'chat' ? 'active' : ''}`}
              onClick={() => switchTab('chat')}
            >
              <MessageCircle size={18} className="tab-icon" />
              <span className="tab-text">Chat</span>
            </div>
            <div
              className={`chat-tab ${currentChannel === 'email' ? 'active' : ''}`}
              onClick={() => switchTab('email')}
            >
              <Mail size={18} className="tab-icon" />
              <span className="tab-text">Email</span>
            </div>
            <div
              className={`chat-tab ${currentChannel === 'call' ? 'active' : ''}`}
              onClick={() => switchTab('call')}
            >
              <Phone size={18} className="tab-icon" />
              <span className="tab-text">Appel</span>
            </div>
            <button
              onClick={resetConversation}
              className="chat-reset-btn"
              aria-label="Terminer la conversation"
              title="Terminer la conversation"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="chat-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
              >
                {message.text}
              </div>
            ))}
            {isLoading && (
              <div className="message bot-message">
                <em>En train d'écrire...</em>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="chat-input-container">
            <input
              type="text"
              className="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Écrivez ici..."
              disabled={isLoading}
            />
            <button
              className="chat-send"
              onClick={sendMessage}
              disabled={!input.trim() || isLoading}
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      <style>{`
        /* Bouton flottant pour ouvrir le chat */
        .chat-fab {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
          color: white;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(76, 175, 80, 0.4);
          z-index: 1000;
          font-size: 28px;
          border: none;
          transition: all 0.3s ease;
        }

        .chat-fab:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(76, 175, 80, 0.6);
        }

        /* Fenêtre de chat */
        .chat-container {
          position: fixed;
          bottom: 90px;
          right: 20px;
          width: 380px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.15);
          flex-direction: column;
          z-index: 1000;
          max-height: 550px;
          overflow: hidden;
          border: 1px solid rgba(0,0,0,0.08);
        }

        .chat-header {
          background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
          color: white;
          padding: 16px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 700;
          font-size: 16px;
          border-top-left-radius: 16px;
          border-top-right-radius: 16px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .chat-close-btn {
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          cursor: pointer;
          padding: 6px;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          transition: all 0.2s;
        }

        .chat-close-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.05);
        }

        .chat-messages {
          flex: 1;
          padding: 16px;
          overflow-y: auto;
          background: #f8f9fa;
          min-height: 300px;
          max-height: 350px;
        }

        .message {
          margin: 8px 0;
          padding: 12px 16px;
          border-radius: 16px;
          max-width: 80%;
          word-wrap: break-word;
          display: block;
          font-size: 14px;
          line-height: 1.5;
          box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        }

        .user-message {
          background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
          color: white;
          margin-left: auto;
          text-align: right;
          font-weight: 500;
        }

        .bot-message {
          background: white;
          margin-right: auto;
          color: #1a1a1a;
          border: 1px solid #e0e0e0;
        }

        .chat-input-container {
          display: flex;
          padding: 16px;
          border-top: 1px solid #e0e0e0;
          background: white;
          border-bottom-left-radius: 16px;
          border-bottom-right-radius: 16px;
          gap: 8px;
        }

        .chat-input {
          flex: 1;
          padding: 12px 16px;
          border: 2px solid #e0e0e0;
          border-radius: 12px;
          font-family: inherit;
          font-size: 14px;
          transition: all 0.2s;
        }

        .chat-input:focus {
          outline: none;
          border-color: #4CAF50;
          box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.1);
        }

        .chat-send {
          padding: 12px 16px;
          background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
          color: white;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 48px;
        }

        .chat-send:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
        }

        .chat-send:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* Onglets pour changer de canal - FORCER LA VISIBILITÉ */
        .chat-tabs {
          display: flex !important;
          visibility: visible !important;
          opacity: 1 !important;
          background: #ffffff;
          padding: 12px 12px 0 12px;
          border-bottom: 2px solid #e0e0e0;
          gap: 6px;
          min-height: 90px;
          position: relative;
          z-index: 10;
        }

        .chat-tab {
          flex: 1;
          text-align: center;
          padding: 16px 12px;
          cursor: pointer;
          border-radius: 12px 12px 0 0;
          transition: all 0.3s ease;
          color: #1a1a1a;
          font-weight: 700;
          font-size: 15px;
          background: #f5f5f5;
          border: 2px solid #e0e0e0;
          border-bottom: none;
          display: flex !important;
          visibility: visible !important;
          opacity: 1 !important;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          position: relative;
          min-height: 70px;
          justify-content: center;
        }

        .chat-tab:hover {
          background: #e8f5e9;
          border-color: #4CAF50;
          transform: translateY(-2px);
        }

        .chat-tab.active {
          background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
          border-color: #4CAF50;
          color: white;
          box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
        }

        .tab-icon {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
          margin: 0 auto 4px auto;
          width: 22px;
          height: 22px;
          color: inherit;
        }

        .tab-text {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
          font-size: 16px !important;
          font-weight: 900 !important;
          letter-spacing: 0.8px;
          color: #000000 !important;
          text-shadow: none !important;
          text-transform: uppercase;
        }

        .chat-tab:hover .tab-text {
          color: #1b5e20 !important;
        }

        .chat-tab.active .tab-text {
          color: white !important;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3) !important;
          font-size: 17px !important;
        }

        .chat-tab.active .tab-icon {
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
          color: white;
        }

        .chat-tab.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background: white;
        }

        .chat-reset-btn {
          background: #ff1744 !important;
          border: 3px solid #d50000 !important;
          color: white !important;
          cursor: pointer;
          padding: 14px;
          display: flex !important;
          visibility: visible !important;
          opacity: 1 !important;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          border-radius: 12px 12px 0 0;
          min-width: 60px;
          font-weight: bold;
          box-shadow: 0 4px 12px rgba(213, 0, 0, 0.4);
        }

        .chat-reset-btn:hover {
          background: #ff5252 !important;
          transform: scale(1.05);
          box-shadow: 0 6px 16px rgba(213, 0, 0, 0.6);
        }

        /* Responsive */
        @media (max-width: 480px) {
          .chat-container {
            width: calc(100vw - 40px);
            right: 20px;
            left: 20px;
          }

          .chat-tab {
            padding: 14px 8px;
            font-size: 14px;
            min-height: 66px;
          }

          .tab-text {
            font-size: 15px !important;
          }

          .chat-tab.active .tab-text {
            font-size: 16px !important;
          }

          .tab-icon {
            width: 20px;
            height: 20px;
          }
        }
      `}</style>
    </>
  );
}




















