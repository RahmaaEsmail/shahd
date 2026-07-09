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
import { Star, Heart } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { cn, slugify } from "@/lib/utils";
import useWishlistStore from "@/zustandStore/WishlistStore";
import { useTranslation } from "react-i18next";
import { useAddToCartAction } from "@/hooks/cart/useCart";

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
  const { toggleWishlist, isInWishlist } = useWishlistStore();
  const isLiked = isInWishlist(product?.id);
  const { addToCart, isAddingToCart } = useAddToCartAction();

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
    toggleWishlist(product);
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
    if (isAddingToCart) return;
    addToCart(product?.id, 1);
  };

  return (
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
          className={cn(
            "absolute top-4 right-4 z-30 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-md",
            isLiked
              ? "bg-primary text-white"
              : "bg-white/80 backdrop-blur-md text-primary hover:bg-white",
          )}
        >
          <Heart className={cn("w-5 h-5", isLiked && "fill-current")} />
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
            <motion.button
              onClick={handleButtonClick}
              disabled={isAddingToCart}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="w-full max-w-[189px] h-10 lg:h-[48px] rounded-full text-white flex justify-center items-center text-base font-normal bg-linear-to-r from-[#DDB2B5] to-[#EFD4CE] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isAddingToCart ? t("Adding...") : t("Add To Cart")}
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
