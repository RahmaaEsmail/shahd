'use client';
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';
import Link from 'next/link';
import { MoveUpRight } from 'lucide-react';

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

// Grid container animation
const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

// Grid item animation
const gridItemVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
    y: 50
  },
  visible: { 
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
}

// Image hover animation
const imageVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

// Text content animation for colored blocks
const textContentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, delay: 0.2 }
  },
  hover: {
    y: -5,
    transition: { duration: 0.3 }
  }
}

// Link animation
const linkVariants = {
  initial: { x: 0 },
  hover: { 
    x: 5,
    transition: { duration: 0.3, ease: "easeOut" }
  }
}

export default function MedicalWeightManagement() {
  return (
    <div className='min-h-screen bg-[#FFF9F7] overflow-hidden'>
      <motion.div
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className='max-w-4xl py-9 text-center mx-auto px-4'
      >
        <motion.h5
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className='text-[#95BCAA] text-[27px] font-bold font-poppins tracking-[-0.15px]'
        >
          Medical Weight Management
        </motion.h5>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
            className='text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-primary font-normal leading-tight mt-2 lg:mt-0'
        >
          A Sustainable Approach to Weight Management
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className='text-base text-[#414141] font-poppins font-normal mt-4'
        >
          A science-driven approach to fat loss, body shaping, and metabolic balance — guided by medical expertise.
        </motion.p>
      </motion.div>

      <motion.div 
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
      >
        {/* Image 1 */}
        <motion.div 
          variants={gridItemVariants}
          whileHover="hover"
          className='relative w-full h-[328px] overflow-hidden group'
        >
          <motion.div
            variants={imageVariants}
            initial="initial"
            whileHover="hover"
            className='relative w-full h-full'
          >
            <Image 
              src="/images/Weight-management/Rectangle 48.png" 
              alt="Weight management" 
              fill 
              className='object-cover w-full h-full transition-transform duration-700'
            />
            {/* Overlay on hover */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
            />
          </motion.div>
        </motion.div>

        {/* FAT Reduction Block */}
        <motion.div 
          variants={gridItemVariants}
          whileHover="hover"
          className='w-full h-[328px] text-center flex flex-col justify-center items-center bg-[#DDB2B5] group'
        >
          <motion.div 
            variants={textContentVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            className='max-w-[220px] flex flex-col gap-6 mx-auto text-center'
          >
            <motion.p 
              className='text-[32px] tracking-[-0.15px] text-white font-normal relative'
              style={{
                WebkitTextStroke: "1px #95BCAA",
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              FAT Reduction
              <motion.span 
                className="absolute -inset-1 bg-white/20 rounded-lg -z-10"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.p>
            <motion.p 
              className='text-base font-light font-poppins text-[#414141]'
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
            >
              Target stubborn fat deposits with advanced non-invasive technologies designed to contour the body and improve proportions safely.
            </motion.p>
            <motion.div
              variants={linkVariants}
              initial="initial"
              whileHover="hover"
            >
              <Link href="/weight-management/fat-reduction" className='text-base flex gap-1 items-center justify-center underline font-light font-poppins text-[#414141] group/link'>
                <motion.span
                  whileHover={{ x: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  Learn More
                </motion.span>
                <motion.div
                  whileHover={{ rotate: 45 }}
                  transition={{ duration: 0.3 }}
                >
                  <MoveUpRight size={16} />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Image 2 */}
        <motion.div 
          variants={gridItemVariants}
          whileHover="hover"
          className='relative w-full h-[328px] overflow-hidden group'
        >
          <motion.div
            variants={imageVariants}
            initial="initial"
            whileHover="hover"
            className='relative w-full h-full'
          >
            <Image 
              src="/images/Weight-management/Rectangle 49.png" 
              alt="Weight management" 
              fill 
              className='object-cover w-full h-full'
            />
            <motion.div 
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
            />
          </motion.div>
        </motion.div>

        {/* Metabolic boost Block */}
        <motion.div 
          variants={gridItemVariants}
          whileHover="hover"
          className='w-full h-[328px] text-center flex flex-col justify-center items-center bg-white group'
        >
          <motion.div 
            variants={textContentVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            className='max-w-[220px] flex flex-col gap-6 mx-auto text-center'
          >
            <motion.p 
              className='text-[32px] tracking-[-0.15px] text-white font-normal relative'
              style={{
                WebkitTextStroke: "1px #DDB2B5",
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Metabolic boost
              <motion.span 
                className="absolute -inset-1 bg-[#DDB2B5]/20 rounded-lg -z-10"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.p>
            <motion.p 
              className='text-base tracking-[-0.15px] font-light font-poppins text-[#414141]'
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
            >
              Enhance your metabolism and energy levels through medically guided weight management protocols tailored to your body.
            </motion.p>
            <motion.div
              variants={linkVariants}
              initial="initial"
              whileHover="hover"
            >
              <Link href="/weight-management/fat-reduction" className='text-base flex gap-1 items-center justify-center underline font-light font-poppins text-[#414141]'>
                <span>Learn More</span>
                <motion.div
                  whileHover={{ rotate: 45 }}
                  transition={{ duration: 0.3 }}
                >
                  <MoveUpRight size={16} />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Body Contouring Block */}
        <motion.div 
          variants={gridItemVariants}
          whileHover="hover"
          className='w-full h-[328px] text-center flex flex-col justify-center items-center bg-[#D29B9F] group'
        >
          <motion.div 
            variants={textContentVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            className='max-w-[220px] flex flex-col gap-6 mx-auto text-center'
          >
            <motion.p 
              className='text-[32px] tracking-[-0.15px] text-white font-normal relative'
              style={{
                WebkitTextStroke: "1px #95BCAA",
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Body Contouring
              <motion.span 
                className="absolute -inset-1 bg-white/20 rounded-lg -z-10"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.p>
            <motion.p 
              className='text-base font-light tracking-[-0.15px] font-poppins text-[#414141]'
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
            >
              Reshape and sculpt your body with precision using non-surgical contouring technologies for smoother, firmer results.
            </motion.p>
            <motion.div
              variants={linkVariants}
              initial="initial"
              whileHover="hover"
            >
              <Link href="/weight-management/fat-reduction" className='text-base flex gap-1 items-center justify-center underline font-light font-poppins text-[#414141]'>
                <span>Learn More</span>
                <motion.div
                  whileHover={{ rotate: 45 }}
                  transition={{ duration: 0.3 }}
                >
                  <MoveUpRight size={16} />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Image 3 */}
        <motion.div 
          variants={gridItemVariants}
          whileHover="hover"
          className='relative w-full h-[328px] overflow-hidden group'
        >
          <motion.div
            variants={imageVariants}
            initial="initial"
            whileHover="hover"
            className='relative w-full h-full'
          >
            <Image 
              src="/images/Weight-management/Rectangle 47.png" 
              alt="Weight management" 
              fill 
              className='object-cover w-full h-full'
            />
            <motion.div 
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
            />
          </motion.div>
        </motion.div>

        {/* Muscle toning Block */}
        <motion.div 
          variants={gridItemVariants}
          whileHover="hover"
          className='w-full h-[328px] text-center flex flex-col justify-center items-center bg-[#95BCAA] group'
        >
          <motion.div 
            variants={textContentVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            className='max-w-[220px] flex flex-col gap-6 mx-auto text-center'
          >
            <motion.p 
              className='text-[32px] tracking-[-0.15px] text-white font-normal relative'
              style={{
                WebkitTextStroke: "1px #DDB2B5",
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Muscle toning
              <motion.span 
                className="absolute -inset-1 bg-[#DDB2B5]/20 rounded-lg -z-10"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.p>
            <motion.p 
              className='text-base font-light tracking-[-0.15px] font-poppins text-[#414141]'
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
            >
              Target stubborn fat deposits with advanced non-invasive technologies designed to contour the body and improve proportions safely.
            </motion.p>
            <motion.div
              variants={linkVariants}
              initial="initial"
              whileHover="hover"
            >
              <Link href="/weight-management/fat-reduction" className='text-base flex gap-1 items-center justify-center underline font-light font-poppins text-[#414141]'>
                <span>Learn More</span>
                <motion.div
                  whileHover={{ rotate: 45 }}
                  transition={{ duration: 0.3 }}
                >
                  <MoveUpRight size={16} />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Image 4 */}
        <motion.div 
          variants={gridItemVariants}
          whileHover="hover"
          className='relative w-full h-[328px] overflow-hidden group'
        >
          <motion.div
            variants={imageVariants}
            initial="initial"
            whileHover="hover"
            className='relative w-full h-full'
          >
            <Image 
              src="/images/Weight-management/Rectangle 45.png" 
              alt="Weight management" 
              fill 
              className='object-cover w-full h-full'
            />
            <motion.div 
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}