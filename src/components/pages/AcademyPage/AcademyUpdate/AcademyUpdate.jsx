"use client";
import Image from 'next/image'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { motion, useInView } from 'framer-motion'
import { Autoplay, Pagination, Navigation, EffectCreative } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-creative'

const images = [
  {
    id: 1,
    img: "/images/Academy/Rectangle 4357.png",
    title: "Advanced Hair Treatment Techniques",
    date: "March 15, 2024"
  },
  {
    id: 2,
    img: "/images/Academy/Rectangle 4358.png",
    title: "Nutrition & Skin Health Workshop",
    date: "March 10, 2024"
  },
  {
    id: 3,
    img: '/images/Academy/Rectangle 4359.png',
    title: "Bridal Beauty Masterclass",
    date: "March 5, 2024"
  },
  {
    id: 4,
    img: "/images/Academy/Rectangle 4360.png",
    title: "Holistic Wellness Summit",
    date: "February 28, 2024"
  },
  {
    id: 5,
    img: "/images/Academy/Rectangle 4361.png",
    title: "Medical Aesthetics Conference",
    date: "February 20, 2024"
  },
   {
    id: 6,
    img: "/images/Academy/Rectangle 4358.png",
    title: "Nutrition & Skin Health Workshop",
    date: "March 10, 2024"
  },
  {
    id: 7,
    img: '/images/Academy/Rectangle 4359.png',
    title: "Bridal Beauty Masterclass",
    date: "March 5, 2024"
  },
]

export default function AcademyUpdate() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  const swiperRef = useRef(null)

  // Animation variants
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <motion.div 
      ref={sectionRef}
      initial="hidden"
      whileInView={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className='my-16 lg:my-24 relative overflow-hidden'
    >
      <div className='main-container relative z-10'>
        {/* Header Section */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: false, amount : 0.3}}
          className='text-center mb-12'
        >
          <motion.h4 
            variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: false, amount : 0.3}}
            className='text-primary text-4xl md:text-5xl lg:text-[64px] font-normal leading-tight'
          >
            Stay Updated
          </motion.h4>
        </motion.div>

        {/* Swiper Container */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: false, amount : 0.3}}
          className='relative group'
        >
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            // effect={'creative'}
            // creativeEffect={{
            //   prev: {
            //     shadow: true,
            //     translate: [0, 0, -400]
            //   },
            //   next: {
            //     translate: [0, 0, -400]
            //   }
            // }}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              320: {
                slidesPerView: 1.2,
                spaceBetween: 10
              },
              640: {
                slidesPerView: 2.5,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 0
              }
            }}
            className='h-[400px] lg:h-[450px] rounded-[24px]'
          >
            {images?.map((item, index) => (
              <SwiperSlide key={item?.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  // whileHover={{ y: -10 }}
                  className='relative h-full w-full rounded-[24px] overflow-hidden cursor-pointer group/slide'
                >
                  {/* Image with Parallax */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className='absolute inset-0'
                  >
                    <Image 
                      src={item?.img} 
                      alt={`academy update ${item.id}`}
                      fill
                      className='object-cover'
                      sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                    />
                  </motion.div>

                  {/* Gradient Overlay */}
                  {/* <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent'
                  /> */}
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

        </motion.div>
      </div>
    </motion.div>
  )
}