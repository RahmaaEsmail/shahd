"use client";
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Play } from 'lucide-react';
import GalleryItem from './HorseGalleryItem';

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
  const firstGridItems = [
    {
      id: 1,
      src: "/images/horse/cb11c78a3e1becfd276fd2dc6a9af6dfa483e5dd.jpg",
      alt: "woman with horse",
      hasPlayButton: true,
    },
    {
      id: 2,
      src: "/images/horse/4a9f0a37da338a592051eb0ac427e135186897f4.jpg",
      alt: "woman with horse",
      hasPlayButton: true,
    },
    {
      id: 3,
      src: "/images/horse/cbffc2a889a9d2156fd43ac9832e5a4ee7b7af82.jpg",
      alt: "woman with horse",
      hasPlayButton: true,
    },
    {
      id: 4,
      src: "/images/horse/c.jpg",
      alt: "woman with horse",
      hasPlayButton: false,
    }
  ];

  const secondGridItems = [
    {
      id: 5,
      src: "/images/horse/b843d07fc181f7bd85981644e3844b8e28c187a6.jpg",
      alt: "woman riding horse",
      hasPlayButton: true,
    },
    {
      id: 6,
      src: "/images/horse/1697b6d5d1a1c48e20be5d55fc6add12fcb8a0e5.jpg",
      alt: "woman riding silhouette",
      hasPlayButton: true,
    },
    {
      id: 7,
      src: "/images/horse/92037db9332b3173870907b4fe091bfa696444ac.jpg",
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
      className='relative w-full py-6 sm:py-4 overflow-hidden'
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
          className='flex w-full flex-col gap-6 mb-10'
        >
          <motion.p
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            className='text-lg sm:text-xl lg:text-[27px] text-center font-bold font-poppins text-dark-primary'
          >
            Equestrian Lifestyle Gallery
          </motion.p>

          <motion.h1
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            className='text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] text-center text-primary flex justify-center items-center gap-4 font-normal leading-tight'
          >
            A World of Grace, Strength &amp; Freedom
          </motion.h1>

          <motion.p
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            className="text-sm sm:text-base lg:text-base text-center font-poppins text-[#414141] font-normal tracking-[-0.3px] leading-7 max-w-4xl mx-auto"
          >
            This gallery captures moments from the equestrian lifestyle — where discipline meets elegance and every movement tells a story. The equestrian world represents balance, patience, and trust — values that shape Dr. Shahd's lifestyle and philosophy.
          </motion.p>
        </motion.div>

        {/* First Gallery Grid */}
        <motion.div
          className="grid h-auto gap-[10px] sm:gap-[14px] grid-cols-2 sm:grid-cols-4 mb-4 sm:mb-6"
        >
          {firstGridItems.map((item, index) => (
            <div key={item.id} className="h-[160px] sm:h-[306px]">
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
            <div key={item.id} className="h-[200px] sm:h-[306px]">
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