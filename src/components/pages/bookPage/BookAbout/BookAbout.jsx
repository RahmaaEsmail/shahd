"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const list = [
  {
    id: 1,
    name: "Define your life vision with clarity and confidence",
  },
  {
    id: 2,
    name: "Strengthen your self-worth and feminine identity",
  },
  {
    id: 3,
    name: "Build healthy habits that support your growth",
  },
  {
    id: 4,
    name: "Balance ambition with inner peace",
  },
  {
    id: 5,
    name: "Create a life aligned with your values",
  },
  {
    id: 6,
    name: "Build confidence from the inside out",
  },
  {
    id: 7,
    name: "Create boundaries that protect your energy",
  },
  {
    id: 8,
    name: "Become the woman you admire",
  },
];

export default function BookAbout({ data }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar")
    ? "ar"
    : i18n.language?.startsWith("sk")
      ? "sk"
      : "en";

  const subtitle = data?.subtitle || t("Take a look inside");
  const title = data?.title || t("Inside this book, you'll discover how to:");
  const description = data?.description;
  const bgImage = data?.image_url || "/SHAHD-IMAGE/Book/book (2) 1.webp";

  return (
    <motion.div
      className="flex flex-col lg:grid lg:grid-cols-[4fr_8fr] overflow-hidden items-center gap-10 lg:gap-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Left content section */}
      <motion.div
        className={`flex flex-col gap-4 text-center  ${i18n?.language == "ar" ? "lg:text-right" : "lg:text-left"}`}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className={`font-bold text-secondary text-xl  font-poppins ${i18n?.language == "ar" ? "text-right" : "text-left"}`}
        >
          {subtitle}
        </motion.p>

        <motion.h3
          dangerouslySetInnerHTML={{ __html: title }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className={`text-2xl  max-w-xl mx-auto lg:mx-0 text-primary font-normal leading-tight lg:leading-16  ${i18n?.language == "ar" ? "text-right" : "text-left"}`}
        ></motion.h3>

        {/* List or description block with animated items */}
        {description ? (
          <motion.p
            dangerouslySetInnerHTML={{ __html: description }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className={`text-sm lg:text-base font-poppins text-[#414141] leading-7 lg:leading-8 ${i18n?.language == "ar" ? "text-right" : "text-left"}`}
          ></motion.p>
        ) : (
          <ul className="space-y-2 text-left inline-block mx-auto lg:mx-0">
            {list?.map((item, index) => (
              <motion.li
                key={item?.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                whileHover={{
                  x: 10,
                  color: "#B97C7C",
                  transition: { type: "spring", stiffness: 400 },
                }}
                className={`text-sm lg:text-base list-disc list-inside font-poppins text-[#414141] leading-7 lg:leading-8 cursor-default ${i18n?.language == "ar" ? "lg:text-right" : "lg:text-left"}`}
              >
                {t(item?.name)}
              </motion.li>
            ))}
          </ul>
        )}
      </motion.div>

      {/* Right image section */}
      <motion.div
        className="w-full h-auto relative"
        initial={{ opacity: 0, x: 100, rotateY: -20 }}
        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
        viewport={{ once: false }}
        transition={{
          type: "spring",
          stiffness: 70,
          damping: 15,
          delay: 0.3,
        }}
        whileHover={{
          scale: 1.02,
          rotateY: 5,
          transition: { type: "spring", stiffness: 300 },
        }}
      >
        <Image
          src={bgImage}
          width={810}
          height={524}
          objectFit="cover"
          className="w-full h-auto rounded-lg shadow-xl"
          alt="Dr. Shahd Book"
        />
      </motion.div>
    </motion.div>
  );
}
