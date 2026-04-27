/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '您好！歡迎光臨爆甜水果行。我是您的鮮果小管家，今天想尋找什麼樣的滋味呢？不論是多汁的芒果還是清甜的葡萄，我都能為您推薦喔！', timestamp: Date.now() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: inputValue, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsThinking(true);

    try {
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      const responseText = await sendMessageToGemini(history, userMsg.text);
      
      const aiMsg: ChatMessage = { role: 'model', text: responseText, timestamp: Date.now() };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
        // Error handled in service
    } finally {
      setIsThinking(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end font-sans">
      {isOpen && (
        <div className="bg-[#FCF9F2] rounded-3xl shadow-2xl w-[90vw] sm:w-[380px] h-[580px] mb-6 flex flex-col overflow-hidden border border-[#D6C7B6] animate-slide-up-fade">
          {/* Header */}
          <div className="bg-[#1A2E1A] p-5 flex justify-between items-center">
            <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#D97706] rounded-full animate-pulse"></div>
                <span className="font-serif font-bold text-white text-lg">鮮果管家</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#FCF9F2]" ref={scrollRef}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-4 text-sm leading-relaxed rounded-2xl ${
                    msg.role === 'user' 
                      ? 'bg-[#1A2E1A] text-white rounded-tr-none shadow-md' 
                      : 'bg-white text-[#3D4A3D] rounded-tl-none shadow-sm border border-[#D6C7B6] font-medium'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isThinking && (
               <div className="flex justify-start">
                 <div className="bg-white border border-[#D6C7B6] p-4 rounded-2xl rounded-tl-none flex gap-1 items-center shadow-sm">
                   <div className="w-1.5 h-1.5 bg-[#D97706] rounded-full animate-bounce"></div>
                   <div className="w-1.5 h-1.5 bg-[#D97706] rounded-full animate-bounce delay-75"></div>
                   <div className="w-1.5 h-1.5 bg-[#D97706] rounded-full animate-bounce delay-150"></div>
                 </div>
               </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-5 bg-white border-t border-[#D6C7B6]">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="詢問任何關於水果的問題..." 
                className="flex-1 bg-[#FCF9F2] border-none rounded-full px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-[#D97706]/20 transition-all placeholder-[#A8A29E] text-[#1A2E1A] font-medium"
              />
              <button 
                onClick={handleSend}
                disabled={!inputValue.trim() || isThinking}
                className="bg-[#D97706] text-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-[#B45309] transition-all shadow-md disabled:opacity-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#D97706] text-white w-16 h-16 flex items-center justify-center rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 z-50 border-4 border-white"
      >
        {isOpen ? (
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
             </svg>
        ) : (
            <div className="flex flex-col items-center leading-none">
              <span className="text-xs font-bold mb-0.5">詢問</span>
              <span className="text-lg font-serif italic font-bold">Ai</span>
            </div>
        )}
      </button>
    </div>
  );
};

export default Assistant;