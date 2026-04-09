"use client";

import React, { useRef, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import BuyBookImages from '@/components/pages/buyBook/BuyBookImages/BuyBookImages';
import BuyBookContent from '@/components/pages/buyBook/BuyBookContent/BuyBookContent';

const Sticky = dynamic(() => import('react-stickynode'), { ssr: false });

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const backgroundVariants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 0.2,
    scale: 1,
    transition: {
      duration: 1.5,
      ease: "easeOut"
    }
  }
};


const contentColumnVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      delay: 0.5
    }
  }
};

// Sticky state indicator variants
const stickyIndicatorVariants = {
  normal: {
    // boxShadow: "0 0 0 rgba(185, 124, 124, 0)",
    scale: 1
  },
  sticky: {
    // boxShadow: "0 10px 30px -10px rgba(185, 124, 124, 0.3)",
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

// Scroll progress indicator
const progressVariants = {
  initial: { width: "0%" },
  animate: (progress) => ({
    width: `${progress}%`,
    transition: {
      duration: 0.3,
      ease: "linear"
    }
  })
};

export default function Page() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [bottomBoundary, setBottomBoundary] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const isInView = useInView(containerRef, { once: false, amount: 0.1 });

  useEffect(() => {
    const updateBoundary = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setBottomBoundary(rect.bottom + window.scrollY);
      }
    };

    updateBoundary();
    window.addEventListener('resize', updateBoundary);
    return () => window.removeEventListener('resize', updateBoundary);
  }, []);

  // Track scroll progress and sticky state
  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const contentRect = contentRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollableDistance = contentRect.height - windowHeight;
        const scrolled = -contentRect.top;

        // Calculate progress (0 to 100)
        const progress = Math.min(100, Math.max(0, (scrolled / scrollableDistance) * 100));
        setScrollProgress(progress);

        // Check if sticky (only if on large screen)
        setIsSticky(isLargeScreen && contentRect.top <= 0 && contentRect.bottom > 0);
      }
    };

    if (isLargeScreen) {
      window.addEventListener('scroll', handleScroll);
    } else {
      setIsSticky(false);
      setScrollProgress(0);
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLargeScreen]);

  return (
    <motion.div
      className='min-h-screen relative w-full overflow-hidden'
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Background Image Layer with Parallax Effect */}
      <motion.div
        variants={backgroundVariants}
        className='absolute inset-0 w-full h-full'
        style={{
          backgroundImage: "url('/images/book/bg-img.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0
        }}
        animate={{
          y: isLargeScreen ? scrollProgress * 0.5 : 0, // No parallax on small screens
        }}
      />



      <div className='relative z-10 main-container mx-auto px-4 py-8 md:py-12 lg:py-16'>
        <motion.div
          className='mt-16 md:mt-24 lg:mt-32 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start'
        >
          {/* Left Column with Sticky Image */}
          <motion.div
            className='w-full lg:w-[55%]'
          >
            <Sticky
              enabled={isLargeScreen}
              top={90}
              innerZ={30}
              bottomBoundary={bottomBoundary}
            >
              <motion.div
                className="w-full"
                variants={stickyIndicatorVariants}
                animate={isSticky ? "sticky" : "normal"}
                transition={{ duration: 0.3 }}
              >
                <BuyBookImages />

                {/* Floating indicator when sticky */}
                <AnimatePresence>
                  {isSticky && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2  px-4 py-2 rounded-full flex items-center gap-2 text-sm text-primary"
                    >
                      <motion.div
                        className="w-2 h-2 bg-secondary rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                      <span>Book preview</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </Sticky>
          </motion.div>

          {/* Right Column with Content */}
          <motion.div
            variants={contentColumnVariants}
            className='w-full lg:w-[45%] space-y-8'
            ref={contentRef}
          >
            <BuyBookContent />

            {/* Floating reading progress for mobile */}
            <motion.div
              className="lg:hidden fixed bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg z-40"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-secondary"
                    initial={{ width: "0%" }}
                    animate={{ width: `${scrollProgress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <span className="text-sm text-primary font-medium">
                  {Math.round(scrollProgress)}%
                </span>
              </div>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </motion.div>
  );
}