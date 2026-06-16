// "use client";

// import { AnimatePresence, motion } from "framer-motion";
// import { useState } from "react";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { SlidersHorizontal } from "lucide-react";
// import { PlaceholderImg } from "../../../app/(pages)/before-after/page";

// const staggerContainer = {
//   visible: { transition: { staggerChildren: 0.1 } }
// };


// export default function BeforeAfterCard({ item, isActive }) {
//   const [sliderX, setSliderX] = useState(50);
//   const [dragging, setDragging] = useState(false);

//   const handleMove = (clientX, rect) => {
//     const x = ((clientX - rect.left) / rect.width) * 100;
//     setSliderX(Math.min(98, Math.max(2, x)));
//   };

//   return (
//     <AnimatePresence mode="wait">
//       {isActive && (
//         <motion.div
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: -20 }}
//           transition={{ duration: 0.5, ease: "circOut" }}
//           className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 items-center"
//         >
//           <div className="space-y-8">
//             <motion.div variants={staggerContainer} initial="hidden" animate="visible">
//               <Badge className="bg-primary/10 text-primary border-none text-[10px] tracking-[3px] uppercase mb-4 px-4 py-1">
//                 {item.category}
//               </Badge>
//               <h2 className="font-main text-4xl font-light text-primary leading-tight mb-4">
//                 {item.title}
//               </h2>
//               <p className="text-lg text-text leading-relaxed max-w-md">
//                 {item.description}
//               </p>
//             </motion.div>

//             <div className="flex gap-10 border-y border-primary/10 py-6">
//               {[
//                 { label: "Downtime", value: "Minimal" },
//                 { label: "Sessions", value: "1–2" },
//                 { label: "Result", value: "Natural" },
//               ].map((s) => (
//                 <div key={s.label}>
//                   <p className="text-sm font-serif text-primary mb-1">{s.value}</p>
//                   <p className="text-[10px] tracking-[1.5px] uppercase text-[#a08080]/60 font-bold">
//                     {s.label}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             <Button className="rounded-full bg-primary hover:opacity-90 text-white text-[11px] tracking-[2px] uppercase px-10 py-7 shadow-lg shadow-primary/20 transition-all">
//               Book a Consultation
//             </Button>
//           </div>

//           <div className="relative">
//             <div 
//               className="relative select-none overflow-hidden rounded-[2rem] cursor-col-resize h-[450px] md:h-[550px] shadow-2xl border border-white"
//               onMouseMove={(e) => dragging && handleMove(e.clientX, e.currentTarget.getBoundingClientRect())}
//               onMouseDown={() => setDragging(true)}
//               onMouseUp={() => setDragging(false)}
//               onMouseLeave={() => setDragging(false)}
//               onTouchMove={(e) => handleMove(e.touches[0].clientX, e.currentTarget.getBoundingClientRect())}
//             >
//               <PlaceholderImg label="After Result" className="absolute inset-0 w-full h-full" />
//               <motion.div 
//                 className="absolute inset-0 overflow-hidden border-r-2 border-white"
//                 style={{ width: `${sliderX}%` }}
//               >
//                 <PlaceholderImg 
//                   label="Before Treatment" 
//                   className="absolute inset-0 w-full h-full" 
//                   style={{ width: `${100 / (sliderX / 100)}%` }}
//                 />
//               </motion.div>

//               <div 
//                 className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-primary"
//                 style={{ left: `${sliderX}%` }}
//               >
//                 <SlidersHorizontal className="w-4 h-4 rotate-90" />
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }


"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { PlaceholderImg } from "../../../app/(pages)/before-after/page";

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.1 } }
};


export default function BeforeAfterCard({ item, isActive }) {
  const [sliderX, setSliderX] = useState(50);
  const [dragging, setDragging] = useState(false);
  const router = useRouter();
  const { t } = useTranslation();
  const handleMove = (clientX, rect) => {
    const x = ((clientX - rect.left) / rect.width) * 100;
    setSliderX(Math.min(98, Math.max(2, x)));
  };

  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5, ease: "circOut" }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 items-center"
        >
          <div className="space-y-8">
            <motion.div variants={staggerContainer} initial="hidden" animate="visible">
              <Badge className="bg-primary/10 text-primary border-none text-[10px] tracking-[3px] uppercase mb-4 px-4 py-1">
                {t(item.category)}
              </Badge>
              <h2 className="font-main text-4xl font-light text-primary leading-tight mb-4">
                {t(item.title)}
              </h2>
              <p className="text-lg text-text leading-relaxed max-w-md">
                {t(item.description)}
              </p>
            </motion.div>

            <div className="flex gap-10 border-y border-primary/10 py-6">
              {[
                { label: "Downtime", value: "Minimal" },
                { label: "Sessions", value: "1–2" },
                { label: "Result", value: "Natural" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-sm font-serif text-primary mb-1">{t(s.value)}</p>
                  <p className="text-[10px] tracking-[1.5px] uppercase text-[#a08080]/60 font-bold">
                    {t(s.label)}
                  </p>
                </div>
              ))}
            </div>

            <Button 
            onClick={() => router.push('/booking')}
            className="rounded-full bg-primary hover:opacity-90 text-white text-[11px] tracking-[2px] uppercase px-10 py-7 shadow-lg shadow-primary/20 transition-all">
              {t('Book a Consultation')}
            </Button>
          </div>

          <div className="relative">
            <div
              className="relative select-none overflow-hidden rounded-[2rem] cursor-col-resize h-[450px] md:h-[550px] shadow-2xl border border-white"
              onMouseMove={(e) =>
                dragging && handleMove(e.clientX, e.currentTarget.getBoundingClientRect())
              }
              onMouseDown={(e) => {
                setDragging(true);
                handleMove(e.clientX, e.currentTarget.getBoundingClientRect());
              }}
              onMouseUp={() => setDragging(false)}
              onMouseLeave={() => setDragging(false)}
              onTouchMove={(e) =>
                handleMove(e.touches[0].clientX, e.currentTarget.getBoundingClientRect())
              }
            >
              <PlaceholderImg
                src={item?.afterImg}
                label={t("After Result")}
                alt={`${item?.title} after result`}
                className="absolute inset-0 w-full h-full"
              />

              <motion.div
                className="absolute inset-0 overflow-hidden border-r-2 border-white"
                style={{ width: `${sliderX}%` }}
              >
                <PlaceholderImg
                  src={item?.beforeImg}
                  label={t("Before Treatment")}
                  alt={`${item?.title} before treatment`}
                  className="absolute inset-0 h-full"
                  style={{ width: `${100 / (sliderX / 100)}%` }}
                />
              </motion.div>

              <div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-primary"
                style={{ left: `${sliderX}%` }}
              >
                <SlidersHorizontal className="w-4 h-4 rotate-90" />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
