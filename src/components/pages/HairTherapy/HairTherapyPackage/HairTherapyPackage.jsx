// "use client";
// import { useState } from 'react'
// import HairTherapyCard from './HairTherapyCard'

// const plans = [
//   {
//     id: 1,
//     name: "FRESH START",
//     img: "/SHAHD-IMAGE/Services/151784f3bce476935cf0d7f6c8fd712a8563af4a.webp",
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
//     img: "/SHAHD-IMAGE/Services/f591c51b224049891c5e2235b64968fcddec3d88.webp",
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
//     img: "/SHAHD-IMAGE/Services/c117c55556fe9873b9dca05f51eb50263ce8a7db.webp",
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
//         background: "url('/SHAHD-IMAGE/hair-therapy/246a05720eac4ca783057d77600768c1dc06e211.webp')",
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
import { useTranslation } from 'react-i18next';

const plans = [
  {
    id: 1,
    nameKey: "FRESH START",
    img: "/SHAHD-IMAGE/Services/151784f3bce476935cf0d7f6c8fd712a8563af4a.webp",
    price: "$150",
    descriptionKey: "FRESH START Desc",
    featuresKeys: [
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
    featuresKeys: [
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
    featuresKeys: [
      "full face design",
      "botox filler combo",
      "prp under eye",
      "premium skincare"
    ],
    popular: false
  }
]

export default function HairTherapyPackage({ data }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar") ? "ar" : i18n.language?.startsWith("sk") ? "sk" : "en";
  const [hoveredCard, setHoveredCard] = useState(null);

  const staticPlans = [
    {
      id: 1,
      nameKey: "FRESH START",
      img: "/SHAHD-IMAGE/Services/151784f3bce476935cf0d7f6c8fd712a8563af4a.webp",
      price: "$150",
      descriptionKey: "FRESH START Desc",
      featuresKeys: ["skin check", "hydra facial", "light botox", "aftercare"],
      popular: false
    },
    {
      id: 2,
      nameKey: "SIGNATURE BEAUTY",
      price: "$320",
      img: "/SHAHD-IMAGE/Services/f591c51b224049891c5e2235b64968fcddec3d88.webp",
      descriptionKey: "SIGNATURE BEAUTY Desc",
      featuresKeys: ["full facial analysis", "botox forehead", "lip cheek filler", "skin glow"],
      popular: true
    },
    {
      id: 3,
      nameKey: "TOTAL MAKEOVER",
      price: "$650",
      img: "/SHAHD-IMAGE/Services/c117c55556fe9873b9dca05f51eb50263ce8a7db.webp",
      descriptionKey: "TOTAL MAKEOVER Desc",
      featuresKeys: ["full face design", "botox filler combo", "prp under eye", "premium skincare"],
      popular: false
    }
  ];

  const resolvedPlans = data && data.length > 0
    ? data.map((item, idx) => {
        const fallbackPlan = staticPlans[idx % staticPlans.length];
        const featuresList = item.features 
          ? (Array.isArray(item.features) ? item.features : JSON.parse(item.features))
          : (fallbackPlan ? fallbackPlan.featuresKeys : []);
        return {
          id: item.id || idx + 1,
          nameKey: item[`name_${lang}`] || item.name_en || item.name || item.title || fallbackPlan?.nameKey || "",
          price: item.price ? (item.price.toString().startsWith("$") ? item.price : `$${item.price}`) : (fallbackPlan?.price || "$150"),
          img: item.image_url || (item.image ? (item.image.startsWith("http") ? item.image : `https://drshahdawad.com/ShahdAwad/uploads/booking/${item.image}`) : null) || fallbackPlan?.img || "/SHAHD-IMAGE/Services/151784f3bce476935cf0d7f6c8fd712a8563af4a.webp",
          descriptionKey: item[`description_${lang}`] || item.description_en || item.description || fallbackPlan?.descriptionKey || "",
          featuresKeys: featuresList,
          popular: idx === 1
        };
      })
    : staticPlans;

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: "url('/SHAHD-IMAGE/hair-therapy/246a05720eac4ca783057d77600768c1dc06e211.webp')",
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
        <div className="flex flex-col justify-center items-center gap-2 mb-4 px-4">
          <p className="text-secondary text-center font-bold text-2xl  font-poppins uppercase tracking-wider">
            {t("Offers Title")}
          </p>
          <h1 className="text-primary text-center font-normal text-3xl  uppercase leading-tight max-w-4xl">
            {t("Hair Transplant Packages")}
          </h1>
        </div>

        {/* Responsive Grid Container */}
        <div className="main-container mx-auto px-4 lg:px-8 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {resolvedPlans.map((plan, index) => {
              const isHovered = hoveredCard === plan.id;
              const shouldScale = isHovered;

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
  );
}