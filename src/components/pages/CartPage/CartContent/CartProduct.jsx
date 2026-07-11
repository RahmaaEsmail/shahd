"use client";

import React from "react";
import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import { useDeleteCartItem, useUpdateCart } from "@/hooks/cart/useCart";

// Animation variants - preserving exact design
const productVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
  hover: {
    scale: 1.02,
    transition: { duration: 0.2 },
  },
};

const buttonVariants = {
  hover: { scale: 1.1 },
  tap: { scale: 0.9 },
};

export default function CartProduct({ item, index = 0 }) {
  const { t } = useTranslation();
  const { mutate: updateCart, isPending: isUpdating } = useUpdateCart();
  const { mutate: deleteCartItem, isPending: isDeleting } = useDeleteCartItem();

  const cartId = item?.cart_id ?? item?.id;
  const name = item?.name || t("Product");
  const image = item?.image || "/SHAHD-IMAGE/Cart/Rectangle 43.webp";
  const price = Number(item?.price) || 0;
  const quantity = Number(item?.quantity) || 1;
  const unit = item?.unit; // { size, price } — selected size

  const handleQuantityChange = (nextQuantity) => {
    if (nextQuantity < 1 || isUpdating) return;
    updateCart({ cart_id: cartId, quantity: nextQuantity });
  };

  const handleDelete = () => {
    Swal.fire({
      title: t("Remove item?"),
      text: t("This item will be removed from your cart."),
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: t("Remove"),
      cancelButtonText: t("Cancel"),
      confirmButtonColor: "#DDB2B5",
      background: "#ffffff",
      color: "#414141",
      customClass: {
        popup: "rounded-[25px] font-poppins",
        confirmButton: "font-poppins",
        cancelButton: "font-poppins",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCartItem({ cart_id: cartId });
      }
    });
  };

  return (
    <motion.div
      custom={index}
      variants={productVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      className="flex flex-col md:grid md:grid-cols-[1.5fr_2fr_1fr_1fr_0.5fr] items-center py-6 border-b border-[#DADADA] gap-6"
    >
      <div className="flex items-center gap-6 w-full md:w-auto">
        {/* Product Image */}
        <div className="relative w-[100px] h-[100px] rounded-[24px] overflow-hidden bg-[#F5E8E6] shrink-0">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>

        {/* Info on Mobile (Title + Size + Price) */}
        <div className="flex flex-col gap-1 md:hidden">
          <p className="text-xl! font-poppins! font-normal text-[#1E1E1E]">
            {name}
          </p>
          {unit?.size && (
            <span className="text-xs font-poppins text-white bg-primary/80 rounded-full px-2 py-0.5 w-fit">
              {unit.size}
            </span>
          )}
          <p className="text-xs font-semibold font-poppins text-primary">
            {(price * quantity).toFixed(2)} S.R
          </p>
        </div>
      </div>

      {/* Description / Name - Hidden on mobile */}
      <div className="hidden md:flex flex-col gap-1">
        <h3 className="text-md font-poppins! font-normal text-[#1E1E1E] w-[200px] truncate">
          {name}
        </h3>
        {unit?.size && (
          <span className="text-xs font-poppins text-white bg-primary/80 rounded-full px-2 py-0.5 w-fit">
            {unit.size}
          </span>
        )}
      </div>

      {/* Quantity Adjuster */}
      <div className="flex items-center justify-between w-full md:w-auto md:justify-start gap-4 px-2 md:px-0">
        <span className="text-sm font-medium font-poppins text-[#6A6A6A] md:hidden">
          {t("Quantity")}:
        </span>
        <div className="flex items-center gap-4">
          <motion.button
            onClick={() => handleQuantityChange(quantity - 1)}
            disabled={isUpdating || quantity <= 1}
            className="text-[#6A6A6A] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Minus size={18} />
          </motion.button>
          <motion.span
            key={quantity}
            className="text-lg md:text-xl text-[#6A6A6A] font-medium font-poppins min-w-[20px] text-center"
            initial={{ scale: 1 }}
            whileInView={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.2 }}
          >
            {quantity}
          </motion.span>
          <motion.button
            onClick={() => handleQuantityChange(quantity + 1)}
            disabled={isUpdating}
            className="text-[#6A6A6A] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Plus size={18} />
          </motion.button>
        </div>
      </div>

      {/* Price - Hidden on mobile, handled above */}
      <p className="hidden md:block text-lg lg:text-xl font-semibold font-poppins text-primary text-center">
        {(price * quantity).toFixed(2)} S.R
      </p>

      {/* Delete Action */}
      <div className="flex justify-between md:justify-end items-center w-full md:w-full px-2 md:px-0">
        <p className="text-lg font-semibold font-poppins text-primary md:hidden">
          {t("TOTAL")}: {(price * quantity).toFixed(2)} S.R
        </p>
        <motion.button
          onClick={handleDelete}
          disabled={isDeleting}
          className="text-[#DDB2B5] hover:text-red-500 transition-colors bg-red-50 md:bg-transparent p-2 md:p-0 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <Trash2 size={20} />
        </motion.button>
      </div>
    </motion.div>
  );
}
