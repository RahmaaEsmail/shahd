"use client";
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import HorseContactForm from './HorseContactForm';
import HorseContactContent from './HorseContactContent';

export default function HorseContactUs() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      className='py-12 lg:py-16 grid overflow-x-hidden! grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-5'
    >
      {/* Left Column - Image */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className='w-full h-[300px] sm:h-[450px] lg:h-[747px]! rounded-none! lg:rounded-tr-[30px] sm:rounded-tr-[50px] rounded-br-[30px] sm:rounded-br-[50px] overflow-hidden'
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="h-full w-full"
        >
          <Image
            loading='lazy'
            src="/images/horse/59f4602d51d5c83e82a89b50957468df14c22fd5.jpg"
            width={687}
            height={747}
            className='w-full h-full object-cover'
            alt="Contact"
          />
        </motion.div>
      </motion.div>

      {/* Right Column - Content */}
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='flex px-6 sm:px-10 lg:px-3 flex-col gap-3 justify-center'
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className='py-5 overflow-hidden!'
        >
          {/* Header Section */}
          <HorseContactContent />
          <HorseContactForm />
        </motion.div>
      </motion.div>
    </motion.section>
  )
}