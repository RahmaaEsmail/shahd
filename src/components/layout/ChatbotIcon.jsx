"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChatWindow from './ChatWindow';
import { X } from 'lucide-react';

export default function ChatbotIcon() {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative z-[9999999]">
        <motion.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsOpen(!isOpen)}
          className={`
            flex items-center justify-center cursor-pointer overflow-hidden
            bg-primary rounded-full shadow-2xl border border-white/20
            transition-all duration-300 ease-in-out
            ${isOpen ? "w-[60px] h-[60px] bg-dark-primary" : (isHovered ? "w-[160px] h-[60px]" : "w-[60px] h-[60px]")}
          `}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity"></div>
          
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                <X className="text-white" size={28} />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="flex items-center gap-3 px-4"
              >
                <img 
                  src={isHovered ? "/images/bi_chat-dots-fill.png" : "/images/Group.svg"} 
                  alt="chatbot" 
                  className="transition-transform duration-300 shrink-0"
                  style={{ width: '30px', height: '30px' }} 
                />
                
                {isHovered && (
                  <span className="text-white text-[20px] font-medium whitespace-nowrap font-main tracking-wider">
                    CHAT
                  </span>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <ChatWindow isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}