import React from 'react'
import { service_data } from '@/data/serviceData'
import { notFound } from 'next/navigation'
import { slugify } from '@/lib/utils'
import ServiceDetailsBanner from '@/components/pages/ServiceDetails/ServiceDetailsBanner/ServiceDetailsBanner'
import HomeBeforeAfter from '@/components/pages/Home/HomeBeforeAfter/HomeBeforeAfter'
import HomeTestimonial from '@/components/pages/Home/HomeTestimonial/HomeTestimonial'
import StoreFaq from '@/components/pages/storePage/StoreFaq/StoreFaq'
import ServiceQuickDetails from '@/components/pages/ServiceDetails/ServiceQuickDetails/ServiceQuickDetails'
import ServiceDetailsCases from '@/components/pages/ServiceDetails/ServiceDetailsCases/ServiceDetailsCases'
import ServiceDetailsOtherService from '@/components/pages/ServiceDetails/ServiceDetailsOtherService/ServiceDetailsOtherService'

export const dynamicParams = false;

export async function generateStaticParams() {
  return service_data.map((service) => ({
    id: service.id.toString(),
    slug: slugify(service.title),
  }));
}

export default async function ServiceDetailsPage({ params }) {
  const { id, slug } = await params;
  
  // Find the service by ID
  const service = service_data.find(s => s.id.toString() === id);

  if (!service) {
    notFound();
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
  )
}
