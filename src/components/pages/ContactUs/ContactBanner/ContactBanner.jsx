"use client";

import React from 'react';
import { motion } from 'framer-motion';

import { useTranslation } from 'react-i18next';

export default function ContactBanner() {
  const { t } = useTranslation();
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Scale Animation (Ken Burns Effect) */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/SHAHD-IMAGE/aboutImg9.webp')`,
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 backdrop-brightness-90" />
      </motion.div>

      {/* Content Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative text-center text-white z-10 px-4 max-w-5xl"
      >
        {/* Headline Animation */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl  font-bold tracking-[2px] leading-tight uppercase mb-10"
        >
          {t('Your Beauty Journey')} <br />
          {t('Is Almost')} <span className="italic font-light opacity-90">{t('Home')}</span>
        </motion.h1>

        {/* Glassmorphism Breadcrumb Animation */}
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-6 px-10 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl"
          whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.15)", scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <a href="/" className="text-[13px] font-bold tracking-[3px] uppercase hover:text-primary transition-colors">
            {t('Home')}
          </a>
          <span className="text-white/40 font-light">/</span>
          <span className="text-[13px] font-bold tracking-[3px] uppercase text-white/90">
            {t('Contact Us')}
          </span>
        </motion.div>
      </motion.div>

      {/* Wave Divider Animation */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-0 left-0 w-full leading-[0]"
      >
        <svg 
          className="relative block w-full h-[80px] md:h-[120px]" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320" 
          preserveAspectRatio="none"
        >
          <path 
            fill="#fff9f7" 
            d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,218.7C672,213,768,171,864,149.3C960,128,1056,128,1152,144C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </motion.div>
    </section>
  );
}