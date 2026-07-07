"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

export default function HomeBannerSliderContent({ data }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar")
    ? "ar"
    : i18n.language?.startsWith("sk")
      ? "sk"
      : "en";

  const [isHovered, setIsHovered] = useState(false);

  const isValidText = (text) =>
    text && !["en", "ar", "sk", "de"].includes(text.toLowerCase().trim());
  const title =
    data?.video_title?.length > 0
      ? data?.video_title
      : t("Meet Dr. Shahd Awad");
  const description =
    data?.video_description?.length > 0
      ? data?.video_description
      : t("Dr. Shahd Awad Specialist");
  const videoUrl =
    data?.video_url || "https://www.youtube.com/watch?v=your-video-id";
  console.log("video url", videoUrl);
    const thumbnail =
    data?.video_thumbnail_url || "/SHAHD-IMAGE/BannerImage/banner-image-2.webp";

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col h-full items-stretch justify-between gap-3"
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2 className="text-xl sm:text-2xl lg:text-[28px] font-normal tracking-[1px] sm:tracking-[2px] text-[#DDB2B5] uppercase leading-tight">
          {title}
        </h2>
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-[#414141] font-poppins! text-sm sm:text-base lg:text-[18px] font-normal leading-relaxed"
      >
        {description}
      </motion.p>

      {/* Video/Image Card wrapped in Dialog */}
      <Dialog className="">
        <DialogTrigger asChild>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative w-full h-[220px] xs:h-[260px] sm:h-[340px] md:h-[420px] lg:h-74 rounded-[24px] sm:rounded-[40px] overflow-hidden group cursor-pointer"
          >
            <Image
              src={thumbnail}
              alt="Dr. Shahd Awad"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent" />

            {/* Animated overlay on hover */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              className="absolute inset-0 bg-[#DDB2B5]/20"
            />

            {/* Play Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="absolute border border-white/20 bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-lg px-3 sm:px-5 py-2 sm:py-3 rounded-full transition-all duration-300 group/btn"
            >
              <span className="text-md font-normal font-noto! text-white">
                {t("watch video")}
              </span>
              <motion.div
                className="w-5 h-5 rounded-full flex items-center justify-center"
                animate={{
                  scale: isHovered ? [1, 1.1, 1] : 1,
                }}
                transition={{
                  repeat: isHovered ? Infinity : 0,
                  duration: 1.5,
                }}
              >
                <Play className="w-10 h-10 text-secondary fill-secondary ml-0.5" />
              </motion.div>
            </motion.button>
          </motion.div>
        </DialogTrigger>

        <DialogContent className="max-w-4xl! p-0 overflow-hidden bg-black border-none sm:rounded-[20px]">
          {/* Screen reader title (hidden) */}
          <DialogTitle className="sr-only">Video Introduction</DialogTitle>

          <div className="aspect-video w-full">
            <ReactPlayer
              src={videoUrl}
              controls 
              loop
              playing
              muted
              width="100%"
              height="100%"
            />
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}
