"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { Input } from '../../../ui/input';
import { Select, SelectTrigger, SelectValue } from '../../../ui/select';
import { Textarea } from '../../../ui/textarea';
import { Button } from '../../../ui/button';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function AboutContactForm() {
  const { t } = useTranslation();
  return (
    <>
      <motion.form className='flex pr-4! pe-0 p-2 flex-col gap-3'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
          <motion.div>
            <Input
              placeholder={t("Full Name")}
              className="border bg-transparent! border-[#868686] placeholder:text-[#868686] rounded-full px-4 py-4 text-[#868686] font-poppins text-base font-medium"
            />
          </motion.div>

          <motion.div>
            <Input
              placeholder={t("Email Optional")}
              className="border bg-transparent! border-[#868686] placeholder:text-[#868686] rounded-full px-4 py-4 text-[#868686] font-poppins text-base font-medium"
            />
          </motion.div>

          <motion.div>
            <Input
              placeholder={t("Phone Number")}
              className="border bg-transparent! border-[#868686] placeholder:text-[#868686] rounded-full px-4 py-4 text-[#868686] font-poppins text-base font-medium"
            />
          </motion.div>

          <motion.div>
            <Select>
              <SelectTrigger className="border bg-transparent! w-full border-[#868686] placeholder:text-[#868686] rounded-full px-4 py-4 text-[#868686] font-poppins text-base font-medium">
                <SelectValue placeholder={t("Select Service")} />
              </SelectTrigger>
            </Select>
          </motion.div>
        </div>

        <motion.div>
          <Textarea
            placeholder={t("Message")}
            className="border bg-transparent! border-[#868686] placeholder:text-[#868686] rounded-[30px] min-h-35 px-4 py-4 text-[#868686] font-poppins text-base font-medium"
          />
        </motion.div>

        <Button
          variant='secondary'
          // Scaled button height slightly for mobile via responsive prefix if needed, otherwise kept your h-21.5
          className="uppercase text-white font-normal! rounded-full h-13  mt-0 text-2xl w-full cursor-pointer"
        >
          {t("Send Message")}
        </Button>
      </motion.form>

      {/* Contact Info - Stacks on mobile */}
      <motion.div className='flex flex-col md:flex-row justify-between mt-3 w-full gap-6 md:gap-2'>
        <div className='flex gap-1 items-center'>
            <Image src="/SHAHD-IMAGE/About/ic_outline-whatsapp.webp" alt="wa" width={64} height={64} />
          <div className='flex flex-col'>
            <p className='text-[#9D9D9D] text-base p-0 m-0 font-poppins font-medium'>{t("contact us label")}</p>
            <a className='text-primary text-lg font-bold font-poppins' href={`tel:+00123456789`}>+001 23456789</a>
          </div>
        </div>

        <div className='flex gap-2 items-center'>
            <Image src="/SHAHD-IMAGE/About/email 1.webp" alt="email" width={64} height={64} />
          <div className='flex flex-col'>
            <p className='text-[#9D9D9D] text-base font-poppins p-0 m-0 font-medium'>{t("Email")}</p>
            <a className='text-primary text-lg font-bold font-poppins' href={`mailto:sirpi@example.com`}>sirpi@example.com</a>
          </div>
        </div>
      </motion.div>
    </>
  )
}