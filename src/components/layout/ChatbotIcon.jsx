"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChatWindow from './ChatWindow';
import { X } from 'lucide-react';

const WHATSAPP_NUMBER = "201000000000"; // replace with real number

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function ChatbotIcon() {
  const [isHovered, setIsHovered] = useState(false);
  const [isWaHovered, setIsWaHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
  };

  return (
    <>
      <div className="flex flex-col items-end gap-3 pointer-events-auto">

        {/* WhatsApp button */}
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15, type: "spring", stiffness: 200 }}
          onMouseEnter={() => setIsWaHovered(true)}
          onMouseLeave={() => setIsWaHovered(false)}
          onClick={handleWhatsApp}
          className={`
            flex items-center justify-center cursor-pointer overflow-hidden
            bg-[#25D366] rounded-full border border-white/20
            transition-all duration-300 ease-in-out
            ${isWaHovered ? "w-[175px] h-[60px]" : "w-[60px] h-[60px]"}
          `}
          whileTap={{ scale: 0.95 }}
        >
          {/* <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity rounded-full" /> */}
          <div className="flex items-center gap-3 px-4">
            <span className="text-white shrink-0">
              <WhatsAppIcon />
            </span>
            <AnimatePresence>
              {isWaHovered && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-white text-[20px] font-medium whitespace-nowrap font-main tracking-wider overflow-hidden"
                >
                  WHATSAPP
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Chatbot button */}
        <div className="relative z-[9999999] cursor-pointer">
          <motion.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsOpen(!isOpen)}
            className={`
              flex items-center justify-center cursor-pointer overflow-hidden
              bg-primary rounded-full border border-white/20
              transition-all duration-300 ease-in-out
              ${isOpen ? "w-[60px] h-[60px] bg-dark-primary" : (isHovered ? "w-[160px] h-[60px]" : "w-[60px] h-[60px]")}
            `}
            whileTap={{ scale: 0.95 }}
          >
            {/* <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity" /> */}

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
                    src={isHovered ? "/SHAHD-IMAGE/bi_chat-dots-fill.webp" : "/SHAHD-IMAGE/Group.webp"}
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

      </div>

      <ChatWindow isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
