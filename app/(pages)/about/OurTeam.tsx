"use client";

import { useState } from 'react';
import { Star, Twitter, Send, X, Paperclip, Smile } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const team = [
  { name: 'Max Mitchell',   role: 'Founder',                   img: '/image/puple/Max.png' },
  { name: 'Sarah Johnson',  role: 'Chief Real Estate Officer',   img: '/image/puple/Sarah.png' },
  { name: 'David Brown',    role: 'Head of Property Management', img: '/image/puple/David.png' },
  { name: 'Michael Turner', role: 'Legal Counsel',               img: '/image/puple/Michael.png' },
];

export default function OurTeam() {
  const [activeChat, setActiveChat] = useState<typeof team[0] | null>(null);
  
  // Логика сообщений
  const [messages, setMessages] = useState<{text: string, isUser: boolean}[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Добавляем сообщение пользователя
    const newMessages = [...messages, { text: inputValue, isUser: true }];
    setMessages(newMessages);
    setInputValue("");

    // Имитация ответа через 1 секунду
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: `Thanks for reaching out! I'll get back to you as soon as possible.`, 
        isUser: false 
      }]);
    }, 1000);
  };

  return (
    <section className="bg-[#141414] text-white py-20 px-6 md:px-16 border-t border-[#262626] relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <div className="flex items-end gap-1">
            <Star className="w-3 h-3 text-gray-500 fill-gray-500" />
            <Star className="w-5 h-5 text-gray-400 fill-gray-400" />
            <Star className="w-3 h-3 text-gray-500 fill-gray-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold">Meet the Estatein Team</h2>
          <p className="text-gray-400 leading-relaxed max-w-2xl">
            At Estatein, our success is driven by the dedication and expertise of our team.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#1A1A1A] border border-[#262626] rounded-2xl p-6 flex flex-col items-center gap-4"
            >
              <div className="relative w-full">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                  <Image src={member.img} alt={member.name} fill className="object-cover" />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#703BF7] flex items-center justify-center border-2 border-[#1A1A1A]">
                  <Twitter className="w-4 h-4 text-white" />
                </div>
              </div>

              <div className="pt-5 text-center space-y-1">
                <p className="text-white font-semibold text-base">{member.name}</p>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>

              <button 
                onClick={() => {
                  setActiveChat(member);
                  setMessages([]); // Очищаем чат при открытии нового
                }}
                className="w-full flex items-center justify-between bg-[#141414] border border-[#262626] rounded-xl px-4 py-3 hover:bg-[#262626] transition-colors mt-auto"
              >
                <span className="text-white text-sm font-medium">Say Hello 👋</span>
                <div className="w-7 h-7 rounded-full bg-[#703BF7] flex items-center justify-center">
                  <Send className="w-3.5 h-3.5 text-white" />
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CHAT INTERFACE */}
      <AnimatePresence>
        {activeChat && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-[100] w-full max-w-[400px] shadow-2xl"
          >
            <div className="bg-[#1A1A1A] border border-[#262626] rounded-2xl overflow-hidden flex flex-col h-[500px]">
              
              {/* Header */}
              <div className="bg-[#262626] p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#703BF7]">
                    <Image src={activeChat.img} alt={activeChat.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{activeChat.name}</p>
                    <p className="text-[10px] text-green-500 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> Online
                    </p>
                  </div>
                </div>
                <button onClick={() => setActiveChat(null)} className="p-1 hover:bg-[#333333] rounded-lg transition-colors">
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              {/* Messages Area */}
              <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-[#141414] flex flex-col">
                <div className="bg-[#262626] rounded-2xl rounded-tl-none p-3 max-w-[80%] text-xs text-gray-300 self-start">
                  Hello! I&apos;m {activeChat.name.split(' ')[0]}. How can I help you?
                </div>

                {messages.map((msg, idx) => (
                  <div 
                    key={idx} 
                    className={`p-3 max-w-[80%] text-xs rounded-2xl ${
                      msg.isUser 
                        ? "bg-[#703BF7] text-white self-end rounded-tr-none" 
                        : "bg-[#262626] text-gray-300 self-start rounded-tl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="p-4 bg-[#1A1A1A] border-t border-[#262626]">
                <div className="relative flex items-center gap-2 bg-[#141414] border border-[#262626] rounded-xl p-2 px-3">
                  <button className="text-gray-500 hover:text-white"><Paperclip className="w-4 h-4" /></button>
                  <input 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Type a message..."
                    className="bg-transparent border-none focus:ring-0 text-xs w-full py-1 outline-none text-white"
                  />
                  <div className="flex items-center gap-2">
                    <button className="text-gray-500 hover:text-white"><Smile className="w-4 h-4" /></button>
                    <button 
                      onClick={handleSendMessage}
                      className="bg-[#703BF7] p-2 rounded-lg hover:bg-[#5b2fd1] transition-all"
                    >
                      <Send className="w-3 h-3 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}