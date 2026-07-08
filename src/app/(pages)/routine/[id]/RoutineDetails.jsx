"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  Check,
  ArrowLeft,
  Home,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useRoutineDetails } from "../../../../hooks/routine/useRoutine";
import Loading from "../../../loading";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import StoreProductCard from "@/components/pages/storePage/StoreProducts/StoreProductCard";
import Toast from "@/components/shared/Toast";

export default function RoutineDetails() {
  const { id } = useParams();
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const { data: servicesResponse, isLoading } = useRoutineDetails({ id });

  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [showAddedMessage, setShowAddedMessage] = useState(false);

  const isRtl = i18n.language?.startsWith("ar");
  const direction = isRtl ? "rtl" : "ltr";

  if (isLoading) {
    return <Loading />;
  }

  const routine = servicesResponse?.data;

  if (!routine) {
    return (
      <div
        className="min-h-[70vh] flex flex-col justify-center items-center px-4 py-16"
        dir={direction}
      >
        <div className="text-center space-y-6 max-w-md">
          <h2 className="text-3xl font-bold text-[#4D3E3F]">
            {t("Routine Not Found")}
          </h2>
          <p className="text-gray-500">
            {t(
              "The routine you are looking for might have been removed or is temporarily unavailable.",
            )}
          </p>
          <button
            onClick={() => router.push("/")}
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/95 transition-all shadow-md font-medium"
          >
            <Home size={18} />
            {t("Back to Home")}
          </button>
        </div>
      </div>
    );
  }

  const products = routine.routine_products || [];

  const breadcrumbItems = [
    { label: t("Home"), href: "/" },
    { label: t("Store"), href: "/store" },
    { label: t("Routine Details") },
  ];

  const handleAddAllToCart = () => {
    setIsAddingToCart(true);

    setTimeout(() => {
      setIsAddingToCart(false);
      setShowAddedMessage(true);

      setTimeout(() => {
        setShowAddedMessage(false);
      }, 2500);

      console.log("Added complete routine to cart:", {
        routineId: routine.routine,
        title: routine.routine_title,
        price: routine.price,
        productsCount: products.length,
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20" dir={direction}>
      {/* 1. Header Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-[75vh] flex justify-center items-center py-16 overflow-hidden"
        style={{
          background: `url(${routine.routine_image || "/SHAHD-IMAGE/product-details/service details.webp"})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px] z-10" />

        <div className="main-container text-center relative z-20 w-full max-w-5xl px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.2,
            }}
            className="text-4xl md:text-6xl font-normal leading-tight text-white mb-6 tracking-wide uppercase"
          >
            {routine.routine_title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.4,
            }}
            className="flex justify-center"
          >
            <Breadcrumb items={breadcrumbItems} />
          </motion.div>
        </div>
      </motion.div>

      {/* 2. Routine Overview Grid */}
      <div className="main-container px-4 lg:px-8 mt-12 md:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-8 lg:gap-16 items-start">
          {/* Left Column: Image wrapper */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square w-full rounded-[32px] overflow-hidden shadow-xl border border-gray-100 bg-white"
          >
            <Image
              src={routine.routine_image}
              alt={routine.routine_title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
              sizes="(max-width: 1024px) 100vw, 500px"
            />
          </motion.div>

          {/* Right Column: Info & Actions */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-[#DAF4E7] text-[#95BCAA] border border-[#95BCAA] font-poppins text-sm font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
                {t("Curated Routine")}
              </span>
              <span className="bg-primary/10 text-primary border border-primary/20 font-poppins text-sm font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles size={14} className="animate-spin" />
                {products.length} {t("Products")}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-normal text-[#4D3E3F] leading-tight">
              {routine.routine_title}
            </h2>

            <p className="text-gray-600 font-poppins text-base md:text-lg leading-relaxed">
              {routine.routine_des}
            </p>

            <div className="h-[1px] bg-gray-200 my-2" />

            <div className="flex items-baseline gap-4">
              <h3 className="text-3xl md:text-4xl font-poppins font-bold text-primary">
                {Number(routine.price).toFixed(2)} {t("S.R")}
              </h3>
              <p className="text-lg text-gray-400 line-through font-poppins">
                {(Number(routine.price) * 1.25).toFixed(2)} {t("S.R")}
              </p>
              <span className="text-xs bg-[#ddb2b5]/20 text-[#4d3e3f] font-semibold px-2.5 py-1 rounded-md font-poppins">
                {t("Save 20%")}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddAllToCart}
                disabled={isAddingToCart}
                className="flex-1 h-14 bg-gradient-to-r from-[#DDB2B5] to-[#EFD4CE] hover:opacity-95 text-white rounded-full flex justify-center items-center text-lg md:text-xl font-medium relative overflow-hidden shadow-lg border-0 cursor-pointer disabled:opacity-60"
              >
                <AnimatePresence mode="wait">
                  {isAddingToCart ? (
                    <motion.div
                      key="adding"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
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
                      <span>{t("Adding Entire Routine...")}</span>
                    </motion.div>
                  ) : showAddedMessage ? (
                    <motion.div
                      key="added"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-3"
                    >
                      <Check size={22} />
                      <span>{t("Complete Routine Added!")}</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="normal"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-3"
                    >
                      <ShoppingCart size={22} />
                      <span>{t("Add Entire Routine to Cart")}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* 3. Routine steps & products */}
        <div className="mt-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h3 className="text-3xl font-normal text-primary uppercase mb-3">
              {t("Routine Steps")}
            </h3>
            <p className="text-gray-500 font-poppins text-sm md:text-base">
              {t(
                "Follow this step-by-step skincare routine designed specifically for maximum benefits.",
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {products.map((item, index) => {
              const mappedProduct = {
                id: item.id,
                name: item.title,
                img: item.main_image,
                hover_image: item.hover_image || item.main_image,
                price: item.price,
                rating: Number(item.rating) || 5,
                category: item.product_type || t("Serum"),
              };

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative group flex h-full w-full"
                >
                  {/* Step counter badge */}
                  {/* <div className="absolute top-4 left-4 z-30 bg-[#4D3E3F] text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-md font-poppins border border-white/20">
                    {t("Step")} {index + 1}
                  </div> */}
                  <StoreProductCard product={mappedProduct} />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 4. Detailed Step-by-Step Instructions */}
        {products.length > 0 && (
          <div className="mt-24 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-normal text-primary uppercase mb-3 flex items-center justify-center gap-2">
                <BookOpen size={28} />
                {t("How to Apply")}
              </h3>
              <p className="text-gray-500 font-poppins text-sm">
                {t(
                  "Instructions on how to apply each product within this routine.",
                )}
              </p>
            </div>

            <div className="space-y-6">
              {products.map((p, idx) => {
                let steps = [];
                try {
                  steps =
                    typeof p.how_to_use === "string"
                      ? JSON.parse(p.how_to_use)
                      : p.how_to_use || [];
                } catch (e) {
                  steps = [];
                }

                return (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-6 p-6 rounded-3xl bg-white border border-[#A68688]/15 shadow-sm hover:shadow-md transition-shadow duration-300 items-start"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#DDB2B5] to-[#EFD4CE] text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-md">
                      {idx + 1}
                    </div>

                    <div className="flex-1 space-y-3">
                      <div>
                        <span className="text-sm font-semibold text-primary/70 font-poppins block mb-1">
                          {p.product_type || t("Skincare Step")}
                        </span>
                        <h4 className="text-xl font-medium font-poppins text-[#4D3E3F] leading-snug">
                          {p.title}
                        </h4>
                      </div>

                      <p className="text-gray-600 text-sm font-poppins">
                        {p.description}
                      </p>

                      {steps.length > 0 && (
                        <div className="pt-2">
                          <h5 className="text-xs font-bold uppercase tracking-wider text-[#4D3E3F] mb-2">
                            {t("Directions:")}
                          </h5>
                          <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1.5 pl-1 leading-relaxed">
                            {steps.map((step, sIdx) => (
                              <li key={sIdx} className="font-poppins">
                                {t(step)}
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <Toast
        position="top"
        show={showAddedMessage}
        message={t("Entire routine added to cart successfully!")}
        type="success"
      />
    </div>
  );
}
