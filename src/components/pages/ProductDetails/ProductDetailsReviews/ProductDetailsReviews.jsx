// // // "use client";
// // // import React from "react";
// // // import { Star } from "lucide-react";
// // // import Image from "next/image";
// // // import { motion } from "framer-motion";
// // // import { useTranslation } from "react-i18next";

// // // // Motion Variants for staggered scrolling entrance animations
// // // const containerVariants = {
// // //   hidden: { opacity: 0 },
// // //   visible: {
// // //     opacity: 1,
// // //     transition: {
// // //       staggerChildren: 0.15,
// // //       delayChildren: 0.1,
// // //     },
// // //   },
// // // };

// // // const itemVariants = {
// // //   hidden: {
// // //     opacity: 0,
// // //     y: 50,
// // //     scale: 0.95,
// // //   },
// // //   visible: {
// // //     opacity: 1,
// // //     y: 0,
// // //     scale: 1,
// // //     transition: {
// // //       type: "spring",
// // //       stiffness: 100,
// // //       damping: 12,
// // //       duration: 0.6,
// // //     },
// // //   },
// // // };

// // // const headerVariants = {
// // //   hidden: {
// // //     opacity: 0,
// // //     y: -30,
// // //   },
// // //   visible: {
// // //     opacity: 1,
// // //     y: 0,
// // //     transition: {
// // //       type: "spring",
// // //       stiffness: 100,
// // //       damping: 15,
// // //     },
// // //   },
// // // };

// // // const buttonVariants = {
// // //   hidden: {
// // //     opacity: 0,
// // //     scale: 0.8,
// // //     y: 20,
// // //   },
// // //   visible: {
// // //     opacity: 1,
// // //     scale: 1,
// // //     y: 0,
// // //     transition: {
// // //       type: "spring",
// // //       stiffness: 100,
// // //       damping: 12,
// // //       delay: 0.4,
// // //     },
// // //   },
// // //   hover: {
// // //     scale: 1.05,
// // //     boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
// // //     transition: {
// // //       type: "spring",
// // //       stiffness: 400,
// // //       damping: 10,
// // //     },
// // //   },
// // //   tap: {
// // //     scale: 0.95,
// // //   },
// // // };

// // // export default function ProductDetailsReviews({ data }) {
// // //   const { t } = useTranslation();

// // //   // Safe extraction matching your exact array nesting layout
// // //   const testimonials = data?.data?.testimonials || [];

// // //   return (
// // //     <div
// // //       className="min-h-[500px] md:min-h-[85vh] relative py-12 px-4 overflow-hidden"
// // //       style={{
// // //         backgroundImage:
// // //           "url('/SHAHD-IMAGE/product-details/Desktop - 42.webp')",
// // //         backgroundSize: "cover",
// // //         backgroundPosition: "center",
// // //       }}
// // //     >
// // //       {/* Animated background overlay */}
// // //       <motion.div
// // //         initial={{ opacity: 0 }}
// // //         whileInView={{ opacity: 1 }}
// // //         transition={{ duration: 1.2 }}
// // //         className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"
// // //       />

// // //       <motion.h2
// // //         variants={headerVariants}
// // //         initial="hidden"
// // //         whileInView="visible"
// // //         viewport={{ once: false, amount: 0.3, margin: "-50px" }}
// // //         className="text-3xl font-normal text-center text-primary uppercase tracking-wider mb-4 relative z-10"
// // //       >
// // //         {t("Reviews List")}
// // //       </motion.h2>

// // //       <motion.div
// // //         variants={containerVariants}
// // //         initial="hidden"
// // //         whileInView="visible"
// // //         viewport={{
// // //           once: false,
// // //           amount: 0.1,
// // //           margin: "-50px",
// // //         }}
// // //         className="flex flex-col main-container gap-3 relative z-10"
// // //       >
// // //         {testimonials.map((item, index) => {
// // //           // Parse numerical rating safely to prevent array generation crashing
// // //           const numericRating = parseInt(item.rating, 10) || 5;

// // //           // Optional: simple clean up for timestamps
// // //           const reviewDate = item.created ? item.created.split(" ")[0] : "";

// // //           // Get the first character of the author's name safely
// // //           const firstLetter = item.author_name
// // //             ? item.author_name.charAt(0).toUpperCase()
// // //             : "?";

// // //           return (
// // //             <motion.div
// // //               key={item.id}
// // //               variants={itemVariants}
// // //               custom={index}
// // //               initial="hidden"
// // //               whileInView="visible"
// // //               className="bg-white/50 backdrop-blur-md rounded-[28px] md:rounded-[40px] border border-white/30 p-4 shadow-lg"
// // //             >
// // //               {/* Top Row: User Info and Date */}
// // //               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 mb-2">
// // //                 <div className="flex gap-4 items-center">
// // //                   <motion.div
// // //                     whileHover={{ scale: 1.1, rotate: 5 }}
// // //                     transition={{ type: "spring", stiffness: 300 }}
// // //                     className="relative w-14 h-14 shrink-0 flex items-center justify-center"
// // //                   >
// // //                     {item.img ? (
// // //                       <Image
// // //                         src={item.img}
// // //                         alt={item.author_name || "User avatar"}
// // //                         fill
// // //                         className="rounded-full object-cover border-2 border-primary/20"
// // //                       />
// // //                     ) : (
// // //                       <div className="w-full h-full rounded-full border-2 border-primary/20 bg-primary text-white flex items-center justify-center text-xl font-bold font-poppins shadow-inner">
// // //                         {firstLetter}
// // //                       </div>
// // //                     )}
// // //                   </motion.div>
// // //                   <div>
// // //                     <motion.h3 className="text-lg font-semibold text-gray-900 font-poppins leading-tight">
// // //                       {item.author_name}
// // //                     </motion.h3>
// // //                     <motion.p className="text-sm font-light text-gray-500 font-poppins">
// // //                       {item.is_visible === "1"
// // //                         ? t("Verified Purchase")
// // //                         : t("Unverified")}
// // //                     </motion.p>
// // //                   </div>
// // //                 </div>

// // //                 {reviewDate && (
// // //                   <motion.span className="text-primary border border-primary px-3 py-1 rounded-full text-sm font-medium font-poppins bg-white/50 shrink-0">
// // //                     {reviewDate}
// // //                   </motion.span>
// // //                 )}
// // //               </div>

// // //               {/* Content Section */}
// // //               <div className="flex flex-col gap-3 text-left">
// // //                 <motion.p className="text-base md:text-lg leading-relaxed font-normal text-gray-700 font-poppins max-w-5xl mt-1">
// // //                   {item.content}
// // //                 </motion.p>

// // //                 {/* Rating Section */}
// // //                 <div className="flex items-center gap-3 mt-2 md:mt-4">
// // //                   <div className="flex gap-1">
// // //                     {[...Array(5)].map((_, i) => (
// // //                       <Star
// // //                         key={i}
// // //                         size={18}
// // //                         fill={i < numericRating ? "#F7C128" : "transparent"}
// // //                         color="#F7C128"
// // //                       />
// // //                     ))}
// // //                   </div>
// // //                   <span className="text-sm md:text-base font-medium text-gray-500 font-poppins">
// // //                     {numericRating}.0 {t("Rating")}
// // //                   </span>
// // //                 </div>
// // //               </div>
// // //             </motion.div>
// // //           );
// // //         })}
// // //       </motion.div>

// // //       {/* Read More Button */}
// // //       {testimonials.length > 0 && (
// // //         <motion.div
// // //           variants={buttonVariants}
// // //           initial="hidden"
// // //           whileInView="visible"
// // //           className="flex justify-center mt-12 relative z-10"
// // //         >
// // //           <motion.button
// // //             whileHover="hover"
// // //             whileTap="tap"
// // //             style={{
// // //               background: "linear-gradient(90deg, #DDB2B5 0%, #EFD4CE 100%)",
// // //             }}
// // //             className="text-white px-8 py-3 rounded-full uppercase font-medium text-lg md:text-2xl shadow-xl transition-shadow"
// // //           >
// // //             {t("Read More")}
// // //           </motion.button>
// // //         </motion.div>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // "use client";
// // import React from "react";
// // import { Star } from "lucide-react";
// // import Image from "next/image";
// // import { motion } from "framer-motion";
// // import { useTranslation } from "react-i18next";

// // // Import Swiper React components and required styles
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Autoplay, Pagination } from "swiper/modules";

// // import "swiper/css";
// // import "swiper/css/pagination";

// // const headerVariants = {
// //   hidden: {
// //     opacity: 0,
// //     y: -30,
// //   },
// //   visible: {
// //     opacity: 1,
// //     y: 0,
// //     transition: {
// //       type: "spring",
// //       stiffness: 100,
// //       damping: 15,
// //     },
// //   },
// // };

// // const buttonVariants = {
// //   hidden: {
// //     opacity: 0,
// //     scale: 0.8,
// //     y: 20,
// //   },
// //   visible: {
// //     opacity: 1,
// //     scale: 1,
// //     y: 0,
// //     transition: {
// //       type: "spring",
// //       stiffness: 100,
// //       damping: 12,
// //       delay: 0.4,
// //     },
// //   },
// //   hover: {
// //     scale: 1.05,
// //     boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
// //     transition: {
// //       type: "spring",
// //       stiffness: 400,
// //       damping: 10,
// //     },
// //   },
// //   tap: {
// //     scale: 0.95,
// //   },
// // };

// // export default function ProductDetailsReviews({ data }) {
// //   const { t } = useTranslation();

// //   // Safe extraction matching your exact array nesting layout
// //   const testimonials = data?.data?.testimonials || [];

// //   return (
// //     <div
// //       className="min-h-[500px] md:min-h-[85vh] relative py-12 px-4 overflow-hidden"
// //       style={{
// //         backgroundImage:
// //           "url('/SHAHD-IMAGE/product-details/Desktop - 42.webp')",
// //         backgroundSize: "cover",
// //         backgroundPosition: "center",
// //       }}
// //     >
// //       {/* Animated background overlay */}
// //       <motion.div
// //         initial={{ opacity: 0 }}
// //         whileInView={{ opacity: 1 }}
// //         transition={{ duration: 1.2 }}
// //         className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"
// //       />

// //       <motion.h2
// //         variants={headerVariants}
// //         initial="hidden"
// //         whileInView="visible"
// //         viewport={{ once: false, amount: 0.3, margin: "-50px" }}
// //         className="text-3xl font-normal text-center text-primary uppercase tracking-wider mb-8 relative z-10"
// //       >
// //         {t("Reviews List")}
// //       </motion.h2>

// //       {/* Swiper Slider wrapper container */}
// //       <div className="main-container relative z-10 px-2 pb-12">
// //         <Swiper
// //           modules={[Autoplay, Pagination]}
// //           spaceBetween={20}
// //           slidesPerView={1}
// //           autoplay={{
// //             delay: 4000,
// //             disableOnInteraction: false,
// //             pauseOnMouseEnter: true,
// //           }}
// //           pagination={{
// //             clickable: true,
// //             dynamicBullets: true,
// //           }}
// //           breakpoints={{
// //             640: {
// //               slidesPerView: 1.5,
// //               spaceBetween: 20,
// //             },
// //             1024: {
// //               slidesPerView: 2,
// //               spaceBetween: 30,
// //             },
// //             1280: {
// //               slidesPerView: 2.5,
// //               spaceBetween: 30,
// //             },
// //           }}
// //           className="reviews-swiper !overflow-visible"
// //         >
// //           {testimonials.map((item) => {
// //             const numericRating = parseInt(item.rating, 10) || 5;
// //             const reviewDate = item.created ? item.created.split(" ")[0] : "";
// //             const firstLetter = item.author_name
// //               ? item.author_name.charAt(0).toUpperCase()
// //               : "?";

// //             return (
// //               <SwiperSlide key={item.id} className="h-auto py-2">
// //                 <div className="bg-white/50 backdrop-blur-md rounded-[28px] md:rounded-[40px] border border-white/30 p-6 shadow-lg flex flex-col justify-between h-full min-h-[220px]">
// //                   <div>
// //                     {/* Top Row: User Info and Date */}
// //                     <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
// //                       <div className="flex gap-4 items-center">
// //                         <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
// //                           {item.img ? (
// //                             <Image
// //                               src={item.img}
// //                               alt={item.author_name || "User avatar"}
// //                               fill
// //                               className="rounded-full object-cover border-2 border-primary/20"
// //                             />
// //                           ) : (
// //                             <div className="w-full h-full rounded-full border-2 border-primary/20 bg-primary text-white flex items-center justify-center text-xl font-bold font-poppins shadow-inner">
// //                               {firstLetter}
// //                             </div>
// //                           )}
// //                         </div>
// //                         <div>
// //                           <h3 className="text-lg font-semibold text-gray-900 font-poppins leading-tight">
// //                             {item.author_name}
// //                           </h3>
// //                           <p className="text-sm font-light text-gray-500 font-poppins">
// //                             {item.is_visible === "1"
// //                               ? t("Verified Purchase")
// //                               : t("Unverified")}
// //                           </p>
// //                         </div>
// //                       </div>

// //                       {reviewDate && (
// //                         <span className="text-primary border border-primary px-3 py-1 rounded-full text-sm font-medium font-poppins bg-white/50 shrink-0">
// //                           {reviewDate}
// //                         </span>
// //                       )}
// //                     </div>

// //                     {/* Content Section */}
// //                     <p className="text-base leading-relaxed font-normal text-gray-700 font-poppins mt-1 line-clamp-4">
// //                       {item.content}
// //                     </p>
// //                   </div>

// //                   {/* Rating Section aligned to bottom */}
// //                   <div className="flex items-center gap-3 mt-4 pt-2 border-t border-gray-200/10">
// //                     <div className="flex gap-1">
// //                       {[...Array(5)].map((_, i) => (
// //                         <Star
// //                           key={i}
// //                           size={18}
// //                           fill={i < numericRating ? "#F7C128" : "transparent"}
// //                           color="#F7C128"
// //                         />
// //                       ))}
// //                     </div>
// //                     <span className="text-sm font-medium text-gray-500 font-poppins">
// //                       {numericRating}.0 {t("Rating")}
// //                     </span>
// //                   </div>
// //                 </div>
// //               </SwiperSlide>
// //             );
// //           })}
// //         </Swiper>
// //       </div>

// //       {/* Read More / Action Button */}
// //       {testimonials.length > 0 && (
// //         <motion.div
// //           variants={buttonVariants}
// //           initial="hidden"
// //           whileInView="visible"
// //           className="flex justify-center mt-4 relative z-10"
// //         >
// //           <motion.button
// //             whileHover="hover"
// //             whileTap="tap"
// //             style={{
// //               background: "linear-gradient(90deg, #DDB2B5 0%, #EFD4CE 100%)",
// //             }}
// //             className="text-white px-8 py-3 rounded-full uppercase font-medium text-lg md:text-2xl shadow-xl transition-shadow"
// //           >
// //             {t("Read More")}
// //           </motion.button>
// //         </motion.div>
// //       )}
// //     </div>
// //   );
// // }

// "use client";
// import React, { useState } from "react";
// import { Star } from "lucide-react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { useTranslation } from "react-i18next";

// // Import Swiper React components and required styles
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";

// const headerVariants = {
//   hidden: {
//     opacity: 0,
//     y: -30,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: "spring",
//       stiffness: 100,
//       damping: 15,
//     },
//   },
// };

// const buttonVariants = {
//   hidden: {
//     opacity: 0,
//     scale: 0.8,
//     y: 20,
//   },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     y: 0,
//     transition: {
//       type: "spring",
//       stiffness: 100,
//       damping: 12,
//       delay: 0.4,
//     },
//   },
//   hover: {
//     scale: 1.05,
//     boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
//     transition: {
//       type: "spring",
//       stiffness: 400,
//       damping: 10,
//     },
//   },
//   tap: {
//     scale: 0.95,
//   },
// };

// const gridContainerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.08,
//     },
//   },
// };

// const gridItemVariants = {
//   hidden: { opacity: 0, y: 24, scale: 0.97 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: { type: "spring", stiffness: 100, damping: 14 },
//   },
// };

// // Shared card body so the swiper card and the grid card never drift apart
// function ReviewCard({ item, t, clamp }) {
//   const numericRating = parseInt(item.rating, 10) || 5;
//   const reviewDate = item.created ? item.created.split(" ")[0] : "";
//   const firstLetter = item.author_name
//     ? item.author_name.charAt(0).toUpperCase()
//     : "?";

//   return (
//     <div className="bg-white/50 backdrop-blur-md rounded-[28px] md:rounded-[40px] border border-white/30 p-6 shadow-lg flex flex-col justify-between h-full min-h-[220px]">
//       <div>
//         {/* Top Row: User Info and Date */}
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
//           <div className="flex gap-4 items-center">
//             <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
//               {item.img ? (
//                 <Image
//                   src={item.img}
//                   alt={item.author_name || "User avatar"}
//                   fill
//                   className="rounded-full object-cover border-2 border-primary/20"
//                 />
//               ) : (
//                 <div className="w-full h-full rounded-full border-2 border-primary/20 bg-primary text-white flex items-center justify-center text-xl font-bold font-poppins shadow-inner">
//                   {firstLetter}
//                 </div>
//               )}
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold text-gray-900 font-poppins leading-tight">
//                 {item.author_name}
//               </h3>
//               <p className="text-sm font-light text-gray-500 font-poppins">
//                 {item.is_visible === "1"
//                   ? t("Verified Purchase")
//                   : t("Unverified")}
//               </p>
//             </div>
//           </div>

//           {reviewDate && (
//             <span className="text-primary border border-primary px-3 py-1 rounded-full text-sm font-medium font-poppins bg-white/50 shrink-0">
//               {reviewDate}
//             </span>
//           )}
//         </div>

//         {/* Content Section */}
//         <p
//           className={`text-base leading-relaxed font-normal text-gray-700 font-poppins mt-1 ${
//             clamp ? "line-clamp-4" : ""
//           }`}
//         >
//           {item.content}
//         </p>
//       </div>

//       {/* Rating Section aligned to bottom */}
//       <div className="flex items-center gap-3 mt-4 pt-2 border-t border-gray-200/10">
//         <div className="flex gap-1">
//           {[...Array(5)].map((_, i) => (
//             <Star
//               key={i}
//               size={18}
//               fill={i < numericRating ? "#F7C128" : "transparent"}
//               color="#F7C128"
//             />
//           ))}
//         </div>
//         <span className="text-sm font-medium text-gray-500 font-poppins">
//           {numericRating}.0 {t("Rating")}
//         </span>
//       </div>
//     </div>
//   );
// }

// export default function ProductDetailsReviews({ data }) {
//   const { t } = useTranslation();
//   const [showAll, setShowAll] = useState(false);

//   // Safe extraction matching your exact array nesting layout
//   const testimonials = data?.data?.testimonials || [];

//   return (
//     <div
//       // Only clip/limit height while in the collapsed carousel state.
//       // Once expanded, let the section grow to fit every review.
//       className={`relative py-12 px-4 ${
//         showAll
//           ? "overflow-visible"
//           : "min-h-[500px] md:min-h-[85vh] overflow-hidden"
//       }`}
//       style={{
//         backgroundImage:
//           "url('/SHAHD-IMAGE/product-details/Desktop - 42.webp')",
//         backgroundSize: "cover",
//         backgroundPosition: showAll ? "top" : "center",
//         backgroundRepeat: showAll ? "repeat-y" : "no-repeat",
//       }}
//     >
//       {/* Animated background overlay */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1.2 }}
//         className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"
//       />

//       <motion.h2
//         variants={headerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false, amount: 0.3, margin: "-50px" }}
//         className="text-3xl font-normal text-center text-primary uppercase tracking-wider mb-8 relative z-10"
//       >
//         {t("Reviews List")}
//       </motion.h2>

//       <AnimatePresence mode="wait" initial={false}>
//         {!showAll ? (
//           // Collapsed state: the original swiper carousel
//           <motion.div
//             key="carousel"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.25 }}
//             className="main-container relative z-10 px-2 pb-12"
//           >
//             <Swiper
//               modules={[Autoplay, Pagination]}
//               spaceBetween={20}
//               slidesPerView={1}
//               autoplay={{
//                 delay: 4000,
//                 disableOnInteraction: false,
//                 pauseOnMouseEnter: true,
//               }}
//               pagination={{
//                 clickable: true,
//                 dynamicBullets: true,
//               }}
//               breakpoints={{
//                 640: { slidesPerView: 1.5, spaceBetween: 20 },
//                 1024: { slidesPerView: 2, spaceBetween: 30 },
//                 1280: { slidesPerView: 2.5, spaceBetween: 30 },
//               }}
//               className="reviews-swiper !overflow-visible"
//             >
//               {testimonials.map((item) => (
//                 <SwiperSlide key={item.id} className="h-auto py-2">
//                   <ReviewCard item={item} t={t} clamp />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </motion.div>
//         ) : (
//           // Expanded state: every review, laid out in a full grid
//           <motion.div
//             key="grid"
//             variants={gridContainerVariants}
//             initial="hidden"
//             animate="visible"
//             exit={{ opacity: 0 }}
//             className="main-container relative z-10 px-2 pb-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
//           >
//             {testimonials.map((item) => (
//               <motion.div key={item.id} variants={gridItemVariants}>
//                 <ReviewCard item={item} t={t} clamp={false} />
//               </motion.div>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Read More / Show Less Button */}
//       {testimonials.length > 0 && (
//         <motion.div
//           variants={buttonVariants}
//           initial="hidden"
//           whileInView="visible"
//           className="flex justify-center mt-4 relative z-10"
//         >
//           <motion.button
//             whileHover="hover"
//             whileTap="tap"
//             onClick={() => setShowAll((prev) => !prev)}
//             style={{
//               background: "linear-gradient(90deg, #DDB2B5 0%, #EFD4CE 100%)",
//             }}
//             className="text-white px-8 py-3 rounded-full uppercase font-medium text-lg md:text-2xl shadow-xl transition-shadow"
//           >
//             {showAll ? t("Show Less") : t("Read More")}
//           </motion.button>
//         </motion.div>
//       )}
//     </div>
//   );
// }

"use client";
import React, { useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

// Import Swiper React components and required styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const headerVariants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const buttonVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      delay: 0.4,
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: {
    scale: 0.95,
  },
};

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const gridItemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 14 },
  },
};

// Shared card body so the swiper card and the grid card never drift apart
function ReviewCard({ item, t, clamp }) {
  const numericRating = parseInt(item.rating, 10) || 5;
  const reviewDate = item.created ? item.created.split(" ")[0] : "";
  const firstLetter = item.author_name
    ? item.author_name.charAt(0).toUpperCase()
    : "?";

  return (
    <div className="bg-white/50 backdrop-blur-md rounded-[28px] md:rounded-[40px] border border-white/30 p-6 shadow-lg flex flex-col justify-between h-full min-h-[220px]">
      <div>
        {/* Top Row: User Info and Date */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
          <div className="flex gap-4 items-center">
            <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
              {item.img ? (
                <Image
                  src={item.img}
                  alt={item.author_name || "User avatar"}
                  fill
                  className="rounded-full object-cover border-2 border-primary/20"
                />
              ) : (
                <div className="w-full h-full rounded-full border-2 border-primary/20 bg-primary text-white flex items-center justify-center text-xl font-bold font-poppins shadow-inner">
                  {firstLetter}
                </div>
              )}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 font-poppins leading-tight">
                {item.author_name}
              </h3>
              <p className="text-sm font-light text-gray-500 font-poppins">
                {item.is_visible === "1"
                  ? t("Verified Purchase")
                  : t("Unverified")}
              </p>
            </div>
          </div>

          {reviewDate && (
            <span className="text-primary border border-primary px-3 py-1 rounded-full text-sm font-medium font-poppins bg-white/50 shrink-0">
              {reviewDate}
            </span>
          )}
        </div>

        {/* Content Section */}
        <p
          className={`text-base leading-relaxed font-normal text-gray-700 font-poppins mt-1 ${
            clamp ? "line-clamp-4" : ""
          }`}
        >
          {item.content}
        </p>
      </div>

      {/* Rating Section aligned to bottom */}
      <div className="flex items-center gap-3 mt-4 pt-2 border-t border-gray-200/10">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              fill={i < numericRating ? "#F7C128" : "transparent"}
              color="#F7C128"
            />
          ))}
        </div>
        <span className="text-sm font-medium text-gray-500 font-poppins">
          {numericRating}.0 {t("Rating")}
        </span>
      </div>
    </div>
  );
}

export default function ProductDetailsReviews({ data }) {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);

  // Safe extraction matching your exact array nesting layout
  const testimonials = data?.data?.testimonials || [];

  return (
    <div
      // Only clip/limit height while in the collapsed carousel state.
      // Once expanded, let the section grow to fit every review.
      className={`relative py-12 px-4 ${
        showAll
          ? "overflow-visible"
          : "min-h-[500px] md:min-h-[85vh] overflow-hidden"
      }`}
      style={{
        backgroundImage:
          "url('/SHAHD-IMAGE/product-details/Desktop - 42.webp')",
        backgroundSize: "cover",
        backgroundPosition: showAll ? "top" : "center",
        backgroundRepeat: showAll ? "repeat-y" : "no-repeat",
      }}
    >
      {/* Animated background overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"
      />

      <motion.h2
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3, margin: "-50px" }}
        className="text-3xl font-normal text-center text-primary uppercase tracking-wider mb-8 relative z-10"
      >
        {t("Reviews List")}
      </motion.h2>

      <AnimatePresence mode="wait" initial={false}>
        {!showAll ? (
          // Collapsed state: the original swiper carousel
          <motion.div
            key="carousel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="main-container relative z-10 px-2 pb-12"
          >
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              breakpoints={{
                640: { slidesPerView: 1.5, spaceBetween: 20 },
                1024: { slidesPerView: 2, spaceBetween: 30 },
                1280: { slidesPerView: 2.5, spaceBetween: 30 },
              }}
              className="reviews-swiper !overflow-visible"
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id} className="h-auto mb-5 py-2">
                  <ReviewCard item={item} t={t} clamp />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        ) : (
          // Expanded state: every review, laid out in a full grid
          <motion.div
            key="grid"
            variants={gridContainerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="main-container relative z-10 px-2 pb-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {testimonials.map((item) => (
              <motion.div key={item.id} variants={gridItemVariants}>
                <ReviewCard item={item} t={t} clamp={false} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Read More / Show Less Button */}
      {testimonials.length > 0 && (
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          className="flex justify-center mt-4 relative z-10"
        >
          <motion.button
            whileHover="hover"
            whileTap="tap"
            onClick={() => setShowAll((prev) => !prev)}
            style={{
              background: "linear-gradient(90deg, #DDB2B5 0%, #EFD4CE 100%)",
            }}
            className="text-white px-8 py-3 rounded-full uppercase font-medium text-lg md:text-2xl shadow-xl transition-shadow"
          >
            {showAll ? t("Show Less") : t("Read More")}
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}
