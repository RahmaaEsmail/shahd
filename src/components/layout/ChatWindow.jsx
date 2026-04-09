"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Smile, Paperclip, MoreHorizontal, User, Bot, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function ChatWindow({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! 👋 How can I help you today?", sender: 'bot', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newUserMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newUserMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "Thanks for your message! Our team will get back to you shortly. In the meantime, feel free to check our services.",
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const quickActions = [
    "Book a Session",
    "View Services",
    "Our Locations",
    "Contact Details"
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 100, x: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 100, x: 50 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed lg:bottom-4 lg:right-26 bottom-25 right-5 z-999999999999988 w-[90%] max-w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-gray-100"
        >
          {/* Header */}
          <div className="bg-primary p-4 flex items-center justify-between text-white shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 p-1">
                <Image 
                  src="/images/7.png" 
                  alt="Logo" 
                  width={32} 
                  height={32} 
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-main text-lg leading-tight tracking-wide">SHAHD AWAD</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-xs opacity-90 font-poppins font-light italic">Online Support</span>
                </div>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-[#fff9f7]/30 hide-scrollbar">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`
                    max-w-[80%] p-3.5 rounded-2xl text-sm font-poppins relative
                    ${msg.sender === 'user' 
                      ? 'bg-primary text-white rounded-tr-none shadow-md' 
                      : 'bg-white text-gray-800 rounded-tl-none shadow-sm border border-gray-100'}
                  `}
                >
                  <p className="leading-relaxed">{msg.text}</p>
                  <span className={`text-[10px] mt-1.5 block opacity-50 text-right`}>
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="px-4 py-2 flex flex-wrap gap-2 bg-[#fff9f7]/30">
            {quickActions.map((action, i) => (
              <button 
                key={i}
                onClick={() => setInputValue(action)}
                className="px-3 py-1.5 bg-white border border-primary/20 rounded-full text-xs font-poppins text-primary hover:bg-primary/10 transition-all flex items-center gap-1"
              >
                {action} <ArrowRight size={10} />
              </button>
            ))}
          </div>

          {/* Input Area */}
          <form 
            onSubmit={handleSend}
            className="p-4 bg-white border-t border-gray-100 flex items-center gap-3"
          >
            <div className="flex-1 relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="w-full pl-4 pr-10 py-3 bg-gray-50 rounded-2xl text-sm font-poppins focus:outline-none focus:ring-1 focus:ring-primary/30 border border-transparent focus:border-primary/20 transition-all"
              />
              <button 
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
              >
                <Smile size={20} />
              </button>
            </div>
            <button 
              type="submit"
              className={`
                w-11 h-11 rounded-2xl flex items-center justify-center transition-all
                ${inputValue.trim() ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-100' : 'bg-gray-100 text-gray-400 scale-95'}
              `}
            >
              <Send size={20} />
            </button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
