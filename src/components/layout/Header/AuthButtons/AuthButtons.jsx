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

export default function AuthButtons({ isScrolled }) {
  const [isLiked, setIsLiked] = useState(false);
  const [inCart, setInCart] = useState(false);
  const [showHeartTooltip, setShowHeartTooltip] = useState(false);
  const [showCartTooltip, setShowCartTooltip] = useState(false);
  const pathname = usePathname();

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
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
          <motion.button
            onClick={handleLikeClick}
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            animate={isLiked ? "liked" : "initial"}
            className={`w-[50px] h-[50px] flex justify-center items-center rounded-full border transition-all duration-300 ${
              isLiked 
                ? "bg-primary border-primary shadow-lg shadow-primary/30" 
                : getBorderColor()
            }`}
          >
            <motion.div
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              animate={isLiked ? "liked" : "initial"}
            >
              <Heart 
                size={24} 
                className={`transition-all duration-300 ${
                  isLiked 
                    ? "text-white fill-white scale-110" 
                    : getIconColor()
                }`} 
              />
            </motion.div>
          </motion.button>
                   
          {/* Tooltip */}
          {/* <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: showHeartTooltip ? 1 : 0, y: showHeartTooltip ? 0 : 10 }}
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap"
          >
            {isLiked ? "Remove from wishlist" : "Add to wishlist"}
          </motion.div> */}
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
        className={`flex  xl:px-4 2xl:px-6 py-2 items-center px-1.5 rounded-full relative overflow-hidden transition-all duration-300 ${
          isScrolled 
            ? "bg-white shadow-lg border border-primary/20" 
            : "bg-light-primary/90 backdrop-blur-sm"
        }`}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        whileHover="hover"
      >
        <Link href="/sign-up" className="relative z-10">
          <motion.button
            className={`px-3 whitespace-nowrap xl:px-4 2xl:px-5 py-3 text-[14px] xl:text-[16px] 2xl:text-[20px] font-normal uppercase tracking-wide rounded-full transition-all duration-300 ${
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
            Sign Up
          </motion.button>
        </Link>

        <Link href="/booking" className="relative z-10">
          <motion.button
            className={`px-3 whitespace-nowrap xl:px-4 2xl:px-5 py-3 text-[14px] xl:text-[16px] 2xl:text-[20px] font-normal uppercase tracking-wide rounded-full shadow-sm transition-all duration-300 ${
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
            Booking
          </motion.button>
        </Link>
      </motion.div>
    )
  );
}

