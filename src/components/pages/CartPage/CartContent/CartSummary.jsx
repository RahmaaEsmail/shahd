"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CartCheckout from '../CartCheckout/CartCheckout';

// Animation variants - preserving exact design
const summaryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.3
    }
  })
};

const buttonVariants = {
  hover: {
    scale: 1.02,
    transition: { duration: 0.2 }
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 }
  }
};

export default function CartSummary({ itemCount = 4, subtotal = 23.00 }) {
  const shipping = 23.00;
  const total = subtotal + shipping;

  const [openCheckout, setOpenCheckout] = useState(false);

  return (
    <motion.div
      className="w-full flex flex-col gap-8 font-poppins"
      variants={summaryVariants}
      initial="hidden"
      whileInView="visible"
    >
      <motion.h2
        className="text-primary font-semibold text-md border-b-2 border-primary pb-4"
        variants={itemVariants}
        custom={0}
      >
        Order Summary
      </motion.h2>

      <div className="flex flex-col gap-6 px-2">
        <motion.div
          className="flex justify-between items-center uppercase"
          variants={itemVariants}
          custom={1}
        >
          <span className="text-md font-bold tracking-[-0.3px] text-primary">{itemCount} Products</span>
          <motion.span
            key={subtotal}
            className="text-md font-semibold text-[#414141]"
            initial={{ scale: 1 }}
            whileInView={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 0.3 }}
          >
            {subtotal.toFixed(2)} S.R
          </motion.span>
        </motion.div>

        <motion.div
          className="flex justify-between items-center uppercase"
          variants={itemVariants}
          custom={2}
        >
          <span className="text-md font-bold tracking-[-0.3px] text-primary">Shipping</span>
          <span className="text-md font-semibold text-[#414141]">{shipping.toFixed(2)} S.R</span>
        </motion.div>
      </div>

      {/* Glassmorphism Total Section - Exact design preserved */}
      <motion.div
        className="relative flex justify-between bg-white/6 rounded-[24px] p-[24px_20px] overflow-hidden"
        style={{
          boxShadow: `
            -0.13px -0.03px 4.62px 0px rgba(255, 255, 255, 0.126) inset,
            -0.23px 0.06px 9.4px 0px rgba(255, 255, 255, 0.126) inset,
            1.2px -0.03px 48px -12px rgba(0, 0, 0, 0.15)
          `,
        }}
        variants={itemVariants}
        custom={3}
      >
        <span className="text-md font-bold tracking-[-0.3px] text-primary uppercase">Total</span>
        <motion.span
          key={total}
          className="text-md font-semibold text-[#414141]"
          initial={{ scale: 1 }}
          whileInView={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 0.3 }}
        >
          {total.toFixed(2)} S.R
        </motion.span>
      </motion.div>

      <motion.button
        onClick={() => setOpenCheckout(true)}
        style={{
          background: "linear-gradient(90deg, #DDB2B5 0%, #EFD4CE 100%)"
        }}
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        className="w-full md:w-fit md:ms-auto py-4  px-10 mt-4 rounded-full text-white text-md font-normal uppercase transition-colors shadow-lg shadow-[#EFD4CE]/40"
      >
        Check Out
      </motion.button>

      <CartCheckout  open={openCheckout} setOpen={setOpenCheckout}/>
    </motion.div>
  );
}