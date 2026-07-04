"use client";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from 'react-i18next';

// Optimized Title Component for responsiveness
const TitleSection = ({ title, highlightedWord, lastPart }) => {
  return (
    <h1 className="text-white  pt-0 text-4xl md:text-6xl font-light leading-[1.1] md:leading-[0.9] tracking-tight px-4">
      <span className="block mb-2">{title}</span>
      <span className="flex flex-wrap items-center justify-center gap-3 md:gap-4 lg:gap-8">
        <span className="font-medium italic md:not-italic">{highlightedWord}</span>
        <span className="relative w-16 h-8 md:w-24 md:h-12 lg:w-40 lg:h-16 rounded-full overflow-hidden inline-block border border-white/20">
          <Image
            src="/SHAHD-IMAGE/About/aboutcontent.webp"
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

export default function AboutJourney({ data }) {
  const { t , i18n} = useTranslation();
  const lang = i18n.language?.startsWith("ar")
    ? "ar"
    : i18n.language?.startsWith("sk")
    ? "sk"
    : "en";

  const [selectedIndex, setSelectedIndex] = useState(0);

  // Helper to strip HTML tags from API title strings like "<h2>Title</h2>"
  const stripHtml = (html) => html?.replace(/<[^>]*>/g, "").trim() ?? "";

  const staticItems = [
    {
      id: 1,
      titleData: { main: t("Journey Title 1"), word: t("Journey Word 1"), end: t("Journey End 1") },
      description: t("Journey Desc 1"),
      image: "/SHAHD-IMAGE/About/about-content1.webp",
      thumbnail: "/SHAHD-IMAGE/About/about-content1.webp",
    },
    {
      id: 2,
      titleData: { main: t("Journey Title 2"), word: t("Journey Word 2"), end: t("Journey End 2") },
      description: t("Journey Desc 2"),
      image: "/SHAHD-IMAGE/About/about-content2.webp",
      thumbnail: "/SHAHD-IMAGE/About/about-content2.webp",
    },
    {
      id: 3,
      titleData: { main: t("Journey Title 3"), word: t("Journey Word 3"), end: t("Journey End 3") },
      description: t("Journey Desc 3"),
      image: "/SHAHD-IMAGE/About/about-content3.webp",
      thumbnail: "/SHAHD-IMAGE/About/about-content3.webp",
    },
    {
      id: 4,
      titleData: { main: t("Journey Title 4"), word: t("Journey Word 4"), end: t("Journey End 4") },
      description: t("Journey Desc 4"),
      image: "/SHAHD-IMAGE/About/about-content4.webp",
      thumbnail: "/SHAHD-IMAGE/About/about-content4.webp",
    },
  ];

  const imagesWithVariations =
    data && data.length > 0
      ? [...data]
          .sort((a, b) => a.step_order - b.step_order)
          .map((item) => {
            const rawTitle = item[`title_${lang}`] || item.title_en || "";
            const cleanTitle = stripHtml(rawTitle);
            const year = item[`subtitle_${lang}`] || item.subtitle_en || "";
            return {
              id: item.id,
              titleData: { main: year, word: cleanTitle, end: "" },
              description: item[`description_${lang}`] || item.description_en || "",
              image: item.image_url || "/SHAHD-IMAGE/About/about-content1.webp",
              thumbnail: item.image_url || "/SHAHD-IMAGE/About/about-content1.webp",
            };
          })
      : staticItems;

  const [selectedImage, setSelectedImage] = useState(imagesWithVariations[0]);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      direction: i18n?.language == "ar" ? "right" : "left",
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const handleThumbnailClick = useCallback((index) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
    setSelectedIndex(index);
    setSelectedImage(imagesWithVariations[index]);
  }, [emblaApi, imagesWithVariations]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const index = emblaApi.selectedScrollSnap();
    setSelectedIndex(index);
    setSelectedImage(imagesWithVariations[index]);
  }, [emblaApi, imagesWithVariations]);

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
    <div className="relative min-h-[200px]! lg:min-h-[700px] py-4  w-full overflow-hidden bg-black">
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
      <div className="relative z-10 h-full flex flex-col pt-4 pb-6 px-4 md:px-10">
        {/* Section Label */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#D19B9B] font-poppins text-center font-medium text-xl! md:text-2xl  tracking-[4px] uppercase"
        >
          {t("OUR JOURNEY")}
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
              className="mt-2 text-white/70 font-poppins text-base  font-light max-w-4xl leading-relaxed px-6"
            >
              {selectedImage.description}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Bottom Section: Stacked on Mobile, Row on Desktop */}
        <div className="lg:mt-auto mt-4! flex flex-col md:flex-row items-center md:items-end justify-between gap-8 w-full">
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
              {t("Book Appointment")}
            </button>
          </motion.div>

          {/* Thumbnails & Navigation */}
          <div className="w-full md:w-auto max-w-[90vw] md:max-w-[400px] lg:max-w-[600px] flex flex-col gap-4">
            {/* Navigation Buttons */}
            <div className="flex justify-center md:justify-end gap-3 px-2">
              <button
                onClick={scrollPrev}
                className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
                aria-label="Previous slide"
              >
                <ChevronRight size={20} />
              </button>
              <button
                onClick={scrollNext}
                className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
                aria-label="Next slide"
              >
                <ChevronLeft size={20} />
              </button>
            </div>

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