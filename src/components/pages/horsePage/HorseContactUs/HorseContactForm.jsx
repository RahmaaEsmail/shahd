"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { Select, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Input } from '@/components/ui/input';

export default function HorseContactForm() {
  return (
    <>
      {/* Form */}
      <motion.form
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className='flex lg:pr-4! flex-col mt-6 gap-5'
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <Input
              placeholder="Full Name"
              className={"border bg-transparent! border-[#868686] placeholder:text-[#868686] rounded-full px-6 py-6 sm:py-7 text-[#868686] font-poppins text-sm sm:text-base font-medium"}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4, delay: 0.55 }}
          >
            <Input
              placeholder="Email Optional"
              className={"border bg-transparent! border-[#868686] placeholder:text-[#868686] rounded-full px-6 py-6 sm:py-7 text-[#868686] font-poppins text-sm sm:text-base font-medium"}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <Input
              placeholder="Phone Number"
              className={"border bg-transparent! border-[#868686] placeholder:text-[#868686] rounded-full px-6 py-6 sm:py-7 text-[#868686] font-poppins text-sm sm:text-base font-medium"}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4, delay: 0.65 }}
          >
            <Select>
              <SelectTrigger className={"border bg-transparent! w-full border-[#868686] placeholder:text-[#868686] rounded-full px-6 py-6 sm:py-7 text-[#868686] font-poppins text-sm sm:text-base font-medium"}>
                <SelectValue placeholder="Select Service" />
              </SelectTrigger>
            </Select>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4, delay: 0.7 }}
        >
          <Textarea
            placeholder="Message"
            className={"border bg-transparent! border-[#868686] placeholder:text-[#868686] rounded-[20px] sm:rounded-[30px] min-h-24 sm:min-h-37.5 px-6 py-6 sm:py-7 text-[#868686] font-poppins text-sm sm:text-base font-medium"}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant='secondary'
            className="uppercase bg-[#AF7F73]! text-white font-normal! rounded-full h-14 sm:h-18 lg:h-21.5 mt-3 text-lg sm:text-2xl lg:text-3xl w-full cursor-pointer"
          >
            Send Message
          </Button>
        </motion.div>
      </motion.form>

      {/* Contact Info */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className='flex flex-col sm:flex-row justify-between mt-8 w-full gap-6 sm:gap-2'
      >
        {/* WhatsApp */}
        <motion.div
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
          className='flex gap-3 items-center'
        >
          <motion.div
            whileHover={{ rotate: 10 }}
            transition={{ duration: 0.2 }}
            className="shrink-0"
          >
            <Image
              loading='lazy'
              src="/images/About/ic_outline-whatsapp.png"
              alt="whatsapp icon"
              width={56}
              height={56}
              className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
            />
          </motion.div>
          <div className='flex flex-col'>
            <p className='text-[#9D9D9D] text-xs sm:text-sm lg:text-base p-0 m-0 font-poppins font-medium'>contact us</p>
            <a className='text-primary text-lg sm:text-xl p-0 m-0 font-bold font-poppins' href={`tel:+00123456789`}>
              +001 23456789
            </a>
          </div>
        </motion.div>

        {/* Email */}
        <motion.div
          whileHover={{ x: -5 }}
          transition={{ duration: 0.2 }}
          className='flex gap-3 items-center'
        >
          <motion.div
            whileHover={{ rotate: -10 }}
            transition={{ duration: 0.2 }}
            className="shrink-0"
          >
            <Image
              src="/images/About/email 1.png"
              alt="email icon"
              width={56}
              height={56}
              className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
            />
          </motion.div>
          <div className='flex flex-col'>
            <p className='text-[#9D9D9D] text-xs sm:text-sm lg:text-base font-poppins p-0 m-0 font-medium'>Email</p>
            <a className='text-primary text-lg sm:text-xl font-bold p-0 m-0 font-poppins' href={`mailto:sirpi@example.com`}>
              sirpi@example.com
            </a>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}
