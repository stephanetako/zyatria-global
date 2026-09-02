import React, { useState } from 'react';

const IntelligentChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-card border border-border rounded-lg shadow-xl w-80 h-96 mb-4 flex flex-col">
          <div className="bg-primary text-primary-foreground p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Assistant IA</h3>
            <button onClick={() => setIsOpen(false)} className="text-2xl">&times;</button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="bg-muted rounded-lg p-3 mb-3">
              <p className="text-sm">Bonjour ! Comment puis-je vous aider aujourd\'hui ?</p>
            </div>
          </div>
          <div className="p-4 border-t border-border">
            <input
              type="text"
              placeholder="Tapez votre message..."
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary text-primary-foreground w-14 h-14 rounded-full shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center text-2xl"
      >
        💬
      </button>
    </div>
  );
};

export default IntelligentChatBot;
