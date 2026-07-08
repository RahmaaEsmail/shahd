"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

// Swiper Styles
import "swiper/css";
import { useRouter } from "next/navigation";

// const data = [
//   { id: 1, title: "Gentle Foaming Cleanser", desc: "Balance & prep the skin", price: "23.00 S.R", img: "/SHAHD-IMAGE/product-details/Rectangle 34.webp" },
//   { id: 2, title: "Gentle Foaming Cleanser", desc: "Balance & prep the skin", price: "23.00 S.R", img: "/SHAHD-IMAGE/product-details/Rectangle 34.webp" },
//   { id: 3, title: "Gentle Foaming Cleanser", desc: "Balance & prep the skin", price: "23.00 S.R", img: "/SHAHD-IMAGE/product-details/Rectangle 34.webp" },
//   { id: 4, title: "Gentle Foaming Cleanser", desc: "Balance & prep the skin", price: "23.00 S.R", img: "/SHAHD-IMAGE/product-details/Rectangle 34.webp" },
//   { id: 5, title: "Gentle Foaming Cleanser", desc: "Balance & prep the skin", price: "23.00 S.R", img: "/SHAHD-IMAGE/product-details/Rectangle 34.webp" }
// ];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
  hover: {
    scale: 1.02,
    color: "#DDB2B5",
    transition: {
      type: "spring",
      stiffness: 400,
    },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      delay: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 50,
  },
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      delay: index * 0.15,
    },
  }),
  hover: {
    scale: 1.02,
    y: -10,
    boxShadow: "0px 20px 30px rgba(221, 178, 181, 0.2)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const imageVariants = {
  hover: {
    scale: 1.1,
    rotate: 2,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 200,
    },
  },
  hover: {
    color: "#DDB2B5",
    x: 5,
    transition: {
      type: "spring",
      stiffness: 400,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      delay: 0.2,
    },
  },
  hover: {
    scale: 1.05,
    backgroundColor: "#DDB2B5",
    color: "#FFFFFF",
    borderColor: "#DDB2B5",
    boxShadow: "0px 8px 15px rgba(221, 178, 181, 0.3)",
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

const priceVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      delay: 0.1,
    },
  },
  hover: {
    scale: 1.1,
    color: "#DDB2B5",
    transition: {
      type: "spring",
      stiffness: 400,
    },
  },
};

const sparkleVariants = {
  animate: {
    scale: [1, 1.2, 1],
    rotate: [0, 180, 360],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function ProductDetailsRoutine({ data }) {
  const { t, i18n } = useTranslation();
  const swiperRef = useRef(null);
  const router = useRouter();
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      className="py-4 main-container overflow-hidden relative"
    >
      {/* Animated background sparkles */}
      <motion.div
        variants={sparkleVariants}
        whileInView="animate"
        className="absolute top-20 left-10 text-primary/20"
      >
        <Sparkles size={40} />
      </motion.div>

      <motion.div
        variants={sparkleVariants}
        whileInView="animate"
        className="absolute bottom-20 right-10 text-primary/20"
      >
        <Sparkles size={60} />
      </motion.div>

      {/* Header Section */}
      <motion.div
        variants={headerVariants}
        className={`mb-8 px-6 text-center md:${i18n?.language == "ar" ? "text-right" : "text-left"}`}
      >
        <motion.div className="relative inline-block">
          <motion.h4
            variants={titleVariants}
            whileHover="hover"
            className={`text-primary text-4xl  font-normal leading-tight relative z-10 ${i18n?.language == "ar" ? "text-right" : "text-left"}`}
          >
            {t("build a routine")}
          </motion.h4>
        </motion.div>

        <motion.p
          variants={subtitleVariants}
          className={`font-medium font-poppins text-sm md:text-base text-[#414141] mt-2 max-w-2xl mx-auto md:mx-0 ${i18n?.language == "ar" ? "text-right" : "text-left"}`}
        >
          {t("For optimal skin results, pair this cleanser with:")}
        </motion.p>
      </motion.div>

      {/* Routine Carousel */}
      <div className="relative px-4 md:px-8">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1.2, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="pb-12 md:pb-16"
        >
          {data?.data?.routines.map((item, index) => (
            <SwiperSlide key={item.routine}>
              <motion.div
                custom={index}
                onClick={() => router.push(`/routine/${item.routine}`)}
                variants={cardVariants}
                whileHover="hover"
                className="p-5 md:p-6 rounded-[28px] md:rounded-[32px] transition-all duration-300 bg-white hover:bg-linear-to-br from-white to-pink-50 border border-gray-100 h-full cursor-pointer"
              >
                <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 items-center h-full">
                  {/* Image Container */}
                  <motion.div
                    className="relative aspect-square w-full sm:w-full max-w-[200px] sm:max-w-none overflow-hidden rounded-[20px] md:rounded-[24px]"
                    whileHover="hover"
                  >
                    <motion.div
                      variants={imageVariants}
                      className="w-full h-full"
                    >
                      <Image
                        src={item.routine_image}
                        alt={item.routine_title}
                        fill
                        className="rounded-[20px] md:rounded-[24px] border border-primary/30 object-cover"
                      />
                    </motion.div>

                    {/* Image Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.1 }}
                      className="absolute inset-0 bg-primary"
                    />
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    className="flex flex-col justify-between h-full gap-3 md:gap-4 w-full text-center sm:text-left"
                    variants={{
                      hover: {
                        transition: {
                          staggerChildren: 0.05,
                        },
                      },
                    }}
                  >
                    <div>
                      <motion.h4
                        variants={textVariants}
                        className="text-lg md:text-xl font-medium leading-snug text-[#4D3E3F] mb-1"
                      >
                        {t(item.routine_title)}
                      </motion.h4>
                      <motion.p
                        variants={textVariants}
                        className="text-xs md:text-sm font-poppins text-[#6A6A6A]"
                      >
                        {t(item.routine_des)}
                      </motion.p>
                    </div>

                    <motion.p
                      variants={priceVariants}
                      whileHover="hover"
                      className="text-xl md:text-2xl font-poppins text-primary font-semibold"
                    >
                      {t(item.price)}
                    </motion.p>

                    <motion.button
                      onClick={() => router.push("/cart")}
                      variants={buttonVariants}
                      initial="hidden"
                      whileInView="visible"
                      whileHover="hover"
                      whileTap="tap"
                      className="rounded-full py-2.5 px-4 w-full border border-primary text-sm md:text-base font-medium text-[#414141] flex items-center justify-center gap-2 hover:text-white transition-all overflow-hidden"
                    >
                      <motion.span
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        className="flex items-center gap-2"
                      >
                        {t("Add To Cart")}
                      </motion.span>
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #ddb2b5 !important;
          background: white;
          width: 40px !important;
          height: 40px !important;
          border-radius: 50%;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 16px !important;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: #ddb2b5;
          color: white !important;
        }

        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #ddb2b5;
          opacity: 0.5;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 30px;
          border-radius: 5px;
          background: #ddb2b5;
        }

        .swiper-pagination-bullet:hover {
          opacity: 1;
          transform: scale(1.2);
        }
      `}</style>
    </motion.section>
  );
}
