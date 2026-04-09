import React from 'react'
import CoachingBanner from '@/components/pages/coaching/CoachingBanner/CoachingBanner'
import StoreFaq from '@/components/pages/storePage/StoreFaq/StoreFaq'
import CoachingAbout from '@/components/pages/coaching/CoachingAbout/CoachingAbout'
import CoachingExpert from '@/components/pages/coaching/CoachingExpert/CoachingExpert'

export default function page() {
  return (
    <div>
      <CoachingBanner />
      <CoachingExpert />
      <CoachingAbout />
      <StoreFaq is_main={false} />
    </div>
  )
}
