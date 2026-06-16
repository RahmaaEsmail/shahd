"use client";
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTranslation } from 'react-i18next';

const data = [
  {
    id: 1,
    titleKey: "5k Success Procedures",
    descKey: "5k Success Procedures Desc",
    image: "/SHAHD-IMAGE/Coaching/Image_fx (41) (1) 1.webp"
  },
  {
    id: 2,
    titleKey: "15y Expertise",
    descKey: "15y Expertise Desc",
    image: "/SHAHD-IMAGE/Coaching/Image_fx (40) (1) 1.webp"
  },
  {
    id: 3,
    titleKey: "Global Trust",
    descKey: "Global Trust Desc",
    image: "/SHAHD-IMAGE/Coaching/Image_fx (45) (1) 1.webp"
  },
  {
    id: 4,
    titleKey: "100% Personalized Plans",
    descKey: "100% Personalized Plans Desc",
    image: "/SHAHD-IMAGE/Coaching/Image_fx (43) (1) 1.webp"
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

export default function CoachingAbout() {
  const { t  , i18n} = useTranslation();
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })

  return (
    <motion.div
      ref={sectionRef}
      className='main-container my-6 mx-auto overflow-hidden px-4 sm:px-6 lg:px-8'
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      viewport={{ once: false, amount: 0.1, margin: "-50px" }}
    >
      {/* Header Section */}
      <motion.div
        variants={headerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className='max-w-4xl text-center mx-auto mb-16'
      >
        <motion.h5
          variants={titleVariants}
          className="font-bold text-2xl text-secondary font-poppins"
        >
          {t('About Us')}
        </motion.h5>

        <motion.h2
          variants={titleVariants}
          className="text-3xl text-primary font-normal leading-tight my-2"
        >
          {t('Discover Who We Are')}
        </motion.h2>

        <motion.p
          variants={paragraphVariants}
          className="text-sm text-[#414141] font-medium max-w-2xl mx-auto font-poppins leading-relaxed"
        >
          {t('Coaching About Desc')}
        </motion.p>
      </motion.div>

      {/* Main Grid Section - Asymmetric Layout */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Card 1: Successful Procedures */}
        <motion.div
          variants={cardVariants}
          custom={0}
          whileHover="hover"
          className="relative lg:row-span-2 bg-[#EAF5FF] rounded-[40px] overflow-hidden group min-h-[400px] lg:h-full"
        >
          <div className="absolute inset-0 lg:hidden z-0">
            <Image 
              src={data[0]?.image} 
              alt={t(data[0]?.titleKey)} 
              fill 
              className="object-cover opacity-30" 
            />
          </div>
          
          <div className="relative z-10 p-8 sm:p-10 h-full flex flex-col">
            <h4 className="font-poppins text-[#838383] text-xl font-bold leading-tight uppercase tracking-tight">
              {t(data[0]?.titleKey)}
            </h4>
            <p className="font-poppins mt-4 text-[#404D59] text-sm font-medium max-w-[220px]">
              {t(data[0]?.descKey)}
            </p>
          </div>

          <motion.div 
            className={`hidden lg:block absolute bottom-[-40px] ${i18n?.language =="ar" ? "right-[-40px]" :" left-[-40px]"} w-[600px]`}
            variants={imageVariants}
            custom={0}
          >
            <Image 
              src={data[0]?.image} 
              alt={t(data[0]?.titleKey)} 
              width={600} 
              height={650} 
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </motion.div>
        </motion.div>

        {/* Card 2: Expertise & Mastery */}
        <motion.div
          variants={cardVariants}
          custom={1}
          whileHover="hover"
          className="relative h-[400px] lg:h-auto bg-[#FFF0F1] rounded-[40px] overflow-hidden group min-h-[300px]"
        >
          <div className="absolute inset-0 h-full lg:hidden z-0">
            <Image 
              src={data[1]?.image} 
              alt={t(data[1]?.titleKey)} 
              fill 
              className="object-cover opacity-30" 
            />
          </div>

          <div className="relative z-10 p-8 h-full flex flex-col">
            <h4 className="font-poppins text-[#838383] text-xl font-bold leading-tight uppercase tracking-tight">
              {t(data[1]?.titleKey)}
            </h4>
            <p className="font-poppins mt-4 text-[#877274] text-sm font-medium max-w-[200px]">
              {t(data[1]?.descKey)}
            </p>
          </div>

          <motion.div 
            className={`hidden lg:block absolute bottom-[-30px] ${i18n?.language == "ar" ? "left-[-50px]" :"right-[-50px]"} w-[260px] -rotate-12`}
            variants={imageVariants}
            custom={-12}
          >
            <Image 
              src={data[1]?.image} 
              alt={t(data[1]?.titleKey)} 
              width={350} 
              height={350} 
              className="object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-20deg]"
            />
          </motion.div>
        </motion.div>

        {/* Card 3: Global Trust */}
        <motion.div
          variants={cardVariants}
          custom={2}
          whileHover="hover"
          className="relative h-[400px] lg:h-auto bg-[#EAF5FF] rounded-[40px] overflow-hidden group min-h-[300px] md:col-span-2 lg:col-span-1"
        >
          <div className="absolute inset-0 lg:hidden z-0">
            <Image 
              src={data[2]?.image} 
              alt={t(data[2]?.titleKey)} 
              fill 
              className="object-cover opacity-30" 
            />
          </div>

          <div className="relative z-10 p-8 sm:p-10 h-full flex flex-col">
            <h4 className="font-poppins text-[#838383] text-xl font-bold leading-tight uppercase tracking-tight">
              {t(data[2]?.titleKey)}
            </h4>
            <p className="font-poppins mt-4 text-[#404D59] text-sm font-medium max-w-[200px]">
              {t(data[2]?.descKey)}
            </p>
          </div>

          <motion.div 
            className={`hidden lg:block absolute ${i18n?.language == "ar" ? "left-[-50px]" :"right-[-50px]"}  bottom-[-20px] w-[280px]`}
            variants={imageVariants}
            custom={15}
          >
            <Image 
              src={data[2]?.image} 
              alt={t(data[2]?.titleKey)} 
              width={350} 
              height={350} 
              className="object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </motion.div>
        </motion.div>

        {/* Card 4: Personalized Plans */}
        <motion.div
          variants={cardVariants}
          custom={3}
          whileHover="hover"
          className="relative md:col-span-2 lg:col-span-2 h-[400px] md:h-auto lg:h-auto bg-[#FFF0F1] rounded-[40px] overflow-hidden group min-h-[300px]"
        >
          <div className="absolute inset-0 lg:hidden z-0">
            <Image 
              src={data[3]?.image} 
              alt={t(data[3]?.titleKey)} 
              fill 
              className="object-cover opacity-30" 
            />
          </div>

          <div className="relative z-10 p-8 sm:p-10 md:p-12 h-full flex flex-col justify-center">
            <h4 className="font-poppins text-[#838383] text-xl font-bold leading-tight uppercase tracking-tight md:max-w-2xl">
              {t(data[3]?.titleKey)}
            </h4>
            <p className="font-poppins mt-4 text-[#877274] text-sm font-medium md:max-w-xl">
              {t(data[3]?.descKey)}
            </p>
          </div>

          <motion.div 
            className={`hidden lg:block rotate-[-25deg] absolute ${i18n?.language == "ar" ? " left-[-130px]" :" right-[-130px]"} bottom-[-110px] w-[500px]`}
            variants={imageVariants}
            custom={0}
          >
            <Image 
              src={data[3]?.image} 
              alt={t(data[3]?.titleKey)} 
              width={600} 
              height={1000} 
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}