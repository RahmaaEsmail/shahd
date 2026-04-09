import React from 'react'
import AestheticGynecologyBanner from '../../../components/pages/AestheticGynecology/AestheticGynecologyBanner/AestheticGynecologyBanner'
import AestheticGynecologyMeetShahd from '../../../components/pages/AestheticGynecology/AestheticGynecologyMeetShahd/AestheticGynecologyMeetShahd'
import AestheticGynecologyBooking from '../../../components/pages/AestheticGynecology/AestheticGynecologyBooking/AestheticGynecologyBooking'
import AboutAestheticGynecolory from '../../../components/pages/AestheticGynecology/AboutAestheticGynecolory/AboutAestheticGynecolory'
import AestheticGynecoloryTreatments from '../../../components/pages/AestheticGynecology/AestheticGynecoloryTreatments/AestheticGynecoloryTreatments'
import AestheticGynecologyGuide from '../../../components/pages/AestheticGynecology/AestheticGynecologyGuide/AestheticGynecologyGuide'
import StoreFaq from '../../../components/pages/storePage/StoreFaq/StoreFaq'
import AestheticGynecologyTestimonial from '../../../components/pages/AestheticGynecology/AestheticGynecologyTestimonial/AestheticGynecologyTestimonial'

export default function page() {
  return (
    <div>
      <AestheticGynecologyBanner/>
      <AestheticGynecologyMeetShahd/>
      <AboutAestheticGynecolory />
      <AestheticGynecoloryTreatments/>
      <AestheticGynecologyGuide/>
      <AestheticGynecologyTestimonial/>
      <AestheticGynecologyBooking/>
      <StoreFaq is_main={true}/>
    </div>
  )
}