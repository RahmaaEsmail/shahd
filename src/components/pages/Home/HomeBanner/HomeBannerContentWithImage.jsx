
"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../../ui/button';
import { useRouter } from 'next/navigation';

const images = [
  {
    id: 1,
    image: "/images/BannerImage/image_banner_1.jpg",
    title: "banner image 1"
  },
  {
    id: 2,
    image: "/images/BannerImage/Ellipse 10.png",
    title: "banner image 2"
  },
  {
    id: 3,
    image: "/images/BannerImage/Ellipse 11.png",
    title: "banner image 11"
  },
  {
    id: 4,
    image: "/images/BannerImage/Ellipse 12.png",
    title: "banner image 12"
  },
  {
    id: 5,
    image: "/images/BannerImage/Ellipse 13.png",
    title: "banner image 13"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const thumbnailVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.8 + i * 0.08,
      duration: 0.4,
      type: "spring",
      stiffness: 200,
    },
  }),
};

export default function HomeBannerContentWithImage() {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const router = useRouter();
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative w-full"
      >
        {/* Union Background Shape */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute hidden xl:block  -top-8  w-170 h-95 pointer-events-none z-10"
        >
          <Image
            src="/images/Union.png"
            width={680}
            height={400}
            alt="Background decoration"
            className="w-full h-full"
            priority
          />
        </motion.div>

        {/* Title Content */}
        <div className="relative z-10 w-full">
          {/* Line 1 */}
          <motion.h1
            variants={textVariants}
            className="text-[46px] text-center lg:text-left  xl:text-[87px] font-normal text-[#DDB2B5] uppercase leading-tight tracking-wide"
          >
            Glow in All Areas of
          </motion.h1>

          {/* Line 2: symbol + Your Life With */}
          <motion.div
            variants={textVariants}
            className="flex justify-center lg:justify-start items-center gap-2 sm:gap-3 mt-2 sm:mt-4"
          >
            <motion.div
              initial={{ rotate: -180, opacity: 0, scale: 0 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
              whileHover={{ rotate: 360, scale: 1.1 }}
              className="w-8 h-8 xs:w-10 xs:h-10 sm:w-14 sm:h-14 lg:w-23 lg:h-18 shrink-0"
            >
              <Image
                src="/images/symbol 1.png"
                width={76}
                height={76}
                alt="Symbol"
                className="w-full h-full object-contain"
              />
            </motion.div>

            <motion.span
              className="text-[46px] text-center lg:text-left  lg:text-[87px] font-normal text-[#DDB2B5] uppercase tracking-wide border-l-4 border-secondary pl-2 sm:pl-5 leading-tight"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Your Life With
            </motion.span>
          </motion.div>

          {/* Line 3: Dr. Shahd */}
          <motion.h1
            variants={textVariants}
            className="text-[46px] text-center lg:text-left  lg:text-[87px] font-normal mt-2 sm:mt-6 lg:mt-3 text-secondary uppercase tracking-[0.08em] sm:tracking-[0.14em] lg:tracking-[0.18em]"
          >
            Dr.&nbsp;&nbsp;Shahd
          </motion.h1>
        </div>

        {/* CTA Buttons */}
        <motion.div
          variants={textVariants}
          className="lg:flex flex-row flex-wrap hidden lg:justify-start gap-3 mt-5 sm:mt-8 w-full"
        >
          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              onClick={() => router.push('/services')}
              variant="default"
              className="border-2 border-primary bg-transparent! text-primary hover:bg-primary! hover:text-white py-4 sm:py-6 md:py-8 px-5 sm:px-8 md:px-10 rounded-full text-xs sm:text-base md:text-[20px] font-normal uppercase tracking-wider transition-all duration-300"
            >
              Get Start
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              onClick={() => router.push('/store')}
              variant='secondary'
              className="bg-secondary text-white py-4 sm:py-6 md:py-8 px-5 sm:px-8 md:px-15 rounded-full text-xs sm:text-base md:text-[20px] font-normal uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore
            </Button>
          </motion.div>
        </motion.div>

        {/* MOBILE: Large Image shown below text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="block xl:hidden mt-6 sm:mt-8 w-full h-[260px] xs:h-[300px] sm:h-[400px] md:h-[480px] rounded-[24px] sm:rounded-[32px] overflow-hidden"
        >
          <div className="relative w-full h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedImage.id}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-linear-to-t from-[#DDB2B5]/30 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Thumbnail Gallery */}
        <motion.div
          variants={textVariants}
          className="flex gap-3 xl:gap-4 mt-5 sm:mt-8 w-full"
        >
          {[...images]?.reverse()?.map((item, index) => (
            <motion.button
              key={item.id}
              custom={index}
              variants={thumbnailVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{
                scale: 1.15,
                y: -8,
                boxShadow: "4px 15px 30px rgba(221, 178, 181, 0.3)"
              }}
              style={item?.id == selectedImage?.id ? {
                boxShadow: "0px 4px 30px 10px #DDB2B5"
              } : ""}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedImage(item)}
              className={`relative overflow-hidden w-11 h-11 sm:w-14 sm:h-14  rounded-full transition-all duration-300 
        ${selectedImage?.id === item?.id ? 'scale-125' : ''}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover rounded-full"
              />
            </motion.button>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          variants={textVariants}
          className="text-[#414141] font-poppins! text-sm sm:text-base lg:text-lg font-normal leading-relaxed w-full mt-5 sm:mt-8 lg:max-w-sm"
        >
          Discover expert dermatology care, advanced aesthetic treatments, and personalized wellness programs — designed to help you look, feel, and live your most radiant life.
        </motion.p>


        <motion.div
          variants={textVariants}
          className="flex lg:hidden flex-row flex-wrap justify-center lg:justify-start gap-3 mt-5 sm:mt-8 w-full"
        >
          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              onClick={() => router.push('/services')}
              variant="default"
              className="border-2 border-primary bg-transparent! text-primary hover:bg-primary! hover:text-white py-4 sm:py-6 md:py-8 px-5 sm:px-8 md:px-10 rounded-full text-xs sm:text-base md:text-[20px] font-normal uppercase tracking-wider transition-all duration-300"
            >
              Get Start
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              onClick={() => router.push('/store')}
              variant='secondary'
              className="bg-secondary text-white py-4 sm:py-6 md:py-8 px-5 sm:px-8 md:px-15 rounded-full text-xs sm:text-base md:text-[20px] font-normal uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore
            </Button>
          </motion.div>
        </motion.div>

        {/* Main Large Image - Desktop only (absolute positioned) */}
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-0 right-0 lg:-right-4 w-100 h-125 lg:w-109! lg:h-full xl:w-137.5 xl:h-full hidden xl:block"
        >
          <div className="relative w-full h-full rounded-[50px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedImage.id}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-[#DDB2B5]/30 via-transparent to-transparent" />

            {/* Decorative dots */}
            <div className="absolute top-8 right-8 flex flex-col gap-3">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  className="w-3 h-3 rounded-full bg-white/70 backdrop-blur-sm"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

    </>
  );
}