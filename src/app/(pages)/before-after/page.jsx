// // "use client";

// // import { useState } from "react";
// // import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
// // import { Badge } from "@/components/ui/badge";
// // import { ArrowUpRight, Sparkles } from "lucide-react";
// // import Image from "next/image";

// // import BeforeAfterBanner from "../../../components/pages/BeforeAfter/BeforeAfterBanner";
// // import BeforeAfterFeatureSection from "../../../components/pages/BeforeAfter/BeforeAfterFeatureSection";

// // const galleryContainer = {
// //   hidden: {},
// //   visible: {
// //     transition: {
// //       staggerChildren: 0.08,
// //     },
// //   },
// // };

// // const galleryCardVariant = {
// //   hidden: {
// //     opacity: 0,
// //     y: 30,
// //     scale: 0.96,
// //   },
// //   visible: {
// //     opacity: 1,
// //     y: 0,
// //     scale: 1,
// //     transition: {
// //       duration: 0.55,
// //       ease: "easeOut",
// //     },
// //   },
// //   exit: {
// //     opacity: 0,
// //     y: 20,
// //     scale: 0.96,
// //     transition: {
// //       duration: 0.25,
// //     },
// //   },
// // };

// // const CASES = [
// //   {
// //     id: 1,
// //     category: "Nose",
// //     title: "Non-Surgical Nose Reshaping",
// //     description:
// //       "Achieved a balanced and natural facial profile with minimal downtime. Using advanced fillers to reshape without surgery.",
// //     beforeImg:
// //       "/SHAHD-IMAGE/homebefore/360192f749c1a01a3084ceeb2712b040de2415a4.webp",
// //     afterImg:
// //       "/SHAHD-IMAGE/homebefore/0402d70a66c38d6594b9a42587cf70e03e81233f.webp",
// //     thumbnails: [
// //       "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
// //       "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=300&q=80",
// //       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
// //     ],
// //   },
// //   {
// //     id: 2,
// //     category: "Lips",
// //     title: "Natural Lip Enhancement",
// //     description:
// //       "Subtle volume and definition added with hyaluronic acid fillers for a naturally fuller look.",
// //     beforeImg:
// //       "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
// //     afterImg:
// //       "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80",
// //     thumbnails: [
// //       "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=300&q=80",
// //       "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=300&q=80",
// //       "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=300&q=80",
// //     ],
// //   },
// //   {
// //     id: 3,
// //     category: "Skin",
// //     title: "Skin Rejuvenation & Glow",
// //     description:
// //       "A customized treatment combining laser and serums to restore radiance.",
// //     beforeImg:
// //       "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80",
// //     afterImg:
// //       "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80",
// //     thumbnails: [
// //       "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=300&q=80",
// //       "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=300&q=80",
// //       "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=300&q=80",
// //     ],
// //   },
// //   {
// //     id: 4,
// //     category: "Cheeks",
// //     title: "Cheek Enhancement",
// //     description:
// //       "Enhanced cheek contour and facial harmony using precise filler placement for a lifted, youthful result.",
// //     beforeImg:
// //       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
// //     afterImg:
// //       "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
// //     thumbnails: [
// //       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
// //       "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80",
// //       "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=300&q=80",
// //     ],
// //   },
// //   {
// //     id: 5,
// //     category: "Hair",
// //     title: "Hair Treatment",
// //     description:
// //       "A targeted hair restoration treatment designed to improve scalp vitality and support healthier-looking hair.",
// //     beforeImg:
// //       "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?auto=format&fit=crop&w=900&q=80",
// //     afterImg:
// //       "https://images.unsplash.com/photo-1523263685509-57c1d050d19b?auto=format&fit=crop&w=900&q=80",
// //     thumbnails: [
// //       "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?auto=format&fit=crop&w=300&q=80",
// //       "https://images.unsplash.com/photo-1523263685509-57c1d050d19b?auto=format&fit=crop&w=300&q=80",
// //       "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=300&q=80",
// //     ],
// //   },
// //   {
// //     id: 6,
// //     category: "Eyebrow",
// //     title: "Eyebrow Enhancement",
// //     description:
// //       "Defined and balanced eyebrow aesthetics to improve facial expression and create a softer, more polished look.",
// //     beforeImg:
// //       "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=900&q=80",
// //     afterImg:
// //       "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?auto=format&fit=crop&w=900&q=80",
// //     thumbnails: [
// //       "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=300&q=80",
// //       "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?auto=format&fit=crop&w=300&q=80",
// //       "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=300&q=80",
// //     ],
// //   },
// // ];

// // const CATEGORIES = [
// //   "All",
// //   "Nose",
// //   "Lips",
// //   "Skin",
// //   "Cheeks",
// //   "Hair",
// //   "Eyebrow",
// // ];

// // export function PlaceholderImg({
// //   src = "",
// //   label = "",
// //   alt = "",
// //   className = "",
// //   style = {},
// // }) {
// //   const hasImage = Boolean(src);

// //   return (
// //     <div
// //       style={style}
// //       className={`relative overflow-hidden flex items-center justify-center bg-[#fdf2f0] border border-primary/5 text-primary/30 text-[10px] tracking-widest uppercase font-bold ${className}`}
// //     >
// //       {hasImage ? (
// //         <>
// //           <Image
// //             src={src}
// //             alt={alt || label || "Before after image"}
// //             fill
// //             className="object-cover"
// //             sizes="(max-width: 768px) 100vw, 900px"
// //           />

// //           {label && (
// //             <span className="absolute top-4 left-4 z-20 rounded-full bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[2px] text-primary backdrop-blur">
// //               {label}
// //             </span>
// //           )}
// //         </>
// //       ) : (
// //         <span>{label}</span>
// //       )}
// //     </div>
// //   );
// // }

// // function GalleryCaseCard({ item, onClick }) {
// //   return (
// //     <motion.button
// //       type="button"
// //       layout
// //       variants={galleryCardVariant}
// //       initial="hidden"
// //       animate="visible"
// //       exit="exit"
// //       whileHover={{ y: -10 }}
// //       whileTap={{ scale: 0.98 }}
// //       onClick={onClick}
// //       className="group relative block w-full cursor-pointer text-left"
// //     >
// //       <div className="relative overflow-hidden rounded-[2rem] bg-[#fff9f7] p-2 shadow-[0_18px_50px_rgba(70,40,45,0.08)] transition-all duration-500 group-hover:shadow-[0_26px_70px_rgba(70,40,45,0.16)]">
// //         <div className="relative h-80 overflow-hidden rounded-[1.6rem] bg-[#fdf2f0]">
// //           {/* BEFORE IMAGE - default */}
// //           <Image
// //             src={item.beforeImg}
// //             alt={`${item.title} before`}
// //             fill
// //             className="object-cover transition-transform duration-700 group-hover:scale-105"
// //             sizes="(max-width: 768px) 100vw, 400px"
// //           />

// //           {/* AFTER IMAGE - appears on hover */}
// //           <Image
// //             src={item.afterImg}
// //             alt={`${item.title} after`}
// //             fill
// //             className="object-cover opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
// //             sizes="(max-width: 768px) 100vw, 400px"
// //           />

// //           {/* Hover shine */}
// //           <div className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 group-hover:translate-x-[120%]" />

// //           {/* Soft gradient */}
// //           <div className="absolute inset-0 bg-gradient-to-t from-[#2d2020]/75 via-[#2d2020]/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

// //           {/* Category */}
// //           <Badge className="absolute left-5 top-5 border-none bg-white/90 px-4 py-1.5 text-[9px] uppercase tracking-[2px] text-primary shadow-sm backdrop-blur-md">
// //             {item.category}
// //           </Badge>

// //           {/* Before / After pill */}
// //           <div className="absolute right-5 top-5 overflow-hidden rounded-full bg-white/90 p-1 text-[9px] font-bold uppercase tracking-[1.5px] text-primary shadow-sm backdrop-blur-md">
// //             <div className="relative h-7 w-[88px]">
// //               <span className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0">
// //                 Before
// //               </span>
// //               <span className="absolute inset-0 flex translate-y-full items-center justify-center opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
// //                 After
// //               </span>
// //             </div>
// //           </div>

// //           {/* Hover icon */}
// //           <div className="absolute bottom-5 right-5 flex h-11 w-11 translate-y-4 items-center justify-center rounded-full bg-white text-primary opacity-0 shadow-xl transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
// //             <ArrowUpRight size={18} />
// //           </div>

// //           {/* Bottom label */}
// //           <div className="absolute bottom-0 left-0 right-0 p-5">
// //             <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[2px] text-white/85">
// //               <Sparkles size={13} />
// //               <span>View Transformation</span>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="px-3 pb-4 pt-5">
// //           <h4 className="font-main text-2xl font-normal leading-tight text-primary transition-colors duration-300">
// //             {item.title}
// //           </h4>

// //           <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-[#a08080]">
// //             {item.description}
// //           </p>

// //           <div className="mt-5 flex items-center justify-between border-t border-primary/10 pt-4">
// //             <span className="text-[10px] font-bold uppercase tracking-[2px] text-primary/60">
// //               Before / After
// //             </span>

// //             <span className="rounded-full bg-primary/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[2px] text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
// //               Open Case
// //             </span>
// //           </div>
// //         </div>
// //       </div>
// //     </motion.button>
// //   );
// // }

// // export default function BeforeAfterPage() {
// //   const [activeCase, setActiveCase] = useState(0);
// //   const [filterCat, setFilterCat] = useState("All");

// //   const filtered =
// //     filterCat === "All"
// //       ? CASES
// //       : CASES.filter((caseItem) => caseItem.category === filterCat);

// //   return (
// //     <div className="min-h-screen overflow-x-hidden bg-[#fffcfb] font-sans">
// //       {/* HERO BANNER */}
// //       <BeforeAfterBanner />

// //       {/* FEATURED SECTION */}
// //       <div id="featured-before-after">
// //         <BeforeAfterFeatureSection
// //           activeCase={activeCase}
// //           CASES={CASES}
// //           setActiveCase={setActiveCase}
// //         />
// //       </div>

// //       {/* GALLERY */}
// //       <section className="relative overflow-hidden border-t border-primary/5 bg-white py-4">
// //         <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
// //         <div className="pointer-events-none absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-[#e8a4a8]/10 blur-3xl" />

// //         <div className="relative z-10 mx-auto max-w-7xl px-6">
// //           <motion.div
// //             initial={{ opacity: 0, y: 24 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: false, amount: 0.3 }}
// //             transition={{ duration: 0.6, ease: "easeOut" }}
// //             className="mb-6 flex flex-col items-center justify-between gap-2 text-center"
// //           >
// //             <p className="text-base font-bold uppercase tracking-[4px] text-secondary">
// //               Real Results
// //             </p>

// //             <h3 className="font-main text-4xl font-light text-primary md:text-5xl">
// //               Explore All Cases
// //             </h3>

// //             <p className="max-w-2xl text-sm leading-relaxed text-text md:text-base">
// //               Browse transformations and hover each card to preview the after
// //               result. Click any case to open it in the featured comparison.
// //             </p>

// //             <div className="flex max-w-full flex-wrap justify-center gap-2 rounded-[2rem] border border-primary/5 bg-[#fff9f7] p-1.5">
// //               {CATEGORIES.map((cat) => (
// //                 <button
// //                   key={cat}
// //                   type="button"
// //                   onClick={() => setFilterCat(cat)}
// //                   className={`rounded-full px-5 py-2 text-[10px] uppercase tracking-widest font-bold transition-all md:px-6 ${
// //                     filterCat === cat
// //                       ? "bg-primary text-white shadow-md"
// //                       : "text-[#a08080] hover:bg-white hover:text-primary"
// //                   }`}
// //                 >
// //                   {cat}
// //                 </button>
// //               ))}
// //             </div>
// //           </motion.div>

// //           <LayoutGroup>
// //             <motion.div
// //               layout
// //               variants={galleryContainer}
// //               initial="hidden"
// //               whileInView="visible"
// //               viewport={{ once: false, amount: 0.15 }}
// //               className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
// //             >
// //               <AnimatePresence mode="popLayout">
// //                 {filtered.map((item) => {
// //                   const originalIndex = CASES.findIndex(
// //                     (caseItem) => caseItem.id === item.id
// //                   );

// //                   return (
// //                     <GalleryCaseCard
// //                       key={item.id}
// //                       item={item}
// //                       onClick={() => {
// //                         setActiveCase(originalIndex);

// //                         document
// //                           .getElementById("featured-before-after")
// //                           ?.scrollIntoView({
// //                             behavior: "smooth",
// //                             block: "start",
// //                           });
// //                       }}
// //                     />
// //                   );
// //                 })}
// //               </AnimatePresence>
// //             </motion.div>
// //           </LayoutGroup>

// //           {filtered.length === 0 && (
// //             <motion.div
// //               initial={{ opacity: 0, y: 16 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               className="py-20 text-center text-[#a08080]"
// //             >
// //               <p className="font-main text-3xl font-light text-primary">
// //                 No cases found
// //               </p>
// //               <p className="mt-2 text-sm">Try selecting another category.</p>
// //             </motion.div>
// //           )}
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }


// "use client";

// import { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { Badge } from "@/components/ui/badge";
// import { ArrowUpRight, Sparkles } from "lucide-react";
// import Image from "next/image";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/effect-coverflow";

// import BeforeAfterBanner from "../../../components/pages/BeforeAfter/BeforeAfterBanner";
// import BeforeAfterFeatureSection from "../../../components/pages/BeforeAfter/BeforeAfterFeatureSection";

// const CASES = [
//   {
//     id: 1,
//     category: "Nose",
//     title: "Non-Surgical Nose Reshaping",
//     description:
//       "Achieved a balanced and natural facial profile with minimal downtime. Using advanced fillers to reshape without surgery.",
//     beforeImg:
//       "/SHAHD-IMAGE/homebefore/360192f749c1a01a3084ceeb2712b040de2415a4.webp",
//     afterImg:
//       "/SHAHD-IMAGE/homebefore/0402d70a66c38d6594b9a42587cf70e03e81233f.webp",
//     thumbnails: [
//       "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
//       "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=300&q=80",
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
//     ],
//   },
//   {
//     id: 2,
//     category: "Lips",
//     title: "Natural Lip Enhancement",
//     description:
//       "Subtle volume and definition added with hyaluronic acid fillers for a naturally fuller look.",
//     beforeImg:
//       "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
//     afterImg:
//       "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80",
//     thumbnails: [
//       "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=300&q=80",
//       "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=300&q=80",
//       "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=300&q=80",
//     ],
//   },
//   {
//     id: 3,
//     category: "Skin",
//     title: "Skin Rejuvenation & Glow",
//     description:
//       "A customized treatment combining laser and serums to restore radiance.",
//     beforeImg:
//       "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80",
//     afterImg:
//       "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80",
//     thumbnails: [
//       "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=300&q=80",
//       "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=300&q=80",
//       "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=300&q=80",
//     ],
//   },
//   {
//     id: 4,
//     category: "Cheeks",
//     title: "Cheek Enhancement",
//     description:
//       "Enhanced cheek contour and facial harmony using precise filler placement for a lifted, youthful result.",
//     beforeImg:
//       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
//     afterImg:
//       "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
//     thumbnails: [
//       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
//       "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80",
//       "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=300&q=80",
//     ],
//   },
//   {
//     id: 5,
//     category: "Hair",
//     title: "Hair Treatment",
//     description:
//       "A targeted hair restoration treatment designed to improve scalp vitality and support healthier-looking hair.",
//     beforeImg:
//       "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?auto=format&fit=crop&w=900&q=80",
//     afterImg:
//       "https://images.unsplash.com/photo-1523263685509-57c1d050d19b?auto=format&fit=crop&w=900&q=80",
//     thumbnails: [
//       "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?auto=format&fit=crop&w=300&q=80",
//       "https://images.unsplash.com/photo-1523263685509-57c1d050d19b?auto=format&fit=crop&w=300&q=80",
//       "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=300&q=80",
//     ],
//   },
//   {
//     id: 6,
//     category: "Eyebrow",
//     title: "Eyebrow Enhancement",
//     description:
//       "Defined and balanced eyebrow aesthetics to improve facial expression and create a softer, more polished look.",
//     beforeImg:
//       "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=900&q=80",
//     afterImg:
//       "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?auto=format&fit=crop&w=900&q=80",
//     thumbnails: [
//       "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=300&q=80",
//       "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?auto=format&fit=crop&w=300&q=80",
//       "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=300&q=80",
//     ],
//   },
// ];

// const CATEGORIES = ["All", "Nose", "Lips", "Skin", "Cheeks", "Hair", "Eyebrow"];

// export function PlaceholderImg({
//   src = "",
//   label = "",
//   alt = "",
//   className = "",
//   style = {},
// }) {
//   const hasImage = Boolean(src);

//   return (
//     <div
//       style={style}
//       className={`relative flex items-center justify-center overflow-hidden border border-primary/5 bg-[#fdf2f0] text-[10px] font-bold uppercase tracking-widest text-primary/30 ${className}`}
//     >
//       {hasImage ? (
//         <>
//           <Image
//             src={src}
//             alt={alt || label || "Before after image"}
//             fill
//             className="object-cover"
//             sizes="(max-width: 768px) 100vw, 900px"
//           />

//           {label && (
//             <span className="absolute left-4 top-4 z-20 rounded-full bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[2px] text-primary backdrop-blur">
//               {label}
//             </span>
//           )}
//         </>
//       ) : (
//         <span>{label}</span>
//       )}
//     </div>
//   );
// }

// function CircularGalleryCaseCard({ item, index, onClick }) {
//   const heightClass =
//     index % 3 === 0
//       ? "h-[420px] md:h-[500px]"
//       : index % 3 === 1
//       ? "h-[360px] md:h-[440px]"
//       : "h-[390px] md:h-[470px]";

//   return (
//     <motion.button
//       type="button"
//       onClick={onClick}
//       whileTap={{ scale: 0.98 }}
//       className="group/card block w-full text-left"
//     >
//       <div className="relative rounded-[2.4rem] bg-[#fff9f7] p-2 shadow-[0_20px_60px_rgba(70,40,45,0.10)] transition-all duration-700 group-[.swiper-slide-active]:shadow-[0_35px_100px_rgba(70,40,45,0.22)]">
//         <div
//           className={`relative overflow-hidden rounded-[2rem] bg-[#fdf2f0] ${heightClass}`}
//         >
//           <Image
//             src={item.beforeImg}
//             alt={`${item.title} before`}
//             fill
//             className="object-cover transition-all duration-700 group-hover/card:scale-110"
//             sizes="(max-width: 768px) 90vw, 440px"
//           />

//           <Image
//             src={item.afterImg}
//             alt={`${item.title} after`}
//             fill
//             className="object-cover opacity-0 transition-all duration-700 group-hover/card:scale-110 group-hover/card:opacity-100"
//             sizes="(max-width: 768px) 90vw, 440px"
//           />

//           <div className="pointer-events-none absolute inset-0 translate-x-[-130%] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover/card:translate-x-[130%]" />

//           <div className="absolute inset-0 bg-gradient-to-t from-[#2d2020]/85 via-[#2d2020]/25 to-transparent" />

//           <Badge className="absolute left-5 top-5 border-none bg-white/90 px-4 py-1.5 text-[9px] uppercase tracking-[2px] text-primary shadow-sm backdrop-blur-md">
//             {item.category}
//           </Badge>

//           <div className="absolute right-5 top-5 overflow-hidden rounded-full bg-white/90 p-1 text-[9px] font-bold uppercase tracking-[1.5px] text-primary shadow-sm backdrop-blur-md">
//             <div className="relative h-7 w-[90px]">
//               <span className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover/card:-translate-y-full group-hover/card:opacity-0">
//                 Before
//               </span>

//               <span className="absolute inset-0 flex translate-y-full items-center justify-center opacity-0 transition-all duration-500 group-hover/card:translate-y-0 group-hover/card:opacity-100">
//                 After
//               </span>
//             </div>
//           </div>

//           <div className="absolute bottom-5 right-5 flex h-11 w-11 translate-y-4 items-center justify-center rounded-full bg-white text-primary opacity-0 shadow-xl transition-all duration-500 group-hover/card:translate-y-0 group-hover/card:opacity-100">
//             <ArrowUpRight size={18} />
//           </div>

//           <div className="absolute inset-x-0 bottom-0 p-5">
//             <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[2px] text-white/80">
//               <Sparkles size={13} />
//               <span>View Transformation</span>
//             </div>

//             <h4 className="font-main text-2xl font-normal leading-tight text-white md:text-3xl">
//               {item.title}
//             </h4>

//             <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-white/75">
//               {item.description}
//             </p>

//             <div className="mt-5 flex items-center justify-between border-t border-white/20 pt-4">
//               <span className="text-[10px] font-bold uppercase tracking-[2px] text-white/60">
//                 Before / After
//               </span>

//               <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[2px] text-primary transition-all duration-300 group-hover/card:bg-primary group-hover/card:text-white">
//                 Open Case
//                 <ArrowUpRight size={14} />
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.button>
//   );
// }

// function CircularCasesGallery({ filtered, allCases, setActiveCase }) {
//   const swiperRef = useRef(null);

//   const canLoop = filtered.length > 3;
//   const startIndex = Math.floor(filtered.length / 2);
//   const swiperKey = filtered.map((item) => item.id).join("-");

//   const openCase = (item) => {
//     const swiper = swiperRef.current;

//     if (swiper && swiper.allowClick === false) return;

//     const originalIndex = allCases.findIndex((caseItem) => caseItem.id === item.id);

//     setActiveCase(originalIndex);

//     document.getElementById("featured-before-after")?.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   };

//   const goToSlide = (direction) => {
//     const swiper = swiperRef.current;

//     if (!swiper || swiper.destroyed || swiper.animating || filtered.length <= 1) {
//       return;
//     }

//     const total = filtered.length;
//     const current = swiper.realIndex ?? swiper.activeIndex;

//     const nextIndex =
//       direction === "next"
//         ? (current + 1) % total
//         : (current - 1 + total) % total;

//     swiper.autoplay?.stop();

//     if (canLoop) {
//       swiper.slideToLoop(nextIndex, 800, true);
//     } else {
//       swiper.slideTo(nextIndex, 800, true);
//     }

//     setTimeout(() => {
//       if (!swiper.destroyed) {
//         swiper.updateSlidesClasses();
//         swiper.autoplay?.start();
//       }
//     }, 850);
//   };

//   if (!filtered.length) {
//     return (
//       <motion.div
//         initial={{ opacity: 0, y: 16 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="py-20 text-center text-[#a08080]"
//       >
//         <p className="font-main text-3xl font-light text-primary">
//           No cases found
//         </p>
//         <p className="mt-2 text-sm">Try selecting another category.</p>
//       </motion.div>
//     );
//   }

//   return (
//     <div className="relative mt-4">
//       <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-30 hidden items-center justify-between md:flex">
//         <button
//           type="button"
//           onClick={() => goToSlide("prev")}
//           className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary shadow-[0_16px_40px_rgba(70,40,45,0.16)] transition-all duration-300 hover:-translate-x-1 hover:bg-primary hover:text-white"
//           aria-label="Previous case"
//         >
//           <ArrowUpRight className="rotate-[225deg]" size={18} />
//         </button>

//         <button
//           type="button"
//           onClick={() => goToSlide("next")}
//           className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary shadow-[0_16px_40px_rgba(70,40,45,0.16)] transition-all duration-300 hover:translate-x-1 hover:bg-primary hover:text-white"
//           aria-label="Next case"
//         >
//           <ArrowUpRight className="rotate-45" size={18} />
//         </button>
//       </div>

//       <Swiper
//         key={swiperKey}
//         dir="ltr"
//         modules={[EffectCoverflow, Autoplay]}
//         effect="coverflow"
//         centeredSlides={true}
//         loop={canLoop}
//         initialSlide={startIndex}
//         loopAdditionalSlides={filtered.length}
//         slidesPerView="auto"
//         spaceBetween={22}
//         speed={850}
//         grabCursor={true}
//         autoplay={
//           filtered.length > 1
//             ? {
//                 delay: 3600,
//                 disableOnInteraction: false,
//               }
//             : false
//         }
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 180,
//           modifier: 1.25,
//           slideShadows: false,
//         }}
//         onSwiper={(swiper) => {
//           swiperRef.current = swiper;

//           requestAnimationFrame(() => {
//             if (!swiper.destroyed) {
//               swiper.update();

//               if (canLoop) {
//                 swiper.slideToLoop(startIndex, 0, false);
//               } else {
//                 swiper.slideTo(startIndex, 0, false);
//               }

//               swiper.updateSlidesClasses();
//             }
//           });
//         }}
//         onBeforeDestroy={() => {
//           swiperRef.current = null;
//         }}
//         breakpoints={{
//           0: {
//             spaceBetween: 16,
//             coverflowEffect: {
//               rotate: 0,
//               stretch: 0,
//               depth: 90,
//               modifier: 1,
//               slideShadows: false,
//             },
//           },
//           768: {
//             spaceBetween: 24,
//             coverflowEffect: {
//               rotate: 0,
//               stretch: 0,
//               depth: 150,
//               modifier: 1.15,
//               slideShadows: false,
//             },
//           },
//           1200: {
//             spaceBetween: 34,
//             coverflowEffect: {
//               rotate: 0,
//               stretch: 0,
//               depth: 190,
//               modifier: 1.25,
//               slideShadows: false,
//             },
//           },
//         }}
//         className="!overflow-visible !py-10"
//       >
//         {filtered.map((item, index) => (
//           <SwiperSlide
//             key={item.id}
//             className="group !w-[285px] opacity-45 blur-[0.5px] transition-all duration-700 sm:!w-[340px] md:!w-[390px] lg:!w-[430px] [&.swiper-slide-active]:z-20 [&.swiper-slide-active]:opacity-100 [&.swiper-slide-active]:blur-0"
//           >
//             <div className="scale-[0.84] transition-all duration-700 group-[.swiper-slide-active]:scale-100">
//               <CircularGalleryCaseCard
//                 item={item}
//                 index={index}
//                 onClick={() => openCase(item)}
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <div className="mt-2 flex justify-center gap-3 md:hidden">
//         <button
//           type="button"
//           onClick={() => goToSlide("prev")}
//           className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-lg"
//           aria-label="Previous case"
//         >
//           <ArrowUpRight className="rotate-[225deg]" size={17} />
//         </button>

//         <button
//           type="button"
//           onClick={() => goToSlide("next")}
//           className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-lg"
//           aria-label="Next case"
//         >
//           <ArrowUpRight className="rotate-45" size={17} />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default function BeforeAfterPage() {
//   const [activeCase, setActiveCase] = useState(0);
//   const [filterCat, setFilterCat] = useState("All");

//   const filtered =
//     filterCat === "All"
//       ? CASES
//       : CASES.filter((caseItem) => caseItem.category === filterCat);

//   return (
//     <div className="min-h-screen overflow-x-hidden bg-[#fffcfb] font-sans">
//       <BeforeAfterBanner />

//       <div id="featured-before-after">
//         <BeforeAfterFeatureSection
//           activeCase={activeCase}
//           CASES={CASES}
//           setActiveCase={setActiveCase}
//         />
//       </div>

//       <section className="relative overflow-hidden border-t border-primary/5 bg-white py-8">
//         <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
//         <div className="pointer-events-none absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-[#e8a4a8]/10 blur-3xl" />

//         <div className="relative z-10 mx-auto max-w-7xl px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: false, amount: 0.3 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             className="mb-4 flex flex-col items-center justify-between gap-2 text-center"
//           >
//             <p className="text-base font-bold uppercase tracking-[4px] text-secondary">
//               Real Results
//             </p>

//             <h3 className="font-main text-4xl font-light text-primary md:text-5xl">
//               Explore All Cases
//             </h3>

//             <p className="max-w-2xl text-sm leading-relaxed text-text md:text-base">
//               Browse transformations and hover each card to preview the after
//               result. Click any case to open it in the featured comparison.
//             </p>

//             <div className="mt-4 flex max-w-full flex-wrap justify-center gap-2 rounded-[2rem] border border-primary/5 bg-[#fff9f7] p-1.5">
//               {CATEGORIES.map((cat) => (
//                 <button
//                   key={cat}
//                   type="button"
//                   onClick={() => setFilterCat(cat)}
//                   className={`rounded-full px-5 py-2 text-[14px] font-bold uppercase tracking-widest transition-all md:px-6 ${
//                     filterCat === cat
//                       ? "bg-primary text-white shadow-md"
//                       : "text-[#a08080] hover:bg-white hover:text-primary"
//                   }`}
//                 >
//                   {cat}
//                 </button>
//               ))}
//             </div>
//           </motion.div>

//           <CircularCasesGallery
//             filtered={filtered}
//             allCases={CASES}
//             setActiveCase={setActiveCase}
//           />
//         </div>
//       </section>
//     </div>
//   );
// }

"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import BeforeAfterBanner from "../../../components/pages/BeforeAfter/BeforeAfterBanner";
import BeforeAfterFeatureSection from "../../../components/pages/BeforeAfter/BeforeAfterFeatureSection";

/**
 * IMPORTANT:
 * Change this path based on where you placed React Bits CircularGallery.
 *
 * Example paths:
 * "@/components/CircularGallery"
 * "@/components/react-bits/CircularGallery"
 * "../../../components/CircularGallery/CircularGallery"
 */
const CircularGallery = dynamic(
  () => import("@/components/CircularGallery"),
  {
    ssr: false,
  }
);

const CASES = [
  {
    id: 1,
    category: "Nose",
    title: "Non-Surgical Nose Reshaping",
    description:
      "Achieved a balanced and natural facial profile with minimal downtime. Using advanced fillers to reshape without surgery.",
    beforeImg: "/SHAHD-IMAGE/homebefore/360192f749c1a01a3084ceeb2712b040de2415a4.webp",
    afterImg: "/SHAHD-IMAGE/homebefore/0402d70a66c38d6594b9a42587cf70e03e81233f.webp",
  },
  {
    id: 2,
    category: "Lips",
    title: "Natural Lip Enhancement",
    description:
      "Natural-looking volume and definition for a more youthful smile. Our specialized technique ensures symmetrical and plump lips.",
    beforeImg: "/SHAHD-IMAGE/homebefore/51d5b6c661c3da2fa95e8b494d25ea05fa35334b.webp",
    afterImg: "/SHAHD-IMAGE/homebefore/mainImg.webp",
  },
  {
    id: 3,
    category: "Skin",
    title: "Facial Contouring",
    description: "Defined cheekbones and jawline for a sculpted appearance. Enhance your natural facial structure with professional care.",
    beforeImg: "/SHAHD-IMAGE/homebefore/mainImg.webp",
    afterImg: "/SHAHD-IMAGE/homebefore/51d5b6c661c3da2fa95e8b494d25ea05fa35334b.webp",
  },
  {
    id: 4,
    category: "Hair",
    title: "Hair Restoration",
    description: "Advanced hair therapy for natural and dense hair growth. Regain your confidence with our high-success treatments.",
    beforeImg: "/SHAHD-IMAGE/homebefore/360192f749c1a01a3084ceeb2712b040de2415a4.webp",
    afterImg: "/SHAHD-IMAGE/homebefore/mainImg.webp",
  },
  {
    id: 5,
    category: "Skin",
    title: "Botox Treatment",
    description: "Smooth out fine lines and wrinkles for a refreshed look. Fast and effective results with minimal downtime.",
    beforeImg: "/SHAHD-IMAGE/homebefore/mainImg.webp",
    afterImg: "/SHAHD-IMAGE/homebefore/0402d70a66c38d6594b9a42587cf70e03e81233f.webp",
  },
  {
    id: 6,
    category: "Skin",
    title: "Laser Therapy",
    description: "Precise laser treatments for various skin and hair concerns. State-of-the-art technology for optimal patient comfort.",
    beforeImg: "/SHAHD-IMAGE/homebefore/51d5b6c661c3da2fa95e8b494d25ea05fa35334b.webp",
    afterImg: "/SHAHD-IMAGE/homebefore/360192f749c1a01a3084ceeb2712b040de2415a4.webp",
  },
];

const CATEGORIES = [
  "All",
  "Nose",
  "Lips",
  "Skin",
  "Cheeks",
  "Hair",
  "Eyebrow",
];

export function PlaceholderImg({
  src = "",
  label = "",
  alt = "",
  className = "",
  style = {},
}) {
  const hasImage = Boolean(src);

  return (
    <div
      style={style}
      className={`relative flex items-center justify-center overflow-hidden border border-primary/5 bg-[#fdf2f0] text-[10px] font-bold uppercase tracking-widest text-primary/30 ${className}`}
    >
      {hasImage ? (
        <>
          <Image
            src={src}
            alt={alt || label || "Before after image"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 900px"
          />

          {label && (
            <span className="absolute left-4 top-4 z-20 rounded-full bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[2px] text-primary backdrop-blur">
              {label}
            </span>
          )}
        </>
      ) : (
        <span>{label}</span>
      )}
    </div>
  );
}

function CircularGallerySection({ filtered, setActiveCase }) {
  const { t } = useTranslation();
  const galleryKey = filtered.map((item) => item.id).join("-");

  const galleryItems = useMemo(() => {
    return filtered.map((item) => ({
      image: item.afterImg || item.beforeImg,
      text: t(item.title),
    }));
  }, [filtered]);

  if (!filtered.length) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-20 text-center text-[#a08080]"
      >
        <p className="font-main text-3xl font-light text-primary">
          {t('No cases found')}
        </p>
        <p className="mt-2 text-sm">{t('Try selecting another category.')}</p>
      </motion.div>
    );
  }

  return (
    <div className="relative  w-fullbg-transparent! -mt-9!">
      <div className="relative w-full h-[430px] overflow-hidden rounded-[2.5rem]   bg-transparent sm:h-[520px] lg:h-[500px]">
        <div className="pointer-events-none absolute inset-0 z-10" />

        <CircularGallery
          key={galleryKey}
          items={galleryItems}
          bend={1}
          textColor="#ddb2b5"
          borderRadius={0.05}
          scrollSpeed={2}

          scrollEase={0.05}
        />
      </div>

      {/* <div className="mx-auto mt-8 grid max-w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => {
          const originalIndex = CASES.findIndex(
            (caseItem) => caseItem.id === item.id
          );

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setActiveCase(originalIndex);

                document
                  .getElementById("featured-before-after")
                  ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
              }}
              className="group rounded-[1.4rem] border  p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-white hover:shadow-[0_18px_50px_rgba(70,40,45,0.10)]"
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <Badge className="border-none bg-primary/10 px-3 py-1 text-[9px] uppercase tracking-[2px] text-primary shadow-none">
                  {item.category}
                </Badge>

                <span className="text-[10px] font-bold uppercase tracking-[2px] text-primary/50 transition-colors group-hover:text-primary">
                  Open Case
                </span>
              </div>

              <h4 className="font-main text-xl font-normal leading-tight text-primary">
                {item.title}
              </h4>

              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#a08080]">
                {item.description}
              </p>
            </button>
          );
        })}
      </div> */}
    </div>
  );
}

export default function BeforeAfterPage() {
  const [activeCase, setActiveCase] = useState(0);
  const [filterCat, setFilterCat] = useState("All");
  const { t } = useTranslation();

  const filtered =
    filterCat === "All"
      ? CASES
      : CASES.filter((caseItem) => caseItem.category === filterCat);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fffcfb] font-sans">
      <BeforeAfterBanner />

      <div id="featured-before-after">
        <BeforeAfterFeatureSection
          activeCase={activeCase}
          CASES={CASES}
          setActiveCase={setActiveCase}
        />
      </div>

      <section className="relative w-full overflow-hidden border-t border-primary/5  py-10">
        <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-[#e8a4a8]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-full px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-4 flex flex-col items-center justify-between gap-2 text-center"
          >
            <p className="text-base font-bold uppercase tracking-[4px] text-secondary">
              {t('Real Results')}
            </p>

            <h3 className="font-main text-4xl font-light text-primary md:text-5xl">
              {t('Explore All Cases')}
            </h3>

            <p className="max-w-2xl text-sm leading-relaxed text-text md:text-base">
              {t('Browse transformations in a smooth circular gallery. Select a case below to open it in the featured comparison.')}
            </p>

            <div className="mt-4 flex max-w-full flex-wrap justify-center gap-2 rounded-[2rem] border border-primary/5 bg-[#fff9f7] p-1.5">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilterCat(cat)}
                  className={`rounded-full px-5 py-2 text-[14px] font-bold uppercase tracking-widest transition-all md:px-6 ${
                    filterCat === cat
                      ? "bg-primary text-white shadow-md"
                      : "text-[#a08080] hover:bg-white hover:text-primary"
                  }`}
                >
                  {t(cat)}
                </button>
              ))}
            </div>
          </motion.div>

          <CircularGallerySection
            filtered={filtered}
            setActiveCase={setActiveCase}
          />
        </div>
      </section>
    </div>
  );
}