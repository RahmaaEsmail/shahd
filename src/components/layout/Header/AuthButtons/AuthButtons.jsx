"use client";

import { motion } from 'framer-motion';
import { Heart, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

// Animation variants
const buttonVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: { 
    scale: 0.95,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const iconVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.2,
    rotate: [0, -10, 10, -5, 5, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  },
  tap: { 
    scale: 0.9,
    transition: {
      type: "spring",
      stiffness: 400
    }
  }
};

const sparkleVariants = {
  initial: { opacity: 0, scale: 0 },
  animate: { 
    opacity: [0, 1, 0],
    scale: [0, 1.5, 0],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      repeatDelay: 1
    }
  }
};

import useWishlistStore from '@/zustandStore/WishlistStore';
import { useTranslation } from 'react-i18next';

export default function AuthButtons({ isScrolled }) {
  const { t , i18n} = useTranslation();
  const { wishlist, toggleWishlist, isInWishlist } = useWishlistStore();
  const [inCart, setInCart] = useState(false);
  const [showHeartTooltip, setShowHeartTooltip] = useState(false);
  const [showCartTooltip, setShowCartTooltip] = useState(false);
  const pathname = usePathname();

  const isLiked = pathname.includes("/product") ? isInWishlist(1) : false; // Mocking ID 1 for product pages if needed, but ideally we link to favorites

  const handleLikeClick = () => {
    // If we're not on a product page, this button usually shouldn't toggle something abstract
  };

  const handleCartClick = () => {
    setInCart(!inCart);
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

  const getTextColor = () => {
    return isScrolled ? "text-gray-700" : "text-white";
  };

  return (
    pathname.includes("/product") ? (
      <motion.div 
        className="flex gap-2 items-center"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        {/* Heart Button */}
        <motion.div
          className="relative"
          onHoverStart={() => setShowHeartTooltip(true)}
          onHoverEnd={() => setShowHeartTooltip(false)}
        >
          <Link href="/favorite">
            <motion.button
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className={`w-[50px] h-[50px] flex justify-center items-center rounded-full border transition-all duration-300 ${
                wishlist.length > 0 
                  ? "bg-primary border-primary shadow-lg shadow-primary/30" 
                  : getBorderColor()
              }`}
            >
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
              >
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
        </motion.div>

        {/* Cart Button */}
        <motion.div
          className="relative"
          onHoverStart={() => setShowCartTooltip(true)}
          onHoverEnd={() => setShowCartTooltip(false)}
        >
          <motion.button
            onClick={handleCartClick}
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            animate={inCart ? "added" : "initial"}
            className={`w-[50px] h-[50px] flex justify-center items-center rounded-full border transition-all duration-300 ${
              inCart 
                ? "bg-primary border-primary shadow-lg shadow-primary/30" 
                : getBorderColor()
            }`}
          >
            <motion.div
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              animate={inCart ? "added" : "initial"}
            >
              <ShoppingCart 
                size={24} 
                className={`transition-all duration-300 ${
                  inCart 
                    ? "text-white scale-110" 
                    : getIconColor()
                }`} 
              />
            </motion.div>
          </motion.button>

          {/* Cart Badge */}
          {inCart && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="w-2 h-2 bg-white rounded-full"
              />
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    ) : (
      <motion.div
        className={`flex  px-2 py-2 items-center  rounded-full relative overflow-hidden transition-all duration-300 ${
          isScrolled 
            ? "bg-white shadow-lg border border-primary/20" 
            : "bg-light-primary/90 backdrop-blur-sm"
        }`}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        whileHover="hover"
      >
        <Link href="/login" className="relative z-10">
          <motion.button
            className={`whitespace-nowrap font-poppins  ${i18n?.language=="de" ?"text-[12px] py-3 px-1" :"text-[14px] py-3 px-3"} font-normal capitalize tracking-wide rounded-full transition-all duration-300 ${
              isScrolled 
                ? "text-primary hover:bg-primary/10" 
                : "text-gray-700 hover:bg-white/50"
            }`}
            whileHover={{ 
              scale: 1.02,
              transition: { type: "spring", stiffness: 400 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            {t("Sign In")}
          </motion.button>
        </Link>

        <Link href="/booking" className="relative z-10">
          <motion.button
            className={`whitespace-nowrap font-poppins ${i18n?.language =="de" ? "text-[12px] py-3 px-1" : "p-3 text-[14px]"}  font-normal capitalize tracking-wide rounded-full shadow-sm transition-all duration-300 ${
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
                damping: 10
              }
            }}
          >
            {t("Booking")}
          </motion.button>
        </Link>
      </motion.div>
    )
  );
}

