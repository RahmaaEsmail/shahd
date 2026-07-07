"use client";
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function ProductDetailsRealResult({ data }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar") ? "ar" : i18n.language?.startsWith("sk") ? "sk" : "en";

  const afterAppRaw = data?.after_application || [];
  const activeAppObj = afterAppRaw.find(item => item.lang === lang) || afterAppRaw.find(item => item.lang === "en");
  const appStats = activeAppObj?.text || [];

  const afterWeeksRaw = data?.after_weeks || [];
  const activeWeeksObj = afterWeeksRaw.find(item => item.lang === lang) || afterWeeksRaw.find(item => item.lang === "en");
  const weekStats = activeWeeksObj?.text || [];

  const fallbackAppStats = [
    { label: "100%", value: t("that it has a pleasant foam") }
  ];

  const fallbackWeekStats = [
    { label: "94%", value: t("that skin feels smoother") }
  ];

  const renderedAppStats = appStats.length > 0 ? appStats : fallbackAppStats;
  const renderedWeekStats = weekStats.length > 0 ? weekStats : fallbackWeekStats;

  const realResultImage = data?.real_results_image || "/SHAHD-IMAGE/product-details/Group 30.webp";

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const statCardVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.1,
        type: "spring",
        stiffness: 100
      }
    })
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.1 }}
      className='relative min-h-[600px]  py-12'
      style={{
        background: "url('/SHAHD-IMAGE/product-details/c17080f024061945d283c30609d7dfd468f6fbf8.webp')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover"
      }}
    >
      {/* Background overlay with opacity */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-white/75"
      />
 
      <motion.div 
        className='main-container relative z-10'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
      >
        <motion.h4 
          variants={itemVariants}
          className={`text-primary text-4xl  font-normal mb-8  text-center ${i18n?.language == "ar" ? "md:text-right" :"md:text-left"}`}
        >
          {t('Real results')}
        </motion.h4>
 
        <div className='flex flex-col lg:grid items-stretch lg:grid-cols-[1fr_1.5fr] gap-7'>
          {/* Left side - Image */}
          <motion.div 
            variants={imageVariants}
            whileHover="hover"
            className='rounded-[32px] w-full max-w-[535px] mx-auto lg:mx-0 relative overflow-hidden aspect-535/500 shadow-2xl'
          >
            <Image 
              src={realResultImage} 
              fill
              className='object-cover transition-transform duration-500 group-hover:scale-105' 
              alt={t("real result image")}
              sizes="(max-width: 1024px) 100vw, 535px"
            />
          </motion.div>
 
          {/* Right side - Stats */}
          <div className='flex flex-col gap-8 md:gap-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10'>
              {/* Left column stats */}
              <motion.div 
                className="flex flex-col gap-6"
                variants={containerVariants}
              >
                <motion.h3 
                  variants={itemVariants}
                  className={`text-primary capitalize text-xl   font-semibold font-poppins ${i18n?.language == "ar" ? "border-r-4  pr-4" : "border-l-4  pl-4"} border-primary pl-4`}
                >
                  {t('after the 1st application:')}
                </motion.h3>
                
                {renderedAppStats.map((item, index) => (
                  <motion.div
                    key={`left-stat-${index}`}
                    custom={index}
                    variants={statCardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    whileHover={{ 
                      x: 8,
                      transition: { duration: 0.2 }
                    }}
                    className='flex flex-col gap-1 pb-4 border-b border-primary/20'
                  >
                    <motion.p 
                      className='text-xl  font-poppins font-semibold text-gray-900'
                      whileHover={{ color: "#DDB2B5" }}
                    >
                      {t(item.label)}
                    </motion.p>
                    <p className='text-base  font-poppins font-normal text-gray-700'>{t(item.value)}</p>
                  </motion.div>
                ))}
              </motion.div>
 
              {/* Right column stats */}
              <motion.div 
                className="flex flex-col gap-6"
                variants={containerVariants}
              >
                <motion.h3 
                  variants={itemVariants}
                  className={`text-primary capitalize text-xl font-semibold font-poppins  border-primary ${i18n?.language == "ar" ? "border-r-4  pr-4" : "border-l-4  pl-4"}`}
                >
                  {t('after 4 weeks:')}
                </motion.h3>
                
                {renderedWeekStats.map((item, index) => (
                  <motion.div
                    key={`right-stat-${index}`}
                    custom={index + 4}
                    variants={statCardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    whileHover={{ 
                      x: 8,
                      transition: { duration: 0.2 }
                    }}
                    className='flex flex-col gap-1 pb-4 border-b border-primary/20'
                  >
                    <motion.p 
                      className='text-xl font-poppins font-semibold text-gray-900'
                      whileHover={{ color: "#DDB2B5" }}
                    >
                      {t(item.label)}
                    </motion.p>
                    <p className='text-base font-poppins font-normal text-gray-700'>{t(item.value)}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
 
            {/* Footer text */}
            {/* <motion.p 
              variants={itemVariants}
              className='text-sm md:text-base font-poppins text-gray-500 italic mt-4 leading-relaxed'
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              *consumer use test under dermatological control with 31 women between 18 and 35 years, daily use in the morning and evening.
            </motion.p> */}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}