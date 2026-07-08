"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import StoreProductCard from "./StoreProductCard";
import { store_product_tabs } from "@/data/storeData";
import { productData } from "@/data/productFilters";

import { useTranslation } from "react-i18next";

// Animation variants for grid
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
};

const itemVariants = {
  hidden: {
    y: 50,
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 1,
    },
  },
  exit: {
    y: -30,
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

export default function StoreProductsGrid({ activeTab, data }) {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar")
    ? "ar"
    : i18n.language?.startsWith("sk")
      ? "sk"
      : "en";

  const isDynamic = data && data.length > 0;
  const baseProducts = isDynamic
    ? data.map((p) => ({
        id: p.id,
        name: p.title || "Product",
        img: p.main_image,
        hover_image: p?.hover_image,
        price: p.price,
        rating: p.rating || 5,
        category: (p.category_name || "").toLowerCase().trim(),
      }))
    : productData.map((p) => ({
        ...p,
        category: p.category.toLowerCase().trim(),
      }));

  // Filter products based on active tab
  const filteredProducts = baseProducts.filter((product) => {
    if (activeTab === 1) return true; // 'All' tab
    const tabName = store_product_tabs
      .find((tab) => tab.id === activeTab)
      ?.name.toLowerCase()
      .trim();
    return product.category === tabName || product.category.includes(tabName);
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        exit="exit"
        className="grid grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full"
      >
        {filteredProducts?.slice(0, 4).map((product, index) => (
          <motion.div
            key={product?.id}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            custom={index}
            layout
          >
            <StoreProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
