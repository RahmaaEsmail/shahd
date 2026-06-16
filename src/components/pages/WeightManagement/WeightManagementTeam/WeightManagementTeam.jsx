"use client";
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTranslation } from 'react-i18next';

export default function WeightManagementTeam() {
  const { t } = useTranslation();
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
    { id: 1, src: "/SHAHD-IMAGE/Academy/Image_fx (47) (1) 1.webp", height: 93, width: 220, className: 'left-1/4 bottom-30', delay: 0 },
    { id: 2, src: "/SHAHD-IMAGE/Academy/Image_fx (47) (1) 2.webp", height: 93, width: 248, className: 'left-100 top-10', delay: 0.2 },
    { id: 3, src: "/SHAHD-IMAGE/Academy/Image_fx (47) (1) 3.webp", height: 110, width: 448, className: 'left-160 top-10', delay: 0.4 },
    { id: 4, src: "/SHAHD-IMAGE/Academy/Image_fx (47) (1) 4.webp", height: 93, width: 248, className: 'right-33 bottom-10', delay: 0.6 },
    { id: 5, src: "/SHAHD-IMAGE/Academy/Image_fx (47) (1) 6.webp", height: 93, width: 248, className: 'right-0 top-10', delay: 0.8 },
    { id: 6, src: "/SHAHD-IMAGE/Academy/Image_fx (47) (1) 7.webp", height: 93, width: 248, className: 'top-6', delay: 1 },
    { id: 7, src: "/SHAHD-IMAGE/Academy/Image_fx (47) (1) 8.webp", height: 93, width: 248, className: 'right-1/2 bottom-10', delay: 1.2 },
  ]

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className='min-h-screen py-16  lg:min-h-screen  w-full relative overflow-hidden'
      style={{
        background:"url('/SHAHD-IMAGE/Weight-management/352ca418788b2450d748119b5a92ace55d930229.webp')",
        backgroundPosition:"center center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover"
      }}
    >

      <div className="absolute bg-white/60 inset-0"/>
      
      <div
        className='absolute top-0 left-0 h-[84px] w-full z-[1]'
        style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 249, 249, 0) 100%)"
        }} />
      <div
        className='absolute bottom-0 rotate-180 left-0 h-[84px] w-full z-[1]'
        style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 249, 249, 0) 100%)"
        }} />
      
      {/* Main Content Container */}
      <div className="relative lg:absolute container py-4 mx-auto z-10 w-full h-full inset-0 flex flex-col lg:flex-row justify-between items-stretch gap-12 lg:gap-8 px-4 sm:px-8">
        {/* Left Content */}
        <motion.div
          variants={textContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col max-w-2xl gap-4 text-center justify-center  lg:text-left"
        >
          <motion.p 
            variants={textItemVariants}
            className="font-bold text-[#95BCAA] text-xl md:text-2xl font-poppins"
          >
            {t("Meet My Team")}
          </motion.p>
          
          <motion.h2 
            variants={textItemVariants}
            className="text-primary text-3xl  font-normal leading-tight lg:leading-[1.1]"
          >
            {t("Together, A Complete Weight Management Experience")}
          </motion.h2>

          {/* Cards with staggered animation */}
          <div className="flex flex-col gap-4 mt-2">
            <motion.div
              custom={0}
              variants={cardVariants}
              whileHover="hover"
              className='bg-white/20 backdrop-blur-md flex flex-col gap-3 rounded-[24px] p-4 border border-white/40 shadow-sm'
            >
              <p className="text-primary font-medium font-poppins text-xl">{t("DR. Shahd Awad")}</p>
              <p className="text-[#414141] tracking-[-0.3px] font-poppins font-normal text-sm leading-relaxed">
                {t("Dr. Shahd Team Desc")}
              </p>
            </motion.div>

            <motion.div
              custom={1}
              variants={cardVariants}
              whileHover="hover"
              className='bg-white/20 backdrop-blur-md flex flex-col gap-3 rounded-[24px] p-4 border border-white/40 shadow-sm'
            >
              <p className="text-primary font-medium font-poppins text-xl">{t("DR. Islam")}</p>
              <p className="text-[#414141] tracking-[-0.3px] font-poppins  font-normal text-sm leading-relaxed">
                {t("Dr. Islam Team Desc")}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Images */}
        <motion.div
          variants={rightImagesVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className='flex gap-4 md:gap-6 my-5 items-stretch justify-center'
        >
          <div className="relative w-[140px] sm:w-[200px] lg:w-[260px] h-full">
            <Image 
              src="/SHAHD-IMAGE/Academy/Frame 98.webp" 
              fill
              alt="Team member" 
              className='rounded-full object-cover shadow-lg' 
            />
          </div>
          <div className="relative w-[140px] sm:w-[200px] lg:w-[260px]">
            <Image 
              src="/SHAHD-IMAGE/Academy/Frame 97.webp" 
              fill
              alt="Team member" 
              className='rounded-full object-cover shadow-lg' 
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}