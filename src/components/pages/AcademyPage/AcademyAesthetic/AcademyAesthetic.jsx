"use client";
import Image from 'next/image'
import React, { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { motion, useInView } from 'framer-motion'

export default function AcademyAesthetic() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
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
      className='min-h-screen lg:h-screen w-full relative py-20 lg:py-0 overflow-hidden flex items-center'
    >
     
      {/* Floating Images - Hidden on mobile/tablet */}
      <div className="block">
        {floatingImages.map((img, index) => (
          <motion.div
            key={img.id}
            custom={index}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className={`absolute ${img.className} z-0`}
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

      {/* Background/Overlay for Small Screens */}
      <div className='absolute inset-0 z-0 lg:hidden'>
         <Image
            src={"/images/Academy/image 22.png"}
            fill
            alt="Dr. Shahd Background"
            className='object-cover object-top opacity-50'
          />
          <div className='absolute inset-0 bg-black/20' />
      </div>

      {/* Main Content Container */}
      <motion.div
        variants={containerVariants}
        className="relative z-10 w-full h-full main-container mx-auto px-4 flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-10 lg:gap-0"
      >
        {/* Left Side - Doctor Image (Hidden on mobile as it's now the background) */}
        <motion.div
          variants={itemVariants}
          className='hidden lg:block relative lg:absolute lg:left-0 overflow-hidden group w-full lg:max-w-none'
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className='relative'
          >
            <Image
              src={"/images/Academy/image 22.png"}
              width={541}
              height={566}
              alt="Dr. Shahd"
              className='object-cover w-full h-full lg:w-[541px] lg:h-[566px] transition-all duration-500 group-hover:brightness-110'
            />
            <div 
              style={{ background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 249, 249, 0) 100%)" }}
              className="absolute bottom-0 rotate-180 w-full h-16" 
            />
          </motion.div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          variants={containerVariants}
          className='relative z-999999999 lg:absolute lg:right-4 xl:right-10 max-w-2xl flex flex-col gap-4 md:gap-6 text-center lg:text-left items-center lg:items-start'
        >
          {/* Badge */}
          <motion.h4
            variants={itemVariants}
            className='font-bold font-poppins text-secondary text-lg md:text-xl lg:text-[27px]'
          >
            Aesthetic Medicine & Laser Notes
          </motion.h4>

          {/* Main Title */}
          <motion.h2
            variants={itemVariants}
            className='font-normal leading-tight text-primary text-3xl md:text-5xl lg:text-[56px]'
          >
            Your Clinical Bible. <br className="hidden md:block" /> High-yield knowledge at your fingertips.
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className='text-sm md:text-base font-poppins text-white lg:text-[#414141] font-normal leading-relaxed max-w-xl'
          >
            Skip the fluff and focus on what matters. We have condensed years of clinical experience and international guidelines into a single, high-yield resource. A quick-reference guide for dosages, depths, and emergency protocols.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='mt-6'
          >
            <Button
              variant='secondary'
              className={"rounded-full text-white w-fit px-8 py-6 md:px-10 md:py-8 flex justify-center items-center text-lg md:text-xl lg:text-2xl relative overflow-hidden group shadow-xl"}
            >
              <motion.span
                className='relative z-10 flex items-center gap-3'
              >
                Get The Notes
                <motion.svg
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </motion.svg>
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}