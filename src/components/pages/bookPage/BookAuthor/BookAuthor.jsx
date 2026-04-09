"use client";
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function BookAuthor() {
  return (
    <motion.div
      className="flex flex-col lg:grid lg:grid-cols-[2.5fr_9.5fr] gap-10 lg:gap-14 items-center mt-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Author Image */}
      <motion.div
        className="w-[300px] md:w-[242px] h-auto relative mx-auto lg:mx-0"
        initial={{ opacity: 0, x: -50, rotate: -5 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 15,
          duration: 0.8
        }}
        whileHover={{
          scale: 1.05,
          rotate: 2,
          transition: { type: "spring", stiffness: 400 }
        }}
      >
        <div className="relative overflow-hidden rounded-full lg:rounded-[121px] aspect-square lg:aspect-auto">
          <Image
            src="/images/Book/shahd-img.png"
            alt='shahd-img'
            width={242}
            height={337}
            className='object-cover w-full h-full transition-transform duration-300 hover:scale-110'
          />
        </div>
      </motion.div>

      {/* Content section */}
      <motion.div
        className="w-full flex flex-col gap-4 text-center lg:text-left"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 70,
          damping: 15,
          delay: 0.2
        }}
      >
        <motion.h5
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className='font-poppins text-secondary text-xl lg:text-[27px] font-bold'
        >
          About the author
        </motion.h5>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: "spring" }}
          className='text-primary text-3xl md:text-5xl lg:text-[56px] font-normal leading-tight lg:leading-16'
        >
          Dr. Shahd awad
        </motion.h2>

        <motion.div
          className='font-poppins max-w-5xl text-[#414141] text-sm lg:text-base font-normal leading-relaxed lg:leading-8'
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.5
              }
            }
          }}
        >
          {[
            "Dr. Shahd is a physician, wellness leader, and transformation coach dedicated to helping women build confidence, clarity, and purpose from the inside out.",
            "With a unique blend of medical knowledge, emotional intelligence, and personal development expertise, she has guided thousands of women through journeys of healing, growth, and self-discovery — not by changing who they are, but by helping them reconnect with who they truly are."
          ].map((line, index) => (
            <motion.p
              key={index}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { type: "spring", stiffness: 100 }
                }
              }}
              className="mb-4 lg:mb-0"
            >
              {line}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}