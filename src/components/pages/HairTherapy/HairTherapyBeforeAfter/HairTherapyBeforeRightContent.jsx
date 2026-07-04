// "use client";
// import React, { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion';
// import Image from 'next/image';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// export default function HomeBeforeRightContentImages({ setActiveIndex, treatments, activeIndex, activeTreatment }) {
//   const [hoveredImage, setHoveredImage] = useState(null);

//   const handlePrev = () => {
//     setActiveIndex((prev) => (prev === 0 ? treatments.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setActiveIndex((prev) => (prev === treatments.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, x: 50 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: false }}
//       transition={{ duration: 0.8, delay: 0.4 }}
//       className="lg:col-span-8 bg-white rounded-3xl gap-4 relative"
//     >
//       {/* Curved Navigation Container */}
//       <div className="relative flex  gap-3 rounded-3xl!  items-center justify-center h-125 lg:h-146">
//         <motion.div
//           className="relative w-[50%] h-full rounded-tl-[50px]  rounded-3xl cursor-pointer group"
//           onMouseEnter={() => setHoveredImage('before')}
//           onMouseLeave={() => setHoveredImage(null)}
//           // whileHover={{ scale: 1.01 }}
//           transition={{ duration: 0.3 }}
//         >
//           {/* Before Image */}
//           <div className=' absolute z-50 -left-7 w-fit h-fit transform-x-10!  -top-3'>
//             <img className=' w-55 h-39 ' src='SHAHD-IMAGE/homebefore/output-onlinewebptools (1).webp' />

//             {/* Curved Navigation Arrows - Center */}
//             <div className="absolute left-1/2 top-8 -translate-x-1/2 z-20 flex items-center gap-1">
//               {/* Left Arrow with Curve */}
//               <motion.button
//                 whileHover={{ scale: 1.1, x: -3 }}
//                 whileTap={{ scale: 0.9 }}
//                 onClick={handlePrev}
//                 className="relative bg-secondary! text-white rounded-full! w-14 h-14 flex items-center justify-center"
//               >
//                 <ChevronRight size={25} />
//               </motion.button>

//               {/* Right Arrow with Curve */}
//               <motion.button
//                 whileHover={{ scale: 1.1, x: 3 }}
//                 whileTap={{ scale: 0.9 }}
//                 onClick={handleNext}
//                 className="relative bg-white! rounded-full text-secondary w-14 h-14 flex items-center justify-center"
//               >
//                 <ChevronLeft size={25} />
//               </motion.button>
//             </div>
//           </div>

//           <AnimatePresence mode="wait">
//             <motion.div
//               key={`before-${activeIndex}`}
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: false }}
//               exit={{ opacity: 0, scale: 0.95 }}
//               transition={{ duration: 0.5 }}
//               className="absolute inset-0"
//             >
//               <Image
//                 loading='lazy'
//                 src={activeTreatment.before_img}
//                 alt={`${activeTreatment.title} - Before`}
//                 fill
//                 className="object-cover rounded-bl-3xl object-center"
//                 sizes="50vw"
//               />
//             </motion.div>
//           </AnimatePresence>

//           {/* Hover Overlay */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: hoveredImage === 'before' ? 1 : 0 }}
//             viewport={{ once: false }}
//             className="absolute inset-0 rounded-3xl bg-black/10 transition-opacity"
//           />
//         </motion.div>



//         {/* After Image */}
//         <motion.div
//           className="relative w-[50%] h-full overflow-hidden rounded-r-3xl cursor-pointer group"
//           onMouseEnter={() => setHoveredImage('after')}
//           onMouseLeave={() => setHoveredImage(null)}
//           whileHover={{ scale: 1.01 }}
//           transition={{ duration: 0.3 }}
//         >
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={`after-${activeIndex}`}
//               initial={{ opacity: 0, scale: 1.05 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: false }}
//               exit={{ opacity: 0, scale: 0.95 }}
//               transition={{ duration: 0.5 }}
//               className="absolute inset-0"
//             >
//               <Image
//                 loading='lazy'
//                 src={activeTreatment.after_img}
//                 alt={`${activeTreatment.title} - After`}
//                 fill
//                 className="object-cover object-center"
//                 sizes="50vw"
//               />
//             </motion.div>
//           </AnimatePresence>



//           {/* Hover Overlay */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: hoveredImage === 'after' ? 1 : 0 }}
//             viewport={{ once: false }}
//             className="absolute rounded-3xl inset-0 bg-black/10 transition-opacity"
//           />
//         </motion.div>
//       </div>
//     </motion.div>
//   )
// }


"use client";
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function HairTherapyBeforeRightContentImages({ setActiveIndex, treatments, activeIndex, activeTreatment }) {
  const [hoveredImage, setHoveredImage] = useState(null); 
  const {i18n} = useTranslation();

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? treatments.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === treatments.length - 1 ? 0 : prev + 1));
  };

  const isSingleImage = activeTreatment?.before_img === activeTreatment?.after_img;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="md:col-span-12 lg:col-span-7 bg-white rounded-3xl relative overflow-hidden"
    >
      {/* Curved Navigation Container */}
      <div className="relative overflow-hidden flex flex-col lg:flex-row items-center justify-center min-h-[600px] lg:h-146">
        
        {/* Navigation Arrows - Moved to be at the top center for mobile/tablet */}
        <div className="absolute left-3 translate-x-0 top-3 z-40 flex items-center gap-1.5 md:gap-3">
          {/* Prev Arrow */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            className="relative bg-secondary text-white rounded-full w-14 h-14 flex items-center justify-center shadow-xl border border-white/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          {/* Next Arrow */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="relative bg-white rounded-full text-secondary w-14 h-14 flex items-center justify-center shadow-xl border border-secondary/10"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {isSingleImage ? (
          <div className="relative w-full h-[500px] lg:h-full cursor-pointer">
            <AnimatePresence mode="wait">
              <motion.div
                key={`single-${activeIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {activeTreatment?.before_img && (
                  <Image
                    loading="lazy"
                    src={activeTreatment.before_img}
                    alt={activeTreatment.title || "Transformation Result"}
                    fill
                    className="object-contain p-6"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          <>
            {/* Before Image */}
            <motion.div
              className="relative w-full lg:w-[50%] h-[300px] sm:h-[400px] lg:h-full cursor-pointer group"
              onMouseEnter={() => setHoveredImage('before')}
              onMouseLeave={() => setHoveredImage(null)}
              transition={{ duration: 0.3 }}
            >
              {/* Before Label */}
              {i18n?.language != "ar" && <div className="absolute z-30 -left-7 w-55 h-auto -top-3 pointer-events-none">
                <Image 
                  width={220}
                  height={80}
                  className="w-full h-auto" 
                  src="/SHAHD-IMAGE/homebefore/output-onlinepngtools (1).webp" 
                  alt="Before label" 
                />
              </div>}

              <AnimatePresence mode="wait">
                <motion.div
                  key={`before-${activeIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    loading="lazy"
                    src={activeTreatment.before_img}
                    alt={`${activeTreatment.title} - Before`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 50vw, 40vw"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Hover Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredImage === 'before' ? 1 : 0 }}
                className="absolute inset-0 bg-black/10 transition-opacity pointer-events-none"
              />
            </motion.div>

            {/* After Image */}
            <motion.div
              className="relative w-full lg:w-[50%] h-[300px] sm:h-[400px] lg:h-full cursor-pointer group"
              onMouseEnter={() => setHoveredImage('after')}
              onMouseLeave={() => setHoveredImage(null)}
              transition={{ duration: 0.3 }}
            >
              {/* Optional: After Label for clarity on mobile */}
              <div className="absolute z-30 -right-2 sm:-right-4 md:hidden w-20 h-auto -top-1 pointer-events-none opacity-80">
                 <div className="bg-secondary/80 text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">After</div>
              </div>

              {i18n?.language == "ar" && <div className="absolute z-30 -left-7 w-55 h-auto -top-3 pointer-events-none">
                <Image 
                  width={220}
                  height={80}
                  className="w-full h-auto" 
                  src="/SHAHD-IMAGE/homebefore/output-onlinepngtools (1).webp" 
                  alt="Before label" 
                />
              </div>}

              <AnimatePresence mode="wait">
                <motion.div
                  key={`after-${activeIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    loading="lazy"
                    src={activeTreatment.after_img}
                    alt={`${activeTreatment.title} - After`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 50vw, 40vw"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Hover Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredImage === 'after' ? 1 : 0 }}
                className="absolute inset-0 bg-black/10 transition-opacity pointer-events-none"
              />
            </motion.div>
          </>
        )}
      </div>
    </motion.div>
  );
}
