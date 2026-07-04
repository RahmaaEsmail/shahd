"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { slugify } from "@/lib/utils";
import { useTranslation } from "react-i18next";

export default function ServiceCategoryCard({
  cardVariants,
  item,
  itemVariants,
}) {
  const { t } = useTranslation();
  const router = useRouter();
  const [currentCategory, setCurrentCategory] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setCurrentCategory(params.get("category"));
    }
  }, []);

  const isSelected = currentCategory === item.type;

  const handleClick = () => {
    if (item?.type) {
      router.push(`?category=${item.type}#our-services`, { scroll: true });
    }
  };

  return (
    <motion.div
      onClick={handleClick}
      variants={itemVariants}
      whileHover="hover"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={cardVariants}
        className="w-full h-75 md:h-82.5 relative  overflow-hidden rounded-[40px] group cursor-pointer"
      >
        {/* Decorative element */}
        <motion.img
          src="/SHAHD-IMAGE/Services/sh5'.webp"
          className="absolute w-50 h-50 top-0   border-none object-cover right-0  z-50"
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          alt="decorative element"
        />

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
          className="bg-secondary cursor-pointer absolute z-50 top-3 right-5 w-13 h-13 rounded-full flex justify-center items-center opacity-100  transition-opacity duration-300"
        >
          {isSelected ? (
            <ChevronDown size={25} color="white" />
          ) : (
            <ChevronRight size={25} color="white" />
          )}
        </button>

        <Image
          src={item.image}
          alt={t(item.title)}
          fill
          className="object-cover rounded-tr-[100px]! transition-transform duration-700"
        />

        {/* Gradient Overlay */}
        <motion.div
          className="absolute inset-0 rounded-tr-[100px]! flex flex-col justify-end p-6"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.7) 100%)",
          }}
          whileHover={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 20%, rgba(0,0,0,0.8) 100%)",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-fit px-3 text-xs md:text-base rounded-full bg-white font-poppins py-1.5  text-primary font-bold mb-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {item.service_num} {t("Services Label")}
          </motion.div>
          <motion.h3
            className="text-white text-2xl font-normal leading-tight"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {t(item.title)}
          </motion.h3>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
