"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Star, ShoppingCart } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useHorse, useHorseProductDetails } from "@/hooks/horse/useHorse";
import { useAddToCartAction } from "@/hooks/cart/useCart";
import Loading from "../../../../loading";
import Toast from "@/components/shared/Toast";

// Background landing page components
import HorseBanner from "@/components/pages/horsePage/HorseBanner/HorseBanner";
import HorseContactUs from "@/components/pages/horsePage/HorseContactUs/HorseContactUs";
import HorseProducts from "@/components/pages/horsePage/HorseProducts/HorseProducts";
import HorseAbout from "@/components/pages/horsePage/HorseAbout/HorseAbout";
import HorseGallery from "@/components/pages/horsePage/HorseGallery/HorseGallery";

const HorseProductClientDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  const { t, i18n } = useTranslation();

  // Fetch landing page background data
  const { data: horseLandingData, isLoading: isLandingLoading } = useHorse();

  // Fetch detailed product data
  const { data: productDetailsData, isLoading: isProductLoading } =
    useHorseProductDetails({ id });

  const [quantity, setQuantity] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const { addToCart, isAddingToCart } = useAddToCartAction();

  const lang = i18n.language?.startsWith("ar")
    ? "ar"
    : i18n.language?.startsWith("sk")
      ? "sk"
      : "en";

  const handleClose = () => {
    router.push("/horse");
  };

  const handleAddToCart = () => {
    const title =
      productDetailsData?.data?.[`title_${lang}`] ||
      productDetailsData?.data?.title_en ||
      t("Product");
    addToCart(productDetailsData?.data?.id, quantity, {
      onSuccess: (res) => {
        if (res?.status === "success") {
          setToastMessage(
            `${quantity} x ${title} ${t("added to cart successfully!")}`,
          );
          setShowToast(true);
        }
      },
    });
  };

  // Prevent scroll on body when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (isLandingLoading) {
    return <Loading />;
  }

  const product = productDetailsData?.data;
  const imageUrl = product?.image
    ? `https://drshahdawad.com/ShahdAwad/uploads/horse_products/${product.image}`
    : "/placeholder.jpg";

  const title = product?.[`title_${lang}`] || product?.title_en || "";
  const category = product?.[`category_${lang}`] || product?.category_en || "";
  const price = product?.price || "0.00";

  // Beautiful fallback description based on category/title
  const defaultDesc =
    lang === "ar"
      ? "تمت صياغة هذا المنتج الفاخر بعناية لتوفير رعاية استثنائية ولطيفة لخيلك. مصنوع من أجود المكونات لضمان أعلى مستويات النظافة والتميز الرياضي."
      : lang === "sk"
        ? "Tento prémiový produkt je starostlivo vytvorený tak, aby poskytoval výnimočnú a jemnú starostlivosť o vášho koňa. Vyrobený z najkvalitnejších ingrediencií pre optimálnu hygienu a pohodlie."
        : "This premium product is meticulously crafted to provide exceptional and gentle care for your horse. Made with the finest ingredients to ensure optimal hygiene, performance, and comfort.";

  return (
    <div className="relative w-full min-h-screen">
      {/* Blurred background of the landing page */}
      <div className="filter blur-xs opacity-40 scale-[1.01] pointer-events-none select-none transition-all duration-500">
        <HorseBanner data={horseLandingData?.data?.horse_banner} />
        <HorseAbout data={horseLandingData?.data?.horse_about} />
        <HorseGallery data={horseLandingData?.data?.horse_gallery} />
        <HorseProducts data={horseLandingData?.data?.horse_products} />
        <HorseContactUs />
      </div>

      {/* Modal Container */}
      <div className="fixed inset-0 z-9999999999! flex items-center justify-center bg-black/60 backdrop-blur-md p-4 overflow-y-auto">
        {/* Click outside to close */}
        <div
          className="absolute inset-0 cursor-pointer"
          onClick={handleClose}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 280 }}
          className="relative bg-white/95 backdrop-blur-2xl border border-[#A68688]/30 rounded-[32px] max-w-4xl w-full overflow-hidden shadow-2xl p-6 sm:p-8 flex flex-col md:flex-row gap-8 z-10"
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-50 bg-[#4D3E3F]/5 hover:bg-[#AF7F73] text-[#4D3E3F] hover:text-white p-2 rounded-full transition-all duration-300 hover:rotate-90 hover:scale-105 cursor-pointer flex items-center justify-center"
          >
            <X size={20} />
          </button>

          {isProductLoading ? (
            <div className="w-full h-[400px] flex flex-col items-center justify-center gap-4 py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#AF7F73]"></div>
              <p className="text-sm font-poppins text-[#A68688] font-medium animate-pulse">
                {t("Loading product details...")}
              </p>
            </div>
          ) : (
            <>
              {/* Product Image Section */}
              <div className="relative w-full md:w-1/2 aspect-square md:h-[400px] bg-gradient-to-b from-[#FDF8F5] to-[#F5E8E6] rounded-[24px] overflow-hidden border border-[#A68688]/20 flex items-center justify-center group">
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Product Info Section */}
              <div className="flex flex-col justify-between w-full md:w-1/2 pt-2 md:pt-0">
                <div className="flex flex-col">
                  {/* Category */}
                  <span className="text-xs font-semibold tracking-wider text-[#AF7F73] uppercase mb-1 font-poppins">
                    {category}
                  </span>

                  {/* Title */}
                  <h1 className="text-2xl sm:text-3xl font-normal text-[#4D3E3F] leading-tight mb-3">
                    {title}
                  </h1>

                  {/* Ratings */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star
                          key={idx}
                          size={16}
                          className="text-[#EFC77E] fill-[#EFC77E]"
                        />
                      ))}
                    </div>
                    <span className="text-xs text-[#A68688] font-poppins">
                      (5.0 / 5)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="text-2xl font-semibold font-poppins text-[#A68688] mb-4">
                    {price}{" "}
                    <span className="text-sm font-normal">{t("S.R")}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#4D3E3F]/80 leading-relaxed font-normal mb-6">
                    {defaultDesc}
                  </p>
                </div>

                {/* Footer / Actions */}
                <div className="flex flex-col gap-4 mt-auto">
                  {/* Quantity selector */}
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-[#4D3E3F] font-poppins">
                      {t("Quantity")}:
                    </span>
                    <div className="flex items-center border border-[#A68688]/30 rounded-full bg-white px-2 py-1 shadow-xs">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-1 rounded-full text-[#4D3E3F] hover:bg-neutral-100 transition-colors"
                        disabled={quantity <= 1}
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-12 text-center font-semibold text-[#4D3E3F] font-poppins text-sm">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-1 rounded-full text-[#4D3E3F] hover:bg-neutral-100 transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Add to Cart button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAddToCart}
                    disabled={isAddingToCart}
                    className="w-full h-[52px] rounded-full text-white flex justify-center items-center gap-2 text-base font-normal bg-gradient-to-r from-[#DDB2B5] to-[#EFD4CE] hover:shadow-lg transition-all duration-300 cursor-pointer shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <ShoppingCart size={18} />
                    {isAddingToCart ? t("Adding...") : t("Add To Cart")}
                  </motion.button>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </div>

      {/* Success Toast */}
      <Toast
        show={showToast}
        message={toastMessage}
        type="success"
        onClose={() => setShowToast(false)}
      />
    </div>
  );
};

export default HorseProductClientDetails;
