"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useTranslation } from 'react-i18next';

// Tab animation variants
const tabContainerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const tabVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: {
    scale: 0.95
  }
};

const activeIndicatorVariants = {
  initial: { scale: 0, opacity: 0 },
  active: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};

export default function HorseProductsTabs({ setActiveTab, activeTab, tabs }) {
  const { t } = useTranslation();
  return (
    <motion.div
      variants={tabContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className="max-w-4xl flex gap-2 items-center justify-center mx-auto flex-wrap"
    >
      {tabs?.map(item => (
        <motion.button
          key={item?.id}
          variants={tabVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          whileHover="hover"
          whileTap="tap"
          className={cn(
            'relative px-2 min-w-[94px] h-[34px] rounded-full border border-dark-primary text-base font-poppins uppercase overflow-hidden',
            item?.id === activeTab
              ? "font-bold bg-dark-primary text-white"
              : "font-medium text-dark-primary hover:bg-dark-primary bg-white hover:text-white"
          )}
          onClick={() => setActiveTab(item?.id)}
        >
          <span className="relative z-10">{t(item?.name)}</span>
        </motion.button>
      ))}
    </motion.div>
  )
}