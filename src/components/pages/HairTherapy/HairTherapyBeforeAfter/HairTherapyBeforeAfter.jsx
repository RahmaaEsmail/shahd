"use client";
import React, { useState } from "react";
import HairTherapyBeforeLeftContent from "./HairTherapyBeforeLeftContent";
import HairTherapyBeforeRightContentImages from "./HairTherapyBeforeRightContent";
import HairTherapyBeforeAfterHeader from "./HairTherapyBeforeAfterHeader";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const staticTreatments = [
  {
    id: 1,
    titleKey: "Non Surgical Nose",
    descriptionKey: "Non Surgical Nose Desc",
    before_img: "/SHAHD-IMAGE/homebefore/360192f749c1a01a3084ceeb2712b040de2415a4.webp",
    after_img: "/SHAHD-IMAGE/homebefore/0402d70a66c38d6594b9a42587cf70e03e81233f.webp",
    thumbnail: "/SHAHD-IMAGE/homebefore/360192f749c1a01a3084ceeb2712b040de2415a4.webp",
  },
  {
    id: 2,
    titleKey: "Lip Enhancement",
    descriptionKey: "Lip Enhancement Desc",
    before_img: "/SHAHD-IMAGE/homebefore/51d5b6c661c3da2fa95e8b494d25ea05fa35334b.webp",
    after_img: "/SHAHD-IMAGE/homebefore/mainImg.webp",
    thumbnail: "/SHAHD-IMAGE/homebefore/51d5b6c661c3da2fa95e8b494d25ea05fa35334b.webp",
  },
  {
    id: 4,
    titleKey: "Facial Contouring",
    descriptionKey: "Facial Contouring Desc",
    before_img: "/SHAHD-IMAGE/homebefore/mainImg.webp",
    after_img: "/SHAHD-IMAGE/homebefore/51d5b6c661c3da2fa95e8b494d25ea05fa35334b.webp",
    thumbnail: "/SHAHD-IMAGE/homebefore/mainImg.webp",
  },
  {
    id: 5,
    titleKey: "Hair Restoration",
    descriptionKey: "Hair Restoration Desc",
    before_img: "/SHAHD-IMAGE/homebefore/360192f749c1a01a3084ceeb2712b040de2415a4.webp",
    after_img: "/SHAHD-IMAGE/homebefore/mainImg.webp",
    thumbnail: "/SHAHD-IMAGE/homebefore/mainImg.webp",
  },
  {
    id: 6,
    titleKey: "Botox Treatment",
    descriptionKey: "Botox Treatment Desc",
    before_img: "/SHAHD-IMAGE/homebefore/mainImg.webp",
    after_img: "/SHAHD-IMAGE/homebefore/0402d70a66c38d6594b9a42587cf70e03e81233f.webp",
    thumbnail: "/SHAHD-IMAGE/homebefore/360192f749c1a01a3084ceeb2712b040de2415a4.webp",
  },
  {
    id: 7,
    titleKey: "Laser Therapy",
    descriptionKey: "Laser Therapy Desc",
    before_img: "/SHAHD-IMAGE/homebefore/51d5b6c661c3da2fa95e8b494d25ea05fa35334b.webp",
    after_img: "/SHAHD-IMAGE/homebefore/360192f749c1a01a3084ceeb2712b040de2415a4.webp",
    thumbnail: "/SHAHD-IMAGE/homebefore/mainImg.webp",
  },
  {
    id: 8,
    titleKey: "Chemical Peel",
    descriptionKey: "Chemical Peel Desc",
    before_img: "/SHAHD-IMAGE/homebefore/0402d70a66c38d6594b9a42587cf70e03e81233f.webp",
    after_img: "/SHAHD-IMAGE/homebefore/51d5b6c661c3da2fa95e8b494d25ea05fa35334b.webp",
    thumbnail: "/SHAHD-IMAGE/homebefore/mainImg.webp",
  },
];

export default function HairTherapyBeforeAfter({ data }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar")
    ? "ar"
    : i18n.language?.startsWith("sk")
      ? "sk"
      : "en";
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  const treatments = data && data.length > 0
    ? data.map(item => ({
        id: item.id,
        title: item[`title_${lang}`] || item.title_en || "",
        description: item[`description_${lang}`] || item.description_en || "",
        before_img: item.image_url || "/SHAHD-IMAGE/homebefore/mainImg.webp",
        after_img: item.image_url || "/SHAHD-IMAGE/homebefore/mainImg.webp",
        thumbnail: item.image_url || "/SHAHD-IMAGE/homebefore/mainImg.webp"
      }))
    : staticTreatments;

  const activeTreatment = treatments[activeIndex] || treatments[0] || {};

  return (
    <section className="bg-[#FFF9F7] min-h-screen py-12 px-6 lg:px-16 overflow-hidden">
      {/* Header */}
      <HairTherapyBeforeAfterHeader />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
        {/* Left Column - Text & Thumbnails */}
        <HairTherapyBeforeLeftContent
          setActiveIndex={setActiveIndex}
          activeIndex={activeIndex}
          activeTreatment={activeTreatment}
          treatments={treatments}
        />

        {/* Right Column - Before/After Images */}
        <HairTherapyBeforeRightContentImages
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
