"use client";
import React from 'react'
import { motion } from 'framer-motion'

const ingredients = [
  {
    id: 1,
    title: "Hyaluronic Acid ",
    sub_title: "Deep hydration and moisture retention"
  },
  {
    id: 2,
    title: "Niacinamide (Vitamin B3) ",
    sub_title: "Brightens skin tone and strengthens the barrier"
  },
  {
    id: 3,
    title: "Aloe Vera Extract ",
    sub_title: "Soothes irritation and redness"
  },
  {
    id: 4,
    title: "Green Tea Extract",
    sub_title: "Antioxidant protection"
  },
  {
    id: 5,
    title: "Chamomile ",
    sub_title: "Calms sensitive skin"
  },
  {
    id: 6,
    title: "Vitamin E",
    sub_title: "Nourishes and protects"
  },
  {
    id: 7,
    title: "Glycerin",
    sub_title: "Maintains hydration balance"
  },
]

export default function ProductDetailsIngredients() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
      className='relative min-h-screen py-6'
      style={{
        background: "url('/images/product-details/c17080f024061945d283c30609d7dfd468f6fbf8.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover"
      }}
    >
      {/* Background overlay with opacity */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-white/50"
      />

      {/* Content */}
      <div className="relative z-99 main-container">
        <motion.h3
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className='text-4xl md:text-5xl lg:text-[64px] font-normal text-primary text-center mb-4'
        >
          key ingredients
        </motion.h3>
 
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className='text-sm md:text-base lg:text-lg font-poppins font-medium text-[#414141] text-center mx-auto max-w-2xl px-4'
        >
          A carefully balanced blend of medical-grade and botanical ingredients designed to cleanse, soothe, and protect the skin barrier.
        </motion.p>
 
        <div className='flex flex-col gap-6 md:gap-8 justify-center text-center items-center mt-12 md:mt-16'>
          {ingredients?.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, x: 10 }}
              className="w-full max-w-3xl"
            >
              <h5 className='text-xl md:text-2xl lg:text-[28px] font-bold font-poppins leading-snug text-black mb-2'>{item?.title}</h5>
              <p className='text-lg md:text-xl lg:text-[24px] font-medium font-poppins leading-snug text-gray-700'>{item?.sub_title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}