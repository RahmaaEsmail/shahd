"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useTranslation } from "react-i18next";
import CartSummary from "./CartSummary";
import CartTable from "./CartTable";
import { useCart } from "@/hooks/cart/useCart";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";
import Loading from "@/app/loading";

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

const productListVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const summaryVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      delay: 0.2,
    },
  },
};

export default function CartContent() {
  const { t } = useTranslation();
  const user = useCurrentUser();
  const { data: cartData, isLoading: isCartLoading } = useCart(user?.user_id);

  const rawItems = Array.isArray(cartData?.data)
    ? cartData.data
    : cartData?.data?.items || [];

  // Cart API already embeds the full product inside each cart item — no separate fetch needed
  const items = rawItems.map((cartItem) => {
    const p = cartItem?.product || {};
    const unit = cartItem?.unit;

    // Price: prefer unit.price (selected size price), fall back to product base price
    const price = unit?.price != null ? Number(unit.price) : Number(p?.price ?? 0);

    const image =
      p?.main_image ||
      p?.image_url ||
      p?.hover_image ||
      "/SHAHD-IMAGE/Cart/Rectangle 43.webp";

    const name = p?.title_en || p?.title_ar || p?.title || p?.name || `#${cartItem.cart_id}`;

    return {
      ...cartItem,
      name,
      image,
      price,
      quantity: Number(cartItem.cart_quantity ?? cartItem.quantity ?? 1),
      unit,
    };
  });

  // Subtotal: price × quantity per line
  const subtotal = items.reduce(
    (sum, item) => sum + (Number(item.price) || 0) * (Number(item.quantity) || 1),
    0,
  );

  if (user === undefined || (user && isCartLoading)) {
    return <Loading />;
  }

  if (!user) {
    return (
      <div className="main-container px-4 sm:px-6 py-20 bg-white flex flex-col items-center text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-[#F9F4F4] flex items-center justify-center">
          <ShoppingBag className="text-primary" size={28} />
        </div>
        <h2 className="text-2xl font-normal text-secondary uppercase">
          {t("Sign in to see your cart")}
        </h2>
        <p className="text-[#6A6A6A] font-poppins max-w-md">
          {t("Please sign in to add items to your cart and check out.")}
        </p>
        <Link
          href="/login"
          className="mt-2 px-8 py-3 rounded-full text-white font-poppins bg-linear-to-r from-[#DDB2B5] to-[#EFD4CE]"
        >
          {t("Sign In")}
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="main-container px-4 sm:px-6 py-20 bg-white flex flex-col items-center text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-[#F9F4F4] flex items-center justify-center">
          <ShoppingBag className="text-primary" size={28} />
        </div>
        <h2 className="text-2xl font-normal text-secondary uppercase">
          {t("Your cart is empty")}
        </h2>
        <p className="text-[#6A6A6A] font-poppins max-w-md">
          {t("Looks like you haven't added anything to your cart yet.")}
        </p>
        <Link
          href="/store"
          className="mt-2 px-8 py-3 rounded-full text-white font-poppins bg-linear-to-r from-[#DDB2B5] to-[#EFD4CE]"
        >
          {t("explore the services")}
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      className="main-container px-4 sm:px-6 py-12 bg-white"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col lg:grid lg:grid-cols-[2fr_1fr] gap-12 lg:gap-28">
        {/* Left Side: Products List */}
        <motion.div variants={productListVariants}>
          <CartTable items={items} userId={user.user_id} />
        </motion.div>

        {/* Right Side: Order Summary */}
        <motion.div variants={summaryVariants} className="w-full">
          <CartSummary
            itemCount={items.length}
            subtotal={subtotal}
            userId={user.user_id}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
