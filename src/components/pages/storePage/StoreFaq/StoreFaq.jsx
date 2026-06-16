"use client";
import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next';

const faq = [
  {
    id: 1,
    questionKey: "FAQ Question 1",
    answerKey: "FAQ Answer 1"
  },
  {
    id: 2,
    questionKey: "FAQ Question 1",
    answerKey: "FAQ Answer 1"
  },
  {
    id: 3,
    questionKey: "FAQ Question 1",
    answerKey: "FAQ Answer 1"
  },
  {
    id: 4,
    questionKey: "FAQ Question 1",
    answerKey: "FAQ Answer 1"
  },
  {
    id: 5,
    questionKey: "FAQ Question 1",
    answerKey: "FAQ Answer 1"
  },
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
}

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const questionMarkVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15
    }
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
}

const answerIconVariants = {
  hidden: { scale: 0, rotate: 180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      delay: 0.2
    }
  },
  hover: {
    scale: 1.1,
    rotate: -5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
}

const questionVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  },
  hover: {
    scale: 1.02,
    // backgroundColor: "#F9F9F9",
    transition: {
      duration: 0.2
    }
  }
}

const answerVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: {
      duration: 0.2
    }
  }
}

export default function StoreFaq({ is_main = true, data = faq }) {
  const { t } = useTranslation();
  const [openId, setOpenId] = useState(null)

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={containerVariants}
      className="min-h-[75vh] py-6 relative overflow-hidden bg-white"
    >
      {/* Background Image with Opacity */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        viewport={{ once: false }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/SHAHD-IMAGE/Store/9023dc7fa9386c76aa4fc87f422bca7d19bc0b91.webp')",
        }}
      />

      {/* Content */}
      <div className="relative  z-10 main-container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          variants={headerVariants}
          className="flex flex-col items-center mb-6"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#F4E7E8] w-[120px] h-[57px] rounded-full flex justify-center items-center mb-2"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 }}
              className={cn(
                "text-2xl font-poppins font-bold",
                is_main ? "text-[#D29B9F]" : "text-secondary"
              )}
            >
              {t("FAQ")}
            </motion.p>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-primary text-3xl  text-center max-w-full lg:max-w-2xl leading-tight font-normal"
          >
            {t("FAQ Section Title")}
          </motion.h3>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          variants={containerVariants}
          className="w-full lg:max-w-xl mx-auto flex flex-col gap-4 md:gap-3"
        >
          {data?.map((item) => (
            <motion.div
              key={item?.id}
              variants={itemVariants}
              custom={item.id}
              className="flex gap-[9px] items-start cursor-pointer"
              onClick={() => toggleFaq(item.id)}
            >
              {/* Question/Answer Container */}
              <div className="flex-1">
                {/* Question */}
                <motion.div
                  variants={questionVariants}
                  whileHover="hover"
                  className='flex gap-2 items-center'
                >
                  {/* Question Mark Circle */}
                  <motion.div
                    variants={questionMarkVariants}
                    whileHover="hover"
                    className="w-[50px] h-[50px]  rounded-full bg-white shadow-md flex justify-center items-center shrink-0"
                  >
                    <motion.div
                      animate={{ rotate: openId === item.id ? 360 : 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={is_main ? "/SHAHD-IMAGE/Store/ph_question-fill.webp" : "/SHAHD-IMAGE/Store/ph_question-fill-2.webp"}
                        alt="question mark"
                        width={48}
                        height={48}
                        className="w-[35px] h-[35px]"
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="flex bg-white rounded-full px-5 py-2 shadow-sm border border-[#F0F0F0] justify-between items-center flex-1"
                  >
                    <motion.p
                      animate={{ color: openId === item.id ? is_main ? "#D29B9F" : "#7189A2" : "#414141" }}
                      transition={{ duration: 0.3 }}
                      className="text-[#414141] text-lg  font-poppins font-medium"
                    >
                      {item.questionKey ? t(item.questionKey) : item?.question}
                    </motion.p>
                  </motion.div>
                </motion.div>

                {/* Answer (Animated) */}
                <AnimatePresence>
                  {openId === item.id && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={{
                        hidden: { opacity: 0, height: 0 },
                        visible: {
                          opacity: 1,
                          height: "auto",
                          transition: {
                            duration: 0.4,
                            staggerChildren: 0.1,
                            delayChildren: 0.1
                          }
                        },
                        exit: {
                          opacity: 0,
                          height: 0,
                          transition: {
                            duration: 0.3,
                            staggerChildren: 0.05,
                            staggerDirection: -1
                          }
                        }
                      }}
                      className="overflow-hidden my-6 flex gap-2"
                    >
                      <motion.div
                        variants={answerVariants}
                        className="bg-white rounded-full px-4 sm:px-8 py-5 shadow-sm border border-[#F0F0F0] flex-1"
                      >
                        <motion.p
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                          className="text-[#414141] text-lg  text-center p-0! m-0! sm:text-left font-poppins font-medium"
                        >
                          {item.answerKey ? t(item.answerKey) : item?.answer}
                        </motion.p>
                      </motion.div>

                      <motion.div
                        variants={answerIconVariants}
                        whileHover="hover"
                        className="w-[50px] h-[50px] md:w-[68px] md:h-[68px] rounded-full bg-white shadow-md flex justify-center items-center shrink-0"
                      >
                        <motion.div
                          animate={{
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.1, 1.1, 1]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 3
                          }}
                        >
                          <Image
                            src={is_main ? "/SHAHD-IMAGE/Store/tabler_message-circle-filled.webp" : "/SHAHD-IMAGE/Store/tabler_message-circle-filled-2.webp"}
                            alt="answer image"
                            width={39}
                            height={39}
                            className="w-[39px] h-[39px]"
                          />
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}