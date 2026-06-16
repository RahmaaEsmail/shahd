"use client";
import Image from 'next/image'
import { useTranslation } from 'react-i18next';
import {motion} from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function AcademyLicense() {
  const { t , i18n } = useTranslation();

  return (
    <motion.div
    dir="ltr"
      initial={{ opacity: 0, y: -24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.4, ease: "easeIn" }}
      className='min-h-screen  my-4 py-3 relative overflow-hidden flex items-center'
    >
      <Image 
        src="/SHAHD-IMAGE/Academy/Component 18.webp" 
        fill
        className='object-cover z-0' 
        alt="License prep background" 
      />
      <div className='absolute inset-0 bg-black/30 z-1' />

      <div className='relative z-10 w-full main-container mx-auto px-4 py-20 lg:py-0 text-center'>
        <div className='max-w-7xl mx-auto flex flex-col gap-8 md:gap-10'>
          <div className='flex flex-col gap-4'>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className='text-white font-poppins text-lg md:text-xl  font-bold'
            >
              {t('License Exam Prep')}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className='font-normal text-white text-4xl leading-tight'>
                {t('Study Smarter. Pass with Pride.')}
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='font-normal text-white/90 mt-4 font-poppins text-base md:text-lg max-w-4xl mx-auto leading-relaxed'
            >
              {t('Academy License Desc')}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-fit mx-auto mt-6"
          >
            <div
              className="absolute -inset-0.5 rounded-full opacity-80 group-hover:opacity-100 transition-opacity"
              style={{
                background: "linear-gradient(90deg, #D19B9B 0%, #B6C7D6 100%)",
                boxShadow: "0px 4px 60px rgba(255, 255, 255, 0.2)",
              }}
            />
            <button className="relative bg-white w-[220px] md:w-[280px] rounded-full px-8 py-4 font-bold text-[#414141] md:text-lg hover:bg-gray-50 transition-colors">
              {t('Get the Exam Prep Bundle')}
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
