import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function BeforeAfterBanner({ banner }) {
  const { t, i18n } = useTranslation();
  // console.log("banner", banne);

  // Safely grab current language key
  const lang = i18n.language?.startsWith("ar")
    ? "ar"
    : i18n.language?.startsWith("sk")
      ? "sk"
      : "en";

  // Dynamic Content Resolution with fallback values
  const subtitle = banner ? banner.subtitle : t("Clinical Excellence"); // Default Subtitle

  const title = banner ? banner.title : t("Real Results"); // Default Title

  const description = banner
    ? banner.description
    : t(
        "Explore our gallery of real transformations and clinical success stories.",
      ); // Default Description

  const bgImage = banner?.image_url || "/SHAHD-IMAGE/aboutImg9.webp";

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#2d2020]">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />

      {/* Content Container */}
      <div className="relative text-center z-10 px-6 max-w-4xl">
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "10px" }}
          animate={{ opacity: 0.8, letterSpacing: "4px" }}
          className="text-[11px] uppercase text-white mb-6 font-bold"
        >
          {subtitle}
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-4xl sm:text-5xl text-white font-light leading-tight"
        >
          {title}
        </motion.h1>

        {/* Description */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-white/80 max-w-xl mx-auto text-sm sm:text-base leading-relaxed mt-6"
          >
            {description}
          </motion.p>
        )}
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 w-full left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L1440 120L1440 0C1440 0 1140 120 720 120C300 120 0 0 0 0L0 120Z"
            fill="#fffcfb"
          />
        </svg>
      </div>
    </section>
  );
}
