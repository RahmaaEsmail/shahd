"use client";
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function AcademyTeam() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const textItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + (i * 0.15),
        duration: 0.6,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3 }
    }
  }

  const rightImagesVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 0.4
      }
    }
  }

  const floatingImages = [
    { id: 1, src: "/images/Academy/Image_fx (47) (1) 1.png", height: 93, width: 220, className: 'left-1/4 bottom-30', delay: 0 },
    { id: 2, src: "/images/Academy/Image_fx (47) (1) 2.png", height: 93, width: 248, className: 'left-100 top-10', delay: 0.2 },
    { id: 3, src: "/images/Academy/Image_fx (47) (1) 3.png", height: 110, width: 448, className: 'left-160 top-10', delay: 0.4 },
    { id: 4, src: "/images/Academy/Image_fx (47) (1) 4.png", height: 93, width: 248, className: 'right-33 bottom-10', delay: 0.6 },
    { id: 5, src: "/images/Academy/Image_fx (47) (1) 6.png", height: 93, width: 248, className: 'right-0 top-10', delay: 0.8 },
    { id: 6, src: "/images/Academy/Image_fx (47) (1) 7.png", height: 93, width: 248, className: 'top-6', delay: 1 },
    { id: 7, src: "/images/Academy/Image_fx (47) (1) 8.png", height: 93, width: 248, className: 'right-1/2 bottom-10', delay: 1.2 },
  ]

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className='min-h-screen lg:h-screen w-full relative py-12 lg:py-0 overflow-hidden flex items-center'
    >
      {/* Floating Images - Hidden on mobile/tablet */}
      <div className="hidden xl:block">
        {floatingImages.map((img, index) => (
          <motion.div
            key={img.id}
            custom={index}
            variants={imageVariants}
            className={`absolute ${img.className} z-0`}
            style={{ position: 'absolute' }}
          >
            <Image
              src={img.src}
              height={img.height}
              width={img.width}
              className='object-cover'
              alt={`Decorative image ${img.id}`}
            />
          </motion.div>
        ))}
      </div>

      <div
        className='absolute inset-0 z-5'
        style={{
          background: "linear-gradient(90deg, rgba(221, 178, 181, 0.3) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(113, 137, 162, 0.3) 100%)"
        }} 
      />
      
      {/* Main Content Container - Flex column on mobile */}
      <div className="relative z-10 w-full main-container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8">
        {/* Left Content */}
        <motion.div
          variants={textContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col max-w-2xl gap-6 text-center lg:text-left items-center lg:items-start"
        >
          <motion.p 
            variants={textItemVariants}
            className="font-bold text-secondary text-lg md:text-xl lg:text-[27px] font-poppins"
          >
            Meet My Team
          </motion.p>
          
          <motion.h2 
            variants={textItemVariants}
            className="text-primary text-3xl md:text-5xl lg:text-[64px] font-normal leading-tight"
          >
            Together, A Complete Weight Management Experience
          </motion.h2>

          {/* Cards with staggered animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-col gap-4 w-full">
            <motion.div
              custom={0}
              variants={cardVariants}
              whileHover="hover"
              className='bg-white/30 backdrop-blur-md flex flex-col gap-3 rounded-[24px] p-6 border border-white/40 shadow-lg'
            >
              <p className="text-secondary font-bold text-xl md:text-2xl">DR.Shahd Awad</p>
              <p className="text-[#414141] text-sm md:text-base leading-relaxed font-poppins">
                Advanced weight management treatments that support body contouring, fat reduction, and metabolic balance. Center of patient safety and sustainable results.
              </p>
            </motion.div>

            <motion.div
              custom={1}
              variants={cardVariants}
              whileHover="hover"
              className='bg-white/30 backdrop-blur-md flex flex-col gap-3 rounded-[24px] p-6 border border-white/40 shadow-lg'
            >
              <p className="text-secondary font-bold text-xl md:text-2xl">DR.Islam</p>
              <p className="text-[#414141] text-sm md:text-base leading-relaxed font-poppins">
                Deep expertise in nutrition science and lifestyle optimization, creating personalized food plans that support weight loss and metabolic health.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Images - Hidden on medium and smaller if too cramped, or made smaller */}
        <motion.div
          variants={rightImagesVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className='flex gap-3 items-center shrink-0 lg:max-w-md xl:max-w-none'
        >
          <div className="relative w-[140px] md:w-[180px] lg:w-[220px] xl:w-[281px] aspect-[1/2.4]">
            <Image 
              src="/images/Academy/Frame 98.png" 
              fill
              alt="Team member 1" 
              className='rounded-full object-cover shadow-2xl' 
            />
          </div>
          <div className="relative w-[140px] md:w-[180px] lg:w-[220px] xl:w-[281px] aspect-[1/2.4] mt-10">
            <Image 
              src="/images/Academy/Frame 97.png" 
              fill
              alt="Team member 2" 
              className='rounded-full object-cover shadow-2xl' 
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}