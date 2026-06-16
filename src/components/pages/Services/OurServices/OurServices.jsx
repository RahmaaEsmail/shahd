"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { cn } from "../../../../lib/utils";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import OurServiceCard from "./OurServiceCard";
import OurServiceTabs from "./OurServiceTabs";

const data = [
  {
    id: 1,
    image: "/SHAHD-IMAGE/Services/our-service-1.webp",
    type: "face",
    mainColor: "#E8EEF2",
    bgColor: "#B6C7D6",
    title: "Botox for Fine Lines",
    desc: "Smooth away fine lines ,refresh your natural beauty",
  },
  {
    id: 2,
    image: "/SHAHD-IMAGE/Services/our-service-2.webp",
    type: "hair",
    bgColor: "#F1E0E0",
    title: "PRP Hair Therapy",
    mainColor: "#DDB2B5",
    desc: "A regenerative treatment using your body's own plasma ",
  },
  {
    id: 3,
    image: "/SHAHD-IMAGE/Services/our-service-3.webp",
    type: "skin",
    bgColor: "#D7CDDB",
    title: "Dermal Fillers",
    mainColor: "#885D8A",
    desc: "Restore lost volume and sculpt your natural beauty ",
  },
  {
    id: 4,
    image: "/SHAHD-IMAGE/Services/our-service-4.webp",
    type: "body",
    bgColor: "#E8E9F2",
    title: "Hydra Facial Glow",
    mainColor: "#8995A1",
    desc: "Deep cleansing, hydration, and exfoliation for instantly ",
  },
  {
    id: 5,
    image: "/SHAHD-IMAGE/Services/our-service-1.webp",
    type: "face",
    mainColor: "#E8EEF2",
    bgColor: "#B6C7D6",
    title: "Botox for Fine Lines",
    desc: "Smooth away fine lines ,refresh your natural beauty",
  },
  {
    id: 6,
    image: "/SHAHD-IMAGE/Services/our-service-2.webp",
    type: "hair",
    bgColor: "#F1E0E0",
    title: "PRP Hair Therapy",
    mainColor: "#DDB2B5",
    desc: "A regenerative treatment using your body's own plasma ",
  },
  {
    id: 7,
    image: "/SHAHD-IMAGE/Services/our-service-3.webp",
    type: "skin",
    bgColor: "#D7CDDB",
    title: "Dermal Fillers",
    mainColor: "#885D8A",
    desc: "Restore lost volume and sculpt your natural beauty ",
  },
  {
    id: 8,
    image: "/SHAHD-IMAGE/Services/our-service-4.webp",
    type: "body",
    bgColor: "#E8E9F2",
    title: "Hydra Facial Glow",
    mainColor: "#8995A1",
    desc: "Deep cleansing, hydration, and exfoliation for instantly ",
  }
];
const tabs = [
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "face",
  },
  {
    id: 3,
    name: "hair",
  },
  {
    id: 4,
    name: "Body",
  },
  {
    id: 5,
    name: "skin",
  },
];


import { useTranslation } from "react-i18next";

export default function OurServices() {
  const { t , i18n} = useTranslation();
  const isRtl = i18n.language === 'ar' || i18n.dir() === 'rtl';
  const currentDir = isRtl ? "rtl" : "ltr";

  const [activeTab, setActiveTab] = useState(1);
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');

  useEffect(() => {
    if (categoryParam) {
      const foundTab = tabs.find(t => t.name.toLowerCase() === categoryParam.toLowerCase());
      if (foundTab) {
        setActiveTab(foundTab.id);
      }
    } else {
      setActiveTab(1); // Default to "All" if no category is present
    }
  }, [categoryParam]);

  // Filter data based on active tab
  const filteredData = activeTab === 1
    ? data
    : data.filter(item => item.type.toLowerCase() === tabs.find(tab => tab.id === activeTab)?.name.toLowerCase());

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },

  };

  return (
    <div id="our-services" dir={currentDir} className="min-h-[85vh] relative scroll-mt-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/SHAHD-IMAGE/Services/Desktop - 20.webp')",
        }}
      ></div>

      <div className="relative z-30 py-5">
        <div className="max-w-4xl flex flex-col justify-between items-center gap-3 mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-secondary font-poppins font-bold text-center text-2xl"
          >
            {t("Our Services Title")}
          </motion.h1>

          <OurServiceTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="main-container mx-auto my-5"
        >
          <AnimatePresence mode="wait">
            <Swiper
              dir={currentDir}
              key={activeTab}
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={16}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}

              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 16,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 16,
                },
              }}
              className=""
            >
              {filteredData.map((item, index) => (
                <SwiperSlide key={`${item.id}-${index}`}>
                  <OurServiceCard cardVariants={cardVariants} item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}