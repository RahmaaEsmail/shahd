"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../../ui/button';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/effect-fade';

const AUTOPLAY_DELAY = 5000;

const slides = [
  { id: 1, image: "/SHAHD-IMAGE/BannerImage/image_banner_1.webp" },
  { id: 2, image: "/SHAHD-IMAGE/BannerImage/Ellipse 10.webp" },
  { id: 3, image: "/SHAHD-IMAGE/BannerImage/Ellipse 11.webp" },
  { id: 4, image: "/SHAHD-IMAGE/BannerImage/Ellipse 12.webp" },
  { id: 5, image: "/SHAHD-IMAGE/BannerImage/Ellipse 13.webp" },
];

export default function HomeBannerMobileSwiper() {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isRtl = i18n.language === "ar";

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="relative w-full h-[80vh] rounded-xl!  overflow-hidden bg-black mt-2" dir={isRtl ? "rtl" : "ltr"}>

      {/* ── Background image slides ── */}
      <Swiper
        onSwiper={(s) => (swiperRef.current = s)}
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: AUTOPLAY_DELAY, disableOnInteraction: false }}
        loop
        onSlideChange={handleSlideChange}
        className="w-full h-full rounded-md! orverflow-hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Image
              src={slide.image}
              alt="Dr. Shahd Awad"
              fill
              className="object-cover rounded-md! object-top scale-105"
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ── Gradient layers ── */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
      </div>

      {/* ── Top bar: brand symbol + slide counter ── */}
      <div className="absolute top-10 inset-x-0 z-20 flex items-center justify-between px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
          className="relative w-9 h-9"
        >
          <Image src="/SHAHD-IMAGE/symbol 1.webp" fill alt="Symbol" className="object-contain" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-2"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={activeIndex}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.3 }}
              className="font-main text-3xl text-white leading-none"
            >
              {String(activeIndex + 1).padStart(2, '0')}
            </motion.span>
          </AnimatePresence>
          <div className="flex flex-col gap-1">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`w-px transition-all duration-300 ${i === activeIndex ? 'h-4 bg-primary' : 'h-2 bg-white/30'}`}
              />
            ))}
          </div>
          <span className="font-main text-base text-white/30 leading-none">
            {String(slides.length).padStart(2, '0')}
          </span>
        </motion.div>
      </div>

      {/* ── Animated content per slide ── */}
      <div className="absolute inset-x-0 bottom-0 z-20 px-6 pb-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Subtitle pill */}
            <div className="inline-flex items-center gap-2 backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <span className="font-poppins text-[11px] tracking-[0.2em] uppercase text-white/90">
                {t("Meet Dr. Shahd Awad")}
              </span>
            </div>

            {/* Main heading — Bebas Neue big editorial style */}
            <div className="leading-[0.88] mb-6">
              <h1 className="font-main text-[40px] sm:text-[72px] uppercase text-white">
                {t("Glow in All Areas of")}
              </h1>
              <h1 className="font-main text-[40px] sm:text-[72px] uppercase text-primary">
                {t("Your Life With")}
              </h1>
              <h1 className="font-main text-[40px] sm:text-[72px] uppercase text-secondary">
                {t("Dr.Shahd Awad")}
              </h1>
            </div>

            {/* CTA row */}
            <div className="flex items-center gap-4">
              <Button
                onClick={() => router.push('/services')}
                className="bg-primary text-white rounded-full px-7 py-5 text-xs font-poppins font-normal uppercase tracking-widest hover:bg-dark-primary transition-all duration-300 shadow-lg shadow-primary/30"
              >
                {t("Get Start")}
              </Button>
              <button
                onClick={() => router.push('/store')}
                className="group flex items-center gap-2 text-white/70 text-xs font-poppins uppercase tracking-widest hover:text-white transition-colors duration-300"
              >
                {t("Explore")}
                <span className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white/70 transition-colors duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Segmented progress bar ── */}
        <div className="flex items-center gap-1.5 mt-6">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => swiperRef.current?.slideToLoop(i)}
              className="relative h-[2px] flex-1 bg-white/15 overflow-hidden rounded-full cursor-pointer"
            >
              {i === activeIndex && (
                <motion.div
                  key={`fill-${activeIndex}`}
                  className="absolute inset-y-0 left-0 bg-primary rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: AUTOPLAY_DELAY / 1000, ease: 'linear' }}
                />
              )}
              {i < activeIndex && (
                <div className="absolute inset-0 bg-primary/50 rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
