// "use client"
// import Image from 'next/image'
// import React from 'react'
// import { motion } from 'framer-motion'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Autoplay } from 'swiper/modules'

// // Import Swiper styles
// import 'swiper/css'

// const headerVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: [0.16, 1, 0.3, 1]
//     }
//   }
// }

// // Add slide animation variants
// const slideVariants = {
//   hidden: { opacity: 0, scale: 0.8, y: 30 },
//   visible: { 
//     opacity: 1, 
//     scale: 1, 
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: [0.16, 1, 0.3, 1]
//     }
//   },
// }

// const images = [
//   { id: 1, img: "/SHAHD-IMAGE/Weight-management/Component 36.webp" },
//   { id: 2, img: "/SHAHD-IMAGE/Weight-management/Component 37.webp" },
//   { id: 3, img: "/SHAHD-IMAGE/Weight-management/Component 38.webp" },
//   { id: 4, img: "/SHAHD-IMAGE/Weight-management/Component 33.webp" },
//   { id: 5, img: "/SHAHD-IMAGE/Weight-management/Component 36.webp" },
//   { id: 6, img: "/SHAHD-IMAGE/Weight-management/Component 38.webp" },
// ]

// export default function WeightManagementImages() {
//   return (
//     <section className='min-h-screen relative py-6 flex flex-col items-center justify-center overflow-hidden'>
//       {/* Background Layer */}
//       <div className='absolute inset-0 z-0'>
//         <Image 
//           src="/SHAHD-IMAGE/Weight-management/Desktop - 21.webp" 
//           alt="" 
//           fill 
//           className='object-cover' 
//         />
//         <div 
//           className='absolute inset-0'
//           style={{
//             background: 'linear-gradient(180deg, rgba(254, 255, 255, 0.7) 0%, rgba(221, 178, 181, 0.5) 50%, rgba(149, 188, 170, 0.5) 75%, rgba(255, 255, 255, 0.7) 100%)',
//           }}
//         />
//       </div>

//       {/* Content Container */}
//       <div className='relative z-10 w-full mx-auto px-4'>
//         {/* Header Text */}
//         <motion.div
//           variants={headerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: false, amount: 0.3 }}
//           className='max-w-4xl text-center mx-auto mb-6'
//         >
//           <p className='text-[#95BCAA] text-[22px] md:text-2xl font-bold font-poppins uppercase tracking-wider'>
//             Tailored To Your Body
//           </p>
//           <h2 className='text-3xl  text-[#DDB2B5] mt-2 font-normal leading-tight uppercase'>
//             Medical Expertise You Can Trust
//           </h2>
//           <p className='text-base  text-[#414141] font-poppins font-normal mt-2 max-w-2xl mx-auto leading-relaxed'>
//             Led by Dr. Shahd Awad, our program integrates professional medical knowledge with personalized care. 
//             No one-size-fits-all diet — every plan is crafted based on your metabolism, lifestyle, and health goals.
//           </p>
//         </motion.div>

//         {/* Swiper Implementation */}
//         <div className="w-full">
//           <Swiper
//             modules={[Autoplay]}
//             spaceBetween={10}
//             slidesPerView={1}
//             loop={true}
//             autoplay={{
//               delay: 2000,
//               disableOnInteraction: false,
//               pauseOnMouseEnter: true,
//             }}
//             breakpoints={{
//               640: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//               1280: { slidesPerView: 4 },
//             }}
//             className="pb-10"
//           >
//             {images.map((item, index) => (
//               <SwiperSlide key={item.id}>
//                 <motion.div
//                   variants={slideVariants}
//                   initial="hidden"
//                   whileInView="visible"
//                   whileHover="hover"
//                   viewport={{ once: false, amount: 0.3 }}
//                   custom={index}
//                   className="relative aspect-[332/536] w-full overflow-hidden! rounded-[30px] shadow-lg"
//                 >
//                   <Image 
//                     src={item.img} 
//                     alt={`Medical Expert ${item.id}`} 
//                     fill 
//                     className='object-cover transition-transform duration-500 overflow-hidden!' 
//                   />
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules' // Import Navigation module
import { ChevronLeft, ChevronRight } from 'lucide-react' // Using Lucide for custom arrows
import { useTranslation } from 'react-i18next'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation' // Import Navigation CSS

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

const slideVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  },
}

const images = [
  { id: 1, img: "/SHAHD-IMAGE/Weight-management/Component 36.webp" },
  { id: 2, img: "/SHAHD-IMAGE/Weight-management/Component 37.webp" },
  { id: 3, img: "/SHAHD-IMAGE/Weight-management/Component 38.webp" },
  { id: 4, img: "/SHAHD-IMAGE/Weight-management/Component 33.webp" },
  { id: 5, img: "/SHAHD-IMAGE/Weight-management/Component 36.webp" },
  { id: 6, img: "/SHAHD-IMAGE/Weight-management/Component 38.webp" },
]

export default function WeightManagementImages({ data }) {
  const { t } = useTranslation();

  const isDynamic = data && data.length > 0;
  const resolvedImages = isDynamic
    ? data.map((item, idx) => ({
        id: item.id || idx + 1,
        img: item.image_url,
      }))
    : images;

  return (
    <section className='min-h-screen relative py-6 flex flex-col items-center justify-center overflow-hidden'>
      {/* Background Layer */}
      <div className='absolute inset-0 z-0'>
        <Image
          src="/SHAHD-IMAGE/Weight-management/Desktop - 21.webp"
          alt=""
          fill
          className='object-cover'
        />
        <div
          className='absolute inset-0'
          style={{
            background: 'linear-gradient(180deg, rgba(254, 255, 255, 0.7) 0%, rgba(221, 178, 181, 0.5) 50%, rgba(149, 188, 170, 0.5) 75%, rgba(255, 255, 255, 0.7) 100%)',
          }}
        />
      </div>

      <div className='relative z-10 w-full mx-auto px-4'>
        {/* Header Text */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className='max-w-4xl text-center mx-auto mb-6'
        >
          <p className='text-[#95BCAA]  text-2xl font-bold font-poppins uppercase tracking-wider'>
            {t("Tailored to Your Body")}
          </p>
          <h2 className='text-3xl text-[#DDB2B5] mt-2 font-normal leading-tight uppercase'>
            {t("Medical Expertise You Can Trust")}
          </h2>
          <p className='text-base text-[#414141] font-poppins font-normal mt-2 max-w-2xl mx-auto leading-relaxed'>
            {t("Medical Expertise Weight Desc")}
          </p>
        </motion.div>

        {/* Swiper Implementation */}
        <div className="w-full relative group px-0"> {/* Added padding for arrows */}
          <Swiper
            modules={[Autoplay, Navigation]} // Add Navigation to modules
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-10"
          >
            {resolvedImages.map((item, index) => (
              <SwiperSlide key={item.id}>
                <motion.div
                  variants={slideVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover={{ scale: 1.02 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="relative aspect-[432/636] w-full overflow-hidden rounded-[30px] shadow-lg"
                >
                  <Image
                    src={item.img}
                    alt={`Medical Expert ${item.id}`}
                    fill
                    className='object-cover transition-transform duration-500'
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute  left-2 right-2 top-[50%]">
            {/* Custom Navigation Arrows */}
            <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-[#95BCAA] bg-[#95BCAA] text-white flex items-center justify-center  hover:bg-[#95BCAA] hover:text-white transition-all disabled:opacity-30">
              <ChevronLeft size={24} />
            </button>

            <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-[#95BCAA] bg-[#95BCAA] text-white flex items-center justify-center  hover:bg-[#95BCAA] hover:text-white transition-all disabled:opacity-30">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}