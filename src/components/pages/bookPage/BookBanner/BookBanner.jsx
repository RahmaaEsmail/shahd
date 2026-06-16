"use client";
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
      duration: 0.8
    }
  }
}

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
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
  hidden: { x: -100, opacity: 0, rotate: -10 },
  visible: {
    x: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      delay: 0.2
    }
  },
  hover: {
    scale: 1.05,
    rotate: 2,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  }
}

const titleVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.3
    }
  }
}

const titleWordVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      delay: 0.4 + custom * 0.1
    }
  })
}

const buttonVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      delay: 0.8
    }
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 10px 20px rgba(185, 124, 124, 0.3)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: {
    scale: 0.95
  }
}

const languageButtonVariants = {
  hidden: { y: -20, opacity: 0 },
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
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
}

export default function BookBanner() {
  const { t , i18n} = useTranslation();
  const translatedTitle = t("Glow in All Areas of Your Life");
  const titleWords = translatedTitle.split(' ');
  
  const router = useRouter();
  return (
    <motion.div
      className='h-[100vh] md:h-[80vh]! flex flex-col lg:grid lg:grid-cols-[3fr_9fr] gap-10 items-center'
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2, margin: "-50px" }}
    >
      {/* Book Image with animation */}
      <motion.div
        className="w-[250px] sm:w-[480px] md:w-[320px] lg:w-full h-auto lg:h-[395px] relative mx-auto lg:mx-0"
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2, margin: "-50px" }}
        whileHover="hover"
      >
        <Image
          src="/SHAHD-IMAGE/Book/book.webp"
          alt="book"
          width={374}
          height={495}
          className='object-contain lg:object-cover w-full h-full drop-shadow-2xl'
        />

        {/* Floating shine effect on hover */}
        <motion.div
          className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Content section */}
      <motion.div
        className="flex lg:w-full  mt-6 flex-col text-center lg:text-left"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2, margin: "-50px" }}
      >
        <div className='flex w-full flex-col lg:flex-row justify-between gap-6 lg:gap-3 items-center lg:items-start'>
          <motion.h1
            className='text-4xl  w-full leading-[110%] md:leading-[100%] font-normal text-primary'
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2, margin: "-50px" }}
          >
            <div className="flex flex-col lg:flex-row w-full justify-between items-center lg:items-start gap-4 lg:gap-0">
              {/* Animated title with staggered words */}
              <motion.div className="flex flex-wrap justify-center lg:justify-start gap-2 lg:gap-3">
                {titleWords.slice(0, 2).map((word, index) => (
                  <motion.span
                    key={word}
                    custom={index}
                    variants={titleWordVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2, margin: "-50px" }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>

              {/* Language buttons with animation */}
              <motion.div
                className="flex gap-2 h-fit! items-center lg:items-start"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
              >
                <motion.div
                  custom={0}
                  variants={languageButtonVariants}
                  initial="hidden"
                  className="h-fit! flex"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2, margin: "-50px" }}
                  whileHover="hover"
                >
                  <Button
                    variant='default'
                    className={"rounded-full px-6 lg:px-10 h-[44px] lg:h-[52px] font-normal font-poppins text-base lg:text-lg"}
                  >
                    English
                  </Button>
                </motion.div>

                <motion.div
                  custom={1}
                  variants={languageButtonVariants}
                  whileHover="hover"
                  className="h-fit! flex"
                >
                  <Button
                    variant='default'
                    className={"rounded-full px-6 lg:px-10 bg-white hover:text-white transition-all duration-300 text-primary h-[44px] lg:h-[52px] font-normal font-poppins text-base lg:text-lg"}
                  >
                    العربية
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Animated remaining title words */}
            <motion.div className="flex flex-wrap justify-center lg:justify-start gap-2 lg:gap-3 mt-2">
              {titleWords.slice(2).map((word, index) => (
                <motion.span
                  key={word}
                  custom={index + 2}
                  variants={titleWordVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2, margin: "-50px" }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          </motion.h1>
        </div>

        {/* Description with animation */}
        <motion.p
          className={`text-[#414141] leading-8 lg:leading-10 font-poppins mt-5 lg:mt-3 font-normal max-w-3xl text-lg  mx-auto lg:mx-0 ${i18n?.language == "ar" ? "text-right" : "text-left"}`}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2, margin: "-50px" }}
          custom={4}
        >
          {t("Book Banner Desc")}
        </motion.p>

        {/* Buy Now button with animations */}
        <motion.button
          className='w-full max-w-[200px] lg:w-[183px] text-white h-[57px] mt-8 lg:mt-5 rounded-full text-xl lg:text-2xl font-normal relative overflow-hidden mx-auto lg:mx-0'
          style={{
            background: "radial-gradient(78.45% 156.63% at 44.89% 100%, #DDB2B5 0%, #A4B3C1 80.98%) ,radial-gradient(66.48% 185.23% at 0% 35.94%, #DDB2B5 10.55%, rgba(253, 160, 154, 0) 100%)"
          }}
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2, margin: "-50px" }}
          whileHover="hover"
          whileTap="tap"
          onClick={() => router.push("/book/buy-book")}
        >
          {/* Shine effect on hover */}
          <motion.div
            className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />

          {/* Button text */}
          <span className="relative z-10">{t("Buy Now")}</span>
        </motion.button>
      </motion.div>
    </motion.div>
  )
}