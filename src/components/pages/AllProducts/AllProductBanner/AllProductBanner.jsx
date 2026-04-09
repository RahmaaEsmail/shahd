import React from 'react'
import { Breadcrumb } from '@/components/shared/Breadcrumb';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Shop', }, // Optional: link to shop
];

export default function AllProductBanner() {
  return (
    <div
      className='relative min-h-screen flex justify-center items-center'
      style={{
        background: "url('/images/All-products/service details.png')",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h1 className='text-4xl md:text-[80px] font-normal leading-[100%] text-white mb-8'>
          Curated Beauty, Handpicked by Dr. Shahd
        </h1>

        <Breadcrumb items={breadcrumbItems} />
      </div>
    </div>
  )
}