"use client";
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Play } from 'lucide-react';
import GalleryItem from './HorseGalleryItem';
import { useTranslation } from 'react-i18next';

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      when: "beforeChildren",
      staggerChildren: 0.3
    }
  }
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1 }
  }
}

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      staggerChildren: 0.2,
      delayChildren: 0.2
    }
  }
}

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
}

const headingVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
}

// Sequential card reveal animations
const cardRevealVariants = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.8,
    rotateX: -15
  },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      delay: custom * 0.15, // Sequential delay based on index
      duration: 0.8,
      ease: [0.215, 0.610, 0.355, 1.000], // Cubic bezier for smooth easing
      type: "spring",
      stiffness: 50,
      damping: 15
    }
  })
}

// Hover animations
const hoverOverlayVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: { duration: 0.3 }
  }
}

const playButtonVariants = {
  initial: { scale: 0, opacity: 0, rotate: -180 },
  hover: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 15
    }
  }
}

const imageHoverVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
}



export default function HorseGallery() {
  const { t } = useTranslation();
  const firstGridItems = [
    {
      id: 1,
      src: "/SHAHD-IMAGE/horse/cb11c78a3e1becfd276fd2dc6a9af6dfa483e5dd.webp",
      alt: "woman with horse",
      hasPlayButton: true,
    },
    {
      id: 2,
      src: "/SHAHD-IMAGE/horse/4a9f0a37da338a592051eb0ac427e135186897f4.webp",
      alt: "woman with horse",
      hasPlayButton: true,
    },
    {
      id: 3,
      src: "/SHAHD-IMAGE/horse/cbffc2a889a9d2156fd43ac9832e5a4ee7b7af82.webp",
      alt: "woman with horse",
      hasPlayButton: true,
    },
    {
      id: 4,
      src: "/SHAHD-IMAGE/horse/c.webp",
      alt: "woman with horse",
      hasPlayButton: false,
    }
  ];

  const secondGridItems = [
    {
      id: 5,
      src: "/SHAHD-IMAGE/horse/b843d07fc181f7bd85981644e3844b8e28c187a6.webp",
      alt: "woman riding horse",
      hasPlayButton: true,
    },
    {
      id: 6,
      src: "/SHAHD-IMAGE/horse/1697b6d5d1a1c48e20be5d55fc6add12fcb8a0e5.webp",
      alt: "woman riding silhouette",
      hasPlayButton: true,
    },
    {
      id: 7,
      src: "/SHAHD-IMAGE/horse/92037db9332b3173870907b4fe091bfa696444ac.webp",
      alt: "horse on beach",
      hasPlayButton: true,
    }
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={sectionVariants}
      className='relative w-full py-6 sm:py-2 overflow-hidden'
    >
      {/* Gradient Overlay */}
      <motion.div
        variants={overlayVariants}
        className='absolute inset-0'
        style={{
          background: "linear-gradient(180deg, rgba(255, 255, 255, 0.62) 0%, rgba(221, 178, 181, 0.5146) 50%, rgba(255, 255, 255, 0.62) 100%)"
        }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={containerVariants}
        className='relative z-10 mx-auto main-container px-4 h-full'
      >
        {/* Header Content */}
        <motion.div
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className='flex w-full flex-col gap-2 mb-4'
        >
          <motion.p
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            className='text-2xl text-center font-bold font-poppins text-dark-primary'
          >
            {t("Equestrian Lifestyle Gallery")}
          </motion.p>

          <motion.h1
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            className='text-3xl text-center text-primary flex justify-center items-center gap-4 font-normal leading-tight'
          >
            {t("A World of Grace, Strength & Freedom")}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            className="text-sm sm:text-base  text-center font-poppins text-[#414141] font-normal tracking-[-0.3px] leading-7 max-w-4xl mx-auto"
          >
            {t("Horse Gallery Desc")}
          </motion.p>
        </motion.div>

        {/* First Gallery Grid */}
        <motion.div
          className="grid h-auto gap-[10px] sm:gap-[14px] grid-cols-2 sm:grid-cols-4 mb-4 sm:mb-6"
        >
          {firstGridItems.map((item, index) => (
            <div key={item.id} className="h-[160px] sm:h-[206px]">
              <GalleryItem
                cardRevealVariants={cardRevealVariants}
                src={item.src}
                alt={item.alt}
                hasPlayButton={item.hasPlayButton}
                index={index}
              />
            </div>
          ))}
        </motion.div>

        {/* Second Gallery Grid */}
        <motion.div
          className="grid h-auto gap-[10px] sm:gap-[14px] grid-cols-1 sm:grid-cols-3 sm:[grid-template-columns:4fr_2fr_5fr]"
        >
          {secondGridItems.map((item, index) => (
            <div key={item.id} className="h-[200px] sm:h-[206px]">
              <GalleryItem
                cardRevealVariants={cardRevealVariants}
                src={item.src}
                alt={item.alt}
                hasPlayButton={item.hasPlayButton}
                index={index + firstGridItems.length}
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  )
}