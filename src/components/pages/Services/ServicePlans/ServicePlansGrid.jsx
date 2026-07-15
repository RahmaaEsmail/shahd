"use client";
import React, { useState } from "react";
import PlanCard from "./PlanCard";
import { useTranslation } from "react-i18next";

const plans = [
  {
    id: 1,
    nameKey: "FRESH START",
    img: "/SHAHD-IMAGE/Services/151784f3bce476935cf0d7f6c8fd712a8563af4a.webp",
    price: "$150",
    descriptionKey: "FRESH START Desc",
    featureKeys: ["skin check", "hydra facial", "light botox", "aftercare"],
    popular: false,
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
    featureKeys: [
      "full face design",
      "botox filler combo",
      "prp under eye",
      "premium skincare",
    ],
    popular: false,
  },
];

import Link from "next/link";

export default function ServicePlansGrid({ data, activeTab = 1, limit = 3 }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar")
    ? "ar"
    : i18n.language?.startsWith("sk")
      ? "sk"
      : "en";
  const [hoveredCard, setHoveredCard] = useState(null);

  console.log("service plans grid", data);
  const staticPlans = [
    {
      id: 1,
      name: t("FRESH START"),
      img: "/SHAHD-IMAGE/Services/151784f3bce476935cf0d7f6c8fd712a8563af4a.webp",
      price: "$150",
      description: t("FRESH START Desc"),
      features: ["skin check", "hydra facial", "light botox", "aftercare"].map(
        (k) => t(k),
      ),
      popular: false,
      billing_cycle: "monthly",
    },
    {
      id: 2,
      name: t("SIGNATURE BEAUTY"),
      price: "$320",
      img: "/SHAHD-IMAGE/Services/f591c51b224049891c5e2235b64968fcddec3d88.webp",
      description: t("SIGNATURE BEAUTY Desc"),
      features: [
        "full facial analysis",
        "botox forehead",
        "lip cheek filler",
        "skin glow",
      ].map((k) => t(k)),
      popular: true,
      billing_cycle: "monthly",
    },
    {
      id: 3,
      name: t("TOTAL MAKEOVER"),
      price: "$650",
      img: "/SHAHD-IMAGE/Services/c117c55556fe9873b9dca05f51eb50263ce8a7db.webp",
      description: t("TOTAL MAKEOVER Desc"),
      features: [
        "full face design",
        "botox filler combo",
        "prp under eye",
        "premium skincare",
      ].map((k) => t(k)),
      popular: false,
      billing_cycle: "monthly",
    },
  ];

  const resolvedPlans =
    data && data.length > 0
      ? data.map((item, idx) => {
          const fallbackPlan = staticPlans[idx % staticPlans.length];
          let featuresList = [];
          if (item.features) {
            if (Array.isArray(item.features)) {
              featuresList = item.features;
            } else if (typeof item.features === "string") {
              try {
                const parsed = JSON.parse(item.features);
                featuresList = Array.isArray(parsed) ? parsed : [parsed];
              } catch (e) {
                featuresList = item.features
                  .split(",")
                  .map((f) => f.trim())
                  .filter(Boolean);
              }
            }
          } else {
            featuresList = fallbackPlan ? fallbackPlan.features : [];
          }
          return {
            id: item.id || idx + 1,
            name: item.name || item.title || fallbackPlan?.name || "",
            price: item.price
              ? item.price.toString().startsWith("€")
                ? item.price
                : `€${item.price}`
              : fallbackPlan?.price || "€150",
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
              item.description_en ||
              item.description ||
              fallbackPlan?.description ||
              "",
            num_of_sessions: item?.num_of_sessions,
            services: item?.services,
            services_data: item?.services_data,
            billing_cycle: (item.billing_cycle || "monthly").toLowerCase(),
            is_own: item.is_own,
          };
        })
      : staticPlans;

  // Filter plans based on the active billing cycle
  const cycleKey = activeTab === 2 ? "yearly" : "monthly";
  const filteredPlans = resolvedPlans.filter(
    (plan) => plan.billing_cycle === cycleKey,
  );

  // Slice displayed plans
  const displayedPlans = limit ? filteredPlans.slice(0, limit) : filteredPlans;
  const hasMore = limit && filteredPlans.length > limit;

  return (
    <div className="flex flex-col items-center w-full">
      {displayedPlans.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 w-full text-center">
          <p className="text-secondary text-lg font-poppins font-medium">
            {t("No packages found for this billing cycle")}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 w-full items-stretch">
          {displayedPlans.map((plan, index) => {
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
      )}

      {/* View All Button */}
      {hasMore && (
        <div className="flex justify-center mt-12">
          <Link
            href="/packages?tab=services"
            className="px-8 py-3 bg-white text-secondary hover:bg-secondary hover:text-white border border-secondary rounded-full font-medium transition-all duration-300 shadow-lg shadow-secondary/10 uppercase tracking-wider text-xs md:text-sm"
          >
            {t("View All Packages")}
          </Link>
        </div>
      )}
    </div>
  );
}
