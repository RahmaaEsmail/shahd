"use client";
import React, { useState } from 'react';
import ServiceQuickDetailsImages from './ServiceQuickDetailsImages';
import ServiceQuickDetailsContent from './ServiceQuickDetailsContent';

const images = [
  { id: 1, img: "/SHAHD-IMAGE/service-details/service1.webp" },
  { id: 2, img: "/SHAHD-IMAGE/service-details/service1.webp" },
  { id: 3, img: "/SHAHD-IMAGE/service-details/service2.webp" },
  { id: 4, img: "/SHAHD-IMAGE/service-details/service2.webp" },
  { id: 5, img: "/SHAHD-IMAGE/service-details/service1.webp" },
];

export default function ServiceQuickDetails({ service }) {
  const galleryImages = React.useMemo(() => {
    const list = service?.photo_gallery || [];
    if (list.length > 0) {
      return list.map((item) => ({
        id: item.id,
        img: item.image_url || item.image || "",
      }));
    }
    return [
      {
        id: 1,
        img:
          service?.image_url ||
          service?.image ||
          "/SHAHD-IMAGE/service-details/service1.webp",
      },
    ];
  }, [service]);

  const [activeImg, setActiveImg] = useState("");

  React.useEffect(() => {
    if (galleryImages.length > 0) {
      setActiveImg(galleryImages[0].img);
    }
  }, [galleryImages]);

  return (
    <section className="main-container mx-auto py-10 px-4">
      {/* items-start is crucial for sticky to work in a grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 items-start">

        {/* Left Side: Gallery - Sticky Wrapper */}
        <div className="lg:sticky lg:top-10 z-20">
          <ServiceQuickDetailsImages
            activeImg={activeImg}
            setActiveImg={setActiveImg}
            images={galleryImages}
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