import React from 'react'
import ServiceBanner from '@/components/pages/Services/ServiceBanner/ServiceBanner'
import ServiceCategories from '@/components/pages/Services/ServiceCategories/ServiceCategories'
import OurServices from '@/components/pages/Services/OurServices/OurServices'
import ServiceOffers from '@/components/pages/Services/ServiceOffers/ServiceOffers'
import ServicePlans from '@/components/pages/Services/ServicePlans/ServicePlans'

export default function page() {
  return (
    <div>
      <ServiceBanner />
      <ServiceCategories />
      <OurServices />
      <ServiceOffers />
      <ServicePlans />
    </div>
  )
}
