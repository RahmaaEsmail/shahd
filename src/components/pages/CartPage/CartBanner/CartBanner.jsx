import Link from 'next/link'
import React from 'react'
import { Breadcrumb } from '@/components/shared/Breadcrumb'

export default function AllProductBanner() {
  return (
    <div
      className='relative min-h-screen flex justify-center items-center'
      style={{
        background: "url('/SHAHD-IMAGE/Cart/service details.webp')",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h1 className='text-4xl sm:text-5xl  font-normal leading-[100%] text-white mb-8'>
          Your Beauty Picks Are Almost Home
        </h1>

        <Breadcrumb 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Shop', href: '/store' },
            { label: 'My Cart' },
          ]} 
        />
      </div>
    </div>
  )
}