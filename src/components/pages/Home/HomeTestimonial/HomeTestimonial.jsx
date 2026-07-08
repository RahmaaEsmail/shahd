"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import HomeTestimonialSwiper from "./HomeTestimonialSwiper";

export default function HomeTestimonial({ data }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar")
    ? "ar"
    : i18n.language?.startsWith("sk")
      ? "sk"
      : "en";

  const [activeIndex, setActiveIndex] = useState(0);

  const staticTestimonials = [
    {
      id: 1,
      name: t("Layla Kamal"),
      treatment: t("Treatment: Lip Fillers"),
      quote: t(
        "I was nervous at first, but Dr. Shahd made the whole process so easy. My lips look natural and beautiful — exactly what I wanted!",
      ),
      image:
        "/SHAHD-IMAGE/HomeTestioniai/51d5b6c661c3da2fa95e8b494d25ea05fa35334b.webp",
      sideImage:
        "/SHAHD-IMAGE/HomeTestioniai/51d5b6c661c3da2fa95e8b494d25ea05fa35334b.webp",
      rating: 5,
    },
    {
      id: 2,
      name: t("Sarah Ahmed"),
      treatment: t("Treatment: Skin Rejuvenation"),
      quote: t(
        "The results are absolutely stunning. My skin has never felt smoother or looked brighter. The clinic atmosphere is so calming.",
      ),
      image:
        "/SHAHD-IMAGE/HomeTestioniai/51d5b6c661c3da2fa95e8b494d25ea05fa35334b.webp",
      sideImage:
        "/SHAHD-IMAGE/HomeTestioniai/51d5b6c661c3da2fa95e8b494d25ea05fa35334b.webp",
      rating: 5,
    },
    {
      id: 3,
      name: t("Mona Khalil"),
      treatment: t("Treatment: Facial Contouring"),
      quote: t(
        "Professional, clean, and the results speak for themselves. Dr. Shahd has a true artist's eye for aesthetics.",
      ),
      image:
        "/SHAHD-IMAGE/HomeTestioniai/0402d70a66c38d6594b9a42587cf70e03e81233f.webp",
      sideImage:
        "/SHAHD-IMAGE/HomeTestioniai/0402d70a66c38d6594b9a42587cf70e03e81233f.webp",
      rating: 5,
    },
    {
      id: 4,
      name: t("Nour Hassan"),
      treatment: t("Treatment: Anti-Wrinkle"),
      quote: t(
        "I feel 10 years younger! The staff was incredibly supportive and answered all my questions. Highly recommended.",
      ),
      image:
        "/SHAHD-IMAGE/HomeTestioniai/0402d70a66c38d6594b9a42587cf70e03e81233f.webp",
      sideImage:
        "/SHAHD-IMAGE/HomeTestioniai/0402d70a66c38d6594b9a42587cf70e03e81233f.webp",
      rating: 5,
    },
  ];

  const testimonials =
    data && data.length > 0
      ? data.map((item) => ({
          id: item.id,
          name: item.reviewer_name || item?.client_name,
          treatment: item.reviewer_type || item?.client_subtitle,
          quote: item.content || item?.review,
          image:
            item.image_url ||
            item?.image ||
            "/SHAHD-IMAGE/HomeTestioniai/51d5b6c661c3da2fa95e8b494d25ea05fa35334b.webp",
          sideImage:
            item.image_url ||
            item?.image ||
            "/SHAHD-IMAGE/HomeTestioniai/51d5b6c661c3da2fa95e8b494d25ea05fa35334b.webp",
          rating: 5,
        }))
      : staticTestimonials;

  const [selectedTestimonial, setSelectedTestimonial] = useState(
    testimonials[0],
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const timeoutRef = useRef(null);

  // Sync selectedTestimonial when API data loads
  useEffect(() => {
    if (testimonials.length > 0) {
      setSelectedTestimonial(testimonials[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Custom navigation handlers
  const handlePrev = () => {
    if (swiperInstance && !isAnimating) {
      setIsAnimating(true);
      swiperInstance.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperInstance && !isAnimating) {
      setIsAnimating(true);
      swiperInstance.slideNext();
    }
  };

  return (
    <section className="relative w-full min-h-[85vh] overflow-hidden font-sans text-slate-800 pb-4">
      {/* Background Gradient & Decor */}
      <div className="absolute inset-0 z-0 bg-linear-to-b from-white via-[#FADADD] to-[#F8E1E3]" />

      {/* Header Content */}
      <div className="relative z-10 container mx-auto px-6 pt-4 pb-2 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl  font-main text-primary leading-[0.95] uppercase">
            {t("Real Transformations")}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-lg"
        >
          <p className="text-lg text-text font-poppins font-light leading-relaxed">
            {t("Before After Desc")}
          </p>
        </motion.div>
      </div>

      {/* Navigation Buttons (Top layout buttons) */}
      {testimonials.length > 1 && (
        <div className="relative flex gap-3  w-fit! px-4 items-center ms-auto z-20">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            className="bg-secondary w-10 h-10 rounded-full text-white flex justify-center items-center hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isAnimating}
          >
            <ChevronLeft color="white" size={30} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="bg-white w-10 h-10 rounded-full text-secondary flex justify-center items-center hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isAnimating}
          >
            <ChevronRight size={30} />
          </motion.button>
        </div>
      )}

      {/* Slider Content Area */}
      <div className="relative z-10 w-full">
        <HomeTestimonialSwiper
          setIsAnimating={setIsAnimating}
          setSwiperInstance={setSwiperInstance}
          setActiveIndex={setActiveIndex}
          setSelectedTestimonial={setSelectedTestimonial}
          selectedTestimonial={selectedTestimonial}
          activeIndex={activeIndex}
          testimonials={testimonials}
          swiperInstance={swiperInstance}
        />
      </div>
    </section>
  );
}
