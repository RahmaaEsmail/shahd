"use client";
import React, { useState } from "react";
import HomeAboutLeftContent from "./HomeAboutLeftContent";
import HomeAboutRightContent from "./HomeAboutRightContent";

const CARDS = [
  {
    id: 1,
    image: "/images/homeAbout/5.png",
    label: "HOBBIES",
    desc: "Where grace meets strength",
    subtitle: "Beyond the clinic, Dr. Shahd finds balance",
  },
  {
    id: 2,
    image: "/images/homeAbout/6.png",
    label: "ACADEMY",
    desc: "Empowering the future",
    subtitle: "Empowering the future of aesthetic medicine",
  },
  {
    id: 3,
    image: "/images/homeAbout/7.png",
    label: "BOOK",
    desc: "Beauty , science , human touch",
    subtitle: "Her book reflects her journey — combining medical",
  },
  {
    id: 4,
    image: "/images/homeAbout/8.png",
    label: "STORE",
    desc: "Where grace meets strength",
    subtitle: "Empowering the aesthetic journey",
  },
  {
    id: 5,
    image: "/images/homeAbout/9.png",
    label: "About Shahd Awad",
    desc: "Redefining Beauty with Heart, Skill, and Vision",
    subtitle:
      "Dr. Shahd Awad is more than a cosmetic doctor — she's a visionary who blends science, artistry, and compassion to create timeless beauty.",
  },
];

export default function HomeAbout() {
  const [activeIndex, setActiveIndex] = useState(4); // Start with last card (About Shahd)
  const [direction, setDirection] = useState(0);

  const currentCard = CARDS[activeIndex];

  return (
    <div className="min-h-screen ps-4 lg:ps-8 selection:bg-[#D29B9F] selection:text-white">
      <main className="max-w-full mx-auto py-12 lg:py-20">
        {/* Grid Layout: 5fr (Left) / 8fr (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_8fr] gap-5 items-start">
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
