"use client";
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const data = [
  { id: 1, img: "/images/hair-therapy/Rectangle 62.png", title: "FUE (Follicular Unit Extraction)", description: "A Minimally Invasive Technique Where Individual Follicles Are Extracted And Transplanted For Natural Density And Faster Healing." },
  { id: 2, img: "/images/hair-therapy/Rectangle 63.png", title: "FUE (Follicular Unit Extraction)", description: "A Minimally Invasive Technique Where Individual Follicles Are Extracted And Transplanted For Natural Density And Faster Healing." },
  { id: 3, img: "/images/hair-therapy/Rectangle 67.png", title: "FUE (Follicular Unit Extraction)", description: "A Minimally Invasive Technique Where Individual Follicles Are Extracted And Transplanted For Natural Density And Faster Healing." },
  { id: 4, img: "/images/hair-therapy/Rectangle 64.png", title: "FUE (Follicular Unit Extraction)", description: "A Minimally Invasive Technique Where Individual Follicles Are Extracted And Transplanted For Natural Density And Faster Healing." },
  { id: 5, img: "/images/hair-therapy/Rectangle 68.png", title: "FUE (Follicular Unit Extraction)", description: "A Minimally Invasive Technique Where Individual Follicles Are Extracted And Transplanted For Natural Density And Faster Healing." },
  { id: 6, img: "/images/hair-therapy/Rectangle 68.png", title: "FUE (Follicular Unit Extraction)", description: "A Minimally Invasive Technique Where Individual Follicles Are Extracted And Transplanted For Natural Density And Faster Healing." },
];

export default function HairTherapyTestimonial() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Threshold for desktop-level 3D effects
      setIsMobile(window.innerWidth < 700);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  return (
    <div className="relative w-full py-12 md:py-20 overflow-hidden" style={{ background: '#F4E7E833' }}>
      {/* Background & Overlays */}
      <div className='absolute inset-0 w-full h-full'>
        <Image
          src="/images/hair-therapy/82af8657dbd0e09d955942f00f48d5f6bd97f262.jpg"
          alt="background"
          fill
          className='object-cover'
          priority
        />
      </div>
      <div className="absolute inset-0 z-10 bg-[#F4E7E8]/60 backdrop-blur-[1px]" />
      <img src="/images/hair-therapy/Rectangle 24.svg" className='absolute -top-4 md:-top-8 left-0 right-0 w-full z-10' alt="" />

      <div className="relative z-20">
        {/* Header Section */}
        <div className='flex flex-col gap-2 mb-8 md:mb-10 text-center px-4 md:px-8'>
          <p className='text-[#7189A2] text-base md:text-[27px] font-bold font-poppins'>
            Hair Transplant Techniques & Therapies
          </p>
          <h2 className='text-primary text-[28px] sm:text-4xl md:text-5xl lg:text-[64px] font-normal leading-tight uppercase max-w-4xl mx-auto'>
            Advanced Medical Techniques for hair transplant
          </h2>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center lg:justify-end gap-4 lg:px-20 px-4 mb-6">
          <div className="swiper-button-prev-custom w-10 h-10 md:w-14 md:h-14 bg-[#7189A2] rounded-full flex items-center justify-center cursor-pointer text-white shadow-lg hover:bg-[#5a6e84] transition-all z-50">
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          <div className="swiper-button-next-custom w-10 h-10 md:w-14 md:h-14 bg-[#7189A2] rounded-full flex items-center justify-center cursor-pointer text-white shadow-lg hover:bg-[#5a6e84] transition-all z-50">
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </div>
        </div>

        <div className="relative w-full">
          <Swiper
            key={isMobile ? 'mobile' : 'desktop'}
            modules={[Navigation, EffectCoverflow, Autoplay]}
            effect={isMobile ? 'slide' : 'coverflow'}
            grabCursor={true}

            centeredSlides={true}
            loop={true}
            // loopAdditionalSlides={3}
            speed={800}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            slidesPerView={1.15}
            spaceBetween={12}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 120,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              400: { slidesPerView: 1.3, spaceBetween: 16 },
              500: { slidesPerView: 1.5, spaceBetween: 20 },
              700: { slidesPerView: 2, spaceBetween: 24 },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
                coverflowEffect: { rotate: 30, stretch: 0, depth: 100, modifier: 1, slideShadows: false },
              },
              1400: { slidesPerView: 3.2, spaceBetween: 40 },
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            className="!overflow-visible px-4"
          >
            {data.map((item, index) => (
              <SwiperSlide
                key={`${item.id}-${index}`}
                className="group relative !flex justify-center items-center"
              >
                <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[448px] aspect-[4/5] lg:aspect-square rounded-3xl overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Overlay */}
                  <div className={`absolute -bottom-10 left-0 right-0 p-4 bg-white/25 backdrop-blur-lg flex flex-col gap-2 md:gap-3 border border-hair-card-bg/50 p-3 sm:p-4 md:p-5 lg:p-6 rounded-3xl z-20 transition-all duration-700 ease-in-out
                    ${isMobile
                      ? 'opacity-100'
                      : 'opacity-0 translate-y-4 group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:translate-y-0'
                    }`}>
                    <p className="text-base text-white sm:text-lg md:text-xl lg:text-2xl font-medium leading-snug">
                      {item.title}
                    </p>
                    <p className="text-[#414141] text-xs sm:text-sm md:text-base font-normal line-clamp-2">
                      {item.description}
                    </p>
                    <button className="w-full bg-secondary bg-hair-slate text-primary-foreground py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-base lg:text-lg font-medium uppercase hover:bg-hair-slate-dark transition-colors">
                      Book Your Consultation
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}