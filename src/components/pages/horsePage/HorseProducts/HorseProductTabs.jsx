"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { horse_product_tabs } from '@/data/horseData';

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

export default function HorseProductsTabs({ setActiveTab, activeTab }) {
  return (
    <motion.div
      variants={tabContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className="max-w-4xl flex gap-2 items-center justify-center mx-auto flex-wrap"
    >
      {horse_product_tabs?.map(item => (
        <motion.button
          key={item?.id}
          variants={tabVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          whileHover="hover"
          whileTap="tap"
          className={cn(
            'relative px-4 min-w-[94px] h-[38px] rounded-full border border-dark-primary text-base font-poppins uppercase overflow-hidden',
            item?.id === activeTab
              ? "font-bold bg-dark-primary text-white"
              : "font-medium text-dark-primary hover:bg-dark-primary bg-white hover:text-white"
          )}
          onClick={() => setActiveTab(item?.id)}
        >
          {/* Active background indicator */}
          {/* {item?.id === activeTab && (
            <motion.div
              variants={activeIndicatorVariants}
              initial="initial"
              whileInView="active"
              viewport={{ once: false, amount: 0.3 }}
              className="absolute inset-0 bg-linear-to-r from-[#DDB2B5] to-[#EED2CD] -z-10"
            />
          )} */}

          {/* Hover background effect for non-active tabs */}
          {/* {item?.id !== activeTab && (
            <motion.div
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0 bg-linear-to-r from-[#DDB2B5] to-[#EED2CD] -z-10"
            />
          )} */}

          <span className="relative z-10">{item?.name}</span>
        </motion.button>
      ))}
    </motion.div>
  )
}