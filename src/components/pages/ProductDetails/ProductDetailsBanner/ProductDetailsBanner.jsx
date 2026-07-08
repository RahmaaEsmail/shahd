"use client";
import React from "react";
import { motion } from "framer-motion";
import { Breadcrumb } from "../../../shared/Breadcrumb";
import { useTranslation } from "react-i18next";

export default function ProductDetailsBanner({ data }) {
  const { t } = useTranslation();

  console.log(data);

  const breadcrumbItems = [
    { label: t("Home"), href: "/" },
    { label: t("Products") },
    { label: t("Product Details") },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-[60vh] lg:min-h-screen flex justify-center items-center py-20 lg:py-0"
      style={{
        background: `url(${data?.data?.main_image})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Subtle overlay animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-black"
      />

      <div className="main-container text-center relative z-10 w-full max-w-5xl">
        {/* Title animation */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.2,
          }}
          className="text-4xl md:text-6xl font-normal leading-[1.1] text-white mb-6 md:mb-8"
        >
          {t("Discover the Product Your Skin Will Love")}
        </motion.h1>

        {/* Breadcrumb animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.4,
          }}
        >
          <Breadcrumb items={breadcrumbItems} />
        </motion.div>
      </div>
    </motion.div>
  );
}
