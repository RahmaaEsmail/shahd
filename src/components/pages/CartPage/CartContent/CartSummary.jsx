"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';
import { useClearCart } from '@/hooks/cart/useCart';

// Animation variants - preserving exact design
const summaryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.3
    }
  })
};

const buttonVariants = {
  hover: {
    scale: 1.02,
    transition: { duration: 0.2 }
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 }
  }
};

export default function CartSummary({ itemCount = 0, subtotal = 0, userId }) {
  const { t } = useTranslation();
  const router = useRouter();
  const { mutate: clearCart, isPending: isClearing } = useClearCart();

  const handleClearCart = () => {
    Swal.fire({
      title: t("Clear cart?"),
      text: t("All items will be removed from your cart."),
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: t("Clear"),
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
        clearCart({ user_id: userId });
      }
    });
  };

  return (
    <motion.div
      className="w-full flex flex-col gap-8 font-poppins"
      variants={summaryVariants}
      initial="hidden"
      whileInView="visible"
    >
      <motion.h2
        className="text-primary font-semibold text-md border-b-2 border-primary pb-4"
        variants={itemVariants}
        custom={0}
      >
        {t("Order Summary")}
      </motion.h2>

      <div className="flex flex-col gap-6 px-2">
        <motion.div
          className="flex justify-between items-center uppercase"
          variants={itemVariants}
          custom={1}
        >
          <span className="text-md font-bold tracking-[-0.3px] text-primary">{itemCount} {t("Products")}</span>
          <motion.span
            key={subtotal}
            className="text-md font-semibold text-[#414141]"
            initial={{ scale: 1 }}
            whileInView={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 0.3 }}
          >
            {subtotal.toFixed(2)} S.R
          </motion.span>
        </motion.div>
      </div>

      {/* Glassmorphism Total Section - Exact design preserved */}
      <motion.div
        className="relative flex justify-between bg-white/6 rounded-[24px] p-[24px_20px] overflow-hidden"
        style={{
          boxShadow: `
            -0.13px -0.03px 4.62px 0px rgba(255, 255, 255, 0.126) inset,
            -0.23px 0.06px 9.4px 0px rgba(255, 255, 255, 0.126) inset,
            1.2px -0.03px 48px -12px rgba(0, 0, 0, 0.15)
          `,
        }}
        variants={itemVariants}
        custom={3}
      >
        <span className="text-md font-bold tracking-[-0.3px] text-primary uppercase">{t("Total")}</span>
        <motion.span
          key={subtotal}
          className="text-md font-semibold text-[#414141]"
          initial={{ scale: 1 }}
          whileInView={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 0.3 }}
        >
          {subtotal.toFixed(2)} S.R
        </motion.span>
      </motion.div>

      <div className="flex flex-col md:flex-row-reverse gap-3 md:items-center">
        <motion.button
          onClick={() => router.push("/checkout")}
          style={{
            background: "linear-gradient(90deg, #DDB2B5 0%, #EFD4CE 100%)"
          }}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="w-full md:w-fit py-4 px-10 rounded-full text-white text-md font-normal uppercase transition-colors shadow-lg shadow-[#EFD4CE]/40"
        >
          {t("Check Out")}
        </motion.button>

        <motion.button
          onClick={handleClearCart}
          disabled={isClearing}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="w-full md:w-fit py-4 px-10 rounded-full text-primary border border-primary text-md font-normal uppercase transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {t("Clear Cart")}
        </motion.button>
      </div>
    </motion.div>
  );
}
