"use client";
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';

export default function AcademyLicense() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.4, ease: "easeIn" }}
      className='min-h-screen  my-4 py-5 relative overflow-hidden flex items-center'
    >
      <Image 
        src="/images/Academy/Component 18.png" 
        fill
        className='object-cover z-0' 
        alt="License prep background" 
      />
      <div className='absolute inset-0 bg-black/30 z-1' />

      <div className='relative z-10 w-full main-container mx-auto px-4 py-20 lg:py-0 text-center'>
        <div className='max-w-7xl mx-auto flex flex-col gap-8 md:gap-10'>
          <div className='flex flex-col gap-4 lg:gap-6'>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className='text-white font-poppins text-lg md:text-xl lg:text-[27px] font-bold'
            >
              License Exam Prep
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className='font-normal text-white text-4xl md:text-6xl lg:text-[100px] leading-tight'>
                Study Smarter. <br className="hidden md:block" /> Pass with Pride.
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='font-normal text-white/90 mt-4 font-poppins text-base md:text-lg lg:text-2xl max-w-4xl mx-auto leading-relaxed'
            >
              Led by Dr. Rizk’s extensive experience in medical education, we’ve created the ultimate study companion for medical license exams. master complex concepts and ace your board exams with confidence.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-fit mx-auto mt-6"
          >
            <div
              className="absolute -inset-0.5 rounded-full opacity-80 group-hover:opacity-100 transition-opacity"
              style={{
                background: "linear-gradient(90deg, #D19B9B 0%, #B6C7D6 100%)",
                boxShadow: "0px 4px 60px rgba(255, 255, 255, 0.2)",
              }}
            />
            <button className="relative bg-white w-[220px] md:w-[280px] rounded-full px-8 py-4 text-primary font-bold text-base md:text-lg hover:bg-gray-50 transition-colors">
              Get the Exam Prep Bundle
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
