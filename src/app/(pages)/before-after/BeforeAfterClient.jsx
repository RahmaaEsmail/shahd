"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Loading from "@/app/loading";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import BeforeAfterBanner from "../../../components/pages/BeforeAfter/BeforeAfterBanner";
import BeforeAfterFeatureSection from "../../../components/pages/BeforeAfter/BeforeAfterFeatureSection";
import { useBeforeAfter } from "@/hooks/before-after/useBeforeAfter";

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
            className="object-fill"
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

function CircularGallerySection({ filtered, mappedCases, setActiveCase }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

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

  const handleCaseClick = (item) => {
    const originalIndex = mappedCases.findIndex((c) => c.id === item.id);
    if (originalIndex !== -1) {
      setActiveCase(originalIndex);
      const element = document.getElementById("featured-before-after");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div className="relative w-full py-6">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={24}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true, el: ".custom-swiper-pagination" }}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        breakpoints={{
          640: { slidesPerView: 1.5, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
        }}
        loop={filtered.length > 2}
        className="before-after-swiper !pb-14"
      >
        {filtered.map((item) => (
          <SwiperSlide key={item.id}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleCaseClick(item)}
              className="bg-white rounded-[2rem] border border-[#f4e7e8] overflow-hidden p-4 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full group"
            >
              {/* Images Container */}
              <div className="grid grid-cols-2 gap-2 h-48 md:h-56 relative rounded-[1.5rem] overflow-hidden mb-4">
                {/* Before Image */}
                <div className="relative h-full w-full bg-[#fdf2f0] overflow-hidden">
                  {item.beforeImg ? (
                    <Image
                      src={item.beforeImg}
                      alt={`${item.title} before`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 300px"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-primary/30 text-xs font-bold uppercase tracking-wider">
                      {t("Before")}
                    </div>
                  )}
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-secondary shadow-sm">
                    {t("Before")}
                  </span>
                </div>

                {/* After Image */}
                <div className="relative h-full w-full bg-[#fdf2f0] overflow-hidden">
                  {item.afterImg ? (
                    <Image
                      src={item.afterImg}
                      alt={`${item.title} after`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 300px"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-primary/30 text-xs font-bold uppercase tracking-wider">
                      {t("After")}
                    </div>
                  )}
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-[#ddb2b5] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                    {t("After")}
                  </span>
                </div>
              </div>

              {/* Text / Info Details */}
              <div className="flex flex-col flex-grow text-start">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="bg-primary/10 text-primary border-none text-[10px] tracking-[2px] font-bold uppercase px-3 py-1 rounded-full">
                    {t(item.category)}
                  </span>
                  {item.sessions && (
                    <span className="bg-secondary/10 text-secondary border-none text-[10px] tracking-[1.5px] font-bold uppercase px-3 py-1 rounded-full">
                      {item.sessions}
                    </span>
                  )}
                </div>

                <h4 className="font-main text-lg md:text-xl font-normal text-primary line-clamp-1 mb-2 group-hover:text-secondary transition-colors duration-300">
                  {t(item.title)}
                </h4>
                <p className="text-xs text-text font-light leading-relaxed line-clamp-2">
                  {t(item.description)}
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Swiper Controls (Navigation & Pagination) */}
      <div className="absolute top-[50%] translate-y-[-50%] left-0 right-0 z-50  w-full  px-2">
        {/* <div className="custom-swiper-pagination !w-auto flex gap-1.5" /> */}

        <div className="flex items-center w-full! justify-between gap-3">
          <button className="custom-swiper-button-prev w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center  bg-secondary text-white transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none">
            <ChevronLeft size={18} />
          </button>
          <button className="custom-swiper-button-next w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center  bg-secondary text-white transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <style jsx global>{`
        .before-after-swiper .swiper-pagination-bullet {
          background: #ddb2b5;
          opacity: 0.4;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }
        .before-after-swiper .swiper-pagination-bullet-active {
          background: #7189a2;
          opacity: 1;
          width: 20px;
          border-radius: 4px;
        }
      `}</style>
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
  const results = beforeAfterData?.data?.results;

  const mappedCases = useMemo(() => {
    if (!results || results.length === 0) {
      return CASES;
    }
    return results.map((item) => ({
      id: item.id,
      category: item.type || "",
      title: item.title || "",
      description: item.description || "",
      beforeImg: item.before_image_url || "",
      afterImg: item.after_image_url || "",
      sessions: item.sessions ? `${item.sessions} ${t("Sessions")}` : "",
    }));
  }, [results, t]);

  const categories = useMemo(() => {
    const uniqTypes = Array.from(
      new Set(mappedCases.map((item) => item.category).filter(Boolean)),
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
            mappedCases={mappedCases}
            setActiveCase={setActiveCase}
          />
        </div>
      </section>
    </div>
  );
}
