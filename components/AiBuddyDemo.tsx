
import React, { useState, useRef, useEffect } from 'react';
import { getFinancialAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const AiBuddyDemo: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Hey! I'm your TrackPay Buddy. Ask me how I can help you save more!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const reply = await getFinancialAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: reply || '' }]);
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-md bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm">
      <div className="bg-slate-800/80 p-4 border-b border-slate-700 flex items-center gap-3">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        <span className="font-semibold text-sm">TrackPay AI Buddy</span>
      </div>
      
      <div 
        ref={scrollRef}
        className="h-64 overflow-y-auto p-4 flex flex-col gap-4 scroll-smooth"
      >
        {messages.map((msg, idx) => (
          <div 
            key={idx} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
              msg.role === 'user' 
                ? 'bg-blue-600 text-white rounded-tr-none' 
                : 'bg-slate-800 text-slate-200 rounded-tl-none'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-slate-800 text-slate-200 px-4 py-2 rounded-2xl rounded-tl-none text-sm italic">
              Thinking...
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-slate-700 bg-slate-900/80">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="How do I track my UPI?"
            className="flex-1 bg-slate-800 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none placeholder-slate-500"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading}
            className="bg-blue-600 hover:bg-blue-500 p-2 rounded-full transition-colors disabled:opacity-50"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiBuddyDemo;
