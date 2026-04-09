"use client";
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';

// Animation variants for the card
const cardVariants = {
  initial: { 
    opacity: 0,
    scale: 0.8,
    y: 50
  },
  animate: { 
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  
};

// Animation variants for the content
const contentVariants = {
  initial: { 
    opacity: 0,
    y: 20
  },
  animate: { 
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.5
    }
  },
 
};

// Animation variants for the number
const numberVariants = {
  initial: { 
    opacity: 0,
    scale: 0.5
  },
  animate: { 
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.4,
      duration: 0.5,
      type: "spring",
      stiffness: 200
    }
  },
};

export default function StatisCard({ image, number, title, isPrimary }) {
  return (
    <motion.div 
      className='relative w-full h-62.5 overflow-hidden cursor-pointer'
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Background Image with Parallax Effect */}
      <motion.div
        className='absolute inset-0'
        // whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        <Image 
          src={image} 
          fill 
          loading="lazy" 
          className='object-cover' 
          alt={title || "statistic image"} 
        />
      </motion.div>
      
      {/* Overlay with Gradient */}
      <motion.div 
        className={`absolute inset-0  ${isPrimary ? "bg-black/30" : "bg-black/50"}`}
      />
      
      {/* Content */}
      <motion.div 
        className='absolute z-10 flex justify-center items-center inset-0'
        variants={contentVariants}
        initial="initial"
        whileInView={"animate"}
        viewport={{once : false}}
      >
        <div className='flex flex-col justify-center items-center text-center p-4'>
          <motion.h3 
            className={`font-bold text-[40px] lg:text-[50px] font-poppins mb-2 ${
              isPrimary ? "text-[#DDB2B5]" : "text-[#B6C7D6]"
            }`}
            variants={numberVariants}
            initial="initial"
            viewport={{once : false}}
            whileInView="animate"
          >
            {number}
          </motion.h3>
          
          <motion.p 
            className='text-white uppercase font-normal text-xl lg:text-5xl'
            variants={{
              initial: { opacity: 0, y: 10 },
              animate: { 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.5, duration: 0.4 }
              },
             
            }}
            initial="initial"
            whileInView={"animate"}
            viewport={{once : false}}
          >
            {title}
          </motion.p>
        </div>
      </motion.div>

      {/* Shine Effect on Hover */}
      <motion.div
        className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent'
        initial={{ x: "-100%" }}
        variants={{
          hover: { 
            x: "100%",
            transition: { duration: 0.8 }
          }
        }}
      />
    </motion.div>
  )
}