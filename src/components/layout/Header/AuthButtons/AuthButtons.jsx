// "use client";

// import { motion } from 'framer-motion';
// import { Heart, ShoppingCart, ChevronDown, User, LogOut } from 'lucide-react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';
// import { useCurrentUser, logoutUser } from '@/hooks/auth/useCurrentUser';
// import { useCart } from '@/hooks/cart/useCart';
// import useWishlistStore from '@/zustandStore/WishlistStore';
// import { useTranslation } from 'react-i18next';

// // Animation variants
// const buttonVariants = {
//   initial: { scale: 1 },
//   hover: {
//     scale: 1.1,
//     transition: {
//       type: "spring",
//       stiffness: 400,
//       damping: 10
//     }
//   },
//   tap: {
//     scale: 0.95,
//     transition: {
//       type: "spring",
//       stiffness: 400,
//       damping: 10
//     }
//   }
// };

// const iconVariants = {
//   initial: { scale: 1 },
//   hover: {
//     scale: 1.2,
//     rotate: [0, -10, 10, -5, 5, 0],
//     transition: {
//       duration: 0.5,
//       ease: "easeInOut"
//     }
//   },
//   tap: {
//     scale: 0.9,
//     transition: {
//       type: "spring",
//       stiffness: 400
//     }
//   }
// };

// export default function AuthButtons({ isScrolled }) {
//   const { t , i18n} = useTranslation();
//   const router = useRouter();
//   const { wishlist } = useWishlistStore();
//   const user = useCurrentUser();
//   const { data: cartData } = useCart(user?.user_id);

//   const cartCount = Array.isArray(cartData?.data)
//     ? cartData.data.length
//     : cartData?.data?.items?.length || 0;

//   const handleLogout = () => {
//     logoutUser();
//     router.push("/login");
//   };

//   // Dynamic styles based on isScrolled
//   const getBorderColor = (isActive = false) => {
//     if (isActive) return "bg-primary border-primary";
//     if (isScrolled) return "border-primary/30 bg-white/80 backdrop-blur-sm";
//     return "border-white bg-transparent";
//   };

//   const getIconColor = (isActive = false) => {
//     if (isActive) return "text-white";
//     if (isScrolled) return "text-primary";
//     return "text-white";
//   };

//   return (
//     <motion.div
//       className="flex gap-2 items-center"
//       initial={{ opacity: 0, x: 20 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ delay: 0.6, duration: 0.4 }}
//     >
//       {/* Heart Button */}
//       <Link href="/favorite">
//         <motion.button
//           variants={buttonVariants}
//           initial="initial"
//           whileHover="hover"
//           whileTap="tap"
//           className={`relative w-[50px] h-[50px] flex justify-center items-center rounded-full border transition-all duration-300 ${
//             wishlist.length > 0
//               ? "bg-primary border-primary shadow-lg shadow-primary/30"
//               : getBorderColor()
//           }`}
//         >
//           <motion.div
//             variants={iconVariants}
//             whileHover="hover"
//             whileTap="tap"
//           >
//             <Heart
//               size={24}
//               className={`transition-all duration-300 ${
//                 wishlist.length > 0
//                   ? "text-white fill-white scale-110"
//                   : getIconColor()
//               }`}
//             />
//           </motion.div>
//           {wishlist.length > 0 && (
//             <motion.span
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               className="absolute -top-1 -right-1 bg-white text-primary text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border border-primary"
//             >
//               {wishlist.length}
//             </motion.span>
//           )}
//         </motion.button>
//       </Link>

//       {/* Cart Button */}
//       <Link href="/cart">
//         <motion.button
//           variants={buttonVariants}
//           initial="initial"
//           whileHover="hover"
//           whileTap="tap"
//           className={`relative w-[50px] h-[50px] flex justify-center items-center rounded-full border transition-all duration-300 ${
//             cartCount > 0
//               ? "bg-primary border-primary shadow-lg shadow-primary/30"
//               : getBorderColor()
//           }`}
//         >
//           <motion.div
//             variants={iconVariants}
//             whileHover="hover"
//             whileTap="tap"
//           >
//             <ShoppingCart
//               size={24}
//               className={`transition-all duration-300 ${
//                 cartCount > 0 ? "text-white scale-110" : getIconColor()
//               }`}
//             />
//           </motion.div>
//           {cartCount > 0 && (
//             <motion.span
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               className="absolute -top-1 -right-1 bg-white text-primary text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border border-primary"
//             >
//               {cartCount}
//             </motion.span>
//           )}
//         </motion.button>
//       </Link>

//       <motion.div
//         className={`flex px-2 py-2 items-center rounded-full relative overflow-hidden transition-all duration-300 ${
//           isScrolled
//             ? "bg-white shadow-lg border border-primary/20"
//             : "bg-light-primary/90 backdrop-blur-sm"
//         }`}
//         whileHover="hover"
//       >
//         {user ? (
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <motion.button
//                 className={`relative z-10 flex items-center gap-1.5 whitespace-nowrap font-poppins ${i18n?.language=="de" ?"text-[12px] py-3 px-1" :"text-[14px] py-3 px-3"} font-normal capitalize tracking-wide rounded-full transition-all duration-300 ${
//                   isScrolled
//                     ? "text-primary hover:bg-primary/10"
//                     : "text-gray-700 hover:bg-white/50"
//                 }`}
//                 whileHover={{
//                   scale: 1.02,
//                   transition: { type: "spring", stiffness: 400 }
//                 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <User size={16} />
//                 {user?.name || t("My Profile")}
//                 <ChevronDown size={14} />
//               </motion.button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end" className="min-w-[12rem] rounded-2xl font-poppins p-1.5 space-y-0.5">
//               <DropdownMenuItem asChild className="cursor-pointer rounded-xl">
//                 <Link href="/profile/settings" className="flex items-center gap-2 w-full">
//                   <User size={16} />
//                   <span>{t("Profile")}</span>
//                 </Link>
//               </DropdownMenuItem>

//               {/* Updated Cart Dropdown Item with Badge Counter */}
//               <DropdownMenuItem asChild className="cursor-pointer rounded-xl">
//                 <Link href="/cart" className="flex items-center justify-between w-full gap-2">
//                   <div className="flex items-center gap-2">
//                     <ShoppingCart size={16} />
//                     <span>{t("Cart")}</span>
//                   </div>
//                   {cartCount > 0 && (
//                     <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full dynamic-badge">
//                       {cartCount}
//                     </span>
//                   )}
//                 </Link>
//               </DropdownMenuItem>

//               {/* Updated Wishlist Dropdown Item with Badge Counter */}
//               <DropdownMenuItem asChild className="cursor-pointer rounded-xl">
//                 <Link href="/profile/wishlist" className="flex items-center justify-between w-full gap-2">
//                   <div className="flex items-center gap-2">
//                     <Heart size={16} />
//                     <span>{t("Wishlist")}</span>
//                   </div>
//                   {wishlist.length > 0 && (
//                     <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full dynamic-badge">
//                       {wishlist.length}
//                     </span>
//                   )}
//                 </Link>
//               </DropdownMenuItem>

//               <DropdownMenuItem
//                 onClick={handleLogout}
//                 className="cursor-pointer rounded-xl text-red-500 focus:text-red-500"
//               >
//                 <LogOut size={16} />
//                 {t("Logout")}
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         ) : (
//           <Link href="/login" className="relative z-10">
//             <motion.button
//               className={`whitespace-nowrap font-poppins  ${i18n?.language=="de" ?"text-[12px] py-3 px-1" :"text-[14px] py-3 px-3"} font-normal capitalize tracking-wide rounded-full transition-all duration-300 ${
//                 isScrolled
//                   ? "text-primary hover:bg-primary/10"
//                   : "text-gray-700 hover:bg-white/50"
//               }`}
//               whileHover={{
//                 scale: 1.02,
//                 transition: { type: "spring", stiffness: 400 }
//               }}
//               whileTap={{ scale: 0.98 }}
//             >
//               {t("Sign In")}
//             </motion.button>
//           </Link>
//         )}

//         <Link href="/booking" className="relative z-10">
//           <motion.button
//             className={`whitespace-nowrap font-poppins ${i18n?.language =="de" ? "text-[12px] py-3 px-1" : "p-3 text-[14px]"}  font-normal capitalize tracking-wide rounded-full shadow-sm transition-all duration-300 ${
//               isScrolled
//                 ? "bg-primary text-white hover:bg-primary/90"
//                 : "bg-primary text-white"
//             }`}
//             whileTap={{ scale: 0.98 }}
//             whileHover={{
//               scale: 1.05,
//               boxShadow: isScrolled
//                 ? "0 8px 25px rgba(221, 178, 181, 0.6)"
//                 : "0 8px 25px rgba(221, 178, 181, 0.5)",
//               backgroundColor: isScrolled ? "#d4a9ac" : "#e5c0c3",
//               transition: {
//                 type: "spring",
//                 stiffness: 400,
//                 damping: 10
//               }
//             }}
//           >
//             {t("Booking")}
//           </motion.button>
//         </Link>
//       </motion.div>
//     </motion.div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingCart, ChevronDown, User, LogOut } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCurrentUser, logoutUser } from "@/hooks/auth/useCurrentUser";
import { useCart } from "@/hooks/cart/useCart";
import useWishlistStore from "@/zustandStore/WishlistStore";
import { useTranslation } from "react-i18next";

// Animation variants
const buttonVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const iconVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.2,
    rotate: [0, -10, 10, -5, 5, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.9,
    transition: {
      type: "spring",
      stiffness: 400,
    },
  },
};

export default function AuthButtons({ isScrolled }) {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const { wishlist } = useWishlistStore();
  const user = useCurrentUser();
  const { data: cartData } = useCart(user?.user_id);

  const cartCount = Array.isArray(cartData?.data)
    ? cartData.data.length
    : cartData?.data?.items?.length || 0;

  const handleLogout = () => {
    logoutUser();
    router.push("/login");
  };

  // Dynamic styles based on isScrolled
  const getBorderColor = (isActive = false) => {
    if (isActive) return "bg-primary border-primary";
    if (isScrolled) return "border-primary/30 bg-white/80 backdrop-blur-sm";
    return "border-white bg-transparent";
  };

  const getIconColor = (isActive = false) => {
    if (isActive) return "text-white";
    if (isScrolled) return "text-primary";
    return "text-white";
  };

  return (
    <motion.div
      className="flex gap-2 items-center"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6, duration: 0.4 }}
    >
      {/* <Link href="/favorite">
        <motion.button
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className={`relative w-[50px] h-[50px] flex justify-center items-center rounded-full border transition-all duration-300 ${
            wishlist.length > 0
              ? "bg-primary border-primary shadow-lg shadow-primary/30"
              : getBorderColor()
          }`}
        >
          <motion.div variants={iconVariants} whileHover="hover" whileTap="tap">
            <Heart
              size={24}
              className={`transition-all duration-300 ${
                wishlist.length > 0
                  ? "text-white fill-white scale-110"
                  : getIconColor()
              }`}
            />
          </motion.div>
          {wishlist.length > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 bg-white text-primary text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border border-primary"
            >
              {wishlist.length}
            </motion.span>
          )}
        </motion.button>
      </Link>

      <Link href="/cart">
        <motion.button
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className={`relative w-[50px] h-[50px] flex justify-center items-center rounded-full border transition-all duration-300 ${
            cartCount > 0
              ? "bg-primary border-primary shadow-lg shadow-primary/30"
              : getBorderColor()
          }`}
        >
          <motion.div variants={iconVariants} whileHover="hover" whileTap="tap">
            <ShoppingCart
              size={24}
              className={`transition-all duration-300 ${
                cartCount > 0 ? "text-white scale-110" : getIconColor()
              }`}
            />
          </motion.div>
          {cartCount > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 bg-white text-primary text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border border-primary"
            >
              {cartCount}
            </motion.span>
          )}
        </motion.button>
      </Link> */}

      <motion.div
        className={`flex px-2 py-2 items-center rounded-full relative overflow-hidden transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg border border-primary/20"
            : "bg-light-primary/90 backdrop-blur-sm"
        }`}
        whileHover="hover"
      >
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <motion.button
                className={`relative z-10 flex items-center gap-1.5 whitespace-nowrap font-poppins ${i18n?.language == "de" ? "text-[12px] py-3 px-1" : "text-[14px] py-3 px-3"} font-normal capitalize tracking-wide rounded-full transition-all duration-300 ${
                  isScrolled
                    ? "text-primary hover:bg-primary/10"
                    : "text-gray-700 hover:bg-white/50"
                }`}
                whileHover={{
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <User size={16} />
                {user?.name || t("My Profile")}
                <ChevronDown size={14} />
              </motion.button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="min-w-[11rem] rounded-2xl font-poppins p-1.5 space-y-0.5"
            >
              <DropdownMenuItem asChild className="cursor-pointer rounded-xl">
                <Link
                  href="/profile/settings"
                  className="flex items-center gap-2 w-full"
                >
                  <User size={16} />
                  <span>{t("Profile")}</span>
                </Link>
              </DropdownMenuItem>

              {/* Cart item with badge nested inline right next to text */}
              <DropdownMenuItem asChild className="cursor-pointer rounded-xl">
                <Link
                  href="/cart"
                  className="flex items-center justify-between w-full"
                >
                  <div className="flex items-center gap-2">
                    <ShoppingCart size={16} />
                    <span>{t("Cart")}</span>
                  </div>
                  {cartCount > 0 && (
                    <span className="bg-primary text-white text-[10px] font-bold min-w-[20px] h-5 px-1.5 rounded-full flex items-center justify-center transition-all">
                      {cartCount}
                    </span>
                  )}
                </Link>
              </DropdownMenuItem>

              {/* Wishlist item with badge nested inline right next to text */}
              <DropdownMenuItem asChild className="cursor-pointer rounded-xl">
                <Link
                  href="/profile/wishlist"
                  className="flex items-center justify-between w-full"
                >
                  <div className="flex items-center gap-2">
                    <Heart size={16} />
                    <span>{t("Wishlist")}</span>
                  </div>
                  {wishlist.length > 0 && (
                    <span className="bg-primary text-white text-[10px] font-bold min-w-[20px] h-5 px-1.5 rounded-full flex items-center justify-center transition-all">
                      {wishlist.length}
                    </span>
                  )}
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={handleLogout}
                className="cursor-pointer rounded-xl text-red-500 focus:text-red-500"
              >
                <LogOut size={16} />
                {t("Logout")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link href="/login" className="relative z-10">
            <motion.button
              className={`whitespace-nowrap font-poppins  ${i18n?.language == "de" ? "text-[12px] py-3 px-1" : "text-[14px] py-3 px-3"} font-normal capitalize tracking-wide rounded-full transition-all duration-300 ${
                isScrolled
                  ? "text-primary hover:bg-primary/10"
                  : "text-gray-700 hover:bg-white/50"
              }`}
              whileHover={{
                scale: 1.02,
                transition: { type: "spring", stiffness: 400 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              {t("Sign In")}
            </motion.button>
          </Link>
        )}

        <Link href="/booking" className="relative z-10">
          <motion.button
            className={`whitespace-nowrap font-poppins ${i18n?.language == "de" ? "text-[12px] py-3 px-1" : "p-3 text-[14px]"}  font-normal capitalize tracking-wide rounded-full shadow-sm transition-all duration-300 ${
              isScrolled
                ? "bg-primary text-white hover:bg-primary/90"
                : "bg-primary text-white"
            }`}
            whileTap={{ scale: 0.98 }}
            whileHover={{
              scale: 1.05,
              boxShadow: isScrolled
                ? "0 8px 25px rgba(221, 178, 181, 0.6)"
                : "0 8px 25px rgba(221, 178, 181, 0.5)",
              backgroundColor: isScrolled ? "#d4a9ac" : "#e5c0c3",
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 10,
              },
            }}
          >
            {t("Booking")}
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
