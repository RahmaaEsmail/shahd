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

export default function ServicePlanContent() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div
      className='min-h-[90vh] lg:h-[65vh] rounded-br-[40px] lg:rounded-br-[50px] rounded-bl-[40px] lg:rounded-bl-[50px] relative overflow-hidden flex flex-col items-center justify-center'
      style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #DDB2B5 100%)" }}
    >
      {/* Decorative Stars */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className="absolute bottom-0 left-0 w-1/2 h-full md:h-1/2 opacity-60 lg:opacity-100">
          <Image
            src="/images/Services/Frame 1000005622.png"
            fill
            alt="star"
            className='object-contain object-bottom-left'
          />
        </div>
        <div className="absolute bottom-0 right-0  w-1/2 h-3/4 md:h-1/2 opacity-60 lg:opacity-100">
          <Image
            src="/images/Services/Frame 1000005621.png"
            fill
            alt="star"
            className='object-contain object-bottom-right'
          />
        </div>
      </div>

      {/* Content */}
      <div className='relative z-10 pb-10 px-4'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className='text-center max-w-7xl mx-auto'
        >
          <h2 className='text-secondary text-3xl md:text-5xl lg:text-[64px] font-bold mb-6 uppercase'>
            CHOOSE THE PERFECT <br className='hidden md:block' /> PLAN FOR YOU
          </h2>
          <p className='text-secondary max-w-2xl mx-auto text-base md:text-lg font-poppins'>
            Simple, clear, and made for every beauty need. Find the plan that matches your goals and your glow.
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
