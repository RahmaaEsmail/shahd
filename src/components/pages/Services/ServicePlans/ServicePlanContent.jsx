"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { cn } from '../../../../lib/utils';

const btns = [
  {
    id: 1,
    name: "Monthly"
  },
  {
    id: 2,
    name: "Yearly"
  }
]

import { useTranslation } from 'react-i18next';

export default function ServicePlanContent() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(1);

  const btns = [
    {
      id: 1,
      name: t("Monthly")
    },
    {
      id: 2,
      name: t("Yearly")
    }
  ]

  return (
    <div
      className='min-h-[70vh] lg:h-[45vh] rounded-br-[40px] lg:rounded-br-[50px] rounded-bl-[40px] lg:rounded-bl-[50px] relative overflow-hidden flex flex-col items-center justify-center'
      style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #DDB2B5 100%)" }}
    >
      {/* Decorative Stars */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className="absolute bottom-0 left-0 w-1/2 h-full md:h-1/2 opacity-60 lg:opacity-100">
          <Image
            src="/SHAHD-IMAGE/Services/Frame 1000005622.webp"
            fill
            alt="star"
            className='object-contain object-bottom-left'
          />
        </div>
        <div className="absolute bottom-0 right-0  w-1/2 h-3/4 md:h-1/2 opacity-60 lg:opacity-100">
          <Image
            src="/SHAHD-IMAGE/Services/Frame 1000005621.webp"
            fill
            alt="star"
            className='object-contain object-bottom-right'
          />
        </div>
      </div>

      {/* Content */}
      <div className='relative z-10 pb-5 px-4'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className='text-center  w-full main-container mx-auto'
        >
          <h2 className='text-secondary w-full text-3xl font-bold mb-3 uppercase'>
            {t("CHOOSE THE PERFECT PLAN")}
          </h2>
          <p className='text-secondary max-w-3xl  mx-auto text-base font-poppins'>
            {t("Plan Content Desc")}
          </p>
        </motion.div>

        {/* Toggle Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='flex justify-center mt-8'
        >
          <div className='inline-flex rounded-full border border-[#4D3E3F]/20 p-1 bg-white/50 backdrop-blur-sm'>
            {btns.map((btn) => (
              <button
                key={btn.id}
                onClick={() => setActiveTab(btn.id)}
                className={cn(
                  'px-8 py-3 rounded-full text-lg font-medium transition-all duration-300',
                  activeTab === btn.id
                    ? 'bg-secondary text-white'
                    : 'text-secondary hover:bg-secondary/10'
                )}
              >
                {btn.name}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>

  )
}
