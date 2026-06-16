"use client";
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import HomeBlogLeftContent from './HomeBlogLeftContent';
import HomeBlogRightContent from './HomeBlogRightContent';
import { blogsData } from '@/data/blogs';
import { useTranslation } from 'react-i18next';

export default function HomeBlogs() {
  const { t } = useTranslation();
  const [selectedBlog, setSelectedBlog] = useState(blogsData[0]);


  return (
    <div className='relative min-h-[90vh] py-2 overflow-hidden flex flex-col justify-center'>
      <div
        className="absolute inset-0 z-0"
        style={{ 
          backgroundImage: `url(${selectedBlog?.img})`, 
          backgroundSize: "cover", 
          backgroundPosition: "center" 
        }}
      />

      <div className='absolute inset-0 z-10' style={{ background: "rgba(199, 160, 163, 0.45)" }} />

      <div className='relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.h2
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          className='text-secondary text-center font-bold font-poppins text-3xl md:text-4xl'>
          {t("Blogs")}
        </motion.h2>
        
        <div className='grid grid-cols-1 lg:grid-cols-[8fr_4fr] gap-8 lg:gap-12 items-center'>
          {/* Main Blog Display */}
          <div className="order-2 lg:order-1">
            <HomeBlogLeftContent selectedBlog={selectedBlog} />
          </div>

          {/* Carousel */}
          <div className="order-1 lg:order-2 w-full">
            <HomeBlogRightContent setSelectedBlog={setSelectedBlog} selectedBlog={selectedBlog} images={blogsData} />
          </div>
        </div>
      </div>
    </div>
  )
}