"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Animation variants
const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const imageVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const headingVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function HorseAboutContent({ data }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar")
    ? "ar"
    : i18n.language?.startsWith("sk")
      ? "sk"
      : "en";

  const formatText = (text) => {
    if (!text) return "";
    return text.replace(/&mdash;/g, "—").replace(/&amp;/g, "&");
  };

  const subtitle = formatText(
    data?.[`subtitle_${lang}`] ||
      data?.subtitle_en ||
      t("Where Strength Meets Freedom"),
  );
  const title = formatText(
    data?.[`title_${lang}`] ||
      data?.title_en ||
      t("Horse Riding — A Passion Beyond Medicine"),
  );
  return (
    <motion.div
      variants={contentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className="flex w-full flex-col  gap-2"
    >
      <motion.p
        variants={itemVariants}
        className="text-lg text-center sm:text-2xl font-bold font-poppins text-dark-primary"
      >
        {subtitle}
      </motion.p>

      <motion.h1
        variants={headingVariants}
        className={`text-[32px] text-center lg:text-left ${i18n?.language == "ar" ? "lg:text-right" : "lg:text-left"} sm:text-[44px] lg:text-[60px]  flex flex-wrap lg:flex-col gap-x-3 gap-y-0 font-normal leading-tight`}
      >
        <motion.span
          style={{
            background: "linear-gradient(180deg, #DDB2B5 0%, #362114 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
          }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
        >
          {/* Use 'hidden lg:block' to only break lines on large screens */}
          <span>{title}</span>
          {/* <span>{t("Horse Riding &mdash;")}</span>
          <br className="hidden lg:block" />

          <span className="ml-1 lg:ml-0">{t("A Passion Beyond")}</span>
          <br className="hidden lg:block" /> */}

          <motion.div
            whileHover="hover"
            className="inline-flex lg:flex gap-3 items-center"
          >
            {/* <span>{t("Medicine")}</span> */}
            <Image
              src={data?.small_image_url || "/SHAHD-IMAGE/horse/heading.webp"}
              alt="small about image"
              width={157}
              height={69}
              className="rounded-full object-cover w-[60px] h-[35px] sm:w-[110px] sm:h-[55px] lg:w-[157px] lg:h-[69px]"
            />
          </motion.div>
        </motion.span>
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className={`text-sm sm:text-base font-poppins text-[#414141] font-normal tracking-[-0.3px] leading-7 ${i18n?.language == "ar" ? "text-right" : "text-left"}`}
      >
        {t("Horse About Desc")}
      </motion.p>
    </motion.div>
  );
}
