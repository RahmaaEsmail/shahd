"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { useTranslation } from "react-i18next";

export default function ServicePackagesBanner() {
  const { t } = useTranslation();

  const breadcrumbItems = [
    { label: t("Home"), href: "/" },
    { label: t("Services"), href: "/services" },
    { label: t("Packages") },
  ];

  const bgImage = "/SHAHD-IMAGE/Services/servicesBg.webp";
  const title = t("All Aesthetic Packages");
  const description = t(
    "Choose the plan that suits your beauty goals — from essential touch-ups to full transformations.",
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: -24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.4, ease: "easeIn" }}
      className="h-[85vh] relative flex flex-col justify-center overflow-hidden w-full"
    >
      {/* Background Section */}
      <div className="absolute inset-0">
        <Image
          src={bgImage}
          fill
          className="object-cover"
          alt="service packages banner image"
          priority
          quality={90}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.7) 100%)",
          }}
        />
      </div>

      {/* Content Section */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center mt-10 py-10">
        <div className="w-full flex flex-col items-center text-center">
          {/* Main Heading */}
          <h1 className="font-normal p-0! text-white text-center flex justify-center items-center text-3xl sm:text-5xl md:text-6xl leading-[1.2] lg:leading-[1.1] mb-6 max-w-full mx-auto uppercase">
            <span>{title}</span>
          </h1>

          {/* Subtext */}
          <p className="font-normal max-w-sm sm:max-w-xl md:max-w-3xl text-white/90 mx-auto text-center font-poppins text-sm sm:text-base leading-relaxed mb-6">
            {description}
          </p>

          {/* Breadcrumb */}
          <div>
            <Breadcrumb items={breadcrumbItems} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
