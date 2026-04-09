"use client";
import React from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CircleDollarSign, Truck } from 'lucide-react';

const list = [
  { id: 1, name: "Discover your true purpose" },
  { id: 2, name: 'Build confidence from within' },
  { id: 3, name: "Develop emotional intelligence" },
  { id: 4, name: "Strengthen your feminine identity" },
  { id: 5, name: "Create healthy habits and routines" },
  { id: 6, name: "Improve your relationships" },
  { id: 7, name: "Build a life aligned with your values" },
  { id: 8, name: "Create a career or business with meaning" },
  { id: 9, name: "Learn to communicate with confidence" },
  { id: 10, name: "Build your personal brand" }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2, duration: 0.8 }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 12, delay: custom * 0.1 }
  })
}

const titleVariants = {
  hidden: { y: -30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 80, damping: 15, duration: 0.8 }
  }
}

const languageButtonVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: (custom) => ({
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 150, damping: 15, delay: 0.3 + custom * 0.1 }
  }),
  hover: { scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 15 } }
}

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 80, damping: 15, delay: 0.5 + custom * 0.1 }
  }),
  hover: { scale: 1.01, boxShadow: "0px 10px 30px rgba(221, 178, 181, 0.2)", transition: { type: "spring", stiffness: 400 } }
}

const listItemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 12, delay: 0.8 + custom * 0.05 }
  }),
  hover: { x: 8, color: "#B97C7C", transition: { type: "spring", stiffness: 400 } }
}

export default function BuyBookContent() {
  return (
    <motion.div
      className="flex flex-col gap-6 lg:gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
    >
      {/* Title */}
      <motion.h1
        variants={titleVariants}
        className="text-primary text-4xl md:text-6xl xl:text-[90px] font-normal leading-tight xl:leading-[100%] text-center lg:text-left"
      >
        Glow in All Areas of Your Life
      </motion.h1>

      <div className="flex flex-col gap-4 text-center lg:text-left">
        <motion.p variants={itemVariants} className='text-[#414141] font-bold font-poppins text-2xl lg:text-3xl'>
          Price: $100
        </motion.p>
        <motion.p variants={itemVariants} className='text-[#414141] font-normal font-poppins text-lg lg:text-2xl'>
          Language: English
        </motion.p>
      </div>

      {/* Language Buttons */}
      <div className="flex flex-wrap justify-center lg:justify-start gap-4 my-2">
        {['English', 'العربية'].map((lang, i) => (
          <motion.div key={lang} custom={i} variants={languageButtonVariants} whileHover="hover">
            <Button
              variant={i === 0 ? 'default' : 'outline'}
              className={`rounded-full px-8 lg:px-10 h-12 lg:h-[52px] font-normal font-poppins text-lg lg:text-2xl ${i === 1 ? 'border-primary text-primary hover:bg-primary/5' : ''}`}
            >
              {lang}
            </Button>
          </motion.div>
        ))}
      </div>

      {/* Payment Cards */}
      <div className="flex flex-col gap-4">
        {[
          { text: "Split your purchase into monthly payments", sub: "Learn more", img: "/images/Buy-book/Group 32.png" },
          { text: "Or split in 4 payments of $19.90 - No late fees", sub: "Learn more", img: "/images/Buy-book/lavendar-logo.703d190a 1.png" }
        ].map((card, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            whileHover="hover"
            className='bg-[#DDB2B524] backdrop-blur-2xl rounded-2xl p-5 lg:p-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left'
          >
            <div className="flex flex-col gap-1">
              <p className='text-[#414141] text-sm lg:text-base font-normal font-poppins leading-snug'>
                {card.text}
              </p>
              <span className='text-secondary font-medium text-sm lg:text-base underline cursor-pointer'>{card.sub}</span>
            </div>
            <div className="shrink-0">
               <Image src={card.img} alt="payment logo" width={80} height={40} className="object-contain" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Buttons & Shipping */}
      <div className="flex flex-col gap-6">
        <motion.button
          className='w-full text-white h-14 lg:h-[60px] rounded-full text-xl lg:text-2xl font-semibold relative overflow-hidden shadow-xl'
          style={{ background: "linear-gradient(90deg, #DDB2B5 0%, #A4B3C1 100%)" }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            className="absolute inset-0 bg-white/20"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
          />
          <span className="relative z-10">Add To Cart</span>
        </motion.button>

        <motion.div className="flex flex-wrap justify-center lg:justify-between gap-4 items-center" variants={itemVariants} custom={0.8}>
          <div className="flex gap-2 items-center text-secondary">
            <Truck size={20} />
            <span className="font-poppins text-lg font-normal">Fast shipping</span>
          </div>
          <div className="flex gap-2 items-center text-secondary text-right">
            <CircleDollarSign size={20} />
            <span className="font-poppins text-lg font-normal">Installments available</span>
          </div>
        </motion.div>
      </div>

      {/* Details & Help */}
      <div className="space-y-8 mt-4">
        {[
          { title: "Additional Details", content: [
            "If you've ever felt stuck, lost, overwhelmed, or unsure of your direction — this book was written for you.",
            "You need guidance, clarity, and alignment. Glow in All Areas of Your Life is a transformational guide created to help you reconnect with who you truly are.",
          ]},
          { title: "What This Book Will Help You With:", list: list }
        ].map((section, i) => (
          <motion.div key={section.title} className="flex flex-col gap-3" variants={itemVariants} custom={1 + i * 0.2}>
            <h4 className="text-[#414141] font-semibold text-2xl lg:text-3xl font-poppins text-center lg:text-left">
              {section.title}
            </h4>
            {section.content && (
              <div className="text-[#414141] font-poppins text-base lg:text-lg leading-relaxed space-y-4 text-center lg:text-left">
                {section.content.map((p, j) => <p key={j}>{p}</p>)}
              </div>
            )}
            {section.list && (
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                {section.list.map((item, j) => (
                  <motion.li
                    key={item.id}
                    custom={j}
                    variants={listItemVariants}
                    whileHover="hover"
                    className='text-sm lg:text-base list-disc list-inside font-poppins text-[#414141] leading-7'
                  >
                    {item.name}
                  </motion.li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}