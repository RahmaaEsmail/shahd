"use client";
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Breadcrumb } from '@/components/shared/Breadcrumb';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Booking' },
];

export default function BookingBanner() {
  const router = useRouter();
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -24,
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{ once: false }}
      transition={{ duration: 0.4, ease: "easeIn" }}
      className='min-h-screen relative flex flex-col justify-center overflow-hidden'>
      {/* Background Image - with relative/absolute fix for mobile */}
      <div className="absolute inset-0">
        <Image 
          src="/images/Booking/Frame 1000005536.webp" 
          priority 
          fill
          className='object-cover' 
          alt="service banner image" 
        />
        <div className="absolute inset-0 bg-black/20" /> {/* Subtle overlay for text readability */}
      </div>

      <div className='relative z-10 w-full pt-30 pb-10 px-4'>
        <div className='main-container flex flex-col items-center justify-center min-h-screen lg:min-h-[80vh]'>
          <div className='flex flex-col items-center max-w-5xl mx-auto'>
            <h1 className='font-normal text-white text-center text-4xl sm:text-6xl lg:text-[100px] leading-[1.1] mb-6'>
              Start Your Personalized Care Journey
            </h1>
            
            <p className='font-normal max-w-2xl text-white/90 mx-auto mt-4 text-center font-poppins text-lg sm:text-2xl leading-relaxed mb-10'>
              Book your consultation with Dr. Shahd and take the first step toward medically guided beauty, wellness, and confidence.
            </p>

          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative w-fit mx-auto mt-12 lg:mt-20 group cursor-pointer"
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
              explore the services
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
