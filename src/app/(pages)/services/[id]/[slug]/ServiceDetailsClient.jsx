"use client";

import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import ServiceDetailsBanner from "@/components/pages/ServiceDetails/ServiceDetailsBanner/ServiceDetailsBanner";
import HomeBeforeAfter from "@/components/pages/Home/HomeBeforeAfter/HomeBeforeAfter";
import HomeTestimonial from "@/components/pages/Home/HomeTestimonial/HomeTestimonial";
import StoreFaq from "@/components/pages/storePage/StoreFaq/StoreFaq";
import ServiceQuickDetails from "@/components/pages/ServiceDetails/ServiceQuickDetails/ServiceQuickDetails";
import ServiceDetailsCases from "@/components/pages/ServiceDetails/ServiceDetailsCases/ServiceDetailsCases";
import ServiceDetailsOtherService from "@/components/pages/ServiceDetails/ServiceDetailsOtherService/ServiceDetailsOtherService";
import { useServiceDetails } from "@/hooks/services/useServices";
import Loading from "@/app/loading";
import NotFound from "@/app/not-found";

export default function ServiceDetailsClient({ id, slug }) {
  const { data, isLoading, error } = useServiceDetails(id);
  const { i18n } = useTranslation();

  const lang = i18n.language?.startsWith("ar")
    ? "ar"
    : i18n.language?.startsWith("sk")
      ? "sk"
      : i18n.language?.startsWith("de")
        ? "de"
        : "en";

  const service = useMemo(() => {
    const raw = data?.data?.service || data?.data || data || {};
    return {
      ...raw,
      title:
        raw[`title_${lang}`] || raw.title_en || raw.title || raw.label || "",
      desc:
        raw[`description_${lang}`] ||
        raw.description_en ||
        raw.description ||
        "",
      clinical_details: data?.data?.clinical_details,
      photo_gallery: data?.data?.photo_gallery,
      service_steps: data?.data?.service_steps,
      transformations: data?.data?.transformations,
      service_banner: data?.data?.service_banner,
    };
  }, [data, lang]);

  // console.log("service details", service);
  console.log("service details", data?.data?.service);
  const transformationsData = useMemo(() => {
    return {
      results: data?.data?.service?.transformations || [],
    };
  }, [service]);

  console.log("service details data", data);

  if (isLoading) {
    return <Loading />;
  }

  if (error || !data) {
    return <NotFound />;
  }

  return (
    <div>
      <ServiceDetailsBanner
        data={service?.service_banner}
        title={service.title}
      />
      <ServiceQuickDetails service={data?.data?.service} />
      {data?.data?.service?.service_steps?.length > 0 && (
        <ServiceDetailsCases service={data?.data?.service} />
      )}
      {transformationsData?.length > 0 && (
        <HomeBeforeAfter data={transformationsData} />
      )}
      {data?.data?.service?.testimonials?.length > 0 && (
        <HomeTestimonial data={data?.data?.service?.testimonials} />
      )}
      {data?.data?.service?.faqs?.length > 0 && (
        <StoreFaq data={data?.data?.service?.faqs} is_main={false} />
      )}
      {data?.data?.service?.other_services?.length > 0 && (
        <ServiceDetailsOtherService
          data={data?.data?.service?.other_services}
        />
      )}
    </div>
  );
}
