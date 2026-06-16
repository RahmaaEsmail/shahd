"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export default function HairTherapyBeforeAfterHeader() {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className="flex justify-between items-center mb-2"
    >
      {/* <h2 className="text-secondary text-2xl  font-bold font-poppins">
        {t("Before & After")}
      </h2>
      <motion.button
        onClick={() => router.push('/before-after')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group hidden md:flex items-center gap-2 bg-secondary hover:bg-[#5a7289] text-white px-6 py-3 rounded-full font-medium transition-colors duration-300"
      >
        <span className="text-lg font-poppins">{t("Show More")}</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </motion.button> */}

       <h2 className="text-secondary text-2xl  font-bold font-poppins">
        {t("Before After")}
      </h2>
      <motion.button
        onClick={() => router.push('/before-after')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group hidden md:flex items-center gap-2 bg-secondary hover:bg-[#5a7289] text-white px-4 py-2 rounded-full font-medium transition-colors duration-300"
      >
        <span className="text-base font-poppins">{t("Show More")}</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </motion.div>
  )
}
