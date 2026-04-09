"use client";

import React from 'react';
import Image from 'next/image';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

// Animation variants - preserving exact design
const productVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({ 
    opacity: 1, 
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.4,
      ease: "easeOut"
    }
  }),
  hover: { 
    scale: 1.02,
    transition: { duration: 0.2 }
  }
};

const buttonVariants = {
  hover: { scale: 1.1 },
  tap: { scale: 0.9 }
};

export default function CartProduct({ product, index = 0 }) {
  const [quantity, setQuantity] = React.useState(1);

  return (
    <motion.div 
      custom={index}
      variants={productVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      className="flex flex-col md:grid md:grid-cols-[1.5fr_2fr_1fr_1fr_0.5fr] items-center py-6 border-b border-[#DADADA] gap-6"
    >
      <div className="flex items-center gap-6 w-full md:w-auto">
        {/* Product Image */}
        <div className="relative w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-[24px] overflow-hidden bg-[#F5E8E6] shrink-0">
          <Image
            src={product?.image || "/images/Cart/Rectangle 43.png"}
            alt={product?.name || "Product"}
            fill
            className="object-cover"
          />
        </div>

        {/* Info on Mobile (Title + Price) */}
        <div className="flex flex-col gap-1 md:hidden">
            <h3 className="text-xl font-normal text-[#1E1E1E] uppercase">
                {product?.name || "Gentle Foaming Cleanser"}
            </h3>
            <p className="text-lg font-semibold font-poppins text-primary">
                {(product?.price * quantity || 23.00).toFixed(2)} S.R
            </p>
        </div>
      </div>

      {/* Description / Name - Hidden on mobile, handled above */}
      <h3 className="hidden md:block text-lg lg:text-2xl font-normal text-[#1E1E1E] uppercase truncate">
        {product?.name || "Gentle Foaming Cleanser"}
      </h3>

      {/* Quantity Adjuster */}
      <div className="flex items-center justify-between w-full md:w-auto md:justify-start gap-4 px-2 md:px-0">
        <span className="text-sm font-medium font-poppins text-[#6A6A6A] md:hidden">Quantity:</span>
        <div className="flex items-center gap-4">
            <motion.button 
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="text-[#6A6A6A] transition-colors"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            >
            <Minus size={18} />
            </motion.button>
            <motion.span 
            key={quantity}
            className="text-lg md:text-xl text-[#6A6A6A] font-medium font-poppins min-w-[20px] text-center"
            initial={{ scale: 1 }}
            whileInView={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.2 }}
            >
            {quantity}
            </motion.span>
            <motion.button 
            onClick={() => setQuantity(quantity + 1)}
            className="text-[#6A6A6A] transition-colors"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            >
            <Plus size={18} />
            </motion.button>
        </div>
      </div>

      {/* Price - Hidden on mobile, handled above */}
      <p className="hidden md:block text-lg lg:text-xl font-semibold font-poppins text-primary text-center">
        {(product?.price * quantity || 23.00).toFixed(2)} S.R
      </p>

      {/* Delete Action */}
      <div className="flex justify-between md:justify-end items-center w-full md:w-full px-2 md:px-0">
        <p className="text-lg font-semibold font-poppins text-primary md:hidden">
            TOTAL: {(product?.price * quantity || 23.00).toFixed(2)} S.R
        </p>
        <motion.button 
            className="text-[#DDB2B5] hover:text-red-500 transition-colors bg-red-50 md:bg-transparent p-2 md:p-0 rounded-lg"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
        >
            <Trash2 size={20} />
        </motion.button>
      </div>
    </motion.div>
  );
}