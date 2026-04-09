"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { Input } from '../../../ui/input';
import { Select, SelectTrigger, SelectValue } from '../../../ui/select';
import { Textarea } from '../../../ui/textarea';
import { Button } from '../../../ui/button';
import Image from 'next/image';

export default function AboutContactForm() {
  return (
    <>
      <motion.form className='flex pr-4! pe-2 p-2 flex-col mt-6 gap-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
          <motion.div>
            <Input
              placeholder="Full Name"
              className="border bg-transparent! border-[#868686] placeholder:text-[#868686] rounded-full px-6 py-7 text-[#868686] font-poppins text-base font-medium"
            />
          </motion.div>

          <motion.div>
            <Input
              placeholder="Email Optional"
              className="border bg-transparent! border-[#868686] placeholder:text-[#868686] rounded-full px-6 py-7 text-[#868686] font-poppins text-base font-medium"
            />
          </motion.div>

          <motion.div>
            <Input
              placeholder="Phone Number"
              className="border bg-transparent! border-[#868686] placeholder:text-[#868686] rounded-full px-6 py-7 text-[#868686] font-poppins text-base font-medium"
            />
          </motion.div>

          <motion.div>
            <Select>
              <SelectTrigger className="border bg-transparent! w-full border-[#868686] placeholder:text-[#868686] rounded-full px-6 py-7 text-[#868686] font-poppins text-base font-medium">
                <SelectValue placeholder="Select Service" />
              </SelectTrigger>
            </Select>
          </motion.div>
        </div>

        <motion.div>
          <Textarea
            placeholder="Message"
            className="border bg-transparent! border-[#868686] placeholder:text-[#868686] rounded-[30px] min-h-37.5 px-6 py-7 text-[#868686] font-poppins text-base font-medium"
          />
        </motion.div>

        <Button
          variant='secondary'
          // Scaled button height slightly for mobile via responsive prefix if needed, otherwise kept your h-21.5
          className="uppercase text-white font-normal! rounded-full h-16 lg:h-21.5 mt-7 text-2xl lg:text-3xl w-full cursor-pointer"
        >
          Send Message
        </Button>
      </motion.form>

      {/* Contact Info - Stacks on mobile */}
      <motion.div className='flex flex-col md:flex-row justify-between mt-8 w-full gap-6 md:gap-2'>
        <div className='flex gap-1 items-center'>
            <Image src="/images/About/ic_outline-whatsapp.png" alt="wa" width={64} height={64} />
          <div className='flex flex-col'>
            <p className='text-[#9D9D9D] text-base p-0 m-0 font-poppins font-medium'>contact us</p>
            <a className='text-primary text-xl font-bold font-poppins' href={`tel:+00123456789`}>+001 23456789</a>
          </div>
        </div>

        <div className='flex gap-2 items-center'>
            <Image src="/images/About/email 1.png" alt="email" width={64} height={64} />
          <div className='flex flex-col'>
            <p className='text-[#9D9D9D] text-base font-poppins p-0 m-0 font-medium'>Email</p>
            <a className='text-primary text-xl font-bold font-poppins' href={`mailto:sirpi@example.com`}>sirpi@example.com</a>
          </div>
        </div>
      </motion.div>
    </>
  )
}