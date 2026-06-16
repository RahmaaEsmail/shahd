"use client";
import React from 'react'
import { motion } from 'framer-motion'
import StatisCard from './StatisCard'
import { useTranslation } from 'react-i18next'

// Animation variants for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

export default function AboutUsStatistics() {
  const { t } = useTranslation();
  const stats = [
    {
      id: 1,
      image: "/SHAHD-IMAGE/About/aboutImg1.webp",
      isPrimary: false,
      number: "1500 +",
      title: t("Happy clients")
    },
    {
      id: 2,
      image: "/SHAHD-IMAGE/About/aboutImg2.webp",
      isPrimary: true,
      number: "150 +",
      title: t("treatments")
    },
    {
      id: 3,
      image: "/SHAHD-IMAGE/About/aboutImg3.webp",
      isPrimary: false,
      number: "1200 +",
      title: t("natural results")
    },
    {
      id: 4,
      image: "/SHAHD-IMAGE/About/aboutImg4.webp",
      isPrimary: true,
      number: "100%",
      title: t("safe care")
    }
  ];

  return (
    <motion.div
      className='grid gap-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 lg:px-0'
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {stats.map((stat) => (
        <StatisCard
          key={stat.id}
          image={stat.image}
          isPrimary={stat.isPrimary}
          number={stat.number}
          title={stat.title}
        />
      ))}
    </motion.div>
  )
}