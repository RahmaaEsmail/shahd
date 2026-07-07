"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function WeightManagementBanner({ data }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar")
    ? "ar"
    : i18n.language?.startsWith("sk")
      ? "sk"
      : "en";

  const title = data?.title;
  const description = data?.description || t("Weight Management Banner Desc");
  const bgImage =
    data?.image_url ||
    "/SHAHD-IMAGE/Weight-management/c2857fea874132417eb59e6746a6e12f95e0aca9.webp";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: false }}
      transition={{ duration: 0.4, ease: "easeIn" }}
      className="h-screen relative"
    >
      <Image
        src={bgImage}
        height={725}
        width={1440}
        className="h-screen w-full object-cover"
        alt="service banner image"
      />
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%), linear-gradient(360deg, rgba(209,155,155,0) 0%, rgba(209,155,155,0.4) 100%), linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4))",
        }}
        className="absolute flex h-full!   lg:h-screen justify-center items-center  pb-0  inset-0 z-10"
      >
        <div className="max-w-7xl h-[80%] xl:h-[70%] mt-0 lg:mt-3 xl:mt-5 w-full flex flex-col  justify-center lg:justify-between pt-13 pb-10 lg:pb-20 mx-auto px-4 md:px-10 ">
          <div className="flex flex-col gap-4 xl:gap-6 mt-0">
            <div className="flex flex-col  lg:flex-row w-full  justify-center lg:gap-10 items-center text-center lg:text-left gap-2">
              {title ? (
                <h1 className="font-normal text-white text-4xl sm:text-6xl md:text-5xl leading-tight">
                  {title}
                </h1>
              ) : (
                <>
                  <h1 className="font-normal text-white text-4xl sm:text-6xl md:text-5xl  leading-tight">
                    {t("Transform Your")}
                  </h1>
                  <h1 className="font-normal text-white text-4xl sm:text-6xl md:text-5xl leading-tight">
                    {t("Body & Confidence")}
                  </h1>
                </>
              )}
            </div>
            <p className="font-normal max-w-2xl mx-auto text-white mt-4 text-center font-poppins text-lg md:text-2xl leading-relaxed">
              {description}
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative w-fit mx-auto mt-10 group cursor-pointer"
          >
            {/* Gradient border wrapper */}
            <div
              className="absolute -inset-0.5 rounded-full opacity-80 group-hover:opacity-100 transition-opacity"
              style={{
                background: "linear-gradient(90deg, #D19B9B 0%, #B6C7D6 100%)",
                boxShadow:
                  "0px 4px 100px 0px #FFFFFF40, -4px 0px 25px 0px #F7A5A5, 4px 0px 25px 0px #5D688A",
              }}
            />
            <button className="relative bg-white rounded-full px-8 py-4 text-primary font-medium text-base md:text-lg hover:bg-gray-50 transition-colors whitespace-nowrap">
              {t("Book Your Consultation")}
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
