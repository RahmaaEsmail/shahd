"use client";
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const data = [
  {
    id: 1,
    title: "+5 Thousands of Successful Aesthetic & Clinical Procedures",
    desc: "More than 5,000 procedures successfully completed, ensuring precise results and satisfied clients worldwide.",
    image: "/images/Coaching/Image_fx (41) (1) 1.png"
  },
  {
    id: 2,
    title: "+15 Years of Expertise & Professional Mastery in Medical Care",
    desc: "Over 5 years of dedicated practice, delivering expert care and mastering advanced medical and aesthetic techniques.",
    image: "/images/Coaching/Image_fx (40) (1) 1.png"
  },
  {
    id: 3,
    title: "Global Trust & International Client Care",
    desc: "Serving clients across Europe and the Middle East with safe, professional, and trusted medical and aesthetic services.",
    image: "/images/Coaching/Image_fx (45) (1) 1.png"
  },
  {
    id: 4,
    title: "100% Personalized Plans Tailored to Your DNA & Lifestyle",
    desc: "Every plan is uniquely crafted to fit your DNA, lifestyle, and personal preferences. We combine cutting-edge medical knowledge with individualized care, ensuring results that are not only effective but perfectly aligned.",
    image: "/images/Coaching/Image_fx (43) (1) 1.png"
  }
]

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const headerVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.8
    }
  }
}

const titleVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      delay: 0.2
    }
  }
}

const paragraphVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      delay: 0.3
    }
  }
}

const cardVariants = {
  hidden: { x: -100, opacity: 0, rotateY: -15 },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      delay: 0.3 + custom * 0.1
    }
  }),
  hover: {
    y: -10,
    boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.1)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 15
    }
  }
}

const imageVariants = {
  hidden: { scale: 0.8, opacity: 0, rotate: -10 },
  visible: (custom) => ({
    scale: 1,
    opacity: 1,
    rotate: custom,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: 0.4
    }
  }),
  hover: {
    scale: 1.05,
    rotate: (custom) => custom + 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
}

const gridItemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      delay: 0.5 + custom * 0.1
    }
  }),
  hover: {
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 15
    }
  }
}

export default function CoachingAbout() {
  return (
    <motion.div
      className='main-container my-12 mx-auto overflow-hidden px-4 sm:px-6 lg:px-8'
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1, margin: "-50px" }}
    >
      {/* Header Section */}
      <motion.div
        variants={headerVariants}
        initial="hidden"
        whileInView={"visible"}
        className='max-w-4xl text-center mx-auto mb-10'
      >
        <motion.h5
          variants={titleVariants}
          initial="hidden"
          whileInView={"visible"}
          className="font-bold text-lg sm:text-xl md:text-[27px] text-secondary font-poppins"
        >
          About us
        </motion.h5>

        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView={"visible"}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-primary font-normal leading-tight my-4"
        >
          Discover Who We Are
        </motion.h2>

        <motion.p
          variants={paragraphVariants}
          className="text-sm sm:text-base text-[#414141] font-medium max-w-2xl mx-auto font-poppins leading-relaxed"
        >
          We are dedicated to delivering personalized, safe, and innovative aesthetic and medical solutions.
          Every plan we create is tailored to your unique DNA and lifestyle, ensuring exceptional results
          and a truly transformative experience.
        </motion.p>
      </motion.div>

      {/* Main Grid Section - Asymmetric Layout */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        {/* Card 1: Successful Procedures - TALL (spans 2 rows on desktop) */}
        <motion.div
          variants={cardVariants}
          custom={0}
          whileHover="hover"
          className="relative lg:row-span-2 bg-[#EAF5FF] rounded-[40px] overflow-hidden group min-h-[400px] lg:h-full"
        >
          {/* Mobile/Tablet Background Image */}
          <div className="absolute inset-0 lg:hidden z-0">
            <Image 
              src={data[0]?.image} 
              alt={data[0]?.title} 
              fill 
              className="object-cover opacity-30" 
            />
          </div>
          
          <div className="relative z-10 p-8 sm:p-10 h-full flex flex-col">
            <h4 className="font-poppins text-[#838383] text-xl sm:text-2xl font-bold leading-tight uppercase tracking-tight">
              {data[0]?.title}
            </h4>
            <p className="font-poppins mt-4 text-[#404D59] text-sm sm:text-base font-medium max-w-[220px]">
              {data[0]?.desc}
            </p>
          </div>

          {/* Desktop Image - Positioned at bottom left overlapping */}
          <motion.div 
            className="hidden lg:block absolute bottom-[-40px] left-[-40px] w-[600px]"
            variants={imageVariants}
            custom={0}
          >
            <Image 
              src={data[0]?.image} 
              alt={data[0]?.title} 
              width={600} 
              height={650} 
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </motion.div>
        </motion.div>

        {/* Card 2: Expertise & Mastery - TOP MIDDLE */}
        <motion.div
          variants={cardVariants}
          custom={1}
          whileHover="hover"
          className="relative h-[400px] lg:h-auto bg-[#FFF0F1] rounded-[40px] overflow-hidden group min-h-[300px]"
        >
          {/* Mobile/Tablet Background Image */}
          <div className="absolute inset-0 h-full lg:hidden z-0">
            <Image 
              src={data[1]?.image} 
              alt={data[1]?.title} 
              fill 
              className="object-cover opacity-30" 
            />
          </div>

          <div className="relative z-10 p-8 sm:p-10 h-full flex flex-col">
            <h4 className="font-poppins text-[#838383] text-xl sm:text-2xl font-bold leading-tight uppercase tracking-tight">
              {data[1]?.title}
            </h4>
            <p className="font-poppins mt-4 text-[#877274] text-sm sm:text-base font-medium max-w-[200px]">
              {data[1]?.desc}
            </p>
          </div>

          {/* Desktop Image - Positioned at bottom right angled */}
          <motion.div 
            className="hidden lg:block absolute bottom-[-30px] right-[-40px] w-[260px] -rotate-12"
            variants={imageVariants}
            custom={-12}
          >
            <Image 
              src={data[1]?.image} 
              alt={data[1]?.title} 
              width={350} 
              height={350} 
              className="object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-20deg]"
            />
          </motion.div>
        </motion.div>

        {/* Card 3: Global Trust - TOP RIGHT */}
        <motion.div
          variants={cardVariants}
          custom={2}
          whileHover="hover"
          className="relative h-[400px] lg:h-auto bg-[#EAF5FF] rounded-[40px] overflow-hidden group min-h-[300px] md:col-span-2 lg:col-span-1"
        >
          {/* Mobile/Tablet Background Image */}
          <div className="absolute inset-0 lg:hidden z-0">
            <Image 
              src={data[2]?.image} 
              alt={data[2]?.title} 
              fill 
              className="object-cover opacity-30" 
            />
          </div>

          <div className="relative z-10 p-8 sm:p-10 h-full flex flex-col">
            <h4 className="font-poppins text-[#838383] text-xl sm:text-2xl font-bold leading-tight uppercase tracking-tight">
              {data[2]?.title}
            </h4>
            <p className="font-poppins mt-4 text-[#404D59] text-sm sm:text-base font-medium max-w-[200px]">
              {data[2]?.desc}
            </p>
          </div>

          {/* Desktop Image - Positioned on the right side */}
          <motion.div 
            className="hidden lg:block absolute right-[-50px] bottom-[-20px] w-[280px]"
            variants={imageVariants}
            custom={15}
          >
            <Image 
              src={data[2]?.image} 
              alt={data[2]?.title} 
              width={350} 
              height={350} 
              className="object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </motion.div>
        </motion.div>

        {/* Card 4: Personalized Plans - BOTTOM WIDE (spans 2 columns on desktop) */}
        <motion.div
          variants={cardVariants}
          custom={3}
          whileHover="hover"
          className="relative md:col-span-2 lg:col-span-2 h-[400px] md:h-auto lg:h-auto bg-[#FFF0F1] rounded-[40px] overflow-hidden group min-h-[300px]"
        >
          {/* Mobile/Tablet Background Image */}
          <div className="absolute  inset-0  lg:hidden z-0">
            <Image 
              src={data[3]?.image} 
              alt={data[3]?.title} 
              fill 
              className="object-cover  opacity-30" 
            />
          </div>

          <div className="relative z-10 p-8 sm:p-10 md:p-12 h-full flex flex-col justify-center">
            <h4 className="font-poppins text-[#838383] text-xl sm:text-2xl font-bold leading-tight uppercase tracking-tight md:max-w-2xl">
              {data[3]?.title}
            </h4>
            <p className="font-poppins mt-4 text-[#877274] text-sm sm:text-base font-medium md:max-w-xl">
              {data[3]?.desc}
            </p>
          </div>

          {/* Desktop Image - Massive DNA helix on the right */}
          <motion.div 
            className="hidden lg:block rotate-[-25deg] absolute right-[-130px] bottom-[-110px] w-[500px]"
            variants={imageVariants}
            custom={0}
          >
            <Image 
              src={data[3]?.image} 
              alt={data[3]?.title} 
              width={600} 
              height={1000} 
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating decorative elements */}
      {/* <motion.div
        className="fixed bottom-10 left-10 w-32 h-32 bg-secondary/5 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      /> */}

      {/* <motion.div
        className="fixed top-40 right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      /> */}
    </motion.div>
  )
}