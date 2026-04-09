"use client";

import React from 'react';
import { motion } from 'framer-motion';
import CartProduct from './CartProduct';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      delay: 0.1
    }
  }
};

const productListVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

export default function CartTable() {
  const cartItems = [1, 2, 3, 4]; // Placeholder for your actual cart state

  return (
    <motion.div 
      className="col-span-1"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
    >
      {/* Table Headers - Fixed for mobile */}
      <motion.div 
        className="hidden md:grid grid-cols-[1.5fr_2fr_1fr_1fr_0.5fr] pb-4 border-b-2 border-primary text-primary font-poppins text-lg lg:text-[22px] font-semibold capitalize tracking-wider"
        variants={headerVariants}
      >
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Products
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25 }}
        >
          Description
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          Quantity
        </motion.span>
        <motion.span 
          className="text-center"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35 }}
        >
          Price
        </motion.span>
        <motion.span 
          className="text-right"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          Delete
        </motion.span>
      </motion.div>

      <motion.div 
        className="flex flex-col"
        variants={productListVariants}
      >
        {cartItems.map((item, idx) => (
          <CartProduct 
            item={item} 
            key={idx} 
            index={idx}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}