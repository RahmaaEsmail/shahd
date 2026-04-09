"use client";
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function AestheticGynecologyBanner() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  return (
    <div className='relative min-h-screen w-full py-20 xl:py-8 overflow-hidden flex items-center bg-[#1a1a1a]'>
      
      {/* 1. Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/aethesic/6953b487ed849b644340eea62251152efbd4f688.jpg"
          alt="Aesthetic Background"
          fill
          className='object-cover object-center scale-105'
          priority
        />
        {/* Figma-style Overlays: Darkens background for text readability */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      </div>

      {/* 2. Main Content Container */}
      <motion.div
        className='relative z-20 w-full main-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-24'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <div className='grid grid-cols-1 xl:grid-cols-12 gap-12 lg:gap-8'>
          
          {/* LEFT SIDE: Headline & CTA */}
          <div className='xl:col-span-6  flex flex-col items-center xl:items-start text-center xl:text-left gap-8 md:gap-12'>
            <motion.div variants={fadeInUp}>
              <h1 className="text-white text-6xl md:text-7xl xl:text-[85px] font-normal leading-[1.1] uppercase tracking-tight">
                Begin Your <br className='hidden lg:block' /> 
                <span className="block lg:inline">Women’s Health</span> <br  className='hidden lg:block'/>
                Journey.
              </h1>
            </motion.div>

            <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative w-fit  mx-auto xl:mx-0 mt-12 lg:mt-20 group cursor-pointer"
          >
            {/* Gradient border wrapper */}
            <div
              className="absolute -inset-0.5 rounded-full opacity-80 group-hover:opacity-100 transition-opacity"
              style={{
                background: "linear-gradient(90deg, #D19B9B 0%, #B6C7D6 100%)",
                boxShadow:
                  "0px 4px 100px 0px #FFFFFF40, -4px 0px 25px 0px #F7A5A5, 4px 0px 25px 0px #5D688A",
              }}
            />
            <button 
              onClick={() => router.push('/services')}
              className="relative bg-white rounded-full px-8 py-3 lg:py-4 text-primary font-medium text-base lg:text-lg hover:bg-gray-50 transition-colors uppercase"
            >
              Book your consultation
            </button>
          </motion.div>
          </div>

          {/* RIGHT SIDE: Responsive Card Cluster */}
          <div className='xl:col-span-6 w-full'>
            <div className='flex flex-col md:flex-row gap-4 lg:gap-5 h-auto lg:h-[480px] xl:h-[520px]'>
              
              {/* Vertical Stack: Info Cards */}
              <div className="flex flex-col gap-4 lg:gap-5 flex-1 order-2 md:order-1">
                {/* Glass Card 1 */}
                <motion.div 
                  variants={fadeInUp}
                  className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-[24px] md:rounded-[32px] p-6 md:p-8 flex items-center justify-center text-center shadow-xl"
                >
                  <p className="text-white text-sm md:text-base leading-relaxed font-light font-poppins">
                    Our gynecology services bring together clinical excellence, modern techniques, and care tailored to your needs.
                  </p>
                </motion.div>

                {/* Glass Card 2 */}
                <motion.div 
                  variants={fadeInUp}
                  className="flex-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-[24px] md:rounded-[32px] p-6 md:p-8 flex items-center justify-center text-center shadow-xl"
                >
                  <p className="text-white text-sm md:text-base leading-relaxed font-light font-poppins">
                    We support your intimate health with expert care, modern approaches, and treatment plans designed just for you.
                  </p>
                </motion.div>
              </div>

              {/* Portrait Image Card */}
              <motion.div 
                variants={fadeInUp}
                className="flex-1 min-h-[350px] md:min-h-full relative rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl border border-white/20 order-1 md:order-2"
              >
                <Image
                  src="/images/aethesic/069ebbd11859b4fb11af7a96fd1a5974030fed1e.jpg"
                  alt="Portrait Specialist"
                  fill
                  className='object-cover hover:scale-105 transition-transform duration-1000'
                />
              </motion.div>

            </div>
          </div>

        </div>
      </motion.div>

      {/* Optional: Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
    </div>
  )
}