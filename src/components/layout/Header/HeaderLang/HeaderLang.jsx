"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';

const languages = [
  { code: 'EN', name: 'English', flag: '🇺🇸' },
  { code: 'AR', name: 'العربية', flag: '🇸🇦' },
];

export default function HeaderLang() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);

  return (
    <motion.div
      className="relative py-3"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex  items-center gap-2 px-6 h-12 rounded-full border border-primary bg-white"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="text-[20px] font-normal text-gray-700">{selectedLang.code}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={16} className="text-gray-400" />
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-40 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50"
          >
            {languages.map((lang, index) => (
              <motion.button
                key={lang.code}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => {
                  setSelectedLang(lang);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${selectedLang.code === lang.code
                    ? 'bg-light-primary text-primary font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                  }`}
                whileHover={{ x: 4 }}
              >
                <span className="text-lg">{lang.flag}</span>
                <span>{lang.name}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}