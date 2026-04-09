// "use client";
// import React from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';

// const data = [
//   { id: 1, title: "Reem Elmahdy", desc: "The clinic atmosphere is calm and private, which made me feel at ease. The treatment was quick and comfortable, and I’m very happy with the outcome 🌷" },
//   { id: 2, title: "Janah Elotaby", desc: "Was a bit shy to even book the appointment, but I'm so glad I did. The environment was very welcoming and professional. It really helped improve my confidence!" },
//   { id: 3, title: "Toqa Mohammed", desc: "From the first visit, I felt I was in safe hands. The doctor took time to understand my concerns and gave me a personalized plan." },
//   { id: 4, title: "Roqaya Ahmed", desc: "What I loved most is how natural the results are. Nothing feels overdone. The process was simple, and the recovery was easier than I expected." },
//   { id: 5, title: "Leen Mustafa", desc: "I had been dealing with discomfort for a long time, and this treatment truly made a difference in my daily life." },
//   { id: 6, title: "Dina Qusay", desc: "The whole experience was smooth and very professional. The clinic is clean, private, and very well organized." },
// ];

// export default function AestheticGynecologyTestimonial() {
//   return (
//     <div 
//       className="relative py-20 min-h-[1000px] overflow-hidden"
//       style={{
//         background: "url('/images/aethesic/bg.png'), linear-gradient(180deg, rgba(255, 255, 255, 0.55) 0%, rgba(221, 178, 181, 0.4) 50%, rgba(255, 255, 255, 0.55) 100%)",
//         backgroundSize: 'cover'
//       }}
//     >
//       <div className="container mx-auto px-4 relative z-10">
//         {/* Header */}
//         <motion.div 
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="text-center mb-20"
//         >
//           <p className="text-[#7189A2] font-bold tracking-widest uppercase text-sm mb-2">Testimonials</p>
//           <h2 className="text-[#DDB2B5] text-4xl md:text-5xl uppercase font-medium">
//             We love Receiving your <span className="text-[#7189A2]">messages, feedback</span>
//           </h2>
//         </motion.div>

//         <div className="relative flex flex-row justify-end items-start">
          
//           {/* Bubbles Container */}
//           <div className="relative w-2/3 h-[800px]">
//             {data.map((item, index) => {
//               // MATH LOGIC BASED ON INDEX:
//               // 1. Even/Odd shift (Zig-Zag)
//               const xOffset = index % 2 === 0 ? 20 : 80; 
//               // 2. Vertical stacking
//               const yOffset = index * 140; 

//               return (
//                 <motion.div
//                   key={item.id}
//                   initial={{ opacity: 0, x: -50 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   className="absolute bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-[#F4E7E8] max-w-[420px] z-20"
//                   style={{
//                     top: `${yOffset}px`,
//                     left: `${xOffset}px`,
//                   }}
//                 >
//                   <h4 className="text-[#414141] font-medium font-poppins text-sm mb-1">{item.title}</h4>
//                   <p className="text-[#414141] text-sm font-poppins font-light  leading-relaxed">
//                     {item.desc}
//                   </p>
//                   {/* Bubble Tail */}
//                 </motion.div>
//               );
//             })}
//           </div>

//           {/* Image Container */}
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             className="w-1/3 flex h-full justify-center lg:mt-20"
//           >
//             <img 
//               src="/images/763d61070e37d8f43ec385dbaa51742048b0e164.png" 
//               alt="Model"
//               className="w-[300px] lg:w-[500px] h-full object-cover relative z-10"
//             />
//           </motion.div>

//         </div>
//       </div>

//       <style jsx>{`
//         @media (max-width: 1024px) {
//           .relative.h-\\[800px\\] { height: auto; display: flex; flex-direction: column; gap: 20px; }
//           .absolute { position: relative !important; top: 0 !important; left: 0 !important; margin: 0 auto; }
//         }
//       `}</style>
//     </div>
//   );
// }


"use client";
import { motion } from 'framer-motion';

const data = [
  { id: 1, title: "Reem Elmahdy", desc: "The clinic atmosphere is calm and private, which made me feel at ease. The treatment was quick and comfortable, and I'm very happy with the outcome 🌷" },
  { id: 2, title: "Janah Elaraby", desc: "Was a bit shy to even book the appointment, but I'm so glad I did. The environment is very welcoming and professional. It really helped improve my confidence 💕" },
  { id: 3, title: "Toqa Mohammed", desc: "From the first visit, I felt I was in safe hands. The doctor took time to understand my concerns and gave me a personalized plan. The follow-up care was also excellent 👌" },
  { id: 4, title: "Roqaya Ahmed", desc: "What I loved most is how natural the results are. Nothing feels overdone. The process was simple, and the recovery was easier than I expected." },
  { id: 5, title: "Leen Mustafa", desc: "I had been dealing with discomfort for a long time, and this treatment truly made a difference in my daily life. Dr. Shahd is very knowledgeable and genuinely cares about her patients 🌸" },
  { id: 6, title: "Dina Qusay", desc: "The whole experience was smooth and very professional. The clinic is clean, private, and very well organized. I really appreciated how respectful and discreet everything was. Highly recommended 🙏" },
];

// Stagger offsets for desktop — each bubble shifts right progressively
const staggerOffsets = [0, 8, 16, 24, 10, 18];

export default function AestheticGynecologyTestimonial() {
  return (
    <section 
    
    style={{
      backgroundSize:"cover",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat",
      background:"url(/images/aethesic/bg.png) , linear-gradient(180deg, rgba(255, 255, 255, 0.55) 0%, rgba(221, 178, 181, 0.55) 50%, rgba(255, 255, 255, 0.55) 100%)"
    }}
    className="relative w-full py-10 sm:py-14 md:py-20 overflow-hidden bg-hair-overlay/20">
      {/* Decorative background elements */}
      {/* <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-10 left-[10%] w-16 sm:w-24 h-16 sm:h-24 border border-hair-slate/30 rounded-full" />
        <div className="absolute top-[30%] right-[15%] w-12 sm:w-20 h-12 sm:h-20 border border-hair-slate/20 rounded-full" />
        <div className="absolute bottom-[20%] left-[5%] w-10 sm:w-16 h-10 sm:h-16 border border-hair-slate/25 rounded-full" />
      </div> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <p className="text-secondary font-semibold tracking-[0.2em] text-xs sm:text-sm lg:text-lg uppercase">
            Testimonials
          </p>
          <h2 className="text-primary text-3xl md:text-5xl lg:text-[55px] leading-[1.1] max-w-4xl mx-auto text-center uppercase font-medium">
            We love Receiving your{' '}
          messages, feedback
          </h2>
        </div>

        {/* Main Layout: Bubbles left, Image right */}
        <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-0">
          {/* Bubbles Column */}
          <div className="w-full lg:w-[55%] flex order-2  flex-col gap-2 sm:gap-3 md:gap-4 relative z-10">
            {data.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                style={{ marginLeft: `${staggerOffsets[index]}%` }}
                className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-sm border border-border/30 max-w-[85%] sm:max-w-[75%] lg:max-w-[70%]"
              >
                <h4 className="text-[#414141] text-xs sm:text-sm md:text-base font-poppins font-semibold mb-0.5 sm:mb-1">
                  {item.title}
                </h4>
                <p className="text-[#414141] text-[10px] sm:text-xs font-poppins md:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Image Column — overlaps on desktop, below on mobile */}
          <div className="w-full lg:w-[45%] flex order-1 justify-center lg:justify-end lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src={"/images/763d61070e37d8f43ec385dbaa51742048b0e164.png"}
                alt="Patient testimonial"
                loading="lazy"
                className="w-40 sm:w-52 md:w-64 lg:w-80 xl:w-96 h-auto object-cover rounded-2xl sm:rounded-3xl"
              />
            </motion.div>

          </div>
        </div>
      </div>

      <div className='absolute -bottom-1 left-0 right-0 z-20 w-full h-[53px] pointer-events-none'>
        <img src="/images/aethesic/Rectangle 24.png" className='w-full h-full object-cover' alt="bottom bar" />
      </div>
    </section>
  );
}
