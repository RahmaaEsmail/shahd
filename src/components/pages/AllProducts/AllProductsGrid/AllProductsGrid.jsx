"use client";

import React from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import StoreProductCard from "../../storePage/StoreProducts/StoreProductCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useFilterStore from "@/zustandStore/FilterStore";
import Pagination from "@/components/shared/Pagination";
import { useTranslation } from "react-i18next";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
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
      damping: 30,
    },
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    x: 20,
    transition: { duration: 0.2 },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
};

const headerVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

const emptyStateVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

export default function AllProductsGrid({
  products_data,
  isLoading,
  filter_data,
}) {
  const { t, i18n } = useTranslation();

  const {
    selectedCategories,
    selectedReviews,
    selectedPromotions,
    selectedAvailability,
    selectedSkinConcerns,
    priceRange,
    sortBy,
    currentPage,
    itemsPerPage,
    toggleCategory,
    toggleSkinConcern,
    toggleReview,
    togglePromotion,
    toggleAvailability,
    setPriceRange,
    clearAllFilters,
    setSortBy,
    setCurrentPage,
  } = useFilterStore();

  // 1. Dynamic Active Filters
  const activeFilters = React.useMemo(() => {
    const filters = [];

    selectedCategories.forEach((id) => {
      const cat = filter_data?.data?.categories?.find((c) => c.id === id);
      filters.push({
        type: "category",
        value: id,
        displayValue: cat?.name || `${t("Category")} ${id}`,
      });
    });

    selectedSkinConcerns.forEach((val) => {
      const concern = filter_data?.data?.skin_concerns?.find(
        (c) => c.value === val,
      );
      filters.push({
        type: "skin_concern",
        value: val,
        displayValue: concern?.label || val,
      });
    });

    selectedReviews.forEach((val) => {
      filters.push({
        type: "review",
        value: val,
        displayValue: `${val} ${t("Stars")}`,
      });
    });

    selectedPromotions.forEach((val) => {
      const promo = filter_data?.data?.promotions?.find((p) => p.value === val);
      filters.push({
        type: "promotion",
        value: val,
        displayValue: promo?.label || val,
      });
    });

    selectedAvailability.forEach((val) => {
      const avail = filter_data?.data?.availability?.find(
        (a) => a.value === val,
      );
      filters.push({
        type: "availability",
        value: val,
        displayValue: avail?.label || val,
      });
    });

    const priceLimits = filter_data?.data?.price_range || { min: 10, max: 600 };
    if (
      priceRange[0] !== Number(priceLimits.min) ||
      priceRange[1] !== Number(priceLimits.max)
    ) {
      filters.push({
        type: "price",
        value: `${priceRange[0]}-${priceRange[1]}`,
        displayValue: `${priceRange[0]} - ${priceRange[1]} ${t("S.R")}`,
      });
    }

    return filters;
  }, [
    selectedCategories,
    selectedSkinConcerns,
    selectedReviews,
    selectedPromotions,
    selectedAvailability,
    priceRange,
    filter_data,
    t,
  ]);

  const removeFilter = (filter) => {
    switch (filter.type) {
      case "category":
        toggleCategory(filter.value);
        break;
      case "skin_concern":
        toggleSkinConcern(filter.value);
        break;
      case "review":
        toggleReview(filter.value);
        break;
      case "promotion":
        togglePromotion(filter.value);
        break;
      case "availability":
        toggleAvailability(filter.value);
        break;
      case "price":
        const priceLimits = filter_data?.data?.price_range || {
          min: 10,
          max: 600,
        };
        setPriceRange([Number(priceLimits.min), Number(priceLimits.max)]);
        break;
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col w-full animate-pulse px-2">
        <div className="h-8 bg-gray-200 rounded-md w-1/4 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="aspect-[3/4] bg-gray-200 rounded-3xl w-full"
            />
          ))}
        </div>
      </div>
    );
  }

  // 2. Map and Paginate Products from API Response
  const rawProducts = products_data?.data || [];
  const total = products_data?.total || 0;
  const totalPages = Math.ceil(total / itemsPerPage);

  const lang = i18n.language?.startsWith("ar")
    ? "ar"
    : i18n.language?.startsWith("sk")
      ? "sk"
      : "en";
  const titleField = `title_${lang}`;
  const catNameField = `category_name_${lang}`;

  const mappedProducts = rawProducts.map((item) => ({
    id: item.id,
    name: item[titleField] || item.title_en || item.title_ar || "",
    img: item.main_image || item.main_image_url || "",
    hover_image:
      item.hover_image || item.hover_image_url || item.main_image || "",
    price: item.price,
    rating: Number(item.rating) || 5,
    category: item[catNameField] || item.category_name_en || "Skin Care",
  }));

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, total);

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      className="flex flex-col w-full"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
    >
      {/* Top Bar: Results Count & Sorting */}
      <motion.div
        className="flex flex-col gap-6 mb-8 px-2"
        variants={headerVariants}
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          {total > 0 ? (
            <motion.p
              className="text-black font-poppins font-light text-base"
              variants={itemVariants}
            >
              {t("Showing")}{" "}
              <span className="font-medium text-primary">
                {startItem}-{endItem}
              </span>{" "}
              {t("Of")}{" "}
              <span className="font-medium text-primary">{total}</span>{" "}
              {t("Results")}
            </motion.p>
          ) : (
            <p className="text-black font-poppins font-light text-base md:text-lg">
              {t("No products found")}
            </p>
          )}

          <motion.div
            className="flex items-center gap-3 w-full sm:w-auto"
            variants={itemVariants}
          >
            <span className="text-black text-base md:text-lg font-light font-poppins shrink-0">
              {t("Sort By")}:
            </span>
            <Select value={sortBy} onValueChange={handleSortChange}>
              <SelectTrigger className="w-full sm:w-[200px] text-base  border border-[#DADADA] rounded-full px-5 py-2.5 bg-white! outline-none font-poppins shadow-sm">
                <SelectValue placeholder={t("Default Sorting")} />
              </SelectTrigger>
              <SelectContent className="bg-white! rounded-2xl border-primary/20 shadow-xl">
                <SelectItem
                  value="default"
                  className="font-poppins text-md transition-colors hover:bg-primary/5 cursor-pointer"
                >
                  {t("Default Sorting")}
                </SelectItem>
                <SelectItem
                  value="price-low-high"
                  className="font-poppins text-md transition-colors hover:bg-primary/5 cursor-pointer"
                >
                  {t("Price: Low to High")}
                </SelectItem>
                <SelectItem
                  value="price-high-low"
                  className="font-poppins text-md transition-colors hover:bg-primary/5 cursor-pointer"
                >
                  {t("Price: High to Low")}
                </SelectItem>
                <SelectItem
                  value="newest"
                  className="font-poppins text-md transition-colors hover:bg-primary/5 cursor-pointer"
                >
                  {t("Newest First")}
                </SelectItem>
                <SelectItem
                  value="popular"
                  className="font-poppins text-md transition-colors hover:bg-primary/5 cursor-pointer"
                >
                  {t("Most Popular")}
                </SelectItem>
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
                className="flex gap-3 items-center flex-wrap"
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
        {mappedProducts.length > 0 ? (
          <motion.div
            key="products-grid"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
          >
            {mappedProducts.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                custom={index}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
              >
                <StoreProductCard product={item} is_btn={true} />
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
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            >
              <span className="text-6xl mb-4 block">🔍</span>
            </motion.div>
            <p className="text-xl font-poppins text-gray-500">
              {t("No products match your filters")}
            </p>
            <motion.button
              onClick={clearAllFilters}
              className="mt-4 px-6 py-2 bg-primary text-white rounded-full font-poppins cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("Clear Filters")}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pagination */}
      {mappedProducts.length > 0 && totalPages > 1 && (
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
