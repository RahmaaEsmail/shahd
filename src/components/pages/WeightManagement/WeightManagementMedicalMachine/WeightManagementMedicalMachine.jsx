'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const devices = [
  {
    title: "Body Contouring Device",
    description: "This advanced body contouring technology targets stubborn fat areas that are resistant to diet and exercise. Using controlled energy, it breaks down fat cells safely while reshaping the body's natural curves.",
    image: "/images/Weight-management/Frame 2147208095.png",
  },
  {
    title: "Skin Tightening Device",
    description: "This device stimulates collagen and elastin production to tighten loose skin after weight loss. It improves skin texture and firmness, helping the body look smoother, more toned, and youthful.",
    image: "/images/Weight-management/Frame 2147208096.png",
  },
  {
    title: "Lymphatic Drainage Device",
    description: "Designed to support the lymphatic system, this device helps reduce fluid retention, bloating, and inflammation. It promotes detoxification and improves circulation.",
    image: "/images/Weight-management/Frame 2147208097.png",
  },
  {
    title: "Muscle Stimulation Device",
    description: "This technology activates deep muscle contractions beyond what traditional workouts can achieve. It strengthens and tones muscles while supporting fat reduction.",
    image: "/images/Weight-management/Frame 1000005574.png",
  }
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const headerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
}

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
}

export default function WeightManagementMedicalMachine() {
  return (
    <section className='relative min-h-screen! py-6 overflow-hidden'>
      {/* Background Image with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className='absolute inset-0 -z-10'
      >
        <Image
          src="/images/Weight-management/Desktop - 21.jpg"
          fill
          priority
          className='object-cover'
          alt="Background"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />
      </motion.div>

      <div className='main-container mx-auto px-4 relative z-10'>
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className='max-w-3xl py-4 lg:py-9 text-center mx-auto'
        >
          <motion.h5 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className='text-[#95BCAA] text-xl lg:text-[27px] font-bold font-poppins tracking-[-0.15px]'
          >
            Tailored to Your Body
          </motion.h5>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className='text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-primary font-normal leading-tight mt-2 lg:mt-0'
          >
            Medical Expertise You Can Trust
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className='text-sm lg:text-base text-[#414141] font-poppins font-normal mt-4 px-4'
          >
            Led by Dr. Shahd Awad, our program integrates professional medical knowledge with personalized care.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-6 lg:gap-[30px] pb-10 lg:pb-20"
        >
          {devices.map((device, index) => (
            <DeviceCard key={index} device={device} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function DeviceCard({ device, index }) {
  const isEven = index % 2 === 0;

  const cardVariants = {
    hidden: { 
      opacity: 0,
      x: isEven ? -100 : 100,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.2
      }
    }
  }

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const imageVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      rotate: isEven ? -5 : 5
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    hover: {
      scale: 1.05,
      rotate: isEven ? 2 : -2,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.4, duration: 0.4 }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#84ab9a",
      boxShadow: "0px 8px 30px 11px rgba(99, 80, 81, 0.6)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  }

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ 
        boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.3 }
      }}
      className={`rounded-[24px] lg:rounded-[32px] grid grid-cols-1 gap-8 bg-white/60 backdrop-blur-2xl p-4 lg:p-6 border border-white/20 shadow-sm
        ${isEven ? 'md:grid-cols-[8fr_4fr]' : 'md:grid-cols-[4fr_8fr]'}`}
    >
      {/* Text Section */}
      <motion.div 
        variants={textVariants}
        className={`flex flex-col justify-center gap-2 order-2 ${!isEven ? 'md:order-2' : 'md:order-1'}`}
      >
        <motion.p 
          whileHover={{ x: 10 }}
          transition={{ duration: 0.3 }}
          className="text-primary font-medium uppercase text-xl lg:text-2xl font-poppins"
        >
          {device.title}
        </motion.p>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-[#414141] uppercase tracking-[-0.3px] mt-4 lg:mt-[24px] font-normal text-sm lg:text-base font-poppins leading-relaxed"
        >
          {device.description}
        </motion.p>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          style={{ boxShadow: "0px 4px 30px 11px #6350514D" }}
          className='bg-[#95BCAA] text-white w-fit mt-6 lg:mt-[32px] font-normal text-lg lg:text-xl rounded-full py-3 lg:py-4 px-10 lg:px-12 transition-colors relative overflow-hidden group'
        >
          <motion.span
            initial={{ y: 0 }}
            whileHover={{ y: -30 }}
            transition={{ duration: 0.3 }}
            className="inline-block"
          >
            Book Now
          </motion.span>
        </motion.button>
      </motion.div>

      {/* Image Section */}
      <motion.div 
        variants={imageVariants}
        whileHover="hover"
        className={`relative h-[300px] sm:h-[400px] md:h-full cursor-pointer order-1 ${!isEven ? 'md:order-1' : 'md:order-2'}`}
      >
        <motion.div
          variants={floatingAnimation}
          initial="initial"
          whileInView="animate"
          className="relative h-full"
        >
          <Image
            src={device.image}
            fill
            className='rounded-[32px] lg:rounded-[40px] object-cover'
            alt={device.title}
          />
          
          {/* Glow effect on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 rounded-[32px] lg:rounded-[40px] bg-gradient-to-r from-[#95BCAA]/20 to-transparent"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}