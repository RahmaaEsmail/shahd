"use client";
import Image from "next/image";
import React from "react";
import ChooseUsCard from "./ChooseUsCard";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function AboutChooseUs({ data }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar")
    ? "ar"
    : i18n.language?.startsWith("sk")
      ? "sk"
      : "en";

  const staticCards = [
    {
      id: 1,
      img: "/SHAHD-IMAGE/About/icon_2-removebg-preview.webp",
      title: t("Personalized Care"),
      desc: t("Personalized Care Desc"),
    },
    {
      id: 2,
      img: "/SHAHD-IMAGE/About/icon_4-removebg-preview.webp",
      title: t("Natural Results"),
      desc: t("Natural Results Desc"),
    },
    {
      id: 3,
      img: "/SHAHD-IMAGE/About/icon_1-removebg-preview.webp",
      title: t("Expert Hands"),
      desc: t("Expert Hands Desc"),
    },
    {
      id: 4,
      img: "/SHAHD-IMAGE/About/icon_6__1_-removebg-preview.webp",
      title: t("Comfort Privacy"),
      desc: t("Comfort Privacy Desc"),
    },
  ];

  // console.log("about choose us data", data);
  const cards =
    data?.feature_cards && data.feature_cards.length > 0
      ? data.feature_cards.map((item) => ({
          id: item.id,
          img:
            item.image_url || "/SHAHD-IMAGE/About/icon_2-removebg-preview.webp",
          title: item.title,
          desc: item.description,
        }))
      : staticCards;

  const centerImage =
    data?.main_image_url ||
    "/SHAHD-IMAGE/About/4da149cfda6278d6384ebe6833b5097f3ced57b9.webp";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      className="px-4 main-container  mx-auto overflow-hidden"
    >
      {/* Header Section */}
      <motion.div className="flex flex-col justify-center items-center mx-auto text-center mb-6">
        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="font-bold text-secondary font-poppins text-2xl"
        >
          {t("Why Choose Us?")}
        </motion.h3>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-primary font-normal text-3xl leading-tight mt-2"
        >
          {t("Experience beauty")}
        </motion.p>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[#414141] font-normal text-base font-poppins leading-[32px] mt-2 max-w-7xl"
        >
          {t("Clinic Desc")}
        </motion.p>
      </motion.div>

      {/* Responsive Grid: 2 Cards | Image | 2 Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 items-stretch mx-auto">
        {/* First 2 Cards */}
        <div className="flex flex-col gap-3 order-2 lg:order-1">
          {cards.slice(0, 2).map((item) => (
            <ChooseUsCard key={item.id} {...item} />
          ))}
        </div>

        {/* Center Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-2 w-full flex justify-center"
        >
          <div className="relative w-full max-w-[450px]">
            <Image
              src={centerImage}
              width={400}
              height={600}
              className="rounded-[40px] w-full h-full object-cover"
              alt="Clinic"
              priority
            />
          </div>
        </motion.div>

        {/* Last 2 Cards */}
        <div className="flex flex-col gap-3 order-3">
          {cards.slice(2, 4).map((item) => (
            <ChooseUsCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
