"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'

const headerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
}

// Add slide animation variants
const slideVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  },
}

const images = [
  { id: 1, img: "/images/Weight-management/Component 36.png" },
  { id: 2, img: "/images/Weight-management/Component 37.png" },
  { id: 3, img: "/images/Weight-management/Component 38.png" },
  { id: 4, img: "/images/Weight-management/Component 33.png" },
  { id: 5, img: "/images/Weight-management/Component 36.png" },
  { id: 6, img: "/images/Weight-management/Component 38.png" },
]

export default function WeightManagementImages() {
  return (
    <section className='min-h-screen relative py-20 flex flex-col items-center justify-center overflow-hidden'>
      {/* Background Layer */}
      <div className='absolute inset-0 z-0'>
        <Image 
          src="/images/Weight-management/Desktop - 21.jpg" 
          alt="" 
          fill 
          className='object-cover' 
        />
        <div 
          className='absolute inset-0'
          style={{
            background: 'linear-gradient(180deg, rgba(254, 255, 255, 0.7) 0%, rgba(221, 178, 181, 0.5) 50%, rgba(149, 188, 170, 0.5) 75%, rgba(255, 255, 255, 0.7) 100%)',
          }}
        />
      </div>

      {/* Content Container */}
      <div className='relative z-10 w-full mx-auto px-4'>
        {/* Header Text */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className='max-w-4xl text-center mx-auto mb-16'
        >
          <p className='text-[#95BCAA] text-[22px] md:text-[27px] font-bold font-poppins uppercase tracking-wider'>
            Tailored To Your Body
          </p>
          <h2 className='text-4xl md:text-[56px] text-[#DDB2B5] mt-4 font-normal leading-tight uppercase'>
            Medical Expertise You Can Trust
          </h2>
          <p className='text-base md:text-lg text-[#414141] font-poppins font-normal mt-6 max-w-2xl mx-auto leading-relaxed'>
            Led by Dr. Shahd Awad, our program integrates professional medical knowledge with personalized care. 
            No one-size-fits-all diet — every plan is crafted based on your metabolism, lifestyle, and health goals.
          </p>
        </motion.div>

        {/* Swiper Implementation */}
        <div className="w-full">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-10"
          >
            {images.map((item, index) => (
              <SwiperSlide key={item.id}>
                <motion.div
                  variants={slideVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: false, amount: 0.3 }}
                  custom={index}
                  className="relative aspect-[332/536] w-full overflow-hidden! rounded-[30px] shadow-lg"
                >
                  <Image 
                    src={item.img} 
                    alt={`Medical Expert ${item.id}`} 
                    fill 
                    className='object-cover transition-transform duration-500 overflow-hidden!' 
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}