"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import HomeBeforeAfterHeader from "./HomeBeforeAfterHeader";
import HomeBeforeLeftContent from "./HomeBeforeLeftContent";
import HomeBeforeRightContentImages from "./HomeBeforeRightContentImages";

const treatments = [
  {
    id: 1,
    title: "Non-Surgical Nose Reshaping",
    description:
      "Achieved a balanced and natural facial profile with minimal downtime. Using advanced fillers to reshape without surgery.",
    before_img: "/images/homebefore/360192f749c1a01a3084ceeb2712b040de2415a4.png",
    after_img: "/images/homebefore/0402d70a66c38d6594b9a42587cf70e03e81233f.png",
    thumbnail: "/images/homebefore/360192f749c1a01a3084ceeb2712b040de2415a4.png",
  },
  {
    id: 2,
    title: "Lip Enhancement",
    description:
      "Natural-looking volume and definition for a more youthful smile. Our specialized technique ensures symmetrical and plump lips.",
    before_img: "/images/homebefore/51d5b6c661c3da2fa95e8b494d25ea05fa35334b.png",
    after_img: "/images/homebefore/mainImg.png",
    thumbnail: "/images/homebefore/51d5b6c661c3da2fa95e8b494d25ea05fa35334b.png",
  },
  // {
  //   id: 3,
  //   title: "Skin Rejuvenation",
  //   description: "Radiant, glowing skin with improved texture and tone. Targeting fine lines, sun damage, and uneven pigmentation.",
  //   before_img: "/images/homebefore/0402d70a66c38d6594b9a42587cf70e03e81233f.png",
  //   after_img: "/images/homebefore/360192f749c1a01a3084ceeb2712b040de2415a4.png",
  //   thumbnail: "/images/homebefore/0402d70a66c38d6594b9a42587cf70e03e0381333f.png",
  // },
  {
    id: 4,
    title: "Facial Contouring",
    description: "Defined cheekbones and jawline for a sculpted appearance. Enhance your natural facial structure with professional care.",
    before_img: "/images/homebefore/mainImg.png",
    after_img: "/images/homebefore/51d5b6c661c3da2fa95e8b494d25ea05fa35334b.png",
    thumbnail: "/images/homebefore/mainImg.png",
  },
  {
    id: 5,
    title: "Hair Restoration",
    description: "Advanced hair therapy for natural and dense hair growth. Regain your confidence with our high-success treatments.",
    before_img: "/images/homebefore/360192f749c1a01a3084ceeb2712b040de2415a4.png",
    after_img: "/images/homebefore/mainImg.png",
    thumbnail: "/images/homebefore/mainImg.png",
  },
  {
    id: 6,
    title: "Botox Treatment",
    description: "Smooth out fine lines and wrinkles for a refreshed look. Fast and effective results with minimal downtime.",
    before_img: "/images/homebefore/mainImg.png",
    after_img: "/images/homebefore/0402d70a66c38d6594b9a42587cf70e03e81233f.png",
    thumbnail: "/images/homebefore/360192f749c1a01a3084ceeb2712b040de2415a4.png",
  },
  {
    id: 7,
    title: "Laser Therapy",
    description: "Precise laser treatments for various skin and hair concerns. State-of-the-art technology for optimal patient comfort.",
    before_img: "/images/homebefore/51d5b6c661c3da2fa95e8b494d25ea05fa35334b.png",
    after_img: "/images/homebefore/360192f749c1a01a3084ceeb2712b040de2415a4.png",
    thumbnail: "/images/homebefore/mainImg.png",
  },
  {
    id: 8,
    title: "Chemical Peel",
    description: "Exfoliate and rejuvenate your skin for a brighter complexion. Remove dead skin cells and reveal a fresh, healthy glow.",
    before_img: "/images/homebefore/0402d70a66c38d6594b9a42587cf70e03e81233f.png",
    after_img: "/images/homebefore/51d5b6c661c3da2fa95e8b494d25ea05fa35334b.png",
    thumbnail: "/images/homebefore/mainImg.png",
  },
];

export default function HomeBeforeAfter() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTreatment = treatments[activeIndex];

  return (
    <section className="bg-[#FFF9F7] min-h-screen py-12 px-6 lg:px-16 overflow-hidden">
      {/* Header */}
      <HomeBeforeAfterHeader />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
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
          <span className="text-lg font-poppins">Show More</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>
    </section>
  );
}
