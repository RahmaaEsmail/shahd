"use client";
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import HomeBlogLeftContent from './HomeBlogLeftContent';
import HomeBlogRightContent from './HomeBlogRightContent';

const images = [
  {
    id: 1,
    img: "/images/HomeBlogs/blog1.png",
    title: "The Subtle Art of Natural Beauty",
    sub_title: "Learn how minimal treatments and delicate touch-ups can highlight your true features without changing who you are.",
    date: "March 15, 2024",
    author: "Dr. Shahd Awad",
    category: "Aesthetics"
  },
  {
    id: 2,
    img: "/images/HomeBlogs/blog2.png",
    title: "Understanding Skin Anatomy",
    sub_title: "Deep dive into the layers of your skin and how aesthetic treatments work with your body's natural processes.",
    date: "March 10, 2024",
    author: "Dr. Shahd Awad",
    category: "Education"
  },
  {
    id: 3,
    img: "/images/HomeBlogs/blog3.png",
    title: "The Psychology of Beauty",
    sub_title: "Exploring how our perception of beauty affects confidence and self-esteem in modern society.",
    date: "March 5, 2024",
    author: "Dr. Shahd Awad",
    category: "Psychology"
  },
  {
    id: 4,
    img: "/images/HomeBlogs/blog4.jpg",
    title: "Skincare Routines That Work",
    sub_title: "Evidence-based approaches to daily skincare that complement professional treatments.",
    date: "February 28, 2024",
    author: "Dr. Shahd Awad",
    category: "Skincare"
  },
  {
    id: 5,
    img: "/images/HomeBlogs/blog1.png",
    title: "Aging Gracefully",
    sub_title: "Modern approaches to aging that enhance rather than erase your natural beauty.",
    date: "February 20, 2024",
    author: "Dr. Shahd Awad",
    category: "Wellness"
  },
  {
    id: 6,
    img: "/images/HomeBlogs/blog2.png",
    title: "Treatment Recovery Guide",
    sub_title: "What to expect and how to care for your skin after aesthetic procedures.",
    date: "February 15, 2024",
    author: "Dr. Shahd Awad",
    category: "Guide"
  },
  {
    id: 7,
    img: "/images/HomeBlogs/blog4.jpg",
    title: "Natural vs. Enhanced",
    sub_title: "Finding the balance between maintaining your natural features and enhancing your beauty.",
    date: "February 10, 2024",
    author: "Dr. Shahd Awad",
    category: "Philosophy"
  }
]

export default function HomeBlogs() {
  const [selectedBlog, setSelectedBlog] = useState(images[0]);


  return (
    <div className='relative min-h-screen py-10 lg:py-20 overflow-hidden flex flex-col justify-center'>
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
          className='text-secondary text-center font-bold font-poppins text-3xl md:text-4xl lg:text-[48px] mb-8 lg:mb-16'>
          Blogs
        </motion.h2>
        
        <div className='grid grid-cols-1 lg:grid-cols-[8fr_4fr] gap-8 lg:gap-12 items-center'>
          {/* Main Blog Display */}
          <div className="order-2 lg:order-1">
            <HomeBlogLeftContent selectedBlog={selectedBlog} />
          </div>

          {/* Carousel */}
          <div className="order-1 lg:order-2 w-full">
            <HomeBlogRightContent setSelectedBlog={setSelectedBlog} selectedBlog={selectedBlog} images={images} />
          </div>
        </div>
      </div>
    </div>
  )
}