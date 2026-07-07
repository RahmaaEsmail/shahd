"use client";
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

const staticCards = [
  {
    id: 1,
    num_img:"/SHAHD-IMAGE/hair-therapy/Vector 1.webp",
    img: "/SHAHD-IMAGE/hair-therapy/52ac59b8ad9b63f5128dcc7210d21f26f62a829a.webp",
    titleKey: "Prep Diagnosis",
    descKey: "Prep Diagnosis Desc",
  },
  {
    id: 2,
     num_img:"/SHAHD-IMAGE/hair-therapy/Vector 2.webp",
    img: "/SHAHD-IMAGE/hair-therapy/82af8657dbd0e09d955942f00f48d5f6bd97f262.webp",
    titleKey: "Procedure Day",
    descKey: "Procedure Day Desc",
  },
  {
    id: 3,
    num_img:"/SHAHD-IMAGE/hair-therapy/Vector 3.webp",
    img: "/SHAHD-IMAGE/hair-therapy/c135b14e42cfc72e26e5a6e67e3853153aa4843f.webp",
    titleKey: "Healing Regrowth",
    descKey: "Healing Regrowth Desc",
  },
  {
    id: 4,
     num_img:"/SHAHD-IMAGE/hair-therapy/Vector (3).webp",
    img: "/SHAHD-IMAGE/hair-therapy/d38a8c4a873f471b48fd69aab5e08ce16f7d927d.webp",
    titleKey: "Transformation Title",
    descKey: "Transformation Desc",
  },
]

export default function HairTherapyTransformation({ data }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar")
    ? "ar"
    : i18n.language?.startsWith("sk")
      ? "sk"
      : "en";
  const router = useRouter();

  const cards = data && data.length > 0
    ? data.map((item, idx) => ({
        id: item.id,
        num_img: `/SHAHD-IMAGE/hair-therapy/Vector ${(idx % 4) + 1}.webp`,
        img: item.image_url || item.image || "/SHAHD-IMAGE/hair-therapy/52ac59b8ad9b63f5128dcc7210d21f26f62a829a.webp",
        title:  item.title || "",
        desc:  item.description || ""
      }))
    : staticCards.map(item => ({
        id: item.id,
        num_img: item.num_img,
        img: item.img,
        title: t(item.titleKey),
        desc: t(item.descKey)
      }));

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const arrowVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    })
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.5
      }
    }
  };

  const buttonVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.1, 
      rotate: 360,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  const imageOverlayVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const textContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.5
      }
    }
  };

  const decorativeVariants = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="py-20 mb-20 min-h-screen"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
    >
      <div className="main-container mx-auto px-4">
        {/* Header Section */}
        <motion.div 
          className='flex flex-col gap-2 text-center mb-3'
          variants={headerVariants}
          initial="hidden"
          whileInView={"visible"}
        >
          <motion.p 
            className='text-2xl font-poppins font-bold text-secondary uppercase tracking-wider'
            variants={contentVariants}
             initial="hidden"
          whileInView={"visible"}
          >
            {t("What Expect")}
          </motion.p>
          <motion.h2 
            className='text-3xl font-normal text-primary uppercase leading-tight'
            variants={contentVariants}
             initial="hidden"
          whileInView={"visible"}
          >
            {t("Transformation Journey")}
          </motion.h2>
        </motion.div>

        <motion.div 
          className="hidden lg:grid max-w-4xl gap-6 mx-auto grid-cols-3"
          variants={containerVariants}
           initial="hidden"
          whileInView={"visible"}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              custom={index}
              variants={arrowVariants}
               initial="hidden"
          whileInView={"visible"}
            >
              <Image 
                src="/SHAHD-IMAGE/hair-therapy/arrow.webp" 
                alt="image" 
                width={147} 
                height={26} 
                className='object-cover'
                style={{ transform: index === 1 ? 'translateX(20px)' : index === 2 ? 'translateX(40px)' : 'none' }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-48 relative px-4 mt-8 lg:mt-0  lg:grid-cols-4 gap-8"
          variants={containerVariants}
           initial="hidden"
          whileInView={"visible"}
        >
          {cards.map((item, index) => (
            <motion.div
              key={item.id}
              onClick={() => router.push(`/services/${item?.id}/${item?.title}`)}
              variants={cardVariants}
               initial="hidden"
          whileInView={"visible"}
              whileHover="hover"
              custom={index}
            >
              <motion.div
                className="w-full h-[320px] sm:h-[350px] md:h-[330px] relative rounded-[40px] group cursor-pointer"
                whileHover="hover"
              >
                {/* Decorative element */}
                <img
                  src="/SHAHD-IMAGE/hair-therapy/Untitled design - 2026-03-25T114829.031.webp"
                  className="absolute rounded-[40px]! w-50 h-50 top-0 border-none object-cover right-0 z-50"
                  alt="decorative element"
                />

                <motion.button
                  style={{
                    background: "linear-gradient(180deg, #DDB2B5 0%, #7189A2 100%)"
                  }}
                  onClick={() => router.push(`/services/${item?.id}/${item?.title}`)}
                  className="bg-secondary cursor-pointer absolute z-50 top-3 right-5 w-13 h-13 rounded-full flex justify-center items-center opacity-100 transition-opacity duration-300"
                  variants={buttonVariants}
                  initial="initial"
          whileInView={"visible"}
                  whileHover="hover"
                >
                  <motion.img 
                    src={item.num_img} 
                    alt="number" 
                    className='w-5 h-5'
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>

                <motion.div
                  variants={imageOverlayVariants}
                  initial="initial"
                  whileHover="hover"
                  className="w-full h-full relative"
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover rounded-tr-[100px]! rounded-[40px]! transition-transform duration-700"
                  />
                </motion.div>

                {/* Gradient Overlay */}
                <motion.div
                  className="absolute rounded-[40px] inset-0 rounded-tr-[100px]! flex flex-col justify-end p-6"
                  style={{
                    background: "linear-gradient(178.53deg, rgba(111, 74, 74, 0) 1.2%, rgba(0, 0, 0, 0.6) 69.5%);",
                  }}
                  whileHover={{
                    background: "linear-gradient(180deg, rgba(0,0,0,0) 20%, rgba(0,0,0,0.8) 100%)",
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div 
                  className="absolute left-0 right-0 z-20 h-[180px] -bottom-30 rounded-[24px] p-[24px_16px] bg-white/24 backdrop-blur-3xl"
                  variants={textContainerVariants}
                  initial="hidden"
                  
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <motion.h3 
                    className='text-[22px] font-medium text-white font-poppins text-center leading-tight'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p 
                    className='text-lg mt-2 font-normal text-[#414141] font-poppins leading-[24px] tracking-[-0.3px] text-center line-clamp-3'
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.desc}
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}