"use client";
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const data = [
  {
    id: 1,
    title: "Personalized Nutrition Plans",
    desc: "Every body is different. Your nutrition plan is designed based on your lifestyle, goals, medical history, and treatment program — ensuring results you can actually maintain."
  },
  {
    id: 2,
    title: "Metabolism & Hormonal Balance",
    desc: "We focus on foods that support metabolism, regulate blood sugar, and balance hormones — key factors in sustainable weight management."
  },
  {
    id: 3,
    title: "Healthy relationship with food",
    desc: "Our approach encourages mindful eating, portion awareness, and flexibility — helping you enjoy food without guilt while staying on track."
  }
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    } 
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.7,
      ease: "easeOut"
    } 
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.7,
      ease: "easeOut"
    } 
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const pulseAnimation = {
  initial: { scale: 1 },
  animate: { 
    scale: [1, 1.02, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

export default function WeightManagementNutritionFood() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='min-h-fit py-16 md:py-24 lg:min-h-screen lg:py-0 relative w-full flex items-center overflow-hidden'
    >
      {/* Background Image Container with Parallax Effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className='absolute inset-0 z-0'
        style={{
          backgroundImage: "url('/images/d1ce99293bb9df3fa18d3d8ad6f3c5802adf222d.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Overlay with fade in */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.2 }}
        className='absolute inset-0 bg-white/70 z-0'
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 z-10 items-center main-container mx-auto">
        {/* Left Column: Text Content */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className='flex flex-col gap-6 order-2 lg:order-1'
        >
          <motion.h4 
            variants={fadeInUp}
            className='font-bold font-poppins text-[#95BCAA] text-sm md:text-base lg:text-[20px] uppercase tracking-widest'
          >
            Nutrition & Food
          </motion.h4>
          
          <motion.h2 
            variants={fadeInLeft}
            className='font-normal text-primary max-w-2xl text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[64px] leading-[1.1] lg:leading-tight'
          >
            Because real results start from within
          </motion.h2>
          
          <motion.div 
            variants={staggerContainer}
            className="flex flex-col gap-6 md:gap-8 mt-4"
          >
            {data?.map((item, index) => (
              <motion.div 
                key={item.id} 
                variants={fadeInRight}
                whileHover={{ 
                  x: 10,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="flex gap-4 items-start group"
              >
                <motion.div 
                  className='mt-1 shrink-0'
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1,
                    transition: { duration: 0.6 }
                  }}
                >
                  <Image 
                    src={"/images/Weight-management/Frame 1000005848.svg"} 
                    alt='icon' 
                    height={32} 
                    width={32} 
                    className="w-7 h-7 md:w-9 md:h-9"
                  />
                </motion.div>
                <div className="flex-1">
                  <motion.h4 
                    className='text-lg md:text-xl lg:text-[24px] font-medium text-[#414141] mb-1 md:mb-2'
                    whileHover={{ color: "#95BCAA" }}
                  >
                    {item.title}
                  </motion.h4>
                  <motion.p 
                    className='text-sm md:text-base font-light font-poppins text-[#414141]/90 leading-relaxed'
                    initial={{ opacity: 0.8 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {item.desc}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
 
        {/* Right Column: Image */}
        <motion.div 
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.4 }}
          className='w-full relative order-1 lg:order-2 aspect-[4/3] sm:aspect-video lg:aspect-square xl:aspect-auto lg:h-[600px] xl:h-[700px] rounded-3xl overflow-hidden shadow-xl lg:shadow-none'
        >
          <Image 
            src="/images/Weight-management/Gradient Mask Group.svg"
            alt='weight management'
            fill
            className='object-cover transition-transform duration-700 hover:scale-105'
          />
 
          {/* Animated gradient overlays */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className='absolute inset-0 bg-gradient-to-t from-white/30 to-transparent pointer-events-none'
          />
 
          {/* Subtle floating animation on image */}
          <motion.div
            variants={pulseAnimation}
            initial="initial"
            animate="animate"
            className='absolute inset-0 pointer-events-none'
          />
        </motion.div>
      </div>
    </motion.div>
  );
}