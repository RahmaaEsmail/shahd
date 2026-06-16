"use client";

import React from 'react';
import { motion } from 'framer-motion';
import HomeBannerContentWithImage from './HomeBannerContentWithImage';
import HomeBannerSliderContent from './HomeBannerSliderContent';
import HomeBannerMobileSwiper from './HomeBannerMobileSwiper';

export default function HomeBanner() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Mobile: Normal Swiper (hidden on xl+) */}
      <div className="xl:hidden">
        <HomeBannerMobileSwiper />
      </div>

      {/* Desktop: Two-column design (hidden below xl) */}
      <div className="hidden xl:block relative z-10 px-4 sm:px-8 lg:px-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex xl:flex-row gap-6 items-stretch lg:pt-14 pb-5"
        >
          {/* Left Side - Main Banner Content */}
          <div className="flex-[1.2]">
            <HomeBannerContentWithImage />
          </div>

          {/* Right Side - Slider Content */}
          <div className="flex-[0.6]">
            <HomeBannerSliderContent />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
