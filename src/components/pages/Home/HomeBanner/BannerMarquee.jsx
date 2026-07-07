"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import BannerMarqueeCard from "./BannerMarqueeCard";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function BannerMarquee({ data }) {
  const { i18n } = useTranslation();
  const dir = i18n.language === "ar" ? "right" : "left";

  // Prevent rendering if data isn't loaded yet to avoid 0-width calculation bugs
  if (!data || data.length === 0) return null;

  return (
    <motion.div
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-[#EDC5C84D] flex justify-center items-center h-25.25 overflow-hidden"
      style={{
        willChange: "transform, opacity",
        transform: "translate3d(0,0,0)",
      }}
    >
      <Marquee
        className="w-full"
        autoFill={true}
        pauseOnHover={true}
        gradient={false}
        speed={35}
        direction={dir}
        // Key forces a re-render if the language direction changes
        key={dir}
      >
        {data.map((item) => (
          // Add margin/padding directly to the card wrapper for spacing
          <div key={item.id} className="mx-4 flex items-center">
            <BannerMarqueeCard img={item.image_url} title={item.label} />
          </div>
        ))}
      </Marquee>
    </motion.div>
  );
}
