"use client";

import React from 'react';
import { motion } from 'framer-motion';

const data = [
  {
    id: 1,
    title: "Vaginal Laser Rejuvenation:",
    description: "Improves tissue elasticity and hydration."
  },
  {
    id: 2,
    title: "Labial Rejuvenation:",
    description: "Enhances appearance and comfort."
  },
  {
    id: 3,
    title: "Vaginal Tightening:",
    description: "Supports collagen stimulation and tissue strength."
  },
  {
    id: 4,
    title: "Intimate Skin Brightening:",
    description: "Improves pigmentation of the intimate area."
  },
  {
    id: 5,
    title: "Urinary Incontinence Treatment:",
    description: "Supports pelvic tissue strength and bladder control."
  },
  {
    id: 6,
    title: "Botox:",
    description: "Vaginismus"
  },
  {
    id: 7,
    title: "Hifu:",
    description: "Tightening equipment"
  },
];

const images = [
  "/images/aethesic/cc9f30dcaf92f525ed575a75cef332206f514dca.jpg",
  "/images/aethesic/131fde53d9d110730c901e05f37fced1c4d0f3b1.jpg",
  "/images/aethesic/eb9d25bc2876da498bfccf2c6ee0fcfb3985cd78.jpg",
  "/images/aethesic/131fde53d9d110730c901e05f37fced1c4d0f3b1.jpg"
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

export default function AestheticGynecologyTreatments() {
  return (
    <div className='min-h-screen py-12 lg:py-20 relative bg-[#F4E7E885] overflow-hidden'>
      
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="flex flex-col justify-center mb-10 md:mb-16 text-center items-center gap-2 px-4"
      >
        <p className="text-secondary font-semibold tracking-wider text-sm lg:text-lg uppercase">
          Available Treatments Section
        </p>
        <h2 className="text-primary text-3xl md:text-5xl lg:text-[55px] leading-tight max-w-4xl uppercase font-medium">
          Advanced Medical Techniques in gynecology
        </h2>
      </motion.div>

      {/* Main Content Grid - items-stretch is key for full height */}
      <div className='main-container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch'>
        
        {/* Left Side: Treatment List */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="flex flex-col gap-4"
        >
          {data.map((item) => (
            <motion.div 
              key={item.id}
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="bg-white flex flex-col gap-2 rounded-[12px] p-[18px_21px] border-l-[8px] border-l-primary shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h4 className="text-xl md:text-[28px] font-normal text-primary leading-tight">
                {item.title}
              </h4>
              <p className="text-[#414141] text-sm md:text-base tracking-[-0.15px] font-light font-poppins leading-[1.6]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Side: Image Grid - Stretches to fill full height */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className='grid grid-cols-2 gap-3 lg:sticky lg:top-10 h-full lg:h-auto'
        >
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-[12px] h-full">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                className="w-full h-full object-cover aspect-[3/4] lg:aspect-auto" 
                src={src} 
                alt={`Treatment ${index + 1}`}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Overlays */}
      <div className='absolute -bottom-1 left-0 right-0 z-20 w-full h-[40px] md:h-[53px] pointer-events-none'>
        <img src="/images/aethesic/Rectangle 24.png" className='w-full h-full object-cover' alt="" />
      </div>

      <div className='absolute top-0 rotate-180 left-0 right-0 z-20 w-full h-[40px] md:h-[53px] pointer-events-none'>
        <img src="/images/aethesic/Rectangle 24.png" className='w-full h-full object-cover' alt="" />
      </div>
    </div>
  );
}