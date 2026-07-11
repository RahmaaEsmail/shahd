// "use client";
// import { Star, Heart } from "lucide-react";
// import Image from "next/image";
// import React from "react";
// import { motion } from "framer-motion";
// import { useRouter } from "next/navigation";
// import { cn, slugify } from "@/lib/utils";
// import useWishlistStore from "@/zustandStore/WishlistStore";
// import { useTranslation } from "react-i18next";

// // Card animation variants
// const cardVariants = {
//   hidden: { opacity: 0, y: 20, scale: 0.9 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       duration: 0.4,
//       ease: "easeOut",
//     },
//   },
// };

// const buttonVariants = {
//   hover: {
//     scale: 1.05,
//     boxShadow: "0px 8px 20px rgba(221, 178, 181, 0.4)",
//     transition: {
//       type: "spring",
//       stiffness: 400,
//       damping: 10,
//     },
//   },
//   tap: {
//     scale: 0.95,
//   },
// };

// const starVariants = {
//   hidden: { scale: 0, rotate: -180 },
//   visible: (i) => ({
//     scale: 1,
//     rotate: 0,
//     transition: {
//       delay: i * 0.03,
//       type: "spring",
//       stiffness: 300,
//       damping: 15,
//     },
//   }),
// };

// export default function StoreProductCard({ product, is_btn = true }) {
//   const router = useRouter();
//   const { t } = useTranslation();
//   const { toggleWishlist, isInWishlist } = useWishlistStore();
//   const isLiked = isInWishlist(product?.id);

//   const handleCardClick = (e) => {
//     if (e.target.closest("button")) return;
//     if (product?.id && product?.name) {
//       router.push(`/products/${product.id}/${slugify(product.name)}`);
//     }
//   };

//   const handleWishlistClick = (e) => {
//     e.stopPropagation();
//     toggleWishlist(product);
//   };

//   const handleButtonClick = (e) => {
//     e.stopPropagation();
//     router.push("/cart");
//   };

//   return (
//     <motion.div
//       variants={cardVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: false, amount: 0.3 }}
//       onClick={handleCardClick}
//       className={cn(
//         "flex flex-col overflow-hidden rounded-[24px] pb-5 border border-[#A68688] bg-white hover:shadow-2xl transition-shadow duration-300 cursor-pointer group w-full",
//         is_btn ? "min-h-[380px] sm:h-[400px]" : "min-h-[320px] sm:h-[340px]",
//       )}
//     >
//       {/* Image Container */}
//       <div className="relative w-full h-[180px] sm:h-[222px] bg-linear-to-b from-[#FDF8F5] to-[#F5E8E6] overflow-hidden">
//         {/* Heart Button - Higher Z-index to stay on top */}
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={handleWishlistClick}
//           className={cn(
//             "absolute top-4 right-4 z-30 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-md",
//             isLiked
//               ? "bg-primary text-white"
//               : "bg-white/80 backdrop-blur-md text-primary hover:bg-white",
//           )}
//         >
//           <Heart className={cn("w-5 h-5", isLiked && "fill-current")} />
//         </motion.button>

//         {/* Image Wrapper */}
//         <div className="relative w-full h-full">
//           {/* Base Image */}
//           <Image
//             src={product?.img}
//             alt={t(product?.name)}
//             fill
//             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
//             className="object-cover transition-transform duration-500 group-hover:scale-110"
//             loading="lazy"
//           />

//           {/* Hover Image Overlay */}
//           {product?.hover_image && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileHover={{ opacity: 1 }}
//               transition={{ duration: 0.4 }}
//               className="absolute inset-0 z-10"
//             >
//               <Image
//                 src={product.hover_image}
//                 alt={`${t(product?.name)} ${t("alternate view")}`}
//                 fill
//                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
//                 className="object-cover scale-110 group-hover:scale-110 transition-transform duration-500"
//               />
//             </motion.div>
//           )}
//         </div>

//         {/* Gradient Overlay - Z-index 20 to sit above images but below Heart */}
//         <div
//           className="absolute inset-0 pointer-events-none z-20"
//           style={{
//             background:
//               "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(216, 179, 180, 0.32) 100%)",
//           }}
//         />
//       </div>

//       {/* Content Container */}
//       <div className="flex flex-col justify-center items-center gap-2 sm:gap-3 px-4 mt-4">
//         <motion.h4
//           className="text-lg  font-normal uppercase text-[#4D3E3F] line-clamp-1 text-center"
//           whileHover={{ scale: 1.02, color: "#DDB2B5" }}
//         >
//           {t(product?.name)}
//         </motion.h4>

//         {/* Rating Stars */}
//         <motion.div
//           className="flex gap-1 mt-1 sm:mt-3"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: false, amount: 0.3 }}
//           variants={{
//             visible: {
//               transition: {
//                 staggerChildren: 0.03,
//                 delayChildren: 0.1,
//               },
//             },
//           }}
//         >
//           {Array.from({ length: 5 }).map((_, index) => (
//             <motion.div key={index} custom={index} variants={starVariants}>
//               <Star
//                 className={`${index < product?.rating ? "text-[#EFC77E] fill-[#EFC77E]" : "text-gray-300"} w-4 h-4`}
//               />
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Price */}
//         <motion.p
//           className="text-[#A68688] text-lg font-poppins font-semibold"
//           whileHover={{ scale: 1.05, color: "#DDB2B5" }}
//         >
//           {product?.price} {t("S.R")}
//         </motion.p>

//         {/* Add to Cart Button */}
//         {is_btn && (
//           <motion.button
//             onClick={handleButtonClick}
//             variants={buttonVariants}
//             whileHover="hover"
//             whileTap="tap"
//             className="w-full max-w-[189px] h-10 lg:h-[48px] rounded-full text-white flex justify-center items-center text-base  font-normal bg-linear-to-r from-[#DDB2B5] to-[#EFD4CE]"
//           >
//             {t("Add To Cart")}
//           </motion.button>
//         )}
//       </div>
//     </motion.div>
//   );
// }

"use client";
import { Star, Heart, Minus, Plus, Loader2, X, Check } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { cn, slugify } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { useAddToCartAction, useCart, useUpdateCart, useDeleteCartItem } from "@/hooks/cart/useCart";
import { useWishlist, useToggleWishlistAction } from "@/hooks/wishlist/useWishlist";

// Card animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const buttonVariants = {
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

const starVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: (i) => ({
    scale: 1,
    rotate: 0,
    transition: {
      delay: i * 0.03,
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  }),
};

export default function StoreProductCard({
  product,
  is_btn = true,
  is_horse = false,
}) {
  const router = useRouter();
  const { t } = useTranslation();
  const { addToCart, isAddingToCart, user } = useAddToCartAction();
  const { mutate: updateCart, isPending: isUpdating } = useUpdateCart();
  const { mutate: deleteCartItem, isPending: isDeleting } = useDeleteCartItem();
  const { toggleWishlist: toggleWishlistApi, isToggling: isTogglingWishlist } = useToggleWishlistAction();
  const { data: wishlistData } = useWishlist(user?.user_id);

  const wishlistItems = React.useMemo(() => {
    return Array.isArray(wishlistData?.data)
      ? wishlistData.data
      : wishlistData?.data?.items || [];
  }, [wishlistData]);

  const isLiked = React.useMemo(() => {
    return wishlistItems.some((item) => (item?.product_id ?? item?.id) == product?.id);
  }, [wishlistItems, product?.id]);

  const { data: cartData } = useCart(user?.user_id);
  const cartItems = Array.isArray(cartData?.data)
    ? cartData.data
    : cartData?.data?.items || [];
  const cartItem = cartItems.find(
    (item) => (item?.product?.id ?? item?.product_id ?? item?.id) == product?.id
  );
  const currentQuantity = cartItem
    ? Number(cartItem.cart_quantity ?? cartItem.quantity ?? 0)
    : 0;

  const [buttonQuantity, setButtonQuantity] = React.useState(0);
  const [showSizeModal, setShowSizeModal] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);

  // Parse sizes_price — API may return it as a JSON string or an array
  const parsedSizes = React.useMemo(() => {
    const raw = product?.sizes_price;
    if (!raw) return [];
    if (Array.isArray(raw)) return raw;
    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }, [product?.sizes_price]);

  const hasSizes = parsedSizes.length > 0;

  React.useEffect(() => {
    setButtonQuantity(currentQuantity);
  }, [currentQuantity]);

  const handleCardClick = (e) => {
    console.log("product card", product);
    if (e.target.closest("button")) return;
    if (product?.id && product?.name && !is_horse) {
      router.push(`/products/${product.id}/${product.name}`);
    } else if (is_horse && product?.id && product?.name) {
      router.push(`/horse/products/${product.id}`);
    }
  };

  const handleWishlistClick = (e) => {
    e.stopPropagation();
    if (isTogglingWishlist) return;
    toggleWishlistApi(product?.id);
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
    if (isAddingToCart) return;
    if (hasSizes) {
      setSelectedSize(parsedSizes[0]); // pre-select first size
      setShowSizeModal(true);
      return;
    }
    addToCart(product?.id, 1, {
      onSuccess: (res) => {
        if (res?.status === "success") {
          const returnedQuantity = res?.quantity ?? res?.data?.quantity ?? res?.data?.items?.find(item => (item?.product_id ?? item?.id) == product?.id)?.quantity;
          if (returnedQuantity !== undefined) {
            setButtonQuantity(Number(returnedQuantity));
          } else {
            setButtonQuantity((prev) => prev + 1);
          }
        }
      }
    });
  };

  const handleConfirmSize = () => {
    if (!selectedSize) return;
    const unit = { size: selectedSize.size, price: Number(selectedSize.price) };
    addToCart(
      product?.id,
      1,
      {
        onSuccess: (res) => {
          if (res?.status === "success") {
            setShowSizeModal(false);
            const returnedQuantity = res?.quantity ?? res?.data?.quantity ?? res?.data?.items?.find(item => (item?.product_id ?? item?.id) == product?.id)?.quantity;
            if (returnedQuantity !== undefined) {
              setButtonQuantity(Number(returnedQuantity));
            } else {
              setButtonQuantity((prev) => prev + 1);
            }
          }
        },
      },
      unit,
    );
  };

  const handleDecrease = (e) => {
    e.stopPropagation();
    const cartId = cartItem?.cart_id ?? cartItem?.id;
    if (!cartId || isUpdating || isDeleting) return;
    
    if (buttonQuantity > 1) {
      updateCart({ cart_id: cartId, quantity: buttonQuantity - 1 }, {
        onSuccess: (res) => {
          if (res?.status === "success") {
            setButtonQuantity(buttonQuantity - 1);
          }
        }
      });
    } else {
      deleteCartItem({ cart_id: cartId }, {
        onSuccess: (res) => {
          if (res?.status === "success") {
            setButtonQuantity(0);
          }
        }
      });
    }
  };

  const handleIncrease = (e) => {
    e.stopPropagation();
    const cartId = cartItem?.cart_id ?? cartItem?.id;
    if (!cartId || isUpdating || isDeleting) return;

    updateCart({ cart_id: cartId, quantity: buttonQuantity + 1 }, {
      onSuccess: (res) => {
        if (res?.status === "success") {
          setButtonQuantity(buttonQuantity + 1);
        }
      }
    });
  };

  return (
    <>
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      onClick={handleCardClick}
      className={cn(
        "flex flex-col overflow-hidden rounded-[24px] pb-5 border border-[#A68688] bg-white hover:shadow-2xl transition-shadow duration-300 cursor-pointer group w-full h-full",
        is_btn ? "min-h-[380px] sm:h-[420px]" : "min-h-[320px] sm:h-[350px]",
      )}
    >
      {/* Image Container */}
      <div className="relative w-full h-[180px] sm:h-[222px] bg-linear-to-b from-[#FDF8F5] to-[#F5E8E6] overflow-hidden">
        {/* Heart Button - Higher Z-index to stay on top */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleWishlistClick}
          disabled={isTogglingWishlist}
          className={cn(
            "absolute top-4 right-4 z-30 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-md disabled:opacity-75",
            isLiked
              ? "bg-red-500 text-white"
              : "bg-white/80 backdrop-blur-md text-primary hover:bg-white",
          )}
        >
          {isTogglingWishlist ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Heart className={cn("w-5 h-5", isLiked && "fill-current")} />
          )}
        </motion.button>

        {/* Image Wrapper */}
        <div className="relative w-full h-full">
          {/* Base Image */}
          <Image
            src={product?.img}
            alt={t(product?.name)}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className={`object-contain transition-transform duration-500  group-hover:scale-110 ${product?.hover_image && "group-hover:opacity-0"}`}
            loading="lazy"
          />

          {/* Hover Image Overlay */}
          {product?.hover_image && (
            <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-in-out">
              <Image
                src={product.hover_image}
                alt={`${t(product?.name)} ${t("alternate view")}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-contain scale-110 group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          )}
        </div>

        {/* Gradient Overlay - Z-index 20 to sit above images but below Heart */}
        <div
          className="absolute inset-0 pointer-events-none z-20"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(216, 179, 180, 0.32) 100%)",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col justify-between items-center gap-2 sm:gap-3 px-4 mt-4 flex-1">
        <div className="flex flex-col items-center gap-1 sm:gap-2 w-full">
          <motion.h4
            className="text-lg font-normal uppercase text-[#4D3E3F] line-clamp-2 text-center h-12 flex items-center justify-center w-full"
            whileHover={{ scale: 1.02, color: "#DDB2B5" }}
          >
            {t(product?.name)}
          </motion.h4>

          {/* Rating Stars */}
          <motion.div
            className="flex gap-1 mt-1 sm:mt-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.03,
                  delayChildren: 0.1,
                },
              },
            }}
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <motion.div key={index} custom={index} variants={starVariants}>
                <Star
                  className={`${index < product?.rating ? "text-[#EFC77E] fill-[#EFC77E]" : "text-gray-300"} w-4 h-4`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="flex flex-col items-center gap-2 w-full mt-auto">
          {/* Price */}
          <motion.p
            className="text-[#A68688] text-lg font-poppins font-semibold"
            whileHover={{ scale: 1.05, color: "#DDB2B5" }}
          >
            {product?.price} {t("S.R")}
          </motion.p>

          {/* Add to Cart Button */}
          {is_btn && (
            buttonQuantity > 0 ? (
              <div 
                onClick={(e) => e.stopPropagation()} 
                className="w-full max-w-[189px] h-10 lg:h-[48px] rounded-full flex justify-between items-center px-4 bg-linear-to-r from-[#DDB2B5] to-[#EFD4CE] text-white shadow-sm"
              >
                <motion.button
                  onClick={handleDecrease}
                  disabled={isUpdating || isDeleting}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors disabled:opacity-50 cursor-pointer"
                >
                  <Minus size={16} />
                </motion.button>
                
                <span className="font-poppins text-lg font-medium select-none min-w-[20px] text-center flex items-center justify-center">
                  {isUpdating || isDeleting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    buttonQuantity
                  )}
                </span>

                <motion.button
                  onClick={handleIncrease}
                  disabled={isUpdating || isDeleting}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors disabled:opacity-50 cursor-pointer"
                >
                  <Plus size={16} />
                </motion.button>
              </div>
            ) : (
              <motion.button
                onClick={handleButtonClick}
                disabled={isAddingToCart}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="w-full max-w-[189px] h-10 lg:h-[48px] rounded-full text-white flex justify-center items-center gap-2 text-base font-normal bg-linear-to-r from-[#DDB2B5] to-[#EFD4CE] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isAddingToCart ? (
                  <>
                    <Loader2 className="animate-spin w-4 h-4" />
                    {t("Adding...")}
                  </>
                ) : (
                  t("Add To Cart")
                )}
              </motion.button>
            )
          )}
        </div>
      </div>
    </motion.div>

    {/* ── Size Selection Modal ── */}
    <AnimatePresence>
      {showSizeModal && (
        <motion.div
          key="size-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => { e.stopPropagation(); setShowSizeModal(false); }}
          className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm px-4 pb-4 sm:pb-0"
        >
          <motion.div
            key="size-modal-panel"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl shadow-2xl w-full max-w-sm p-6 flex flex-col gap-5"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-[#4D3E3F]">{t("Select Size")}</h3>
                <p className="text-sm text-[#A68688] mt-0.5 line-clamp-1">{product?.name}</p>
              </div>
              <button
                onClick={() => setShowSizeModal(false)}
                className="w-8 h-8 rounded-full bg-[#F5E8E6] flex items-center justify-center text-[#A68688] hover:bg-[#DDB2B5] hover:text-white transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            {/* Size Options */}
            <div className="flex flex-wrap gap-3">
              {parsedSizes.map((sizeObj, idx) => {
                const isSelected = selectedSize?.size === sizeObj.size;
                return (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setSelectedSize(sizeObj)}
                    className={cn(
                      "relative flex flex-col items-center justify-center gap-0.5 px-4 py-2.5 rounded-2xl border-2 transition-all duration-200 cursor-pointer min-w-[72px]",
                      isSelected
                        ? "border-[#DDB2B5] bg-gradient-to-br from-[#DDB2B5] to-[#EFD4CE] text-white shadow-md"
                        : "border-[#E8D5D6] bg-[#FDF8F5] text-[#4D3E3F] hover:border-[#DDB2B5]",
                    )}
                  >
                    {isSelected && (
                      <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#DDB2B5] flex items-center justify-center">
                        <Check size={10} className="text-white" />
                      </span>
                    )}
                    <span className="text-sm font-semibold">{sizeObj.size}</span>
                    <span className={cn("text-xs font-medium", isSelected ? "text-white/90" : "text-[#A68688]")}>
                      {sizeObj.price} {t("S.R")}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Confirm Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleConfirmSize}
              disabled={!selectedSize || isAddingToCart}
              className="w-full h-12 rounded-full bg-gradient-to-r from-[#DDB2B5] to-[#EFD4CE] text-white font-medium flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed shadow-md cursor-pointer"
            >
              {isAddingToCart ? (
                <><Loader2 className="animate-spin w-4 h-4" /> {t("Adding...")}</>
              ) : (
                t("Add To Cart")
              )}
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
