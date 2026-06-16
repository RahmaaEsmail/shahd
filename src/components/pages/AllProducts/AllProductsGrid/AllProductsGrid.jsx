"use client";

import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import StoreProductCard from '../../storePage/StoreProducts/StoreProductCard';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useFilterStore from "@/zustandStore/FilterStore";
import Pagination from '@/components/shared/Pagination';
import { useTranslation } from 'react-i18next';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

const filterTagVariants = {
  hidden: { scale: 0.8, opacity: 0, x: -20 },
  visible: {
    scale: 1,
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30
    }
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    x: 20,
    transition: { duration: 0.2 }
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 }
  }
};

const headerVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  }
};

const emptyStateVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  }
};

export default function AllProductsGrid() {
  // Get state and actions from store
  const {
    activeFilters,
    sortBy,
    currentPage,
    itemsPerPage,
    removeFilter,
    clearAllFilters,
    setSortBy,
    setCurrentPage,
    getPaginatedProducts
  } = useFilterStore();
  const { t } = useTranslation();

  // Get paginated products
  const { products: filteredProducts, total, totalPages } = React.useMemo(() => getPaginatedProducts(), [getPaginatedProducts, currentPage, sortBy, activeFilters]);


  // Calculate displayed items range
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, total);

  // Handle sort change
  const handleSortChange = (value) => {
    setSortBy(value);
  };

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      className="flex flex-col  w-full"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
    >
      {/* Top Bar: Results Count & Active Filters */}
      <motion.div
        className="flex flex-col gap-6 mb-8 px-2"
        variants={headerVariants}
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <motion.p
            className="text-black font-poppins font-light text-base md:text-lg"
            variants={itemVariants}
          >
            {t("Showing")} <span className="font-medium text-primary">{startItem}-{endItem}</span> {t("Of")} <span className="font-medium text-primary">{total}</span> {t("Results")}
          </motion.p>
 
          <motion.div
            className="flex items-center gap-3 w-full sm:w-auto"
            variants={itemVariants}
          >
            <span className="text-black text-base md:text-lg font-light font-poppins shrink-0">{t("Sort By")}:</span>
            <Select value={sortBy} onValueChange={handleSortChange}>
              <SelectTrigger className="w-full sm:w-[200px] text-base md:text-lg border border-[#DADADA] rounded-full px-5 py-2.5 bg-white! outline-none font-poppins shadow-sm">
                <SelectValue placeholder={t("Default Sorting")} />
              </SelectTrigger>
              <SelectContent className="bg-white! rounded-2xl border-primary/20 shadow-xl">
                <SelectItem value="default" className="font-poppins text-lg transition-colors hover:bg-primary/5 cursor-pointer">{t("Default Sorting")}</SelectItem>
                <SelectItem value="price-low-high" className="font-poppins text-lg transition-colors hover:bg-primary/5 cursor-pointer">{t("Price: Low to High")}</SelectItem>
                <SelectItem value="price-high-low" className="font-poppins text-lg transition-colors hover:bg-primary/5 cursor-pointer">{t("Price: High to Low")}</SelectItem>
                <SelectItem value="newest" className="font-poppins text-lg transition-colors hover:bg-primary/5 cursor-pointer">{t("Newest First")}</SelectItem>
                <SelectItem value="popular" className="font-poppins text-lg transition-colors hover:bg-primary/5 cursor-pointer">{t("Most Popular")}</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>
        </div>
 
        {/* Active Filters Row */}
        <AnimatePresence mode="popLayout">
          {activeFilters.length > 0 && (
            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4 px-5 bg-primary/5 rounded-3xl border border-primary/10"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className='flex gap-3 items-center flex-wrap'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
              >
                <motion.span
                  className="text-primary font-medium text-base md:text-lg font-poppins mr-1"
                  variants={itemVariants}
                >
                  {t("Filters Applied")}:
                </motion.span>
 
                {/* Active Filter Tags */}
                <div className="flex gap-2 flex-wrap">
                    <AnimatePresence mode="popLayout">
                    {activeFilters.map((filter) => (
                        <motion.div
                        key={`${filter.type}-${filter.value}`}
                        className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-primary border border-primary/20 text-sm md:text-base font-poppins shadow-sm"
                        variants={filterTagVariants}
                        initial="hidden"
                        whileInView="visible"
                        exit="exit"
                        whileHover="hover"
                        layout
                        >
                        {t(filter.displayValue)}
                        <motion.div
                            whileHover={{ rotate: 90, scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-primary/10 rounded-full p-0.5 cursor-pointer transition-colors hover:bg-primary hover:text-white"
                            onClick={() => removeFilter(filter)}
                        >
                            <X size={12} />
                        </motion.div>
                        </motion.div>
                    ))}
                    </AnimatePresence>
                </div>
              </motion.div>
 
              <motion.button
                onClick={clearAllFilters}
                className="text-primary font-medium text-base md:text-lg font-poppins hover:underline transition-all underline-offset-4 decoration-primary/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("Reset All")}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* The Responsive Grid */}
      <AnimatePresence mode="popLayout">
        {filteredProducts.length > 0 ? (
          <motion.div
            key="products-grid"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
          >
            {filteredProducts.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                custom={index}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <StoreProductCard
                  product={item}
                  is_btn={true}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="empty-state"
            className="text-center py-20"
            variants={emptyStateVariants}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
          >
            <motion.div
              whileInView={{
                // scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 2
              }}
            >
              <span className="text-6xl mb-4 block">🔍</span>
            </motion.div>
            <p className="text-xl font-poppins text-gray-500">
              {t("No products match your filters")}
            </p>
            <motion.button
              onClick={clearAllFilters}
              className="mt-4 px-6 py-2 bg-primary text-white rounded-full font-poppins"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("Clear Filters")}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pagination - Reusable Component */}
      {filteredProducts.length > 0 && totalPages > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </motion.div>
      )}
    </motion.div>
  );
}