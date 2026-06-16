"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function BlogsBanner() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax-like effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/SHAHD-IMAGE/bg.webp" // Using the established bg.webp
          alt="Blogs Banner Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#FFF9F7]" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white/90 font-medium tracking-[0.3em] uppercase text-sm md:text-base mb-4"
        >
          Insights & Expertise
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-5xl md:text-7xl lg:text-[100px] leading-[1.1] font-normal"
        >
          Our <span className="text-[#DDB2B5] italic font-serif">Journal</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-24 h-1 bg-[#DDB2B5] mx-auto mt-8 rounded-full"
        />
      </div>
      
      {/* Bottom Curve/Wave - for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-24 bg-gradient-to-t from-[#FFF9F7] to-transparent" />
    </section>
  );
}
