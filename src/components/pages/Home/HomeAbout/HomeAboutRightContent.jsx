// "use client";
// import { motion, AnimatePresence } from 'framer-motion';
// import React, { useEffect, useState, useCallback } from 'react'; // Added useCallback
// import { Button } from '../../../ui/button';
// import useEmblaCarousel from 'embla-carousel-react';
// import Image from 'next/image';
// import Autoplay from 'embla-carousel-autoplay';
// import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'; // Added Chevrons
// import { usePathname, useRouter } from 'next/navigation';
// import { useTranslation } from 'react-i18next';

// export default function HomeAboutRightContent({ activeIndex, CARDS, setActiveIndex, setDirection }) {
//   const { t, i18n } = useTranslation();
//   const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';

//   const [emblaRef, emblaApi] = useEmblaCarousel({
//     loop: true,
//     align: 'start',
//     skipSnaps: false,
//     dragFree: false,
//     containScroll: false,
//     direction: dir,
//     slidesToScroll: 1
//   }, [Autoplay()]);

//   const [hoveredId, setHoveredId] = useState(null);
//   const router = useRouter();
//   const pathname = usePathname();

//   // Navigation handlers
//   const scrollPrev = useCallback(() => {
//     if (emblaApi) emblaApi.scrollPrev();
//   }, [emblaApi]);

//   const scrollNext = useCallback(() => {
//     if (emblaApi) emblaApi.scrollNext();
//   }, [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;

//     emblaApi.plugins().autoplay?.play();

//     const onSelect = () => {
//       const selected = emblaApi.selectedScrollSnap();
//       setActiveIndex(selected);
//     };

//     emblaApi.on('select', onSelect);
//     return () => emblaApi.off('select', onSelect);
//   }, [emblaApi, setActiveIndex]);

//   const handleCardClick = (index) => {
//     const newDirection = index > activeIndex ? 1 : -1;
//     setDirection(newDirection);
//     setActiveIndex(index);

//     if (emblaApi) {
//       emblaApi.scrollTo(index);
//     }
//   };

//   return (
//     <div className="flex flex-col h-full pt-2">
//       {/* Header Section */}
//       <div className="mb-3 max-w-5xl mx-4">
//         <motion.h3
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: false }}
//           className="text-secondary text-2xl  font-bold font-poppins tracking-wide uppercase"
//         >
//           {t("About Shahd Awad")}
//         </motion.h3>

//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: false }}
//           transition={{ delay: 0.1 }}
//           className="text-primary text-3xl  font-normal max-w-xl leading-tight mb-2"
//         >
//           {t("Home About Title")}
//         </motion.h2>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: false }}
//           transition={{ delay: 0.2 }}
//           className="flex flex-col md:flex-row md:items-end gap-6 justify-between"
//         >
//           <p className="text-text font-poppins text-base leading-7 max-w-xl">
//             {t("Home About Desc")}
//           </p>
//           {(pathname !== '/about-us/' && pathname !== "/about/us") && (
//             <Button
//               onClick={() => router.push('/about-us')}
//               variant="secondary"
//               className="whitespace-nowrap p-[22px_18px] rounded-[100px] text-[20px] text-white font-normal"
//             >
//               {t("Learn More")}
//             </Button>
//           )}
//         </motion.div>
//       </div>

//       {/* Navigation Arrows */}
//       <div className="flex  justify-end  gap-3 mb-2 pr-4">
//         <button
//           onClick={scrollPrev}
//           className="w-12 h-12 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
//           aria-label="Previous slide"
//         >
//           <ChevronLeft size={24} />
//         </button>
//         <button
//           onClick={scrollNext}
//           className="w-12 h-12 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
//           aria-label="Next slide"
//         >
//           <ChevronRight size={24} />
//         </button>
//       </div>
//       {/* Carousel Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: false }}
//         transition={{ delay: 0.3, duration: 0.6 }}
//         className="mt-auto w-full overflow-hidden relative group/carousel"
//       >
//         {/* Embla Viewport */}
//         <div ref={emblaRef}>
//           <div className="flex">
//             {CARDS.map((card, index) => {
//               const isHovered = hoveredId === card.id;
//               return (
//                 <div key={card.id} className="flex-[0_0_50%] md:flex-[0_0_30%] pl-4 min-w-0">
//                   <motion.div
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     onMouseEnter={() => setHoveredId(card.id)}
//                     onMouseLeave={() => setHoveredId(null)}
//                     onClick={() => handleCardClick(index)}
//                     className="relative aspect-3/4 rounded-[24px] overflow-hidden cursor-pointer group"
//                   >
//                     <Image
//                       src={card.image}
//                       alt={card.label}
//                       fill
//                       className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                     />

//                     <div className={`absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 ${activeIndex === index ? 'opacity-100' : 'opacity-70 group-hover:opacity-90'
//                       }`} />

//                     <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white">
//                       <AnimatePresence mode="wait">
//                         {!isHovered ? (
//                           <motion.div
//                             key="default"
//                             initial={{ opacity: 0, y: 10 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: -10 }}
//                           >
//                             <h4 className={`text-lg xl:text-xl font-normal uppercase tracking-wider mb-1 transition-all duration-300 ${activeIndex === index ? 'text-[#D29B9F]' : ''
//                               }`}>
//                               {card.label}
//                             </h4>
//                             <p className="text-xs font-light uppercase font-poppins text-[#FFF9F7] line-clamp-2">
//                               {card.subtitle}
//                             </p>
//                           </motion.div>
//                         ) : (
//                           <motion.div
//                             key="hover"
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: 10 }}
//                             className="space-y-2"
//                           >
//                             <motion.h4 className="text-sm font-bold uppercase text-[#D29B9F]">
//                               {card.label}
//                             </motion.h4>
//                             <motion.p className="text-sm md:text-md font-poppins font-medium leading-snug line-clamp-3">
//                               {card.desc}
//                             </motion.p>
//                             <motion.div className="pt-2 flex justify-center">
//                               <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
//                                 <ArrowRight size={20} color="white" />
//                               </div>
//                             </motion.div>
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </div>
//                   </motion.div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//       </motion.div>
//     </div>
//   );
// }

"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState, useCallback } from "react";
import { Button } from "../../../ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function HomeAboutRightContent({
  activeIndex,
  CARDS,
  currentCard,
  setActiveIndex,
  setDirection,
}) {
  const { t, i18n } = useTranslation();
  const dir = i18n.language === "ar" ? "rtl" : "ltr";
  const isRtl = dir === "rtl";

  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      dragFree: false,
      containScroll: false,
      direction: dir,
      slidesToScroll: 1,
    },
    [autoplayPlugin.current],
  );

  const [hoveredId, setHoveredId] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  const repeatedCards = CARDS.length > 0 && CARDS.length < 6
    ? [...CARDS, ...CARDS, ...CARDS]
    : CARDS;

  // Navigation handlers
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    // Force play and keep looping after interaction
    autoplayPlugin.current.play();

    const onSelect = () => {
      const selected = emblaApi.selectedScrollSnap();
      setActiveIndex(CARDS.length ? selected % CARDS.length : selected);
    };

    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, setActiveIndex, CARDS.length]);

  const handleCardClick = (index) => {
    const newDirection = index > activeIndex ? 1 : -1;
    setDirection(newDirection);
    setActiveIndex(CARDS.length ? index % CARDS.length : index);

    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  };

  return (
    <div className="flex flex-col h-full pt-2" dir={dir}>
      {/* Header Section */}
      <div className="mb-3 max-w-5xl mx-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <h3 className="text-secondary text-2xl font-bold font-poppins tracking-wide uppercase mb-1">
              {currentCard?.label}
            </h3>

            <h2 className="text-primary text-3xl font-normal max-w-xl leading-tight mb-2">
              {currentCard?.subtitle}
            </h2>

            <div className="flex flex-col md:flex-row md:items-end gap-6 justify-between">
              <div>
                <p className="text-text font-poppins text-base leading-7 max-w-xl">
                  {currentCard?.desc}
                </p>
              </div>
              {pathname !== "/about-us/" && pathname !== "/about/us" && (
                <Button
                  onClick={() => router.push("/about-us")}
                  variant="secondary"
                  className="whitespace-nowrap p-[22px_18px] rounded-[100px] text-base text-white font-normal"
                >
                  {t("Learn More")}
                </Button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows - Flips layout orientation depending on language */}
      <div className="flex justify-end gap-3 mb-2 mx-2 px-4">
        <button
          onClick={scrollPrev}
          className="w-11 h-11 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
          aria-label="Previous slide"
        >
          {isRtl ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
        <button
          onClick={scrollNext}
          className="w-11 h-11 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
          aria-label="Next slide"
        >
          {isRtl ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>

      {/* Carousel Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-auto w-full overflow-hidden relative group/carousel"
      >
        {/* Embla Viewport */}
        <div key={dir} ref={emblaRef} className="overflow-hidden">
          <div className="flex h-[300px]">
            {repeatedCards.map((card, index) => {
              const isHovered = hoveredId === card.id;
              const realIndex = CARDS.length ? index % CARDS.length : index;
              return (
                <div
                  key={`${card.id}-${index}`}
                  className="flex-[0_0_50%] md:flex-[0_0_30%] px-2 first:ps-4 min-w-0 h-full"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onMouseEnter={() => setHoveredId(card.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onClick={() => handleCardClick(index)}
                    className="relative h-full rounded-[24px] overflow-hidden cursor-pointer group"
                  >
                    <Image
                      src={card.image}
                      alt={card.label}
                      fill
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div
                      className={`absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 ${
                        activeIndex === realIndex
                          ? "opacity-100"
                          : "opacity-70 group-hover:opacity-90"
                      }`}
                    />

                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white text-start">
                      <AnimatePresence mode="wait">
                        {!isHovered ? (
                          <motion.div
                            key="default"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                          >
                            <h4
                              className={`text-lg xl:text-xl font-normal uppercase tracking-wider mb-1 transition-all duration-300 ${
                                activeIndex === realIndex ? "text-[#D29B9F]" : ""
                              }`}
                            >
                              {card.label}
                            </h4>
                            <p className="text-xs font-light uppercase font-poppins text-[#FFF9F7] line-clamp-2">
                              {card.subtitle}
                            </p>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="hover"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="space-y-2"
                          >
                            <motion.h4 className="text-sm font-bold uppercase text-[#D29B9F]">
                              {card.label}
                            </motion.h4>
                            <p className="text-sm md:text-md font-poppins font-medium leading-snug line-clamp-3">
                              {card.desc}
                            </p>
                            <motion.div className="pt-2 flex justify-center">
                              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                                {isRtl ? (
                                  <ArrowLeft size={20} color="white" />
                                ) : (
                                  <ArrowRight size={20} color="white" />
                                )}
                              </div>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
