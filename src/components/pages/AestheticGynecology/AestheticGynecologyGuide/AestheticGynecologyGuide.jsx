"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const steps = [
  {
    numberKey: "Step 1",
    titleKey: "Consultation Title",
    descriptionKey: "Consultation Desc",
    icon: "/SHAHD-IMAGE/aethesic/Frame 2147208124.webp",
  },
  {
    numberKey: "Step 2",
    titleKey: "Personalized Plan Title",
    descriptionKey: "Personalized Plan Desc",
    icon: "/SHAHD-IMAGE/aethesic/Frame 2147208124 (1).webp",
  },
  {
    numberKey: "Step 3",
    titleKey: "Non Surgical Title",
    descriptionKey: "Non Surgical Desc",
    icon: "/SHAHD-IMAGE/aethesic/Frame 2147208124 (2).webp",
  },
  {
    numberKey: "Step 4",
    titleKey: "Recovery Title",
    descriptionKey: "Recovery Desc",
    icon: "/SHAHD-IMAGE/aethesic/Frame 2147208124 (3).webp",
  },
];

const AestheticGynecologyGuide = ({ data }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar")
    ? "ar"
    : i18n.language?.startsWith("sk")
      ? "sk"
      : "en";
  const isRtl = i18n.language === "ar";

  const staticSteps = [
    {
      number: t("Step 1"),
      title: t("Consultation Title"),
      description: t("Consultation Desc"),
      icon: "/SHAHD-IMAGE/aethesic/Frame 2147208124.webp",
    },
    {
      number: t("Step 2"),
      title: t("Personalized Plan Title"),
      description: t("Personalized Plan Desc"),
      icon: "/SHAHD-IMAGE/aethesic/Frame 2147208124 (1).webp",
    },
    {
      number: t("Step 3"),
      title: t("Non Surgical Title"),
      description: t("Non Surgical Desc"),
      icon: "/SHAHD-IMAGE/aethesic/Frame 2147208124 (2).webp",
    },
    {
      number: t("Step 4"),
      title: t("Recovery Title"),
      description: t("Recovery Desc"),
      icon: "/SHAHD-IMAGE/aethesic/Frame 2147208124 (3).webp",
    },
  ];

  const stepsList =
    data && data.length > 0
      ? data.map((item, idx) => ({
          number: `${t("Step")} ${item.step_number || idx + 1}`,
          title: item.title || "",
          description: item.description || "",
          icon:
            item.image_url ||
            item.image ||
            `/SHAHD-IMAGE/aethesic/Frame 2147208124${idx > 0 ? ` (${idx})` : ""}.webp`,
        }))
      : staticSteps;

  return (
    <section
      dir={isRtl ? "rtl" : "ltr"}
      className="relative overflow-hidden py-16  bg-white"
    >
      {/* Background Decorative Floral Elements */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <Image
          src="/SHAHD-IMAGE/aethesic/d6f7c7b39cbc8c4f1eb3a6f2018f0f6d8c68cec3.webp"
          alt="Floral Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="main-container relative z-10 mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="flex flex-col justify-center mb-5 text-center items-center gap-1 px-4"
        >
          <p className="text-secondary font-bold font-poppins tracking-wider text-2xl capitalize">
            {t("How the Treatments Work")}
          </p>
          <h2 className="text-primary text-3xl   leading-[1.1] max-w-4xl uppercase font-medium">
            {t("Guide Journey")}
          </h2>
        </motion.div>

        {/* Timeline Grid */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central Vertical Line (Desktop: Center, Mobile: Left/Right) */}
          <div
            className={`absolute ${isRtl ? "left-[20px] border-e! lg:border-e-2!" : "left-[20px] border-s lg:border-s-2"} lg:left-1/2 top-0 bottom-0 bg-primary w-[2px] lg:w-[5px]  border-primary -translate-x-1/2 z-0`}
          />

          <div className="space-y-12 lg:space-y-[-20px] relative z-10">
            {stepsList.map((step, index) => {
              const isEven = index % 2 === 1;

              return (
                <div
                  key={index}
                  className="relative flex items-center justify-center w-full"
                >
                  {/* Container for Card Logic */}
                  <div
                    className={`flex w-full items-center flex-col lg:flex-row ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"}`}
                  >
                    {/* Card Wrapper */}
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: isEven ? (isRtl ? -50 : 50) : isRtl ? 50 : -50,
                      }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="w-full lg:w-1/2 flex justify-start lg:justify-center ps-12 lg:ps-0 lg:px-8"
                    >
                      <div
                        style={{
                          boxShadow: "-0.6px -0.6px 48px -12px #00000026",
                        }}
                        className="bg-white backdrop-blur-sm p-4 rounded-[16px] border border-white max-w-[480px] w-full"
                      >
                        {/* Dynamic Alignment based on side */}
                        <div
                          className={`flex flex-col gap-1 text-start ${isEven ? "lg:text-start" : "lg:text-end"}`}
                        >
                          <div
                            className={`flex mb-2 ${isEven ? "lg:justify-start" : "lg:justify-end"}`}
                          >
                            <img
                              src={step?.icon}
                              alt="step icon"
                              className="w-[47px] h-[47px] object-contain"
                            />
                          </div>

                          <h3 className="text-primary font-normal text-[22px]  tracking-wider leading-tight uppercase">
                            {step.number} {step.title}
                          </h3>
                          <p className="text-[#414141] text-sm  font-poppins tracking-[-0.15px] leading-relaxed font-light mt-2">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Desktop Spacer to maintain the Zig-Zag layout */}
                    <div className="hidden lg:block lg:w-1/2" />
                  </div>

                  {/* Circle Indicator on the Timeline */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false }}
                    className={`absolute ${isRtl ? "right-[20px] translate-x-1/2" : "left-[20px] -translate-x-1/2"} lg:left-1/2 lg:-translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center justify-center z-20`}
                  >
                    <div className="w-[15px] h-[15px] lg:w-[32px] lg:h-[32px] bg-primary rounded-full border-2 border-primary" />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Decorative Top/Bottom Bars */}
      <div className="absolute -bottom-1 left-0 right-0 z-20 w-full h-[53px] pointer-events-none">
        <img
          src="/SHAHD-IMAGE/aethesic/Rectangle 24.webp"
          className="w-full h-full object-cover"
          alt="bottom bar"
        />
      </div>
      <div className="absolute top-0 rotate-180 left-0 right-0 z-20 w-full h-[53px] pointer-events-none">
        <img
          src="/SHAHD-IMAGE/aethesic/Rectangle 24.webp"
          className="w-full h-full object-cover"
          alt="top bar"
        />
      </div>
    </section>
  );
};

export default AestheticGynecologyGuide;
