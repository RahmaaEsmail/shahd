"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function ServiceBanner({ data, lang }) {
  const { t } = useTranslation();
  const router = useRouter();

  const breadcrumbItems = [
    { label: t("Home"), href: "/" },
    { label: t("Services") },
  ];

  const bgImage = data?.image_url || "/SHAHD-IMAGE/Services/servicesBg.webp";
  const title = data?.title || t("Discover the Art");
  const description = data?.description || t("Service Banner Desc");

  return (
    <motion.div
      initial={{ opacity: 0, y: -24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.4, ease: "easeIn" }}
      // Use min-h-screen but allow content to expand if needed on very small devices
      className="h-screen relative flex flex-col justify-center overflow-hidden w-full"
    >
      {/* Background Section */}
      <div className="absolute inset-0">
        <Image
          src={bgImage}
          fill
          className="object-cover"
          alt="service banner image"
          priority
          quality={90}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.8) 100%)",
          }}
        />
      </div>

      {/* Content Section */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center  mt-20  py-20 lg:pt-32">
        <div className=" pt-10 lg:pt-0 w-full flex flex-col items-center text-center">
          {/* Main Heading with Fluid Typography */}
          <h1 className="font-normal p-0! text-white text-center flex justify-center  lg:justify-between items-center text-3xl sm:text-5xl md:text-6xl   leading-[1.2] lg:leading-[1.1] mb-6 gap-40 max-w-full mx-auto">
            <span>{title}</span>
            {/* <span className="">{t("of Subtle Beauty")}</span> */}
          </h1>

          {/* Subtext with responsive width and size */}
          <p className="font-normal max-w-sm sm:max-w-xl md:max-w-5xl text-white/90 mx-auto text-center font-poppins text-base sm:text-lg leading-relaxed mb-8 lg:mb-12">
            {description}
          </p>

          {/* Breadcrumb - Hidden on very small screens if necessary, or styled for fit */}
          <div className="mb-10 lg:mb-14">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
