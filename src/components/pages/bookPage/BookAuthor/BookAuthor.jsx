// "use client";
// import Image from 'next/image'
// import React from 'react'
// import { motion } from 'framer-motion'

// export default function BookAuthor() {
//   return (
//     <motion.div
//       className="flex flex-col lg:grid lg:grid-cols-[2.5fr_9.5fr] gap-10 lg:gap-14 items-center mt-5"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: false, amount: 0.2 }}
//     >
//       {/* Author Image */}
//       <motion.div
//         className="w-[300px] md:w-[242px] h-auto relative mx-auto lg:mx-0"
//         initial={{ opacity: 0, x: -50, rotate: -5 }}
//         whileInView={{ opacity: 1, x: 0, rotate: 0 }}
//         transition={{
//           type: "spring",
//           stiffness: 80,
//           damping: 15,
//           duration: 0.8
//         }}
//         whileHover={{
//           scale: 1.05,
//           rotate: 2,
//           transition: { type: "spring", stiffness: 400 }
//         }}
//       >
//         <div className="relative overflow-hidden rounded-full lg:rounded-[121px] aspect-square lg:aspect-auto">
//           <Image
//             src="/SHAHD-IMAGE/Book/shahd-img.webp"
//             alt='shahd-img'
//             width={242}
//             height={337}
//             className='object-cover w-full h-full transition-transform duration-300 hover:scale-110'
//           />
//         </div>
//       </motion.div>

//       {/* Content section */}
//       <motion.div
//         className="w-full flex flex-col gap-4 text-center lg:text-left"
//         initial={{ opacity: 0, x: 50 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{
//           type: "spring",
//           stiffness: 70,
//           damping: 15,
//           delay: 0.2
//         }}
//       >
//         <motion.h5
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           className='font-poppins text-secondary text-xl lg:text-[27px] font-bold'
//         >
//           About the author
//         </motion.h5>

//         <motion.h2
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.4, type: "spring" }}
//           className='text-primary text-3xl md:text-5xl lg:text-[56px] font-normal leading-tight lg:leading-16'
//         >
//           Dr. Shahd awad
//         </motion.h2>

//         <motion.div
//           className='font-poppins max-w-5xl text-[#414141] text-sm lg:text-base font-normal leading-relaxed lg:leading-8'
//           initial="hidden"
//           whileInView="visible"
//           variants={{
//             hidden: { opacity: 0 },
//             visible: {
//               opacity: 1,
//               transition: {
//                 staggerChildren: 0.2,
//                 delayChildren: 0.5
//               }
//             }
//           }}
//         >
//           {[
//             "Dr. Shahd is a physician, wellness leader, and transformation coach dedicated to helping women build confidence, clarity, and purpose from the inside out.",
//             "With a unique blend of medical knowledge, emotional intelligence, and personal development expertise, she has guided thousands of women through journeys of healing, growth, and self-discovery — not by changing who they are, but by helping them reconnect with who they truly are."
//           ].map((line, index) => (
//             <motion.p
//               key={index}
//               variants={{
//                 hidden: { y: 20, opacity: 0 },
//                 visible: {
//                   y: 0,
//                   opacity: 1,
//                   transition: { type: "spring", stiffness: 100 }
//                 }
//               }}
//               className="mb-4 lg:mb-0"
//             >
//               {line}
//             </motion.p>
//           ))}
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   )
// }

"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function BookAuthor({ data }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar")
    ? "ar"
    : i18n.language?.startsWith("sk")
      ? "sk"
      : "en";

  const subtitle = data?.subtitle || t("About the author");
  const title = data?.title || t("Dr. Shahd awad");
  const description = data?.description;
  const authorImg = data?.image_url || "/SHAHD-IMAGE/Book/shahd-img.webp";

  return (
    <motion.div
      dir="ltr"
      className="flex flex-col lg:grid lg:grid-cols-[2.5fr_9.5fr] gap-10 lg:gap-14 items-center mt-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Author Image */}
      <motion.div
        className="w-[300px] md:w-[242px] h-auto relative mx-auto lg:mx-0 z-10"
        initial={{
          opacity: 0,
          x: -80,
          scale: 0.9,
          rotate: -3,
          filter: "blur(5px)",
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          scale: 1,
          rotate: 0,
          filter: "blur(0px)",
        }}
        whileHover={{
          scale: 1.08,
          rotate: 2,
          transition: { type: "spring", stiffness: 400, damping: 10 },
        }}
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          y: {
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          },
        }}
      >
        <div className="relative overflow-hidden rounded-full lg:rounded-[121px] aspect-square lg:aspect-auto shadow-2xl">
          <Image
            src={authorImg}
            alt="Dr. Shahd Awad"
            width={242}
            height={337}
            className="object-cover w-full h-full"
          />

          {/* Subtle Shine Overlay Effect */}
          <motion.div
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent pointer-events-none"
          />
        </div>

        {/* Decorative background element to add depth */}
        <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-secondary/10 rounded-full lg:rounded-[121px] blur-2xl" />
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
          delay: 0.2,
        }}
      >
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`font-poppins text-secondary text-2xl  font-bold ${i18n?.language == "ar" ? "text-right" : "text-left"}`}
        >
          {subtitle}
        </motion.h4>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: "spring" }}
          className={`text-primary text-3xl  font-normal leading-tight lg:leading-16 ${i18n?.language == "ar" ? "text-right" : "text-left"}`}
        >
          {title}
        </motion.h2>

        <motion.div
          className={`font-poppins max-w-5xl text-[#414141] text-sm lg:text-base font-normal leading-relaxed lg:leading-8  ${i18n?.language == "ar" ? "text-right" : "text-left"}`}
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.5,
              },
            },
          }}
        >
          {description ? (
            <motion.p
              dangerouslySetInnerHTML={{ __html: description }}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { type: "spring", stiffness: 100 },
                },
              }}
              className="mb-4 lg:mb-0"
            ></motion.p>
          ) : (
            [t("Book Author Line 1"), t("Book Author Line 2")].map(
              (line, index) => (
                <motion.p
                  key={index}
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: { type: "spring", stiffness: 100 },
                    },
                  }}
                  className="mb-4 lg:mb-0"
                >
                  {line}
                </motion.p>
              ),
            )
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
