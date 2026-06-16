"use client";
import React from 'react'
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { useTranslation } from 'react-i18next';

export default function AllProductBanner() {
  const { t } = useTranslation();

  const breadcrumbItems = [
    { label: t('Home'), href: '/' },
    { label: t('Shop'), }, // Optional: link to shop
  ];

  return (
    <div
      className='relative min-h-screen flex justify-center items-center'
      style={{
        background: "url('/SHAHD-IMAGE/All-products/service details.webp')",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h1 className='text-4xl md:text-[50px] font-normal leading-[100%] text-white mb-8'>
          {t('Curated Beauty, Handpicked by Dr. Shahd')}
        </h1>

        <Breadcrumb items={breadcrumbItems} />
      </div>
    </div>
  )
}
