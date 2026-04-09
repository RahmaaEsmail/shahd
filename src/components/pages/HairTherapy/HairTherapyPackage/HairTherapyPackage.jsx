// "use client";
// import { useState } from 'react'
// import HairTherapyCard from './HairTherapyCard'

// const plans = [
//   {
//     id: 1,
//     name: "FRESH START",
//     img: "/images/Services/151784f3bce476935cf0d7f6c8fd712a8563af4a.png",
//     price: "$150",
//     description: "choose the plan that suits your beauty goals — from essential touch-ups to full transformations, every package is designed to help you look and feel your best with professional care and lasting results.",
//     features: [
//       "skin check & consultation",
//       "hydra facial session",
//       "light botox or filler dose",
//       "aftercare advice"
//     ],
//     popular: false
//   },
//   {
//     id: 2,
//     name: "SIGNATURE BEAUTY",
//     price: "$320",
//     img: "/images/Services/f591c51b224049891c5e2235b64968fcddec3d88.png",
//     description: "our most loved plan smoothe, lift, and enhance your look with advanced treatments our most loved plan smooth, lift, and enhance your look with advanced treatments.",
//     features: [
//       "full facial analysis",
//       "botox for forehead & eyes",
//       "lip or cheek filler",
//       "skin glow facial"
//     ],
//     popular: true
//   },
//   {
//     id: 3,
//     name: "TOTAL MAKEOVER",
//     price: "$650",
//     img: "/images/Services/c117c55556fe9873b9dca05f51eb50263ce8a7db.png",
//     description: "for the bold & confident experience a complete transformation with personalized treatments for the bold & confident experience a complete transformation with personalized treatments.",
//     features: [
//       "full face design consultation",
//       "botox & filler combination",
//       "prp or under-eye treatment",
//       "premium skincare sessions"
//     ],
//     popular: false
//   }
// ]

// export default function HairTherapyPackage() {
//     const [hoveredCard, setHoveredCard] = useState(null);

//   return (
//     <div
//       className="min-h-screen relative"
//       style={{
//         background: "url('/images/hair-therapy/246a05720eac4ca783057d77600768c1dc06e211.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="absolute min-h-screen inset-0 bg-white/20" />
//       <div className="absolute min-h-screen inset-0 z-10">
//         <div className="flex flex-col justify-center mt-10 items-center gap-2">
//           <p className="text-secondary text-center font-bold text-[27px] font-poppins uppercase">Offers</p>
//           <p className="text-primary text-center font-normal text-[64px] uppercase">Hair Transplant Packages</p>
//         </div>

//         <div className='grid grid-cols-1 px-40 container mt-[48px] mx-auto md:grid-cols-3 gap-10'>
//       {plans.map((plan, index) => {
//         const isHovered = hoveredCard === plan.id;
//         const isPopular = plan.popular;
//         const shouldScale = isPopular || isHovered;

//         return (
//           <HairTherapyCard key={plan?.id} index={index} shouldScale={shouldScale} plan={plan} setHoveredCard={setHoveredCard} />
//         );
//       })}
//     </div>
//       </div>
//     </div>
//   )
// }


"use client";
import { useState } from 'react'
import HairTherapyCard from './HairTherapyCard'

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

export default function HairTherapyPackage() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: "url('/images/hair-therapy/246a05720eac4ca783057d77600768c1dc06e211.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white/20" />

      {/* Content Layer */}
      <div className="relative z-10 w-full py-12 md:py-20">
        
        {/* Header Section */}
        <div className="flex flex-col justify-center items-center gap-2 mb-10 px-4">
          <p className="text-secondary text-center font-bold text-xl md:text-[27px] font-poppins uppercase tracking-wider">
            Offers
          </p>
          <h1 className="text-primary text-center font-normal text-3xl md:text-[64px] uppercase leading-tight max-w-4xl">
            Hair Transplant Packages
          </h1>
        </div>

        {/* Responsive Grid Container */}
        <div className="main-container mx-auto px-4 lg:px-8 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-stretch">
            {plans.map((plan, index) => {
              const isHovered = hoveredCard === plan.id;
              const isPopular = plan.popular;
              const shouldScale = isPopular || isHovered;

              return (
                <div 
                  key={plan.id} 
                  className="flex justify-center w-full h-full"
                >
                  <HairTherapyCard 
                    index={index} 
                    shouldScale={shouldScale} 
                    plan={plan} 
                    setHoveredCard={setHoveredCard} 
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}