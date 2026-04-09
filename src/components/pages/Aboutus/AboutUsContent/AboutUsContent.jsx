"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const images = [
  {
    id: 1,
    img: "/images/About/aboutImg7.png",
    title: "OUR Mission",
    overlay: "rgba(64, 70, 75, 0.6)",
    accentColor: "#B6C7D6",
    desc: "To become a global leader in aesthetic medicine and wellness, inspiring confidence and empowering people worldwide through innovative treatments, education, and holistic care. To become a global leader in aesthetic medicine and wellness, inspiring confidence and empowering people worldwide through innovative treatments, education, and holistic care.",
  },
  {
    id: 2,
    img: "/images/About/aboutImg6.png",
    title: "Our Purpose",
    overlay: "rgba(73, 54, 54, 0.7)",
    accentColor: "#D19B9B",
    desc: "To become a global leader in aesthetic medicine and wellness, inspiring confidence and empowering people worldwide through innovative treatments, education, and holistic care. To become a global leader in aesthetic medicine and wellness, inspiring confidence and empowering people worldwide through innovative treatments, education, and holistic care.",
  },
  {
    id: 3,
    img: "/images/About/aboutImg5.png",
    title: "OUR Vision",
    overlay: "rgba(0, 0, 0, 0.4)",
    accentColor: "#D19B9B",
    desc: "To become a global leader in aesthetic medicine and wellness, inspiring confidence and empowering people worldwide through innovative treatments, education, and holistic care. To become a global leader in aesthetic medicine and wellness, inspiring confidence and empowering people worldwide through innovative treatments, education, and holistic care.",
  }
];

export default function AboutUsContent() {
  const [selectedId, setSelectedId] = useState(3);
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      className='py-9 overflow-hidden w-full'
    >
      <motion.div className="flex flex-col justify-center items-center mx-auto max-w-7xl text-center px-4">
        <motion.h3
          className='font-bold text-secondary font-poppins mt-3 text-3xl'
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
        >
          Our Approach
        </motion.h3>

        <motion.p
          className='text-primary mt-4 font-normal text-4xl md:text-[64px] leading-tight'
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
        >
          Transforming beauty with precision and care
        </motion.p>

        <motion.p
          className='text-text text-base font-poppins leading-8 max-w-3xl mt-4'
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
        >
          At Glowix, we believe that beauty is a blend of art and science. Our approach is centered on personalized care, advanced techniques.
        </motion.p>
      </motion.div>

      {/* Responsive Cards Container */}
      <div className='flex flex-col lg:flex-row mt-12 justify-center items-stretch gap-5 px-4 w-full max-w-[1600px] mx-auto'>
        {images.map((item) => {
          const isActive = selectedId === item.id;

          return (
            <motion.div
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`relative overflow-hidden cursor-pointer transition-all duration-500 ease-in-out
                ${isActive 
                  ? 'w-full lg:w-[1020px] h-[450px] lg:h-[530px] rounded-[40px] lg:rounded-[100px]' 
                  : 'w-full lg:w-[170px] h-[100px] lg:h-[530px] rounded-[30px] lg:rounded-full'
                }`}
            >
              {/* Image Layer */}
              <motion.div
                animate={{ scale: (hoveredId === item.id || isActive) ? 1.05 : 1 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  alt={item.title}
                  src={item.img}
                  fill
                  className='object-cover'
                />
                <div 
                  className="absolute inset-0" 
                  style={{ backgroundColor: item.overlay }} 
                />
              </motion.div>

              {/* Text Content Overlay */}
              <div className='absolute inset-0 flex px-6 lg:px-20 justify-center items-center'>
                <AnimatePresence mode="wait">
                  {isActive ? (
                    <motion.div
                      key="active-content"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="w-full text-center lg:text-left"
                    >
                      <h3 
                        className='uppercase text-3xl lg:text-5xl mb-4 font-bold'
                        style={{ color: item.accentColor }}
                      >
                        {item.title}
                      </h3>
                      <p className='text-sm lg:text-xl text-white font-poppins leading-relaxed'>
                        {item.desc}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="collapsed-content"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="lg:rotate-[-90deg] whitespace-nowrap"
                    >
                      <h3 
                        className='uppercase text-xl lg:text-5xl font-bold'
                        style={{ color: item.accentColor }}
                      >
                        {item.title}
                      </h3>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}