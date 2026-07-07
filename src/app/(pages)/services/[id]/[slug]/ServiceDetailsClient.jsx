"use client";

import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import ServiceDetailsBanner from '@/components/pages/ServiceDetails/ServiceDetailsBanner/ServiceDetailsBanner';
import HomeBeforeAfter from '@/components/pages/Home/HomeBeforeAfter/HomeBeforeAfter';
import HomeTestimonial from '@/components/pages/Home/HomeTestimonial/HomeTestimonial';
import StoreFaq from '@/components/pages/storePage/StoreFaq/StoreFaq';
import ServiceQuickDetails from '@/components/pages/ServiceDetails/ServiceQuickDetails/ServiceQuickDetails';
import ServiceDetailsCases from '@/components/pages/ServiceDetails/ServiceDetailsCases/ServiceDetailsCases';
import ServiceDetailsOtherService from '@/components/pages/ServiceDetails/ServiceDetailsOtherService/ServiceDetailsOtherService';
import { useServiceDetails } from '@/hooks/services/useServices';
import Loading from '@/app/loading';

export default function ServiceDetailsClient({ id, slug }) {
  const { data, isLoading, error } = useServiceDetails(id);
  const { i18n } = useTranslation();

  const lang = i18n.language?.startsWith("ar") ? "ar" : "en";

  const service = useMemo(() => {
    const raw = data?.data || data || {};
    return {
      ...raw,
      title: raw[`title_${lang}`] || raw.title_en || raw.title || "",
      desc: raw[`description_${lang}`] || raw.description_en || raw.description || raw.desc || "",
    };
  }, [data, lang]);

  console.log("service details data", data);

  if (isLoading) {
    return <Loading />;
  }

  if (error || !data) {
    return (
      <div className="error-state text-center py-20 text-primary">
        Service not found.
      </div>
    );
  }

  return (
    <div>
      <ServiceDetailsBanner title={service.title} />
      <ServiceQuickDetails service={service} />
      <ServiceDetailsCases service={service} />
      <HomeBeforeAfter />
      <HomeTestimonial />
      <StoreFaq is_main={false} />
      <ServiceDetailsOtherService />
    </div>
  );
}
