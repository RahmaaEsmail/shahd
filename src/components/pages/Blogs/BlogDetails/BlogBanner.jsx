"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Calendar, Clock } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export default function BlogBanner({ blog }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="relative h-[120%] w-full">
        <Image
          src={blog.img}
          alt={blog.title}
          fill
          className="object-cover"
          priority
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FFF9F7]" />
      </motion.div>

      {/* Floating Elements (similar to AcademyBanner style) */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end items-center pb-24 px-4">
        <div className="max-w-7xl w-full mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-[#DDB2B5] text-white text-sm md:text-md font-normal uppercase tracking-[0.3em] px-8 py-2.5 rounded-full mb-8 inline-block shadow-2xl">
              {t(blog.category)}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-white text-5xl md:text-7xl lg:text-[110px] font-normal leading-none mb-10 drop-shadow-2xl"
          >
            {t(blog.title)}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex items-center justify-center gap-10 text-white/90 text-sm md:text-base font-poppins"
          >
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-[#DDB2B5]" />
              <span className="tracking-wide">{t(blog.date)}</span>
            </div>
            <div className="w-1.5 h-1.5 bg-[#DDB2B5] rounded-full opacity-50" />
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#DDB2B5]" />
              <span className="tracking-wide">{t('8 Minute Read')}</span>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative w-fit mx-auto mt-10 group cursor-pointer"
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
              onClick={() => router.push('/booking')}
              className="relative bg-white rounded-full px-8 py-4 text-primary font-medium text-base md:text-lg hover:bg-gray-50 transition-colors whitespace-nowrap">
              {t('Book Your Consultation')}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Subtle bottom fade for transition to content */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FFF9F7] to-transparent z-20" /> */}
    </section>
  );
}
