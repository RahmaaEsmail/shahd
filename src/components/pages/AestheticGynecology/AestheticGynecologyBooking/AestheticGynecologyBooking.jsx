"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function AestheticGynecologyBooking() {
  const { t } = useTranslation();
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  return (
    <section
      className="min-h-[85vh] relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/SHAHD-IMAGE/aethesic/4faec5660326699923b9d63848afd4e878631b30.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Gradient Overlay: 
          Matches your specific linear-gradient for that warm, 
          faded transition at the bottom.
      */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(221, 178, 181, 0.414) 65%, rgba(221, 178, 181, 0.69) 100%)",
        }} 
      />

      {/* Content Wrapper */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="main-container relative z-10 mx-auto px-6 w-full flex flex-col justify-center items-center text-center text-white"
      >
        <div className="flex flex-col items-center justify-center max-w-7xl">
          
          <motion.h1 
            variants={itemVariants}
            className="text-[18px] md:text-[24px] font-bold text-white font-poppins uppercase mb-2"
          >
            {t("Book Now Title")}
          </motion.h1>

          {/* Responsive Typography: 
              Scales from 45px on small screens to 120px on desktop 
          */}
          <motion.p 
            variants={itemVariants}
            className="text-[45px]  font-normal text-white leading-[1.1] tracking-[2px] mb-12 max-w-[1200px]"
          >
            {t("First Step Health")}
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-5 md:gap-8 items-center justify-center w-full"
          >
            {/* --- Button 1: Book Consultation --- */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-full sm:w-fit group cursor-pointer"
            >
              {/* Specialized Glow/Gradient Border */}
              <div
                className="absolute -inset-0.5 rounded-full opacity-80 group-hover:opacity-100 transition-opacity"
                style={{
                  background: "linear-gradient(90deg, #D19B9B 0%, #B6C7D6 100%)",
                  boxShadow: "0px 4px 100px 0px #FFFFFF40, -4px 0px 25px 0px #F7A5A5, 4px 0px 25px 0px #5D688A",
                }}
              />
              <button
                className="relative w-full bg-white rounded-full px-12 py-4 lg:py-5 text-primary font-semibold text-base lg:text-lg hover:bg-gray-50 transition-colors uppercase tracking-wider"
              >
                {t("Book consultation button")}
              </button>
            </motion.div>

            {/* --- Button 2: Contact Clinic --- */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-full sm:w-fit group cursor-pointer"
            >
              <button
                style={{
                  background: "linear-gradient(90deg, #DDB2B5 0%, #EFD4CE 100%)",
                }}
                className="relative w-full rounded-full px-12 py-4 lg:py-5 text-white font-semibold text-base lg:text-lg transition-all uppercase tracking-wider border border-white/30 shadow-lg"
              >
                {t("Contact Clinic button")}
              </button>
            </motion.div>

          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}