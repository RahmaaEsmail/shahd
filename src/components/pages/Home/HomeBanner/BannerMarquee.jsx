"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import BannerMarqueeCard from "./BannerMarqueeCard";
import { motion } from "framer-motion";

export default function BannerMarquee() {
  return (
    <motion.div
      initial={{ y: 24, opacity: 0 }}          // أقل من 100 عشان مايبقاش “قفزة”
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} // ease-out ناعم
      viewport={{ once: false, amount: 0.3 }}   // يمنع إعادة الأنيميشن مع السكرول
      className="bg-[#EDC5C84D] flex justify-center items-center h-25.25 overflow-hidden"
      style={{
        willChange: "transform, opacity",
        transform: "translate3d(0,0,0)",
      }}
    >
      <Marquee
        className="w-full"
        autoFill
        pauseOnHover
        gradient={false}
        speed={35}         // قلّل/زوّد حسب مزاجك (الأقل = أنعم)
        delay={0.2}        // بداية أهدى
      >
        <div className="flex items-center gap-8 px-4">
          <BannerMarqueeCard id={5} img={"/images/BannerImage/Rectangle 7.png"} title={"Eyebrow Enhancement"} />
          <BannerMarqueeCard id={4} img={"/images/BannerImage/Rectangle 7 (1).png"} title={"Hair Routine"} />
          <BannerMarqueeCard id={1} img={"/images/BannerImage/Rectangle 7 (2).png"} title={"Wrinkle Treatment"} />
          <BannerMarqueeCard id={5} img={"/images/BannerImage/Rectangle 7 (3).png"} title={"Eyebrow Enhancement"} />
        </div>
      </Marquee>
    </motion.div>
  );
}