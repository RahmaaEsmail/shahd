"use client";
import React, { useState } from 'react';
import ServiceQuickDetailsImages from './ServiceQuickDetailsImages';
import ServiceQuickDetailsContent from './ServiceQuickDetailsContent';

const images = [
  { id: 1, img: "/images/service-details/service1.jpg" },
  { id: 2, img: "/images/service-details/service1.jpg" },
  { id: 3, img: "/images/service-details/service2.png" },
  { id: 4, img: "/images/service-details/service2.png" },
  { id: 5, img: "/images/service-details/service1.jpg" },
];

export default function ServiceQuickDetails({ service }) {
  const [activeImg, setActiveImg] = useState(images[0].img);

  return (
    <section className="main-container mx-auto py-20 px-4">
      {/* items-start is crucial for sticky to work in a grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 items-start">

        {/* Left Side: Gallery - Sticky Wrapper */}
        <div className='lg:sticky lg:top-10 z-20'>
          <ServiceQuickDetailsImages
            activeImg={activeImg}
            setActiveImg={setActiveImg}
            images={images}
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full">
          <ServiceQuickDetailsContent service={service} />
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}