// // "use client";

// // import React, { useEffect, useState } from "react";
// // import Image from "next/image";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { cn } from "@/lib/utils";

// // const tabs = [
// //   { id: "women", label: "SERVICES FOR WOMEN" },
// //   { id: "men", label: "SERVICES FOR MEN" },
// // ];

// // const hoverToServiceMap = {
// //   all: [1, 2, 3, 4, 5, 6],
// //   wrinkle: [1],
// //   cheek: [2],
// //   lip: [3],
// //   hair: [4],
// //   eyebrow: [5],
// //   nose: [6],
// // };

// // const servicesData = {
// //   women: [
// //     {
// //       id: 1,
// //       title: "WRINKLE TREATMENT",
// //       side: "left",
// //       top: "14%",
// //       hoverKey: "wrinkle",
// //       images: [
// //         { img: "/SHAHD-IMAGE/HomeServices/wrinkle.webp", title: "WRINKLE TREATMENT" },
// //         { img: "/SHAHD-IMAGE/HomeServices/wrinkle.webp", title: "WRINKLE TREATMENT 2" },
// //         { img: "/SHAHD-IMAGE/HomeServices/wrinkle.webp", title: "WRINKLE TREATMENT 3" },
// //       ],
// //     },
// //     {
// //       id: 2,
// //       title: "CHEEK ENHANCEMENT",
// //       hoverKey: "cheek",
// //       side: "left",
// //       top: "50%",
// //       images: [
// //         { img: "/SHAHD-IMAGE/HomeServices/cheek.webp", title: "CHEEK ENHANCEMENT" },
// //         { img: "/SHAHD-IMAGE/HomeServices/cheek.webp", title: "CHEEK ENHANCEMENT 2" },
// //         { img: "/SHAHD-IMAGE/HomeServices/cheek.webp", title: "CHEEK ENHANCEMENT 3" },
// //       ],
// //     },
// //     {
// //       id: 3,
// //       title: "LIP ENHANCEMENT",
// //       side: "left",
// //       top: "60%",
// //       hoverKey: "lip",
// //       images: [
// //         { img: "/SHAHD-IMAGE/HomeServices/lip.webp", title: "LIP ENHANCEMENT" },
// //       ],
// //     },
// //     {
// //       id: 4,
// //       title: "HAIR TREATMENT",
// //       side: "right",
// //       top: "3%",
// //       hoverKey: "hair",
// //       images: [
// //         { img: "/SHAHD-IMAGE/HomeServices/hair.webp", title: "HAIR TREATMENT" },
// //       ],
// //     },
// //     {
// //       id: 5,
// //       title: "EYEBROW ENHANCEMENT",
// //       side: "right",
// //       top: "30%",
// //       hoverKey: "eyebrow",
// //       images: [
// //         { img: "/SHAHD-IMAGE/HomeServices/eyebrow.webp", title: "EYEBROW ENHANCEMENT" },
// //       ],
// //     },
// //     {
// //       id: 6,
// //       title: "NOSE AESTHETICS",
// //       side: "right",
// //       top: "50%",
// //       hoverKey: "nose",
// //       images: [
// //         { img: "/SHAHD-IMAGE/HomeServices/nose.webp", title: "NOSE AESTHETICS" },
// //       ],
// //     },
// //   ],
// //   men: [
// //     {
// //       id: 1,
// //       title: "WRINKLE TREATMENT",
// //       side: "left",
// //       top: "14%",
// //       hoverKey: "wrinkle",
// //       images: [
// //         { img: "/SHAHD-IMAGE/HomeServices/wrinkle.webp", title: "WRINKLE TREATMENT" },
// //         { img: "/SHAHD-IMAGE/HomeServices/wrinkle.webp", title: "WRINKLE TREATMENT 2" },
// //         { img: "/SHAHD-IMAGE/HomeServices/wrinkle.webp", title: "WRINKLE TREATMENT 3" },
// //       ],
// //     },
// //     {
// //       id: 2,
// //       title: "CHEEK ENHANCEMENT",
// //       hoverKey: "cheek",
// //       side: "left",
// //       top: "50%",
// //       images: [
// //         { img: "/SHAHD-IMAGE/HomeServices/cheek.webp", title: "CHEEK ENHANCEMENT" },
// //         { img: "/SHAHD-IMAGE/HomeServices/cheek.webp", title: "CHEEK ENHANCEMENT 2" },
// //         { img: "/SHAHD-IMAGE/HomeServices/cheek.webp", title: "CHEEK ENHANCEMENT 3" },
// //       ],
// //     },
// //     {
// //       id: 3,
// //       title: "LIP ENHANCEMENT",
// //       side: "left",
// //       top: "60%",
// //       hoverKey: "lip",
// //       images: [
// //         { img: "/SHAHD-IMAGE/HomeServices/lip.webp", title: "LIP ENHANCEMENT" },
// //       ],
// //     },
// //     {
// //       id: 4,
// //       title: "HAIR TREATMENT",
// //       side: "right",
// //       top: "3%",
// //       hoverKey: "hair",
// //       images: [
// //         { img: "/SHAHD-IMAGE/HomeServices/hair.webp", title: "HAIR TREATMENT" },
// //       ],
// //     },
// //     {
// //       id: 5,
// //       title: "EYEBROW ENHANCEMENT",
// //       side: "right",
// //       top: "30%",
// //       hoverKey: "eyebrow",
// //       images: [
// //         { img: "/SHAHD-IMAGE/HomeServices/eyebrow.webp", title: "EYEBROW ENHANCEMENT" },
// //       ],
// //     },
// //     {
// //       id: 6,
// //       title: "NOSE AESTHETICS",
// //       side: "right",
// //       top: "50%",
// //       hoverKey: "nose",
// //       images: [
// //         { img: "/SHAHD-IMAGE/HomeServices/nose.webp", title: "NOSE AESTHETICS" },
// //       ],
// //     },
// //   ],
// // };

// // const hotspots = [
// //   { key: "wrinkle", side: "left", title: "WRINKLE TREATMENT", src: "/SHAHD-IMAGE/HomeServices/Group 27.webp", src2: "/SHAHD-IMAGE/HomeServices/small1.png", position: "top-[14%] left-0", serviceId: 1 },
// //   { key: "cheek", side: "left", title: "CHEEK ENHANCEMENT", src: "/SHAHD-IMAGE/HomeServices/Group 27.webp", src2: "/SHAHD-IMAGE/HomeServices/small2.png", position: "top-[50%] left-0", serviceId: 2 },
// //   { key: "lip", side: "left", title: "LIP ENHANCEMENT", src: "/SHAHD-IMAGE/HomeServices/Group 26.webp", src2: "/SHAHD-IMAGE/HomeServices/small3.png", position: "top-[69%] sm:top-[70%] left-7 sm:left-15 md:top-[65%] md:-left-7", serviceId: 3 },
// //   { key: "hair", side: "right", title: "HAIR TREATMENT", src: "/SHAHD-IMAGE/HomeServices/Frame 1000005599.webp", src2: "/SHAHD-IMAGE/HomeServices/small4.png", position: "top-[3%] right-0", serviceId: 4 },
// //   { key: "eyebrow", side: "right", title: "EYEBROW ENHANCEMENT", src: "/SHAHD-IMAGE/HomeServices/Group 23.webp", src2: "/SHAHD-IMAGE/HomeServices/small5.png", position: "top-[30%] right-0", serviceId: 5 },
// //   { key: "nose", side: "right", title: "NOSE AESTHETICS", src: "/SHAHD-IMAGE/HomeServices/Group 24.webp", src2: "/SHAHD-IMAGE/HomeServices/small6.png", position: "top-[50%] right-10 sm:right-17 md:right-0", serviceId: 6 },
// // ];

// // const cardVariants = {
// //   initial: { opacity: 0, y: 20, scale: 0.9 },
// //   animate: { opacity: 1, y: 0, scale: 1 },
// //   exit: { opacity: 0, y: -20, scale: 0.9 },
// //   hover: { scale: 1.05, transition: { duration: 0.2 } }
// // };

// // const hotspotVariants = {
// //   initial: { scale: 1 },
// //   hover: {
// //     scale: 1.2,
// //     filter: "drop-shadow(0 10px 15px rgba(232, 164, 168, 0.4))",
// //     transition: { duration: 0.2 }
// //   },
// //   tap: { scale: 0.95 }
// // };

// // export default function HomeServices() {
// //   const [activeTab, setActiveTab] = useState("women");
// //   const [isHovered, setIsHovered] = useState("all");

// //   const isAllView = isHovered === "all";
// //   const visibleServiceIds = hoverToServiceMap[isHovered] || hoverToServiceMap.all;

// //   const visibleServices = servicesData[activeTab].filter((service) =>
// //     visibleServiceIds.includes(service.id)
// //   );

// //   const activeService = !isAllView ? visibleServices[0] : null;

// //   const isHotspotVisible = (key) => {
// //     return isHovered === "all" || isHovered === key;
// //   };

// //   const handleHotspotHover = (key) => {
// //     setIsHovered(key);
// //   };

// //   return (
// //     <div className="relative overflow-hidden min-h-screen bg-[#FFF9F7]">
// //       <motion.div
// //         initial={{ opacity: 0 }}
// //         whileInView={{ opacity: 0.4 }}
// //         viewport={{ once: false }}
// //         transition={{ duration: 1 }}
// //         className="absolute inset-0"
// //         style={{
// //           backgroundImage: "url('/SHAHD-IMAGE/Services/Desktop - 20.webp')",
// //           backgroundSize: "cover",
// //         }}
// //       />

// //       <div className="relative z-10 main-container mx-auto py-12">
// //         <motion.div
// //           initial={{ opacity: 0, y: -30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: false }}
// //           transition={{ duration: 0.6 }}
// //           className="flex flex-col sm:flex-row justify-center mb-16"
// //         >
// //           <div className="inline-flex flex-col sm:flex-row p-[16px_12px] rounded-full bg-[#FCF7F8]/20 backdrop-blur-lg border-2 border-[#FCF7F8]">
// //             {tabs.map((tab, index) => {
// //               const isWomen = tab.id === "women";
// //               const isActive = activeTab === tab.id;
// //               return (
// //                 <motion.button
// //                   key={tab.id}
// //                   onClick={() => setActiveTab(tab.id)}
// //                   className={cn(
// //                     "px-8 py-3 rounded-full text-2xl font-normal tracking-wider transition-all duration-300",
// //                     isActive ? "bg-white" : "bg-transparent",
// //                     isWomen
// //                       ? (isActive
// //                           ? "shadow-[4px_5px_5px_#DDB2B5] border-2 border-primary text-primary"
// //                           : "text-primary/70  hover:text-primary hover:border-primary")
// //                       : (isActive
// //                           ? "shadow-[4px_5px_5px_rgba(0,0,0,0.1)] border-2 border-secondary text-secondary"
// //                           : "text-secondary/70 hover:text-secondary hover:border-secondary")
// //                   )}
// //                   whileHover={{ scale: 1.05 }}
// //                   whileTap={{ scale: 0.95 }}
// //                   initial={{ opacity: 0, y: -20 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   viewport={{ once: false }}
// //                   transition={{ delay: index * 0.1 }}
// //                 >
// //                   {tab.label}
// //                 </motion.button>
// //               );
// //             })}
// //           </div>
// //         </motion.div>

// //         <div className="relative flex flex-col md:flex-row justify-center items-center min-h-[500px] md:min-h-[600px]">

// //           {/* LEFT SIDE CARDS - Desktop */}
// //           <motion.div
// //             className="absolute left-0 md:left-7 lg:left-12 2xl:left-16 top-0 h-full z-20 pointer-events-none hidden min-[900px]:block"
// //             initial={{ opacity: 0, x: -50 }}
// //             viewport={{ once: false }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.6, delay: 0.2 }}
// //           >
// //             <AnimatePresence mode="wait">
// //               {isAllView && (
// //                 <motion.div
// //                   key="all-left"
// //                   initial={{ opacity: 0 }}
// //                   whileInView={{ opacity: 1 }}
// //                   exit={{ opacity: 0 }}
// //                   className="space-y-8 absolute top-1/2 -translate-y-1/2"
// //                 >
// //                   {visibleServices
// //                     .filter((s) => s.side === "left")
// //                     .map((service, index) => (
// //                       <motion.div
// //                         key={service.id}
// //                         variants={cardVariants}
// //                         initial="initial"
// //                         whileInView="animate"
// //                         exit="exit"
// //                         transition={{ delay: index * 0.1 }}
// //                         whileHover="hover"
// //                       >
// //                         <ServiceCard
// //                           image={service.images[0]?.img}
// //                           serviceTitle={service.images[0]?.title}
// //                         />
// //                       </motion.div>
// //                     ))}
// //                 </motion.div>
// //               )}

// //               {!isAllView && activeService && activeService.side === "left" && (
// //                 <motion.div
// //                   key={`hover-left-${activeService.id}`}
// //                   initial={{ opacity: 0, x: -30 }}
// //                   whileInView={{ opacity: 1, x: 0 }}
// //                   exit={{ opacity: 0, x: -30 }}
// //                   className="absolute transition-all duration-500"
// //                   style={{
// //                     top: activeService.images?.length > 1 ? "" : activeService.top,
// //                     transform: activeService.images?.length > 1 ? "" : "translateY(-50%)"
// //                   }}
// //                 >
// //                   <div className="space-y-4">
// //                     {activeService.images.map((image, index) => (
// //                       <motion.div
// //                         key={`${activeService.id}-${index}`}
// //                         initial={{ opacity: 0, x: -50 }}
// //                         whileInView={{ opacity: 1, x: 0 }}
// //                         exit={{ opacity: 0, x: -50 }}
// //                         transition={{ delay: index * 0.1 }}
// //                         whileHover={{ scale: 1.05, x: 10 }}
// //                       >
// //                         <ServiceCard
// //                           image={image?.img}
// //                           serviceTitle={image?.title || activeService.title}
// //                           isHighlighted={index === 0}
// //                         />
// //                       </motion.div>
// //                     ))}
// //                   </div>
// //                 </motion.div>
// //               )}
// //             </AnimatePresence>
// //           </motion.div>

// //           {/* Center Face */}
// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.9 }}
// //             whileInView={{ opacity: 1, scale: 1 }}
// //             viewport={{ once: false }}
// //             transition={{ duration: 0.6, delay: 0.3 }}
// //             className="relative w-64 h-80 sm:w-80 sm:h-100 md:w-90 md:h-90 lg:w-120 lg:h-140 z-10"
// //           >
// //             <Image
// //               src={activeTab == "men" ? "/SHAHD-IMAGE/Image_fx (30) 2.webp" : "/SHAHD-IMAGE/HomeServices/Rectangle 6.webp"}
// //               alt="Services"
// //               fill
// //               className="object-contain"
// //               priority
// //             />

// //             <AnimatePresence>
// //               {hotspots.map((hotspot) => {
// //                 const isVisible = isHotspotVisible(hotspot.key);
// //                 const isActive = isHovered === hotspot.key;

// //                 return isVisible ? (
// //                   <motion.div
// //                     key={hotspot.key}
// //                     variants={hotspotVariants}
// //                     initial="initial"
// //                     whileInView={isActive ? "hover" : "initial"}
// //                     whileHover="hover"
// //                     whileTap="tap"
// //                     className={cn(
// //                       "absolute cursor-pointer transition-all flex items-center gap-2 duration-300 pointer-events-auto",
// //                       hotspot.position,
// //                       hotspot?.side === "left" ? "flex-row-reverse" : "flex-row",
// //                       isActive && "z-30"
// //                     )}
// //                     onMouseEnter={() => handleHotspotHover(hotspot.key)}
// //                     onMouseLeave={() => setIsHovered("all")}
// //                   >
// //                     <motion.img
// //                       src={hotspot.src}
// //                       alt={hotspot.key}
// //                       className="transition-all hidden min-[900px]:block w-full h-full duration-300"
// //                     />
// //                     <motion.img
// //                       src={hotspot.src2}
// //                       alt={hotspot.key}
// //                       className="transition-all block min-[900px]:hidden w-full h-full duration-300"
// //                     />
// //                   <button className={`text-white text-xs sm:text-base absolute whitespace-wrap sm:whitespace-nowrap ${hotspot?.side == "left" ? `-left-10 xs:-left-20 ${hotspot?.key == "cheek"? "-left-13!" :"" ? "top-[5px]!" : ""} ${hotspot?.key == "lip" ? "top-[5px]!" : ""}  top-[-7px] sm:-left-24! sm:top-[-8px]` : "left-20 top-4 sm:left-25 sm:top-4"} min-[900px]:hidden bg-primary p-2 rounded-full flex justify-center items-center`}>
// //                     {hotspot?.title}
// //                   </button>
// //                   </motion.div>
// //                 ) : null;
// //               })}
// //             </AnimatePresence>
// //           </motion.div>

// //           {/* RIGHT SIDE CARDS - Desktop */}
// //           <motion.div
// //             className="absolute right-70 lg:right-80 xl:right-110 2xl:right-126 top-0 h-full z-20 pointer-events-none hidden min-[900px]:block"
// //             initial={{ opacity: 0, x: 50 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: false }}
// //             transition={{ duration: 0.6, delay: 0.2 }}
// //           >
// //             <AnimatePresence mode="wait">
// //               {isAllView && (
// //                 <motion.div
// //                   key="all-right"
// //                   initial={{ opacity: 0 }}
// //                   whileInView={{ opacity: 1 }}
// //                   exit={{ opacity: 0 }}
// //                   className="space-y-8 absolute top-1/2 -translate-y-1/2"
// //                 >
// //                   {visibleServices
// //                     .filter((s) => s.side === "right")
// //                     .map((service, index) => (
// //                       <motion.div
// //                         key={service.id}
// //                         variants={cardVariants}
// //                         initial="initial"
// //                         whileInView="animate"
// //                         exit="exit"
// //                         transition={{ delay: index * 0.1 }}
// //                         whileHover="hover"
// //                       >
// //                         <ServiceCard
// //                           image={service?.images[0]?.img}
// //                           serviceTitle={service?.images[0]?.title}
// //                         />
// //                       </motion.div>
// //                     ))}
// //                 </motion.div>
// //               )}

// //               {!isAllView && activeService && activeService.side === "right" && (
// //                 <motion.div
// //                   key={`hover-right-${activeService.id}`}
// //                   initial={{ opacity: 0, x: 30 }}
// //                   whileInView={{ opacity: 1, x: 0 }}
// //                   exit={{ opacity: 0, x: 30 }}
// //                   className="absolute transition-all duration-500"
// //                   style={{
// //                     top: activeService.images?.length > 1 ? "" : activeService.top,
// //                     transform: activeService.images?.length > 1 ? "" : "translateY(-50%)"
// //                   }}
// //                 >
// //                   <div className="space-y-4">
// //                     {activeService.images.map((image, index) => (
// //                       <motion.div
// //                         key={`${activeService.id}-${index}`}
// //                         initial={{ opacity: 0, x: 50 }}
// //                         whileInView={{ opacity: 1, x: 0 }}
// //                         exit={{ opacity: 0, x: 50 }}
// //                         transition={{ delay: index * 0.1 }}
// //                         whileHover={{ scale: 1.05, x: -10 }}
// //                       >
// //                         <ServiceCard
// //                           image={image?.img}
// //                           serviceTitle={image?.title || activeService.title}
// //                           isHighlighted={index === 0}
// //                         />
// //                       </motion.div>
// //                     ))}
// //                   </div>
// //                 </motion.div>
// //               )}
// //             </AnimatePresence>
// //           </motion.div>

// //           {/* MOBILE POPUP - Show sub-services list */}
// //           <AnimatePresence>
// //             {!isAllView && activeService && (
// //               <motion.div
// //                 initial={{ opacity: 0, y: 100 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 exit={{ opacity: 0, y: 100 }}
// //                 className="fixed z-50 inset-x-0 bottom-0 min-[900px]:hidden bg-white/95 backdrop-blur-md rounded-t-[32px] shadow-2xl p-6 border-t border-primary/20"
// //               >
// //                 <div className="flex flex-col gap-6">
// //                   <div className="flex items-center justify-between">
// //                     <h4 className={cn("font-bold text-xl", activeTab === "women" ? "text-primary" : "text-secondary")}>
// //                       {activeService.title}
// //                     </h4>
// //                     <button onClick={() => setIsHovered("all")} className="p-2 bg-gray-100 rounded-full">
// //                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
// //                         <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
// //                       </svg>
// //                     </button>
// //                   </div>

// //                   <div className="flex flex-col gap-3 max-h-[40vh] overflow-y-auto pr-2">
// //                     {activeService.images.map((item, idx) => (
// //                       <motion.div key={idx} className="flex items-center gap-4 p-3 rounded-2xl bg-[#FFF9F7] border border-primary/10">
// //                         <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0">
// //                           <Image src={item.img} alt={item.title} fill className="object-cover" />
// //                         </div>
// //                         <span className="font-medium text-gray-800 text-sm uppercase">{item.title}</span>
// //                       </motion.div>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             )}
// //           </AnimatePresence>
// //         </div>

// //         {/* MOBILE SERVICES LIST */}
// //         <div className="mt-8 px-4 min-[900px]:hidden space-y-4">
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             className="grid grid-cols-1 gap-4"
// //           >
// //             {servicesData[activeTab].map((service, index) => (
// //               <motion.div
// //                 key={service.id}
// //                 initial={{ opacity: 0, x: -20 }}
// //                 whileInView={{ opacity: 1, x: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: index * 0.1 }}
// //                 onClick={() => {
// //                   if (isHovered === service.hoverKey) {
// //                     setIsHovered("all");
// //                   } else {
// //                     handleHotspotHover(service.hoverKey);
// //                   }
// //                 }}
// //               >
// //                 <ServiceCard
// //                   image={service.images[0]?.img}
// //                   serviceTitle={service.title}
// //                   isMobileList={true}
// //                   isHighlighted={isHovered === service.hoverKey}
// //                 />
// //               </motion.div>
// //             ))}
// //           </motion.div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // function ServiceCard({ image, serviceTitle, isHighlighted = false, isMobileList = false }) {
// //   return (
// //     <motion.div
// //       className={cn(
// //         "relative overflow-hidden group cursor-pointer shadow-lg pointer-events-auto transition-all duration-300",
// //         isMobileList
// //           ? "w-full aspect-[344/140] rounded-[24px]"
// //           : "w-60 h-30 xl:w-95 xl:h-35 2xl:w-112.5 2xl:h-45 rounded-[30px]",
// //         isHighlighted && "ring-4 ring-primary ring-offset-4 ring-offset-[#FFF9F7]"
// //       )}
// //       whileHover="hover"
// //       variants={cardVariants}
// //     >
// //       <Image
// //         src={image}
// //         alt={serviceTitle || "Service"}
// //         fill
// //         className="object-cover transition-transform duration-500 group-hover:scale-110"
// //         sizes="(max-width: 768px) 100vw, 500px"
// //       />

// //       <motion.div
// //         className={cn(
// //           "absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent",
// //           isMobileList && "bg-black/30"
// //         )}
// //         variants={{ hover: { opacity: 0.8 } }}
// //         transition={{ duration: 0.3 }}
// //       />

// //       <motion.div
// //         className={cn(
// //           "absolute bg-[#E8A4A8]/90 backdrop-blur-sm rounded-full flex items-center shadow-lg border border-white/20",
// //           isMobileList ? "top-4 left-4 px-4 py-1.5" : "top-4 left-4 px-6 py-3 max-w-[90%]"
// //         )}
// //         variants={{ hover: { scale: 1.05, x: 5 } }}
// //         transition={{ duration: 0.3 }}
// //       >
// //         <span className={cn(
// //           "text-[#FFF9F7] font-medium tracking-wider uppercase truncate",
// //           isMobileList ? "text-xs" : "text-sm lg:text-base"
// //         )}>
// //           {serviceTitle || "Service"}
// //         </span>
// //       </motion.div>

// //       <motion.div
// //         className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
// //         initial={{ x: "-100%" }}
// //         variants={{ hover: { x: "100%" } }}
// //         transition={{ duration: 1 }}
// //       />
// //     </motion.div>
// //   );
// // }

// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { cn } from "@/lib/utils";
// import { useTranslation } from "react-i18next";

// const tabs = [
//   { id: "women", label: "SERVICES FOR WOMEN" },
//   { id: "men", label: "SERVICES FOR MEN" },
// ];

// const hoverToServiceMap = {
//   all: [1, 2, 3, 4, 5, 6],
//   wrinkle: [1],
//   cheek: [2],
//   lip: [3],
//   hair: [4],
//   eyebrow: [5],
//   nose: [6],
// };

// const servicesData = {
//   women: [
//     {
//       id: 1,
//       title: "WRINKLE TREATMENT",
//       side: "left",
//       top: "14%",
//       hoverKey: "wrinkle",
//       images: [
//         {
//           img: "/SHAHD-IMAGE/HomeServices/wrinkle.webp",
//           title: "WRINKLE TREATMENT",
//         },
//         {
//           img: "/SHAHD-IMAGE/HomeServices/wrinkle.webp",
//           title: "WRINKLE TREATMENT 2",
//         },
//         {
//           img: "/SHAHD-IMAGE/HomeServices/wrinkle.webp",
//           title: "WRINKLE TREATMENT 3",
//         },
//       ],
//     },
//     {
//       id: 2,
//       title: "CHEEK ENHANCEMENT",
//       hoverKey: "cheek",
//       side: "left",
//       top: "50%",
//       images: [
//         {
//           img: "/SHAHD-IMAGE/HomeServices/cheek.webp",
//           title: "CHEEK ENHANCEMENT",
//         },
//         {
//           img: "/SHAHD-IMAGE/HomeServices/cheek.webp",
//           title: "CHEEK ENHANCEMENT 2",
//         },
//         {
//           img: "/SHAHD-IMAGE/HomeServices/cheek.webp",
//           title: "CHEEK ENHANCEMENT 3",
//         },
//       ],
//     },
//     {
//       id: 3,
//       title: "LIP ENHANCEMENT",
//       side: "left",
//       top: "60%",
//       hoverKey: "lip",
//       images: [
//         {
//           img: "/SHAHD-IMAGE/HomeServices/lip.webp",
//           title: "LIP ENHANCEMENT",
//         },
//       ],
//     },
//     {
//       id: 4,
//       title: "HAIR TREATMENT",
//       side: "right",
//       top: "3%",
//       hoverKey: "hair",
//       images: [
//         {
//           img: "/SHAHD-IMAGE/HomeServices/hair.webp",
//           title: "HAIR TREATMENT",
//         },
//       ],
//     },
//     {
//       id: 5,
//       title: "EYEBROW ENHANCEMENT",
//       side: "right",
//       top: "30%",
//       hoverKey: "eyebrow",
//       images: [
//         {
//           img: "/SHAHD-IMAGE/HomeServices/eyebrow.webp",
//           title: "EYEBROW ENHANCEMENT",
//         },
//       ],
//     },
//     {
//       id: 6,
//       title: "NOSE AESTHETICS",
//       side: "right",
//       top: "50%",
//       hoverKey: "nose",
//       images: [
//         {
//           img: "/SHAHD-IMAGE/HomeServices/nose.webp",
//           title: "NOSE AESTHETICS",
//         },
//       ],
//     },
//   ],
//   men: [
//     {
//       id: 1,
//       title: "WRINKLE TREATMENT",
//       side: "left",
//       top: "14%",
//       hoverKey: "wrinkle",
//       images: [
//         {
//           img: "/SHAHD-IMAGE/HomeServices/wrinkle.webp",
//           title: "WRINKLE TREATMENT",
//         },
//         {
//           img: "/SHAHD-IMAGE/HomeServices/wrinkle.webp",
//           title: "WRINKLE TREATMENT 2",
//         },
//         {
//           img: "/SHAHD-IMAGE/HomeServices/wrinkle.webp",
//           title: "WRINKLE TREATMENT 3",
//         },
//       ],
//     },
//     {
//       id: 2,
//       title: "CHEEK ENHANCEMENT",
//       hoverKey: "cheek",
//       side: "left",
//       top: "50%",
//       images: [
//         {
//           img: "/SHAHD-IMAGE/HomeServices/cheek.webp",
//           title: "CHEEK ENHANCEMENT",
//         },
//         {
//           img: "/SHAHD-IMAGE/HomeServices/cheek.webp",
//           title: "CHEEK ENHANCEMENT 2",
//         },
//         {
//           img: "/SHAHD-IMAGE/HomeServices/cheek.webp",
//           title: "CHEEK ENHANCEMENT 3",
//         },
//       ],
//     },
//     {
//       id: 3,
//       title: "LIP ENHANCEMENT",
//       side: "left",
//       top: "60%",
//       hoverKey: "lip",
//       images: [
//         {
//           img: "/SHAHD-IMAGE/HomeServices/lip.webp",
//           title: "LIP ENHANCEMENT",
//         },
//       ],
//     },
//     {
//       id: 4,
//       title: "HAIR TREATMENT",
//       side: "right",
//       top: "3%",
//       hoverKey: "hair",
//       images: [
//         {
//           img: "/SHAHD-IMAGE/HomeServices/hair.webp",
//           title: "HAIR TREATMENT",
//         },
//       ],
//     },
//     {
//       id: 5,
//       title: "EYEBROW ENHANCEMENT",
//       side: "right",
//       top: "30%",
//       hoverKey: "eyebrow",
//       images: [
//         {
//           img: "/SHAHD-IMAGE/HomeServices/eyebrow.webp",
//           title: "EYEBROW ENHANCEMENT",
//         },
//       ],
//     },
//     {
//       id: 6,
//       title: "NOSE AESTHETICS",
//       side: "right",
//       top: "50%",
//       hoverKey: "nose",
//       images: [
//         {
//           img: "/SHAHD-IMAGE/HomeServices/nose.webp",
//           title: "NOSE AESTHETICS",
//         },
//       ],
//     },
//   ],
// };

// const hotspots = [
//   {
//     key: "wrinkle",
//     side: "left",
//     title: "WRINKLE TREATMENT",
//     src: "/SHAHD-IMAGE/HomeServices/Group 27.webp",
//     src2: "/SHAHD-IMAGE/HomeServices/small1.png",
//     position: "top-[14%] left-0",
//     serviceId: 1,
//   },
//   {
//     key: "cheek",
//     side: "left",
//     title: "CHEEK ENHANCEMENT",
//     src: "/SHAHD-IMAGE/HomeServices/Group 27.webp",
//     src2: "/SHAHD-IMAGE/HomeServices/small2.png",
//     position: "top-[50%] left-0",
//     serviceId: 2,
//   },
//   {
//     key: "lip",
//     side: "left",
//     title: "LIP ENHANCEMENT",
//     src: "/SHAHD-IMAGE/HomeServices/Group 26.webp",
//     src2: "/SHAHD-IMAGE/HomeServices/small3.png",
//     position:
//       "top-[69%] sm:top-[70%] left-7 sm:left-15 md:top-[65%] md:-left-7",
//     serviceId: 3,
//   },
//   {
//     key: "hair",
//     side: "right",
//     title: "HAIR TREATMENT",
//     src: "/SHAHD-IMAGE/HomeServices/Frame 1000005599.webp",
//     src2: "/SHAHD-IMAGE/HomeServices/small4.png",
//     position: "top-[3%] right-0",
//     serviceId: 4,
//   },
//   {
//     key: "eyebrow",
//     side: "right",
//     title: "EYEBROW ENHANCEMENT",
//     src: "/SHAHD-IMAGE/HomeServices/Group 23.webp",
//     src2: "/SHAHD-IMAGE/HomeServices/small5.png",
//     position: "top-[30%] right-0",
//     serviceId: 5,
//   },
//   {
//     key: "nose",
//     side: "right",
//     title: "NOSE AESTHETICS",
//     src: "/SHAHD-IMAGE/HomeServices/Group 24.webp",
//     src2: "/SHAHD-IMAGE/HomeServices/small6.png",
//     position: "top-[50%] right-10 sm:right-17 md:right-0",
//     serviceId: 6,
//   },
// ];

// const cardVariants = {
//   initial: { opacity: 0, y: 20, scale: 0.9 },
//   animate: { opacity: 1, y: 0, scale: 1 },
//   exit: { opacity: 0, y: -20, scale: 0.9 },
//   hover: {
//     scale: 1.05,
//     transition: { duration: 0.2 },
//   },
// };

// const hotspotVariants = {
//   initial: { scale: 1 },
//   hover: {
//     scale: 1.2,
//     filter: "drop-shadow(0 10px 15px rgba(232, 164, 168, 0.4))",
//     transition: { duration: 0.2 },
//   },
//   tap: { scale: 0.95 },
// };

// export default function HomeServices() {
//   const { t } = useTranslation();
//   const [activeTab, setActiveTab] = useState("women");

//   // temporary hover state
//   const [hoveredKey, setHoveredKey] = useState("all");

//   // fixed click state
//   const [selectedKey, setSelectedKey] = useState(null);

//   const currentKey = selectedKey || hoveredKey;

//   const isAllView = currentKey === "all";

//   const visibleServiceIds =
//     hoverToServiceMap[currentKey] || hoverToServiceMap.all;

//   const visibleServices = servicesData[activeTab].filter((service) =>
//     visibleServiceIds.includes(service.id)
//   );

//   const activeService = !isAllView ? visibleServices[0] : null;

//   const handleHotspotEnter = (key) => {
//     if (!selectedKey) {
//       setHoveredKey(key);
//     }
//   };

//   const handleHotspotClick = (key) => {
//     setSelectedKey((prev) => {
//       if (prev === key) {
//         setHoveredKey("all");
//         return null;
//       }

//       setHoveredKey(key);
//       return key;
//     });
//   };

//   const handleAreaLeave = () => {
//     if (!selectedKey) {
//       setHoveredKey("all");
//     }
//   };

//   const resetActiveService = () => {
//     setSelectedKey(null);
//     setHoveredKey("all");
//   };

//   const handleTabChange = (tabId) => {
//     setActiveTab(tabId);
//     resetActiveService();
//   };

//   return (
//     <div className="relative overflow-hidden min-h-screen bg-[#FFF9F7]">
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 0.4 }}
//         viewport={{ once: false }}
//         transition={{ duration: 1 }}
//         className="absolute inset-0"
//         style={{
//           backgroundImage: "url('/SHAHD-IMAGE/Services/Desktop - 20.webp')",
//           backgroundSize: "cover",
//         }}
//       />

//       <div className="relative z-10 main-container mx-auto py-12">
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: false }}
//           transition={{ duration: 0.6 }}
//           className="flex flex-col sm:flex-row justify-center mb-16"
//         >
//           <div className="inline-flex flex-col sm:flex-row p-[16px_12px] rounded-full bg-[#FCF7F8]/20 backdrop-blur-lg border-2 border-[#FCF7F8]">
//             {tabs.map((tab, index) => {
//               const isWomen = tab.id === "women";
//               const isActive = activeTab === tab.id;

//               return (
//                 <motion.button
//                   key={tab.id}
//                   onClick={() => handleTabChange(tab.id)}
//                   className={cn(
//                     "px-8 py-3 rounded-full text-2xl font-normal tracking-wider transition-all duration-300",
//                     isActive ? "bg-white" : "bg-transparent",
//                     isWomen
//                       ? isActive
//                         ? "shadow-[4px_5px_5px_#DDB2B5] border-2 border-primary text-primary"
//                         : "text-primary/70 hover:text-primary hover:border-primary"
//                       : isActive
//                       ? "shadow-[4px_5px_5px_rgba(0,0,0,0.1)] border-2 border-secondary text-secondary"
//                       : "text-secondary/70 hover:text-secondary hover:border-secondary"
//                   )}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   initial={{ opacity: 0, y: -20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: false }}
//                   transition={{ delay: index * 0.1 }}
//                 >
//                   {t(tab.label)}
//                 </motion.button>
//               );
//             })}
//           </div>
//         </motion.div>

//         <div
//           className="relative flex flex-col md:flex-row justify-center items-center min-h-[500px] md:min-h-[600px]"
//           onMouseLeave={handleAreaLeave}
//         >
//           {/* LEFT SIDE CARDS - Desktop */}
//           <motion.div
//             className="absolute left-0 md:left-7 lg:left-12 2xl:left-16 top-0 h-full z-20 pointer-events-none hidden min-[900px]:block"
//             initial={{ opacity: 0, x: -50 }}
//             viewport={{ once: false }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <AnimatePresence mode="wait">
//               {isAllView && (
//                 <motion.div
//                   key="all-left"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   className="space-y-8 absolute top-1/2 -translate-y-1/2"
//                 >
//                   {visibleServices
//                     .filter((service) => service.side === "left")
//                     .map((service, index) => (
//                       <motion.div
//                         key={service.id}
//                         variants={cardVariants}
//                         initial="initial"
//                         animate="animate"
//                         exit="exit"
//                         transition={{ delay: index * 0.1 }}
//                         whileHover="hover"
//                       >
//                         <ServiceCard
//                           image={service.images[0]?.img}
//                           serviceTitle={t(service.images[0]?.title)}
//                         />
//                       </motion.div>
//                     ))}
//                 </motion.div>
//               )}

//               {!isAllView && activeService && activeService.side === "left" && (
//                 <motion.div
//                   key={`hover-left-${activeService.id}`}
//                   initial={{ opacity: 0, x: -30 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -30 }}
//                   className="absolute transition-all duration-500"
//                   style={{
//                     top:
//                       activeService.images?.length > 1
//                         ? ""
//                         : activeService.top,
//                     transform:
//                       activeService.images?.length > 1
//                         ? ""
//                         : "translateY(-50%)",
//                   }}
//                 >
//                   <div className="space-y-4">
//                     {activeService.images.map((image, index) => (
//                       <motion.div
//                         key={`${activeService.id}-${index}`}
//                         initial={{ opacity: 0, x: -50 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         exit={{ opacity: 0, x: -50 }}
//                         transition={{ delay: index * 0.1 }}
//                         whileHover={{ scale: 1.05, x: 10 }}
//                       >
//                         <ServiceCard
//                           image={image?.img}
//                           serviceTitle={t(image?.title) || t(activeService.title)}
//                           isHighlighted={index === 0}
//                         />
//                       </motion.div>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.div>

//           {/* Center Face */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: false }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="relative w-64 h-80 sm:w-80 sm:h-100 md:w-90 md:h-90 lg:w-120 lg:h-140 z-10"
//           >
//             <Image
//               src={
//                 activeTab === "men"
//                   ? "/SHAHD-IMAGE/Image_fx (30) 2.webp"
//                   : "/SHAHD-IMAGE/HomeServices/Rectangle 6.webp"
//               }
//               alt="Services"
//               fill
//               className="object-contain"
//               priority
//             />

//             <AnimatePresence>
//               {hotspots.map((hotspot) => {
//                 const isActive = currentKey === hotspot.key;
//                 const isDimmed =
//                   currentKey !== "all" && currentKey !== hotspot.key;

//                 return (
//                   <motion.div
//                     key={hotspot.key}
//                     variants={hotspotVariants}
//                     initial="initial"
//                     animate={isActive ? "hover" : "initial"}
//                     whileHover="hover"
//                     whileTap="tap"
//                     className={cn(
//                       "absolute cursor-pointer transition-all flex items-center gap-2 duration-300 pointer-events-auto",
//                       hotspot.position,
//                       hotspot?.side === "left"
//                         ? "flex-row-reverse"
//                         : "flex-row",
//                       isActive && "z-30",
//                       isDimmed && "opacity-40"
//                     )}
//                     onMouseEnter={() => handleHotspotEnter(hotspot.key)}
//                     onClick={(event) => {
//                       event.stopPropagation();
//                       handleHotspotClick(hotspot.key);
//                     }}
//                   >
//                     <motion.img
//                       src={hotspot.src}
//                       alt={hotspot.key}
//                       className="transition-all hidden min-[900px]:block w-full h-full duration-300"
//                     />

//                     <motion.img
//                       src={hotspot.src2}
//                       alt={hotspot.key}
//                       className="transition-all block min-[900px]:hidden w-full h-full duration-300"
//                     />

//                     <button
//                       type="button"
//                       className={cn(
//                         "text-white text-xs sm:text-base absolute whitespace-normal sm:whitespace-nowrap min-[900px]:hidden bg-primary p-2 rounded-full flex justify-center items-center",
//                         hotspot?.side === "left"
//                           ? "-left-10 xs:-left-20 top-[-7px] sm:-left-24 sm:top-[-8px]"
//                           : "left-20 top-4 sm:left-25 sm:top-4",
//                         hotspot?.key === "cheek" && "-left-13 top-[5px]",
//                         hotspot?.key === "lip" && "top-[5px]"
//                       )}
//                     >
//                       {t(hotspot?.title)}
//                     </button>
//                   </motion.div>
//                 );
//               })}
//             </AnimatePresence>
//           </motion.div>

//           {/* RIGHT SIDE CARDS - Desktop */}
//           <motion.div
//             className="absolute right-70 lg:right-80 xl:right-110 2xl:right-126 top-0 h-full z-20 pointer-events-none hidden min-[900px]:block"
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: false }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <AnimatePresence mode="wait">
//               {isAllView && (
//                 <motion.div
//                   key="all-right"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   className="space-y-8 absolute top-1/2 -translate-y-1/2"
//                 >
//                   {visibleServices
//                     .filter((service) => service.side === "right")
//                     .map((service, index) => (
//                       <motion.div
//                         key={service.id}
//                         variants={cardVariants}
//                         initial="initial"
//                         animate="animate"
//                         exit="exit"
//                         transition={{ delay: index * 0.1 }}
//                         whileHover="hover"
//                       >
//                         <ServiceCard
//                           image={service?.images[0]?.img}
//                           serviceTitle={t(service?.images[0]?.title)}
//                         />
//                       </motion.div>
//                     ))}
//                 </motion.div>
//               )}

//               {!isAllView && activeService && activeService.side === "right" && (
//                 <motion.div
//                   key={`hover-right-${activeService.id}`}
//                   initial={{ opacity: 0, x: 30 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: 30 }}
//                   className="absolute transition-all duration-500"
//                   style={{
//                     top:
//                       activeService.images?.length > 1
//                         ? ""
//                         : activeService.top,
//                     transform:
//                       activeService.images?.length > 1
//                         ? ""
//                         : "translateY(-50%)",
//                   }}
//                 >
//                   <div className="space-y-4">
//                     {activeService.images.map((image, index) => (
//                       <motion.div
//                         key={`${activeService.id}-${index}`}
//                         initial={{ opacity: 0, x: 50 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         exit={{ opacity: 0, x: 50 }}
//                         transition={{ delay: index * 0.1 }}
//                         whileHover={{ scale: 1.05, x: -10 }}
//                       >
//                         <ServiceCard
//                           image={image?.img}
//                           serviceTitle={t(image?.title) || t(activeService.title)}
//                           isHighlighted={index === 0}
//                         />
//                       </motion.div>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.div>

//           {/* MOBILE POPUP - Show sub-services list */}
//           <AnimatePresence>
//             {!isAllView && activeService && (
//               <motion.div
//                 initial={{ opacity: 0, y: 100 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: 100 }}
//                 className="fixed z-50 inset-x-0 bottom-0 min-[900px]:hidden bg-white/95 backdrop-blur-md rounded-t-[32px] shadow-2xl p-6 border-t border-primary/20"
//               >
//                 <div className="flex flex-col gap-6">
//                   <div className="flex items-center justify-between">
//                     <h4
//                       className={cn(
//                         "font-bold text-xl",
//                         activeTab === "women"
//                           ? "text-primary"
//                           : "text-secondary"
//                       )}
//                     >
//                       {t(activeService.title)}
//                     </h4>

//                     <button
//                       type="button"
//                       onClick={resetActiveService}
//                       className="p-2 bg-gray-100 rounded-full"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-5 w-5"
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                     </button>
//                   </div>

//                   <div className="flex flex-col gap-3 max-h-[40vh] overflow-y-auto pr-2">
//                     {activeService.images.map((item, index) => (
//                       <motion.div
//                         key={`${item.title}-${index}`}
//                         className="flex items-center gap-4 p-3 rounded-2xl bg-[#FFF9F7] border border-primary/10"
//                       >
//                         <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0">
//                           <Image
//                             src={item.img}
//                             alt={item.title}
//                             fill
//                             className="object-cover"
//                           />
//                         </div>

//                         <span className="font-medium text-gray-800 text-sm uppercase">
//                           {t(item.title)}
//                         </span>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* MOBILE SERVICES LIST */}
//         <div className="mt-8 px-4 min-[900px]:hidden space-y-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="grid grid-cols-1 gap-4"
//           >
//             {servicesData[activeTab].map((service, index) => (
//               <motion.div
//                 key={service.id}
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 onClick={() => handleHotspotClick(service.hoverKey)}
//               >
//                 <ServiceCard
//                   image={service.images[0]?.img}
//                   serviceTitle={t(service.title)}
//                   isMobileList={true}
//                   isHighlighted={currentKey === service.hoverKey}
//                 />
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function ServiceCard({
//   image,
//   serviceTitle,
//   isHighlighted = false,
//   isMobileList = false,
// }) {
//   return (
//     <motion.div
//       className={cn(
//         "relative overflow-hidden group cursor-pointer shadow-lg pointer-events-auto transition-all duration-300",
//         isMobileList
//           ? "w-full aspect-[344/140] rounded-[24px]"
//           : "w-60 h-30 xl:w-95 xl:h-35 2xl:w-112.5 2xl:h-45 rounded-[30px]",
//         isHighlighted && "ring-4 ring-primary ring-offset-4 ring-offset-[#FFF9F7]"
//       )}
//       whileHover="hover"
//       variants={cardVariants}
//     >
//       <Image
//         src={image}
//         alt={serviceTitle || "Service"}
//         fill
//         className="object-cover transition-transform duration-500 group-hover:scale-110"
//         sizes="(max-width: 768px) 100vw, 500px"
//       />

//       <motion.div
//         className={cn(
//           "absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent",
//           isMobileList && "bg-black/30"
//         )}
//         variants={{ hover: { opacity: 0.8 } }}
//         transition={{ duration: 0.3 }}
//       />

//       <motion.div
//         className={cn(
//           "absolute bg-[#E8A4A8]/90 backdrop-blur-sm rounded-full flex items-center shadow-lg border border-white/20",
//           isMobileList
//             ? "top-4 left-4 px-4 py-1.5"
//             : "top-4 left-4 px-6 py-3 max-w-[90%]"
//         )}
//         variants={{ hover: { scale: 1.05, x: 5 } }}
//         transition={{ duration: 0.3 }}
//       >
//         <span
//           className={cn(
//             "text-[#FFF9F7] font-medium tracking-wider uppercase truncate",
//             isMobileList ? "text-xs" : "text-sm lg:text-base"
//           )}
//         >
//           {serviceTitle || "Service"}
//         </span>
//       </motion.div>

//       <motion.div
//         className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
//         initial={{ x: "-100%" }}
//         variants={{ hover: { x: "100%" } }}
//         transition={{ duration: 1 }}
//       />
//     </motion.div>
//   );
// }

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { useGetHomeServices } from "../../../../hooks/home/useHome";

const tabs = [
  { id: "women", label: "SERVICES FOR WOMEN" },
  { id: "men", label: "SERVICES FOR MEN" },
];

const hoverToServiceMap = {
  all: [1, 2, 3, 4, 5, 6],
  wrinkle: [1],
  cheek: [2],
  lip: [3],
  hair: [4],
  eyebrow: [5],
  nose: [6],
};

const servicesData = {
  women: [
    {
      id: 1,
      title: "WRINKLE TREATMENT",
      side: "left",
      top: "14%",
      hoverKey: "wrinkle",
      images: [
        {
          img: "/SHAHD-IMAGE/HomeServices/wrinkle.webp",
          title: "WRINKLE TREATMENT",
        },
        {
          img: "/SHAHD-IMAGE/HomeServices/wrinkle.webp",
          title: "WRINKLE TREATMENT 2",
        },
        {
          img: "/SHAHD-IMAGE/HomeServices/wrinkle.webp",
          title: "WRINKLE TREATMENT 3",
        },
      ],
    },
    {
      id: 2,
      title: "CHEEK ENHANCEMENT",
      hoverKey: "cheek",
      side: "left",
      top: "50%",
      images: [
        {
          img: "/SHAHD-IMAGE/HomeServices/cheek.webp",
          title: "CHEEK ENHANCEMENT",
        },
        {
          img: "/SHAHD-IMAGE/HomeServices/cheek.webp",
          title: "CHEEK ENHANCEMENT 2",
        },
        {
          img: "/SHAHD-IMAGE/HomeServices/cheek.webp",
          title: "CHEEK ENHANCEMENT 3",
        },
      ],
    },
    {
      id: 3,
      title: "LIP ENHANCEMENT",
      side: "left",
      top: "60%",
      hoverKey: "lip",
      images: [
        {
          img: "/SHAHD-IMAGE/HomeServices/lip.webp",
          title: "LIP ENHANCEMENT",
        },
      ],
    },
    {
      id: 4,
      title: "HAIR TREATMENT",
      side: "right",
      top: "3%",
      hoverKey: "hair",
      images: [
        {
          img: "/SHAHD-IMAGE/HomeServices/hair.webp",
          title: "HAIR TREATMENT",
        },
      ],
    },
    {
      id: 5,
      title: "EYEBROW ENHANCEMENT",
      side: "right",
      top: "30%",
      hoverKey: "eyebrow",
      images: [
        {
          img: "/SHAHD-IMAGE/HomeServices/eyebrow.webp",
          title: "EYEBROW ENHANCEMENT",
        },
      ],
    },
    {
      id: 6,
      title: "NOSE AESTHETICS",
      side: "right",
      top: "50%",
      hoverKey: "nose",
      images: [
        {
          img: "/SHAHD-IMAGE/HomeServices/nose.webp",
          title: "NOSE AESTHETICS",
        },
      ],
    },
  ],
  men: [
    {
      id: 1,
      title: "WRINKLE TREATMENT",
      side: "left",
      top: "14%",
      hoverKey: "wrinkle",
      images: [
        {
          img: "/SHAHD-IMAGE/HomeServices/wrinkle.webp",
          title: "WRINKLE TREATMENT",
        },
        {
          img: "/SHAHD-IMAGE/HomeServices/wrinkle.webp",
          title: "WRINKLE TREATMENT 2",
        },
        {
          img: "/SHAHD-IMAGE/HomeServices/wrinkle.webp",
          title: "WRINKLE TREATMENT 3",
        },
      ],
    },
    {
      id: 2,
      title: "CHEEK ENHANCEMENT",
      hoverKey: "cheek",
      side: "left",
      top: "50%",
      images: [
        {
          img: "/SHAHD-IMAGE/HomeServices/cheek.webp",
          title: "CHEEK ENHANCEMENT",
        },
        {
          img: "/SHAHD-IMAGE/HomeServices/cheek.webp",
          title: "CHEEK ENHANCEMENT 2",
        },
        {
          img: "/SHAHD-IMAGE/HomeServices/cheek.webp",
          title: "CHEEK ENHANCEMENT 3",
        },
      ],
    },
    {
      id: 3,
      title: "LIP ENHANCEMENT",
      side: "left",
      top: "60%",
      hoverKey: "lip",
      images: [
        {
          img: "/SHAHD-IMAGE/HomeServices/lip.webp",
          title: "LIP ENHANCEMENT",
        },
      ],
    },
    {
      id: 4,
      title: "HAIR TREATMENT",
      side: "right",
      top: "3%",
      hoverKey: "hair",
      images: [
        {
          img: "/SHAHD-IMAGE/HomeServices/hair.webp",
          title: "HAIR TREATMENT",
        },
      ],
    },
    {
      id: 5,
      title: "EYEBROW ENHANCEMENT",
      side: "right",
      top: "30%",
      hoverKey: "eyebrow",
      images: [
        {
          img: "/SHAHD-IMAGE/HomeServices/eyebrow.webp",
          title: "EYEBROW ENHANCEMENT",
        },
      ],
    },
    {
      id: 6,
      title: "NOSE AESTHETICS",
      side: "right",
      top: "50%",
      hoverKey: "nose",
      images: [
        {
          img: "/SHAHD-IMAGE/HomeServices/nose.webp",
          title: "NOSE AESTHETICS",
        },
      ],
    },
  ],
};

const hotspots = [
  {
    key: "wrinkle",
    side: "left",
    title: "WRINKLE TREATMENT",
    src: "/SHAHD-IMAGE/HomeServices/Group 27.webp",
    src2: "/SHAHD-IMAGE/HomeServices/small1.png",
    position: "top-[14%] left-0",
    serviceId: 1,
  },
  {
    key: "cheek",
    side: "left",
    title: "CHEEK ENHANCEMENT",
    src: "/SHAHD-IMAGE/HomeServices/Group 27.webp",
    src2: "/SHAHD-IMAGE/HomeServices/small2.png",
    position: "top-[50%] left-0",
    serviceId: 2,
  },
  {
    key: "lip",
    side: "left",
    title: "LIP ENHANCEMENT",
    src: "/SHAHD-IMAGE/HomeServices/Group 26.webp",
    src2: "/SHAHD-IMAGE/HomeServices/small3.png",
    position:
      "top-[69%] sm:top-[70%] left-7 sm:left-15 md:top-[65%] md:-left-7",
    serviceId: 3,
  },
  {
    key: "hair",
    side: "right",
    title: "HAIR TREATMENT",
    src: "/SHAHD-IMAGE/HomeServices/Frame 1000005599.webp",
    src2: "/SHAHD-IMAGE/HomeServices/small4.png",
    position: "top-[3%] right-0",
    serviceId: 4,
  },
  {
    key: "eyebrow",
    side: "right",
    title: "EYEBROW ENHANCEMENT",
    src: "/SHAHD-IMAGE/HomeServices/Group 23.webp",
    src2: "/SHAHD-IMAGE/HomeServices/small5.png",
    position: "top-[30%] right-0",
    serviceId: 5,
  },
  {
    key: "nose",
    side: "right",
    title: "NOSE AESTHETICS",
    src: "/SHAHD-IMAGE/HomeServices/Group 24.webp",
    src2: "/SHAHD-IMAGE/HomeServices/small6.png",
    position: "top-[50%] right-10 sm:right-17 md:right-0",
    serviceId: 6,
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 20, scale: 0.9 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -20, scale: 0.9 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
};

const hotspotVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.16,
    filter: "drop-shadow(0 10px 15px rgba(232, 164, 168, 0.4))",
    transition: { duration: 0.2 },
  },
  tap: { scale: 0.95 },
};

const rtlLanguages = ["ar", "he", "fa", "ur"];

function isRtlLanguage(language = "") {
  return rtlLanguages.includes(language.split("-")[0]);
}

function getVisualSide(side, isRTL) {
  return side;
}

function getMobileLabelClass(hotspot, isRTL) {
  if (!isRTL) {
    if (hotspot.side === "left") {
      return cn(
        "-left-[118px] top-0 sm:-left-[145px] sm:top-0",
        hotspot.key === "cheek" && "-left-[125px] top-1",
        hotspot.key === "lip" && "-left-[118px] top-1",
      );
    }

    return "left-12 top-1 sm:left-14 sm:top-1";
  }

  if (hotspot.side === "left") {
    return cn(
      "right-12 top-0 sm:right-14 sm:top-0",
      hotspot.key === "cheek" && "right-12 top-1",
      hotspot.key === "lip" && "right-12 top-1",
    );
  }

  return "-left-[118px] top-1 sm:-left-[145px] sm:top-1";
}

const resolveServiceImageUrl = (imgUrl, rawImg) => {
  if (imgUrl && imgUrl.startsWith("http")) {
    return imgUrl;
  }
  if (rawImg && rawImg.startsWith("http")) {
    return rawImg;
  }
  if (rawImg) {
    return `https://drshahdawad.com/ShahdAwad/uploads/services/${rawImg}`;
  }
  if (imgUrl) {
    return `https://drshahdawad.com/ShahdAwad/uploads/services/${imgUrl}`;
  }
  return "";
};

export default function HomeServices({ data }) {
  const { t, i18n } = useTranslation();
  const isRTL = isRtlLanguage(i18n.resolvedLanguage || i18n.language);
  const direction = isRTL ? "rtl" : "ltr";

  const [activeTab, setActiveTab] = useState("women");
  const [hoveredKey, setHoveredKey] = useState("all");
  const [selectedKey, setSelectedKey] = useState(null);

  const params = {
    gender: activeTab,
    hover_key: hoveredKey,
  };

  const { data: servicesResponse, isLoading } = useGetHomeServices(params);
  console.log("servicesResponse", servicesResponse);
  const lang = i18n.language?.startsWith("ar")
    ? "ar"
    : i18n.language?.startsWith("sk")
      ? "sk"
      : i18n.language?.startsWith("de")
        ? "de"
        : "en";
  const titleField = `label_${lang}`;

  const mappedServices = React.useMemo(() => {
    const sourceData = servicesResponse?.data || data;
    const rawServices =
      sourceData?.[activeTab] ||
      sourceData?.all ||
      (Array.isArray(sourceData) ? sourceData : []);

    if (!rawServices.length) {
      return [];
    }

    const getPositionDataForHoverKey = (hoverKey) => {
      const mapping = {
        wrinkle: { side: "left", top: "14%" },
        cheek: { side: "left", top: "50%" },
        lip: { side: "left", top: "60%" },
        hair: { side: "right", top: "3%" },
        eyebrow: { side: "right", top: "30%" },
        nose: { side: "right", top: "50%" },
      };
      return mapping[hoverKey] || { side: "left", top: "10%" };
    };

    const hoverKeyToIdMap = {
      wrinkle: 1,
      cheek: 2,
      lip: 3,
      hair: 4,
      eyebrow: 5,
      nose: 6,
    };

    const grouped = {};
    rawServices.forEach((item) => {
      const hk = item.hover_key || "all";
      if (!grouped[hk]) {
        const pos = getPositionDataForHoverKey(hk);
        grouped[hk] = {
          id: hoverKeyToIdMap[hk] || 99,
          title:
            item[titleField] ||
            item.label_en ||
            item.label_ar ||
            item.title ||
            "",
          hoverKey: hk,
          side: pos.side,
          top: pos.top,
          images: [],
        };
      }
      grouped[hk].images.push({
        img: resolveServiceImageUrl(item.image_url, item.image),
        title:
          item[titleField] ||
          item.label_en ||
          item.label_ar ||
          item.title ||
          "",
      });
    });

    return Object.values(grouped);
  }, [servicesResponse, data, activeTab, titleField]);

  const activeHotspots = React.useMemo(() => {
    return hotspots.filter((hotspot) =>
      mappedServices.some((service) => service.hoverKey === hotspot.key)
    );
  }, [mappedServices]);

  const currentKey = selectedKey || hoveredKey;
  const isAllView = currentKey === "all";

  const visibleServiceIds =
    hoverToServiceMap[currentKey] || hoverToServiceMap.all;

  const visibleServices = mappedServices.filter((service) =>
    visibleServiceIds.includes(service.id),
  );

  const activeService = !isAllView ? visibleServices[0] : null;

  const handleHotspotEnter = (key) => {
    if (!selectedKey) {
      setHoveredKey(key);
    }
  };

  const handleHotspotClick = (key) => {
    setSelectedKey((prev) => {
      if (prev === key) {
        setHoveredKey("all");
        return null;
      }

      setHoveredKey(key);
      return key;
    });
  };

  const handleAreaLeave = () => {
    if (!selectedKey) {
      setHoveredKey("all");
    }
  };

  const resetActiveService = () => {
    setSelectedKey(null);
    setHoveredKey("all");
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    resetActiveService();
  };

  if (isLoading && !data) {
    return (
      <div className="min-h-screen bg-[#FFF9F7] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <section
      dir={direction}
      className="relative overflow-hidden min-h-screen bg-[#FFF9F7]"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/SHAHD-IMAGE/Services/Desktop - 20.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 main-container mx-auto py-12">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-center mb-4 min-[900px]:mb-10"
        >
          <div
            className={cn(
              "inline-flex flex-col p-[10px_6px] rounded-full bg-[#FCF7F8]/20 backdrop-blur-lg border-2 border-[#FCF7F8]",
              isRTL ? "sm:flex-row-reverse" : "sm:flex-row",
            )}
          >
            {tabs.map((tab, index) => {
              const isWomen = tab.id === "women";
              const isActive = activeTab === tab.id;

              return (
                <motion.button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabChange(tab.id)}
                  className={cn(
                    "px-3 py-1 rounded-full text-xl font-normal tracking-wider transition-all duration-300 text-center",
                    isActive ? "bg-white" : "bg-transparent",
                    isWomen
                      ? isActive
                        ? "shadow-[4px_5px_5px_#DDB2B5] border-2 border-primary text-primary"
                        : "text-primary/70 hover:text-primary hover:border-primary"
                      : isActive
                        ? "shadow-[4px_5px_5px_rgba(0,0,0,0.1)] border-2 border-secondary text-secondary"
                        : "text-secondary/70 hover:text-secondary hover:border-secondary",
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 }}
                >
                  {t(tab.label)}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        <div
          dir="ltr"
          className={cn(
            "relative min-h-[500px]",
            "flex flex-col items-center justify-center gap-8",
            "min-[900px]:grid min-[900px]:grid-cols-[minmax(220px,420px)_minmax(340px,520px)_minmax(220px,420px)]",
            "min-[900px]:items-center min-[900px]:gap-2",
          )}
          onMouseLeave={handleAreaLeave}
        >
          <SideCards
            visualSide="left"
            visibleServices={visibleServices}
            activeService={activeService}
            isAllView={isAllView}
            isRTL={isRTL}
            t={t}
          />

          <motion.div
            dir="ltr"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative w-64 h-80 sm:w-80 sm:h-100 md:w-90 md:h-100 lg:w-full lg:max-w-[480px] lg:h-[500px] z-10 mx-auto"
          >
            <Image
              src={
                activeTab === "men"
                  ? "/SHAHD-IMAGE/Image_fx (30) 2.webp"
                  : "/SHAHD-IMAGE/HomeServices/Rectangle 6.webp"
              }
              alt="Services"
              fill
              className="object-contain"
              priority
            />

            <AnimatePresence>
              {activeHotspots.map((hotspot) => {
                const isActive = currentKey === hotspot.key;
                const isDimmed =
                  currentKey !== "all" && currentKey !== hotspot.key;

                return (
                  <motion.div
                    key={hotspot.key}
                    variants={hotspotVariants}
                    initial="initial"
                    animate={isActive ? "hover" : "initial"}
                    whileHover="hover"
                    whileTap="tap"
                    className={cn(
                      "absolute cursor-pointer transition-all flex items-center gap-2 duration-300 pointer-events-auto",
                      hotspot.position,
                      hotspot.side === "left" ? "flex-row-reverse" : "flex-row",
                      isActive && "z-30",
                      isDimmed && "opacity-40",
                    )}
                    onMouseEnter={() => handleHotspotEnter(hotspot.key)}
                    onClick={(event) => {
                      event.stopPropagation();
                      handleHotspotClick(hotspot.key);
                    }}
                  >
                    <motion.img
                      src={hotspot.src}
                      alt={hotspot.key}
                      className="transition-all hidden min-[900px]:block w-full h-full duration-300"
                    />

                    <motion.img
                      src={hotspot.src2}
                      alt={hotspot.key}
                      className={cn(
                        "transition-all block min-[900px]:hidden",
                        "w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12",
                        "object-contain duration-300 drop-shadow-lg",
                        isActive && "scale-110",
                      )}
                    />

                    <button
                      type="button"
                      dir={direction}
                      className={cn(
                        "absolute min-[900px]:hidden bg-primary text-white text-[10px] xs:text-xs sm:text-sm leading-tight px-3 py-2 rounded-full flex justify-center items-center max-w-[116px] sm:max-w-[145px] min-h-8 text-center shadow-lg border border-white/30",
                        getMobileLabelClass(hotspot, isRTL),
                        isRTL ? "font-medium" : "uppercase tracking-wide",
                      )}
                    >
                      {t(hotspot.title)}
                    </button>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          <SideCards
            visualSide="right"
            visibleServices={visibleServices}
            activeService={activeService}
            isAllView={isAllView}
            isRTL={isRTL}
            t={t}
          />

          <AnimatePresence>
            {!isAllView && activeService && (
              <motion.div
                dir={direction}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                className="fixed z-50 inset-x-0 bottom-0 min-[900px]:hidden bg-white/95 backdrop-blur-md rounded-t-[32px] shadow-2xl p-6 border-t border-primary/20"
              >
                <div className="flex flex-col gap-6">
                  <div
                    className={cn(
                      "flex items-center justify-between gap-4",
                      isRTL && "flex-row-reverse",
                    )}
                  >
                    <h4
                      className={cn(
                        "font-bold text-xl leading-snug",
                        isRTL ? "text-right" : "text-left",
                        activeTab === "women"
                          ? "text-primary"
                          : "text-secondary",
                      )}
                    >
                      {t(activeService.title)}
                    </h4>

                    <button
                      type="button"
                      onClick={resetActiveService}
                      className="p-2 bg-gray-100 rounded-full shrink-0"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>

                  <div
                    className={cn(
                      "flex flex-col gap-3 max-h-[40vh] overflow-y-auto",
                      isRTL ? "pl-2" : "pr-2",
                    )}
                  >
                    {activeService.images.map((item, index) => (
                      <motion.div
                        key={`${item.title}-${index}`}
                        className={cn(
                          "flex items-center gap-4 p-3 rounded-2xl bg-[#FFF9F7] border border-primary/10",
                          isRTL && "flex-row-reverse text-right",
                        )}
                      >
                        <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0">
                          <Image
                            src={item.img}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <span
                          className={cn(
                            "font-medium text-gray-800 text-sm uppercase leading-snug",
                            isRTL && "normal-case",
                          )}
                        >
                          {t(item.title)}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div dir={direction} className="mt-8 px-4 min-[900px]:hidden space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-4"
          >
            {mappedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleHotspotClick(service.hoverKey)}
              >
                <ServiceCard
                  image={service.images[0]?.img}
                  serviceTitle={t(service.title)}
                  isMobileList
                  isHighlighted={currentKey === service.hoverKey}
                  isRTL={isRTL}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SideCards({
  visualSide,
  visibleServices,
  activeService,
  isAllView,
  isRTL,
  t,
}) {
  const servicesForSide = visibleServices.filter(
    (service) => getVisualSide(service.side) === visualSide,
  );

  const isActiveServiceOnSide =
    activeService && getVisualSide(activeService.side, isRTL) === visualSide;

  return (
    <motion.div
      className={cn(
        "hidden min-[900px]:flex w-full h-full z-20 pointer-events-none relative",
        visualSide === "left" ? "justify-end" : "justify-start",
      )}
      initial={{ opacity: 0, x: visualSide === "left" ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <AnimatePresence mode="wait">
        {isAllView && (
          <motion.div
            key={`all-${visualSide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col gap-6 justify-center w-full max-w-[420px]"
          >
            {servicesForSide.map((service, index) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: index * 0.1 }}
                whileHover="hover"
              >
                <ServiceCard
                  image={service.images[0]?.img}
                  serviceTitle={t(service.images[0]?.title)}
                  isRTL={isRTL}
                />
              </motion.div>
            ))}
          </motion.div>
        )}

        {!isAllView && activeService && isActiveServiceOnSide && (
          <motion.div
            key={`hover-${visualSide}-${activeService.id}`}
            initial={{ opacity: 0, x: visualSide === "left" ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: visualSide === "left" ? -30 : 30 }}
            className="absolute flex flex-col gap-4 w-full max-w-[360px] xl:max-w-[400px] 2xl:max-w-[430px]"
            style={{
              top: activeService.images?.length > 1 ? "10%" : activeService.top,
              transform: activeService.images?.length > 1 ? "" : (parseFloat(activeService.top) < 10 ? "translateY(0)" : "translateY(-50%)"),
              right: visualSide === "left" ? 0 : "auto",
              left: visualSide === "right" ? 0 : "auto",
            }}
          >
            {activeService.images.map((image, index) => (
              <motion.div
                key={`${activeService.id}-${index}`}
                initial={{ opacity: 0, x: visualSide === "left" ? -40 : 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: visualSide === "left" ? -40 : 40 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.04,
                  x: visualSide === "left" ? 8 : -8,
                }}
              >
                <ServiceCard
                  image={image?.img}
                  serviceTitle={
                    image?.title ? t(image.title) : t(activeService.title)
                  }
                  isHighlighted={index === 0}
                  isRTL={isRTL}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function ServiceCard({
  image,
  serviceTitle,
  isHighlighted = false,
  isMobileList = false,
  isRTL = false,
}) {
  return (
    <motion.div
      dir={isRTL ? "rtl" : "ltr"}
      className={cn(
        "relative overflow-hidden group cursor-pointer shadow-lg pointer-events-auto transition-all duration-300",
        isMobileList
          ? "w-full aspect-[344/140] rounded-[24px]"
          : "w-full max-w-[360px] h-[120px] xl:max-w-[400px] xl:h-[135px] 2xl:max-w-[430px] 2xl:h-[150px] rounded-[30px]",
        isHighlighted &&
          "ring-4 ring-primary ring-offset-4 ring-offset-[#FFF9F7]",
      )}
      whileHover="hover"
      variants={cardVariants}
    >
      <Image
        src={image}
        alt={serviceTitle || "Service"}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, 430px"
      />

      <motion.div
        className={cn(
          "absolute inset-0",
          isRTL
            ? "bg-gradient-to-l from-black/50 via-black/10 to-transparent"
            : "bg-gradient-to-r from-black/50 via-black/10 to-transparent",
          isMobileList && "bg-black/30",
        )}
        variants={{ hover: { opacity: 0.8 } }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className={cn(
          "absolute bg-[#E8A4A8]/90 backdrop-blur-sm rounded-full flex items-center shadow-lg border border-white/20 max-w-[90%]",
          isMobileList ? "top-4 px-4 py-1.5" : "top-4 px-6 py-3",
          isRTL ? "right-4 text-right" : "left-4 text-left",
        )}
        variants={{ hover: { scale: 1.05, x: isRTL ? -5 : 5 } }}
        transition={{ duration: 0.3 }}
      >
        <span
          className={cn(
            "text-[#FFF9F7] font-medium tracking-wider truncate",
            isMobileList ? "text-xs" : "text-sm lg:text-base",
            isRTL ? "normal-case" : "uppercase",
          )}
        >
          {serviceTitle || "Service"}
        </span>
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ x: isRTL ? "100%" : "-100%" }}
        variants={{ hover: { x: isRTL ? "-100%" : "100%" } }}
        transition={{ duration: 1 }}
      />
    </motion.div>
  );
}
