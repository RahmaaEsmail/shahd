"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "../../../../ui/badge";
import { Heart, Star, ShoppingCart, Check, Minus, Plus } from "lucide-react";
import Toast from "../../../../shared/Toast";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const starVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: (i) => ({
    scale: 1,
    rotate: 0,
    transition: {
      delay: i * 0.05,
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  }),
  hover: {
    scale: 1.2,
    rotate: 180,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const heartVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: { scale: 0.9 },
  liked: {
    scale: [1, 1.2, 1],
    rotate: [0, -10, 10, 0],
    transition: {
      duration: 0.5,
    },
  },
};

const priceVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      delay: 0.3,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      delay: 0.6,
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 8px 20px rgba(221, 178, 181, 0.4)",
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

const quantityVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      delay: 0.5,
    },
  },
};

import useWishlistStore from "@/zustandStore/WishlistStore";
import { useAddToCartAction } from "@/hooks/cart/useCart";

// ... (keep constants)

export default function ProductDetailsContent({ data }) {
  const { toggleWishlist, isInWishlist } = useWishlistStore();
  const { t } = useTranslation();
  const { addToCart, isAddingToCart } = useAddToCartAction();

  console.log("ProductDetailsContent", data);

  const product = {
    id: data.data?.id || 1,
    name: data?.data?.title || data?.data?.name || "Product",
    category: data?.data?.category_name || data?.data?.category || "Skin",
    inStock:
      data?.data?.stock_status === "in_stock" ||
      (data?.data?.quantity != null && Number(data?.data?.quantity) > 0),
    price: Number(data?.data?.price) || 23.0,
    originalPrice:
      Number(data?.data?.original_price) ||
      (data?.data?.price ? Number(data?.data?.price) * 1.2 : 29.0),
    rating: Number(data?.data?.rating) || 5,
    reviewCount: Number(data?.data?.review_count) || 245,
    img:
      data?.data?.main_image ||
      data?.data?.image_url ||
      "/SHAHD-IMAGE/horse/206c8be48988ac5b9bce6352927ab9782f8d48d8.webp",
    description: data?.data?.description || data?.data?.desc || "",
  };

  const sizesPriceList = data?.data?.sizes_price || [];
  const sizes =
    sizesPriceList.length > 0
      ? sizesPriceList.map((item) => item.size)
      : ["30 ml", "60 ml", "80 ml", "100 ml"];

  const [selectedSize, setSelectedSize] = useState(sizes[0] || "30 ml");
  const [quantity, setQuantity] = useState(1);
  const [showAddedMessage, setShowAddedMessage] = useState(false);
  const router = useRouter();

  // Dynamic price calculation based on selected size
  const activeSizeObj = sizesPriceList.find(
    (item) => item.size === selectedSize,
  );
  const currentPrice = activeSizeObj
    ? Number(activeSizeObj.price)
    : Number(product.price);
  const currentOriginalPrice = activeSizeObj
    ? activeSizeObj.original_price
      ? Number(activeSizeObj.original_price)
      : Number(activeSizeObj.price) * 1.2
    : Number(product.originalPrice);

  const isLiked = isInWishlist(product.id);

  const handleLike = () => {
    toggleWishlist(product);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity((prev) => prev + 1);
    } else {
      setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    }
  };

  const handleAddToCart = () => {
    addToCart(product.id, quantity, {
      onSuccess: (res) => {
        if (res?.status === "success") {
          setShowAddedMessage(true);
          setTimeout(() => setShowAddedMessage(false), 2000);
        }
      },
    });
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      className="flex flex-col mb-3  w-full! gap-2"
    >
      <div className="flex justify-between items-center">
        {/* Category Badge */}
        <motion.div variants={itemVariants}>
          <motion.div variants={badgeVariants} whileHover="hover">
            <Badge
              className={
                "w-[70px] h-[30px] p-[2px_10px] font-poppins text-[20px] font-normal cursor-pointer"
              }
            >
              {product.category}
            </Badge>
          </motion.div>
        </motion.div>

        {/* Stock and Type Badges */}
        <motion.div variants={itemVariants} className="flex gap-2">
          <motion.div variants={badgeVariants} whileHover="hover">
            <Badge
              className={
                "min-w-[100px] text-[#95BCAA] h-[30px] p-[2px_10px] bg-[#DAF4E7] border-[#95BCAA] font-poppins text-[18px] font-normal cursor-pointer"
              }
            >
              {product.inStock ? t("In Stock") : t("Out of Stock")}
            </Badge>
          </motion.div>
          {/* <motion.div variants={badgeVariants} whileHover="hover">
            <Badge
              className={
                "min-w-[100px] text-[#95BCAA] h-[30px] p-[2px_10px] bg-[#DAF4E7] border-[#95BCAA] font-poppins text-[18px] font-normal cursor-pointer"
              }
            >
              {t("Best Seller")}
            </Badge>
          </motion.div> */}
        </motion.div>
      </div>
      {/* Title and Wishlist */}
      <motion.div
        variants={itemVariants}
        className="flex flex-row justify-between items-start gap-4"
      >
        <motion.h3
          className="font-normal leading-tight text-3xl  text-[#4D3E3F] flex-1"
          whileHover={{ scale: 1.01, color: "#DDB2B5" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {t(product.name)}
        </motion.h3>
        <motion.button
          variants={heartVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          whileInView={isLiked ? "liked" : "initial"}
          onClick={handleLike}
          className={`w-10 h-10  border border-primary shrink-0 ${isLiked ? "bg-primary" : "bg-white"} rounded-full flex justify-center items-center transition-colors duration-300`}
        >
          <Heart
            className={`${isLiked ? "text-white fill-white" : "text-primary"}`}
            size={20}
          />
        </motion.button>
      </motion.div>

      {/* Rating */}
      <motion.div
        variants={itemVariants}
        className="flex flex-wrap gap-x-4 gap-y-2 items-center"
      >
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={starVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
            >
              <Star className="text-[#F7C128]" fill="#F7C128" size={18} />
            </motion.div>
          ))}
        </div>
        <div className="flex gap-2 text-sm md:text-base  font-light font-poppins text-[#6A6A6A]">
          <motion.p whileHover={{ color: "#DDB2B5" }}>
            {product.rating} {t("stars")}
          </motion.p>
          <motion.p whileHover={{ color: "#DDB2B5" }}>
            ({product.rating} {t("Reviews")})
          </motion.p>
        </div>
      </motion.div>

      {/* Price */}
      <motion.div
        variants={priceVariants}
        className="flex flex-wrap gap-4 items-baseline"
      >
        <motion.h3
          className="text-3xl font-poppins font-semibold text-primary"
          whileHover={{ scale: 1.05 }}
        >
          {currentPrice.toFixed(2)} {t("S.R")}
        </motion.h3>
        {/* <motion.p
          className="text-xl font-poppins font-light text-[#6A6A6A] line-through"
          whileHover={{ scale: 1.05 }}
        >
          {currentOriginalPrice.toFixed(2)} {t("S.R")}
        </motion.p> */}
      </motion.div>

      {/* Description */}
      <motion.p
        variants={itemVariants}
        className="text-[#6A6A6A] text-base md:text-lg  font-poppins font-normal leading-relaxed max-w-3xl"
      >
        {t(product.description)}
      </motion.p>

      {/* Size Selection */}
      <motion.div variants={itemVariants} className="flex flex-col gap-2">
        <p className="text-lg font-medium font-poppins">{t("Size / Volume")}</p>
        <div className="flex flex-wrap gap-2 items-center">
          {sizes.map((size) => (
            <motion.button
              key={size}
              variants={badgeVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              whileTap="tap"
              onClick={() => handleSizeSelect(size)}
              className={`rounded-full flex font-poppins justify-center items-center h-9  px-4 md:px-6 text-sm md:text-base transition-all duration-300 ${
                selectedSize === size
                  ? "bg-primary text-white shadow-md"
                  : "border border-gray-300 text-gray-600 hover:bg-primary/5 hover:border-primary"
              }`}
            >
              {size}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Quantity and Add to Cart */}
      <motion.div variants={itemVariants} className="flex flex-col gap-2 mt-2">
        <p className="text-lg  font-medium font-poppins">
          {t("Number of pieces")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
          {/* Quantity Selector */}
          <motion.div
            variants={quantityVariants}
            className="flex w-full sm:w-[160px] px-4 items-center border font-light font-poppins text-lg border-gray-200 rounded-full h-12 lg:h-[52px] justify-between shadow-sm"
          >
            <motion.button
              whileHover={{ scale: 1.2, color: "#DDB2B5" }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleQuantityChange("decrement")}
              className="w-8 h-8 flex items-center justify-center transition-colors"
            >
              <Minus size={18} />
            </motion.button>

            <motion.p
              key={quantity}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="font-medium"
            >
              {quantity}
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.2, color: "#DDB2B5" }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleQuantityChange("increment")}
              className="w-8 h-8 flex items-center justify-center transition-colors"
            >
              <Plus size={18} />
            </motion.button>
          </motion.div>

          {/* Add to Cart Button */}
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={handleAddToCart}
            disabled={isAddingToCart}
            className="flex-1 h-12 lg:h-[52px] px-8 text-white rounded-full flex justify-center items-center text-lg md:text-xl font-medium relative overflow-hidden shadow-lg"
            style={{
              background: "linear-gradient(90deg, #DDB2B5 0%, #EFD4CE 100%)",
            }}
          >
            <AnimatePresence mode="wait">
              {isAddingToCart ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-3"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <ShoppingCart size={22} />
                  </motion.div>
                  <span>{t("Adding...")}</span>
                </motion.div>
              ) : showAddedMessage ? (
                <motion.div
                  key="success"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="flex items-center gap-3"
                >
                  <Check size={22} />
                  <span>{t("Added Successfully!")}</span>
                </motion.div>
              ) : (
                <motion.div
                  key="add"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-3 w-full justify-center"
                >
                  <ShoppingCart size={22} className="hidden sm:block" />
                  <span>{t("Add To Cart")}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.div>

      <Toast
        position="top"
        show={showAddedMessage}
        message={t("Product added to cart successfully!")}
        type="success"
        onClose={() => setShowAddedMessage(false)}
      />
    </motion.div>
  );
}
