"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import StoreProductCard from "@/components/pages/storePage/StoreProducts/StoreProductCard";
import { useTranslation } from "react-i18next";

const products = [
  {
    id: 1,
    name: "Gentle Foaming Cleanser",
    rating: 4,
    price: "23.00",
    img: "/SHAHD-IMAGE/horse/206c8be48988ac5b9bce6352927ab9782f8d48d8.webp",
    category: "grooming",
  },
  {
    id: 2,
    name: "Gentle Foaming Cleanser",
    rating: 5,
    price: "35.00",
    img: "/SHAHD-IMAGE/horse/b1dfb2d20e7426a29aefe4ea741c2bf2a7e2419e.webp",
    category: "grooming",
  },
  {
    id: 3,
    name: "Gentle Foaming Cleanser",
    rating: 4,
    price: "28.00",
    img: "/SHAHD-IMAGE/horse/4c8ee52d8fa1007f43c0d4ad4f1c8bb459f29823.webp",
    category: "tack accessories",
  },
  {
    id: 4,
    name: "Gentle Foaming Cleanser",
    rating: 5,
    price: "45.00",
    img: "/SHAHD-IMAGE/horse/0851bb4abfba7e11bfca1ef4224a4d3b262332be.webp",
    category: "tack accessories",
  },
  {
    id: 5,
    name: "Hydrating Face Cream",
    rating: 4,
    price: "32.00",
    img: "/SHAHD-IMAGE/Store/product1.webp",
    category: "grooming",
  },
  {
    id: 6,
    name: "Repairing Hair Oil",
    rating: 4,
    price: "29.00",
    img: "/SHAHD-IMAGE/Store/product1.webp",
    category: "grooming",
  },
  {
    id: 7,
    name: "Body Lotion",
    rating: 3,
    price: "19.00",
    img: "/SHAHD-IMAGE/Store/product1.webp",
    category: "grooming",
  },
  {
    id: 8,
    name: "Night Repair Cream",
    rating: 5,
    price: "52.00",
    img: "/SHAHD-IMAGE/Store/product1.webp",
    category: "grooming",
  },
];

// Animation variants for grid
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Increased stagger for more noticeable sequential effect
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

export default function HorseProductsGrid({ activeTab, data }) {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar")
    ? "ar"
    : i18n.language?.startsWith("sk")
      ? "sk"
      : "en";

  // Map dynamic products if data is available, otherwise use static fallback
  const isDynamic = data && data.length > 0;
  const baseProducts = isDynamic
    ? data.map((p) => ({
        id: p.id,
        name: p.title,
        img: p.image_url,
        price: p.price,
        rating: 5,
        category: (p.category || "").toLowerCase().trim(),
      }))
    : products.map((p) => ({
        ...p,
        category: p.category.toLowerCase().trim(),
      }));

  // Filter products based on active tab
  const filteredProducts = baseProducts.filter((product) => {
    if (activeTab === "all" || activeTab === 1) return true; // 'All' tab
    return (
      product.category.toLowerCase().trim() ===
      String(activeTab).toLowerCase().trim()
    );
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
        className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-6  w-full"
      >
        {filteredProducts.slice(0, 4).map((product, index) => (
          <motion.div
            key={product?.id}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            custom={index}
            layout
          >
            <StoreProductCard
              is_horse={true}
              is_btn={false}
              product={product}
            />
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
