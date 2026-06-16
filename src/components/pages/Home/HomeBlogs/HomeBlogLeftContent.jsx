// "use client";
// import { AnimatePresence, motion } from 'framer-motion'
// import { useRouter } from 'next/navigation';
// import React from 'react'

// export default function HomeBlogLeftContent({ selectedBlog }) {
//   const router = useRouter();
//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         key={selectedBlog.id}
//         initial={{ x: -50, opacity: 0 }}
//         whileInView={{ x: 0, opacity: 1 }}
//         viewport={{ once: false }}
//         exit={{ x: 50, opacity: 0 }}
//         transition={{ duration: 0.5, ease: "easeOut" }}
//         className='flex flex-col justify-center mx-auto lg:justify-end max-w-2xl gap-4'
//       >
//         <motion.h3
//           initial={{ y: -24, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           viewport={{ once: false }}
//           transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
//           className='text-3xl sm:text-4xl md:text-5xl lg:text-[70px] xl:text-[100px] font-normal text-[#FFF9F7] leading-tight text-center lg:text-left'
//         >
//           {selectedBlog.title}
//         </motion.h3>

//         <motion.div
//           initial={{ y: -24, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           viewport={{ once: false }}
//           transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
//           className='flex justify-center lg:justify-start'
//         >

//           <p className='text-base md:text-lg lg:text-2xl font-normal max-w-lg  font-poppins text-[#FFF9F7] text-center lg:text-left px-4 lg:px-0'>
//             {selectedBlog.sub_title}
//           </p>
//         </motion.div>

//         <motion.div 
"use client";
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/navigation';
import React from 'react'
import { useTranslation } from 'react-i18next';

export default function HomeBlogLeftContent({ selectedBlog }) {
  const { t , i18n } = useTranslation  ();
  const dir = i18n?.language == "ar" ? "right" : "left"
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={selectedBlog.id}
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }}
        exit={{ x: 50, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className='flex flex-col justify-center mx-auto lg:justify-end max-w-2xl'
      >
        <motion.h3
          initial={{ y: -24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className={`text-3xl sm:text-4xl   xl:text-[50px] font-normal text-[#FFF9F7] leading-tight text-[${dir}]`}
        >
          {selectedBlog.title}
        </motion.h3>

        <motion.div
          initial={{ y: -24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className='flex justify-center lg:justify-start'
        >

          <p className={`text-base md:text-lg  font-normal max-w-lg  font-poppins text-[#FFF9F7] text-[${dir}] px-4 lg:px-0`}>
            {selectedBlog.sub_title}
          </p>
        </motion.div>

        <motion.div 
          className="flex justify-center mt-3 lg:justify-start"
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.button
            onClick={() => router.push(`/blogs/${selectedBlog.id}`)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="uppercase bg-secondary w-fit font-normal text-sm  text-white rounded-[100px] py-2 px-4 hover:bg-secondary/80 transition-colors"
          >
            {t("Show More")}
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
