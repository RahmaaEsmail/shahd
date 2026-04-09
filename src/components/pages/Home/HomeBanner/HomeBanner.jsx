"use client";

import React from 'react';
import { motion } from 'framer-motion';
import HomeBannerContentWithImage from './HomeBannerContentWithImage';
import HomeBannerSliderContent from './HomeBannerSliderContent';

export default function HomeBanner() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="relative z-10 px-4 sm:px-8 lg:px-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col  xl:flex-row gap-8  items-stretch sm:pt-10 lg:pt-14 pb-10"
        >
          {/* Left Side - Main Banner Content */}
          <div className="w-full xl:flex-[1.2]">
            <HomeBannerContentWithImage />
          </div>

          {/* Right Side - Slider Content */}
          <div className="w-full xl:flex-[0.6]">
            <HomeBannerSliderContent />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
