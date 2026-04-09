'use client';
import React from 'react'
import { motion } from 'framer-motion';

export default function HorseContactContent() {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className="flex flex-col mx-auto max-w-7xl text-left"
    >
      <motion.h3
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className='font-bold text-[#AF7F73] font-poppins text-3xl'
      >
        Contact Us
      </motion.h3>

      <motion.p
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className='text-primary font-normal mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-tight'
      >
        Start Your Glow Journey Together
      </motion.p>

      <motion.p
        initial={{ y: 70, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className='text-[#414141] text-base font-poppins leading-8'
      >
        Have a question or want to book a consultation? Fill out the form below,
        and our team will get back to you shortly. We're here to help you glow
        with confidence every step of the way.
      </motion.p>
    </motion.div>
  )
}
