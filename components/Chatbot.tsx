
import React from 'react';
import { MessageSquare, Send, X, Bot, Loader2 } from 'lucide-react';
import { getChatResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm Yoshua's AI assistant. Ask me anything about his experience, projects, or how to contact him!" }
  ]);
  const [input, setInput] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await getChatResponse(userMsg, messages);
    
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Trigger */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center justify-center w-16 h-16 bg-white text-black rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
        >
          <div className="absolute -top-12 right-0 bg-zinc-900 border border-white/10 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Ask AI Assistant
          </div>
          <MessageSquare fill="currentColor" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[90vw] sm:w-[400px] h-[550px] glass-panel border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 duration-300">
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Bot size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold">Yoshua Assistant</h4>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Online & Ready</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-white text-black font-medium' 
                    : 'bg-white/5 border border-white/5 text-zinc-300'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 px-4 py-3 rounded-2xl text-sm flex items-center space-x-2">
                  <Loader2 className="animate-spin" size={16} />
                  <span className="text-zinc-500">Thinking...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-6 border-t border-white/10 bg-black/40">
            <div className="flex items-center space-x-2 bg-white/5 rounded-2xl border border-white/5 focus-within:border-white/20 transition-all">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about projects..." 
                className="flex-grow bg-transparent px-4 py-3 text-sm focus:outline-none placeholder:text-zinc-600"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="p-2 mr-2 rounded-xl bg-white text-black hover:bg-zinc-200 transition-all disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
