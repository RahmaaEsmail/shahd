"use client";
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import AboutContactForm from './AboutContactForm';
import AboutContactContent from './AboutContactContent';

export default function AboutContact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      // Changed to grid-cols-1 for mobile, grid-cols-2 for desktop
      className='py-8 lg:py-4 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-3 overflow-x-hidden'
    >
      {/* Left Column - Image */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.2 }}
        // Added order-2 so text comes first on mobile, rounded corners adjusted for mobile
        className='w-full h-full order-2 lg:order-1   rounded-r-[0px] lg:rounded-tr-[50px] lg:rounded-br-[50px] overflow-hidden'
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="relative h-[400px] lg:h-full w-full"
        >
          <Image
            loading='lazy'
            src="/images/About/contact.png"
            fill
            className='object-cover rounded-tr-none! rounded-br-none! lg:rounded-tr-[50px] lg:rounded-br-[50px]'
            alt="Contact"
          />
        </motion.div>
      </motion.div>

      {/* Right Column - Content */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='flex px-4 lg:px-8 flex-col gap-3 order-1 lg:order-2'
      >
        <div className='py-5'>
          <AboutContactContent />
          <AboutContactForm />
        </div>
      </motion.div>
    </motion.div>
  )
}