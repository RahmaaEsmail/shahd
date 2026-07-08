"use client";

import React, { useMemo } from "react";
import AllProductFilters from "../AllProductFilters/AllProductFilters";
import AllProductsGrid from "../AllProductsGrid/AllProductsGrid";
import {
  useGetProductsFilteration,
  useGetProducts,
} from "@/hooks/products/useProducts";
import useFilterStore from "@/zustandStore/FilterStore";

export default function AllProductData() {
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
    search,
  } = useFilterStore();

  const params = useMemo(() => {
    const query = {
      limit: itemsPerPage,
      offset: (currentPage - 1) * itemsPerPage,
      price_min: priceRange[0],
      price_max: priceRange[1],
    };

    if (selectedCategories.length > 0) {
      query.category_ids = selectedCategories;
    }
    if (selectedSkinConcerns.length > 0) {
      query.skin_concerns = selectedSkinConcerns;
    }
    if (selectedReviews.length > 0) {
      query.ratings = selectedReviews;
    }
    if (selectedPromotions.length > 0) {
      query.promotions = selectedPromotions;
    }
    if (selectedAvailability.length > 0) {
      query.availability = selectedAvailability;
    }

    if (sortBy && sortBy !== "default") {
      query.sort =
        sortBy === "price-low-high" ? "price_asc" :
        sortBy === "price-high-low" ? "price_desc" :
        sortBy === "newest" ? "newest" :
        sortBy === "popular" ? "popular" : undefined;
    }

    if (search) {
      query.search = search;
    }

    return query;
  }, [
    selectedCategories,
    selectedSkinConcerns,
    selectedReviews,
    selectedPromotions,
    selectedAvailability,
    priceRange,
    sortBy,
    currentPage,
    itemsPerPage,
    search,
  ]);

  const { data: filter_data, isLoading: is_load_filter } = useGetProductsFilteration();
  const { data: products_data, isLoading: is_load_products } = useGetProducts(params);

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-[3.5fr_8.5fr] gap-6 main-container mb-5 mt-10">
      <AllProductFilters filter_data={filter_data} isLoading={is_load_filter} />
      <AllProductsGrid products_data={products_data} isLoading={is_load_products} filter_data={filter_data} />
    </div>
  );
}
