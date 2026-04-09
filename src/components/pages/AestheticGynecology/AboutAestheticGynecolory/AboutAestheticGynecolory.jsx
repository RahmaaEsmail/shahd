"use client"; // Required for animations

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const data = [
  {
    id: 1,
    title: "VAGINAL HEALTH",
    description: "Treatments designed for long-term care.",
    icon: "/images/aethesic/Vector.png"
  },
  {
    id: 2,
    title: "TISSUE REJUVENATION",
    description: "Advanced technologies stimulate natural collagen production for improved function and comfort.",
    icon: "/images/aethesic/Group.png",
  },
  {
    id: 3,
    title: "COMFORT DURING DAILY LIFE",
    description: "Enhancing comfort, reducing discomfort and supporting ease in movement, lifestyle and daily routines.",
    icon: "/images/aethesic/Vector (1).png"
  },
  {
    id: 4,
    title: "CONFIDENCE & QUALITY OF LIFE",
    description: "Empowering confidence and personal well-being helping you feel more comfortable/confident.",
    icon: "/images/aethesic/Vector (2).png"
  }
]

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

export default function AboutAestheticGynecology() {
  return (
    <section className="relative w-full py-16 overflow-hidden">
      {/* Background Decorative Floral Elements */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <Image
          src="/images/aethesic/d6f7c7b39cbc8c4f1eb3a6f2018f0f6d8c68cec3.jpg"
          alt="Floral Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="main-container relative z-10 mx-auto px-4">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          className="mb-12"
        >
          <p className="text-secondary font-semibold tracking-wider text-sm lg:text-lg uppercase mb-2">
            About Aesthetic Gynecology
          </p>
          <h2 className="text-primary text-4xl md:text-5xl lg:text-[55px] leading-tight max-w-2xl uppercase">
            Aesthetic gynecology focuses on <br className="hidden lg:block" /> treatments that improve:
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-10 items-center">

          {/* Left Side: Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            className="relative w-full aspect-square  mx-auto lg:mx-0"
          >
            <Image
              src="/images/aethesic/56dd5bf56856e3484db3b38ee1306fde539ed367.png"
              alt="Anatomical Illustration"
              fill
              className="object-cover" // Changed to contain to ensure the illustration isn't cropped
            />
          </motion.div>

          {/* Right Side: Features Grid */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {data.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                whileHover={{ y: -5 }} // Subtle hover lift
                style={{
                  boxShadow: "-0.6px -0.6px 48px -12px #00000026"
                }}
                className="bg-white/60 backdrop-blur-sm border border-white p-6 rounded-xl flex flex-col items-center text-center shadow-sm"
              >
                <div className="relative w-10 h-10 mb-4">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-primary font-normal text-[32px] mb-2 leading-tight uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-[#414141] text-base font-light font-poppins leading-[1.6]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

       <div className='absolute -bottom-7 left-0 right-0 z-20 w-full h-[53px] pointer-events-none'>
                <img src="/images/aethesic/Rectangle 24.png" className='w-full h-full object-cover' alt="" />
            </div>

             <div className='absolute top-0 rotate-180 left-0 right-0 z-20 w-full h-[53px] pointer-events-none'>
                <img src="/images/aethesic/Rectangle 24.png" className='w-full h-full object-cover' alt="" />
            </div>
    </section>
  )
}