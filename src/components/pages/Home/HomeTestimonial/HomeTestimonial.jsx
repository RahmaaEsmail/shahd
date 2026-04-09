"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import HomeTestimonialSwiper from './HomeTestimonialSwiper';

// --- Mock Data (Based on Image) ---
const testimonials = [
  {
    id: 1,
    name: "Layla Kamal",
    treatment: "Treatment: Lip Fillers",
    quote: "I was nervous at first, but Dr. Shahd made the whole process so easy. My lips look natural and beautiful — exactly what I wanted!",
    image: "/images/HomeTestimonial/51d5b6c661c3da2fa95e8b494d25ea05fa35334b.png",
    sideImage: "/images/HomeTestimonial/51d5b6c661c3da2fa95e8b494d25ea05fa35334b.png",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Ahmed",
    treatment: "Treatment: Skin Rejuvenation",
    quote: "The results are absolutely stunning. My skin has never felt smoother or looked brighter. The clinic atmosphere is so calming.",
    image: "/images/HomeTestimonial/51d5b6c661c3da2fa95e8b494d25ea05fa35334b.png",
    sideImage: "/images/HomeTestimonial/51d5b6c661c3da2fa95e8b494d25ea05fa35334b.png",
    rating: 5
  },
  {
    id: 3,
    name: "Mona Khalil",
    treatment: "Treatment: Facial Contouring",
    quote: "Professional, clean, and the results speak for themselves. Dr. Shahd has a true artist's eye for aesthetics.",
    image: "/images/HomeTestimonial/0402d70a66c38d6594b9a42587cf70e03e81233f.png",
    sideImage: "/images/HomeTestimonial/0402d70a66c38d6594b9a42587cf70e03e81233f.png",
    rating: 5
  },
  {
    id: 4,
    name: "Nour Hassan",
    treatment: "Treatment: Anti-Wrinkle",
    quote: "I feel 10 years younger! The staff was incredibly supportive and answered all my questions. Highly recommended.",
    image: "/images/HomeTestimonial/0402d70a66c38d6594b9a42587cf70e03e81233f.png",
    sideImage: "/images/HomeTestimonial/0402d70a66c38d6594b9a42587cf70e03e81233f.png",
    rating: 5
  }
];

export default function HomeTestimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedTestimonial, setSelectedTestimonial] = useState(testimonials[0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const timeoutRef = useRef(null);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Custom navigation handlers
  const handlePrev = () => {
    if (swiperInstance && !isAnimating) {
      setIsAnimating(true);
      swiperInstance.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperInstance && !isAnimating) {
      setIsAnimating(true);
      swiperInstance.slideNext();
    }
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden font-sans text-slate-800">
      {/* Background Gradient & Decor */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white via-[#FADADD] to-[#F8E1E3]" />

      {/* Header Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20 pb-10 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-main text-primary leading-[0.95] uppercase">
            Real Stories. Real <br /> Transformations.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-lg"
        >
          <p className="text-lg md:text-xl text-text font-poppins font-light leading-relaxed">
            At Dr. Shahd Awad's Aesthetic Clinic, we believe that every smile, every story, and every transformation matters. Our clients share their genuine experiences after receiving expert care.
          </p>
        </motion.div>
      </div>
      
      {/* Navigation Buttons (Top layout buttons) */}
      <div className="relative flex gap-3 items-center ms-6 z-20">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePrev}
          className='bg-secondary w-14 h-14 rounded-full text-white flex justify-center items-center hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed'
          disabled={isAnimating}
        >
          <ChevronLeft color='white' size={30} />
        </motion.button>

        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleNext}
          className='bg-white w-14 h-14 rounded-full text-secondary flex justify-center items-center hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed'
          disabled={isAnimating}
        >
          <ChevronRight size={30} />
        </motion.button>
      </div>

      {/* Slider Content Area */}
      <div className="relative z-10 w-full mb-10">
        <HomeTestimonialSwiper 
          setIsAnimating={setIsAnimating}
          setSwiperInstance={setSwiperInstance}
          setActiveIndex={setActiveIndex}
          setSelectedTestimonial={setSelectedTestimonial}
          selectedTestimonial={selectedTestimonial}
          activeIndex={activeIndex}
          testimonials={testimonials}
          swiperInstance={swiperInstance}
        />
      </div>
    </section>
  );
}