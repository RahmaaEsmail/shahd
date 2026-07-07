"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";

export default function AcademyAesthetic({ data }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar")
    ? "ar"
    : i18n.language?.startsWith("sk")
      ? "sk"
      : "en";
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const subtitle = data?.subtitle || t("Aesthetic Medicine & Laser Notes");
  const title = data?.title || t("Academy Aesthetic Title");
  const description = data?.description || t("Academy Aesthetic Desc");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3 },
    },
  };

  const mainImageVariants = {
    hidden: { opacity: 0, x: -50, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 1, ease: "easeOut" },
    },
    floating: {
      y: [0, -15, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const floatingImages = [
    {
      id: 1,
      src: "/SHAHD-IMAGE/Academy/Image_fx (47) (1) 1.webp",
      height: 93,
      width: 220,
      className: "left-1/4 bottom-30",
      delay: 0,
    },
    {
      id: 2,
      src: "/SHAHD-IMAGE/Academy/Image_fx (47) (1) 2.webp",
      height: 93,
      width: 248,
      className: "left-100 top-10",
      delay: 0.2,
    },
    {
      id: 3,
      src: "/SHAHD-IMAGE/Academy/Image_fx (47) (1) 3.webp",
      height: 110,
      width: 448,
      className: "left-160 top-10",
      delay: 0.4,
    },
    {
      id: 4,
      src: "/SHAHD-IMAGE/Academy/Image_fx (47) (1) 4.webp",
      height: 93,
      width: 248,
      className: "right-33 bottom-10",
      delay: 0.6,
    },
    {
      id: 5,
      src: "/SHAHD-IMAGE/Academy/Image_fx (47) (1) 6.webp",
      height: 93,
      width: 248,
      className: "right-0 top-10",
      delay: 0.8,
    },
    {
      id: 6,
      src: "/SHAHD-IMAGE/Academy/Image_fx (47) (1) 7.webp",
      height: 93,
      width: 248,
      className: "top-6",
      delay: 1,
    },
    {
      id: 7,
      src: "/SHAHD-IMAGE/Academy/Image_fx (47) (1) 8.webp",
      height: 93,
      width: 248,
      className: "right-1/2 bottom-10",
      delay: 1.2,
    },
  ];

  return (
    <motion.div
      dir="ltr"
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="min-h-[90vh] lg:h-[90vh] w-full relative py-20 lg:py-0 overflow-hidden flex items-center"
    >
      {/* Floating Images - Hidden on mobile/tablet */}
      <div className="block">
        {floatingImages.map((img, index) => (
          <motion.div
            key={img.id}
            custom={index}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className={`absolute ${img.className} z-0`}
          >
            <Image
              src={img.src}
              height={img.height}
              width={img.width}
              className="object-cover"
              alt={`Decorative image ${img.id}`}
            />
          </motion.div>
        ))}
      </div>

      {/* Background/Overlay for Small Screens */}
      <div className="absolute inset-0 z-0 lg:hidden">
        <Image
          src={"/SHAHD-IMAGE/Academy/image 22.webp"}
          fill
          alt="Dr. Shahd Background"
          className="object-cover object-top opacity-50"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Main Content Container */}
      <motion.div
        variants={containerVariants}
        className="relative z-10 w-full h-full main-container mx-auto px-4 flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-10 lg:gap-0"
      >
        {/* Left Side - Doctor Image (Hidden on mobile as it's now the background) */}
        <motion.div
          variants={mainImageVariants}
          initial="hidden"
          animate={isInView ? ["visible", "floating"] : "hidden"}
          // variants={itemVariants}
          className="hidden lg:block relative lg:absolute lg:left-0 overflow-hidden group w-full lg:max-w-none"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <Image
              src={data?.image_url || "/SHAHD-IMAGE/Academy/image 22.webp"}
              width={541}
              height={566}
              alt="Dr. Shahd"
              className="object-contain w-full h-full lg:w-[541px] lg:h-[550px] transition-all duration-500 group-hover:brightness-110"
            />
            <div
              style={{
                background:
                  "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 249, 249, 0) 100%)",
              }}
              className="absolute bottom-0 rotate-180 w-full h-16"
            />
          </motion.div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          variants={containerVariants}
          className="relative z-999999999 lg:absolute lg:right-4 xl:right-10 max-w-2xl flex flex-col gap-2  text-center lg:text-left items-center lg:items-start"
        >
          {/* Badge */}
          <motion.h4
            variants={itemVariants}
            className="font-bold font-poppins text-secondary text-lg md:text-xl"
          >
            {subtitle}
          </motion.h4>

          {/* Main Title */}
          <motion.h2
            variants={itemVariants}
            className="font-normal leading-tight text-primary text-3xl"
          >
            {title}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base font-poppins text-white lg:text-[#414141] font-normal leading-relaxed max-w-xl"
          >
            {description}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-2"
          >
            <Button
              variant="secondary"
              className={
                "rounded-full text-white w-fit px-8 py-6 md:px-10 md:py-8 flex justify-center items-center text-lg md:text-xl lg:text-2xl relative overflow-hidden group shadow-xl"
              }
            >
              <motion.span className="relative z-10 flex items-center gap-3">
                {t("Get The Notes")}
                <motion.webp
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </motion.webp>
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
