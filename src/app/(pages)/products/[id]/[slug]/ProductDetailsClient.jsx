"use client";

import React from "react";
import ProductDetailsBanner from "@/components/pages/ProductDetails/ProductDetailsBanner/ProductDetailsBanner";
import ProductDetailsGrid from "@/components/pages/ProductDetails/ProductDetailsGrid/ProductDetailsGrid";
import ProductDetailsIngredients from "@/components/pages/ProductDetails/ProductDetailsIngredients/ProductDetailsIngredients";
import ProductDetailsUsage from "@/components/pages/ProductDetails/ProductDetailsUsage/ProductDetailsUsage";
import ProductDetailsRoutine from "@/components/pages/ProductDetails/ProductDetailsRoutine/ProductDetailsRoutine";
import ProductDetailsRealResult from "@/components/pages/ProductDetails/ProductDetailsRealResult/ProductDetailsRealResult";
import ProductDetailsReviews from "@/components/pages/ProductDetails/ProductDetailsReviews/ProductDetailsReviews";
import ProductDetailsBundles from "@/components/pages/ProductDetails/ProductDetailsBundles/ProductDetailsBundles";
import ProductDetailsPartners from "@/components/pages/ProductDetails/ProductDetailsPartners/ProductDetailsPartners";
import { useProductDetails } from "@/hooks/shop/useShop";
import Loading from "../../../../loading";
import NotFound from "../../not-found";

export default function ProductDetailsClient({ id, slug }) {
  const { data, isLoading, error } = useProductDetails(id);

  console.log("product details data", data);
  console.log("product details error", error);
  if (isLoading) {
    return <Loading />;
  }

  if (error || !data || data?.status == "error") {
    return <NotFound />;
  }

  return (
    <main>
      <ProductDetailsBanner id={id} slug={slug} data={data} />
      <ProductDetailsGrid data={data} />
      <ProductDetailsIngredients data={data} />
      <ProductDetailsUsage data={data} />
      <ProductDetailsRoutine data={data} />
      <ProductDetailsRealResult data={data} />
      <ProductDetailsReviews data={data} />
      <ProductDetailsBundles data={data} />
      <ProductDetailsPartners data={data} />
    </main>
  );
}
