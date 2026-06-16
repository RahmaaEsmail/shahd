"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useWishlistStore from '@/zustandStore/WishlistStore';
import StoreProductCard from '@/components/pages/storePage/StoreProducts/StoreProductCard';
import Link from 'next/link';
import { HeartOff, ArrowRight } from 'lucide-react';

export default function FavoriteGrid() {
  const { wishlist } = useWishlistStore();

  if (wishlist.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="w-24 h-24 bg-[#DDB2B5]/10 rounded-full flex items-center justify-center mb-4">
            <HeartOff className="w-10 h-10 text-[#DDB2B5]" />
          </div>
          <h2 className="text-[#4D3E3F] text-4xl md:text-5xl font-light">Your collection is empty</h2>
          <p className="text-[#6A6A6A] font-poppins text-lg max-w-md mx-auto leading-relaxed">
            Keep track of items you love by clicking the heart icon. Your curated collection will appear here.
          </p>
          <Link href="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 px-10 py-4 bg-primary text-white rounded-full font-medium flex items-center gap-3 shadow-xl hover:bg-primary/90 transition-all"
            >
              Explore Products <ArrowRight size={20} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="flex justify-between items-end mb-16 px-4">
        <div>
           <p className="text-secondary font-semibold uppercase tracking-widest text-xs mb-3">Saved Items</p>
           <h2 className="text-primary text-4xl md:text-5xl font-light">My Favorites ({wishlist.length})</h2>
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10"
      >
        <AnimatePresence mode="popLayout">
          {wishlist.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <StoreProductCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
