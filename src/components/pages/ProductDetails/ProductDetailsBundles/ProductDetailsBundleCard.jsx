"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import { useRouter } from "next/navigation";
import { slugify } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { useAddToCartAction } from "@/hooks/cart/useCart";

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 50,
    rotateX: -15,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12,
      duration: 0.7,
    },
  },
};

const badgeVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    rotate: -180,
    x: 50,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      delay: 0.3,
    },
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const starVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    rotate: -180,
  },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      delay: 0.4 + i * 0.1,
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  }),
  hover: {
    scale: 1.2,
    rotate: 10,
    transition: {
      type: "spring",
      stiffness: 400,
    },
  },
};

const titleVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 100,
    },
  },
};

const priceVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.6,
      type: "spring",
      stiffness: 200,
    },
  },
  hover: {
    scale: 1.05,
    color: "#DDB2B5",
    transition: {
      type: "spring",
      stiffness: 400,
    },
  },
};

const buttonVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.7,
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 10px 25px rgba(221, 178, 181, 0.4)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: {
    scale: 0.95,
  },
};

const imageVariants = {
  hidden: {
    scale: 1.2,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.4,
    },
  },
};

export default function ProductDetailsBundleCard({ item, index }) {
  const { t } = useTranslation();
  const router = useRouter();
  const { addToCart, isAddingToCart } = useAddToCartAction();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (isAddingToCart) return;
    addToCart(item.id, 1);
  };

  return (
    <motion.div
      key={item.id}
      variants={cardVariants}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,
        amount: 0.2,
        margin: "-50px",
      }}
      whileHover={{
        y: -10,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        transition: { type: "spring", stiffness: 300 },
      }}
      className="group bg-white rounded-[24px] overflow-hidden shadow-sm border border-primary flex flex-col h-full relative"
    >
      {/* Image Container */}
      <motion.div
        className="relative aspect-4/3 w-full overflow-hidden cursor-pointer"
        whileHover="hover"
        onClick={() => {
          if (item?.id && item?.title) {
            router.push(`/products/${item.id}/${item.title}`);
          }
        }}
      >
        <motion.div variants={imageVariants} className="relative w-full h-full">
          {/* Main Image */}
          <Image
            src={item.main_image}
            alt={item.title}
            fill
            className={`object-cover transition-opacity duration-500 ${item.hover_image ? "group-hover:opacity-0" : ""}`}
          />

          {/* Hover Image */}
          {item.hover_image && (
            <Image
              src={item.hover_image}
              alt={`${item.title} hover`}
              fill
              className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          )}
        </motion.div>

        {item.is_best && (
          <motion.div
            variants={badgeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            whileHover="hover"
            className="absolute top-3 right-3 bg-primary text-white font-poppins text-lg font-medium px-4 py-1 rounded-full z-10"
          >
            {t("Best Seller")}
          </motion.div>
        )}
      </motion.div>

      {/* Content Section - Added flex-1 to push the button down */}
      <motion.div
        className="p-3 flex flex-col gap-2 flex-1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        {/* Rating Stars */}
        <motion.div
          className="flex gap-1 mb-1.5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              variants={starVariants}
              custom={i}
              whileHover="hover"
            >
              <Star
                size={24}
                fill={i < item.rating ? "#EFC77E" : "none"}
                color="#EFC77E"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Title */}
        <motion.h4
          variants={titleVariants}
          className="text-xl max-w-[230px] font-medium text-[#1E1E1E] uppercase leading-tight mb-3 md:mb-4"
        >
          {t(item.title)}
        </motion.h4>

        {/* Price */}
        <motion.p
          variants={priceVariants}
          whileHover="hover"
          className="text-xl font-bold font-poppins text-primary cursor-default"
        >
          {t(item.price)}
        </motion.p>

        {/* Add to Cart Button */}
        <motion.button
          onClick={handleAddToCart}
          disabled={isAddingToCart}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          style={{
            background: "linear-gradient(90deg, #DDB2B5 0%, #EFD4CE 100%)",
          }}
          className="w-full cursor-pointer py-2.5 mt-auto rounded-full text-white text-lg font-medium uppercase relative overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {/* Button shine effect on hover */}
          <motion.div
            className="absolute inset-0 bg-white/20"
            initial={{ x: "-100%", skewX: -15 }}
            whileHover={{ x: "200%", skewX: -15 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
          <span className="relative z-10">
            {isAddingToCart ? t("Adding...") : t("Add to Cart")}
          </span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
