"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

const partners = [
  { id: 1, name: "Salla", logo: "/images/product-details/Group (1).svg" },
  { id: 2, name: "Careem", logo: "/images/product-details/Group.svg" },
  { id: 3, name: "Grintahub", logo: "/images/product-details/logo 1.svg" },
  { id: 4, name: "Qalam", logo: "/images/product-details/logo 2.svg" },
  { id: 5, name: "Grintahub Alt", logo: "/images/product-details/main-logo-en 1.svg" },
  { id: 6, name: "Salla Alt", logo: "/images/product-details/main-logo-en 2.svg" },
  { id: 7, name: "Careem Alt", logo: "/images/product-details/qalam-logo.dcdb430 1.svg" },
];

// Duplicate partners for seamless infinite scroll
const duplicatedPartners = [...partners, ...partners, ...partners];

export default function ProductDetailsPartners() {
  return (
    <section className="relative w-full py-12 overflow-hidden">
      {/* Background with slight opacity as per Figma (32%) */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/product-details/c17080f024061945d283c30609d7dfd468f6fbf8.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.32
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-3xl md:text-5xl lg:text-[64px] font-normal text-center text-primary uppercase mb-8 md:mb-10 px-4'
        >
          Featured by press
        </motion.h2>

        {/* Swiper Slider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation, FreeMode]}
            spaceBetween={32}
            slidesPerView={2}
            centeredSlides={false}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              reverseDirection: false,
            }}
            freeMode={{
              enabled: true,
              momentum: false,
              sticky: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 32,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 32,
              },
              1280: {
                slidesPerView: 7,
                spaceBetween: 32,
              },
            }}
            className="partner-slider overflow-visible!"
          >
            {duplicatedPartners.map((partner, index) => (
              <SwiperSlide key={`${partner.id}-${index}`} className="h-auto!">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  className='relative w-32 h-12 md:w-40 md:h-16 mx-auto cursor-pointer'
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className='object-contain transition-all duration-300 hover:brightness-110'
                    sizes="(max-width: 768px) 128px, 160px"
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* Custom CSS for smooth continuous scrolling */}
      <style jsx>{`
        :global(.partner-slider) {
          overflow: visible !important;
          padding: 10px 0;
        }
        
        :global(.partner-slider .swiper-wrapper) {
          transition-timing-function: linear !important;
        }
        
        :global(.partner-slider .swiper-slide) {
          height: auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        :global(.swiper-slide) {
          transition: all 0.3s ease;
        }
        
        :global(.swiper-slide:hover) {
          transform: translateY(-5px);
        }
      `}</style>
    </section>
  );
}