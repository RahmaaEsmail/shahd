"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import HomeBeforeAfterHeader from "./HomeBeforeAfterHeader";
import HomeBeforeLeftContent from "./HomeBeforeLeftContent";
import HomeBeforeRightContentImages from "./HomeBeforeRightContentImages";

export default function HomeBeforeAfter({ data }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar")
    ? "ar"
    : i18n.language?.startsWith("sk")
    ? "sk"
    : "en";

  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  const staticTreatments = [
    {
      id: 1,
      title: t("Non-Surgical Nose Reshaping"),
      description: t("Nose Reshaping Desc"),
      before_img: "/SHAHD-IMAGE/homebefore/360192f749c1a01a3084ceeb2712b040de2415a4.webp",
      after_img: "/SHAHD-IMAGE/homebefore/0402d70a66c38d6594b9a42587cf70e03e81233f.webp",
      thumbnail: "/SHAHD-IMAGE/homebefore/360192f749c1a01a3084ceeb2712b040de2415a4.webp",
    },
    {
      id: 2,
      title: t("Lip Enhancement"),
      description: t("Lip Enhancement Desc"),
      before_img: "/SHAHD-IMAGE/homebefore/51d5b6c661c3da2fa95e8b494d25ea05fa35334b.webp",
      after_img: "/SHAHD-IMAGE/homebefore/mainImg.webp",
      thumbnail: "/SHAHD-IMAGE/homebefore/51d5b6c661c3da2fa95e8b494d25ea05fa35334b.webp",
    },
    {
      id: 4,
      title: t("Facial Contouring"),
      description: t("Facial Contouring Desc"),
      before_img: "/SHAHD-IMAGE/homebefore/mainImg.webp",
      after_img: "/SHAHD-IMAGE/homebefore/51d5b6c661c3da2fa95e8b494d25ea05fa35334b.webp",
      thumbnail: "/SHAHD-IMAGE/homebefore/mainImg.webp",
    },
    {
      id: 5,
      title: t("Hair Restoration"),
      description: t("Hair Restoration Desc"),
      before_img: "/SHAHD-IMAGE/homebefore/360192f749c1a01a3084ceeb2712b040de2415a4.webp",
      after_img: "/SHAHD-IMAGE/homebefore/mainImg.webp",
      thumbnail: "/SHAHD-IMAGE/homebefore/mainImg.webp",
    },
    {
      id: 6,
      title: t("Botox Treatment"),
      description: t("Botox Treatment Desc"),
      before_img: "/SHAHD-IMAGE/homebefore/mainImg.webp",
      after_img: "/SHAHD-IMAGE/homebefore/0402d70a66c38d6594b9a42587cf70e03e81233f.webp",
      thumbnail: "/SHAHD-IMAGE/homebefore/360192f749c1a01a3084ceeb2712b040de2415a4.webp",
    },
    {
      id: 7,
      title: t("Laser Therapy"),
      description: t("Laser Therapy Desc"),
      before_img: "/SHAHD-IMAGE/homebefore/51d5b6c661c3da2fa95e8b494d25ea05fa35334b.webp",
      after_img: "/SHAHD-IMAGE/homebefore/360192f749c1a01a3084ceeb2712b040de2415a4.webp",
      thumbnail: "/SHAHD-IMAGE/homebefore/mainImg.webp",
    },
    {
      id: 8,
      title: t("Chemical Peel"),
      description: t("Chemical Peel Desc"),
      before_img: "/SHAHD-IMAGE/homebefore/0402d70a66c38d6594b9a42587cf70e03e81233f.webp",
      after_img: "/SHAHD-IMAGE/homebefore/51d5b6c661c3da2fa95e8b494d25ea05fa35334b.webp",
      thumbnail: "/SHAHD-IMAGE/homebefore/mainImg.webp",
    },
  ];

  const treatments =
    data?.results && data.results.length > 0
      ? data.results.map((item) => ({
          id: item.id,
          title: item[`title_${lang}`] || item.title_en,
          description: item[`description_${lang}`] || item.description_en,
          before_img: item.before_image_url || "/SHAHD-IMAGE/homebefore/mainImg.webp",
          after_img: item.after_image_url || "/SHAHD-IMAGE/homebefore/mainImg.webp",
          thumbnail: item.before_image_url || "/SHAHD-IMAGE/homebefore/mainImg.webp",
        }))
      : staticTreatments;

  const activeTreatment = treatments[activeIndex];

  return (
    <section className="bg-[#FFF9F7] min-h-screen py-6 px-6 overflow-hidden">
      {/* Header */}
      <HomeBeforeAfterHeader />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
        {/* Left Column - Text & Thumbnails */}
        <HomeBeforeLeftContent
          setActiveIndex={setActiveIndex}
          activeIndex={activeIndex}
          activeTreatment={activeTreatment}
          treatments={treatments}
        />

        {/* Right Column - Before/After Images */}
        <HomeBeforeRightContentImages
          treatments={treatments}
          setActiveIndex={setActiveIndex}
          activeIndex={activeIndex}
          activeTreatment={activeTreatment}
        />
      </div>

      {/* Show More Button - Only visible on bottom for mobile/tablet */}
      <div className="flex justify-center mt-10 md:hidden">
        <motion.button
          onClick={() => router.push("/services")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group flex items-center gap-2 bg-secondary hover:bg-[#5a7289] text-white px-8 py-4 rounded-full font-medium shadow-lg transition-colors duration-300"
        >
          <span className="text-lg font-poppins">{t("Show More")}</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>
    </section>
  );
}
