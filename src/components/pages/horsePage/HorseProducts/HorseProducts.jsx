"use client";
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import HorseProductsHeader from './HorseProductsHeader';
import HorseProductsGrid from './HorseProductsGrid';

export default function HorseProducts() {
  const [activeTab, setActiveTab] = useState(1);
  const router = useRouter();

  return (
    <section
      style={{
        backgroundImage: "url('/images/store/Desktop - 20.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      className='relative w-full py-16 lg:py-25 min-h-screen'
    >
      {/* Overlay Layer */}
      <div
        className='absolute inset-0 w-full h-full'
        style={{
          background: "linear-gradient(180deg, rgba(255, 255, 255, 0.79) 0%, rgba(221, 178, 181, 0.79) 50%, rgba(255, 255, 255, 0.79) 100%)"
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full">
        <div className="main-container mx-auto px-4 flex flex-col items-center">
          <HorseProductsHeader setActiveTab={setActiveTab} activeTab={activeTab} />

          <AnimatePresence mode="wait">
            <HorseProductsGrid key={activeTab} activeTab={activeTab} />
          </AnimatePresence>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, type: "spring" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/products')}
            className="mt-12 w-[180px] lg:w-[189px] h-[48px] lg:h-[52px] rounded-full text-white flex justify-center items-center text-lg lg:text-2xl font-normal bg-gradient-to-r from-[#DDB2B5] to-[#EFD4CE] hover:shadow-lg transition-all duration-300 mx-auto"
          >
            See more
          </motion.button>
        </div>
      </div>
    </section>
  )
}