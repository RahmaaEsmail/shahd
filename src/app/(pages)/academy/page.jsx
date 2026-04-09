import React from 'react'
import AcademyBanner from '@/components/pages/AcademyPage/AcademyBanner/AcademyBanner'
import AcademyUpdate from '@/components/pages/AcademyPage/AcademyUpdate/AcademyUpdate'
import AcademyCourses from '@/components/pages/AcademyPage/AcademyCourses/AcademyCourses'
import AcademyWorkshop from '@/components/pages/AcademyPage/AcademyWorkshop/AcademyWorkshop'
import AcademyLicense from '@/components/pages/AcademyPage/AcademyLicense/AcademyLicense'
import AcademyAesthetic from '@/components/pages/AcademyPage/AcademyAesthetic/AcademyAesthetic'
import AcademyTeam from '@/components/pages/AcademyPage/AcademyTeam/AcademyTeam'

export default function page() {
  return (
    <div>
      <AcademyBanner/>
      <AcademyUpdate />
      <AcademyCourses />
      <AcademyWorkshop />
      <AcademyAesthetic />
      <AcademyLicense />
      <AcademyTeam />
    </div>
  )
}
