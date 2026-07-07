"use client";
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Play, X } from 'lucide-react';
import GalleryItem from './HorseGalleryItem';
import { useTranslation } from 'react-i18next';
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

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

export default function HorseGallery({ data }) {
  const { t, i18n } = useTranslation();
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const lang = i18n.language?.startsWith("ar") ? "ar" : i18n.language?.startsWith("sk") ? "sk" : "en";

  const firstGridItems = [
    {
      id: 1,
      src: "/SHAHD-IMAGE/horse/cb11c78a3e1becfd276fd2dc6a9af6dfa483e5dd.webp",
      alt: "woman with horse",
      hasPlayButton: true,
      media_type: 'video',
      video_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {
      id: 2,
      src: "/SHAHD-IMAGE/horse/4a9f0a37da338a592051eb0ac427e135186897f4.webp",
      alt: "woman with horse",
      hasPlayButton: true,
      media_type: 'video',
      video_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {
      id: 3,
      src: "/SHAHD-IMAGE/horse/cbffc2a889a9d2156fd43ac9832e5a4ee7b7af82.webp",
      alt: "woman with horse",
      hasPlayButton: true,
      media_type: 'video',
      video_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {
      id: 4,
      src: "/SHAHD-IMAGE/horse/c.webp",
      alt: "woman with horse",
      hasPlayButton: false,
      media_type: 'image',
      video_url: null
    }
  ];

  const secondGridItems = [
    {
      id: 5,
      src: "/SHAHD-IMAGE/horse/b843d07fc181f7bd85981644e3844b8e28c187a6.webp",
      alt: "woman riding horse",
      hasPlayButton: true,
      media_type: 'video',
      video_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {
      id: 6,
      src: "/SHAHD-IMAGE/horse/1697b6d5d1a1c48e20be5d55fc6add12fcb8a0e5.webp",
      alt: "woman riding silhouette",
      hasPlayButton: true,
      media_type: 'video',
      video_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {
      id: 7,
      src: "/SHAHD-IMAGE/horse/92037db9332b3173870907b4fe091bfa696444ac.webp",
      alt: "horse on beach",
      hasPlayButton: true,
      media_type: 'video',
      video_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    }
  ];

  // Map dynamic items or fallback to static items
  const isDynamic = data && data.length > 0;
  const normalizedItems = isDynamic
    ? data.map((item, idx) => ({
        id: item.id || idx,
        src: item.image_url,
        alt: item[`title_${lang}`] || item.title_en || "Gallery Item",
        hasPlayButton: item.media_type === 'video',
        video_url: item.video_url,
        media_type: item.media_type,
      }))
    : [
        ...firstGridItems,
        ...secondGridItems
      ];

  const firstGrid = normalizedItems.slice(0, 4);
  const secondGrid = normalizedItems.slice(4);

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
          {firstGrid.map((item, index) => (
            <div key={item.id} className="h-[160px] sm:h-[206px]">
              <GalleryItem
                cardRevealVariants={cardRevealVariants}
                src={item.src}
                alt={item.alt}
                hasPlayButton={item.hasPlayButton}
                index={index}
                onClick={() => setSelectedMedia(item)}
              />
            </div>
          ))}
        </motion.div>

        {/* Second Gallery Grid */}
        {secondGrid.length > 0 && (
          <motion.div
            className="grid h-auto gap-[10px] sm:gap-[14px] grid-cols-1 sm:grid-cols-3 sm:[grid-template-columns:4fr_2fr_5fr]"
          >
            {secondGrid.map((item, index) => (
              <div key={item.id} className="h-[200px] sm:h-[206px]">
                <GalleryItem
                  cardRevealVariants={cardRevealVariants}
                  src={item.src}
                  alt={item.alt}
                  hasPlayButton={item.hasPlayButton}
                  index={index + firstGrid.length}
                  onClick={() => setSelectedMedia(item)}
                />
              </div>
            ))}
          </motion.div>
        )}
      </motion.div>

      {/* Media Overlay Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          >
            {/* Click outside to close */}
            <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedMedia(null)} />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col items-center justify-center z-10 border border-[#AF7F73]/20"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 z-[110] bg-black/40 hover:bg-[#AF7F73] text-white p-2 rounded-full transition-all duration-300 hover:rotate-90 hover:scale-105 cursor-pointer flex items-center justify-center"
              >
                <X size={24} />
              </button>

              {selectedMedia.media_type === 'video' ? (
                <div className="w-full aspect-video bg-black flex items-center justify-center">
                  {hasMounted && selectedMedia.video_url ? (
                    <ReactPlayer
                      url={selectedMedia.video_url}
                      controls
                      playing={true}
                      width="100%"
                      height="100%"
                    />
                  ) : (
                    <div className="text-white">Loading player...</div>
                  )}
                </div>
              ) : (
                <div className="relative w-full h-[70vh] sm:h-[80vh] bg-black">
                  <Image
                    src={selectedMedia.src}
                    alt={selectedMedia.alt || "Gallery image"}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>
              )}
              
              {/* Title / Caption */}
              {selectedMedia.alt && (
                <div className="w-full bg-black/80 py-4 px-6 border-t border-[#AF7F73]/10 text-center">
                  <p className="text-white text-base sm:text-lg font-poppins font-medium">
                    {selectedMedia.alt}
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}