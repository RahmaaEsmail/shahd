"use client";
import React from "react";
import StoreBanner from "@/components/pages/storePage/StoreBanner/StoreBanner";
import StoreSwiper from "@/components/pages/storePage/StoreSwiper/StoreSwiper";
import StoreProducts from "@/components/pages/storePage/StoreProducts/StoreProducts";
import StoreGlow from "@/components/pages/storePage/StoreGlow/StoreGlow";
import StoreFaq from "@/components/pages/storePage/StoreFaq/StoreFaq";
import { useShop } from "../../../hooks/shop/useShop";
import Loading from "../../loading";
import { useTranslation } from "react-i18next";

export default function StoreClient() {
  const { data, isLoading } = useShop();
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar")
    ? "ar"
    : i18n.language?.startsWith("sk")
      ? "sk"
      : "en";

  console.log("data", data);

  if (isLoading) {
    return <Loading />;
  }

  const resolvedFaqs = data?.data?.shop_faqs
    ? data.data.shop_faqs.map((faq) => ({
        id: faq.id,
        question: faq.question,
        answer: faq.answer,
      }))
    : undefined;

  return (
    <div>
      <StoreBanner data={data?.data?.shop_banner} />
      <StoreSwiper data={data?.data?.shop_swiper} />
      <StoreProducts data={data?.data?.shop_products} />
      <StoreGlow />
      <StoreFaq data={resolvedFaqs} />
    </div>
  );
}
