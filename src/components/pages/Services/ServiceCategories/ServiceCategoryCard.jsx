"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { slugify } from '@/lib/utils';

export default function ServiceCategoryCard({cardVariants, item, itemVariants }) {
  const router = useRouter();
  return (
    <motion.div
    onClick={() => {
      if (item?.id && item?.title) {
        router.push(`/services/${item.id}/${slugify(item.title)}`);
      }
    }}
      variants={itemVariants}
      whileHover="hover"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={cardVariants}
        className="w-full h-75 md:h-82.5 relative  overflow-hidden rounded-[40px] group cursor-pointer"
      >
        {/* Decorative element */}
        <motion.img
          src="/images/Services/sh5'.png"
          className="absolute w-50 h-50 top-0   border-none object-cover right-0  z-50"
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          alt="decorative element"
        />

        <button 
        onClick={() => {
          if (item?.id && item?.title) {
            router.push(`/services/${item.id}/${slugify(item.title)}`);
          }
        }}
        className="bg-secondary cursor-pointer absolute z-50 top-3 right-5 w-13 h-13 rounded-full flex justify-center items-center opacity-100  transition-opacity duration-300">
          <ChevronRight size={25} color="white" />
        </button>

        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover rounded-tr-[100px]! transition-transform duration-700"
        />

        {/* Gradient Overlay */}
        <motion.div
          className="absolute inset-0 rounded-tr-[100px]! flex flex-col justify-end p-6"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.7) 100%)",
          }}
          whileHover={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 20%, rgba(0,0,0,0.8) 100%)",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-fit px-3 md:px-4 text-xs md:text-base rounded-full bg-white font-poppins py-1.5 md:py-2.5 text-primary font-bold mb-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {item.service_num} Services
          </motion.div>
          <motion.h3
            className="text-white text-2xl md:text-4xl font-normal leading-tight"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {item.title}
          </motion.h3>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
