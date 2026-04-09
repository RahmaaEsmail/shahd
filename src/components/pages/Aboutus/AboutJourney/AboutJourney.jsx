"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Optimized Title Component for responsiveness
const TitleSection = ({ title, highlightedWord, lastPart }) => {
  return (
    <h1 className="text-white  pt-0 text-4xl md:text-6xl lg:text-[100px] xl:text-[120px] font-light leading-[1.1] md:leading-[0.9] tracking-tight px-4">
      <span className="block mb-2">{title}</span>
      <span className="flex flex-wrap items-center justify-center gap-3 md:gap-4 lg:gap-8">
        <span className="font-medium italic md:not-italic">{highlightedWord}</span>
        <span className="relative w-16 h-8 md:w-24 md:h-12 lg:w-40 lg:h-16 rounded-full overflow-hidden inline-block border border-white/20">
          <Image
            src="/images/About/aboutcontent.png"
            alt="Beauty detail"
            fill
            className="object-cover"
          />
        </span>
        <span>{lastPart}</span>
      </span>
    </h1>
  );
};

const imagesWithVariations = [
  {
    id: 1,
    titleData: { main: "Where the Dream of Redefining ", word: "BEAUTY", end: "FIRST BEGAN" },
    description: "It all started with a vision — a dream to bring together science, art, and passion. Dr. Shahd Awad began her journey in aesthetic medicine determined to help people see and feel their natural beauty in a new light.",
    image: "/images/About/about-content1.png",
    thumbnail: "/images/About/about-content1.png",
  },
  {
    id: 2,
    titleData: { main: "OUR MISSION IS", word: "TRANSFORM", end: "LIVES" },
    description: "With cutting-edge technology and personalized care, we help our clients achieve their aesthetic goals while maintaining their unique natural beauty.",
    image: "/images/About/about-content2.png",
    thumbnail: "/images/About/about-content2.png",
  },
  {
    id: 3,
    titleData: { main: "WE BELIEVE", word: "BEAUTY", end: "IS ART" },
    description: "Every face tells a story. Our approach combines medical precision with artistic vision to enhance your natural features.",
    image: "/images/About/about-content3.png",
    thumbnail: "/images/About/about-content3.png",
  },
  {
    id: 4,
    titleData: { main: "YOUR JOURNEY", word: "STARTS", end: "HERE" },
    description: "Experience the perfect blend of science and aesthetics in a comfortable, welcoming environment designed just for you.",
    image: "/images/About/about-content4.png",
    thumbnail: "/images/About/about-content4.png",
  },
];

export default function AboutJourney() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(imagesWithVariations[0]);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  const handleThumbnailClick = useCallback((index) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const index = emblaApi.selectedScrollSnap();
    setSelectedIndex(index);
    setSelectedImage(imagesWithVariations[index]);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative min-h-[200px]! lg:min-h-[700px]  w-full overflow-hidden bg-black">
      {/* Background Image with Ken Burns effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedImage.id}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={selectedImage.image}
            alt="Background"
            fill
            className="object-cover"
            priority
            quality={85}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/90" />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col pt-8 pb-12 px-4 md:px-10">
        {/* Section Label */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#D19B9B] font-poppins text-center font-medium text-xl! md:text-2xl lg:text-[40px] tracking-[4px] uppercase"
        >
          OUR JOURNEY
        </motion.h2>

        {/* Main Headline & Description */}
        <div className="flex mt-5!  flex-col justify-center items-center text-center max-w-7xl mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedImage.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <TitleSection
                title={selectedImage.titleData.main}
                highlightedWord={selectedImage.titleData.word}
                lastPart={selectedImage.titleData.end}
              />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${selectedImage.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 md:mt-10 text-white/70 font-poppins text-sm md:text-lg lg:text-2xl font-light max-w-4xl leading-relaxed px-6"
            >
              {selectedImage.description}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Bottom Section: Stacked on Mobile, Row on Desktop */}
        <div className="lg:mt-auto mt-8! flex flex-col md:flex-row items-center md:items-end justify-between gap-8 w-full">
          {/* Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group cursor-pointer z-20"
          >
            <div
              className="absolute -inset-0.5 rounded-full opacity-70 group-hover:opacity-100 transition duration-500"
              style={{
                background: "linear-gradient(90deg, #D19B9B 0%, #B6C7D6 100%)",
                boxShadow: "0px 0px 40px rgba(255, 255, 255, 0.2)",
              }}
            />
            <button className="relative bg-white rounded-full px-6 py-3 md:px-10 md:py-4 text-gray-800 font-semibold text-sm md:text-lg">
              Book Appointment
            </button>
          </motion.div>

          {/* Thumbnails */}
          <div className="w-full md:w-auto max-w-[90vw] md:max-w-[400px] lg:max-w-[600px]">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-3 md:gap-4">
                {imagesWithVariations.map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => handleThumbnailClick(index)}
                    className="flex-[0_0_120px] md:flex-[0_0_160px] lg:flex-[0_0_190px] py-2 cursor-pointer"
                  >
                    <div
                      className={`relative aspect-[16/7] rounded-full overflow-hidden transition-all duration-500 ${
                        selectedIndex === index 
                          ? "ring-2 ring-white/50 scale-100 opacity-100 shadow-[0_0_20px_rgba(255,255,255,0.3)]" 
                          : "scale-90 opacity-40 grayscale-[0.5]"
                      }`}
                    >
                      <Image
                        src={item.thumbnail}
                        alt={`Slide ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 120px, 190px"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}