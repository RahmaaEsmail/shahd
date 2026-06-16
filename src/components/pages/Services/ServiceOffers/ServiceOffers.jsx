"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function ServiceOffers() {
  const { t } = useTranslation();
  // Animation variants (Preserved exactly)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
  };

  return (
    <div className="min-h-[85vh] py-5  relative overflow-hidden flex flex-col">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: "url('/SHAHD-IMAGE/Services/offers-bg.webp')",
          opacity: 0.25,
        }}
      />

      {/* Content Wrapper - Changed from absolute to relative for better mobile scrolling */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={containerVariants}
        className="relative z-30 w-full"
      >
        <div className="max-w-4xl flex flex-col justify-between items-center gap-7 mx-auto pt-6   px-4 text-center">
          <motion.h1
            variants={titleVariants}
            className="text-secondary font-poppins font-bold text-2xl"
          >
            {t("Offers Title")}
          </motion.h1>
        </div>

        {/* Grid Container */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-[9fr_3fr] items-stretch! mt-8 gap-4 main-container mx-auto px-4"
        >
          {/* Left Column (Main stack) */}
          <motion.div variants={itemVariants} className="flex flex-col items-stretch! gap-4 order-1">
            {/* Top Left Card - Full width on all screens */}
            <motion.div
              variants={cardVariants}
              className="relative rounded-[30px] overflow-hidden aspect-16/7 md:aspect-auto md:h-75 group"
            >
              <motion.div variants={imageVariants} className="absolute inset-0">
                <Image
                  src="/SHAHD-IMAGE/Services/Frame 1000005646.webp"
                  alt="Offer 1"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 75vw"
                />
              </motion.div>
            </motion.div>

            {/* Bottom Two Cards Grid - Stacks on mobile, 2 cols on tablet+ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                variants={cardVariants}
                className="relative rounded-[30px] overflow-hidden aspect-4/3 md:aspect-auto md:h-75 group"
              >
                <motion.div variants={imageVariants} className="absolute inset-0">
                  <Image
                    src="/SHAHD-IMAGE/Services/Frame 1000005647.webp"
                    alt="Offer 3"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 35vw"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                variants={cardVariants}
                className="relative rounded-[30px] overflow-hidden aspect-4/3 md:aspect-auto md:h-75 group"
              >
                <motion.div variants={imageVariants} className="absolute inset-0">
                  <Image
                    src="/SHAHD-IMAGE/Services/Frame 1000005648.webp"
                    alt="Offer 4"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 35vw"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column (Tall image) - Moves to bottom on mobile via 'order' */}
          <motion.div
            variants={cardVariants}
            className="relative rounded-[30px] overflow-hidden  md:h-100 lg:h-[618px] group order-2 shadow-xl"
          >
            <motion.div variants={imageVariants} className="absolute inset-0">
              <Image
                src="/SHAHD-IMAGE/Services/Frame 1000005645.webp"
                alt="Offer 2"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover md:h-100! lg:h-[618px]! scale-110 transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>

            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8"
            >
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}