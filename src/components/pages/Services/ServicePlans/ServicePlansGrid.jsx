"use client";
import React, { useState } from 'react'
import PlanCard from './PlanCard';
import { useTranslation } from 'react-i18next';

const plans = [
  {
    id: 1,
    nameKey: "FRESH START",
    img: "/SHAHD-IMAGE/Services/151784f3bce476935cf0d7f6c8fd712a8563af4a.webp",
    price: "$150",
    descriptionKey: "FRESH START Desc",
    featureKeys: [
      "skin check",
      "hydra facial",
      "light botox",
      "aftercare"
    ],
    popular: false
  },
  {
    id: 2,
    nameKey: "SIGNATURE BEAUTY",
    price: "$320",
    img: "/SHAHD-IMAGE/Services/f591c51b224049891c5e2235b64968fcddec3d88.webp",
    descriptionKey: "SIGNATURE BEAUTY Desc",
    featureKeys: [
      "full facial analysis",
      "botox forehead",
      "lip cheek filler",
      "skin glow"
    ],
    popular: true
  },
  {
    id: 3,
    nameKey: "TOTAL MAKEOVER",
    price: "$650",
    img: "/SHAHD-IMAGE/Services/c117c55556fe9873b9dca05f51eb50263ce8a7db.webp",
    descriptionKey: "TOTAL MAKEOVER Desc",
    featureKeys: [
      "full face design",
      "botox filler combo",
      "prp under eye",
      "premium skincare"
    ],
    popular: false
  }
]

export default function ServicePlansGrid({ data }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar") ? "ar" : i18n.language?.startsWith("sk") ? "sk" : "en";
  const [hoveredCard, setHoveredCard] = useState(null);

  const staticPlans = [
    {
      id: 1,
      name: t("FRESH START"),
      img: "/SHAHD-IMAGE/Services/151784f3bce476935cf0d7f6c8fd712a8563af4a.webp",
      price: "$150",
      description: t("FRESH START Desc"),
      features: ["skin check", "hydra facial", "light botox", "aftercare"].map(k => t(k)),
      popular: false
    },
    {
      id: 2,
      name: t("SIGNATURE BEAUTY"),
      price: "$320",
      img: "/SHAHD-IMAGE/Services/f591c51b224049891c5e2235b64968fcddec3d88.webp",
      description: t("SIGNATURE BEAUTY Desc"),
      features: ["full facial analysis", "botox forehead", "lip cheek filler", "skin glow"].map(k => t(k)),
      popular: true
    },
    {
      id: 3,
      name: t("TOTAL MAKEOVER"),
      price: "$650",
      img: "/SHAHD-IMAGE/Services/c117c55556fe9873b9dca05f51eb50263ce8a7db.webp",
      description: t("TOTAL MAKEOVER Desc"),
      features: ["full face design", "botox filler combo", "prp under eye", "premium skincare"].map(k => t(k)),
      popular: false
    }
  ];

  const resolvedPlans = data && data.length > 0
    ? data.map((item, idx) => {
        const fallbackPlan = staticPlans[idx % staticPlans.length];
        let featuresList = [];
        if (item.features) {
          if (Array.isArray(item.features)) {
            featuresList = item.features;
          } else if (typeof item.features === 'string') {
            try {
              const parsed = JSON.parse(item.features);
              featuresList = Array.isArray(parsed) ? parsed : [parsed];
            } catch (e) {
              featuresList = item.features.split(',').map(f => f.trim()).filter(Boolean);
            }
          }
        } else {
          featuresList = fallbackPlan ? fallbackPlan.features : [];
        }
        return {
          id: item.id || idx + 1,
          name: item[`name_${lang}`] || item.name_en || item.name || item.title || fallbackPlan?.name || "",
          price: item.price ? (item.price.toString().startsWith("$") ? item.price : `$${item.price}`) : (fallbackPlan?.price || "$150"),
          img: item.image_url || (item.image ? (item.image.startsWith("http") ? item.image : `https://drshahdawad.com/ShahdAwad/uploads/booking/${item.image}`) : null) || fallbackPlan?.img || "/SHAHD-IMAGE/Services/151784f3bce476935cf0d7f6c8fd712a8563af4a.webp",
          description: item[`description_${lang}`] || item.description_en || item.description || fallbackPlan?.description || "",
          features: featuresList,
          popular: idx === 1
        };
      })
    : staticPlans;

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6'>
      {resolvedPlans.map((plan, index) => {
        const isHovered = hoveredCard === plan.id;
        const shouldScale = isHovered;

        return (
          <div key={plan.id} className="flex flex-col h-full">
            <PlanCard 
              index={index} 
              shouldScale={shouldScale} 
              plan={plan} 
              setHoveredCard={setHoveredCard} 
            />
          </div>
        );
      })}
    </div>
  );
}
