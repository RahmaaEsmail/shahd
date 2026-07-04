"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const data = [
  {
    id: 1,
    titleKey: "Personalized Nutrition Plans",
    descKey: "Personalized Nutrition Plans Desc",
  },
  {
    id: 2,
    titleKey: "Metabolism & Hormonal Balance",
    descKey: "Metabolism & Hormonal Balance Desc",
  },
  {
    id: 3,
    titleKey: "Healthy relationship with food",
    descKey: "Healthy relationship with food Desc",
  },
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const pulseAnimation = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.02, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

export default function WeightManagementNutritionFood({ data: backendData }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar")
    ? "ar"
    : i18n.language?.startsWith("sk")
      ? "sk"
      : "en";

  const subtitle =
    backendData?.[`subtitle_${lang}`] || backendData?.subtitle_en || t("Nutrition & Food");
  const title =
    backendData?.[`title_${lang}`] ||
    backendData?.title_en ||
    t("Because real results start from within");
  const description = backendData?.[`description_${lang}`] || backendData?.description_en;
  const image =
    backendData?.image_url ||
    "/SHAHD-IMAGE/Weight-management/Gradient Mask Group.webp";

  return (
    <motion.div
      dir="ltr"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-fit py-16  lg:min-h-[80vh] lg:py-0 relative w-full flex items-center overflow-hidden"
    >
      {/* Background Image Container with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('/SHAHD-IMAGE/d1ce99293bb9df3fa18d3d8ad6f3c5802adf222d.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay with fade in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-white/70 z-0"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 z-10 items-center main-container mx-auto">
        {/* Left Column: Text Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col gap-1 order-2 lg:order-1"
        >
          <motion.h4
            variants={fadeInUp}
            className="font-bold font-poppins text-[#95BCAA] text-2xl uppercase tracking-widest"
          >
            {subtitle}
          </motion.h4>

          <motion.h2
            variants={fadeInLeft}
            className="font-normal text-primary max-w-2xl text-3xl   leading-[1.1] lg:leading-tight"
          >
            {title}
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            className="flex flex-col gap-3 mt-4"
          >
            {description ? (
              <motion.div
                variants={fadeInRight}
                className="text-base font-poppins text-[#414141] leading-relaxed select-none [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-2"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            ) : (
              data?.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={fadeInRight}
                  whileHover={{
                    x: 10,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  className="flex gap-4 items-start group"
                >
                  <motion.div
                    className="mt-1 shrink-0"
                    whileHover={{
                      rotate: 360,
                      scale: 1.1,
                      transition: { duration: 0.6 },
                    }}
                  >
                    <Image
                      src={
                        "/SHAHD-IMAGE/Weight-management/Frame 1000005848.webp"
                      }
                      alt="icon"
                      height={32}
                      width={32}
                      className="w-7 h-7 md:w-8 md:h-8"
                    />
                  </motion.div>
                  <div className="flex-1">
                    <motion.h4
                      className="text-lg md:text-xl  font-medium text-[#414141] mb-1 md:mb-2"
                      whileHover={{ color: "#95BCAA" }}
                    >
                      {t(item.titleKey)}
                    </motion.h4>
                    <motion.p
                      className="text-sm  font-light font-poppins text-[#414141]/90 leading-relaxed"
                      initial={{ opacity: 0.8 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {t(item.descKey)}
                    </motion.p>
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.4 }}
          className="w-full relative order-1 lg:order-2 aspect-[4/3] sm:aspect-video lg:aspect-square xl:aspect-auto lg:h-[600px] xl:h-[700px] rounded-3xl overflow-hidden shadow-xl lg:shadow-none"
        >
          <Image
            src={image}
            alt="weight management"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
          />

          {/* Animated gradient overlays */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent pointer-events-none"
          />

          {/* Subtle floating animation on image */}
          <motion.div
            variants={pulseAnimation}
            initial="initial"
            animate="animate"
            className="absolute inset-0 pointer-events-none"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
