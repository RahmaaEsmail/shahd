"use client";
import React from "react";
import AllProductBanner from "@/components/pages/AllProducts/AllProductBanner/AllProductBanner";
import AllProductData from "@/components/pages/AllProducts/AllProductData/AllProductData";

export default function ProductClient() {
  return (
    <div className="">
      <AllProductBanner />
      <AllProductData />
    </div>
  );
}
