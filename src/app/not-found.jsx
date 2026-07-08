"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar")
    ? "ar"
    : i18n.language?.startsWith("sk")
      ? "sk"
      : i18n.language?.startsWith("de")
        ? "de"
        : "en";

  const translations = {
    en: {
      title: "Page Not Found",
      subtitle: "Oops! The page you are looking for does not exist.",
      description:
        "It might have been moved, deleted, or perhaps the URL is incorrect.",
      buttonHome: "Back to Home",
      buttonBack: "Go Back",
    },
    ar: {
      title: "الصفحة غير موجودة",
      subtitle: "عذراً! الصفحة التي تبحث عنها غير موجودة.",
      description: "ربما تم نقلها، حذفها، أو قد يكون عنوان الرابط غير صحيح.",
      buttonHome: "العودة للرئيسية",
      buttonBack: "الرجوع للخلف",
    },
    de: {
      title: "Seite nicht gefunden",
      subtitle: "Oops! Die gesuchte Seite existiert nicht.",
      description:
        "Sie wurde möglicherweise verschoben, gelöscht oder die URL ist falsch.",
      buttonHome: "Zurück zur Startseite",
      buttonBack: "Zurück",
    },
    sk: {
      title: "Stránka nebola nájdená",
      subtitle: "Hups! Stránka, ktorú hľadáte, neexistuje.",
      description:
        "Mohla byť presunutá, odstránená alebo je URL adresa nesprávna.",
      buttonHome: "Späť na domov",
      buttonBack: "Vrátiť sa",
    },
  };

  const t = translations[lang] || translations.en;
  const isRtl = lang === "ar";

  const handleBack = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };

  return (
    <div className="relative min-h-[70vh] flex flex-col justify-center items-center px-4 overflow-hidden py-16 bg-radial from-slate-50 via-white to-slate-100/50 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900/50">
      {/* Decorative background blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#ddb2b5]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 bg-[#7189a2]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center max-w-xl mx-auto flex flex-col items-center">
        {/* Animated 404 text */}
        {/* <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative select-none"
        >
          <h1 className="text-[120px] md:text-[180px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#ddb2b5] via-[#7189a2] to-[#ddb2b5] animate-pulse">
            404
          </h1>
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, -2, 2, 0]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-white dark:bg-zinc-800 text-xs md:text-sm font-semibold py-1 px-3 rounded-full shadow-md border border-[#ddb2b5]/30 text-[#7189a2] dark:text-[#ddb2b5] rotate-12"
          >
            Not Found
          </motion.div>
        </motion.div> */}
        <img src="/SHAHD-IMAGE/1.png" />

        {/* Text Details */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 space-y-4"
          dir={isRtl ? "rtl" : "ltr"}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 dark:text-zinc-100 tracking-tight">
            {t.title}
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base max-w-md mx-auto leading-relaxed">
            {t.description}
          </p>
        </motion.div> */}

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={`flex flex-col sm:flex-row gap-4 mt-5 justify-center w-full sm:w-auto ${isRtl ? "flex-row-reverse" : ""}`}
        >
          <Button
            onClick={handleBack}
            variant="outline"
            className="border-zinc-300 font-poppins dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all font-medium py-5 px-6 gap-2"
          >
            {isRtl ? (
              <ArrowLeft className="rotate-180" size={18} />
            ) : (
              <ArrowLeft size={18} />
            )}
            {t.buttonBack}
          </Button>

          <Button
            asChild
            className="bg-gradient-to-r font-poppins from-[#ddb2b5] to-[#7189a2] hover:opacity-90 text-white shadow-lg shadow-blue-500/10 font-medium py-5 px-6 gap-2 border-0 cursor-pointer"
          >
            <Link href="/">
              <Home size={18} />
              {t.buttonHome}
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
