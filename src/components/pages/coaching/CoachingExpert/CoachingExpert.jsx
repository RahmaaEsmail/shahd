"use client";
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const tabs = [
  { id: 1, nameKey: 'Hair care' },
  { id: 2, nameKey: "skin care" },
  { id: 3, nameKey: "bride plan" },
  { id: 4, nameKey: "nutrition coaching" },
  { id: 5, nameKey: "Weight management" }
]

const tabContent = {
  1: {
    problemKey: "Hair Problem",
    solutionKey: "Hair Solution",
    buttonTextKey: "book my hair audit",
    problem_img: "/SHAHD-IMAGE/Coaching/3.webp",
    solution_img: "/SHAHD-IMAGE/Coaching/4.webp"
  },
  2: {
    problemKey: "Skin Problem",
    solutionKey: "Skin Solution",
    buttonTextKey: "book my skin consult",
    problem_img: "/SHAHD-IMAGE/Coaching/3.webp",
    solution_img: "/SHAHD-IMAGE/Coaching/4.webp"
  },
  3: {
    problemKey: "Bride Problem",
    solutionKey: "Bride Solution",
    buttonTextKey: "book my bride plan",
    problem_img: "/SHAHD-IMAGE/Coaching/3.webp",
    solution_img: "/SHAHD-IMAGE/Coaching/4.webp"
  },
  4: {
    problemKey: "Nutrition Problem",
    solutionKey: "Nutrition Solution",
    buttonTextKey: "book nutrition coaching",
    problem_img: "/SHAHD-IMAGE/Coaching/3.webp",
    solution_img: "/SHAHD-IMAGE/Coaching/4.webp"
  },
  5: {
    problemKey: "Weight Problem",
    solutionKey: "Weight Solution",
    buttonTextKey: "book weight consult",
    problem_img: "/SHAHD-IMAGE/Coaching/3.webp",
    solution_img: "/SHAHD-IMAGE/Coaching/4.webp"
  }
}

export default function CoachingExpert() {
  const { t  , i18n} = useTranslation();
  const [activeTab, setActiveTab] = useState(1);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Initial check on mount
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    
    checkScreenSize();

    // Listen for resize events
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const slantPath = 'polygon(52% 0, 100% 0, 100% 100%, 38% 100%)';

  return (
    <section 
      style={{background: "linear-gradient(180deg, rgba(255, 254, 254, 0.48) 0%, rgba(113, 137, 162, 0.48) 50%, rgba(255, 255, 255, 0.48) 100%)"}}
      className='py-12 font-poppins'
    >
      <div className='max-w-[1440px] mx-auto px-4'>
        {/* Header Section */}
        <div className='text-center mb-10'>
          <p className='text-[#7189A2] font-bold text-2xl mb-2'>
            {t('Expert Online Coaching')}
          </p>
          <h3 className='text-[#DDB2B5] text-3xl  uppercase font-normal font-main leading-[1.1] max-w-5xl mx-auto'>
            {t('Get expert guidance from anywhere')}
          </h3>

          <div className='flex flex-wrap justify-center gap-3 mt-4'>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-full border border-[#7189A2] text-sm  uppercase tracking-widest transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[#7189A2] text-white font-bold shadow-md"
                    : "bg-white text-[#838383] hover:bg-slate-50"
                }`}
              >
                {t(tab.nameKey)}
              </button>
            ))}
          </div>
        </div>

        {/* Diagonal Split Container */}
        <div className='relative w-full h-auto lg:h-[500px] rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl bg-white flex flex-col lg:block'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className='relative lg:absolute inset-0 w-full h-full'
            >
              {/* --- PROBLEM SIDE (LEFT) --- */}
              <div className={`relative lg:absolute inset-0 w-full h-[450px] lg:h-full bg-[#b8c6c9] ${i18n?.language == "ar" ? "me-auto!" : "ms-auto!"}`}>
                <Image
                  src={tabContent[activeTab].problem_img}
                  alt="Problem area"
                  fill
                  className={`object-contain max-w-full lg:max-w-[50%]  mix-blend-multiply opacity-90`}
                  priority
                />

                <div className='absolute top-8 left-8 md:top-12 md:left-12 z-20 w-[150px]'>
                  <img 
                    src="/SHAHD-IMAGE/Coaching/Gemini_Generated_Image_qxqifhqxqifhqxqi-removebg-preview.webp" 
                    alt="Problems Label"
                    className="w-full h-auto"
                  />
                </div>

                <div className='absolute bottom-8 left-8 md:bottom-12 md:left-12 z-20 max-w-[calc(100%-64px)] md:max-w-[360px] bg-white/20 backdrop-blur-xl border border-white/20 rounded-[30px] md:rounded-[35px] p-6 shadow-2xl'>
                  <h4 className='text-[#414141] font-semibold text-lg mb-3'>{t('The Problem')}</h4>
                  <p className='text-[#414141] font-normal text-base leading-relaxed'>
                    {t(tabContent[activeTab].problemKey)}
                  </p>
                </div>
              </div>

              {/* --- WHITE DIVIDER (Desktop Only) --- */}
              <div
                className='hidden lg:block absolute inset-0 w-full h-full z-[9] bg-white'
                style={{
                  clipPath: slantPath,
                  transform: 'translateX(-4px)' 
                }}
              />

              {/* --- SOLUTION SIDE (RIGHT) --- */}
              <div
                className='relative lg:absolute inset-0 w-full h-auto lg:h-full z-10 bg-[#dbbcb7]'
                style={{ clipPath: isLargeScreen ? slantPath : 'none' }}
              >
                <div className='lg:hidden absolute inset-0 bg-[#dbbcb7]' />

                <div className='relative h-[400px] lg:h-full'>
                  <Image
                    src={tabContent[activeTab].solution_img}
                    alt="Solution area"
                    fill
                    className={`object-cover lg:max-w-[55%] lg:${i18n?.language == "ar" ? "me-auto" :"ms-auto"} mix-blend-multiply opacity-90`}
                    priority
                  />

                  <div className='absolute top-8 right-8 md:top-12 md:right-12 z-20 w-[150px]'>
                    <img 
                      src="/SHAHD-IMAGE/Coaching/Screenshot__722_-removebg-preview.webp" 
                      alt="Solutions Label"
                      className="w-full h-auto"
                    />
                  </div>

                  <div className='absolute bottom-8 right-8 left-8 md:left-auto md:bottom-12 md:right-12 z-20 max-w-full md:max-w-[480px] bg-white/15 backdrop-blur-2xl border border-white/30 rounded-[30px] md:rounded-[40px] p-4 shadow-2xl'>
                    <h4 className='text-[#414141] font-bold text-lg mb-4'>{t('The Solution')}</h4>
                    <p className='text-[#414141] text-base leading-relaxed mb-8'>
                      {t(tabContent[activeTab].solutionKey)}
                    </p>

                    <Button className='w-full bg-[#7189A2] hover:bg-[#5d7287] text-white rounded-full py-6  uppercase text-base font-bold shadow-xl transition-all active:scale-95'>
                      {t(tabContent[activeTab].buttonTextKey)}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}