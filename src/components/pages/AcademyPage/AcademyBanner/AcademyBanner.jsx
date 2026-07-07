"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
export default function AcademyBanner({ data }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar")
    ? "ar"
    : i18n.language?.startsWith("sk")
      ? "sk"
      : "en";

  const title = data?.title;
  const description = data?.description || t("Academy Banner Desc");
  const bgImage =
    data?.image_url || "/SHAHD-IMAGE/Academy/Frame 1000005536.webp";

  return (
    <motion.div
      initial={{ opacity: 0, y: -24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.4, ease: "easeIn" }}
      className="min-h-[90vh] relative overflow-hidden"
    >
      <Image
        src={bgImage}
        fill
        className="object-cover z-0"
        alt="Academy banner image"
        priority
      />
      <div className="absolute inset-0 bg-black/20 z-1" />

      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4 py-10 lg:py-0">
        <div className="main-container w-full flex flex-col justify-center lg:justify-between h-full lg:h-[80%] gap-10 lg:gap-0">
          <div className="flex flex-col gap-4 lg:gap-6  mt-15">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex w-full lg:max-w-6xl mx-auto flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-2 lg:gap-0 leading-none"
            >
              {title ? (
                <h1 className="font-normal text-white text-4xl sm:text-5xl lg:text-7xl text-center w-full">
                  {title}
                </h1>
              ) : (
                <>
                  <h1 className="font-normal text-white   text-5xl md:text-7xl">
                    {t("Empowering")}
                  </h1>
                  <h1 className="font-normal text-white text-5xl md:text-7xl">
                    {t("next generation")}
                  </h1>
                </>
              )}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-normal text-white/90 mt-2 text-center font-poppins text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
            >
              {description}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-fit mx-auto mt-6! lg:mt-auto mb-3 group cursor-pointer"
          >
            <div
              className="absolute -inset-0.5 rounded-full opacity-80 group-hover:opacity-100 transition-opacity"
              style={{
                background: "linear-gradient(90deg, #D19B9B 0%, #B6C7D6 100%)",
                boxShadow: "0px 4px 60px rgba(255, 255, 255, 0.2)",
              }}
            />
            <button className="relative bg-white w-[220px] md:w-[252px] rounded-full px-8 py-4 text-primary font-bold text-base md:text-lg hover:bg-gray-50 transition-colors">
              {t("Explore our courses")}
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
