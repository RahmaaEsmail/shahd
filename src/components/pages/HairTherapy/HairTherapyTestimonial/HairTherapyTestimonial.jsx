"use client";
import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const data = [
  { id: 1, img: "/SHAHD-IMAGE/hair-therapy/Rectangle 62.webp", titleKey: "FUE Title", descriptionKey: "FUE Desc" },
  { id: 2, img: "/SHAHD-IMAGE/hair-therapy/Rectangle 62.webp", titleKey: "FUE Title", descriptionKey: "FUE Desc" },
  { id: 3, img: "/SHAHD-IMAGE/hair-therapy/Rectangle 62.webp", titleKey: "FUE Title", descriptionKey: "FUE Desc" },
  { id: 4, img: "/SHAHD-IMAGE/hair-therapy/Rectangle 62.webp", titleKey: "FUE Title", descriptionKey: "FUE Desc" },
  { id: 5, img: "/SHAHD-IMAGE/hair-therapy/Rectangle 62.webp", titleKey: "FUE Title", descriptionKey: "FUE Desc" },
  { id: 6, img: "/SHAHD-IMAGE/hair-therapy/Rectangle 62.webp", titleKey: "FUE Title", descriptionKey: "FUE Desc" },
];

export default function HairTherapyTestimonial() {
  const { t , i18n } = useTranslation();
  const dir =  i18n?.language == "ar" ? "rtl" : "ltr";
  const [isMobile, setIsMobile] = useState(false);
  const START_INDEX = Math.floor(data.length / 2);
  const swiperRef = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      // Threshold for desktop-level 3D effects
      setIsMobile(window.innerWidth < 700);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  const goToSlide = (direction) => {
    const swiper = swiperRef.current;
    if (!swiper || swiper.destroyed || swiper.animating) return;

    const total = data.length;
    const current = swiper.realIndex;

    const nextIndex =
      direction === "next"
        ? (current + 1) % total
        : (current - 1 + total) % total;

    swiper.autoplay?.stop();

    swiper.slideToLoop(nextIndex, 800, true);

    setTimeout(() => {
      if (!swiper.destroyed) {
        swiper.updateSlidesClasses();
        swiper.autoplay?.start();
      }
    }, 850);
  };

  return (
    <div
    dir={dir}
    className="relative w-full py-20  overflow-hidden" style={{ background: '#F4E7E833' }}>
      {/* Background & Overlays */}
      <div className='absolute inset-0 w-full h-full'>
        <Image
          src="/SHAHD-IMAGE/hair-therapy/82af8657dbd0e09d955942f00f48d5f6bd97f262.webp"
          alt="background"
          fill
          className='object-cover'
          priority
        />
      </div>
      <div className="absolute inset-0 z-10 bg-[#F4E7E8]/60 backdrop-blur-[1px]" />
      <img src="/SHAHD-IMAGE/hair-therapy/Rectangle 24.webp" className='absolute -top-4 md:-top-8 left-0 right-0 w-full z-10' alt="" />

      <div className="relative z-20">
        {/* Header Section */}
        <div className='flex flex-col gap-2 mb-2 text-center px-4 md:px-8'>
          <p className='text-[#7189A2] text-2xl font-bold font-poppins'>
            {t("Hair Techniques Title")}
          </p>
          <h2 className='text-primary text-3xl font-normal leading-tight uppercase max-w-4xl mx-auto'>
            {t("Advanced Hair Techniques")}
          </h2>
        </div>

        {/* Navigation Buttons */}
       <div className="flex justify-end mx-4 gap-2 items-center">
         <button
          type="button"
          onClick={() => goToSlide("prev")}

          className="w-10 h-10 md:w-14 md:h-14 bg-[#7189A2] rounded-full flex items-center justify-center cursor-pointer text-white shadow-lg hover:bg-[#5a6e84] transition-all z-50"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        <button
          type="button"
          onClick={() => goToSlide("next")}

          className="w-10 h-10 md:w-14 md:h-14 bg-[#7189A2] rounded-full flex items-center justify-center cursor-pointer text-white shadow-lg hover:bg-[#5a6e84] transition-all z-50"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
       </div>

        <div className="relative w-full">

          <Swiper
            dir={dir}
            key={dir}
            key={isMobile ? "mobile" : "desktop"}
            modules={[Navigation, EffectCoverflow, Autoplay]}
            effect={isMobile ? "slide" : "coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            initialSlide={START_INDEX}
            loopAdditionalSlides={data.length}
            slidesPerView="auto"
            spaceBetween={24}
            speed={800}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;

              requestAnimationFrame(() => {
                if (!swiper.destroyed) {
                  swiper.update();
                  swiper.slideToLoop(START_INDEX, 0, false);
                  swiper.updateSlidesClasses();
                }
              });
            }}
            onBeforeDestroy={() => {
              swiperRef.current = null;
            }}
            onAfterInit={(swiper) => {
              requestAnimationFrame(() => {
                swiper.update();
                swiper.slideToLoop(START_INDEX, 0, false);
                swiper.updateSlidesClasses();
              });
            }}
            onResize={(swiper) => {
              swiper.update();
              swiper.slideToLoop(START_INDEX, 0, false);
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 120,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              400: { spaceBetween: 16 },
              500: { spaceBetween: 20 },
              700: { spaceBetween: 24 },
              1024: { spaceBetween: 32 },
              1400: { spaceBetween: 60 },
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            className="!overflow-visible !px-4"
          >
            {data.map((item, index) => (
              <SwiperSlide
                key={`${item.id}-${index}`}
                className="group rounded-[30px] !w-[280px] sm:!w-[320px] md:!w-[380px] lg:!w-[448px] !flex justify-center items-center"
              >
                <div className="relative w-full aspect-[4/5] lg:aspect-square rounded-[30px]">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full rounded-[30px] object-cover"
                  />

                  <div
                    className={`absolute -bottom-10 left-0 right-0 bg-white/50 backdrop-blur-sm flex flex-col gap-2 md:gap-3 border border-hair-card-bg/50 p-3 sm:p-4 md:p-5 lg:p-6 rounded-3xl z-20 transition-all duration-700 ease-in-out
          ${isMobile
                        ? "opacity-100"
                        : "opacity-0 translate-y-4 group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:translate-y-0"
                      }`}
                  >
                    <p className="text-base text-white sm:text-lg md:text-xl lg:text-2xl font-medium leading-snug">
                      {t(item.titleKey)}
                    </p>

                    <p className="text-[#414141] text-xs sm:text-sm md:text-base font-normal line-clamp-2">
                      {t(item.descriptionKey)}
                    </p>

                    <button className="w-full mt-4 bg-secondary bg-hair-slate text-primary-foreground py-2 md:py-4 rounded-full text-xs sm:text-sm md:text-base lg:text-lg font-medium uppercase hover:bg-hair-slate-dark transition-colors">
                      {t("Book Your Consultation")}
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