"use client";
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next';

export default function HairTherapyTeam() {
  const { t } = useTranslation();
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const backgroundVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -100, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  const imageRightVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: custom * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3
      }
    }
  };

  const cardContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.5
      }
    }
  };

  const nameVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
      }
    },
    hover: {
      x: 10,
      transition: {
        duration: 0.2
      }
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      className="main-container overflow-hidden my-10 lg:my-20 mx-auto px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.div
        className="relative overflow-hidden rounded-[32px] min-h-[600px]"
        variants={backgroundVariants}
        style={{
          backgroundImage: "url('/SHAHD-IMAGE/hair-therapy/0dfa4723e2f3e9d48a080580fa685952b58207be.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.div
          className="absolute inset-0 z-10 bg-white/70 lg:bg-white/60 shadow-inner"
          variants={overlayVariants}
        />
        <motion.div
          className="relative inset-0 px-6 pt-6 lg:px-10 lg:pt-10 pb-0! z-20 flex flex-col min-h-[600px]"
          variants={containerVariants}
        >
          <div className='flex flex-col items-center justify-center text-center mb-4'>
            <motion.p
              className="text-2xl font-bold font-poppins text-secondary capitalize mb-2"
              variants={titleVariants}
            >
              {t("Meet My Team")}
            </motion.p>
            <motion.h2
              className="text-3xl  font-normal max-w-4xl mx-auto text-[#414141] leading-tight"
              variants={subtitleVariants}
            >
              {t("Together Hair Journey")}
            </motion.h2>
          </div>

          {/* Updated Grid: added items-end to ensure images sit on the bottom boundary */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-end mt-auto"
            variants={containerVariants}
          >
            {/* Left Doctor Image */}
            <motion.div
              variants={imageVariants}
              whileHover="hover"
              className="flex justify-center order-2 lg:order-1 h-full"
            >
              {/* Set a specific height or h-full and remove max-width constraints if you want them larger */}
              <div className="relative w-full h-[400px] lg:h-[500px]">
                <Image
                  src="/SHAHD-IMAGE/hair-therapy/Image_fx - 2026-03-07T150053.361 1.webp"
                  alt="Doctor"
                  fill
                  className="object-contain object-bottom" // Changed to contain + bottom
                  priority
                />
              </div>
            </motion.div>

            {/* Cards Column */}
            <motion.div
              className="flex flex-col gap-3 order-1 lg:order-2 mb-10" // Added bottom margin to lift cards off the floor
              variants={containerVariants}
            >
              {/* Doctor Card 1 */}
              <motion.div
                className='bg-white/40 backdrop-blur-3xl flex flex-col gap-3 rounded-[24px] p-6 border border-white/60 shadow-xl'
                custom={0}
                variants={cardVariants}
                whileHover="hover"
              >
                <div className='flex flex-col'>
                  <motion.p className="text-secondary font-bold font-poppins text-xl mb-2" variants={nameVariants}>
                    DR. Shahd Awad
                  </motion.p>
                  <motion.p className="text-[#414141] uppercase font-semibold font-poppins text-sm leading-relaxed tracking-wider" variants={descriptionVariants}>
                    {t("Dr Shahd Description")}
                  </motion.p>
                </div>
              </motion.div>

              {/* Doctor Card 2 */}
              <motion.div
                className='bg-white/40 backdrop-blur-3xl flex flex-col gap-4 rounded-[24px] p-6 border border-white/60 shadow-xl'
                custom={1}
                variants={cardVariants}
                whileHover="hover"
              >
                <div className='flex flex-col'>
                  <motion.p className="text-secondary font-bold font-poppins text-xl mb-2" variants={nameVariants}>
                    {t("Dr Islam Name")}
                  </motion.p>
                  <motion.p className="text-[#414141] uppercase font-semibold font-poppins text-sm leading-relaxed tracking-wider" variants={descriptionVariants}>
                    {t("Dr Islam Description")}
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Doctor Image */}
            <motion.div
              variants={imageRightVariants}
              whileHover="hover"
              className="flex justify-center order-3 h-full"
            >
              <div className="relative w-full h-[400px] lg:h-[500px]">
                <Image
                  src="/SHAHD-IMAGE/hair-therapy/Image_fx (9) (1) 1.webp"
                  alt="Doctor"
                  fill
                  className="object-contain object-bottom" // Changed to contain + bottom
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}