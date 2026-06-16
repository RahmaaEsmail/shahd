"use client";
import React, { useState } from "react";
import HomeAboutLeftContent from "./HomeAboutLeftContent";
import HomeAboutRightContent from "./HomeAboutRightContent";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function HomeAbout() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(4); // Start with last card (About Shahd)
  const [direction, setDirection] = useState(0);

  const CARDS = [
    {
      id: 1,
      image: "/SHAHD-IMAGE/homeAbout/5.webp",
      label: t("HOBBIES"),
      desc: t("Hobbies Desc"),
      subtitle: t("Hobbies Sub"),
    },
    {
      id: 2,
      image: "/SHAHD-IMAGE/homeAbout/6.webp",
      label: t("ACADEMY"),
      desc: t("Academy Desc"),
      subtitle: t("Academy Sub"),
    },
    {
      id: 3,
      image: "/SHAHD-IMAGE/homeAbout/7.webp",
      label: t("BOOK"),
      desc: t("Book Desc"),
      subtitle: t("Book Sub"),
    },
    {
      id: 4,
      image: "/SHAHD-IMAGE/homeAbout/8.webp",
      label: t("STORE"),
      desc: t("Hobbies Desc"), // Reusing as in original
      subtitle: t("Store Desc"),
    },
    {
      id: 5,
      image: "/SHAHD-IMAGE/homeAbout/9.webp",
      label: t("About Shahd Awad"),
      desc: t("Home About Title"),
      subtitle: t("Home About Desc"),
    },
  ];

  const currentCard = CARDS[activeIndex];
   
  
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
            setActiveIndex={setActiveIndex}
            setDirection={setDirection}
          />
        </div>
      </main>
    </div>
  );
}
