"use client";
import { useState } from 'react'
import HairTherapyCard from './HairTherapyCard'
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export default function HairTherapyPackage({ data }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar") ? "ar" : i18n.language?.startsWith("sk") ? "sk" : "en";
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeCycle, setActiveCycle] = useState("monthly");

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
        
        // Resolve features list
        let featuresList = [];
        if (item.services_data && item.services_data.length > 0) {
          featuresList = item.services_data.map(srv => srv.title || srv.name);
        } else {
          const langFeatures = item[`features_${lang}_array`] || item[`features_en_array`] || [];
          if (langFeatures && langFeatures.length > 0) {
            featuresList = langFeatures;
          } else if (item.features) {
            try {
              const parsed = JSON.parse(item.features);
              featuresList = Array.isArray(parsed) ? parsed : [parsed];
            } catch (e) {
              featuresList = item.features.split(/[\r\n]+/).map(f => f.trim()).filter(Boolean);
            }
          } else {
            featuresList = fallbackPlan ? fallbackPlan.featuresKeys : [];
          }
        }

        // Clean HTML tags from features if any
        featuresList = featuresList.map(feat => {
          if (typeof feat === 'string') {
            return feat.replace(/<\/?[^>]+(>|$)/g, "").trim();
          }
          return feat;
        }).filter(Boolean);

        // Normalize currency symbol
        let currencySymbol = "$";
        if (item.currency === "EUR" || item.price_currency === "EUR") {
          currencySymbol = "€";
        }

        return {
          id: item.id || idx + 1,
          name: item.name || item.title || fallbackPlan?.nameKey || "",
          price: item.price !== undefined ? `${currencySymbol}${item.price}` : (fallbackPlan?.price || "$150"),
          currency: item.currency || "USD",
          img: item.image_url || (item.image ? (item.image.startsWith("http") ? item.image : `https://drshahdawad.com/ShahdAwad/uploads/booking/${item.image}`) : null) || fallbackPlan?.img || "/SHAHD-IMAGE/Services/151784f3bce476935cf0d7f6c8fd712a8563af4a.webp",
          description: item[`description_${lang}`] || item.description || fallbackPlan?.descriptionKey || "",
          features: featuresList,
          popular: idx === 1,
          billing_cycle: (item.billing_cycle || "monthly").toLowerCase(),
          num_of_sessions: item.num_of_sessions !== undefined ? Number(item.num_of_sessions) : null,
        };
      })
    : staticPlans.map((plan, idx) => ({
        id: plan.id,
        name: t(plan.nameKey),
        price: plan.price,
        currency: "USD",
        img: plan.img,
        description: t(plan.descriptionKey),
        features: plan.featuresKeys.map(k => t(k)),
        popular: plan.popular,
        billing_cycle: "monthly",
      }));

  // Filter packages based on active billing cycle
  const filteredPlans = resolvedPlans.filter(
    (plan) => plan.billing_cycle === activeCycle
  );

  // Show only 3 packages on the main view
  const displayedPlans = filteredPlans.slice(0, 3);
  const hasMore = filteredPlans.length > 3;

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
        <div className="flex flex-col justify-center items-center gap-2 mb-8 px-4">
          <p className="text-secondary text-center font-bold text-2xl font-poppins uppercase tracking-wider">
            {t("Offers Title")}
          </p>
          <h1 className="text-primary text-center font-normal text-3xl md:text-5xl uppercase leading-tight max-w-4xl">
            {t("Hair Transplant Packages")}
          </h1>
        </div>

        {/* Toggle Section */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-white/60 border border-primary/20 backdrop-blur-md rounded-full shadow-sm">
            <button
              onClick={() => setActiveCycle("monthly")}
              className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-poppins uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeCycle === "monthly"
                  ? "bg-[#DDB2B5] text-white shadow-md font-medium"
                  : "text-[#7189a2] hover:text-primary"
              }`}
            >
              {t("Monthly")}
            </button>
            <button
              onClick={() => setActiveCycle("yearly")}
              className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-poppins uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeCycle === "yearly"
                  ? "bg-[#DDB2B5] text-white shadow-md font-medium"
                  : "text-[#7189a2] hover:text-primary"
              }`}
            >
              {t("Yearly")}
            </button>
          </div>
        </div>

        {/* Responsive Grid Container */}
        <div className="main-container mx-auto px-4 lg:px-8 mt-4">
          {displayedPlans.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 w-full text-center">
              <p className="text-secondary text-lg font-poppins font-medium">
                {t("No packages found for this billing cycle")}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch justify-center">
              {displayedPlans.map((plan, index) => {
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
          )}

          {/* View All Button */}
          {hasMore && (
            <div className="flex justify-center mt-12">
              <Link
                href="/packages?tab=hair-therapy"
                className="px-8 py-3 bg-white text-secondary hover:bg-secondary hover:text-white border border-secondary rounded-full font-medium transition-all duration-300 shadow-lg shadow-secondary/10 uppercase tracking-wider text-xs md:text-sm"
              >
                {t("View All Packages")}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}