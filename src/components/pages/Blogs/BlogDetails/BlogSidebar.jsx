"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Share2, ArrowRight, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function BlogSidebar({ blog, relatedBlogs }) {
  const { t } = useTranslation();
  return (
    <aside className="lg:col-span-4">
      <div className="sticky top-32 space-y-12">
        
        {/* Related reading block */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          className="p-10 rounded-[3.5rem] bg-white shadow-2xl shadow-[#DDB2B5]/10 border border-[#DDB2B5]/5"
        >
          <h3 className="text-2xl font-light text-primary mb-10 flex items-center gap-4">
            <span className="w-10 h-[1px] bg-primary" />
            {t('Reading List')}
          </h3>
          
          <div className="space-y-10">
            {relatedBlogs.map((related, index) => (
              <motion.div
                key={related.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/blogs/${related.id}`} className="group flex gap-6 items-center">
                  <div className="relative w-24 h-24 shrink-0 rounded-2xl overflow-hidden shadow-lg">
                    <Image 
                       src={related.img} 
                       fill 
                       className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                       alt={related.title} 
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[10px] text-[#DDB2B5] font-bold uppercase tracking-[0.2em]">
                      {t(related.category)}
                    </span>
                    <h4 className="text-base font-light text-[#414141] group-hover:text-[#7189A2] transition-colors line-clamp-2 leading-snug font-poppins">
                      {t(related.title)}
                    </h4>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* <div className="mt-12 pt-10 border-t border-gray-100">
            <button className="w-full py-5 rounded-full bg-[#FFF9F7] text-[#7189A2] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#DDB2B5] hover:text-white transition-all duration-500 flex items-center justify-center gap-3">
              Share Experience <Share2 className="w-4 h-4" />
            </button>
          </div> */}
        </motion.div>

        {/* Dynamic CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="p-12 rounded-[3.5rem] bg-[#7189A2] text-white relative overflow-hidden group shadow-2xl shadow-[#7189A2]/20"
        >
          {/* Abstract background shapes */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-[#DDB2B5]/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
          
          <div className="relative z-10 text-center">
            <User className="w-12 h-12 mx-auto mb-8 opacity-40" />
            <h4 className="text-3xl font-light mb-4 leading-tight">{t('Start Your Aesthetic Journey')}</h4>
            <p className="text-white/70 text-sm font-light mb-10 font-poppins leading-relaxed">
              {t('Experience the perfect blend of medical precision and artistic enhancement with Dr. Shahd Award.')}
            </p>
            <Link 
              href="/booking" 
              className="inline-flex items-center gap-4 px-10 py-5 bg-white text-[#7189A2] rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#DDB2B5] hover:text-white transition-all shadow-xl"
            >
              {t('Booking')} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

      </div>
    </aside>
  );
}
