"use client";
// components/shared/SimpleToast.jsx
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, AlertCircle, Info, AlertTriangle } from 'lucide-react'

const toastConfig = {
  success: {
    icon: Check,
    bgColor: 'bg-green-500',
    textColor: 'text-white'
  },
  error: {
    icon: AlertCircle,
    bgColor: 'bg-red-500',
    textColor: 'text-white'
  },
  warning: {
    icon: AlertTriangle,
    bgColor: 'bg-yellow-500',
    textColor: 'text-white'
  },
  info: {
    icon: Info,
    bgColor: 'bg-blue-500',
    textColor: 'text-white'
  }
};

export default function Toast({ 
  show, 
  message, 
  type = 'success', 
  onClose,
  duration = 3000,
  position = 'bottom'
}) {
  React.useEffect(() => {
    if (show && duration) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  const config = toastConfig[type];
  const Icon = config.icon;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: position === 'top' ? -50 : 50, x: "-50%" }}
          whileInView={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: position === 'top' ? -50 : 50, x: "-50%" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={`fixed ${position === 'top' ? 'top-8' : 'bottom-8'} left-1/2 transform -translate-x-1/2 z-9999999999999`}
        >
          <div className={`${config.bgColor} ${config.textColor} px-6 py-3 rounded-full shadow-lg flex items-center gap-2`}>
            <Icon size={20} />
            <span className="font-poppins">{message}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}