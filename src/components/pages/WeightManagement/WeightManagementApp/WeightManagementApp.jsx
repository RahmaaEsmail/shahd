"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function WeightManagementApp() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Fixed Background with Gradient Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image 
          src="/images/Weight-management/Frame 1000005887.png" 
          alt="app image" 
          fill 
          className='object-cover'
          priority
        />
      </div>
      
      {/* Animated Top Gradient Bar */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #1A2919 100%)"
        }}
        className='absolute w-full h-[30px] z-10 left-0 right-0 top-0'
      />
      
      {/* Animated Bottom Gradient Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #1A2919 100%)"
        }}
        className='absolute w-full h-[30px] z-10 left-0 right-0 -bottom-2 rotate-180'
      />
      
      {/* Content Container with Scroll Animation */}
      <div className="relative z-20 flex flex-col justify-center items-center min-h-screen px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1] 
          }}
          className="flex flex-col justify-center items-center max-w-4xl text-center"
        >
          {/* Animated Heading with Split Text Effect */}
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1] 
            }}
            className='text-white text-center text-4xl md:text-6xl lg:text-[80px] font-poppins font-bold leading-tight'
          >
            Fresh & Delicious Meals Delivered to You
          </motion.h2>
          
          {/* Animated Button with Hover Effects */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.8,
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0px 8px 150px 0px #95BCAA',
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              boxShadow: '0px 4px 100px 0px #95BCAA'
            }}
            className='bg-[#95BCAA] text-white mt-10 md:mt-20 lg:mt-40 px-8 md:px-10 py-2 md:py-3 rounded-full text-center text-2xl md:text-4xl lg:text-[48px] font-normal hover:bg-[#86ad9b] transition-colors duration-300'
          >
            Order Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}