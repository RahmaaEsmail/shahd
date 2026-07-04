"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Loading from "@/app/loading";

import BeforeAfterBanner from "../../../components/pages/BeforeAfter/BeforeAfterBanner";
import BeforeAfterFeatureSection from "../../../components/pages/BeforeAfter/BeforeAfterFeatureSection";
import {
  useBeforeAfter,
} from "@/hooks/before-after/useBeforeAfter";

/**
 * IMPORTANT:
 * Change this path based on where you placed React Bits CircularGallery.
 *
 * Example paths:
 * "@/components/CircularGallery"
 * "@/components/react-bits/CircularGallery"
 * "../../../components/CircularGallery/CircularGallery"
 */
const CircularGallery = dynamic(() => import("@/components/CircularGallery"), {
  ssr: false,
});

const CASES = [
  {
    id: 1,
    category: "Nose",
    title: "Non-Surgical Nose Reshaping",
    description:
      "Achieved a balanced and natural facial profile with minimal downtime. Using advanced fillers to reshape without surgery.",
    beforeImg:
      "/SHAHD-IMAGE/homebefore/360192f749c1a01a3084ceeb2712b040de2415a4.webp",
    afterImg:
      "/SHAHD-IMAGE/homebefore/0402d70a66c38d6594b9a42587cf70e03e81233f.webp",
  },
  {
    id: 2,
    category: "Lips",
    title: "Natural Lip Enhancement",
    description:
      "Natural-looking volume and definition for a more youthful smile. Our specialized technique ensures symmetrical and plump lips.",
    beforeImg:
      "/SHAHD-IMAGE/homebefore/51d5b6c661c3da2fa95e8b494d25ea05fa35334b.webp",
    afterImg: "/SHAHD-IMAGE/homebefore/mainImg.webp",
  },
  {
    id: 3,
    category: "Skin",
    title: "Facial Contouring",
    description:
      "Defined cheekbones and jawline for a sculpted appearance. Enhance your natural facial structure with professional care.",
    beforeImg: "/SHAHD-IMAGE/homebefore/mainImg.webp",
    afterImg:
      "/SHAHD-IMAGE/homebefore/51d5b6c661c3da2fa95e8b494d25ea05fa35334b.webp",
  },
  {
    id: 4,
    category: "Hair",
    title: "Hair Restoration",
    description:
      "Advanced hair therapy for natural and dense hair growth. Regain your confidence with our high-success treatments.",
    beforeImg:
      "/SHAHD-IMAGE/homebefore/360192f749c1a01a3084ceeb2712b040de2415a4.webp",
    afterImg: "/SHAHD-IMAGE/homebefore/mainImg.webp",
  },
  {
    id: 5,
    category: "Skin",
    title: "Botox Treatment",
    description:
      "Smooth out fine lines and wrinkles for a refreshed look. Fast and effective results with minimal downtime.",
    beforeImg: "/SHAHD-IMAGE/homebefore/mainImg.webp",
    afterImg:
      "/SHAHD-IMAGE/homebefore/0402d70a66c38d6594b9a42587cf70e03e81233f.webp",
  },
  {
    id: 6,
    category: "Skin",
    title: "Laser Therapy",
    description:
      "Precise laser treatments for various skin and hair concerns. State-of-the-art technology for optimal patient comfort.",
    beforeImg:
      "/SHAHD-IMAGE/homebefore/51d5b6c661c3da2fa95e8b494d25ea05fa35334b.webp",
    afterImg:
      "/SHAHD-IMAGE/homebefore/360192f749c1a01a3084ceeb2712b040de2415a4.webp",
  },
];

export function PlaceholderImg({
  src = "",
  label = "",
  alt = "",
  className = "",
  style = {},
}) {
  const hasImage = Boolean(src);

  return (
    <div
      style={style}
      className={`relative flex items-center justify-center overflow-hidden border border-primary/5 bg-[#fdf2f0] text-[10px] font-bold uppercase tracking-widest text-primary/30 ${className}`}
    >
      {hasImage ? (
        <>
          <Image
            src={src}
            alt={alt || label || "Before after image"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 900px"
          />

          {label && (
            <span className="absolute left-4 top-4 z-20 rounded-full bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[2px] text-primary backdrop-blur">
              {label}
            </span>
          )}
        </>
      ) : (
        <span>{label}</span>
      )}
    </div>
  );
}

function CircularGallerySection({ filtered, setActiveCase }) {
  const { t } = useTranslation();
  const galleryKey = filtered.map((item) => item.id).join("-");

  const galleryItems = useMemo(() => {
    return filtered.map((item) => ({
      image: item.afterImg || item.beforeImg,
      text: t(item.title),
    }));
  }, [filtered]);

  if (!filtered.length) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-20 text-center text-[#a08080]"
      >
        <p className="font-main text-3xl font-light text-primary">
          {t("No cases found")}
        </p>
        <p className="mt-2 text-sm">{t("Try selecting another category.")}</p>
      </motion.div>
    );
  }

  return (
    <div className="relative  w-fullbg-transparent! -mt-9!">
      <div className="relative w-full h-[430px] overflow-hidden rounded-[2.5rem]   bg-transparent sm:h-[520px] lg:h-[500px]">
        <div className="pointer-events-none absolute inset-0 z-10" />

        <CircularGallery
          key={galleryKey}
          items={galleryItems}
          bend={1}
          textColor="#ddb2b5"
          borderRadius={0.05}
          scrollSpeed={2}
          scrollEase={0.05}
        />
      </div>
    </div>
  );
}

export default function BeforeAfterPage() {
  const [activeCase, setActiveCase] = useState(0);
  const [filterCat, setFilterCat] = useState("All");
  const { t, i18n } = useTranslation();
  const { data: beforeAfterData, isLoading: is_loading_before_after_data } =
    useBeforeAfter();

  const lang = i18n.language?.startsWith("ar")
    ? "ar"
    : i18n.language?.startsWith("sk")
      ? "sk"
      : "en";

  const banner = beforeAfterData?.data?.banner;
  const results = beforeAfterData?.data?.results || [];

  const mappedCases = useMemo(() => {
    if (!results || results.length === 0) {
      return CASES;
    }
    return results.map((item) => ({
      id: item.id,
      category: item[`type_${lang}`] || item.type_en || "",
      title: item[`title_${lang}`] || item.title_en || "",
      description: item[`description_${lang}`] || item.description_en || "",
      beforeImg: item.before_image_url || "",
      afterImg: item.after_image_url || "",
      sessions: item.sessions ? `${item.sessions} ${t("Sessions")}` : "",
    }));
  }, [results, lang, t]);

  const categories = useMemo(() => {
    const uniqTypes = Array.from(
      new Set(mappedCases.map((item) => item.category).filter(Boolean))
    );
    return ["All", ...uniqTypes];
  }, [mappedCases]);

  const filtered = useMemo(() => {
    return filterCat === "All"
      ? mappedCases
      : mappedCases.filter((caseItem) => caseItem.category === filterCat);
  }, [filterCat, mappedCases]);

  const safeActiveCase = activeCase >= mappedCases.length ? 0 : activeCase;

  if (is_loading_before_after_data) return <Loading />;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fffcfb] font-sans">
      <BeforeAfterBanner banner={banner} />

      <div id="featured-before-after">
        <BeforeAfterFeatureSection
          activeCase={safeActiveCase}
          CASES={mappedCases}
          setActiveCase={setActiveCase}
        />
      </div>

      <section className="relative w-full overflow-hidden border-t border-primary/5  py-10">
        <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-[#e8a4a8]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-full px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-4 flex flex-col items-center justify-between gap-2 text-center"
          >
            <p className="text-base font-bold uppercase tracking-[4px] text-secondary">
              {t("Real Results")}
            </p>

            <h3 className="font-main text-4xl font-light text-primary md:text-5xl">
              {t("Explore All Cases")}
            </h3>

            <p className="max-w-2xl text-sm leading-relaxed text-text md:text-base">
              {t(
                "Browse transformations in a smooth circular gallery. Select a case below to open it in the featured comparison.",
              )}
            </p>

            <div className="mt-4 flex max-w-full flex-wrap justify-center gap-2 rounded-[2rem] border border-primary/5 bg-[#fff9f7] p-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilterCat(cat)}
                  className={`rounded-full px-5 py-2 text-[14px] font-bold uppercase tracking-widest transition-all md:px-6 ${
                    filterCat === cat
                      ? "bg-primary text-white shadow-md"
                      : "text-[#a08080] hover:bg-white hover:text-primary"
                  }`}
                >
                  {t(cat)}
                </button>
              ))}
            </div>
          </motion.div>

          <CircularGallerySection
            filtered={filtered}
            setActiveCase={setActiveCase}
          />
        </div>
      </section>
    </div>
  );
}
