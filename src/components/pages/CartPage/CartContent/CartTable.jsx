"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import CartProduct from "./CartProduct";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      delay: 0.1
    }
  }
};

const productListVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

export default function CartTable({ items, userId }) {
  const { t } = useTranslation();
  const cartItems = items || [];

  return (
    <motion.div
      className="col-span-1"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
    >
      {/* Table Headers - Fixed for mobile */}
      <motion.div
        className="hidden md:grid grid-cols-[1.5fr_2fr_1fr_1fr_0.5fr] pb-4 border-b-2 border-primary text-primary font-poppins text-md font-semibold capitalize tracking-wider"
        variants={headerVariants}
      >
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          {t("Products")}
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25 }}
        >
          {t("Description")}
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          {t("Quantity")}
        </motion.span>
        <motion.span
          className="text-center"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35 }}
        >
          {t("Price")}
        </motion.span>
        <motion.span
          className="text-right"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          {t("Delete")}
        </motion.span>
      </motion.div>

      <motion.div
        className="flex flex-col"
        variants={productListVariants}
      >
        {cartItems.map((item, idx) => (
          <CartProduct
            item={item}
            key={item?.cart_id ?? item?.id ?? idx}
            index={idx}
            userId={userId}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}
