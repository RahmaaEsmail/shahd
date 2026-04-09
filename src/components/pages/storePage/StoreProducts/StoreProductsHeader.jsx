"use client";
import React from 'react'
import { motion } from 'framer-motion'
import StoreProductsTabs from './StoreProductsTabs'

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

export default function StoreProductsHeader({ setActiveTab, activeTab }) {
  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className="content flex flex-col justify-center items-center gap-6"
    >
      <motion.p
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className='text-[27px] font-bold text-primary font-poppins text-center'
      >
        Our Products
      </motion.p>

      <motion.h3
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className='text-3xl md:text-5xl lg:text-[80px] font-normal text-primary text-center leading-tight'
      >
        Choose The products that perfect match
      </motion.h3>

      <motion.div variants={itemVariants}>
        <StoreProductsTabs setActiveTab={setActiveTab} activeTab={activeTab} />
      </motion.div>
    </motion.div>
  )
}