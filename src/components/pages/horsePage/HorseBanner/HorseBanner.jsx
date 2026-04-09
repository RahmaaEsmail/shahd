"use client";
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';

export default function HorseBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.4, ease: "easeIn" }}
      className='min-h-screen relative overflow-hidden'
    >
      {/* Background Image */}
      <Image 
        src="/images/horse/67adf9f6bdfe8688747e9c5a7a3bc089d5b6199c.jpg" 
        fill // Use fill for better responsive scaling
        priority
        className='object-cover' 
        alt="service banner image" 
      />

      {/* Overlay Gradients */}
      <div
        style={{
          background: "linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.8) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))"
        }}
        className='absolute inset-0 flex flex-col justify-center items-center px-4 pt-20 pb-10'
      >
        <div className='max-w-7xl w-full flex flex-col items-center justify-center text-center'>
          
          {/* Text Content Container */}
          <div className='flex flex-col items-center space-y-4 md:space-y-6'>
            <h1 className='font-normal text-white text-[48px] sm:text-[64px] md:text-[80px] lg:text-[100px] leading-[1.1] max-w-4xl'>
              A Lifestyle of Balance
            </h1>
            
            <p className='font-normal max-w-xs sm:max-w-md md:max-w-xl text-white mx-auto font-poppins text-lg sm:text-xl md:text-2xl opacity-90'>
              Horse riding is more than a hobby for Dr. Shahd — it’s a source of balance, strength, and connection.
            </p>
          </div>

          {/* Button Container */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-fit mx-auto mt-10 md:mt-16 group cursor-pointer"
          >
            {/* Gradient border wrapper */}
            <div
              className="absolute -inset-0.5 rounded-full opacity-80 group-hover:opacity-100 transition-opacity blur-[2px] group-hover:blur-[4px]"
              style={{
                background: "linear-gradient(90deg, #D19B9B 0%, #B6C7D6 100%)",
                boxShadow: "0px 4px 60px 0px rgba(255, 255, 255, 0.2), -4px 0px 15px 0px #F7A5A5, 4px 0px 15px 0px #5D688A",
              }}
            />
            <button className="relative bg-white rounded-full px-6 py-3 md:px-10 md:py-4 text-primary font-medium text-base md:text-lg uppercase tracking-wider hover:bg-gray-50 transition-colors">
              follow the passion
            </button>
          </motion.div>
          
        </div>
      </div>
    </motion.div>
  )
}