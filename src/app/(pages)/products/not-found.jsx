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
      title: "Product Not Found",
      subtitle: "Oops! The product you are looking for does not exist.",
      description:
        "It might have been removed, sold out, or perhaps the URL is incorrect.",
      buttonHome: "Back to Home",
      buttonBack: "Go Back",
    },
    ar: {
      title: "المنتج غير موجود",
      subtitle: "عذراً! المنتج الذي تبحث عنه غير موجود.",
      description:
        "ربما تم نقله، نفاد كميته، أو قد يكون عنوان الرابط غير صحيح.",
      buttonHome: "العودة للرئيسية",
      buttonBack: "الرجوع للخلف",
    },
    de: {
      title: "Produkt nicht gefunden",
      subtitle: "Oops! Das gesuchte Produkt existiert nicht.",
      description:
        "Es wurde möglicherweise verschoben, ausverkauft oder die URL ist falsch.",
      buttonHome: "Zurück zur Startseite",
      buttonBack: "Zurück",
    },
    sk: {
      title: "Produkt nebol nájdený",
      subtitle: "Hups! Produkt, ktorý hľadáte, neexistuje.",
      description:
        "Mohol byť presunutý, vypredaný alebo je URL adresa nesprávna.",
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

      <div className="relative z-10 mt-8 text-center max-w-xl mx-auto flex flex-col items-center">
        <img
          src="/SHAHD-IMAGE/not-found-product.png"
          alt="Not Found"
          className="max-w-full animate-bounce h-auto mb-6"
        />

        {/* Text Details */}
        {/* <div className="mt-6 space-y-4" dir={isRtl ? "rtl" : "ltr"}>
          <h2 className="text-2xl font-medium text-zinc-800 dark:text-zinc-100">
            {t.title}
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base max-w-md mx-auto">
            {t.description}
          </p>
        </div> */}

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={`flex flex-col sm:flex-row gap-4 mt-4 justify-center w-full sm:w-auto ${isRtl ? "flex-row-reverse" : ""}`}
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
