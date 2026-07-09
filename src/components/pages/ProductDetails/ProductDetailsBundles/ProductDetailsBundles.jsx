"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ProductDetailsBundleCard from "./ProductDetailsBundleCard";
import { useTranslation } from "react-i18next";

// const data = [
//     {
//         id: "bundle-1",
//         rating: 5,
//         title: "12 days of dr.shahd advent calendar",
//         price: "23.00 S.R",
//         is_best: true,
//         img: "/SHAHD-IMAGE/product-details/Rectangle 71.webp",
//         hoverImg: "/SHAHD-IMAGE/product-details/Rectangle 70.webp",
//     },
//     {
//         id: "bundle-2",
//         rating: 4,
//         title: "12 days of dr.shahd advent calendar",
//         price: "23.00 S.R",
//         is_best: false,
//         img: "/SHAHD-IMAGE/product-details/Rectangle 71.webp",
//         hoverImg: "/SHAHD-IMAGE/product-details/Rectangle 70.webp",
//     },
//     {
//         id: "bundle-3",
//         rating: 4,
//         title: "12 days of dr.shahd advent calendar",
//         price: "23.00 S.R",
//         is_best: false,
//         img: "/SHAHD-IMAGE/product-details/Rectangle 71.webp",
//         hoverImg: "/SHAHD-IMAGE/product-details/Rectangle 70.webp",
//     },
//     {
//         id: "bundle-4",
//         rating: 4,
//         title: "12 days of dr.shahd advent calendar",
//         price: "23.00 S.R",
//         is_best: false,
//         img: "/SHAHD-IMAGE/product-details/Rectangle 71.webp",
//         hoverImg: "/SHAHD-IMAGE/product-details/Rectangle 70.webp",
//     },
// ];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const headerVariants = {
  hidden: {
    opacity: 0,
    x: -50,
    skewX: -10,
  },
  visible: {
    opacity: 1,
    x: 0,
    skewX: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    },
  },
};

export default function ProductDetailsBundles({ data }) {
  const { t, i18n } = useTranslation();
  const router = useRouter();

  console.log("related_products", data);
  return (
    <section className="main-container py-5 overflow-hidden">
      <motion.h3
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: false,
          amount: 0.3,
          margin: "-50px",
        }}
        className={`text-3xl font-normal text-primary uppercase mb-2 text-center md:${i18n?.language == "ar" ? "text-right" : "text-left"}`}
      >
        {t("Bundles & sets")}
      </motion.h3>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: false,
          amount: 0.1,
          margin: "-100px",
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {data?.data?.related_products?.map((item, index) => (
          <ProductDetailsBundleCard key={item.id} item={item} index={index} />
        ))}
      </motion.div>
    </section>
  );
}
