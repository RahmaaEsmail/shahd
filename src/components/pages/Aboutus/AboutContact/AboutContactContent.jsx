"use client";
import {motion} from 'framer-motion';

export default function AboutContactContent() {
  return (
    <motion.div className="flex flex-col mx-auto max-w-7xl text-left">
      <motion.h3 className='font-bold text-secondary font-poppins text-2xl lg:text-3xl'>
        Contact Us
      </motion.h3>

      <motion.p
        className='text-primary font-normal text-3xl md:text-5xl lg:text-[64px] leading-tight'
      >
        Start Your Glow Journey Together
      </motion.p>

      <motion.p className='text-text text-base font-poppins leading-8 mt-2'>
        Have a question or want to book a consultation? Fill out the form below...
      </motion.p>
    </motion.div>
  )
}