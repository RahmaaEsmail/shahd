"use client";
import React from 'react'
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function ServiceQuickDetailsImages({ activeImg, setActiveImg, images }) {
  return (
    <div className="w-full flex flex-col gap-6">
      <motion.div
        initial={{
          opacity: 0,
          x: -20
        }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        layout
        viewport={{
          once: false,
          amount: 0.2,
          margin: "-50px"
        }}
        transition={{
          duration: 0.4
        }}
        className="relative w-full h-[552px]  rounded-[40px] overflow-hidden shadow-sm"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImg}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full relative"
          >
            <Image src={activeImg} alt="Service" fill className="object-cover" />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(180deg, rgba(182, 199, 214, 0) 51.44%, rgba(182, 199, 214, 0.8) 100%)"
              }}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Scrollable Thumbnails Container */}
      <div className="w-full overflow-hidden">
        <div className="flex gap-4 overflow-x-auto pb-6 no-scrollbar snap-x snap-mandatory">
          {images.map((item) => (
            <motion.div
              key={item.id}
              onClick={() => setActiveImg(item.img)}
              // The magic line: calc(100% / 3) minus gap adjustments
              className={`relative shrink-0 w-[calc((100%-32px)/3)] aspect-square rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 snap-start
                    ${activeImg === item.img
                  ? "shadow-[0px_0px_20px_2px_#DDB2B5] scale-95 border-2 border-[#DDB2B5]"
                  : "shadow-none"
                }`}
            >
              <Image src={item.img} alt="thumb" fill className="object-cover" />

              {activeImg !== item.img && (
                <div className='absolute bg-black/40 inset-0 transition-opacity duration-300 hover:bg-black/20' />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
