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
//         background: "url('/SHAHD-IMAGE/aethesic/bg.webp'), linear-gradient(180deg, rgba(255, 255, 255, 0.55) 0%, rgba(221, 178, 181, 0.4) 50%, rgba(255, 255, 255, 0.55) 100%)",
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
//               src="/SHAHD-IMAGE/763d61070e37d8f43ec385dbaa51742048b0e164.webp"
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
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const AestheticGynecologyTestimonial = ({ data }) => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";
  const dummy_data = [
    { id: 1, title: "Reem Elmahdy", descKey: "Testimonial 1" },
    { id: 2, title: "Janah Elaraby", descKey: "Testimonial 2" },
    { id: 3, title: "Toqa Mohammed", descKey: "Testimonial 3" },
    { id: 4, title: "Roqaya Ahmed", descKey: "Testimonial 4" },
    { id: 5, title: "Leen Mustafa", descKey: "Testimonial 5" },
    { id: 6, title: "Dina Qusay", descKey: "Testimonial 6" },
  ];

  const staggerOffsets = [0, 8, 16, 24, 10, 18];
  const testimonialData = data?.length > 0 ? data : dummy_data;
  return (
    <section
      dir={isRtl ? "rtl" : "ltr"}
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        background:
          "url(/SHAHD-IMAGE/aethesic/bg.webp), linear-gradient(180deg, rgba(255, 255, 255, 0.55) 0%, rgba(221, 178, 181, 0.55) 50%, rgba(255, 255, 255, 0.55) 100%)",
      }}
      className="relative w-full py-10  overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 ">
        {/* Header */}
        <div className="text-center mb-4">
          <p className="text-secondary font-bold font-poppins tracking-wider text-2xl capitalize">
            {t("Testimonials Title")}
          </p>
          <h2 className="text-primary text-3xl  leading-[1.1] max-w-4xl mx-auto uppercase font-medium">
            {t("Feedback Title")}
          </h2>
        </div>

        <div className="relative">
          {/* DESKTOP LAYOUT */}
          <div className="hidden lg:flex flex-row items-center min-h-[600px]">
            <div className="w-full lg:w-[60%] flex flex-col gap-2 relative z-20">
              {testimonialData?.slice(0, 5).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  style={{ marginInlineStart: `${staggerOffsets[index]}%` }}
                  className="bg-white/95 backdrop-blur-sm rounded-2xl p-2 shadow-sm border border-[#F4E7E8] max-w-[450px]"
                >
                  <h4 className="text-[#414141] font-medium font-poppins text-base mb-1">
                    {item.client_name}
                  </h4>
                  <p className="text-[#414141] text-sm font-poppins font-light leading-relaxed">
                    {item.review}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="absolute end-0 top-1/2 -translate-y-1/2 w-[45%] flex justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <img
                  src="/SHAHD-IMAGE/763d61070e37d8f43ec385dbaa51742048b0e164.webp"
                  alt="Aesthetic"
                  className="w-full max-w-[450px] h-auto object-cover relative z-10"
                />
              </motion.div>
            </div>
          </div>

          {/* MOBILE LAYOUT */}
          <div className="lg:hidden flex flex-col items-center">
            <div className="relative w-full flex justify-center mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                className="relative z-0"
              >
                <img
                  src="/SHAHD-IMAGE/763d61070e37d8f43ec385dbaa51742048b0e164.webp"
                  alt="Aesthetic"
                  className="w-[280px] sm:w-[350px] h-auto object-cover"
                />
              </motion.div>

              <div className="absolute bottom-[-100px] left-0 right-0 z-30 w-full">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  spaceBetween={10} // Negative space helps overlap if desired
                  slidesPerView={1.4}
                  loop={true}
                  centeredSlides={true}
                  watchSlidesProgress={true}
                  autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                  }}
                  // Depth Effect Logic
                  onProgress={(swiper) => {
                    for (let i = 0; i < swiper.slides.length; i++) {
                      const slide = swiper.slides[i];
                      const progress = slide.progress;
                      const absProgress = Math.abs(progress);

                      // Scale down based on distance from center
                      const scale = 1 - absProgress * 0.2;
                      // Move backward in Z-space
                      const translate = progress * 10;
                      // Reduce opacity for background slides
                      const opacity = 1 - absProgress * 0.4;

                      slide.style.transform = `scale(${scale}) translateX(${translate}%)`;
                      slide.style.opacity = opacity.toString();
                      slide.style.zIndex = (
                        10 - Math.abs(Math.round(progress))
                      ).toString();
                    }
                  }}
                  onSetTransition={(swiper, duration) => {
                    for (let i = 0; i < swiper.slides.length; i++) {
                      swiper.slides[i].style.transition = `${duration}ms`;
                    }
                  }}
                  breakpoints={{
                    640: { slidesPerView: 1.8, spaceBetween: -30 },
                  }}
                  dir="ltr" // Force LTR for this 3D swiper effect
                  key={isRtl ? "rtl" : "ltr"}
                  className="testimonial-swiper !pb-12"
                >
                  {testimonialData.map((item) => (
                    <SwiperSlide
                      key={item.id}
                      className="transition-all duration-500"
                    >
                      <div className="bg-white rounded-[32px] p-6 shadow-xl border border-[#F4E7E8] h-[200px] flex flex-col justify-center">
                        <h4 className="text-[#414141] font-semibold font-poppins text-lg mb-2">
                          {item.client_name}
                        </h4>
                        <p className="text-[#414141] text-xs font-poppins font-light leading-relaxed line-clamp-4">
                          {item.review}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 w-full h-[60px] pointer-events-none">
        <img
          src="/SHAHD-IMAGE/aethesic/Rectangle 24.webp"
          className="w-full h-full object-cover"
          alt="decorative wave"
        />
      </div>

      <style jsx global>{`
        .testimonial-swiper .swiper-pagination-bullet {
          background: #ddb2b5;
          opacity: 0.5;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #7189a2;
          opacity: 1;
        }
        /* Ensure the container doesn't clip the scaling slides */
        .testimonial-swiper {
          overflow: visible !important;
        }
      `}</style>
    </section>
  );
};

export default AestheticGynecologyTestimonial;
