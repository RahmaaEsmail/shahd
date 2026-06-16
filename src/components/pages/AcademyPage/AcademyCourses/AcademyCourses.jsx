"use client";
import React, { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { motion, useInView } from 'framer-motion'
import { useTranslation } from 'react-i18next';
import CourseCard from './CourseCard';

const courses = [
  {
    id: 1,
    titleKey: "PRP & Regenerative Medicine",
    descKey: "PRP Course Desc",
    image: "/SHAHD-IMAGE/Academy/Rectangle 59.webp",
  },
  {
    id: 2,
    titleKey: "PRP & Regenerative Medicine",
    descKey: "PRP Course Desc",
    image: "/SHAHD-IMAGE/Academy/Rectangle 60.webp",
  },
  {
    id: 3,
    titleKey: "PRP & Regenerative Medicine",
    descKey: "PRP Course Desc",
    image: "/SHAHD-IMAGE/Academy/Rectangle 61.webp",
  }
]

export default function AcademyCourses() {
  const { t } = useTranslation();
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }


  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{
        background: "url('/SHAHD-IMAGE/Academy/Desktop - 20.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
      }}
      className='relative overflow-hidden'
    >

      <div className='main-container py-8 mx-auto px-4 relative z-10'>
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          className='mb-6'
        >
          <motion.p
            variants={itemVariants}
            className='text-secondary font-poppins font-bold text-2xl  mb-2'
          >
            {t('From Foundation to Mastery')}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className='flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-12'
          >
            <motion.h1
              variants={itemVariants}
              className='text-3xl max-w-3xl text-primary leading-tight font-normal'
            >
              {t('Academy Courses Heading')}
            </motion.h1>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 lg:mt-0"
            >
              <Button
                variant='secondary'
                className={"text-white px-5 py-4 rounded-full text-lg  font-normal! flex justify-center items-center shadow-lg shadow-secondary/30 hover:shadow-xl transition-all"}
              >
                {t('Explore our courses')}
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {courses?.map((item, index) => (
            <CourseCard key={item?.id} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}