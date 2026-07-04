"use client";
import Image from 'next/image';
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

const data = [
  {
    id: 1,
    img: "/SHAHD-IMAGE/hair-therapy/Frame 1000005833 (1).webp",
    titleKey: "Hair Journey Step 1",
  },
  {
    id: 2,
    img: "/SHAHD-IMAGE/hair-therapy/Frame 1000005833 (2).webp",
    titleKey: "Hair Journey Step 2",
  },
  {
    id: 3,
    img: "/SHAHD-IMAGE/hair-therapy/Frame 1000005833 (3).webp",
    titleKey: "Hair Journey Step 3",
  },
  {
    id: 4,
    img: "/SHAHD-IMAGE/hair-therapy/Frame 1000005833 (4).webp",
    titleKey: "Hair Journey Step 4",
  }
];

export default function HairTherapyAbout({ data }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar")
    ? "ar"
    : i18n.language?.startsWith("sk")
      ? "sk"
      : "en";

  const subtitle = data?.ht_about_main?.[`subtitle_${lang}`] || data?.ht_about_main?.subtitle_en || t("About The Surgery");
  const title = data?.ht_about_main?.[`title_${lang}`] || data?.ht_about_main?.title_en || t("What is hair transplant?");
  const mainImage = data?.ht_about_main?.image_url || "/SHAHD-IMAGE/hair-therapy/Image_fx - 2026-02-04T001320.240 1.webp";

  const aboutCards = data?.ht_about_cards && data.ht_about_cards.length > 0
    ? data.ht_about_cards.map((item, idx) => ({
        id: item.id,
        img: item.image_url || item.image || `/SHAHD-IMAGE/hair-therapy/Frame 1000005833 (${(idx % 4) + 1}).webp`,
        title: item[`title_${lang}`] || item.title_en || item.title_sk || item.title_ar || ""
      }))
    : [
        {
          id: 1,
          img: "/SHAHD-IMAGE/hair-therapy/Frame 1000005833 (1).webp",
          title: t("Hair Journey Step 1"),
        },
        {
          id: 2,
          img: "/SHAHD-IMAGE/hair-therapy/Frame 1000005833 (2).webp",
          title: t("Hair Journey Step 2"),
        },
        {
          id: 3,
          img: "/SHAHD-IMAGE/hair-therapy/Frame 1000005833 (3).webp",
          title: t("Hair Journey Step 3"),
        },
        {
          id: 4,
          img: "/SHAHD-IMAGE/hair-therapy/Frame 1000005833 (4).webp",
          title: t("Hair Journey Step 4"),
        }
      ];

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
      className="py-10 relative min-h-fit lg:min-h-[80vh] overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F3E5E6 50%, #FFFFFF 100%)"
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="main-container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch px-4 sm:px-6 lg:px-8">
        
        {/* Left Content */}
        <div className="flex flex-col gap-8 order-2 lg:order-1">
          <div className="space-y-2">
            <motion.span 
              className="text-secondary font-bold text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] font-poppins inline-block"
              variants={badgeVariants}
            >
              {subtitle}
            </motion.span>
            
            <motion.h2 
              className="text-primary text-3xl  font-light leading-[1.1] uppercase tracking-tight"
              variants={titleVariants}
            >
              {title}
            </motion.h2>
          </div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6"
            variants={containerVariants}
          >
            {aboutCards.map((item, index) => (
              <motion.div 
                key={item.id} 
                className="bg-white/40 border border-white/60 backdrop-blur-md rounded-[24px] sm:rounded-[32px] p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-all duration-300 h-full"
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
                    className="text-[#414141] text-sm font-medium font-poppins leading-relaxed"
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
            className="relative w-full h-full min-h-[350px] max-w-[540px] lg:max-w-none rounded-[32px] overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={mainImage}
              alt="Dr. Shahd Hair Transplant"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  );
}