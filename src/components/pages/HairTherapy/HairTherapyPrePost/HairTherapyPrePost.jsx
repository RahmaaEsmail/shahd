// // "use client";
// // import Image from 'next/image';
// // import React from 'react';


// // export default function HairTherapyPrePost() {
// //   const preSurgery = [
// //     "Medical scalp assessment",
// //     "Blood tests & medical clearance",
// //     "Hair and scalp preparation",
// //     "Personalized surgery plan",
// //     "Nutritional and lifestyle guidance"
// //   ];

// //   const postSurgery = [
// //     "Medical scalp therapy",
// //     "Growth-support protocols",
// //     "PRP and scalp treatments",
// //     "Personalized recovery plan",
// //     "Long-term hair maintenance strategy"
// //   ];

// //   return (
// //     <div
// //       className="relative w-full py-12 lg:py-20 overflow-hidden"
// //       style={{
// //         background: "linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(113, 137, 162, 0.32) 50%, rgba(255, 255, 255, 0.32) 100%)"
// //       }}
// //     >
// //       <div className="main-container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 lg:px-8">

// //         {/* Left Side: Overlapping Images */}
// //         <div className="relative h-[400px]  md:h-[600px] w-full max-w-full sm:max-w-[600px] mx-auto order-2 md:order-1">
// //           {/* Back/Bottom Image */}
// //           <div className="absolute top-0 left-0! w-full h-[90%] md:h-full">
// //             <Image
// //               src="/SHAHD-IMAGE/hair-therapy/Vector.webp"
// //               alt="Surgery Consultation"
// //               fill
// //               className="object-contain"
// //             />
// //           </div>

// //           {/* Front/Top Image */}
// //           <div className="absolute bottom-10 md:bottom-2 right-0 xs:right-6 sm:right-16 md:-right-2   w-[55%] h-[60%] md:w-[45%] md:h-[70%] z-10">
// //             <Image
// //               src="/SHAHD-IMAGE/hair-therapy/Vector-1 (2).webp"
// //               alt="Post Surgery Care"
// //               fill
// //               className="object-contain drop-shadow-2xl md:object-left-bottom"
// //             />
// //           </div>

// //           <div className="absolute animate-bounce cursor-pointer left-[50%] top-[45%] z-30">
// //             <div className="relative w-20 h-20 md:w-32 md:h-32">
// //               <Image src="/SHAHD-IMAGE/hair-therapy/Group 31.webp" alt="watch video btn" fill className="object-contain" />
// //             </div>
// //           </div>
// //         </div>

// //         {/* Right Side: Content */}
// //         <div className="flex flex-col gap-4 order-1 md:order-2">
// //           <div className="space-y-2">
// //             <h4 className="text-secondary text-lg md:text-2xl font-bold font-poppins uppercase tracking-wider">
// //               Pre & Post Care
// //             </h4>
// //             <h2 className="text-primary text-3xl md:text-5xl  font-normal uppercase leading-tight">
// //               Your Journey <br className="hidden md:block" /> Beyond Surgery
// //             </h2>
// //           </div>

// //           {/* Lists Container */}
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
// //             {/* Pre-Surgery Care */}
// //             <div className="space-y-6">
// //               <h3 className="text-[#414141] text-xl  font-bold font-poppins flex items-center gap-3">
// //                 <span className="w-8 h-px bg-secondary"></span>
// //                 Pre-surgery care
// //               </h3>
// //               <ul className="space-y-4 ml-4">
// //                 {preSurgery.map((item, index) => (
// //                   <li key={index} className="text-[#414141] text-base md:text-lg font-normal font-poppins flex items-start gap-2">
// //                     <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></span>
// //                     {item}
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>

// //             {/* Post-Surgery Care */}
// //             <div className="space-y-6">
// //               <h3 className="text-[#414141] text-xl  font-bold font-poppins flex items-center gap-3">
// //                 <span className="w-8 h-px bg-secondary"></span>
// //                 Post-surgery care
// //               </h3>
// //               <ul className="space-y-4 ml-4">
// //                 {postSurgery.map((item, index) => (
// //                   <li key={index} className="text-[#414141] text-base md:text-lg font-normal font-poppins flex items-start gap-2">
// //                     <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></span>
// //                     {item}
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// "use client";
// import Image from 'next/image';
// import React, { useState } from 'react';
// import ReactPlayer from 'react-player';
// import { X } from 'lucide-react'; // Optional: for a close icon

// export default function HairTherapyPrePost() {
//   const [isOpen, setIsOpen] = useState(false);

//   const preSurgery = [
//     "Medical scalp assessment",
//     "Blood tests & medical clearance",
//     "Hair and scalp preparation",
//     "Personalized surgery plan",
//     "Nutritional and lifestyle guidance"
//   ];

//   const postSurgery = [
//     "Medical scalp therapy",
//     "Growth-support protocols",
//     "PRP and scalp treatments",
//     "Personalized recovery plan",
//     "Long-term hair maintenance strategy"
//   ];

//   return (
//     <div
//       className="relative w-full py-12 lg:py-20 overflow-hidden"
//       style={{
//         background: "linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(113, 137, 162, 0.32) 50%, rgba(255, 255, 255, 0.32) 100%)"
//       }}
//     >
//       <div className="main-container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 lg:px-8">

//         {/* Left Side: Overlapping Images */}
//         <div className="relative h-[400px] md:h-[600px] w-full max-w-full sm:max-w-[600px] mx-auto order-2 md:order-1">
//           <div className="absolute top-0 left-0 w-full h-[90%] md:h-full">
//             <Image
//               src="/SHAHD-IMAGE/hair-therapy/Vector.webp"
//               alt="Surgery Consultation"
//               fill
//               className="object-contain"
//             />
//           </div>

//           <div className="absolute bottom-10 md:bottom-2 right-0 xs:right-6 sm:right-16 md:-right-2 w-[55%] h-[60%] md:w-[45%] md:h-[70%] z-10">
//             <Image
//               src="/SHAHD-IMAGE/hair-therapy/Vector-1 (2).webp"
//               alt="Post Surgery Care"
//               fill
//               className="object-contain drop-shadow-2xl md:object-left-bottom"
//             />
//           </div>

//           {/* Video Button Trigger */}
//           <div 
//             className="absolute animate-bounce cursor-pointer left-[50%] top-[45%] z-30"
//             onClick={() => setIsOpen(true)}
//           >
//             <div className="relative w-20 h-20 md:w-32 md:h-32 transition-transform hover:scale-110">
//               <Image src="/SHAHD-IMAGE/hair-therapy/Group 31.webp" alt="watch video btn" fill className="object-contain" />
//             </div>
//           </div>
//         </div>

//         {/* Right Side: Content */}
//         <div className="flex flex-col gap-4 order-1 md:order-2">
//           <div className="space-y-2">
//             <h4 className="text-secondary text-lg md:text-2xl font-bold font-poppins uppercase tracking-wider">
//               Pre & Post Care
//             </h4>
//             <h2 className="text-primary text-3xl md:text-5xl font-normal uppercase leading-tight">
//               Your Journey <br className="hidden md:block" /> Beyond Surgery
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//             {/* Pre-Surgery Care */}
//             <div className="space-y-6">
//               <h3 className="text-[#414141] text-xl font-bold font-poppins flex items-center gap-3">
//                 <span className="w-8 h-px bg-secondary"></span>
//                 Pre-surgery care
//               </h3>
//               <ul className="space-y-4 ml-4">
//                 {preSurgery.map((item, index) => (
//                   <li key={index} className="text-[#414141] text-base md:text-lg font-normal font-poppins flex items-start gap-2">
//                     <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></span>
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Post-Surgery Care */}
//             <div className="space-y-6">
//               <h3 className="text-[#414141] text-xl font-bold font-poppins flex items-center gap-3">
//                 <span className="w-8 h-px bg-secondary"></span>
//                 Post-surgery care
//               </h3>
//               <ul className="space-y-4 ml-4">
//                 {postSurgery.map((item, index) => (
//                   <li key={index} className="text-[#414141] text-base md:text-lg font-normal font-poppins flex items-start gap-2">
//                     <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></span>
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* VIDEO MODAL */}
//       {isOpen && (
//         <div className="fixed inset-0 z-[99999999999999999999999]! flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
//           <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
//             {/* Close Button */}
//             <button 
//               onClick={() => setIsOpen(false)}
//               className="absolute top-4 right-4 z-[110] bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
//             >
//               <X size={24} />
//             </button>

//             {/* React Player */}
//             <ReactPlayer
//               url="https://www.youtube.com/watch?v=your-video-id" // Replace with your URL
//               controls
//               playing={true}
//               width="100%"
//               height="100%"
//             />
//           </div>
//           {/* Click outside to close */}
//           <div 
//             className="absolute inset-0 -z-10" 
//             onClick={() => setIsOpen(false)} 
//           />
//         </div>
//       )}
//     </div>
//   );
// }

"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function HairTherapyPrePost({ data }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar")
    ? "ar"
    : i18n.language?.startsWith("sk")
      ? "sk"
      : "en";
  const [isOpen, setIsOpen] = useState(false);

  const subtitle = data?.[`subtitle_${lang}`] || data?.subtitle_en || t("Pre Post Care");
  const title = data?.[`title_${lang}`] || data?.title_en || t("Journey Beyond Surgery");

  const preImage = data?.pre_image_url || "/SHAHD-IMAGE/hair-therapy/Vector.webp";
  const postImage = data?.post_image_url || "/SHAHD-IMAGE/hair-therapy/Vector-1 (2).webp";

  const preCareHtml = data?.[`pre_care_${lang}`] || data?.pre_care_en;
  const postCareHtml = data?.[`post_care_${lang}`] || data?.post_care_en;

  const preSurgery = [
    "Medical scalp assessment",
    "Blood tests clearance",
    "Hair scalp preparation",
    "Personalized surgery plan",
    "Nutritional guidance"
  ];

  const postSurgery = [
    "Medical scalp therapy",
    "Growth support protocols",
    "PRP scalp treatments",
    "Personalized recovery plan",
    "Long term maintenance"
  ];

  const isAr = lang === "ar";

  return (
    <div
      className="relative w-full py-12 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(113, 137, 162, 0.32) 50%, rgba(255, 255, 255, 0.32) 100%)"
      }}
    >
      <div className="main-container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 lg:px-8">

        {/* Left Side: Images */}
        <div className="relative h-[400px] md:h-[600px] w-full max-w-full sm:max-w-[600px] mx-auto order-2 md:order-1">
          <div className="absolute top-0 left-0 w-full h-[90%] md:h-full">
            <Image
              src={preImage}
              alt="Surgery Consultation"
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute bottom-10 md:bottom-2 right-0 xs:right-6 sm:right-16 md:-right-2 w-[55%] h-[60%] md:w-[45%] md:h-[70%] z-10">
            <Image
              src={postImage}
              alt="Post Surgery Care"
              fill
              className="object-contain drop-shadow-2xl md:object-left-bottom"
            />
          </div>

          {/* Video Button Trigger */}
          <div 
            className="absolute animate-bounce cursor-pointer left-[50%] top-[45%] z-30"
            onClick={() => setIsOpen(true)}
          >
            <div className="relative w-20 h-20 md:w-32 md:h-32 transition-transform hover:scale-110">
              <Image src="/SHAHD-IMAGE/hair-therapy/Group 31.webp" alt="watch video btn" fill className="object-contain" />
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col gap-4 order-1 md:order-2">
          <div className="space-y-2">
            <h4 className="text-secondary text-lg md:text-2xl font-bold font-poppins uppercase tracking-wider">
              {subtitle}
            </h4>
            <h2 className="text-primary text-3xl font-normal uppercase leading-tight">
              {title}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h3 className="text-[#414141] text-xl font-bold font-poppins flex items-center gap-3">
                <span className="w-8 h-px bg-secondary"></span>
                {t("Pre Surgery Care")}
              </h3>
              {preCareHtml ? (
                <div 
                  className={`care-list-html text-[#414141] text-base md:text-lg font-normal font-poppins [&_ul]:list-none [&_ul]:space-y-4 [&_li]:relative ${isAr ? '[&_li]:pr-6 [&_li]:pl-0 [&_li]:before:right-0 [&_li]:before:left-auto' : '[&_li]:pl-6 [&_li]:pr-0 [&_li]:before:left-0 [&_li]:before:right-auto'} [&_li]:before:content-[''] [&_li]:before:absolute [&_li]:before:top-2.5 [&_li]:before:w-1.5 [&_li]:before:h-1.5 [&_li]:before:rounded-full [&_li]:before:bg-secondary`}
                  dangerouslySetInnerHTML={{ __html: preCareHtml }}
                />
              ) : (
                <ul className="space-y-4 ml-4">
                  {preSurgery.map((item, index) => (
                    <li key={index} className="text-[#414141] text-base md:text-lg font-normal font-poppins flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></span>
                      {t(item)}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="space-y-6">
              <h3 className="text-[#414141] text-xl font-bold font-poppins flex items-center gap-3">
                <span className="w-8 h-px bg-secondary"></span>
                {t("Post Surgery Care")}
              </h3>
              {postCareHtml ? (
                <div 
                  className={`care-list-html text-[#414141] text-base md:text-lg font-normal font-poppins [&_ul]:list-none [&_ul]:space-y-4 [&_li]:relative ${isAr ? '[&_li]:pr-6 [&_li]:pl-0 [&_li]:before:right-0 [&_li]:before:left-auto' : '[&_li]:pl-6 [&_li]:pr-0 [&_li]:before:left-0 [&_li]:before:right-auto'} [&_li]:before:content-[''] [&_li]:before:absolute [&_li]:before:top-2.5 [&_li]:before:w-1.5 [&_li]:before:h-1.5 [&_li]:before:rounded-full [&_li]:before:bg-secondary`}
                  dangerouslySetInnerHTML={{ __html: postCareHtml }}
                />
              ) : (
                <ul className="space-y-4 ml-4">
                  {postSurgery.map((item, index) => (
                    <li key={index} className="text-[#414141] text-base md:text-lg font-normal font-poppins flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></span>
                      {t(item)}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ANIMATED VIDEO MODAL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999999999999999]! flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
          >
            {/* Click outside to close background */}
            <div className="absolute inset-0" onClick={() => setIsOpen(false)} />

            <motion.div 
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] z-10"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-[110] bg-white/10 hover:bg-white/30 text-white p-2 rounded-full transition-all hover:rotate-90"
              >
                <X size={24} />
              </button>

              {/* React Player */}
              <div className="w-full h-full">
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=your-video-id"
                  controls
                  playing={true}
                  width="100%"
                  height="100%"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}