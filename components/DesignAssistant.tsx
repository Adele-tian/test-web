
import React, { useState, useRef, useEffect } from 'react';
import { generateDesignAdvice, generateHouseImage } from '../services/geminiService';
import { AssistantMessage } from '../types';

const DesignAssistant: React.FC = () => {
  const [messages, setMessages] = useState<AssistantMessage[]>([
    { role: 'assistant', content: 'Welcome to your private design studio. Describe your dream warm home - the materials, the light, the feeling - and I will visualize it for you.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: AssistantMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Placeholder for assistant response
    const assistantPlaceholder: AssistantMessage = { role: 'assistant', content: 'Designing your warm sanctuary...', isGenerating: true };
    setMessages(prev => [...prev, assistantPlaceholder]);

    try {
      const advice = await generateDesignAdvice(input);
      const imageUrl = await generateHouseImage(input);

      setMessages(prev => {
        const newMsgs = [...prev];
        const last = newMsgs[newMsgs.length - 1];
        last.content = advice;
        last.imageUrl = imageUrl || undefined;
        last.isGenerating = false;
        return [...newMsgs];
      });
    } catch (err) {
      setMessages(prev => {
        const newMsgs = [...prev];
        const last = newMsgs[newMsgs.length - 1];
        last.content = "I'm sorry, my creative energy is low. Let's try again in a moment.";
        last.isGenerating = false;
        return [...newMsgs];
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[700px] border border-gray-100">
      <div className="bg-warm-primary p-6 text-white flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <i className="fas fa-magic"></i>
          </div>
          <div>
            <h2 className="text-xl font-bold">AI Design Studio</h2>
            <p className="text-xs text-white/70">Powered by Gemini 3</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-[10px] uppercase font-bold tracking-widest">Live Studio</span>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#fdfbf7]">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] ${msg.role === 'user' ? 'bg-warm-primary text-white rounded-t-2xl rounded-bl-2xl shadow-md' : 'bg-white text-gray-800 rounded-t-2xl rounded-br-2xl border border-gray-100 shadow-sm'} p-4`}>
              {msg.isGenerating && (
                <div className="flex space-x-2 mb-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-.15s]"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                </div>
              )}
              <p className="text-sm italic leading-relaxed">{msg.content}</p>
              {msg.imageUrl && (
                <div className="mt-4 rounded-xl overflow-hidden border border-gray-200 shadow-inner animate-in fade-in zoom-in duration-500">
                  <img src={msg.imageUrl} alt="AI Generated Design" className="w-full h-auto" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-100 flex items-center space-x-3">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="E.g., A mountain cabin with floor-to-ceiling windows and wool blankets..."
          className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-warm-primary focus:bg-white transition-all"
          disabled={isLoading}
        />
        <button 
          type="submit"
          disabled={isLoading || !input.trim()}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${isLoading ? 'bg-gray-200 cursor-not-allowed' : 'bg-warm-primary text-white hover:bg-[#a67245] shadow-lg hover:shadow-xl'}`}
        >
          {isLoading ? <i className="fas fa-spinner fa-spin"></i> : <i className="fas fa-paper-plane"></i>}
        </button>
      </form>
    </div>
  );
};

export default DesignAssistant;
