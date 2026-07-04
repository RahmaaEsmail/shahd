// "use client";
// import Image from 'next/image'
// import React, { useRef } from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { motion, useInView } from 'framer-motion'
// import { Autoplay, Pagination, Navigation, EffectCreative } from 'swiper/modules'
// import { ChevronLeft, ChevronRight } from 'lucide-react'

// // Import Swiper styles
// import 'swiper/css'
// import 'swiper/css/pagination'
// import 'swiper/css/navigation'
// import 'swiper/css/effect-creative'

// const images = [
//   {
//     id: 1,
//     img: "/SHAHD-IMAGE/Academy/Rectangle 4357.webp",
//     title: "Advanced Hair Treatment Techniques",
//     date: "March 15, 2024",
//     social:"tiktok",
//   },
//   {
//     id: 2,
//     img: "/SHAHD-IMAGE/Academy/Rectangle 4358.webp",
//     title: "Nutrition & Skin Health Workshop",
//     date: "March 10, 2024",
//     social:"instagram", 
//   },
//   {
//     id: 3,
//     img: '/SHAHD-IMAGE/Academy/Rectangle 4359.webp',
//     title: "Bridal Beauty Masterclass",
//     date: "March 5, 2024",
//     social:"facebook",
//   },
//   {
//     id: 4,
//     img: "/SHAHD-IMAGE/Academy/Rectangle 4360.webp",
//     title: "Holistic Wellness Summit",
//     date: "February 28, 2024",
//     social:"tiktok",
//   },
//   {
//     id: 5,
//     img: "/SHAHD-IMAGE/Academy/Rectangle 4361.webp",
//     title: "Medical Aesthetics Conference",
//     date: "February 20, 2024",
//     social:"instagram",
//   },
//    {
//     id: 6,
//     img: "/SHAHD-IMAGE/Academy/Rectangle 4358.webp",
//     title: "Nutrition & Skin Health Workshop",
//     date: "March 10, 2024",
//     social:"facebook",
//   },
//   {
//     id: 7,
//     img: '/SHAHD-IMAGE/Academy/Rectangle 4359.webp',
//     title: "Bridal Beauty Masterclass",
//     date: "March 5, 2024",
//     social:"twitter",
//   },
// ]

// export default function AcademyUpdate() {
//   const sectionRef = useRef(null)
//   const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
//   const swiperRef = useRef(null)

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3
//       }
//     }
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" }
//     }
//   }

//   return (
//     <motion.div 
//       ref={sectionRef}
//       initial="hidden"
//       whileInView={isInView ? "visible" : "hidden"}
//       variants={containerVariants}
//       className='my-16 lg:my-24 relative overflow-hidden'
//     >
//       <div className='main-container relative z-10'>
//         {/* Header Section */}
//         <motion.div 
//           variants={itemVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{once: false, amount : 0.3}}
//           className='text-center mb-12'
//         >
//           <motion.h4 
//             variants={itemVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{once: false, amount : 0.3}}
//             className='text-primary text-4xl md:text-5xl lg:text-[64px] font-normal leading-tight'
//           >
//             Stay Updated
//           </motion.h4>
//         </motion.div>

//         {/* Swiper Container */}
//         <motion.div 
//           variants={itemVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{once: false, amount : 0.3}}
//           className='relative group'
//         >
//           <Swiper
//             onSwiper={(swiper) => (swiperRef.current = swiper)}
//             spaceBetween={0}
//             slidesPerView={1}
//             loop={true}
//             autoplay={{
//               delay: 3000,
//               disableOnInteraction: false,
//               pauseOnMouseEnter: true
//             }}
//             // effect={'creative'}
//             // creativeEffect={{
//             //   prev: {
//             //     shadow: true,
//             //     translate: [0, 0, -400]
//             //   },
//             //   next: {
//             //     translate: [0, 0, -400]
//             //   }
//             // }}
//             modules={[Autoplay, Pagination, Navigation]}
//             breakpoints={{
//               320: {
//                 slidesPerView: 1.2,
//                 spaceBetween: 10
//               },
//               640: {
//                 slidesPerView: 2.5,
//                 spaceBetween: 20
//               },
//               1024: {
//                 slidesPerView: 5,
//                 spaceBetween: 0
//               }
//             }}
//             className='h-[400px] lg:h-[450px] rounded-[24px]'
//           >
//             {images?.map((item, index) => (
//               <SwiperSlide key={item?.id}>
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   // whileHover={{ y: -10 }}
//                   className='relative h-full w-full rounded-[24px] overflow-hidden cursor-pointer group/slide'
//                 >
//                   {/* Image with Parallax */}
//                   <motion.div
//                     whileHover={{ scale: 1.1 }}
//                     transition={{ duration: 0.6 }}
//                     className='absolute inset-0'
//                   >
//                     <Image 
//                       src={item?.img} 
//                       alt={`academy update ${item.id}`}
//                       fill
//                       className='object-cover'
//                       sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
//                     />
//                   </motion.div>

//                   {/* Gradient Overlay */}
//                   {/* <motion.div 
//                     initial={{ opacity: 0 }}
//                     whileHover={{ opacity: 1 }}
//                     transition={{ duration: 0.3 }}
//                     className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent'
//                   /> */}
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
"use client";
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next';
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Instagram, Facebook, Twitter, Link as LinkIcon, ChevronLeft, ChevronRight, X, Volume2, VolumeX } from 'lucide-react'
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-creative'

// Social Icon Component
const SocialIcon = ({ type }) => {
  const iconClass = "text-white w-10 h-10";
  switch (type) {
    case 'instagram': return <Instagram className={iconClass} />;
    case 'facebook': return <Facebook className={iconClass} />;
    case 'twitter': return <Twitter className={iconClass} />;
    case 'tiktok': 
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass}>
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        </svg>
      );
    default: return <LinkIcon className={iconClass} />;
  }
}

const images = [
  {
    id: 1,
    img: "/SHAHD-IMAGE/Academy/Rectangle 4357.webp",
    titleKey: "Academy Update Title 1",
    captionKey: "Academy Update Caption 1",
    date: "March 15, 2024",
    social: "tiktok",
    user: {
      name: "dr.shahd_academy",
      avatar: "/SHAHD-IMAGE/Academy/logo 1.webp"
    },
    isVideo: false
  },
  {
    id: 2,
    img: "/SHAHD-IMAGE/Academy/Rectangle 4358.webp",
    titleKey: "Academy Update Title 2",
    captionKey: "Academy Update Caption 2",
    date: "March 10, 2024",
    social: "instagram",
    user: {
      name: "dr.shahd_academy",
      avatar: "/SHAHD-IMAGE/Academy/logo 1.webp"
    },
    isVideo: false
  },
  {
    id: 3,
    img: '/SHAHD-IMAGE/Academy/Rectangle 4359.webp',
    titleKey: "Academy Update Title 3",
    captionKey: "Academy Update Caption 3",
    date: "March 5, 2024",
    social: "facebook",
    user: {
      name: "dr.shahd_academy",
      avatar: "/SHAHD-IMAGE/Academy/logo 1.webp"
    },
    isVideo: false
  },
  {
    id: 4,
    img: "/SHAHD-IMAGE/Academy/Rectangle 4360.webp",
    titleKey: "Academy Update Title 4",
    captionKey: "Academy Update Caption 4",
    date: "February 28, 2024",
    social: "tiktok",
    user: {
      name: "dr.shahd_academy",
      avatar: "/SHAHD-IMAGE/Academy/logo 1.webp"
    },
    isVideo: false
  },
  {
    id: 5,
    img: "/SHAHD-IMAGE/Academy/Rectangle 4361.webp",
    titleKey: "Academy Update Title 5",
    captionKey: "Academy Update Caption 5",
    date: "February 20, 2024",
    social: "instagram",
    user: {
      name: "dr.shahd_academy",
      avatar: "/SHAHD-IMAGE/Academy/logo 1.webp"
    },
    isVideo: false
  },
  {
    id: 6,
    img: "/SHAHD-IMAGE/Academy/Rectangle 4358.webp",
    titleKey: "Academy Update Title 6",
    captionKey: "Academy Update Caption 6",
    date: "March 10, 2024",
    social: "facebook",
    user: {
      name: "dr.shahd_academy",
      avatar: "/SHAHD-IMAGE/Academy/logo 1.webp"
    },
    isVideo: false
  },
  {
    id: 7,
    img: '/SHAHD-IMAGE/Academy/Rectangle 4359.webp',
    titleKey: "Academy Update Title 7",
    captionKey: "Academy Update Caption 7",
    date: "March 5, 2024",
    social: "twitter",
    user: {
      name: "dr.shahd_academy",
      avatar: "/SHAHD-IMAGE/Academy/logo 1.webp"
    },
    isVideo: false
  },
]

export default function AcademyUpdate({ data }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar") ? "ar" : i18n.language?.startsWith("sk") ? "sk" : "en";
  const dir = i18n?.language == "ar" ? "rtl" : "ltr";
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  const swiperRef = useRef(null)
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(null)
  const [isMuted, setIsMuted] = React.useState(true)

  const isDynamic = data && data.length > 0;
  const resolvedImages = isDynamic
    ? data.map((item, idx) => ({
        id: item.id || idx + 1,
        img: item.image_url,
        title: item[`title_${lang}`] || item.title_en,
        caption: item[`caption_${lang}`] || item.caption_en,
        date: item.created_at || "Recent",
        social: item.social_platform || "instagram",
        user: {
          name: "dr.shahd_academy",
          avatar: "/SHAHD-IMAGE/Academy/logo 1.webp"
        },
        isVideo: item.is_video || false,
        videoUrl: item.video_url || null
      }))
    : images;

  const openModal = (index) => {
    setSelectedItemIndex(index)
  }

  const closeModal = () => {
    setSelectedItemIndex(null)
  }

  const nextItem = () => {
    setSelectedItemIndex((prev) => (prev + 1) % resolvedImages.length)
  }

  const prevItem = () => {
    setSelectedItemIndex((prev) => (prev - 1 + resolvedImages.length) % resolvedImages.length)
  }

  const selectedItem = selectedItemIndex !== null ? resolvedImages[selectedItemIndex] : null

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <motion.div 
      dir={dir}
      ref={sectionRef}
      initial="hidden"
      whileInView={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className='my-16  relative overflow-hidden'
    >
      <div className='main-container relative z-10'>
        {/* Header Section */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: false, amount : 0.3}}
          className='text-center mb-6'
        >
          <motion.h4 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{once: false, amount : 0.3}}
            className='text-primary text-3xl font-normal leading-tight'
          >
            {t('Stay Updated')}
          </motion.h4>
        </motion.div>

        {/* Swiper Container */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: false, amount : 0.3}}
          className='relative group px-4 md:px-0'
        >
          {/* Custom Navigation Arrows */}
          <div className="absolute top-1/2 -left-4 md:-left-8 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
            <motion.button 
              whileHover={{ scale: 1.1, backgroundColor: '#DDB2B5', color: 'white' }}
              whileTap={{ scale: 0.9 }}
              onClick={() => swiperRef.current?.slidePrev()}
              className='w-12 h-12 rounded-full bg-white/80 backdrop-blur-md shadow-lg flex items-center justify-center text-primary border border-primary/20 transition-colors'
            >
              <ChevronLeft size={24} />
            </motion.button>
          </div>

          <div className="absolute top-1/2 -right-4 md:-right-8 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
            <motion.button 
              whileHover={{ scale: 1.1, backgroundColor: '#DDB2B5', color: 'white' }}
              whileTap={{ scale: 0.9 }}
              onClick={() => swiperRef.current?.slideNext()}
              className='w-12 h-12 rounded-full bg-white/80 backdrop-blur-md shadow-lg flex items-center justify-center text-primary border border-primary/20 transition-colors'
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={0}
            dir={dir}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              320: {
                slidesPerView: 1.2,
                spaceBetween: 10
              },
              640: {
                slidesPerView: 2.5,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 0
              }
            }}
            className='h-[400px] lg:h-[450px] rounded-[24px]'
          >
            {resolvedImages?.map((item, index) => (
              <SwiperSlide key={item?.id}>
                <div 
                  onClick={() => openModal(index)}
                  className="block h-full w-full"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className='relative h-full w-full rounded-[24px] overflow-hidden cursor-pointer group/slide'
                  >
                    {/* Image with Parallax */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className='absolute inset-0'
                    >
                      <Image 
                        src={item?.img} 
                        alt={`academy update ${item.id}`}
                        fill
                        className='object-cover'
                        sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                      />
                    </motion.div>

                    {/* Black Overlay and Social Icon on Hover */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className='absolute inset-0 bg-black/80 flex items-center justify-center z-20'
                    >
                      <SocialIcon type={item.social} />
                    </motion.div>
                  </motion.div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Social Modal */}
          <Dialog open={selectedItemIndex !== null} onOpenChange={(open) => !open && closeModal()}>
            <DialogContent className="max-w-[95vw] md:max-w-[1000px] p-0 overflow-hidden bg-transparent border-none shadow-none flex items-center justify-center gap-4">
              {/* Left Arrow */}
              <button 
                onClick={(e) => { e.stopPropagation(); prevItem(); }}
                className="hidden md:flex w-12 h-12 rounded-full bg-white/10 backdrop-blur-md items-center justify-center text-white hover:bg-white/20 transition-all shrink-0"
              >
                <ChevronLeft size={32} />
              </button>

              {/* Modal Body */}
              <div className="bg-white rounded-xl overflow-hidden flex flex-col md:flex-row w-full md:h-[650px] max-h-[90vh] relative font-poppins">
                {/* Media Section */}
                <div className="w-full md:w-[60%] h-[400px] md:h-full bg-black relative flex items-center justify-center">
                  {selectedItem?.isVideo ? (
                    <video 
                      src={selectedItem.videoUrl} 
                      autoPlay 
                      loop 
                      muted={isMuted}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <Image 
                      src={selectedItem?.img} 
                      alt={selectedItem?.title || ""}
                      fill
                      className="object-cover"
                    />
                  )}
                  
                  {selectedItem?.isVideo && (
                    <button 
                      onClick={() => setIsMuted(!isMuted)}
                      className="absolute top-4 left-4 p-2 rounded-full bg-black/50 text-white z-10"
                    >
                      {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </button>
                  )}
                </div>

                {/* Info Section */}
                <div className="w-full md:w-[40%] flex flex-col h-full bg-white overflow-hidden">
                  {/* User Header */}
                  <div className="p-4 border-b flex items-center gap-3 shrink-0">
                    <Avatar className="w-10 h-10 border">
                      <AvatarImage src={selectedItem?.user.avatar} />
                      <AvatarFallback>SA</AvatarFallback>
                    </Avatar>
                    <span className="font-bold text-sm text-[#1E1E1E]">{selectedItem?.user.name}</span>
                  </div>

                  {/* Content / Caption */}
                  <div className="p-4 flex-1 overflow-y-auto custom-scrollbar bg-white">
                    <div className="flex items-start gap-3 mb-4">
                      <Avatar className="w-8 h-8 shrink-0 border">
                        <AvatarImage src={selectedItem?.user.avatar} />
                        <AvatarFallback>SA</AvatarFallback>
                      </Avatar>
                      <div className="text-[15px] leading-relaxed whitespace-pre-wrap text-[#414141]">
                        <span className="font-bold mr-2 text-[#1E1E1E]">{selectedItem?.user.name}</span>
                        {selectedItem?.captionKey ? t(selectedItem.captionKey) : selectedItem?.caption}
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="p-4 border-t shrink-0">
                    <p className="text-xs text-gray-400 uppercase tracking-wider">
                      {selectedItem?.date}
                    </p>
                  </div>
                </div>

                {/* Mobile Close Button */}
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 md:hidden p-2 rounded-full bg-black/50 text-white z-50"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Right Arrow */}
              <button 
                onClick={(e) => { e.stopPropagation(); nextItem(); }}
                className="hidden md:flex w-12 h-12 rounded-full bg-white/10 backdrop-blur-md items-center justify-center text-white hover:bg-white/20 transition-all shrink-0"
              >
                <ChevronRight size={32} />
              </button>

              {/* Close Button Desktop */}
              <button 
                onClick={closeModal}
                className="hidden md:flex absolute -top-8 -right-8 text-white hover:scale-110 transition-transform p-2"
              >
                <X size={32} />
              </button>
            </DialogContent>
          </Dialog>

        </motion.div>
      </div>
    </motion.div>
  )
}