import React from 'react'
import HairTherapyBanner from '@/components/pages/HairTherapy/HairTherapyBanner/HairTherapyBanner'
import HairTherapyAbout from '@/components/pages/HairTherapy/HairTherapyAbout/HairTherapyAbout'
import HairTherapyTestimonial from '@/components/pages/HairTherapy/HairTherapyTestimonial/HairTherapyTestimonial'
import HairTherapyTeam from '@/components/pages/HairTherapy/HairTherapyTeam/HairTherapyTeam'
import HairTherapyPrePost from '@/components/pages/HairTherapy/HairTherapyPrePost/HairTherapyPrePost'
import HairTherapyTransformation from '@/components/pages/HairTherapy/HairTherapyTransformation/HairTherapyTransformation'
import HairTherapyBeforeAfter from '@/components/pages/HairTherapy/HairTherapyBeforeAfter/HairTherapyBeforeAfter'
import HairTherapyPackage from '@/components/pages/HairTherapy/HairTherapyPackage/HairTherapyPackage'

export default function page() {
  return (
    <div>
      <HairTherapyBanner />
      <HairTherapyAbout />
      <HairTherapyTestimonial />
      <HairTherapyPrePost />
      <HairTherapyTransformation />
      <HairTherapyBeforeAfter />
      <HairTherapyPackage/>
      <HairTherapyTeam />
    </div>
  )
}
