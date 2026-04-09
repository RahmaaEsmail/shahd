"use client";
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const tabs = [
  { id: 1, name: 'Hair care' },
  { id: 2, name: "skin care" },
  { id: 3, name: "bride plan" },
  { id: 4, name: "nutrition coaching" },
  { id: 5, name: "Weight management" }
]

const tabContent = {
  1: {
    problem: "Thinning, loss, or dullness that store-bought shampoos can’t fix.",
    solution: "A medical-grade scalp and follicle analysis. We'll identify internal triggers and build a targeted growth protocol tailored to your hair biology.",
    buttonText: "book my hair audit",
    problem_img: "/images/Coaching/3.png",
    solution_img: "/images/Coaching/4.png"
  },
  2: {
    problem: "Persistent acne, premature aging, or sensitivity that skincare products can't resolve.",
    solution: "Comprehensive skin analysis examining gut health, hormones, and lifestyle factors. Get a personalized treatment plan for lasting results.",
    buttonText: "book my skin consult",
    problem_img: "/images/Coaching/3.png",
    solution_img: "/images/Coaching/4.png"
  },
  3: {
    problem: "Pre-wedding stress affecting your skin, hair, and overall glow.",
    solution: "A complete 3-6 month bridal transformation program covering skin, hair, nutrition, and stress management for your special day.",
    buttonText: "book my bride plan",
    problem_img: "/images/Coaching/3.png",
    solution_img: "/images/Coaching/4.png"
  },
  4: {
    problem: "Confusion about what to eat for your unique body and goals.",
    solution: "Evidence-based nutrition coaching tailored to your lifestyle, preferences, and health objectives. No fad diets, just sustainable changes.",
    buttonText: "book nutrition coaching",
    problem_img: "/images/Coaching/3.png",
    solution_img: "/images/Coaching/4.png"
  },
  5: {
    problem: "Struggling with weight that fluctuates despite diet and exercise.",
    solution: "A metabolic approach to weight management addressing hormonal balance, stress, and lifestyle for sustainable, long-term results.",
    buttonText: "book weight consult",
    problem_img: "/images/Coaching/3.png",
    solution_img: "/images/Coaching/4.png"
  }
}

export default function CoachingExpert() {
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
      className='py-12 md:py-20 font-poppins'
    >
      <div className='max-w-[1440px] mx-auto px-4'>
        {/* Header Section */}
        <div className='text-center mb-10 md:mb-16'>
          <p className='text-[#7189A2] font-bold text-lg lg:text-[27px] mb-4'>
            Expert Online Coaching
          </p>
          <h3 className='text-[#DDB2B5] text-4xl md:text-6xl lg:text-[80px] uppercase font-bold leading-[1.1] max-w-5xl mx-auto'>
            Get expert guidance from anywhere
          </h3>

          <div className='flex flex-wrap justify-center gap-3 mt-10'>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 md:px-8 py-2.5 rounded-full border border-[#7189A2] text-sm md:text-base uppercase tracking-widest transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[#7189A2] text-white font-bold shadow-md"
                    : "bg-white text-[#838383] hover:bg-slate-50"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Diagonal Split Container */}
        <div className='relative w-full h-auto lg:h-[750px] rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl bg-white flex flex-col lg:block'>
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
              <div className='relative lg:absolute inset-0 w-full h-[450px] lg:h-full bg-[#b8c6c9]'>
                <Image
                  src={tabContent[activeTab].problem_img}
                  alt="Problem area"
                  fill
                  className='object-cover max-w-full lg:max-w-[50%] mix-blend-multiply opacity-90'
                  priority
                />

                <div className='absolute top-8 left-8 md:top-12 md:left-12 z-20 w-[150px] md:w-[250px]'>
                  <img 
                    src="/images/Coaching/Gemini_Generated_Image_qxqifhqxqifhqxqi-removebg-preview.png" 
                    alt="Problems Label"
                    className="w-full h-auto"
                  />
                </div>

                <div className='absolute bottom-8 left-8 md:bottom-12 md:left-12 z-20 max-w-[calc(100%-64px)] md:max-w-[360px] bg-white/20 backdrop-blur-xl border border-white/20 rounded-[30px] md:rounded-[35px] p-6 md:p-8 shadow-2xl'>
                  <h4 className='text-[#414141] font-semibold text-xl md:text-2xl mb-3'>The Problem</h4>
                  <p className='text-[#414141] font-normal text-base md:text-lg leading-relaxed'>
                    {tabContent[activeTab].problem}
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

                <div className='relative h-[600px] lg:h-full'>
                  <Image
                    src={tabContent[activeTab].solution_img}
                    alt="Solution area"
                    fill
                    className='object-cover lg:max-w-[55%] lg:ms-auto mix-blend-multiply opacity-90'
                    priority
                  />

                  <div className='absolute top-8 right-8 md:top-12 md:right-12 lg:right-0 z-20 w-[150px] md:w-[250px]'>
                    <img 
                      src="/images/Coaching/Screenshot__722_-removebg-preview.png" 
                      alt="Solutions Label"
                      className="w-full h-auto"
                    />
                  </div>

                  <div className='absolute bottom-8 right-8 left-8 md:left-auto md:bottom-12 md:right-12 z-20 max-w-full md:max-w-[480px] bg-white/15 backdrop-blur-2xl border border-white/30 rounded-[30px] md:rounded-[40px] p-8 md:p-12 shadow-2xl'>
                    <h4 className='text-[#414141] font-bold text-2xl md:text-3xl mb-4 md:mb-6'>The Solution</h4>
                    <p className='text-[#414141] text-base md:text-lg leading-relaxed mb-8 md:mb-12'>
                      {tabContent[activeTab].solution}
                    </p>

                    <Button className='w-full bg-[#7189A2] hover:bg-[#5d7287] text-white rounded-full py-6 md:py-10 uppercase text-base md:text-lg font-bold shadow-xl transition-all active:scale-95'>
                      {tabContent[activeTab].buttonText}
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