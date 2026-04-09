"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import ProductDetailsBundleCard from './ProductDetailsBundleCard';

const data = [
    {
        id: "bundle-1",
        rating: 5,
        title: "12 days of dr.shahd advent calendar",
        price: "23.00 S.R",
        is_best: true,
        img: "/images/product-details/Rectangle 71.png",   
    },
    {
        id: "bundle-2",
        rating: 4,
        title: "12 days of dr.shahd advent calendar",
        price: "23.00 S.R",
        is_best: false,
        img: "/images/product-details/Rectangle 71.png",   
    },
    {
        id: "bundle-3",
        rating: 4,
        title: "12 days of dr.shahd advent calendar",
        price: "23.00 S.R",
        is_best: false,
        img: "/images/product-details/Rectangle 71.png",   
    },
    {
        id: "bundle-4",
        rating: 4,
        title: "12 days of dr.shahd advent calendar",
        price: "23.00 S.R",
        is_best: false,
        img: "/images/product-details/Rectangle 71.png",   
    },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const headerVariants = {
  hidden: { 
    opacity: 0, 
    x: -50,
    skewX: -10
  },
  visible: { 
    opacity: 1, 
    x: 0,
    skewX: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6
    }
  }
};

export default function ProductDetailsBundles() {
  const router = useRouter();
  return (
    <section className='main-container py-16 overflow-hidden'>
      <motion.h3 
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ 
          once: false, 
          amount: 0.3,
          margin: "-50px"
        }}
        className='text-4xl md:text-5xl lg:text-[64px] font-normal text-primary uppercase mb-8 md:mb-10 text-center md:text-left'
      >
        Bundles & sets
      </motion.h3>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ 
          once: false, 
          amount: 0.1,
          margin: "-100px"
        }}
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'
      >
        {data.map((item, index) => (
          <ProductDetailsBundleCard key={item.id} item={item} index={index} />
        ))}
      </motion.div>
    </section>
  );
}