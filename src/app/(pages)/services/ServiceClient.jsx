"use client";
import React from "react";
import ServiceBanner from "@/components/pages/Services/ServiceBanner/ServiceBanner";
import ServiceCategories from "@/components/pages/Services/ServiceCategories/ServiceCategories";
import OurServices from "@/components/pages/Services/OurServices/OurServices";
import ServiceOffers from "@/components/pages/Services/ServiceOffers/ServiceOffers";
import ServicePlans from "@/components/pages/Services/ServicePlans/ServicePlans";
import { useServices } from "../../../hooks/services/useServices";
import Loading from "../../loading";
import { useTranslation } from "react-i18next";

export default function page() {
  const { data, isLoading } = useServices();
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar") ? "ar" : i18n.language?.startsWith("sk") ? "sk" : "en";

  console.log("services data", data);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <ServiceBanner data={data?.data?.service_banner} lang={lang} />
      <ServiceCategories data={data?.data?.service_categories} lang={lang} />
      <OurServices data={data?.data?.services} categories={data?.data?.service_categories} lang={lang} />
      <ServiceOffers />
      <ServicePlans />
    </div>
  );
}
