"use client";
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, SlidersHorizontal } from "lucide-react";
import BeforeAfterCard from './BeforeAfterCard';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function BeforeAfterFeatureSection({ activeCase, setActiveCase, CASES }) {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <section className="max-w-7xl mx-auto px-6 py-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-8">
        <motion.div variants={fadeInUp}
        initial="hidden" whileInView="visible" viewport={{ once: false }}>
          <p className="text-[16px] tracking-[4px] uppercase text-secondary font-bold mb-3">{t('Portfolio')}</p>
          <h2 className="font-main text-5xl font-normal text-primary">{t('Transformations')}</h2>
        </motion.div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setActiveCase(prev => (prev === 0 ? CASES.length - 1 : prev - 1))}
            className="p-4 rounded-full border border-primary/10 hover:bg-primary hover:text-white transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="font-serif text-xl text-primary/40">
            {String(activeCase + 1).padStart(2, '0')} <small className="text-sm">/ {CASES.length}</small>
          </span>
          <button
            onClick={() => setActiveCase(prev => (prev === CASES.length - 1 ? 0 : prev + 1))}
            className="p-4 rounded-full border border-primary/10 hover:bg-primary hover:text-white transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <BeforeAfterCard item={CASES[activeCase]} isActive={true} />
    </section>
  )
}
