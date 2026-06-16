"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import ChooseUsCard from "../../Aboutus/AboutChooseUs/ChooseUsCard";
import { useTranslation } from "react-i18next";

const data = [
  {
    id: 1,
    img: "/SHAHD-IMAGE/Weight-management/Group 1597883563.webp",
    titleKey: "Medical & Metabolic Evaluation",
    descKey: "Medical & Metabolic Evaluation Desc",
  },
  {
    id: 2,
    img: "/SHAHD-IMAGE/Weight-management/Image_fx (64) 1.webp",
    titleKey: "Support & Monitoring",
    descKey: "Support & Monitoring Desc",
  },
  {
    id: 3,
    img: "/SHAHD-IMAGE/Weight-management/Image_fx (63) 1.webp",
    titleKey: "Personalized Plan Creation",
    descKey: "Personalized Plan Creation Desc",
  },
  {
    id: 4,
    img: "/SHAHD-IMAGE/Weight-management/Image_fx (65) 1.webp",
    titleKey: "Maintenance & Education",
    descKey: "Maintenance & Education Desc",
  },
];

export default function WeightManagementChooseUs() {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      style={{
        background: 'linear-gradient(181.13deg, #FFFFFF 1.07%, #FFEDEE 61.95%, #F8F1F1 99.15%)'
      }}
      transition={{ duration: 0.8 }}
      className="py-10  overflow-hidden"
    >
      <div className="main-container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center items-center mx-auto max-w-5xl text-center mb-4"
        >
          <motion.h3
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="font-bold text-[#95BCAA] font-poppins text-lg md:text-2xl"
          >
            {t("Why Choose Us?")}
          </motion.h3>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary font-normal text-2xl sm:text-3xl mt-3 leading-tight lg:leading-tight"
          >
            {t("Why Choose Us Weight Desc 1")}
          </motion.p>
          <motion.p
            initial={{ y: 70, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-text text-base  font-poppins leading-relaxed mt-2 max-w-3xl"
          >
            {t("Why Choose Us Weight Desc 2")}
          </motion.p>
        </motion.div>
 
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8  items-stretch">
          {/* Left Cards */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
            className="flex flex-col gap-4 order-2 lg:order-1 h-full"
          >
            {data?.slice(0, 2)?.map((item, index) => (
              <motion.div
                key={item?.id}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex-1"
              >
                <ChooseUsCard
                  desc={t(item?.descKey)}
                  img={item?.img}
                  title={t(item?.titleKey)}
                />
              </motion.div>
            ))}
          </motion.div>
 
          {/* Center Image */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.6 }}
            className="order-1 lg:order-2 flex justify-center mb-2 h-full"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full min-h-[400px] lg:min-h-0"
            >
              <Image
                src="/SHAHD-IMAGE/Weight-management/Rectangle 21.webp"
                fill
                className="rounded-[32px] lg:rounded-[40px] object-cover shadow-2xl"
                alt="Clinic"
              />
            </motion.div>
          </motion.div>
 
          {/* Right Cards */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
            className="flex flex-col gap-4 order-3 h-full"
          >
            {data?.slice(2)?.map((item, index) => (
              <motion.div
                key={item?.id}
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex-1"
              >
                <ChooseUsCard
                  desc={t(item?.descKey)}
                  img={item?.img}
                  title={t(item?.titleKey)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
