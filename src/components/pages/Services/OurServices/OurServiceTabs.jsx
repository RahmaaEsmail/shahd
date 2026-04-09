"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { cn } from '../../../../lib/utils';

export default function OurServiceTabs({ setActiveTab, tabs, activeTab }) {
  // Animation variants
  const tabVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.02 },
    tap: { scale: 0.98 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="max-w-3xl  md:max-w-7xl mx-auto lg:sticky lg:top-2 flex flex-wrap gap-2 z-40 p-1 px-4 no-scrollbar justify-center items-center scroll-smooth"
    >
      {tabs?.map((item) => {
        return (
          <motion.button
            onClick={() => setActiveTab(item?.id)}
            key={item?.id}
            variants={tabVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            /* RESPONSIVE CHANGES:
               1. Removed fixed 'w-23.5' and used 'min-w-fit px-6' to fit text perfectly.
               2. Added 'whitespace-nowrap' to prevent text from wrapping to a second line.
               3. Added 'cursor-pointer' for desktop.
            */
            className={cn(
              "min-w-fit px-6 h-9.5 rounded-full uppercase flex font-poppins text-sm md:text-base justify-center items-center transition-all duration-150 whitespace-nowrap cursor-pointer",
              activeTab == item?.id
                ? "bg-secondary! text-white font-bold border border-secondary shadow-sm"
                : "border border-secondary font-medium text-secondary bg-white/90 backdrop-blur-sm",
              "hover:bg-secondary hover:text-white"
            )}
          >
            {item?.name}
          </motion.button>
        )
      })}
    </motion.div>
  )
}