"use client";
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

// Animation variants
const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
}

const imageVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
}

const headingVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
}

export default function HorseAboutContent() {
  return (
    <motion.div
      variants={contentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className='flex w-full flex-col  gap-6'
    >
      <motion.p
        variants={itemVariants}
        className='text-lg text-center sm:text-xl lg:text-[27px] font-bold font-poppins text-dark-primary'
      >
        Where Strength Meets Freedom
      </motion.p>

      <motion.h1
        variants={headingVariants}
        className='text-[32px] text-center lg:text-left sm:text-[44px] lg:text-[60px] xl:text-[80px] flex flex-wrap lg:flex-col gap-x-3 gap-y-0 font-normal leading-tight'
      >
        <motion.span
          style={{
            background: "linear-gradient(180deg, #DDB2B5 0%, #362114 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block"
          }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          {/* Use 'hidden lg:block' to only break lines on large screens */}
          <span>Horse Riding &mdash;</span>
          <br className="hidden lg:block" />

          <span className="ml-1 lg:ml-0">A Passion Beyond</span>
          <br className="hidden lg:block" />

          <motion.div
            whileHover="hover"
            className="inline-flex lg:flex gap-3 items-center"
          >
            <span>Medicine</span>
            <Image
              src="/images/horse/heading.jpg"
              alt="small about image"
              width={157}
              height={69}
              className='rounded-full object-cover w-[60px] h-[35px] sm:w-[110px] sm:h-[55px] lg:w-[157px] lg:h-[69px]'
            />
          </motion.div>
        </motion.span>
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-sm sm:text-base lg:text-lg font-poppins text-[#414141] font-normal tracking-[-0.3px] leading-7"
      >
        Through riding, she finds focus, discipline, and calm — values that mirror her approach to medicine and wellness. This passion reminds her that true wellbeing comes from movement, trust, and understanding rhythm, whether with patients or horses.
      </motion.p>
    </motion.div>
  )
}