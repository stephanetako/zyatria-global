import { useState, useRef, useEffect } from 'react';
import { baseUrl } from '../lib/base-url';

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
      text: 'Bonjour ! Je suis votre assistant multifonction. Comment puis-je vous aider ?',
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
        text: 'Bonjour ! Je suis votre assistant multifonction. Comment puis-je vous aider ?',
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
              ✕
            </button>
          </div>

          {/* Onglets - MAINTENANT APRÈS L'EN-TÊTE */}
          <div className="chat-tabs">
            <div
              className={`chat-tab ${currentChannel === 'chat' ? 'active' : ''}`}
              onClick={() => switchTab('chat')}
            >
              Chat
            </div>
            <div
              className={`chat-tab ${currentChannel === 'email' ? 'active' : ''}`}
              onClick={() => switchTab('email')}
            >
              Email
            </div>
            <div
              className={`chat-tab ${currentChannel === 'call' ? 'active' : ''}`}
              onClick={() => switchTab('call')}
            >
              Appel
            </div>
            <button
              onClick={resetConversation}
              className="chat-reset-btn"
              aria-label="Terminer la conversation"
              title="Terminer la conversation"
            >
              ✕
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
              Envoyer
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
          background: #4CAF50;
          color: white;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          box-shadow: 0 2px 10px rgba(0,0,0,0.2);
          z-index: 1000;
          font-size: 24px;
          border: none;
          transition: transform 0.2s;
        }

        .chat-fab:hover {
          transform: scale(1.1);
        }

        /* Fenêtre de chat */
        .chat-container {
          position: fixed;
          bottom: 90px;
          right: 20px;
          width: 350px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 2px 20px rgba(0,0,0,0.2);
          flex-direction: column;
          z-index: 1000;
          max-height: 500px;
          overflow: hidden;
        }

        .chat-header {
          background: #4CAF50;
          color: white;
          padding: 10px 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: bold;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }

        .chat-close-btn {
          background: transparent;
          border: none;
          color: white;
          font-size: 24px;
          cursor: pointer;
          padding: 0;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: background 0.2s;
        }

        .chat-close-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .chat-messages {
          flex: 1;
          padding: 10px;
          overflow-y: auto;
          background: #f9f9f9;
          min-height: 300px;
          max-height: 350px;
        }

        .message {
          margin: 5px;
          padding: 8px 12px;
          border-radius: 18px;
          max-width: 80%;
          word-wrap: break-word;
          display: block;
        }

        .user-message {
          background: #e3f2fd;
          margin-left: auto;
          text-align: right;
        }

        .bot-message {
          background: #f1f1f1;
          margin-right: auto;
        }

        .chat-input-container {
          display: flex;
          padding: 10px;
          border-top: 1px solid #ddd;
          background: white;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
        }

        .chat-input {
          flex: 1;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 5px;
          font-family: inherit;
        }

        .chat-send {
          margin-left: 5px;
          padding: 8px 12px;
          background: #4CAF50;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-family: inherit;
          transition: background 0.2s;
        }

        .chat-send:hover:not(:disabled) {
          background: #45a049;
        }

        .chat-send:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* Onglets pour changer de canal */
        .chat-tabs {
          display: flex;
          background: #f1f1f1;
          padding: 5px;
          border-bottom: 1px solid #ddd;
        }

        .chat-tab {
          flex: 1;
          text-align: center;
          padding: 10px 8px;
          cursor: pointer;
          border-radius: 0 0 5px 5px;
          transition: all 0.2s;
          color: #1a1a1a;
          font-weight: 600;
          font-size: 14px;
        }

        .chat-tab:hover {
          background: #e0e0e0;
          color: #000;
        }

        .chat-tab.active {
          background: white;
          font-weight: bold;
          color: #4CAF50;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .chat-reset-btn {
          background: transparent;
          border: none;
          color: #d32f2f;
          font-size: 24px;
          cursor: pointer;
          padding: 0 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          border-radius: 0 0 5px 5px;
          font-weight: bold;
        }

        .chat-reset-btn:hover {
          background: #ffebee;
          color: #b71c1c;
          transform: scale(1.1);
        }

        /* Responsive */
        @media (max-width: 480px) {
          .chat-container {
            width: calc(100vw - 40px);
            right: 20px;
            left: 20px;
          }
        }
      `}</style>
    </>
  );
}








