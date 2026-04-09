// // "use client";
// // import React from "react";
// // import { motion } from "framer-motion";
// // import { Swiper, SwiperSlide } from 'swiper/react';
// // import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// // // Import Swiper styles
// // import 'swiper/css';
// // import ServiceCategoryCard from "./ServiceCategoryCard";

// // const services = [
// //   {
// //     id: 1,
// //     title: "Eyes & Brows",
// //     service_num: "4",
// //     image: "/images/Services/service1.png",
// //   },
// //   {
// //     id: 2,
// //     title: "Lips & Smile",
// //     service_num: "3",
// //     image: "/images/Services/service2.png",
// //   },
// //   {
// //     id: 3,
// //     title: "Skin & Glow",
// //     service_num: "5",
// //     image: "/images/Services/service3.png",
// //   },
// //   {
// //     id: 4,
// //     title: "Eyes & Brows",
// //     service_num: "6",
// //     image: "/images/Services/service4.png",
// //   },
// //   {
// //     id: 5,
// //     title: "Face & Neck",
// //     service_num: "4",
// //     image: "/images/Services/service1.png",
// //   },
// //   {
// //     id: 6,
// //     title: "Anti-Aging",
// //     service_num: "3",
// //     image: "/images/Services/service2.png",
// //   },
// //   {
// //     id: 7,
// //     title: "Body Care",
// //     service_num: "5",
// //     image: "/images/Services/service3.png",
// //   },
// //   {
// //     id: 8,
// //     title: "Laser & Light",
// //     service_num: "6",
// //     image: "/images/Services/service4.png",
// //   },
// //   {
// //     id: 9,
// //     title: "Injectables",
// //     service_num: "4",
// //     image: "/images/Services/service1.png",
// //   },
// //   {
// //     id: 10,
// //     title: "Facial Harmony",
// //     service_num: "3",
// //     image: "/images/Services/service2.png",
// //   },
// //   {
// //     id: 11,
// //     title: "Skincare",
// //     service_num: "5",
// //     image: "/images/Services/service3.png",
// //   },
// //   {
// //     id: 12,
// //     title: "Wellness",
// //     service_num: "6",
// //     image: "/images/Services/service4.png",
// //   },
// // ];

// // export default function ServiceCategories() {
// //   // Animation variants
// //   const containerVariants = {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: {
// //         staggerChildren: 0.2,
// //         delayChildren: 0.3,
// //       },
// //     },
// //   };

// //   const itemVariants = {
// //     hidden: { y: 50, opacity: 0 },
// //     visible: {
// //       y: 0,
// //       opacity: 1,
// //       transition: {
// //         type: "spring",
// //         stiffness: 100,
// //         damping: 12,
// //       },
// //     },
// //   };

// //   const titleVariants = {
// //     hidden: { opacity: 0, y: -30 },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       transition: {
// //         duration: 0.8,
// //         ease: "easeOut",
// //       },
// //     },
// //   };

// //   const cardVariants = {
// //     hidden: { scale: 0.8, opacity: 0 },
// //     visible: {
// //       scale: 1,
// //       opacity: 1,
// //       transition: {
// //         type: "spring",
// //         stiffness: 200,
// //         damping: 15,
// //       },
// //     },
// //   };

// //   return (
// //     <div className="min-h-screen px-4 md:px-10 py-16 relative">
// //       {/* Background Image with 25% opacity */}
// //       <div 
// //         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
// //         style={{
// //           backgroundImage: "url('/images/Services/sdbg.png')",
// //           opacity: 0.25, // 25% opacity
// //         }}
// //       />
      
// //       {/* Optional: Additional overlay for better text contrast if needed */}
// //       <div className="absolute inset-0 bg-white/30" /> {/* Light overlay - adjust as needed */}
      
// //       {/* Content - with relative positioning to appear above background */}
// //       <div className="relative z-10">
// //         <motion.div
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: false, amount: 0.3 }}
// //           variants={containerVariants}
// //           className="flex flex-col gap-1 py-2 mb-10"
// //         >
// //           <motion.p
// //             variants={titleVariants}
// //             initial={"hidden"}
// //             whileInView={"visible"}
// //             viewport={{ once: false, amount: 0.3 }}
// //             className="font-poppins text-lg md:text-[27px] text-secondary font-bold text-center"
// //           >
// //             Our Categories
// //           </motion.p>

// //           <motion.h2
// //             initial={"hidden"}
// //             whileInView={"visible"}
// //             viewport={{ once: false, amount: 0.3 }}
// //             variants={titleVariants}
// //             className="text-4xl md:text-6xl lg:text-[80px] font-normal text-primary text-center"
// //           >
// //             Choose the Perfect Treatment for You
// //           </motion.h2>

// //           <motion.p
// //             initial={"hidden"}
// //             whileInView={"visible"}
// //             viewport={{ once: false, amount: 0.3 }}
// //             variants={titleVariants}
// //             className="text-text text-sm md:text-base text-center tracking-[-0.3px] font-poppins font-normal max-w-2xl mx-auto"
// //           >
// //             Whether you seek a subtle refresh or a complete transformation, our
// //             categories help you find exactly what your beauty needs.
// //           </motion.p>
// //         </motion.div>

// //         {/* Swiper Carousel */}
// //         <motion.div
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: false, amount: 0.1 }}
// //           variants={containerVariants}
// //         >
// //           <Swiper
// //             modules={[Autoplay, Pagination, Navigation]}
// //             spaceBetween={20}
// //             slidesPerView={1}
// //             loop={true}
// //             autoplay={{
// //               delay: 3000,
// //               disableOnInteraction: false,
// //             }}
// //             breakpoints={{
// //               640: {
// //                 slidesPerView: 2,
// //                 spaceBetween: 20,
// //               },
// //               1024: {
// //                 slidesPerView: 4,
// //                 spaceBetween: 20,
// //               },
// //             }}
// //             className="pb-12!"
// //           >
// //             {services.map((item, index) => (
// //               <SwiperSlide key={`${item.id}-${index}`}>
// //                 <ServiceCategoryCard cardVariants={cardVariants} item={item} itemVariants={itemVariants}/> 
// //               </SwiperSlide>
// //             ))}
// //           </Swiper>
// //         </motion.div>
// //       </div>
// //     </div>
// //   );
// // }


// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import ServiceCategoryCard from "./ServiceCategoryCard";

// const services = [
//   { id: 1, title: "Eyes & Brows", service_num: "4", image: "/images/Services/service1.png" },
//   { id: 2, title: "Lips & Smile", service_num: "3", image: "/images/Services/service2.png" },
//   { id: 3, title: "Skin & Glow", service_num: "5", image: "/images/Services/service3.png" },
//   { id: 4, title: "Eyes & Brows", service_num: "6", image: "/images/Services/service4.png" },
//   { id: 5, title: "Face & Neck", service_num: "4", image: "/images/Services/service1.png" },
//   { id: 6, title: "Anti-Aging", service_num: "3", image: "/images/Services/service2.png" },
//   { id: 7, title: "Body Care", service_num: "5", image: "/images/Services/service3.png" },
//   { id: 8, title: "Laser & Light", service_num: "6", image: "/images/Services/service4.png" },
//   { id: 9, title: "Injectables", service_num: "4", image: "/images/Services/service1.png" },
//   { id: 10, title: "Facial Harmony", service_num: "3", image: "/images/Services/service2.png" },
//   { id: 11, title: "Skincare", service_num: "5", image: "/images/Services/service3.png" },
//   { id: 12, title: "Wellness", service_num: "6", image: "/images/Services/service4.png" },
// ];

// export default function ServiceCategories() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2, delayChildren: 0.3 },
//     },
//   };

//   const titleVariants = {
//     hidden: { opacity: 0, y: -30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 40, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { type: "spring", stiffness: 100, damping: 15 },
//     },
//   };

//   const cardVariants = {
//     hidden: { scale: 0.9, opacity: 0 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: { type: "spring", stiffness: 200, damping: 20 },
//     },
//   };

//   return (
//     <div className="min-h-screen px-4 md:px-10 py-12 lg:py-24 relative overflow-hidden">
//       {/* Background with Opacity */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
//         style={{ backgroundImage: "url('/images/Services/sdbg.png')", opacity: 0.25 }}
//       />
//       <div className="absolute inset-0 bg-white/30 pointer-events-none" /> 
      
//       <div className="relative z-10 max-w-7xl mx-auto">
//         {/* Header Section */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={containerVariants}
//           className="flex flex-col gap-2 mb-12 text-center"
//         >
//           <motion.p variants={titleVariants} className="font-poppins text-lg md:text-2xl text-secondary font-bold">
//             Our Categories
//           </motion.p>

//           <motion.h2 variants={titleVariants} className="text-3xl sm:text-5xl md:text-6xl lg:text-[80px] font-normal text-primary leading-tight">
//             Choose the Perfect Treatment for You
//           </motion.h2>

//           <motion.p variants={titleVariants} className="text-text text-sm md:text-base tracking-tight font-poppins max-w-2xl mx-auto mt-4 px-2">
//             Whether you seek a subtle refresh or a complete transformation, our
//             categories help you find exactly what your beauty needs.
//           </motion.p>
//         </motion.div>

//         {/* Swiper Carousel */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.1 }}
//           variants={containerVariants}
//         >
//           <Swiper
//             modules={[Autoplay, Pagination, Navigation]}
//             spaceBetween={16}
//             slidesPerView={1.2}
//             centeredSlides={true}
//             loop={true}
//             autoplay={{ delay: 3500, disableOnInteraction: false }}
//             pagination={{ clickable: true, dynamicBullets: true }}
//             breakpoints={{
//               640: { slidesPerView: 2, spaceBetween: 20, centeredSlides: false },
//               1024: { slidesPerView: 3, spaceBetween: 24, centeredSlides: false },
//               1280: { slidesPerView: 4, spaceBetween: 20, centeredSlides: false },
//             }}
//             className="pb-16! custom-swiper"
//           >
//             {services.map((item, index) => (
//               <SwiperSlide key={`${item.id}-${index}`} className="py-4">
//                 <ServiceCategoryCard 
//                   cardVariants={cardVariants} 
//                   item={item} 
//                   itemVariants={itemVariants}
//                 /> 
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import ServiceCategoryCard from "./ServiceCategoryCard";

const services = [
  { id: 1, title: "Eyes & Brows", service_num: "4", image: "/images/Services/service1.png" },
  { id: 2, title: "Lips & Smile", service_num: "3", image: "/images/Services/service2.png" },
  { id: 3, title: "Skin & Glow", service_num: "5", image: "/images/Services/service3.png" },
  { id: 4, title: "Eyes & Brows", service_num: "6", image: "/images/Services/service4.png" },
  { id: 5, title: "Face & Neck", service_num: "4", image: "/images/Services/service1.png" },
  { id: 6, title: "Anti-Aging", service_num: "3", image: "/images/Services/service2.png" },
  { id: 7, title: "Body Care", service_num: "5", image: "/images/Services/service3.png" },
  { id: 8, title: "Laser & Light", service_num: "6", image: "/images/Services/service4.png" },
  { id: 9, title: "Injectables", service_num: "4", image: "/images/Services/service1.png" },
  { id: 10, title: "Facial Harmony", service_num: "3", image: "/images/Services/service2.png" },
  { id: 11, title: "Skincare", service_num: "5", image: "/images/Services/service3.png" },
  { id: 12, title: "Wellness", service_num: "6", image: "/images/Services/service4.png" },
];

export default function ServiceCategories() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
  };

  return (
    <div className="min-h-screen px-4 md:px-10 pt-10  relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/Services/sdbg.png')",
          opacity: 0.25,
        }}
      />
      
      {/* <div className="absolute inset-0 bg-white/30" />  */}
      
      <div className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
          className="flex flex-col gap-1 py-2 mb-10"
        >
          <motion.p
            variants={titleVariants}
            className="font-poppins text-lg md:text-[27px] text-secondary font-bold text-center"
          >
            Our Categories
          </motion.p>

          <motion.h2
            variants={titleVariants}
            className="text-4xl md:text-6xl lg:text-[80px] font-bold text-primary text-center"
          >
            Choose the Perfect Treatment for You
          </motion.h2>

          <motion.p
            variants={titleVariants}
            className="text-text text-sm md:text-base text-center tracking-[-0.3px] font-poppins font-normal max-w-2xl mx-auto"
          >
            Whether you seek a subtle refresh or a complete transformation, our
            categories help you find exactly what your beauty needs.
          </motion.p>
        </motion.div>

        {/* Swiper Carousel */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={containerVariants}
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1} // 1 card on small mobile
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
            }}
            className="pb-0! lg:pb-6!"
          >
            {services.map((item, index) => (
              <SwiperSlide key={`${item.id}-${index}`}>
                <ServiceCategoryCard cardVariants={cardVariants} item={item} itemVariants={itemVariants}/> 
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
}