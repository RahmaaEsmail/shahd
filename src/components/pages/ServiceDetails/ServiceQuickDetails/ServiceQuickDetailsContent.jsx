"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 , x : 20},
  visible: {
    opacity: 1,
    x:0,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.6
    }
  }
};

const headerVariants = {
  hidden: { 
    opacity: 0, 
    x: -50,
    skewX: -10
  },
  visible: { 
    opacity: 1, 
    x: 0,
    skewX: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8
    }
  }
};

const paragraphVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12,
      delay: 0.2,
      duration: 0.7
    }
  }
};

const subHeaderVariants = {
  hidden: { 
    opacity: 0, 
    x: -30
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: 0.3
    }
  }
};

const detailCardVariants = {
  hidden: (index) => ({
    opacity: 0,
    scale: 0.8,
    y: 50,
    rotateY: index % 2 === 0 ? -30 : 30,
    x: index % 2 === 0 ? -50 : 50
  }),
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotateY: 0,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
      duration: 0.8
    }
  },
  hover: {
    // scale: 1.05,
    y: -10,
    // boxShadow: "0 20px 30px rgba(0,0,0,0.1)",
    // borderColor: "#4D3E3F",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const priceVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.5,
    x: -50
  },
  visible: { 
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      delay: 0.6
    }
  },
  hover: {
    // scale: 1.1,
    color: "#6B4E4F",
    transition: {
      type: "spring",
      stiffness: 400
    }
  }
};

const priceTextVariants = {
  hidden: { 
    opacity: 0,
    x: -20
  },
  visible: { 
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.7,
      duration: 0.5
    }
  }
};

const buttonVariants = {
  hidden: { 
    opacity: 0,
    y: 30,
    scale: 0.8
  },
  visible: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      delay: 0.8
    }
  },
  hover: {
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: {
    scale: 0.95,
    boxShadow: "0 5px 15px rgba(77, 62, 63, 0.2)"
  }
};

const labelVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4 + (i * 0.1),
      duration: 0.4
    }
  })
};

const valueVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 + (i * 0.1),
      duration: 0.4
    }
  })
};

export default function ServiceQuickDetailsContent({ service }) {
  const { t } = useTranslation();
  const router = useRouter();

  const quickDetails = [
    { labelKey: "DURATION", value: "(45-60) m" },
    { labelKey: "TYPE", value: "non-surgical treatment" },
    { labelKey: "DOWNTIME", value: "none" },
    { labelKey: "RECOMMENDED SESSIONS", value: "3-6" },
  ];

  return (
    <div className="w-full pt-4 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ 
          once: false, 
          amount: 0.2,
          margin: "-50px"
        }}
      >
        {/* Main Header */}
        <motion.h2 
          variants={headerVariants}
          className="text-[25px] font-normal text-primary uppercase mb-4 leading-tight"
        >
          {service?.titleKey ? t(service.titleKey) : (service?.title || t("Revive Your Beauty, Naturally."))}
        </motion.h2>

        {/* Description Paragraph */}
        <motion.p 
          variants={paragraphVariants}
          className="text-[#414141] text-lg font-poppins font-normal mb-8 leading-relaxed"
        >
          {service?.descKey ? t(service.descKey) : (service?.desc || t("Experience the power of your own body's healing potential."))}
        </motion.p>

        {/* Sub Header */}
        <motion.h3 
          variants={subHeaderVariants}
          className="text-[28px] font-bold text-secondary mb-4 uppercase"
        >
          {t("Quick Details:")}
        </motion.h3>

        {/* Details Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
          variants={containerVariants}
        >
          {quickDetails.map((detail, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={detailCardVariants}
              whileHover="hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="border border-[#B6C7D6] rounded-[30px] p-3 flex flex-col gap-2 items-center justify-center text-center bg-white cursor-default relative overflow-hidden group"
            >
              {/* Label with staggered animation */}
              <motion.span
                custom={index}
                variants={labelVariants}
                className="text-xl font-semibold font-poppins text-[#40464B] relative z-10"
              >
                {t(detail.labelKey)}
              </motion.span>
              
              {/* Value with staggered animation */}
              <motion.span
                custom={index}
                variants={valueVariants}
                className="text-xl font-poppins text-[#8995A1] font-normal relative z-10"
              >
                {t(detail.value)}
              </motion.span>

              {/* Decorative corner accent */}
              
            </motion.div>
          ))}
        </motion.div>

        {/* Pricing & CTA */}
        <motion.div 
          className="flex flex-col gap-8"
          variants={containerVariants}
        >
          <div className="flex flex-wrap max-w-xl items-baseline gap-2">
            {/* Price */}
            <motion.span 
              variants={priceVariants}
              whileHover="hover"
              className="text-[40px] font-poppins font-bold text-[#4D3E3F] cursor-default"
            >
              $250
            </motion.span>
            
            {/* Price Description */}
            <motion.p 
              variants={priceTextVariants}
              className="text-lg font-poppins font-normal text-[#4D3E3F] uppercase"
            >
              {t("per session")} <span className="text-gray-400 uppercase">{t("(varies depending on treatment area)")}</span>
            </motion.p>
          </div>

          {/* Book Now Button */}
          <motion.button 
          onClick={() => router.push("/booking")}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="w-full sm:w-fit text-xl md:text-[26px] font-normal px-10 py-3 bg-secondary text-white rounded-full uppercase tracking-widest shadow-lg relative overflow-hidden group"
          >
            {/* Button shine effect */}
            <motion.span
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: "-100%", skewX: -15 }}
              whileHover={{ x: "200%", skewX: -15 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            
            {/* Button text with scale animation on hover */}
            <motion.span
              className="relative z-10 inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {t("Book Now")}
            </motion.span>

            {/* Decorative dots animation */}
            <motion.div
              className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.5
              }}
            />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}
