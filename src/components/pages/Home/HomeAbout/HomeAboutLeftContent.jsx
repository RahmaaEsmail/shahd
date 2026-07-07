"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

// Animation variants for the main image
// const imageVariants = {
//   enter: (direction) => ({
//     x: direction > 0 ? 100 : -100,
//     opacity: 0,
//     scale: 1.05,
//   }),
//   center: {
//     zIndex: 1,
//     x: 0,
//     opacity: 1,
//     scale: 1,
//   },
//   exit: (direction) => ({
//     zIndex: 0,
//     x: direction < 0 ? 100 : -100,
//     opacity: 0,
//     scale: 0.95,
//   }),
// };
const imageVariants = {
  enter: (direction) => ({
    x: "100%", // Use percentages for cleaner transitions
    opacity: 0,
    scale: 1.1,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    // If we are going "next" (direction > 0), the current image should slide "left" (-100%)
    x: "-100%",
    opacity: 0,
    scale: 0.9,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 },
    },
  }),
};

// Animation variants for text content
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 },
  },
};

export default function HomeAboutLeftContent({
  activeIndex,
  direction,
  currentCard,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative group rounded-[40px] overflow-hidden h-full! shadow-2xl shadow-[#D29B9F]/20"
    >
      {/* Animated Image Container */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={activeIndex}
          custom={direction}
          variants={imageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 },
            scale: { duration: 0.4 },
          }}
          className="absolute inset-0"
        >
          <Image
            alt={currentCard.label}
            fill
            src={currentCard.image}
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient Overlay - Static */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#D29B9F]/90 z-10" />

      {/* Animated Text Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 text-white z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.p className="text-sm md:text-[20px] font-normal font-poppins tracking-[0.2em] uppercase mb-3">
              {currentCard.label}
            </motion.p>
            <motion.h2 className="text-3xl md:text-4xl font-normal leading-[1.1] mb-4 uppercase">
              {currentCard?.desc}
            </motion.h2>
            <motion.p className="text-sm md:text-base font-normal font-poppins uppercase leading-7 tracking-[1px]">
              {currentCard.subtitle}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
