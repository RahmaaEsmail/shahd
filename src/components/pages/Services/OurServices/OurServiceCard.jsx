"use client";
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { slugify } from '@/lib/utils';
 const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },

  };
  
export default function OurServiceCard({ item }) {
  const router = useRouter();
  return (
    <motion.div
    onClick={() => {
       if (item?.id && item?.title) {
        router.push(`/services/${item.id}/${slugify(item.title)}`);
      }
    }}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      whileHover="hover"
      className="border-[3px] cursor-pointer rounded-[30px] h-134 w-full bg-white flex flex-col justify-between border-[#CDD0DB] overflow-hidden"
    >
      <div className="content pt-8 px-6">
        <div className="flex justify-between items-center">
          <div
            style={{ backgroundColor: item?.bgColor }}
            className="w-22.25 h-10 flex justify-center font-poppins uppercase items-center rounded-full text-black"
          >
            {item?.type}
          </div>

          <motion.div
            whileHover={{ rotate: 90 }}
            transition={{ duration: 0.3 }}
            style={{ backgroundColor: item?.mainColor }}
            className="w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
          >
            <div className="w-4 h-4 rounded-full bg-white" />
          </motion.div>
        </div>

        <div className="flex flex-col mt-3 gap-3">
          <motion.h2
            whileHover={{ x: 5 }}
            className="text-2xl lg:text-[40px] font-normal text-text"
          >
            {item?.title}
          </motion.h2>
          <p className="font-poppins text-sm lg:text-base font-light">{item?.desc}</p>
        </div>
      </div>

      <motion.div
        className="relative rounded-[30px] mt-5 overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={item?.image}
          alt={item?.title}
          width={332}
          height={308}
          className="w-full"
        />
        <motion.div
          className="absolute inset-0 z-3 bg-black/20"
          whileHover={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  )
}
