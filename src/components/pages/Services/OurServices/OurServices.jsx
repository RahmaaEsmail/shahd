"use client";
import React, { useState, useEffect } from "react";
import { cn } from "../../../../lib/utils";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import OurServiceCard from "./OurServiceCard";
import OurServiceTabs from "./OurServiceTabs";
import { service_data } from "@/data/serviceData";

const staticTabs = [
  { id: 1, name: "All" },
  { id: 2, name: "face" },
  { id: 3, name: "hair" },
  { id: 4, name: "Body" },
  { id: 5, name: "skin" },
];

import { useTranslation } from "react-i18next";

export default function OurServices({ data, categories, lang }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar" || i18n.dir() === "rtl";
  const currentDir = isRtl ? "rtl" : "ltr";

  const [activeTab, setActiveTab] = useState(1);
  const [categoryParam, setCategoryParam] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setCategoryParam(params.get("category"));
    }
  }, []);

  // Build tabs: "All" + one per category from API (or static fallback)
  const tabs =
    categories && categories.length > 0
      ? [
          { id: 1, name: t("All") },
          ...categories.map((cat) => ({
            id: cat.id + 1, // offset to avoid collision with "All" id=1
            name: cat[`name_${lang}`] || cat.name_en || cat.name || "",
            categoryId: cat.id,
          })),
        ]
      : staticTabs.map((tab) => ({ ...tab, name: t(tab.name) }));

  // Build service cards list from API data or static fallback
  const staticServices = service_data?.slice(0, 8);
  const resolvedServices =
    data && data.length > 0
      ? data.map((item, idx) => ({
          id: item.id,
          image:
            item.image_url ||
            item.image ||
            staticServices[idx % staticServices.length]?.image ||
            "/SHAHD-IMAGE/Services/our-service-1.webp",
          type: item.category_name || item.type || item.category_id?.toString(),
          mainColor:
            staticServices[idx % staticServices.length]?.mainColor || "#DDB2B5",
          bgColor:
            staticServices[idx % staticServices.length]?.bgColor || "#F1E0E0",
          title: item.title || "",
          description: item.description || item.desc || "",
          categoryId: item.category || item.category_id,
        }))
      : staticServices;

  useEffect(() => {
    if (categoryParam) {
      const foundTab = tabs.find(
        (t) =>
          (t.categoryId != null && t.categoryId.toString() === categoryParam) ||
          t.name?.toLowerCase() === categoryParam.toLowerCase(),
      );
      if (foundTab) {
        setActiveTab(foundTab.id);
      }
    } else {
      setActiveTab(1); // Default to "All" if no category is present
    }
  }, [categoryParam, tabs]);

  // Filter data based on active tab
  const filteredData =
    activeTab === 1
      ? resolvedServices
      : resolvedServices.filter((item) => {
          const activeTabObj = tabs.find((tab) => tab.id === activeTab);
          if (!activeTabObj) return true;
          // Match by categoryId (for dynamic) or type name (for static)
          return activeTabObj.categoryId != null
            ? Number(item.categoryId) === Number(activeTabObj.categoryId)
            : item.type?.toLowerCase() === activeTabObj.name?.toLowerCase();
        });

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
    <div
      id="our-services"
      dir={currentDir}
      className="min-h-[85vh] relative scroll-mt-24"
    >
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

          <OurServiceTabs
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
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
