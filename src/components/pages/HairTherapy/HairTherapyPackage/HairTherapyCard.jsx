"use client";
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { cn } from '../../../../lib/utils';

export default function HairTherapyCard({ shouldScale, plan, setHoveredCard, index }) {
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
        'bg-white p-8 border rounded-[30px] border-primary shadow-2xl relative transition-all duration-300',
        shouldScale && 'scale-100 lg:scale-110 ring-2 ring-primary shadow-primary/20',
        !shouldScale && 'scale-100'
      )}
    >
      {/* Plan Name */}
      <div className="flex gap-[9px] items-center">
        <Image src={plan.img} width={56} height={57} alt={plan.name} />
        <h3 className='text-text text-[32px] font-normal'>{plan.name}</h3>
      </div>

      {/* Price */}
      <div className='my-4 flex items-center gap-[6px]'>
        <span className='text-[#2D2D2D] text-[40px] font-poppins font-medium'>{plan.price}</span>
        <span className='text-[#9A9A9A] text-2xl font-normal font-poppins'>USD</span>
      </div>

      {/* Description */}
      <p className='text-[#9A9A9A] text-base font-poppins lowercase mb-4 leading-relaxed'>
        {plan.description}
      </p>

      {/* Features List */}
      <ul className='space-y-3 mb-8'>
        {plan.features.map((feature, idx) => (
          <li key={idx} className='flex items-center gap-2'>
            <div className='bg-[#DDB2B5] w-6 h-6 rounded-full flex justify-center items-center'>
              <Check color="#fff" size={16} className='font-bold' />
            </div>
            <span className='text-[#2D2D2D] text-base font-normal font-poppins'>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Get Started Button */}
      <button className={cn(
        'w-full text-[32px] text-white py-4 px-5 rounded-full  font-normal transition-all duration-300',
        shouldScale
          ? 'bg-secondary'
          : 'bg-white text-secondary hover:bg-secondary hover:text-white border border-secondary'
      )}>
        GET STARTED
      </button>
    </motion.div>
  )
}
