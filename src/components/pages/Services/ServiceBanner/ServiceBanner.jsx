"use client";
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import { Breadcrumb } from '@/components/shared/Breadcrumb';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Services' },
];

export default function ServiceBanner() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.4, ease: "easeIn" }}
      // Use min-h-screen but allow content to expand if needed on very small devices
      className='min-h-screen relative flex flex-col justify-center overflow-hidden w-full'
    >
      {/* Background Section */}
      <div className="absolute inset-0">
        <Image 
          src="/images/Services/servicesBg.png" 
          fill
          className='object-cover' 
          alt="service banner image" 
          priority
          quality={90}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.8) 100%)"
          }}
        />
      </div>

      {/* Content Section */}
      <div className='relative z-10 w-full flex flex-col items-center justify-center px-4 py-20 lg:pt-32'>
        <div className='max-w-7xl mx-auto pt-10 lg:pt-0 w-full flex flex-col items-center text-center'>
          
          {/* Main Heading with Fluid Typography */}
          <h1 className='font-normal text-white text-center text-3xl sm:text-5xl md:text-6xl lg:text-[100px] leading-[1.2] lg:leading-[1.1] mb-6 max-w-5xl'>
            Discover the Art of <span className="italic lg:not-italic font-light lg:font-normal">Subtle Beauty</span>
          </h1>
          
          {/* Subtext with responsive width and size */}
          <p className='font-normal max-w-sm sm:max-w-xl md:max-w-3xl text-white/90 mx-auto text-center font-poppins text-base sm:text-lg lg:text-2xl leading-relaxed mb-8 lg:mb-12'>
            At Dr. Shahd Awad Clinic, we believe that true beauty lies in balance and confidence. Explore our range of advanced treatments designed to enhance your natural elegance.
          </p>

          {/* Breadcrumb - Hidden on very small screens if necessary, or styled for fit */}
          <div className="mb-10 lg:mb-14">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Responsive Button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative w-fit mx-auto group cursor-pointer"
          >
            {/* Gradient border wrapper */}
            <div
              className="absolute -inset-0.5 rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "linear-gradient(90deg, #D19B9B 0%, #B6C7D6 100%)",
                boxShadow: "0px 4px 60px 0px rgba(255, 255, 255, 0.2), -4px 0px 20px 0px rgba(247, 165, 165, 0.4), 4px 0px 20px 0px rgba(93, 104, 138, 0.4)",
              }}
            />
            <button className="relative bg-white rounded-full px-6 py-3 lg:px-10 lg:py-4 text-primary font-semibold text-sm lg:text-lg hover:bg-gray-50 transition-colors uppercase tracking-widest whitespace-nowrap">
              Explore Our services
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}