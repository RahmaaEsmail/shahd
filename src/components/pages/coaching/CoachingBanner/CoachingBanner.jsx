"use client";
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function CoachingBanner({ data }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar") ? "ar" : i18n.language?.startsWith("sk") ? "sk" : "en";

  const bgImage = data?.image_url || "/SHAHD-IMAGE/Coaching/Frame 1000005536.webp";
  const title = data?.[`title_${lang}`] || data?.title_en;
  const description = data?.[`description_${lang}`] || data?.description_en || t('Coaching Banner Desc');

  return (
    <motion.div
      initial={{ opacity: 0, y: -24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.4, ease: "easeIn" }}
      className='min-h-screen relative overflow-hidden flex items-center'
    >
      <Image 
        src={bgImage} 
        fill
        className='object-cover z-0' 
        alt="Coaching banner image" 
        priority
      />
      <div className='absolute inset-0 bg-black/30 z-1' />

      <div className='relative z-10 w-full main-container mx-auto px-4 py-20 lg:py-0'>
        <div className='max-w-4xl flex flex-col justify-center items-center mx-auto text-center gap-6 md:gap-8'>
          <div className='flex  flex-col gap-4'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='flex flex-col md:flex-row md:justify-between gap-2 leading-none w-full'
            >
              {title ? (
                <h1 className='font-normal text-white text-4xl sm:text-5xl text-center w-full'>{title}</h1>
              ) : (
                <>
                  <h1 className='font-normal text-white text-5xl'>{t('Medical precision')}</h1>
                  <h1 className='font-normal text-white text-5xl'>{t('Holistic beauty')}</h1>
                </>
              )}
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='font-normal text-white/90 mt-4 font-poppins text-lg md:text-xl leading-relaxed'
            >
              {description}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-fit group cursor-pointer"
          >
            <div
              className="absolute -inset-0.5 rounded-full opacity-80 group-hover:opacity-100 transition-opacity"
              style={{
                background: "linear-gradient(90deg, #D19B9B 0%, #B6C7D6 100%)",
                boxShadow: "0px 4px 60px rgba(255, 255, 255, 0.2)",
              }}
            />
            <button className="relative bg-white w-[220px] md:w-[252px] rounded-full px-8 py-4 text-[#414141] font-bold text-base md:text-lg hover:bg-gray-50 transition-colors">
              {t('Book Now')}
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
