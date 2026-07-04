"use client";
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      duration: 0.8
    }
  }
}

const titleVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.6
    }
  }
}

const cardVariants = {
  hidden: {
    y: 100,
    opacity: 0,
    scale: 0.9
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      delay: 0.3,
      duration: 0.8
    }
  },
  hover: {
    scale: 1.02,
    boxShadow: "0px 20px 40px rgba(221, 178, 181, 0.3)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 15
    }
  }
}

const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.5
    }
  }
}

const lineVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      delay: 0.6 + custom * 0.1
    }
  })
}

export default function BookWrite({ data }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar") ? "ar" : i18n.language?.startsWith("sk") ? "sk" : "en";

  const content = data?.[`content_${lang}`] || data?.content_en;

  // Split the text into lines for staggered animation
  const lines = [
    t("Book Write Line 1"),
    t("Book Write Line 2"),
    t("Book Write Line 3"),
    t("Book Write Line 4"),
    t("Book Write Line 5"),
    t("Book Write Line 6"),
    t("Book Write Line 7"),
    t("Book Write Line 8")
  ];

  return (
    <motion.div
      className='mt-6'
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2, margin: "-50px" }}
    >
      {/* Title with animation */}
      <motion.h4
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="text-secondary text-center text-2xl font-poppins font-bold mb-6"
      >
        {t("I wrote this for you")}
      </motion.h4>

      {/* Card with hover effect */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        whileHover="hover"
        className="bg-[#DDB2B524] backdrop-blur-2xl text-center rounded-[24px] p-6 md:p-10 lg:p-[40px_20px] relative overflow-hidden"
      >
        {/* Background shine effect on hover */}
        <motion.div
          className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        {/* Text content with staggered line animation */}
        <motion.div
          className="relative z-10"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {content ? (
            <motion.div
              variants={lineVariants}
              custom={0}
              className="font-poppins text-[#414141] mx-auto text-base lg:text-lg tracking-tight leading-relaxed lg:leading-7"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          ) : (
            lines.map((line, index) => (
              <motion.p
                key={index}
                custom={index}
                variants={lineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="font-poppins capitalize text-[#414141] mx-auto text-base lg:text-lg tracking-tight lg:tracking-[-0.3px] mb-4 lg:mb-0 leading-relaxed lg:leading-7"
              >
                {line}
                {index < lines.length - 1 && <span className="hidden lg:inline"><br /></span>}
              </motion.p>
            ))
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  )
} 