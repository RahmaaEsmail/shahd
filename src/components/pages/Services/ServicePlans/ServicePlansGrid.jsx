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

export default function ServicePlansGrid() {
  const { t } = useTranslation();
  const [hoveredCard, setHoveredCard] = useState(null);

  const localizedPlans = plans.map(plan => ({
    ...plan,
    name: t(plan.nameKey),
    description: t(plan.descriptionKey),
    features: plan.featureKeys.map(key => t(key))
  }));

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6'>
      {localizedPlans.map((plan, index) => {
        const isHovered = hoveredCard === plan.id;
        const isPopular = plan.popular;
        const shouldScale =  isHovered;

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
  )
}
