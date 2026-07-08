"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // <-- Added Navigation CSS

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules"; // <-- Added Navigation Module
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

const images = [
  {
    id: 1,
    image: "/SHAHD-IMAGE/Store/store-swiper-1.webp",
    title: "DAILY GLOW SET",
    desc: "Cleanser + Serum + Moisturizer + your everyday skin essentials.",
    btn_name: "SHOP BUNDLE",
    btn_link: "/products",
  },
  {
    id: 2,
    image: "/SHAHD-IMAGE/Store/store-swiper-1.webp",
    title: "DAILY GLOW SET",
    desc: "Cleanser + Serum + Moisturizer + your everyday skin essentials.",
    btn_name: "SHOP BUNDLE",
    btn_link: "/products",
  },
  {
    id: 3,
    image: "/SHAHD-IMAGE/Store/store-swiper-1.webp",
    title: "DAILY GLOW SET",
    desc: "Cleanser + Serum + Moisturizer + your everyday skin essentials.",
    btn_name: "SHOP BUNDLE",
    btn_link: "/products",
  },
  {
    id: 4,
    image: "/SHAHD-IMAGE/Store/store-swiper-1.webp",
    title: "DAILY GLOW SET",
    desc: "Cleanser + Serum + Moisturizer + your everyday skin essentials.",
    btn_name: "SHOP BUNDLE",
    btn_link: "/products",
  },
  {
    id: 5,
    image: "/SHAHD-IMAGE/Store/store-swiper-1.webp",
    title: "DAILY GLOW SET",
    desc: "Cleanser + Serum + Moisturizer + your everyday skin essentials.",
    btn_name: "SHOP BUNDLE",
    btn_link: "/products",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const buttonVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      delay: 0.4,
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 8px 30px 0px rgba(221, 178, 181, 0.6)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: {
    scale: 0.95,
  },
};

const slideVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export default function StoreSwiper({ data }) {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar")
    ? "ar"
    : i18n.language?.startsWith("sk")
      ? "sk"
      : "en";

  const isDynamic = data && data.length > 0;
  const resolvedSlides = isDynamic
    ? data.map((item, idx) => ({
        id: item.id || idx + 1,
        image: item.image_url,
        title: item.title,
        desc: item.description,
        btn_name: t("SHOP BUNDLE"),
        btn_link: "/products",
      }))
    : images.map((item) => ({
        ...item,
        title: t(item.title),
        desc: t(item.desc),
        btn_name: t(item.btn_name),
      }));

  useEffect(() => {
    if (swiperInstance) {
      // Set initial slide to index 1 (second slide)
      swiperInstance.slideTo(1, 0);
    }
  }, [swiperInstance]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={containerVariants}
      className="relative w-full py-8 group/swiper-container"
    >
      <Swiper
        onSwiper={setSwiperInstance}
        slidesPerView={1}
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        initialSlide={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        modules={[Pagination, Autoplay, Navigation]} // <-- Enabled Navigation module
        className="store-swiper"
        breakpoints={{
          640: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1.5,
            spaceBetween: 30,
          },
        }}
      >
        {resolvedSlides?.map((item, index) => (
          <SwiperSlide key={item?.id}>
            <motion.div
              variants={slideVariants}
              initial="initial"
              whileInView={"visible"}
              viewport={{ once: false }}
              whileHover="hover"
              className="relative w-full h-[270px] overflow-hidden rounded-[32px] md:rounded-[52px] group cursor-pointer"
            >
              <motion.div
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={item?.image}
                  alt={item?.title}
                  fill
                  className="object-fill"
                  priority={index === 1}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0, 0, 0, 0.3) -21.14%, rgba(221, 178, 181, 0.86) 100%)",
                }}
              />

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-8"
              >
                <motion.h2
                  variants={itemVariants}
                  className="text-3xl md:text-5xl text-primary font-normal leading-tight mb-2 md:mb-4"
                >
                  {item?.title}
                </motion.h2>

                <motion.p
                  variants={itemVariants}
                  className="font-poppins text-white text-sm md:text-xl mb-6 md:mb-8 max-w-md md:max-w-none"
                >
                  {item?.desc}
                </motion.p>

                <motion.button
                  onClick={() => router.push(item?.btn_link)}
                  variants={buttonVariants}
                  className="bg-white text-primary font-medium text-sm md:text-xl rounded-full h-[44px] md:h-[52px] w-[160px] md:w-[190px] shadow-xl hover:bg-opacity-90 transition-all duration-300"
                >
                  {item?.btn_name}
                </motion.button>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 0.1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-white to-transparent rounded-full blur-3xl pointer-events-none"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 0.1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1, delay: 0.7 }}
                className="absolute bottom-0 left-0 w-64 h-64 bg-linear-to-tr from-[#DDB2B5] to-transparent rounded-full blur-3xl pointer-events-none"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <button className="swiper-button-prev-custom group/btn md:flex hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-6 h-6 transition-transform group-hover/btn:-translate-x-0.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button className="swiper-button-next-custom group/btn md:flex hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-6 h-6 transition-transform group-hover/btn:translate-x-0.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      {/* Custom CSS for Swiper styling */}
      <style jsx global>{`
        .store-swiper {
          padding: 10px 0 30px 0 !important;
          height: 300px !important;
        }
        @media (min-width: 768px) {
          .store-swiper {
            padding: 20px 0 50px 0 !important;
            height: auto !important;
          }
        }

        .store-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: linear-gradient(90deg, #deb3b6 0%, #eed2cd 100%);
          opacity: 0.5;
          transition: all 0.3s ease;
        }

        .store-swiper .swiper-pagination-bullet-active {
          width: 60px;
          border-radius: 10px;
          background: linear-gradient(90deg, #deb3b6 0%, #eed2cd 100%);
          opacity: 1;
        }

        .store-swiper .swiper-slide {
          transition: all 0.5s ease;
          opacity: 0.7;
          transform: scale(0.95);
        }

        .store-swiper .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
        }

        @media (max-width: 768px) {
          .store-swiper .swiper-slide {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Custom Navigation Styles */
        .swiper-button-prev-custom,
        .swiper-button-next-custom {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: white;
          color: #deb3b6;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          z-index: 10;
          cursor: pointer;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          opacity: 0;
        }

        /* Fade arrows in smoothly on container hover */
        .group\/swiper-container:hover .swiper-button-prev-custom,
        .group\/swiper-container:hover .swiper-button-next-custom {
          opacity: 1;
        }

        .swiper-button-prev-custom {
          left: 4%;
        }

        .swiper-button-next-custom {
          right: 4%;
        }

        .swiper-button-prev-custom:hover,
        .swiper-button-next-custom:hover {
          background-color: #deb3b6;
          color: white;
          box-shadow: 0 6px 25px rgba(222, 179, 182, 0.4);
        }

        /* Swiper disabled state handling */
        .swiper-button-disabled {
          opacity: 0.3 !important;
          cursor: not-allowed;
          pointer-events: none;
        }
      `}</style>
    </motion.div>
  );
}
