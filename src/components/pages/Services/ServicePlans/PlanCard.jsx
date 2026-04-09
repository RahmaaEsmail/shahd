"use client";
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { cn } from '../../../../lib/utils';

export default function PlanCard({ shouldScale, plan  , setHoveredCard , index }) {
  return (
    <motion.div
      key={plan.id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
      onHoverStart={() => setHoveredCard(plan.id)}
      onHoverEnd={() => setHoveredCard(null)}
      style={shouldScale ? { boxShadow: "0px 0px 150px 10px #F7A5A5" } : {}}
      className={cn(
        'bg-white p-8 border rounded-[30px] border-[#FEF2F2] shadow-2xl relative transition-all duration-300',
        shouldScale && 'scale-100 md:scale-105 ring-2 ring-[#DDB2B5] shadow-[#DDB2B5]/20',
        !shouldScale && 'scale-100'
      )}
    >
      {/* Plan Name */}
      <div className="flex gap-4 items-center mb-4">
        <div className="relative w-12 h-12 md:w-14 md:h-14 shrink-0">
          <Image src={plan.img} fill alt={plan.name} className="object-contain" />
        </div>
        <h3 className='text-text text-xl md:text-2xl lg:text-[32px] font-normal leading-tight'>{plan.name}</h3>
      </div>

      {/* Price */}
      <div className='mb-6 flex items-baseline gap-2'>
        <span className='text-[#2D2D2D] text-3xl md:text-4xl lg:text-[40px] font-poppins font-semibold'>{plan.price}</span>
        <span className='text-[#9A9A9A] text-lg md:text-2xl font-normal font-poppins uppercase tracking-wider'>USD</span>
      </div>

      {/* Description */}
      <p className='text-[#9A9A9A] text-sm md:text-base font-poppins lowercase mb-6 leading-relaxed'>
        {plan.description}
      </p>

      {/* Features List */}
      <ul className='space-y-4 mb-8 flex-1'>
        {plan.features.map((feature, idx) => (
          <li key={idx} className='flex items-start gap-3'>
            <div className='bg-[#DDB2B5] w-5 h-5 md:w-6 md:h-6 rounded-full flex shrink-0 justify-center items-center mt-0.5'>
              <Check color="#fff" size={14} className='font-bold' />
            </div>
            <span className='text-[#2D2D2D] text-sm md:text-base font-normal font-poppins leading-tight'>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Get Started Button */}
      <button className={cn(
        'w-full text-xl md:text-2xl lg:text-[32px] text-white py-4 rounded-full font-medium transition-all duration-300 uppercase tracking-wide',
        shouldScale
          ? 'bg-[#DDB2B5] hover:bg-[#c9a0a3] shadow-lg shadow-[#DDB2B5]/30'
          : 'bg-white text-primary hover:bg-primary hover:text-white border border-primary'
      )}>
        GET STARTED
      </button>
    </motion.div>
  )
}
