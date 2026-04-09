// "use client";
// import { AnimatePresence, motion } from 'framer-motion'
// import Image from 'next/image';
// import React from 'react'

// export default function HomeBeforeLeftContent({ activeIndex, setActiveIndex, activeTreatment, treatments }) {
//   const handleThumbnailClick = (index) => {
//     setActiveIndex(index);
//   };


//   return (
//     <motion.div
//       initial={{ opacity: 0, x: -50 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: false }}
//       transition={{ duration: 0.8, delay: 0.2 }}
//       className="lg:col-span-4  flex flex-col gap-6"
//     >
//       {/* Treatment Info */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={activeIndex}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: false }}
//           exit={{ opacity: 0, y: -20 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h3 className="text-primary text-3xl lg:text-5xl font-normal leading-tight mb-4">
//             {activeTreatment.title}
//           </h3>
//           <p className="text-secondary text-lg font-light font-poppins leading-relaxed max-w-md">
//             {activeTreatment.description}
//           </p>
//         </motion.div>
//       </AnimatePresence>

//       {/* Thumbnail Strip */}
//       <div className="flex gap-3 mt-4">
//         {treatments.map((treatment, index) => (
//           <motion.button
//             key={treatment.id}
//             onClick={() => handleThumbnailClick(index)}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="relative w-full h-full overflow-hidden rounded-full transition-all duration-300"
//           >
//             <Image
//               src={treatment.thumbnail}
//               alt={treatment.title}
//               width={100}
//               height={520}
//               loading='lazy'
//               className={`w-20 h-72 lg:w-24 lg:h-103 object-cover rounded-full transition-all duration-300 
//                 ${index === activeIndex ? 'ring-4 ring-[#E8A4A8] ring-offset-2' : 'opacity-70'
//                 }
//                 `}
//             />
//           </motion.button>
//         ))}
//       </div>
//     </motion.div>
//   )
// }


"use client";
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image';

export default function HomeBeforeLeftContent({ activeIndex, setActiveIndex, activeTreatment, treatments }) {
  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };


  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="md:col-span-12 lg:col-span-4 flex flex-col gap-6 xl:max-h-[700px] xl:overflow-y-auto no-scrollbar xl:pr-4"
    >
      {/* Treatment Info */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <h3 className="text-primary text-3xl md:text-4xl lg:text-5xl font-normal leading-tight mb-4 uppercase">
            {activeTreatment.title}
          </h3>
          <p className="text-secondary text-base md:text-lg font-light font-poppins leading-relaxed max-w-2xl mx-auto md:mx-0">
            {activeTreatment.description}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Thumbnail Strip */}
      <div className="flex gap-4 my-4 overflow-x-auto no-scrollbar py-4 justify-center lg:justify-start">
        {treatments.map((treatment, index) => (
          <motion.button
            key={treatment.id}
            onClick={() => handleThumbnailClick(index)}
            className="relative shrink-0 transition-all duration-300"
          >
            <div className={`relative w-16  h-16 md:w-20 md:h-20 lg:w-24 lg:h-80 overflow-hidden rounded-full transition-all duration-300 
                 ${index === activeIndex ? "ring-3  ring-[#E8A4A8] ring-offset-2 scale-105" : "opacity-70 hover:scale-105"}`}>
              <Image
                src={treatment.thumbnail}
                alt={treatment.title}
                fill
                className="object-cover"
              />
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}
