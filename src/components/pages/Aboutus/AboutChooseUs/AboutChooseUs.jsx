"use client";
import Image from "next/image";
import React from "react";
import ChooseUsCard from "./ChooseUsCard";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    img: "/images/About/icon_2-removebg-preview.png",
    title: "Personalized Care for Every Client",
    desc: "Our clinic is equipped with the latest aesthetic technologies and follows the highest international standards.",
  },
  {
    id: 2,
    img: "/images/About/icon_4-removebg-preview.png",
    title: "Natural, Elegant Results",
    desc: "We believe in subtle transformations that enhance your beauty without losing your natural essence.",
  },
  {
    id: 3,
    img: "/images/About/icon_1-removebg-preview.png",
    title: "Expert Hands, Trusted Results",
    desc: "Led by Dr. Shahd Awad, a certified aesthetic specialist with years of experience in non-surgical treatments.",
  },
  {
    id: 4,
    img: "/images/About/icon_6__1_-removebg-preview.png",
    title: "Comfort, Privacy & Care",
    desc: "From the first consultation to your post-treatment follow-up, we provide a luxurious, relaxing experience.",
  },
];

export default function AboutChooseUs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      className="py-10 px-4 overflow-hidden"
    >
      {/* Header Section */}
      <motion.div className="flex flex-col justify-center items-center mx-auto max-w-7xl text-center mb-12">
        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="font-bold text-secondary font-poppins text-2xl md:text-3xl"
        >
          Why Choose Us?
        </motion.h3>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-primary font-normal text-3xl md:text-[64px] leading-tight mt-5 max-w-4xl"
        >
          Experience beauty, care, and confidence
        </motion.p>
      </motion.div>

      {/* Responsive Grid: 2 Cards | Image | 2 Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center max-w-7xl mx-auto">
        
        {/* First 2 Cards */}
        <div className="flex flex-col gap-6 order-2 lg:order-1">
          {data.slice(0, 2).map((item) => (
            <ChooseUsCard key={item.id} {...item} />
          ))}
        </div>

        {/* Center Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-2 w-full flex justify-center"
        >
          <div className="relative w-full max-w-[450px]">
            <Image
              src="/images/About/4da149cfda6278d6384ebe6833b5097f3ced57b9.png"
              width={400}
              height={600}
              className="rounded-[40px] w-full h-auto object-cover shadow-2xl border-4 border-white/10"
              alt="Clinic"
              priority
            />
          </div>
        </motion.div>

        {/* Last 2 Cards */}
        <div className="flex flex-col gap-6 order-3">
          {data.slice(2, 4).map((item) => (
            <ChooseUsCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}