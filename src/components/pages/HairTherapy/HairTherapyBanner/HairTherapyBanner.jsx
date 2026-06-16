"use client";
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next';

export default function HairTherapyBanner() {
  const { t , i18n } = useTranslation();
  const dir  = i18n?.language == "ar" ? "right" :"left";
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
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className='min-h-fit py-20 lg:min-h-screen lg:py-0 relative overflow-hidden flex flex-col items-center justify-center'>
      {/* Animated background image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image 
          src="/SHAHD-IMAGE/hair-therapy/Frame 1000005536.webp" 
          alt="Hair Therapy Banner" 
          width={1920} 
          height={1080} 
          className='w-full h-full object-cover object-center lg:object-top'
          priority
        />
      </motion.div>

      <motion.div 
        className='relative h-screen mt-2 lg:mt-30 mb-7 z-10 w-full main-container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-24 lg:pt-0 pb-12 lg:pb-0 px-4 sm:px-8'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        <div className={`flex flex-col gap-8 lg:gap-10 text-center lg:text-[${dir}]`}>
          <motion.div variants={itemVariants}>
            <motion.h1 
              className={`text-white text-3xl sm:text-5xl md:text-6xl text-[${dir}] font-normal leading-tight lg:leading-[1.1] uppercase tracking-tight`}
              variants={textVariants}
            >
              {t("Medical Precision")}
              <br />
              <span className='text-secondary lg:text-white'>{t("Natural Results")}</span>
            </motion.h1>
          </motion.div>

          <motion.div
            className="relative w-fit mx-auto lg:mx-0 group cursor-pointer"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            {/* Gradient border wrapper with animation */}
            <motion.div
              className="absolute -inset-0.5 rounded-full"
              style={{
                background: "linear-gradient(90deg, #D19B9B 0%, #B6C7D6 100%)",
                boxShadow:
                  "0px 4px 100px 0px #FFFFFF40, -4px 0px 25px 0px #F7A5A5, 4px 0px 25px 0px #5D688A",
              }}
              whileInView={{
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <button className="relative bg-white min-w-[200px] sm:min-w-[252px] rounded-full px-8 py-4 text-primary font-medium text-lg hover:bg-gray-50 transition-colors uppercase tracking-wider">
              {t("Book your consultation")}
            </button>
          </motion.div>
        </div>

        <motion.div 
          className='grid grid-cols-1 sm:grid-cols-2 gap-4'
          variants={containerVariants}
        >
          {/* Card 1: Text */}
          <motion.div 
            className="bg-white/10 backdrop-blur-md rounded-[24px] p-2 flex flex-col justify-center border border-white/20 order-1"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.p 
              className='text-base px-2 text-wrap! text-center font-normal font-poppins leading-relaxed text-white tracking-wide'
              variants={textVariants}
            >
              {t("Hair Banner Desc 1")}
            </motion.p>
          </motion.div>

          {/* Card 2: Image 1 */}
          <motion.div 
            className="relative aspect-square w-full lg:h-auto overflow-hidden rounded-[24px] shadow-2xl order-2"
            variants={imageVariants}
            whileHover="hover"
          >
            <Image 
              src="/SHAHD-IMAGE/hair-therapy/Frame 1000005828.webp" 
              fill 
              alt="Hair Therapy" 
              className='object-cover'
            />
          </motion.div>

          {/* Card 3: Image 2 */}
          <motion.div 
            className="relative aspect-square w-full lg:h-auto overflow-hidden rounded-[24px] shadow-2xl order-3"
            variants={imageVariants}
            whileHover="hover"
          >
            <Image 
              src="/SHAHD-IMAGE/hair-therapy/Frame 1000005828-1.webp" 
              fill 
              alt="Hair Therapy" 
              className='object-cover'
            />
          </motion.div>

          {/* Card 4: Text */}
          <motion.div 
            className="bg-white/10 backdrop-blur-md text-wrap!  rounded-[24px] p-2 flex flex-col justify-center border border-white/20 order-4"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.p 
              className='text-base px-2 text-center font-normal font-poppins leading-relaxed text-white tracking-wide'
              variants={textVariants}
            >
              {t("Hair Banner Desc 2")}
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}