'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const leftContent = [
  {
    num: '4',
    title: 'HOW TO CREATE SUSTAINABLE EATING HABITS?',
    desc: 'Discover easy, practical cooking methods that preserve nutrients while keeping meals delicious and time-efficient.',
  },
  {
    num: '5',
    title: 'HOW TO MANAGE PORTIONS?',
    desc: 'Build long-term habits that help you maintain results without restrictive dieting or guilt.',
  },
  {
    num: '6',
    title: 'WHAT WILL YOU LEARN?',
    desc: 'A guided journey to help you build a healthier relationship with food, improve your nutrition habits, and support sustainable weight management.',
  },
]

const rightContent = [
  {
    num: '1',
    title: 'HOW TO BUILD BALANCED MEALS?',
    desc: 'Learn how to combine proteins, carbs, fats, and fiber in a healthy way that fuels your body and supports your goals.',
  },
  {
    num: '2',
    title: 'HOW TO CHOOSE HEALTHY FOOD?',
    desc: 'Understand how to read labels, select fresh foods, and make smarter choices at the grocery store.',
  },
  {
    num: '3',
    title: 'SIMPLE AND HEALTHY COOKING SKILLS',
    desc: 'Discover easy, practical cooking methods that preserve nutrients while keeping meals delicious and time-efficient.',
  },
]

function ContentBlock({ item, align = 'left' }) {
  const isLeft = align === 'left'

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className={`relative max-w-[320px] ${isLeft ? 'text-right lg:text-left' : 'text-left'
        }`}
    >
      <div
        className={`flex items-start gap-3 ${isLeft ? 'lg:flex-row-reverse flex-row-reverse' : 'flex-row'
          }`}
      >
        <div className="shrink-0 mt-1 flex items-center justify-center w-[34px] h-[34px] rounded-full bg-[#DDB2B5] text-white text-[22px] leading-none font-semibold shadow-sm">
          {item.num}
        </div>

        <div>
          <h3 className="text-[#414141] uppercase font-condensed text-[21px] leading-[1.1] tracking-[-0.02em]">
            {item.title}
          </h3>
          <p className="mt-2 text-[#666666] text-[14px] leading-[1.45] font-poppins">
            {item.desc}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function WeightManagementFoodieProject() {
  return (
    <section
      className="relative overflow-hidden py-16 lg:py-24"
      style={{
        background:
          'linear-gradient(180deg, #FDFCFB 0%, #F7FBF8 45%, #FCFBFA 100%)',
      }}
    >
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-[#95BCAA] font-poppins font-semibold text-xl lg:text-[28px] leading-none"
          >
            The Foodie Project
          </motion.p>

          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }}
            className="mt-4 mx-auto max-w-4xl uppercase text-[#DDB2B5] text-3xl sm:text-4xl md:text-5xl lg:text-[58px] leading-tight lg:leading-[0.95] font-condensed tracking-[-0.03em]"
          >
            Nourishing Your Body, One Plate at a Time
          </motion.h2>
        </div>

        {/* Main Layout */}
        <div className="relative mt-12 lg:mt-20">
          <div className="flex flex-col lg:grid lg:grid-cols-[1.2fr_520px_1.2fr] items-center gap-12 lg:gap-8">

            {/* Top/Right Column (1, 2, 3) - Becomes Top on Mobile */}
            <div className="flex flex-col gap-10 lg:gap-16 order-1 lg:order-3 w-full">
              {[rightContent[0], rightContent[1], rightContent[2]].map((item, idx) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`flex items-start gap-4 lg:gap-6 justify-center lg:justify-start ${idx === 0 ? 'lg:-translate-x-12' : idx === 2 ? 'lg:-translate-x-16' : 'lg:-translate-x-4'
                    }`}
                >
                  <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#DDB2B5] text-white font-poppins text-xl shadow-md order-1">
                    {item.num}
                  </div>
                  <div className="flex-1 max-w-[320px] lg:max-w-none order-2 text-center lg:text-left">
                    <h3 className="text-[#414141] uppercase font-normal text-2xl sm:text-3xl leading-tight tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[#666666] text-sm sm:text-base font-light leading-relaxed font-poppins">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Center Plate - Order 2 on Mobile */}
            <div className="relative flex items-center justify-center order-2 lg:order-2 w-full max-w-[320px] sm:max-w-md lg:max-w-none overflow-visible py-8 lg:py-0">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                animate={{
                  // Combined floating and continuous spinning
                  y: [0, -15, 0],
                  rotate: 360,
                }}
                transition={{
                  // Initial entry
                  scale: { duration: 0.8 },
                  opacity: { duration: 0.8 },
                  // Floating effect
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  // Smooth spinning: must be "linear" for a seamless loop
                  rotate: {
                    duration: 25, // Higher number = slower, more elegant spin
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
                className="relative w-full aspect-square"
                style={{ willChange: "transform" }} // Performance boost
              >
                <Image
                  src="/images/Weight-management/weight-managemeny.png"
                  alt="Healthy Plate"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </motion.div>
            </div>

            {/* Bottom/Left Column (4, 5, 6) - Becomes Bottom on Mobile */}
            <div className="flex flex-col gap-10 lg:gap-16 order-3 lg:order-1 w-full">
              {[leftContent[0], leftContent[1], leftContent[2]].map((item, idx) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`flex items-start gap-4 lg:gap-6 justify-center lg:justify-end ${idx === 0 ? 'lg:translate-x-12' : idx === 2 ? 'lg:translate-x-16' : 'lg:translate-x-4'
                    }`}
                >
                  <div className="flex-1 max-w-[320px] lg:max-w-none text-center lg:text-right order-2 lg:order-1">
                    <h3 className="text-[#414141] uppercase font-normal text-2xl sm:text-3xl leading-tight tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[#666666] text-sm sm:text-base font-light leading-relaxed font-poppins">
                      {item.desc}
                    </p>
                  </div>
                  <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#DDB2B5] text-white font-poppins text-xl shadow-md order-1 lg:order-2">
                    {item.num}
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 lg:mt-24 flex justify-center">
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="min-w-[200px] sm:min-w-[278px] rounded-full bg-[#95BCAA] px-8 py-4 text-white text-xl sm:text-[24px] uppercase font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </section>
  )
}