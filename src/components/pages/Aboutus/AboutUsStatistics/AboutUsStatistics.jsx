"use client";
import React from 'react'
import { motion } from 'framer-motion'
import StatisCard from './StatisCard'

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
  const stats = [
    {
      id: 1,
      image: "/images/About/aboutImg1.png",
      isPrimary: false,
      number: "1500 +",
      title: "Happy clients"
    },
    {
      id: 2,
      image: "/images/About/aboutImg2.png",
      isPrimary: true,
      number: "150 +",
      title: "treatments"
    },
    {
      id: 3,
      image: "/images/About/aboutImg3.png",
      isPrimary: false,
      number: "1200 +",
      title: "natural results"
    },
    {
      id: 4,
      image: "/images/About/aboutImg4.png",
      isPrimary: true,
      number: "100%",
      title: "safe care"
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