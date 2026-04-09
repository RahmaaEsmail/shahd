"use client";
import React, { useState } from 'react'
import PlanCard from './PlanCard';


const plans = [
  {
    id: 1,
    name: "FRESH START",
    img: "/images/Services/151784f3bce476935cf0d7f6c8fd712a8563af4a.png",
    price: "$150",
    description: "choose the plan that suits your beauty goals — from essential touch-ups to full transformations, every package is designed to help you look and feel your best with professional care and lasting results.",
    features: [
      "skin check & consultation",
      "hydra facial session",
      "light botox or filler dose",
      "aftercare advice"
    ],
    popular: false
  },
  {
    id: 2,
    name: "SIGNATURE BEAUTY",
    price: "$320",
    img: "/images/Services/f591c51b224049891c5e2235b64968fcddec3d88.png",
    description: "our most loved plan smoothe, lift, and enhance your look with advanced treatments our most loved plan smooth, lift, and enhance your look with advanced treatments.",
    features: [
      "full facial analysis",
      "botox for forehead & eyes",
      "lip or cheek filler",
      "skin glow facial"
    ],
    popular: true
  },
  {
    id: 3,
    name: "TOTAL MAKEOVER",
    price: "$650",
    img: "/images/Services/c117c55556fe9873b9dca05f51eb50263ce8a7db.png",
    description: "for the bold & confident experience a complete transformation with personalized treatments for the bold & confident experience a complete transformation with personalized treatments.",
    features: [
      "full face design consultation",
      "botox & filler combination",
      "prp or under-eye treatment",
      "premium skincare sessions"
    ],
    popular: false
  }
]

export default function ServicePlansGrid() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6'>
      {plans.map((plan, index) => {
        const isHovered = hoveredCard === plan.id;
        const isPopular = plan.popular;
        const shouldScale = isPopular || isHovered;

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
