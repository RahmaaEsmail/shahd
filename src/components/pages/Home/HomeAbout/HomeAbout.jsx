"use client";
import React, { useState } from "react";
import HomeAboutLeftContent from "./HomeAboutLeftContent";
import HomeAboutRightContent from "./HomeAboutRightContent";
import { useTranslation } from "react-i18next";

export default function HomeAbout({ data }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar")
    ? "ar"
    : i18n.language?.startsWith("sk")
      ? "sk"
      : "en";

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Build CARDS from API data when available, otherwise use static fallback
  const apiCards =
    data && data.length > 0
      ? data.map((item) => ({
          id: item.id,
          image: item.image_url,
          label: item[`title_${lang}`] || item.title_en,
          subtitle: item[`subtitle_${lang}`] || item.subtitle_en,
          desc: item[`description_${lang}`] || item.description_en,
        }))
      : [
          {
            id: 2,
            image: "/SHAHD-IMAGE/homeAbout/6.webp",
            label: t("ACADEMY"),
            subtitle: t("Academy Sub"),
            desc: t("Academy Desc"),
          },
          {
            id: 3,
            image: "/SHAHD-IMAGE/homeAbout/7.webp",
            label: t("BOOK"),
            subtitle: t("Book Sub"),
            desc: t("Book Desc"),
          },
          {
            id: 4,
            image: "/SHAHD-IMAGE/homeAbout/8.webp",
            label: t("STORE"),
            subtitle: t("Store Desc"),
            desc: t("Hobbies Desc"),
          },
        ];

  // Always append the static "About Shahd Awad" card at the end
  const CARDS = [...apiCards];

  const currentCard = CARDS[activeIndex] ?? CARDS[0];

  return (
    <div className="min-h-[80vh] ps-4 lg:ps-8 selection:bg-[rgb(210,155,159)] selection:text-white">
      <main className="max-w-full main-contianer mx-auto py-5">
        {/* Grid Layout: 5fr (Left) / 8fr (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_8fr] gap-2 items-stretch!">
          {/* --- LEFT COLUMN: Hero Card with Animated Image --- */}
          <HomeAboutLeftContent
            activeIndex={activeIndex}
            currentCard={currentCard}
            direction={direction}
          />

          {/* --- RIGHT COLUMN: Content & Carousel --- */}
          <HomeAboutRightContent
            activeIndex={activeIndex}
            CARDS={CARDS}
            currentCard={currentCard}
            setActiveIndex={setActiveIndex}
            setDirection={setDirection}
          />
        </div>
      </main>
    </div>
  );
}
