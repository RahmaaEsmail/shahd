"use client";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AcademyWorkshop({ data }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar")
    ? "ar"
    : i18n.language?.startsWith("sk")
      ? "sk"
      : "en";
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const subtitle = data?.subtitle || t("Live Aesthetic Medicine Workshop");
  const title = data?.title || t("Academy Workshop Title");
  const description = data?.description || t("Academy Workshop Desc");
  const bgImage =
    data?.image_url || "/SHAHD-IMAGE/Academy/Frame 1000005609.webp";

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.4, ease: "easeOut" },
    },
    hover: {
      y: -5,
      transition: { duration: 0.3 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.8 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative w-full min-h-[85vh] lg:h-[85vh] flex items-center overflow-hidden py-20 lg:py-0"
    >
      <div
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 249, 249, 0) 100%)",
        }}
        className="absolute top-0 left-0 right-0 z-5 h-20"
      />

      <div
        style={{
          background:
            "linear-gradient(360deg, #FFFFFF 0%, rgba(255, 249, 249, 0) 100%)",
        }}
        className="absolute bottom-0 left-0 right-0 z-5 h-20"
      />

      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={isInView ? { scale: 1 } : { scale: 1.1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={bgImage}
          alt="academy-workshop"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/20" />
      </motion.div>

      {/* Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 w-full main-container mx-auto px-4 flex flex-col justify-center lg:items-start items-center text-center lg:text-left gap-3"
      >
        {/* Badge */}
        <motion.p
          variants={itemVariants}
          className="font-bold font-poppins text-lg md:text-xl text-secondary"
        >
          {subtitle}
        </motion.p>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="text-primary text-3xl  font-normal font-main max-w-2xl leading-tight"
        >
          {title}
        </motion.h1>

        {/* Description Card */}
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="bg-white/40 backdrop-blur-xl border max-w-2xl rounded-[24px] border-white/40 p-5 shadow-2xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-[#414141] text-sm leading-relaxed font-poppins"
          >
            {description}
          </motion.p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="mt-1"
        >
          <Button
            variant="secondary"
            className={
              "rounded-full text-white text-lg md:text-xl  px-8 py-6  shadow-2xl relative overflow-hidden group font-medium"
            }
          >
            <span className="relative z-10">{t("Reserve My Seat")}</span>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
