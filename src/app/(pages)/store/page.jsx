import React from 'react'
import StoreBanner from '@/components/pages/storePage/StoreBanner/StoreBanner'
import StoreSwiper from '@/components/pages/storePage/StoreSwiper/StoreSwiper'
import StoreProducts from '@/components/pages/storePage/StoreProducts/StoreProducts'
import StoreGlow from '@/components/pages/storePage/StoreGlow/StoreGlow'
import StoreFaq from '@/components/pages/storePage/StoreFaq/StoreFaq'

export default function page() {
  return (
    <div>
      <StoreBanner />
      <StoreSwiper />
      <StoreProducts />
      <StoreGlow />
      <StoreFaq/>
    </div>
  )
}
