import React from 'react'
import HorseBanner from '@/components/pages/horsePage/HorseBanner/HorseBanner'
import HorseContactUs from '@/components/pages/horsePage/HorseContactUs/HorseContactUs'
import HorseProducts from '@/components/pages/horsePage/HorseProducts/HorseProducts'
import HorseAbout from '@/components/pages/horsePage/HorseAbout/HorseAbout'
import HorseGallery from '@/components/pages/horsePage/HorseGallery/HorseGallery'

export default function page() {
  return (
    <div>
      <HorseBanner />
      <HorseAbout />
      <HorseGallery />
      <HorseProducts />
      <HorseContactUs />
    </div>
  )
}
