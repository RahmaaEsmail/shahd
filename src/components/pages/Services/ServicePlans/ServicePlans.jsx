import React from 'react'
import ServicePlanContent from './ServicePlanContent';
import ServicePlansGrid from './ServicePlansGrid';


export default function ServicePlans() {

  return (
    <div className='relative min-h-[50vh] bg-white'>
      {/* Top Gradient Section */}
      <ServicePlanContent />
      {/* Plans Section - Overlapping Cards */}
      <div className='relative -mt-4   md:-mt-30 pb-10 px-4'>
        <div className='max-w-7xl mx-auto'>
          <ServicePlansGrid />
        </div>
      </div>
    </div>
  )
}