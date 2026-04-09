"use client";
import Image from 'next/image';
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const data = [
  {
    id: 1,
    img: "/images/hair-therapy/Frame 1000005833 (1).svg",
    title: "Your journey begins with a full medical evaluation, scalp analysis, and hair assessment to understand your hair loss pattern.",
  },
  {
    id: 2,
    img: "/images/hair-therapy/Frame 1000005833 (2).svg",
    title: "Your hairline is designed medically and aesthetically to suit your facial structure, age progression, and natural growth pattern.",
  },
  {
    id: 3,
    img: "/images/hair-therapy/Frame 1000005833 (3).svg",
    title: "Healthy hair follicles are carefully extracted using advanced techniques (FUE / DHI / Sapphire) with minimal trauma and high precision.",
  },
  {
    id: 4,
    img: "/images/hair-therapy/Frame 1000005833 (4).svg",
    title: "Immediate aftercare, scalp protection, medication guidance, and recovery instructions are provided, and Healing Begins.",
  }
];

export default function HairTherapyAbout() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "backOut",
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      className="py-16 md:py-20 lg:py-24 relative min-h-fit lg:min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F3E5E6 50%, #FFFFFF 100%)"
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="main-container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center px-4 sm:px-6 lg:px-8">
        
        {/* Left Content */}
        <div className="flex flex-col gap-8 lg:gap-10 order-2 lg:order-1">
          <div className="space-y-4">
            <motion.span 
              className="text-secondary font-bold text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] font-poppins inline-block"
              variants={badgeVariants}
            >
              About The Surgery
            </motion.span>
            
            <motion.h2 
              className="text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] uppercase tracking-tight"
              variants={titleVariants}
            >
              What is hair <br className="hidden sm:block" /> transplant surgery?
            </motion.h2>
          </div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6"
            variants={containerVariants}
          >
            {data.map((item, index) => (
              <motion.div 
                key={item.id} 
                className="bg-white/40 border border-white/60 backdrop-blur-md rounded-[24px] sm:rounded-[32px] p-6 lg:p-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-all duration-300 h-full"
                variants={cardVariants}
                whileHover="hover"
                custom={index}
              >
                <motion.div 
                  className="mb-6 relative w-16 h-16 sm:w-20 sm:h-20"
                  variants={iconVariants}
                >
                  <Image 
                    src={item.img} 
                    alt={`Step ${item.id}`} 
                    fill
                    className="object-contain"
                  />
                </motion.div>
                <div className="flex-1 flex items-center">
                  <motion.p 
                    className="text-[#414141] text-sm sm:text-base font-medium font-poppins leading-relaxed"
                    variants={textVariants}
                  >
                    {item.title}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div 
          className="relative w-full flex justify-center order-1 lg:order-2"
          variants={imageVariants}
        >
          <motion.div 
            className="relative w-full aspect-4/5 sm:aspect-3/4 lg:aspect-square max-w-[540px] lg:max-w-none rounded-[32px] overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/images/hair-therapy/Image_fx - 2026-02-04T001320.240 1.png"
              alt="Dr. Shahd Hair Transplant"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  );
}