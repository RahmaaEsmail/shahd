"use client";

import React from 'react';
import { motion } from 'framer-motion';
import CartProduct from './CartProduct';
import CartSummary from './CartSummary';
import CartTable from './CartTable';

// Animation variants - only adding animations, no design changes
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

const productListVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

const summaryVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      delay: 0.2
    }
  }
};

export default function CartContent() {
  // Sample cart items - replace with your actual cart data
  const [cartItems, setCartItems] = React.useState([
    { id: 1, name: "Gentle Foaming Cleanser", price: 23.00, image: "/SHAHD-IMAGE/Cart/Rectangle 43.webp" },
    { id: 2, name: "Moisturizing Cream", price: 35.00, image: "/SHAHD-IMAGE/Cart/Rectangle 43.webp" },
    { id: 3, name: "Face Serum", price: 45.00, image: "/SHAHD-IMAGE/Cart/Rectangle 43.webp" },
  ]);

  return (
    <motion.div 
      className="main-container px-4 sm:px-6 py-12 bg-white"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col lg:grid lg:grid-cols-[2fr_1fr] gap-12 lg:gap-28">
        {/* Left Side: Products List */}
        <motion.div variants={productListVariants}>
          <CartTable />
        </motion.div>

        {/* Right Side: Order Summary */}
        <motion.div variants={summaryVariants} className="w-full">
          <CartSummary 
            itemCount={cartItems.length}
            subtotal={cartItems.reduce((sum, item) => sum + item.price, 0)}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}