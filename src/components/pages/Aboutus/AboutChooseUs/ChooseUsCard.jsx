"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function ChooseUsCard({ img, title, desc }) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        // backgroundColor: "rgba(131, 166, 202, 0.3)",
        boxShadow: "0 15px 30px -10px rgba(131, 166, 202, 0.3)",
      }}
      className="bg-[#83A6CA22] flex flex-col gap-3 backdrop-blur-md rounded-[24px] md:rounded-[30px] p-5 md:p-3 transition-colors duration-300 border border-white/10 h-full"
    >
      <div className="flex items-center h-12 md:h-16">
        <Image
          src={img}
          width={50}
          height={40}
          className="h-full w-auto object-contain"
          alt={title}
        />
      </div>

      <h3 className="text-primary font-normal text-xl md:text-2xl  2xl:text-3xl leading-snug">
        {title}
      </h3>

      <p className="text-text font-poppins text-sm md:text-base font-light tracking-tight leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}
