"use client";
import Image from 'next/image';
import React from 'react';


export default function HairTherapyPrePost() {
  const preSurgery = [
    "Medical scalp assessment",
    "Blood tests & medical clearance",
    "Hair and scalp preparation",
    "Personalized surgery plan",
    "Nutritional and lifestyle guidance"
  ];

  const postSurgery = [
    "Medical scalp therapy",
    "Growth-support protocols",
    "PRP and scalp treatments",
    "Personalized recovery plan",
    "Long-term hair maintenance strategy"
  ];

  return (
    <div
      className="relative w-full py-12 lg:py-20 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(113, 137, 162, 0.32) 50%, rgba(255, 255, 255, 0.32) 100%)"
      }}
    >
      <div className="main-container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 lg:px-8">

        {/* Left Side: Overlapping Images */}
        <div className="relative h-[400px]  md:h-[600px] w-full max-w-full sm:max-w-[600px] mx-auto order-2 md:order-1">
          {/* Back/Bottom Image */}
          <div className="absolute top-0 left-0! w-full h-[90%] md:h-full">
            <Image
              src="/images/hair-therapy/Vector.png"
              alt="Surgery Consultation"
              fill
              className="object-contain"
            />
          </div>

          {/* Front/Top Image */}
          <div className="absolute bottom-10 md:bottom-2 right-0 xs:right-6 sm:right-16 md:-right-2   w-[55%] h-[60%] md:w-[45%] md:h-[70%] z-10">
            <Image
              src="/images/hair-therapy/Vector-1 (2).png"
              alt="Post Surgery Care"
              fill
              className="object-contain drop-shadow-2xl md:object-left-bottom"
            />
          </div>

          <div className="absolute animate-bounce cursor-pointer left-[50%] top-[45%] z-30">
            <div className="relative w-20 h-20 md:w-32 md:h-32">
              <Image src="/images/hair-therapy/Group 31.svg" alt="watch video btn" fill className="object-contain" />
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col gap-8 order-1 md:order-2">
          <div className="space-y-4">
            <h4 className="text-secondary text-lg md:text-2xl font-bold font-poppins uppercase tracking-wider">
              Pre & Post Care
            </h4>
            <h2 className="text-primary text-3xl md:text-5xl lg:text-[64px] font-normal uppercase leading-tight">
              Your Journey <br className="hidden md:block" /> Beyond Surgery
            </h2>
          </div>

          {/* Lists Container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Pre-Surgery Care */}
            <div className="space-y-6">
              <h3 className="text-[#414141] text-xl md:text-2xl font-bold font-poppins flex items-center gap-3">
                <span className="w-8 h-px bg-secondary"></span>
                Pre-surgery care
              </h3>
              <ul className="space-y-4 ml-4">
                {preSurgery.map((item, index) => (
                  <li key={index} className="text-[#414141] text-base md:text-lg font-normal font-poppins flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Post-Surgery Care */}
            <div className="space-y-6">
              <h3 className="text-[#414141] text-xl md:text-2xl font-bold font-poppins flex items-center gap-3">
                <span className="w-8 h-px bg-secondary"></span>
                Post-surgery care
              </h3>
              <ul className="space-y-4 ml-4">
                {postSurgery.map((item, index) => (
                  <li key={index} className="text-[#414141] text-base md:text-lg font-normal font-poppins flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}