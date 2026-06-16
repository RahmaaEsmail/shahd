"use client";
import React from 'react';
import { Breadcrumb } from '@/components/shared/Breadcrumb';

export default function FavoriteBanner() {
  return (
    <div
      className='relative min-h-screen flex justify-center items-center overflow-hidden'
      style={{
        background: "url('/SHAHD-IMAGE/Cart/service details.webp')",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      {/* Overlay to ensure readability if the image is too light/busy */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h1 className='text-4xl sm:text-5xl lg:text-[100px] font-normal leading-[100%] text-white mb-10 drop-shadow-md'>
          Your Collection of Beauty
        </h1>

        <Breadcrumb 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Shop', href: '/store' },
            { label: 'My Wishlist' },
          ]} 
        />
      </div>
    </div>
  );
}
