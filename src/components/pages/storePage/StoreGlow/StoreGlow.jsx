"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const images = [
  {
    id: 1,
    img: "/SHAHD-IMAGE/Store/a0a959b34b3b437bff9d1b53050420b30f62ad15.webp",
    title: "Refer-a-Friend (Give 20%, Get 20%)",
    desc: "Invite your friends to experience Dr. Shahd’s world of beauty and wellness. When they make their first purchase, they get 20% off, and you get 20% back in store credit.",
    btn_name: "Refer a Friend"
  },
  {
    id: 2,
    img: "/SHAHD-IMAGE/Store/c200c7a033740567572fb2ed386f7b4da891b9e2.webp",
    title: "VIP Tiers",
    desc: "Invite your friends to experience Dr. Shahd’s world of beauty and wellness. When they make their first purchase, they get 20% off, and you get 20% back in store credit.",
    btn_name: "Refer a Friend"
  },
  {
    id: 3,
    img: "/SHAHD-IMAGE/Store/434030f730ae5f8c13121c35130298c5669cbcf3.webp",
    title: "Rewards",
    desc: "Invite your friends to experience Dr. Shahd’s world of beauty and wellness. When they make their first purchase, they get 20% off, and you get 20% back in store credit.",
    btn_name: "Refer a Friend"
  }
];

export default function StoreGlow() {
  const [selectedId, setSelectedId] = useState(1); // Start with vision selected (id: 3)
  const [hoveredId, setHoveredId] = useState(null);
  const { t , i18n} = useTranslation();

  const handleCardClick = (id) => {
    setSelectedId(id);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      className='py-4 mt-2 overflow-hidden w-full bg-[#FFF2F2]/30'
    >
      <div className="main-container mx-auto px-4">
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-primary text-center  mb-10 font-bold font-poppins text-xl md:text-2xl lg:text-[27px] leading-tight ${i18n?.language == 'ar' ? "lg:text-right" :"lg:text-left"}`}
        >
          {t("Refer A friend, Share The Glow")}
        </motion.p>

        {/* Cards Container - Dynamic Height/Orientation Transition */}
        <div className='flex flex-col lg:flex-row justify-center items-stretch gap-3 lg:gap-5 w-full h-[750px] sm:h-[650px] lg:h-[530px]'>
          {images.map((item, index) => {
            const isActive = selectedId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onClick={() => handleCardClick(item.id)}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative overflow-hidden cursor-pointer transition-all duration-700 ease-in-out w-full lg:h-full rounded-[24px] md:rounded-[32px]
                  ${isActive ? 'flex-3' : 'flex-1'}`}
              >
                <motion.div
                  animate={{ scale: hoveredId === item.id ? 1.05 : isActive ? 1.02 : 1 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                >
                  <Image
                    alt={item.title}
                    fill
                    className='object-cover'
                    src={item.img}
                  />
                </motion.div>

                <motion.div
                  className={`${isActive ? "rgba(0, 0, 0, 0.50)" : "rgba(73, 54, 54, 0.7)"} absolute inset-0 flex px-4 md:px-12 lg:px-20 justify-center items-center`}
                  animate={{
                    backgroundColor: isActive ? "rgba(0, 0, 0, 0.50)" : "rgba(73, 54, 54, 0.7)"
                  }}
                >
                  <AnimatePresence mode="wait">
                    {isActive ? (
                      <motion.div
                        key={`content-${item.id}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="w-full text-center lg:text-left"
                      >
                        <motion.h3
                          className={`text-primary uppercase text-2xl md:text-3xl mb-4 font-normal ${i18n?.language == "ar" ? "text-right" : "text-left"}`}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          {t(item.title)}
                        </motion.h3>
                        <motion.p
                          className={`text-sm md:text-lg mt-4 text-white font-light font-poppins leading-relaxed max-w-xl mx-auto lg:mx-0 ${i18n?.language == "ar" ? "text-right" :"text-left"}`}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          {t(item.desc)}
                        </motion.p>
                        <motion.button
                          style={{
                            boxShadow: "0px 4px 60px rgba(255, 255, 255, 0.15)",
                          }}
                          className="bg-white mt-8 text-primary font-medium text-sm md:text-xl rounded-full h-[40px] md:h-[52px] w-[140px] md:w-[190px] hover:bg-opacity-90 transition-all duration-300"
                        >
                          {t(item.btn_name)}
                        </motion.button>

                      </motion.div>
                    ) : (
                      <motion.div
                        key={`minimized-${item.id}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <motion.h3
                          className='text-primary uppercase text-nowrap text-lg md:text-2xl  font-bold lg:font-normal'
                          animate={{
                            rotate: typeof window !== 'undefined' && window.innerWidth >= 1024 ? -90 : 0,
                            scale: 0.9
                          }}
                          transition={{ duration: 0.4 }}
                        >
                          {t(item.title)}
                        </motion.h3>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}