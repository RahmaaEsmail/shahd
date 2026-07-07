
// "use client";

// import Image from 'next/image';
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Button } from '../../../ui/button';
// import { useRouter } from 'next/navigation';
// import { useTranslation } from 'react-i18next';

// const images = [
//   {
//     id: 1,
//     image: "/SHAHD-IMAGE/BannerImage/image_banner_1.webp",
//     title: "banner image 1"
//   },
//   {
//     id: 2,
//     image: "/SHAHD-IMAGE/BannerImage/Ellipse 10.webp",
//     title: "banner image 2"
//   },
//   {
//     id: 3,
//     image: "/SHAHD-IMAGE/BannerImage/Ellipse 11.webp",
//     title: "banner image 11"
//   },
//   {
//     id: 4,
//     image: "/SHAHD-IMAGE/BannerImage/Ellipse 12.webp",
//     title: "banner image 12"
//   },
//   {
//     id: 5,
//     image: "/SHAHD-IMAGE/BannerImage/Ellipse 13.webp",
//     title: "banner image 13"
//   },
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.12,
//       delayChildren: 0.2,
//     },
//   },
// };

// const textVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.7,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// const thumbnailVariants = {
//   hidden: { opacity: 0, scale: 0.6 },
//   visible: (i) => ({
//     opacity: 1,
//     scale: 1,
//     transition: {
//       delay: 0.8 + i * 0.08,
//       duration: 0.4,
//       type: "spring",
//       stiffness: 200,
//     },
//   }),
// };

// export default function HomeBannerContentWithImage() {
//   const { t ,  i18n} = useTranslation();
//   const [selectedImage, setSelectedImage] = useState(images[0]);
//   const router = useRouter();

//   return (
//     <>
//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//         className="relative w-full"
//       >
//         {/* Union Background Shape */}
//        {i18n.language != "ar" && <motion.div
//           initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
//           animate={{ opacity: 1, scale: 1, rotate: 0 }}
//           transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
//           className="absolute hidden xl:block  -top-2  w-140 h-70 pointer-events-none z-10"
//         >
//           <Image
//             src="/SHAHD-IMAGE/Union.webp"
//             width={680}
//             height={300}
//             alt="Background decoration"
//             className="w-full h-full"
//             priority
//           />
//         </motion.div>}

//         {/* Title Content */}
//         <div className="relative z-10 w-full">
//           {/* Line 1 */}
//           <motion.h1
//             variants={textVariants}
//             className="text-[46px] text-center lg:text-left   lg:text-[47px] xl:text-[67px] font-normal text-[#DDB2B5] uppercase leading-tight tracking-wide"
//           >
//             {t("Glow in All Areas of")}
//           </motion.h1>

//           {/* Line 2: symbol + Your Life With */}
//           <motion.div
//             variants={textVariants}
//             className="flex justify-center lg:justify-start items-center gap-2 sm:gap-3 mt-2"
//           >
//             <motion.div
//               initial={{ rotate: -180, opacity: 0, scale: 0 }}
//               animate={{ rotate: 0, opacity: 1, scale: 1 }}
//               transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
//               whileHover={{ rotate: 360, scale: 1.1 }}
//               className="w-8 h-8 xs:w-10 xs:h-10 sm:w-14 sm:h-14 lg:w-23 lg:h-18 shrink-0"
//             >
//               <Image
//                 src="/SHAHD-IMAGE/symbol 1.webp"
//                 width={76}
//                 height={76}
//                 alt="Symbol"
//                 className="w-full h-full object-contain"
//               />
//             </motion.div>

//             <motion.span
//               className="text-[46px] text-center lg:text-left  xl:text-[67px] font-normal text-[#DDB2B5] uppercase tracking-wide border-l-4 border-secondary pl-2 sm:pl-5 leading-tight"
//               whileHover={{ x: 5 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               {t("Your Life With")}
//             </motion.span>
//           </motion.div>

//           {/* Line 3: Dr. Shahd */}
//           <motion.h1
//             variants={textVariants}
//             className="text-[46px] text-center lg:text-left  xl:text-[57px] font-normal mt-2 sm:mt-6 lg:mt-1 text-secondary uppercase tracking-[0.08em] sm:tracking-[0.14em]"
//           >
//             {t("Dr.Shahd Awad")}
//            </motion.h1>
//         </div>

//         {i18n.language == "ar" && <motion.div
//           initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
//           animate={{ opacity: 1, scale: 1, rotate: 0 }}
//           transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
//           className="absolute hidden xl:block  -top-2  w-140 h-70 pointer-events-none z-10"
//         >
//           <Image
//             src="/SHAHD-IMAGE/Union.webp"
//             width={680}
//             height={300}
//             alt="Background decoration"
//             className="w-full h-full rotate-180"
//             priority
//           />
//         </motion.div>}

//         {/* CTA Buttons */}
//         <motion.div
//           variants={textVariants}
//           className="lg:flex flex-row flex-wrap hidden lg:justify-start gap-3 mt-4 w-full"
//         >
//           <motion.div
//             whileHover={{ scale: 1.03, y: -2 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             <Button
//               onClick={() => router.push('/services')}
//               variant="default"
//               className="border-2 border-primary bg-transparent! text-primary hover:bg-primary! hover:text-white py-4 sm:py-6 md:py-8 px-5 sm:px-8 md:px-10 rounded-full text-xs sm:text-base md:text-[20px] font-normal uppercase tracking-wider transition-all duration-300"
//             >
//               {t("Get Start")}
//             </Button>
//           </motion.div>

//           <motion.div
//             whileHover={{ scale: 1.03, y: -2 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             <Button
//               onClick={() => router.push('/store')}
//               variant='secondary'
//               className="bg-secondary text-white py-4 sm:py-6 md:py-8 px-5 sm:px-8 md:px-15 rounded-full text-xs sm:text-base md:text-[20px] font-normal uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300"
//             >
//               {t("Explore")}
//             </Button>
//           </motion.div>
//         </motion.div>

//         {/* MOBILE: Large Image shown below text */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//           className="block xl:hidden mt-6 sm:mt-8 w-full h-[260px] xs:h-[300px] sm:h-[400px] md:h-[430px] rounded-[24px] sm:rounded-[32px] overflow-hidden"
//         >
//           <div className="relative w-full h-full">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={selectedImage.id}
//                 initial={{ opacity: 0, scale: 1.1 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.95 }}
//                 transition={{ duration: 0.5 }}
//                 className="absolute inset-0"
//               >
//                 <Image
//                   src={selectedImage.image}
//                   alt={selectedImage.title}
//                   fill
//                   className="object-cover"
//                   priority
//                 />
//               </motion.div>
//             </AnimatePresence>
//             <div className="absolute inset-0 bg-linear-to-t from-[#DDB2B5]/30 via-transparent to-transparent" />
//           </div>
//         </motion.div>

//         {/* Thumbnail Gallery */}
//         <motion.div
//           variants={textVariants}
//           className="flex gap-3 xl:gap-4 mt-3 w-full"
//         >
//           {[...images]?.reverse()?.map((item, index) => (
//             <motion.button
//               key={item.id}
//               custom={index}
//               variants={thumbnailVariants}
//               initial="hidden"
//               whileInView="visible"
//               whileHover={{
//                 scale: 1.15,
//                 y: -8,
//                 boxShadow: "4px 15px 30px rgba(221, 178, 181, 0.3)"
//               }}
//               style={item?.id == selectedImage?.id ? {
//                 boxShadow: "0px 4px 30px 10px #DDB2B5"
//               } : ""}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setSelectedImage(item)}
//               className={`relative overflow-hidden w-11 h-11 sm:w-14 sm:h-14  rounded-full transition-all duration-300 
//         ${selectedImage?.id === item?.id ? 'scale-125' : ''}`}
//             >
//               <Image
//                 src={item.image}
//                 alt={item.title}
//                 fill
//                 className="object-cover rounded-full"
//               />
//             </motion.button>
//           ))}
//         </motion.div>

//         {/* Description */}
//         <motion.p
//           variants={textVariants}
//           className="text-[#414141] font-poppins! text-sm sm:text-base lg:text-lg font-normal leading-relaxed w-full mt-1 lg:max-w-sm"
//         >
//           {t("Home Banner Desc")}
//         </motion.p>


//         <motion.div
//           variants={textVariants}
//           className="flex lg:hidden flex-row flex-wrap justify-center lg:justify-start gap-3 mt-0 w-full"
//         >
//           <motion.div
//             whileHover={{ scale: 1.03, y: -2 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             <Button
//               onClick={() => router.push('/services')}
//               variant="default"
//               className="border-2 border-primary bg-transparent! text-primary hover:bg-primary! hover:text-white py-4 sm:py-6 md:py-8 px-5 sm:px-8 md:px-10 rounded-full text-xs sm:text-base md:text-[20px] font-normal uppercase tracking-wider transition-all duration-300"
//             >
//               {t("Get Start")}
//             </Button>
//           </motion.div>

//           <motion.div
//             whileHover={{ scale: 1.03, y: -2 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             <Button
//               onClick={() => router.push('/store')}
//               variant='secondary'
//               className="bg-secondary text-white py-4 sm:py-6 md:py-8 px-5 sm:px-8 md:px-15 rounded-full text-xs sm:text-base md:text-[20px] font-normal uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300"
//             >
//               {t("Explore")}
//             </Button>
//           </motion.div>
//         </motion.div>

//         {/* Main Large Image - Desktop only (absolute positioned) */}
//         <motion.div
//           initial={{ opacity: 0, x: 100, scale: 0.9 }}
//           animate={{ opacity: 1, x: 0, scale: 1 }}
//           transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//           className="absolute top-0 right-0 lg:-right-4 w-100 h-125 min-[1280px]:w-109! max-[1405px]:w-129!  min-[1405px]:w-129! lg:h-full xl:w-157.5 xl:h-full hidden xl:block"
//         >
//           <div className="relative w-full h-full rounded-[50px] overflow-hidden">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={selectedImage.id}
//                 initial={{ opacity: 0, scale: 1.1 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.95 }}
//                 transition={{ duration: 0.5 }}
//                 className="absolute inset-0"
//               >
//                 <Image
//                   src={selectedImage.image}
//                   alt={selectedImage.title}
//                   fill
//                   className="object-cover"
//                   priority
//                 />
//               </motion.div>
//             </AnimatePresence>

//             {/* Gradient overlay */}
//             <div className="absolute inset-0 bg-linear-to-t from-[#DDB2B5]/30 via-transparent to-transparent" />

//             {/* Decorative dots */}
//             <div className="absolute top-8 right-8 flex flex-col gap-3">
//               {[...Array(5)].map((_, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   transition={{ delay: 1 + i * 0.1 }}
//                   className="w-3 h-3 rounded-full bg-white/70 backdrop-blur-sm"
//                 />
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>

//     </>
//   );
// }


"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../../ui/button';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

const images = [
  { id: 1, image: "/SHAHD-IMAGE/BannerImage/image_banner_1.webp", title: "banner image 1" },
  { id: 2, image: "/SHAHD-IMAGE/BannerImage/Ellipse 10.webp", title: "banner image 2" },
  { id: 3, image: "/SHAHD-IMAGE/BannerImage/Ellipse 11.webp", title: "banner image 11" },
  { id: 4, image: "/SHAHD-IMAGE/BannerImage/Ellipse 12.webp", title: "banner image 12" },
  { id: 5, image: "/SHAHD-IMAGE/BannerImage/Ellipse 13.webp", title: "banner image 13" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const thumbnailVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: 0.8 + i * 0.08, duration: 0.4, type: "spring", stiffness: 200 },
  }),
};

export default function HomeBannerContentWithImage({ data }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  // Use API images if available, fall back to static array
  const galleryImages =
    data?.images && data.images.length > 0
      ? data.images.map((img) => ({ id: img.id, image: img.image_url, title: "banner image", description: img.description }))
      : images;

  const [selectedImage, setSelectedImage] = useState(galleryImages[0]);
  const router = useRouter();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative h-full!  w-full"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Union Background Shape - Adjusts position and flip based on language */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: isRtl ? 10 : -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`absolute hidden xl:block -top-2 
          ${i18n?.language == "ar" ? "w-md" :"w-142"} ${(i18n?.language == "sk" || i18n?.language == "ar" || i18n?.language == "de") ? "h-60" : "h-63"} pointer-events-none z-10 ${isRtl ? "right-0" : "left-0"}`}
      >
        <Image
          src={isRtl ? "/SHAHD-IMAGE/BannerImage/arabic-union.png" : "/SHAHD-IMAGE/Union.webp"}
          width={isRtl ? 500 :680}
          height={300}
          alt="Background decoration"
          className={`w-full h-full`}
          priority
        />
      </motion.div>

      {/* Title Content */}
      <div className="relative z-10 w-full">
        {/* Line 1 */}
        <motion.h1
          variants={textVariants}
          className={`
            ${
              i18n?.language == "sk" ? "text-[46px]  lg:text-[39px] xl:text-[50px]" :
              (i18n?.language == "de") ? "text-[46px]  lg:text-[35px] xl:text-[48px]" :
              i18n?.language == "ar" ? "text-[46px]  lg:text-[35px] xl:text-[48px] font-bold!"
                : "text-[46px]  lg:text-[47px] xl:text-[64px]"} 
            text-center lg:text-start  font-normal text-[#DDB2B5] uppercase leading-tight tracking-wide`}
        >
          {t("Glow in All Areas of")}
        </motion.h1>

        {/* Line 2: symbol + Your Life With */}
        <motion.div
          variants={textVariants}
          className="flex justify-center lg:justify-start items-center gap-2 sm:gap-3 mt-2"
        >
          <motion.div
            initial={{ rotate: isRtl ? 180 : -180, opacity: 0, scale: 0 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
            whileHover={{ rotate: 360, scale: 1.1 }}
            className="w-8 h-8 xs:w-10 xs:h-10 sm:w-14 sm:h-14 lg:w-23 lg:h-18 shrink-0"
          >
            <Image
              src="/SHAHD-IMAGE/symbol 1.webp"
              width={76}
              height={76}
              alt="Symbol"
              className="w-full h-full object-contain"
            />
          </motion.div>

          <motion.span
            className={`
              ${i18n?.language == "sk" ? "text-[46px] mt-4!   lg:text-[50px] xl:text-[55px]" :
                i18n?.language == "ar" ? "text-[46px] mt-4!   lg:text-[46px] xl:text-[48px] font-bold!" :
                i18n?.language == "de" ? "text-[46px] mt-4!   lg:text-[46px] xl:text-[48px]" :
                  "text-[46px]  lg:text-[47px] xl:text-[60px]"} 
              text-primary! text-center lg:text-startfont-normal  uppercase tracking-wide leading-tight
              ${isRtl ? "border-r-4 pr-2 sm:pr-5" : "border-l-4 pl-2 sm:pl-5"} border-secondary`}
            whileHover={{ x: isRtl ? -5 : 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {t("Your Life With")}
          </motion.span>
        </motion.div>

        {/* Line 3: Dr. Shahd */}
        <motion.h1
          variants={textVariants}
          className={`
            ${i18n?.language == "sk" ?
            "text-[46px] mt-4!  lg:text-[39px] xl:text-[50px]" : 
            i18n?.language == "ar" ? "font-bold! text-[46px] mt-4!  lg:text-[35px] xl:text-[48px]" :
            i18n?.language == "de" ? "text-[46px] mt-4!  lg:text-[35px] xl:text-[48px]" 
            : "text-[46px]  lg:text-[40px] xl:text-[50px]"}  text-center lg:text-start  font-normal mt-2 sm:mt-6 lg:mt-1 text-secondary uppercase tracking-[0.08em] sm:tracking-[0.14em]`}
        >
          {t("Dr.Shahd Awad")}
        </motion.h1>
      </div>

      {/* CTA Buttons - Desktop */}
      <motion.div
        variants={textVariants}
        className="lg:flex flex-row flex-wrap hidden lg:justify-start gap-3 mt-4 w-full"
      >
        <CTAButtons t={t} router={router} />
      </motion.div>

      {/* MOBILE: Large Image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="block xl:hidden mt-6 sm:mt-8 w-full h-[260px] xs:h-[300px] sm:h-[400px] md:h-[430px] rounded-[24px] sm:rounded-[32px] overflow-hidden"
      >
        <div className="relative w-full h-full">
          <AnimateImage selectedImage={selectedImage} />
        </div>
      </motion.div>

      {/* Thumbnail Gallery */}
      <motion.div
        variants={textVariants}
        className="flex gap-3 xl:gap-4 mt-3 w-full"
      >
        {[...galleryImages]?.reverse()?.map((item, index) => (
          <motion.button
            key={item.id}
            custom={index}
            variants={thumbnailVariants}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.15, y: -8, boxShadow: "4px 15px 30px rgba(221, 178, 181, 0.3)" }}
            style={item?.id === selectedImage?.id ? { boxShadow: "0px 4px 30px 10px #DDB2B5" } : {}}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedImage(item)}
            className={`relative overflow-hidden w-11 h-11 sm:w-14 sm:h-14 rounded-full transition-all duration-300 ${selectedImage?.id === item?.id ? 'scale-125' : ''}`}
          >
            <Image src={item.image} alt={item.title} fill className="object-cover rounded-full" />
          </motion.button>
        ))}
      </motion.div>

      {/* Description */}
      <motion.p
        variants={textVariants}
        className="text-[#414141] pe-4 font-poppins! text-sm sm:text-base font-normal leading-relaxed w-full mt-4 lg:max-w-88 lg:text-start"
      >
        {selectedImage?.description || t("Home Banner Desc")}
      </motion.p>

      {/* CTA Buttons - Mobile */}
      <motion.div
        variants={textVariants}
        className="flex lg:hidden flex-row flex-wrap justify-center lg:justify-start gap-3 mt-4 w-full"
      >
        <CTAButtons t={t} router={router} />
      </motion.div>

      {/* Main Large Image - Desktop (Positioned Left if Arabic, Right if English) */}
      <motion.div
        initial={{ opacity: 0, x: isRtl ? -100 : 100, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`absolute top-0 ${isRtl ? "left-0 lg:-left-4" : "right-0 lg:-right-4"} w-100 h-125 min-[1280px]:w-109! max-[1405px]:w-129! min-[1405px]:w-129! lg:h-full xl:w-157.5 xl:h-full hidden xl:block`}
      >
        <div className="relative w-full h-full rounded-[50px] overflow-hidden">
          <AnimateImage selectedImage={selectedImage} />

          {/* Decorative dots - Swapped position for RTL */}
          <div className={`absolute top-8 ${isRtl ? "left-8" : "right-8"} flex flex-col gap-3`}>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="w-3 h-3 rounded-full bg-white/70 backdrop-blur-sm"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Sub-components for cleaner code
function CTAButtons({ t, router }) {
  return (
    <>
      <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
        <Button
          onClick={() => router.push('/services')}
          className="border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white py-5  px-5 rounded-full text-xs sm:text-base font-normal uppercase tracking-wider transition-all duration-300"
        >
          {t("Get Start")}
        </Button>
      </motion.div>
      <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
        <Button
          onClick={() => router.push('/store')}
          className="bg-secondary text-white py-5  px-5 rounded-full text-xs sm:text-base  font-normal uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {t("Explore")}
        </Button>
      </motion.div>
    </>
  );
}

function AnimateImage({ selectedImage }) {
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedImage.id}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image src={selectedImage.image} alt={selectedImage.title} fill className="object-cover" priority />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-linear-to-t from-[#DDB2B5]/30 via-transparent to-transparent" />
    </>
  );
}