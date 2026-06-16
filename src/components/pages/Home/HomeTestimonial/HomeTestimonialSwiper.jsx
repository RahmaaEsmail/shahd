"use client";
import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function HomeTestimonialSwiper({
  setIsAnimating,
  setSwiperInstance,
  setActiveIndex,
  setSelectedTestimonial,
  selectedTestimonial,
  activeIndex,
  testimonials,
  swiperInstance // Pass this from parent to handle buttons
}) {
  const timeoutRef = useRef(null);

  const handleSlideChange = (swiper) => {
    const index = swiper.realIndex;
    if (setActiveIndex) setActiveIndex(index);
    if (setSelectedTestimonial) setSelectedTestimonial(testimonials[index]);
    
    if (setIsAnimating) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsAnimating(true);
      timeoutRef.current = setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center opacity-30 lg:opacity-60">
        <Image
          src="/SHAHD-IMAGE/HomeTestioniai/testimonial_bg.webp"
          width={1000}
          height={600}
          alt=""
          className="object-contain"
        />
      </div>

      <div className="flex items-center justify-between gap-4 lg:gap-10">
        
        {/* Left Preview - Desktop (XL) only */}
        <div className="hidden lg:block w-40 shrink-0  hover:grayscale-0 transition-all duration-500 cursor-pointer"
             onClick={() => swiperInstance?.slidePrev()}>
           <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border-4 border-white/10">
              <Image 
                src={testimonials[(activeIndex - 1 + testimonials.length) % testimonials.length]?.sideImage || testimonials[0].sideImage} 
                fill className="object-cover" alt="prev" 
              />
              {/* <div className="absolute inset-0 bg-[#312222]/40" /> */}
           </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1  relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col lg:flex-row items-center gap-6"
            >
              {/* Profile Image */}
              <div className="relative shrink-0 mb-6 lg:mb-0">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: -8 }}
                  className="relative w-48 h-64 sm:w-56 sm:h-72 lg:w-64 lg:h-90  z-10"
                >
                  <Image
                    src={selectedTestimonial?.image || testimonials[0].image}
                    fill
                    className="rounded-[30px] object-cover border-4 border-white/20"
                    alt={selectedTestimonial?.name || "Testimonial"}
                  />
                </motion.div>
                {/* Decorative shadow element */}
                <div className="absolute inset-0 bg-secondary/20 rounded-[30px] rotate-3 -z-10" />
              </div>

              {/* Textual Content */}
              <div className="flex flex-col text-center lg:text-left space-y-4 max-w-xl w-full">
                <div className="bg-black/10 backdrop-blur-xs p-5 lg:p-8 rounded-[30px] lg:rounded-[40px] border border-white/10">
                  <h4 className="text-xl font-bold text-white mb-1">
                    {selectedTestimonial?.name}
                  </h4>
                  <p className="text-white font-medium tracking-wide uppercase text-xs lg:text-sm mb-3 lg:mb-4">
                    {selectedTestimonial?.treatment}
                  </p>
                  <p className="text-white/90 text-base lg:text-xl font-light italic leading-relaxed">
                    "{selectedTestimonial?.quote}"
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 justify-center lg:justify-start">
                  {/* <button className="px-8 py-3 bg-secondary text-white rounded-full font-semibold border-2 border-transparent hover:bg-transparent hover:border-white transition-all active:scale-95 text-sm lg:text-base">
                    Show More
                  </button> */}
                  
                  {/* Mobile/Tablet Navigation Buttons */}
                  {/* <div className="flex gap-4 lg:hidden mt-4 lg:mt-0">
                    <NavButton direction="prev" onClick={() => swiperInstance?.slidePrev()} />
                    <NavButton direction="next" onClick={() => swiperInstance?.slideNext()} />
                  </div> */}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Preview - Desktop (XL) only */}
        <div className="hidden lg:block w-40 shrink-0 hover:grayscale-0 transition-all duration-500 cursor-pointer"
             onClick={() => swiperInstance?.slideNext()}>
           <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border-4 border-white/10">
              <Image 
                src={testimonials[(activeIndex + 1) % testimonials.length]?.sideImage || testimonials[0].sideImage} 
                fill className="object-cover" alt="next" 
              />
              {/* <div className="absolute inset-0 bg-[#312222]/40" /> */}
           </div>
        </div>
      </div>

      {/* Hidden Functional Swiper */}
      <div className="absolute inset-0 pointer-events-none opacity-0">
        <Swiper
          modules={[Autoplay]}
          onSwiper={setSwiperInstance}
          onSlideChange={handleSlideChange}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          slidesPerView={1}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id} />
          ))}
        </Swiper>
      </div>

      {/* Desktop Floating Navigation (Hidden on touch devices/mobile) */}
      {/* <div className="hidden lg:flex absolute top-[40%] sm:top-1/2 -translate-y-1/2 w-full left-0 justify-between px-2 pointer-events-none z-30">
         <NavButton direction="prev" onClick={() => swiperInstance?.slidePrev()} className="pointer-events-auto" />
         <NavButton direction="next" onClick={() => swiperInstance?.slideNext()} className="pointer-events-auto" />
      </div> */}
    </div>
  );
}

// Helper Sub-component for Buttons
function NavButton({ direction, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white/30 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-secondary hover:border-secondary transition-all active:scale-90 ${className}`}
      aria-label={direction === 'prev' ? 'Previous testimonial' : 'Next testimonial'}
    >
      {direction === 'prev' ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      )}
    </button>
  );
}
