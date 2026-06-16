
"use client";
import React from 'react'
import { motion } from 'framer-motion'
import HorseAboutContent from './HorseAboutContent'
import HorseAboutImage from './HorseAboutImage'

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      when: "beforeChildren",
      staggerChildren: 0.3
    }
  }
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1 }
  }
}

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      staggerChildren: 0.2,
      delayChildren: 0.2
    }
  }
}

export default function HorseAbout() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} 
      variants={sectionVariants}
      className='relative w-full min-h-[80vh] py-6  overflow-hidden'
    >
      {/* Gradient Overlay */}
      <motion.div
        variants={overlayVariants}
        className='absolute inset-0'
        style={{
          background: "linear-gradient(180deg, rgba(255, 255, 255, 0.44) 0%, rgba(221, 178, 181, 0.4004) 49.76%, rgba(255, 255, 255, 0.44) 100%)"
        }}
      />

      {/* Decorative Elements - Hidden or downsized on small screens to prevent overflow */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.2 }}
        className="absolute top-10 -left-10 md:top-20 md:left-20 w-40 h-40 md:w-64 md:h-64 bg-[#DDB2B5] rounded-full blur-2xl md:blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute bottom-10 -right-10 md:bottom-20 md:right-20 w-56 h-56 md:w-80 md:h-80 bg-[#362114] rounded-full blur-2xl md:blur-3xl"
      />

      {/* Content Container */}
      <motion.div
        variants={containerVariants}
        className='relative z-10 px-6 md:ps-10 lg:ps-16 h-full max-w-[1920px] mx-auto'
      >
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch'>
          
          {/* Content - Order 2 on mobile so image can show first if preferred, or Order 1 for standard */}
          <div className='order-2 lg:order-1 lg:col-span-5'>
            <div className='max-w-full lg:max-w-xl mx-auto lg:mx-0 text-center lg:text-left'>
               <HorseAboutContent />
            </div>
          </div>

          {/* Image - Order 1 on mobile to grab attention */}
          <div className='order-1 h-full lg:order-2 lg:col-span-7 w-full'>
            <div className='relative w-full h-full'>
               <HorseAboutImage />
            </div>
          </div>
          
        </div>
      </motion.div>
    </motion.section>
  )
}