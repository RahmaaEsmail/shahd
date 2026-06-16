"use client";
import React from 'react'
import { Button } from '../../../ui/button'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { service_data } from '../../../../data/serviceData'
import OurServiceCard from '../../Services/OurServices/OurServiceCard'

// Import Swiper styles
import 'swiper/css'
import { useRouter } from 'next/navigation';

export default function ServiceDetailsOtherService() {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
      className='min-h-screen py-12 relative overflow-hidden'
      style={{
        background: "url(/SHAHD-IMAGE/service-details/d1ce99293bb9df3fa18d3d8ad6f3c5802adf222d.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // backgroundAttachment: "fixed"
      }}
    >

      <div className='relative z-10 container mx-auto px-4'>
        {/* Header Section with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='flex flex-col md:flex-row justify-between items-center gap-6 mb-10'
        >
          <div className='flex items-center gap-4'>
            <motion.h3 
              whileHover={{ scale: 1.05, x: 10 }}
              transition={{ type: "spring", stiffness: 400 }}
              className='font-bold text-secondary text-2xl sm:text-[27px] md:text-[32px] font-poppins drop-shadow-lg text-center md:text-left'
            >
              Other Services
            </motion.h3>

            {/* Navigation Buttons */}
            <div className='hidden md:flex gap-3'>
              <button className="other-services-prev w-10 h-10 rounded-full border border-secondary/30 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all duration-300">
                <ChevronLeft size={20} />
              </button>
              <button className="other-services-next w-10 h-10 rounded-full border border-secondary/30 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all duration-300">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          <motion.div
            onClick={() => router.push(`/services`)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto flex justify-center"
          >
            <Button 
            onClick={() => router.push(`/services`)}
              variant='secondary' 
              className="rounded-full h-12 sm:h-[54px] px-6 sm:px-[32px] text-lg sm:text-xl md:text-2xl font-normal text-[#FEF6F6] shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
            >
              Show More
            </Button>
          </motion.div>
        </motion.div>

        {/* Swiper Slider */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              prevEl: '.other-services-prev',
              nextEl: '.other-services-next',
            }}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            speed={800}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}           
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            className="other-services-swiper"
          >
            {service_data?.map((item, index) => (
              <SwiperSlide key={item?.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                >
                  <OurServiceCard item={item} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

 
          {/* Custom Pagination Styling - to be added via CSS */}
        </motion.div>

      </div>

      {/* Custom CSS for Swiper styling */}
      <style jsx>{`
        :global(.other-services-swiper) {
          padding: 20px 10px 50px !important;
        }
        
        :global(.other-services-swiper .swiper-slide) {
          transition: all 0.3s ease;
          opacity: 0.7;
          transform: scale(0.95);
        }
        
        :global(.other-services-swiper .swiper-slide-active) {
          opacity: 1;
          transform: scale(1);
          z-index: 10;
        }
        
        :global(.other-services-swiper .swiper-slide-next),
        :global(.other-services-swiper .swiper-slide-prev) {
          opacity: 0.8;
          transform: scale(0.97);
        }
        
        :global(.swiper-pagination-bullet) {
          width: 10px;
          height: 10px;
          background: white;
          opacity: 0.5;
        }
        
        :global(.swiper-pagination-bullet-active) {
          background: #DDB2B5;
          opacity: 1;
          transform: scale(1.2);
        }
        
        :global(.swiper-button-prev:after),
        :global(.swiper-button-next:after) {
          font-size: 20px;
          font-weight: bold;
        }
        
        :global(.swiper-button-prev:hover),
        :global(.swiper-button-next:hover) {
          transform: scale(1.1);
        }
        
        :global(.swiper-button-disabled) {
          opacity: 0.3 !important;
          cursor: not-allowed;
        }
      `}</style>
    </motion.div>
  )
}