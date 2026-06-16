// "use client";

// import React from 'react';
// import { motion } from 'framer-motion';
// import { useTranslation } from 'react-i18next';

// const data = [
//   {
//     id: 1,
//     titleKey: "Vaginal Laser Rejuvenation",
//     descriptionKey: "Vaginal Laser Desc"
//   },
//   {
//     id: 2,
//     titleKey: "Labial Rejuvenation",
//     descriptionKey: "Labial Desc"
//   },
//   {
//     id: 3,
//     titleKey: "Vaginal Tightening",
//     descriptionKey: "Vaginal Tightening Desc"
//   },
//   {
//     id: 4,
//     titleKey: "Intimate Skin Brightening",
//     descriptionKey: "Intimate Skin Desc"
//   },
//   {
//     id: 5,
//     titleKey: "Urinary Incontinence",
//     descriptionKey: "Urinary Incontinence Desc"
//   },
//   {
//     id: 6,
//     titleKey: "Botox Vaginismus",
//     descriptionKey: "Vaginismus Desc"
//   },
//   {
//     id: 7,
//     titleKey: "Hifu Tightening",
//     descriptionKey: "Tightening Desc"
//   },
// ];

// const images = [
//   "/SHAHD-IMAGE/aethesic/cc9f30dcaf92f525ed575a75cef332206f514dca.webp",
//   "/SHAHD-IMAGE/aethesic/131fde53d9d110730c901e05f37fced1c4d0f3b1.webp",
//   "/SHAHD-IMAGE/aethesic/eb9d25bc2876da498bfccf2c6ee0fcfb3985cd78.webp",
//   "/SHAHD-IMAGE/aethesic/131fde53d9d110730c901e05f37fced1c4d0f3b1.webp"
// ];

// // Animation Variants
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1 }
//   }
// };

// const itemVariants = {
//   hidden: { opacity: 0, x: -20 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
// };

// export default function AestheticGynecologyTreatments() {
//   const { t, i18n } = useTranslation();
//   const isRtl = i18n.language === 'ar';
//   return (
//     <div dir="ltr" className='min-h-[90vh] py-12 lg:py-20 relative bg-[#F4E7E885] overflow-hidden'>
      
//       {/* Header Section */}
//       <motion.div 
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: false }}
//         className="flex flex-col justify-center mb-5  text-center items-center gap-1 px-4"
//       >
//         <p className="text-secondary font-bold font-poppins tracking-wider text-2xl capitalize">
//           {t("Available Treatments")}
//         </p>
//         <h2 className="text-primary text-3xl leading-tight max-w-4xl uppercase font-medium">
//           {t("Advanced Techniques")}
//         </h2>
//       </motion.div>

//       {/* Main Content Grid - items-stretch is key for full height */}
//       <div className='main-container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch'>
        
//         {/* Left Side: Treatment List */}
//         <motion.div 
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: false }}
//           className="flex flex-col gap-2"
//         >
//           {data.map((item) => (
//             <motion.div 
//               key={item.id}
//               variants={itemVariants}
//               whileHover={{ x: isRtl ? -10 : 10 }}
//               className={`bg-white flex flex-col gap-2 rounded-[12px] p-[13px_17px] ${isRtl ? "border-e-[8px]! border-e-primary!" : "border-s-[8px] border-s-primary"} shadow-sm hover:shadow-md transition-all duration-300`}
//             >
//               <h4 className="text-xl  font-normal text-primary leading-tight">
//                 {t(item.titleKey)}
//               </h4>
//               <p className="text-[#414141] text-sm  tracking-[-0.15px] font-light font-poppins leading-[1.6]">
//                 {t(item.descriptionKey)}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Right Side: Image Grid - Stretches to fill full height */}
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: false }}
//           className='grid grid-cols-2 gap-3 lg:sticky lg:top-10 h-full lg:h-auto'
//         >
//           {images.map((src, index) => (
//             <div key={index} className="overflow-hidden rounded-[12px] h-full">
//               <motion.img 
//                 whileHover={{ scale: 1.05 }}
//                 className="w-full h-full object-cover aspect-[3/4] lg:aspect-auto" 
//                 src={src} 
//                 alt={`Treatment ${index + 1}`}
//               />
//             </div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Decorative Overlays */}
//       <div className='absolute -bottom-1 left-0 right-0 z-20 w-full h-[40px] md:h-[53px] pointer-events-none'>
//         <img src="/SHAHD-IMAGE/aethesic/Rectangle 24.webp" className='w-full h-full object-cover' alt="" />
//       </div>

//       <div className='absolute top-0 rotate-180 left-0 right-0 z-20 w-full h-[40px] md:h-[53px] pointer-events-none'>
//         <img src="/SHAHD-IMAGE/aethesic/Rectangle 24.webp" className='w-full h-full object-cover' alt="" />
//       </div>
//     </div>
//   );
// }


"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const data = [
  { id: 1, titleKey: "Vaginal Laser Rejuvenation", descriptionKey: "Vaginal Laser Desc" },
  { id: 2, titleKey: "Labial Rejuvenation", descriptionKey: "Labial Desc" },
  { id: 3, titleKey: "Vaginal Tightening", descriptionKey: "Vaginal Tightening Desc" },
  { id: 4, titleKey: "Intimate Skin Brightening", descriptionKey: "Intimate Skin Desc" },
  { id: 5, titleKey: "Urinary Incontinence", descriptionKey: "Urinary Incontinence Desc" },
  { id: 6, titleKey: "Botox Vaginismus", descriptionKey: "Vaginismus Desc" },
  { id: 7, titleKey: "Hifu Tightening", descriptionKey: "Tightening Desc" },
];

const images = [
  "/SHAHD-IMAGE/aethesic/cc9f30dcaf92f525ed575a75cef332206f514dca.webp",
  "/SHAHD-IMAGE/aethesic/131fde53d9d110730c901e05f37fced1c4d0f3b1.webp",
  "/SHAHD-IMAGE/aethesic/eb9d25bc2876da498bfccf2c6ee0fcfb3985cd78.webp",
  "/SHAHD-IMAGE/aethesic/131fde53d9d110730c901e05f37fced1c4d0f3b1.webp"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

export default function AestheticGynecologyTreatments() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  return (
    /* 1. FIXED: Set the layout direction dynamically so Tailwind's "s" and "e" utilities work */
    <div dir={isRtl ? "rtl" : "ltr"} className='min-h-[90vh] py-12 lg:py-20 relative bg-[#F4E7E885] overflow-hidden'>
      
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex flex-col justify-center mb-5 text-center items-center gap-1 px-4"
      >
        <p className="text-secondary font-bold font-poppins tracking-wider text-2xl capitalize">
          {t("Available Treatments")}
        </p>
        <h2 className="text-primary text-3xl leading-tight max-w-4xl uppercase font-medium">
          {t("Advanced Techniques")}
        </h2>
      </motion.div>

      {/* Main Content Grid */}
      <div className='main-container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch'>
        
        {/* Left Side: Treatment List */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col gap-2"
        >
          {data.map((item) => (
            <motion.div 
              key={item.id}
              variants={itemVariants}
              whileHover={{ x: isRtl ? -10 : 10 }}
              /* 2. FIXED: Replaced complex JS template rules with single native 'border-s-[8px] border-s-primary' */
              // className="bg-white flex flex-col gap-2 rounded-[12px] p-[13px_17px] border-s-[8px] border-s-primary shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h4 className="text-xl font-normal text-primary leading-tight">
                {t(item.titleKey)}
              </h4>
              <p className="text-[#414141] text-sm tracking-[-0.15px] font-light font-poppins leading-[1.6]">
                {t(item.descriptionKey)}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Side: Image Grid */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className='grid grid-cols-2 gap-3 lg:sticky lg:top-10 h-full lg:h-auto'
        >
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-[12px] h-full">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                className="w-full h-full object-cover aspect-[3/4] lg:aspect-auto" 
                src={src} 
                alt={`Treatment ${index + 1}`}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Overlays */}
      <div className='absolute -bottom-1 left-0 right-0 z-20 w-full h-[40px] md:h-[53px] pointer-events-none'>
        <img src="/SHAHD-IMAGE/aethesic/Rectangle 24.webp" className='w-full h-full object-cover' alt="" />
      </div>

      <div className='absolute top-0 rotate-180 left-0 right-0 z-20 w-full h-[40px] md:h-[53px] pointer-events-none'>
        <img src="/SHAHD-IMAGE/aethesic/Rectangle 24.webp" className='w-full h-full object-cover' alt="" />
      </div>
    </div>
  );
}