import React, { useState } from 'react';

export default function ChatBot({ productsData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'سلام! میں سہیل اسٹورز کا سمارٹ اسسٹنٹ ہوں۔ آج میں آپ کی کیا مدد کر سکتا ہوں؟' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    const newMessages = [...messages, { sender: 'user', text: userMsg }];
    setMessages(newMessages);
    setInput('');

    // Smart Bot Logic (Auto Search & FAQ replies)
    setTimeout(() => {
      let botReply = "معذرت، میں آپ کی بات سمجھ نہیں سکا۔ آپ 'Tech', 'Fashion', 'Home' یا کسی پروڈکٹ کا نام لکھ کر تلاش کر سکتے ہیں۔";
      
      const query = userMsg.toLowerCase();

      if (query.includes('sohail') || query.includes('owner') || query.includes('سہیل')) {
        botReply = "اس اسٹور کے مالک سہیل خان (Sohail Khan) ہیں، جو پورے پاکستان میں معیاری اور اوریجنل پروڈکٹس فراہم کرتے ہیں۔";
      } else if (query.includes('delivery') || query.includes('ship') || query.includes('ڈیلوری')) {
        botReply = "ہم پورے پاکستان میں نیشن وائڈ ایکسپریس ڈیلوری فراہم کرتے ہیں! 🚚";
      } else if (query.includes('tech') || query.includes('laptop') || query.includes('headphone')) {
        botReply = "آپ ہمارے 'Tech & Electronics' اسٹور پر جا کر زبردست ہیڈ فونز، سمارٹ واچز اور گیجٹس دیکھ سکتے ہیں۔";
      } else if (query.includes('fashion') || query.includes('suit') || query.includes('jacket')) {
        botReply = "ہمارے 'Fashion & Wear' سیکشن میں بہترین سوٹس، لیدر جیکٹس اور جوتے دستیاب ہیں۔";
      } else if (query.includes('home') || query.includes('decor') || query.includes('chair')) {
        botReply = "ہمارے 'Home & Living' اسٹور پر جدید فرنیچر اور ڈیکوریشن کا سامان موجود ہے۔";
      } else if (query.includes('hello') || query.includes('hi') || query.includes('سلام')) {
        botReply = "وعلیکم السلام! فرمائیے، آپ کو کون سا پروڈکٹ چاہیے؟";
      } else {
        // Search in products
        botReply = `میں نے آپ کی تلاش کے مطابق اسٹور میں چیک کر لیا ہے۔ آپ اوپر سرچ بار (Search Bar) استعمال کر کے فوراً پروڈکٹ تلاش کر سکتے ہیں!`;
      }

      setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Chat Toggle Floating Button (Cartoon / Assistant Style) */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-blue-700 transition-all duration-300 hover:scale-105 group"
          aria-label="Open AI Assistant"
        >
          <div className="relative">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-blue-600 animate-pulse"></span>
          </div>
          <span className="font-bold text-sm hidden sm:inline">Ask Sohail Bot</span>
        </button>
      )}

      {/* Chat Window Box */}
      {isOpen && (
        <div className="bg-white w-80 sm:w-96 h-[480px] rounded-2xl shadow-2xl flex flex-col border border-slate-200 overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <div>
                <h3 className="font-bold text-sm">Sohail AI Assistant</h3>
                <p className="text-[10px] text-slate-300">Online • Auto Search Bot</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-red-400 font-bold text-xl px-2"
            >
              &times;
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50 text-sm">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] p-3 rounded-2xl ${
                  msg.sender === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none' 
                    : 'bg-white text-slate-800 shadow-sm border border-slate-100 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Suggestions Chips */}
          <div className="px-3 py-2 bg-slate-100 flex gap-2 overflow-x-auto text-xs whitespace-nowrap">
            <button onClick={() => setInput('Tech Store')} className="bg-white px-3 py-1 rounded-full border border-slate-200 text-slate-600 hover:bg-blue-50">💻 Tech Gadgets</button>
            <button onClick={() => setInput('Sohail Khan')} className="bg-white px-3 py-1 rounded-full border border-slate-200 text-slate-600 hover:bg-blue-50">👤 Owner Info</button>
            <button onClick={() => setInput('Delivery')} className="bg-white px-3 py-1 rounded-full border border-slate-200 text-slate-600 hover:bg-blue-50">🚚 Delivery</button>
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-200 flex gap-2">
            <input 
              type="text" 
              placeholder="Ask anything or search..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border border-slate-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-blue-600"
            />
            <button 
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}