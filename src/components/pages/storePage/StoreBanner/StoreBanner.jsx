"use client";
import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function StoreBanner() {
  const router = useRouter();
  // Animation variants for smoother, more coordinated animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1] // Custom cubic-bezier for smooth easing
      }
    }
  };

  const leftContentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const rightContentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const gradientVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.34, 1.56, 0.64, 1] // Bounce-like smooth effect
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const gradientBgVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.2
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
      className='min-h-screen relative overflow-hidden flex items-center pt-28 lg:pt-30'
      style={{
        background: "linear-gradient(180deg, #FFF2F2 41.74%, #FFFFFF 100%)"
      }}
    >
      <div
        className='main-container w-full grid grid-cols-1 lg:grid-cols-[6fr_5fr] items-center gap-12 lg:gap-0'
      >
        <motion.div
          variants={leftContentVariants}
          className='flex flex-col gap-5 text-center lg:text-left items-center lg:items-start order-2 lg:order-1'
        >
          <motion.h1
            variants={textVariants}
            className='text-5xl md:text-7xl lg:text-[92px] text-primary font-normal leading-tight'
          >
            Because Your Skin
            Deserves{' '}
            <motion.span
              variants={gradientVariants}
              style={{
                background: "linear-gradient(90deg, #DDB2B5 0%, #EFD4CE 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block"
              }}
              className='underline decoration-wavy decoration-primary decoration-2 md:decoration-4'
            >
              pure luxury
            </motion.span>
          </motion.h1>

          <motion.p
            variants={textVariants}
            className='text-lg md:text-2xl text-[#414141] max-w-2xl font-normal font-poppins'
          >
            From medical-grade skincare to wellness essentials, every product is chosen with purpose, science, and care.
          </motion.p>

          <motion.div
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <motion.button
              onClick={() => router.push('/products')}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className='bg-white border border-primary text-primary hover:bg-primary hover:text-white h-[52px] w-[220px] md:w-[195px] text-lg md:text-2xl px-5 py-2 rounded-full font-normal transition-colors duration-300'
            >
              Shop Bundle
            </motion.button>

            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                onClick={() => router.push('/products')}
                style={{
                  background: "linear-gradient(90deg, #DDB2B5 0%, #EFD4CE 100%)"
                }}
                variant='default'
                className='text-white h-[52px] min-w-[220px] md:min-w-[195px] px-9 py-2 text-lg md:text-2xl rounded-full font-normal transition-all duration-300'
              >
                Explore Bestsellers
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={rightContentVariants}
          className='relative mx-auto lg:ms-auto rounded-3xl lg:rounded-br-[32px] lg:rounded-bl-[32px] w-full max-w-[400px] md:max-w-[500px] lg:w-[768px] overflow-hidden h-[400px] md:h-[500px] lg:h-[664.49px] order-1 lg:order-2'
        >
          <motion.div
            variants={gradientBgVariants}
            className="absolute rounded-t-3xl lg:rounded-tr-[32px] lg:rounded-tl-[32px] bottom-0 w-full h-[70%] lg:h-[380.62px]"
            style={{
              background: "linear-gradient(270deg, #D19B9B 7.28%, #DDB2B5 57.76%, #FFF2F2 100%)"
            }}
          />

          <motion.div
            variants={imageVariants}
            className="relative w-full h-full"
          >
            <Image
              src='/images/store/store_banner.png'
              fill
              alt='store banner image'
              className="object-cover w-full! h-full! lg:object-cover z-10"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>

  )
}