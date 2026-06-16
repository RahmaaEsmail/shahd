// "use client";
// import React, { useState } from 'react'
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { Check } from 'lucide-react';
// import { cn } from '../../../../lib/utils';

// export default function PlanCard({ shouldScale, plan  , setHoveredCard , index }) {
//   return (
//     <motion.div
//       key={plan.id}
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: false }}
//       transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
//       onHoverStart={() => setHoveredCard(plan.id)}
//       onHoverEnd={() => setHoveredCard(null)}
//       style={shouldScale ? { boxShadow: "0px 0px 150px 10px #F7A5A5" } : {}}
//       className={cn(
//         'bg-white p-8 border rounded-[30px] border-[#FEF2F2] shadow-2xl relative transition-all duration-300',
//         shouldScale && 'scale-100 md:scale-105 ring-2 ring-[#DDB2B5] shadow-[#DDB2B5]/20',
//         !shouldScale && 'scale-100'
//       )}
//     >
//       {/* Plan Name */}
//       <div className="flex gap-4 items-center mb-4">
//         <div className="relative w-12 h-12 md:w-14 md:h-14 shrink-0">
//           <Image src={plan.img} fill alt={plan.name} className="object-contain" />
//         </div>
//         <h3 className='text-text text-xl md:text-2xl lg:text-[32px] font-normal leading-tight'>{plan.name}</h3>
//       </div>

//       {/* Price */}
//       <div className='mb-6 flex items-baseline gap-2'>
//         <span className='text-[#2D2D2D] text-3xl md:text-4xl lg:text-[40px] font-poppins font-semibold'>{plan.price}</span>
//         <span className='text-[#9A9A9A] text-lg md:text-2xl font-normal font-poppins uppercase tracking-wider'>USD</span>
//       </div>

//       {/* Description */}
//       <p className='text-[#9A9A9A] text-sm md:text-base font-poppins lowercase mb-6 leading-relaxed'>
//         {plan.description}
//       </p>

//       {/* Features List */}
//       <ul className='space-y-4 mb-8 flex-1'>
//         {plan.features.map((feature, idx) => (
//           <li key={idx} className='flex items-start gap-3'>
//             <div className='bg-[#DDB2B5] w-5 h-5 md:w-6 md:h-6 rounded-full flex shrink-0 justify-center items-center mt-0.5'>
//               <Check color="#fff" size={14} className='font-bold' />
//             </div>
//             <span className='text-[#2D2D2D] text-sm md:text-base font-normal font-poppins leading-tight'>{feature}</span>
//           </li>
//         ))}
//       </ul>

//       {/* Get Started Button */}
//       <button className={cn(
//         'w-full text-xl md:text-2xl lg:text-[32px] text-white py-4 rounded-full font-medium transition-all duration-300 uppercase tracking-wide',
//         shouldScale
//           ? 'bg-[#DDB2B5] hover:bg-[#c9a0a3] shadow-lg shadow-[#DDB2B5]/30'
//           : 'bg-white text-primary hover:bg-primary hover:text-white border border-primary'
//       )}>
//         GET STARTED
//       </button>
//     </motion.div>
//   )
// }

"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { cn } from '../../../../lib/utils';
import { useTranslation } from 'react-i18next';

export default function PlanCard({ shouldScale, plan, setHoveredCard, index }) {
  const { t } = useTranslation();
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
        // Reduced padding on mobile (p-5) to save space, keeping p-8 for desktop
        'bg-white p-5  border rounded-[24px] md:rounded-[30px] border-[#FEF2F2] shadow-2xl relative transition-all duration-300 flex flex-col justify-between h-full',
        shouldScale && 'scale-100 md:scale-105 ring-2 ring-[#DDB2B5] shadow-[#DDB2B5]/20 z-10',
        !shouldScale && 'scale-100'
      )}
    >
      {/* Plan Name */}
      <div className="flex gap-3  items-center mb-3">
        <div className="relative w-10 h-10 md:w-14 md:h-14 shrink-0">
          <Image src={plan.img} fill alt={plan.name} className="object-contain" />
        </div>
        <h3 className='text-text text-lg md:text-2xl  font-normal leading-tight'>
          {plan.name}
        </h3>
        {plan.popular && (
          <div className="bg-secondary text-white text-[10px] md:text-xs px-2 py-0.5 rounded-full">
            {t("Popular")}
          </div>
        )}
      </div>

      {/* Price */}
      <div className='mb-4 flex items-baseline gap-1.5 md:gap-2'>
        <span className='text-[#2D2D2D] text-2xl md:text-4xl font-poppins font-semibold'>
          {plan.price}
        </span>
        <span className='text-[#9A9A9A] text-sm md:text-xl font-normal font-poppins uppercase tracking-wider'>
          USD
        </span>
      </div>

      {/* Description */}
      <p className='text-[#9A9A9A] text-xs md:text-base font-poppins lowercase mb-3 leading-relaxed'>
        {plan.description}
      </p>

      {/* Features List */}
      <ul className='space-y-2  mb-4 flex-1'>
        {plan.features.map((feature, idx) => (
          <li key={idx} className='flex items-start gap-2.5 md:gap-3'>
            <div className='bg-[#DDB2B5] w-4 h-4 md:w-6 md:h-6 rounded-full flex shrink-0 justify-center items-center mt-0.5'>
              <Check color="#fff" size={10} className='md:hidden' />
              <Check color="#fff" size={14} className='hidden md:block font-bold' />
            </div>
            <span className='text-[#2D2D2D] text-xs md:text-base font-normal font-poppins leading-tight'>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* Get Started Button */}
      <button className={cn(
        // Adjusted padding and font size for mobile
        'w-full text-base md:text-2xl lg:text-[26px] text-white py-3 rounded-full font-medium transition-all duration-300 uppercase tracking-wide',
        shouldScale
          ? 'bg-[#DDB2B5] hover:bg-[#c9a0a3] shadow-lg shadow-[#DDB2B5]/30'
          : 'bg-white text-primary hover:bg-primary hover:text-white border border-primary'
      )}>
        {t("Choose Plan")}
      </button>
    </motion.div>
  )
}