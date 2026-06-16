"use client";
import React from 'react'
import { motion } from 'framer-motion'
import HorseProductsTabs from './HorseProductTabs';
import { useTranslation } from 'react-i18next';

const headerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

export default function HorseProductsHeader({ setActiveTab, activeTab }) {
  const { t } = useTranslation();
  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className="content flex flex-col justify-center items-center gap-3"
    >
      <motion.p
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className='text-2xl font-bold text-dark-primary font-poppins text-center'
      >
        {t("Equestrian Essentials")}
      </motion.p>

      <motion.h3
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className='text-3xl font-normal text-primary text-center leading-tight max-w-4xl'
      >
        {t("Because horses deserve luxury too.")}
      </motion.h3>

      <motion.div variants={itemVariants}>
        <HorseProductsTabs setActiveTab={setActiveTab} activeTab={activeTab} />
      </motion.div>
    </motion.div>
  )
}