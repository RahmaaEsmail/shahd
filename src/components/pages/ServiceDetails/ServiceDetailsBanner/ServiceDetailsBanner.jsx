"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { Breadcrumb } from '../../../shared/Breadcrumb';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Service' },
  { label: 'Service Details' },
];

export default function ServiceDetailsBanner({ title }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className='relative min-h-[90vh] flex justify-center items-center py-20 px-4'
      style={{
        background: "url('/SHAHD-IMAGE/service-details/service details.webp')",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      {/* Subtle overlay animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-black"
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Title animation */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.2
          }}
          className='text-4xl  font-normal leading-[1.1] text-white mb-6 md:mb-8'
        >
          {title}
        </motion.h1>

        {/* Breadcrumb animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.4
          }}
        >
          <Breadcrumb items={breadcrumbItems} />
        </motion.div>
      </div>
    </motion.div>
  )
}