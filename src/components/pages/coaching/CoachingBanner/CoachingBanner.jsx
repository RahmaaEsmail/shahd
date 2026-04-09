"use client";
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';

export default function CoachingBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.4, ease: "easeIn" }}
      className='min-h-screen relative overflow-hidden flex'
    >
      {/* Background Image */}
      <Image 
        src="/images/Coaching/Frame 1000005536.png" 
        fill
        priority
        className='object-cover object-center' 
        alt="Coaching banner image" 
      />

      {/* Dark Overlay for Text Readability */}
      {/* <div 
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))"
        }}
      /> */}

      <div className='relative z-10 w-full flex flex-col justify-center items-center py-20  px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl w-full flex flex-col items-center gap-12 min-h-[60vh] mt-15   sm:gap-16 lg:gap-20 text-center'>
          
          <div className='flex  flex-col gap-6 sm:gap-8 lg:gap-12 w-full'>
            {/* Responsively scaling headings */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-8'
            >
              <h1 className='font-normal text-white text-4xl xs:text-5xl sm:text-6xl md:text-8xl lg:text-[100px] leading-tight'>
                Medical precision
              </h1>
              <span className='font-normal text-white text-4xl xs:text-5xl sm:text-6xl md:text-8xl lg:text-[100px] leading-tight'>
                &
              </span>
              <h1 className='font-normal text-white text-4xl xs:text-5xl sm:text-6xl md:text-8xl lg:text-[100px] leading-tight'>
                Holistic beauty
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='font-normal text-white mx-auto max-w-4xl font-poppins text-base sm:text-lg lg:text-2xl opacity-90 leading-relaxed'
            >
              Beauty and wellbeing are deeply connected. Through online medical coaching, Dr. Shahd helps you understand your body, skin, hair, and nutrition from the inside out. No guesswork, no generic routines &mdash; just science-backed guidance designed for your lifestyle.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-fit mx-auto group cursor-pointer"
          >
            {/* Gradient border wrapper */}
            <div
              className="absolute -inset-0.5 rounded-full opacity-80 group-hover:opacity-100 transition-opacity blur-[2px] group-hover:blur-[8px]"
              style={{
                background: "linear-gradient(90deg, #D19B9B 0%, #B6C7D6 100%)",
                boxShadow: "0px 4px 60px 0px rgba(255, 255, 255, 0.2), -4px 0px 15px 0px #F7A5A5, 4px 0px 15px 0px #5D688A",
              }}
            />
            <button className="relative bg-white w-[200px] sm:w-[252px] rounded-full px-6 py-3 sm:px-8 sm:py-4 text-primary font-medium text-base sm:text-lg hover:bg-gray-50 transition-colors uppercase tracking-wider">
              Book Now
            </button>
          </motion.div>

        </div>
      </div>
    </motion.div>
  )
}
