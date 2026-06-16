"use client";
import {motion} from 'framer-motion';

import { useTranslation } from 'react-i18next';

export default function AboutContactContent() {
  const { t , i18n} = useTranslation();
  return (
    <motion.div className="flex flex-col mx-auto max-w-7xl text-left">
      <motion.h3 className={`font-bold text-secondary font-poppins text-2xl ${i18n?.language == "ar" ? "text-right":""}`}>
        {t("Contact Us")}
      </motion.h3>

      <motion.p
        className={`text-primary font-normal text-3xl leading-tight ${i18n?.language == "ar" ? "text-right" : ""}`}
      >
        {t("Start Your Glow Journey")}
      </motion.p>

      <motion.p className={`text-text text-base font-poppins leading-8 mt-0 ${i18n?.language == "ar" ? "text-right" :""}`}>
        {t("Contact Desc")}
      </motion.p>
    </motion.div>
  )
}