"use client";
import { Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { cn, slugify } from '@/lib/utils';

// Card animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    }
  }
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0px 8px 20px rgba(221, 178, 181, 0.4)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: {
    scale: 0.95
  }
};

const starVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: (i) => ({
    scale: 1,
    rotate: 0,
    transition: {
      delay: i * 0.03,
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  })
};

export default function StoreProductCard({ product, is_btn = true }) {
  const router = useRouter();
  
  const handleCardClick = (e) => {
    // Prevent event bubbling if clicking on button
    if (e.target.closest('button')) {
      return;
    }
    if (product?.id && product?.name) {
      router.push(`/products/${product.id}/${slugify(product.name)}`);
    }
  };

  const handleButtonClick = (e) => {
    e.stopPropagation(); // Prevent triggering card click
    router.push('/cart');
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      onClick={handleCardClick}
      className={cn("flex flex-col overflow-hidden rounded-[24px] pb-5 border border-[#A68688] bg-white hover:shadow-2xl transition-shadow duration-300 cursor-pointer group w-full", is_btn ? "min-h-[380px] sm:h-[424px]" : "min-h-[320px] sm:h-[360px]")}
    >
      {/* Image Container */}
      <div className="relative w-full h-[180px] sm:h-[222px] bg-linear-to-b from-[#FDF8F5] to-[#F5E8E6] overflow-hidden">
        <div className="relative w-full h-full">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full"
            onClick={(e) => e.stopPropagation()} // Stop propagation from image to card
          >
            <Image
              src={product?.img}
              alt={product?.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className='object-cover w-full!'
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 pointer-events-none" 
          style={{
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(216, 179, 180, 0.32) 100%)"
          }}
        />

        {/* Hover overlay effect */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.1 }}
          className="absolute inset-0 bg-black pointer-events-none" 
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col justify-center items-center gap-2 sm:gap-3 px-4 mt-4">
        <motion.h4
          className='text-lg lg:text-2xl font-normal uppercase text-[#4D3E3F] line-clamp-1 text-center'
          whileHover={{ scale: 1.02, color: "#DDB2B5" }}
        >
          {product?.name}
        </motion.h4>

        {/* Rating Stars */}
        <motion.div
          className="flex gap-1 mt-1 sm:mt-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.03,
                delayChildren: 0.1
              }
            }
          }}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={starVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <Star
                className={`${index < product?.rating ? 'text-[#EFC77E] fill-[#EFC77E]' : 'text-gray-300'} w-4 h-4 lg:w-5 lg:h-5`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Price */}
        <motion.p
          className="text-[#A68688] text-lg lg:text-2xl font-poppins font-semibold"
          whileHover={{ scale: 1.05, color: "#DDB2B5" }}
        >
          {product?.price} S.R
        </motion.p>

        {/* Add to Cart Button */}
        {is_btn && <motion.button
          onClick={handleButtonClick}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="w-full max-w-[189px] h-10 lg:h-[52px] rounded-full text-white flex justify-center items-center text-base lg:text-2xl font-normal bg-linear-to-r from-[#DDB2B5] to-[#EFD4CE]"
        >
          Add To Cart
        </motion.button>}
      </div>
    </motion.div>
  )
}