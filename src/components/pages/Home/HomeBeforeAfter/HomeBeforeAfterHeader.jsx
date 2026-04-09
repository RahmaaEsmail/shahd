"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function HomeBeforeAfterHeader() {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className="flex justify-between items-center mb-8"
    >
      <h2 className="text-secondary text-4xl lg:text-5xl font-bold font-poppins">
        Before & After
      </h2>
      <motion.button
        onClick={() => router.push('/services')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group hidden md:flex items-center gap-2 bg-secondary hover:bg-[#5a7289] text-white px-6 py-3 rounded-full font-medium transition-colors duration-300"
      >
        <span className="text-lg font-poppins">Show More</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </motion.div>
  )
}
