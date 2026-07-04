"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Animation variants
const imageContainerVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      delay: 0.3,
    },
  },
};

const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: 0.4,
    },
  },
  hover: {
    scale: 1.02,
    // boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 0.1,
    transition: { delay: 0.6, duration: 0.8 },
  },
  hover: {
    opacity: 0.2,
    transition: { duration: 0.3 },
  },
};

export default function HorseAboutImage({ data }) {
  const { i18n } = useTranslation();

  const mainImage =
    data?.main_image_url ||
    "/SHAHD-IMAGE/horse/b90cd6ca1788779bd6a514979cd33225ab9d20dd.webp";

  return (
    <motion.div
      variants={imageContainerVariants}
      initial="hidden"
      dir="ltr"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className="relative w-full flex justify-center lg:justify-end"
    >
      <motion.div
        variants={imageVariants}
        whileHover="hover"
        className="relative w-full max-w-[650px] lg:max-w-[850px] aspect-1500/1000 rounded-[32px] overflow-hidden"
      >
        <Image
          src={mainImage}
          alt="horse about image"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
    </motion.div>
  );
}
