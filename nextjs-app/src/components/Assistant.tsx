'use client';

import React, { useState } from 'react';

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: 'user', text: input }]);
    setInput('');
    // Demo response
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: '感謝您的詢問！這是展示網站，AI 助手功能即將上線。如有任何問題，歡迎聯繫我們的客服。' }]);
    }, 500);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#2D5A27] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-[#1A2E1A] transition-colors group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.028 8.182-8.182 10.574-1.19.634-2.618.634-3.808 0C5.028 20.182 1 16.556 1 12V7.5a3 3 0 013-3h14.25a3 3 0 013 3V12z" />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 h-96 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-[#D6C7B6]">
          <div className="bg-[#2D5A27] text-white p-4 flex justify-between items-center">
            <span className="font-bold">爆甜小助手</span>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-70">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.length === 0 ? (
              <p className="text-center text-[#A8A29E] text-sm py-8">您好！有什麼可以幫您的嗎？</p>
            ) : (
              messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-lg text-sm ${msg.role === 'user' ? 'bg-[#2D5A27] text-white' : 'bg-[#EBE7DE] text-[#1A2E1A]'}`}>
                    {msg.text}
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="p-4 border-t border-[#D6C7B6] flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="輸入訊息..."
              className="flex-1 p-2 border border-[#D6C7B6] rounded-lg text-sm"
            />
            <button onClick={sendMessage} className="px-4 py-2 bg-[#2D5A27] text-white rounded-lg text-sm font-bold">送出</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Assistant;