"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import ChooseUsCard from "../../Aboutus/AboutChooseUs/ChooseUsCard";

const data = [
  {
    id: 1,
    img: "/images/Weight-management/Group 1597883563.svg",
    title: "Medical & Metabolic Evaluation",
    desc: "Our clinic is equipped with the latest aesthetic technologies and follows the highest international ",
  },
  {
    id: 2,
    img: "/images/Weight-management/Image_fx (64) 1.svg",
    title: "Support & Monitoring",
    desc: "We believe in subtle transformations that enhance your beauty without losing your natural essence.",
  },
  {
    id: 3,
    img: "/images/Weight-management/Image_fx (63) 1.svg",
    title: "Personalized Plan Creation",
    desc: "Led by Dr. Shahd Awad, a certified aesthetic specialist with years of experience in non-surgical treatments,",
  },
  {
    id: 4,
    img: "/images/Weight-management/Image_fx (65) 1.svg",
    title: "Maintenance & Education",
    desc: "From the first consultation to your post-treatment follow-up, we provide a luxurious, relaxing experience ",
  },
];

export default function WeightManagementChooseUs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      style={{
        background: 'linear-gradient(181.13deg, #FFFFFF 1.07%, #FFEDEE 61.95%, #F8F1F1 99.15%)'
      }}
      transition={{ duration: 0.8 }}
      className="py-10 lg:py-20 overflow-hidden"
    >
      <div className="main-container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center items-center mx-auto max-w-5xl text-center mb-8 lg:mb-12"
        >
          <motion.h3
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="font-bold text-[#95BCAA] font-poppins text-lg md:text-2xl lg:text-3xl"
          >
            Why Choose Us?
          </motion.h3>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary font-normal text-2xl sm:text-4xl md:text-5xl lg:text-[64px] mt-4 lg:mt-5 leading-tight lg:leading-tight"
          >
            We focus on lasting wellbeing rather than quick fixes
          </motion.p>
          <motion.p
            initial={{ y: 70, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-text text-sm md:text-base lg:text-lg font-poppins leading-relaxed mt-4 lg:mt-6 max-w-3xl"
          >
            Your journey begins with a detailed health assessment — body analysis, metabolic review, history, and goals. This helps tailor the best approach for you.
          </motion.p>
        </motion.div>
 
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left Cards */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
            className="flex flex-col gap-6 order-2 lg:order-1"
          >
            {data?.slice(0, 2)?.map((item, index) => (
              <motion.div
                key={item?.id}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <ChooseUsCard
                  desc={item?.desc}
                  img={item?.img}
                  title={item?.title}
                />
              </motion.div>
            ))}
          </motion.div>
 
          {/* Center Image */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.6 }}
            className="order-1 lg:order-2 flex justify-center mb-4 lg:mb-0"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-[280px] lg:max-w-[333px] aspect-333/460"
            >
              <Image
                src="/images/Weight-management/Rectangle 21.png"
                fill
                className="rounded-[32px] lg:rounded-[40px] object-cover shadow-2xl"
                alt="Clinic"
              />
            </motion.div>
          </motion.div>
 
          {/* Right Cards */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
            className="flex flex-col gap-6 order-3"
          >
            {data?.slice(2)?.map((item, index) => (
              <motion.div
                key={item?.id}
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <ChooseUsCard
                  desc={item?.desc}
                  img={item?.img}
                  title={item?.title}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
