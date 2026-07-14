"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import HairTherapyCard from "@/components/pages/HairTherapy/HairTherapyPackage/HairTherapyCard";
import ServicePlansGrid from "@/components/pages/Services/ServicePlans/ServicePlansGrid";
import PackagesBanner from "@/components/pages/Services/ServicePlans/PackagesBanner";
import { useServices } from "@/hooks/services/useServices";
import { usePricing } from "@/hooks/hair-therapy/useHairTherapy";
import Loading from "../../loading";
import { useTranslation } from "react-i18next";

export default function PackagesClient() {
  const { data: servicesData, isLoading: servicesLoading } = useServices();
  const { data: hairPricingData, isLoading: hairPricingLoading } =
    usePricing(1);
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar")
    ? "ar"
    : i18n.language?.startsWith("sk")
      ? "sk"
      : "en";

  const searchParams = useSearchParams();
  const initialTab =
    searchParams.get("tab") === "hair-therapy" ? "hair-therapy" : "services";

  const [activeCategory, setActiveCategory] = useState(initialTab);
  const [activeCycle, setActiveCycle] = useState(1); // 1 = monthly, 2 = yearly
  const [hoveredCard, setHoveredCard] = useState(null);

  if (servicesLoading || hairPricingLoading) {
    return <Loading />;
  }

  // Static plans fallbacks for hair transplant
  const staticHairPlans = [
    {
      id: 1,
      nameKey: "FRESH START",
      img: "/SHAHD-IMAGE/Services/151784f3bce476935cf0d7f6c8fd712a8563af4a.webp",
      price: "$150",
      descriptionKey: "FRESH START Desc",
      featuresKeys: ["skin check", "hydra facial", "light botox", "aftercare"],
      popular: false,
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
        "skin glow",
      ],
      popular: true,
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
        "premium skincare",
      ],
      popular: false,
    },
  ];

  // Resolve hair transplant plans
  const resolvedHairPlans =
    hairPricingData?.data && hairPricingData.data.length > 0
      ? hairPricingData.data.map((item, idx) => {
          const fallbackPlan = staticHairPlans[idx % staticHairPlans.length];

          let featuresList = [];
          if (item.services_data && item.services_data.length > 0) {
            featuresList = item.services_data.map(
              (srv) => srv.title || srv.name,
            );
          } else {
            const langFeatures =
              item[`features_${lang}_array`] || item[`features_en_array`] || [];
            if (langFeatures && langFeatures.length > 0) {
              featuresList = langFeatures;
            } else if (item.features) {
              try {
                const parsed = JSON.parse(item.features);
                featuresList = Array.isArray(parsed) ? parsed : [parsed];
              } catch (e) {
                featuresList = item.features
                  .split(/[\r\n]+/)
                  .map((f) => f.trim())
                  .filter(Boolean);
              }
            } else {
              featuresList = fallbackPlan ? fallbackPlan.featuresKeys : [];
            }
          }

          featuresList = featuresList
            .map((feat) => {
              if (typeof feat === "string") {
                return feat.replace(/<\/?[^>]+(>|$)/g, "").trim();
              }
              return feat;
            })
            .filter(Boolean);

          let currencySymbol = "$";
          if (item.currency === "EUR" || item.price_currency === "EUR") {
            currencySymbol = "€";
          }

          return {
            id: item.id || idx + 1,
            name: item.name || item.title || fallbackPlan?.nameKey || "",
            price:
              item.price !== undefined
                ? `${currencySymbol}${item.price}`
                : fallbackPlan?.price || "$150",
            currency: item.currency || "USD",
            img:
              item.image_url ||
              (item.image
                ? item.image.startsWith("http")
                  ? item.image
                  : `https://drshahdawad.com/ShahdAwad/uploads/booking/${item.image}`
                : null) ||
              fallbackPlan?.img ||
              "/SHAHD-IMAGE/Services/151784f3bce476935cf0d7f6c8fd712a8563af4a.webp",
            description:
              item[`description_${lang}`] ||
              item.description ||
              fallbackPlan?.descriptionKey ||
              "",
            features: featuresList,
            popular: idx === 1,
            billing_cycle: (item.billing_cycle || "monthly").toLowerCase(),
            num_of_sessions: item.num_of_sessions !== undefined ? Number(item.num_of_sessions) : null,
          };
        })
      : staticHairPlans.map((plan, idx) => ({
          id: plan.id,
          name: t(plan.nameKey),
          price: plan.price,
          currency: "USD",
          img: plan.img,
          description: t(plan.descriptionKey),
          features: plan.featuresKeys.map((k) => t(k)),
          popular: plan.popular,
          billing_cycle: "monthly",
        }));

  const activeCycleKey = activeCycle === 2 ? "yearly" : "monthly";
  const filteredHairPlans = resolvedHairPlans.filter(
    (plan) => plan.billing_cycle === activeCycleKey,
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Master Banner */}
      <PackagesBanner />

      {/* Selector and Main Grid Container */}
      <div
        className="relative py-12 md:py-20 overflow-hidden"
        style={{
          background:
            "url('/SHAHD-IMAGE/hair-therapy/246a05720eac4ca783057d77600768c1dc06e211.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />

        <div className="relative z-10 w-full">
          {/* Categories Switcher Tab */}
          {/* <div className="flex justify-center mb-8 px-4">
            <div className="inline-flex rounded-full border border-secondary/20 p-1 bg-white/70 backdrop-blur-md shadow-sm">
              <button
                onClick={() => setActiveCategory("services")}
                className={`px-8 py-3 rounded-full text-xs md:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeCategory === "services"
                    ? "bg-[#DDB2B5] text-white shadow-md"
                    : "text-secondary hover:bg-[#DDB2B5]/10"
                }`}
              >
                {t("All Aesthetic Packages")}
              </button>
              <button
                onClick={() => setActiveCategory("hair-therapy")}
                className={`px-8 py-3 rounded-full text-xs md:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeCategory === "hair-therapy"
                    ? "bg-[#DDB2B5] text-white shadow-md"
                    : "text-secondary hover:bg-[#DDB2B5]/10"
                }`}
              >
                {t("Hair Transplant Packages")}
              </button>
            </div>
          </div> */}

          {/* Billing Cycle Switcher Tab */}
          <div className="flex justify-center mb-12 px-4">
            <div className="inline-flex rounded-full border border-[#4D3E3F]/20 p-1 bg-white/70 backdrop-blur-md shadow-sm">
              <button
                onClick={() => setActiveCycle(1)}
                className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeCycle === 1
                    ? "bg-secondary text-white shadow-md"
                    : "text-secondary hover:bg-secondary/10"
                }`}
              >
                {t("Monthly")}
              </button>
              <button
                onClick={() => setActiveCycle(2)}
                className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeCycle === 2
                    ? "bg-secondary text-white shadow-md"
                    : "text-secondary hover:bg-secondary/10"
                }`}
              >
                {t("Yearly")}
              </button>
            </div>
          </div>

          {/* Grid View */}
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            {activeCategory === "services" ? (
              <ServicePlansGrid
                data={servicesData?.data?.service_pricing}
                activeTab={activeCycle}
                limit={null}
              />
            ) : (
              <div>
                {filteredHairPlans.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-12 w-full text-center">
                    <p className="text-secondary text-lg font-poppins font-medium">
                      {t("No packages found for this billing cycle")}
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch justify-center">
                    {filteredHairPlans.map((plan, index) => {
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
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
