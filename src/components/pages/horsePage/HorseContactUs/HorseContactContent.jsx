'use client';
import React from 'react'
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function HorseContactContent() {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className="flex flex-col mx-auto max-w-7xl text-left"
    >
      <motion.div className="flex flex-col mx-auto max-w-7xl text-left">
        <motion.h3 className='font-bold text-dark-primary font-poppins text-2xl'>
          {t("Contact Us")}
        </motion.h3>

        <motion.p
          className='text-primary font-normal text-3xl leading-tight'
        >
          {t("Start Your Glow Journey")}
        </motion.p>

        <motion.p className='text-text text-base font-poppins leading-8 mt-0'>
          {t("Horse Contact Desc")}
        </motion.p>
      </motion.div>
    </motion.div>
  )
}
