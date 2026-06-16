import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function BeforeAfterBanner() {
  const { t } = useTranslation();
  return (
   <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#2d2020]">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/SHAHD-IMAGE/aboutImg9.webp')` }}
        />
        <div className="relative text-center z-10 px-6">
          <motion.p 
            initial={{ opacity: 0, letterSpacing: "10px" }}
            animate={{ opacity: 0.8, letterSpacing: "4px" }}
            className="text-[11px] uppercase text-white mb-6 font-bold"
          >
            {t('Clinical Excellence')}
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-6xl md:text-8xl text-white font-light"
          >
            {t('Real')} <em className="italic font-extralight text-primary-foreground/60">{t('Results')}</em>
          </motion.h1>
        </div>
        <div className="absolute bottom-0  w-full">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 120L1440 120L1440 0C1440 0 1140 120 720 120C300 120 0 0 0 0L0 120Z" fill="#fffcfb"/>
            </svg>
        </div>
      </section>

  )
}
