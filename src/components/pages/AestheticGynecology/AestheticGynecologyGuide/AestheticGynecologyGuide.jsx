"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AestheticGynecologyGuide = () => {
  const steps = [
    {
      number: "STEP 1 -",
      title: "CONSULTATION",
      description: "A detailed evaluation is conducted to understand your condition, concerns, and desired outcomes, ensuring a tailored and medically appropriate approach.",
      icon: "/images/aethesic/Frame 2147208124.png",
    },
    {
      number: "STEP 2 -",
      title: "PERSONALIZED TREATMENT PLAN",
      description: "Based on your consultation, a personalized plan is carefully developed to match your goals while ensuring safety, effectiveness, and long-term results.",
      icon: "/images/aethesic/Frame 2147208124 (1).png",
    },
    {
      number: "STEP 3 -",
      title: "NON-SURGICAL TREATMENT",
      description: "Safe and minimally invasive techniques are applied using advanced medical devices to deliver effective results with comfort and precision.",
      icon: "/images/aethesic/Frame 2147208124 (2).png",
    },
    {
      number: "STEP 4 -",
      title: "RECOVERY & FOLLOW-UP",
      description: "After your treatment, continuous support and follow-up evaluations ensure optimal healing, comfort, and long-lasting results. Ongoing care with recovery guidance and follow-up.",
      icon: "/images/aethesic/Frame 2147208124 (3).png",
    }
  ];

  return (
    <section className="relative overflow-hidden py-16 lg:py-24 bg-white">
      {/* Background Decorative Floral Elements */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <Image
          src="/images/aethesic/d6f7c7b39cbc8c4f1eb3a6f2018f0f6d8c68cec3.jpg"
          alt="Floral Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="main-container relative z-10 mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="flex flex-col justify-center mb-16 lg:mb-20 text-center items-center gap-2"
        >
          <p className="text-secondary font-semibold tracking-[0.2em] text-xs sm:text-sm lg:text-lg uppercase">
            How the Treatments Work?
          </p>
          <h2 className="text-primary text-3xl md:text-5xl lg:text-[55px] leading-[1.1] max-w-4xl uppercase font-medium">
            we guide you through every step of your journey.
          </h2>
        </motion.div>

        {/* Timeline Grid */}
        <div className="relative max-w-6xl mx-auto">

          {/* Central Vertical Line (Desktop: Center, Mobile: Left) */}
          <div className="absolute left-[20px] right-[20px] lg:left-1/2 top-0 bottom-0 bg-primary w-[2px] lg:w-[5px] border-l lg:border-l-2 border-primary -translate-x-1/2 z-0" />

          <div className="space-y-12 lg:space-y-[-20px] relative z-10">
            {steps.map((step, index) => {
              const isEven = index % 2 === 1;

              return (
                <div key={index} className="relative flex items-center justify-center w-full">

                  {/* Container for Card Logic */}
                  <div className={`flex w-full items-center flex-col lg:flex-row ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>

                    {/* Card Wrapper */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="w-full lg:w-1/2 flex justify-start lg:justify-center pl-12 lg:pl-0 lg:px-10"
                    >
                      <div
                        style={{ boxShadow: "-0.6px -0.6px 48px -12px #00000026" }}
                        className="bg-white backdrop-blur-sm p-6 md:p-8 rounded-[16px] border border-white max-w-[480px] w-full"
                      >
                        {/* Dynamic Alignment based on side */}
                        <div className={`flex flex-col gap-1 text-left ${isEven ? "lg:text-left" : "lg:text-right"}`}>
                          <div className={`flex mb-2 ${isEven ? "lg:justify-start" : "lg:justify-end"}`}>
                            <img src={step?.icon} alt="step icon" className="w-[50px] h-[50px] object-contain" />
                          </div>

                          <h3 className="text-primary font-normal text-[22px] xl:text-[32px] tracking-wider leading-tight uppercase">
                            {step.number} {step.title}
                          </h3>
                          <p className="text-[#414141] text-sm md:text-base font-poppins tracking-[-0.15px] leading-relaxed font-light mt-2">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Desktop Spacer to maintain the Zig-Zag layout */}
                    <div className="hidden lg:block lg:w-1/2" />
                  </div>

                  {/* Circle Indicator on the Timeline */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false }}
                    className="absolute left-[20px] lg:left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center justify-center z-20"
                  >
                    <div className="w-[15px] h-[15px] lg:w-[32px] lg:h-[32px] bg-primary rounded-full border-2 border-primary" />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Decorative Top/Bottom Bars */}
      <div className='absolute -bottom-1 left-0 right-0 z-20 w-full h-[53px] pointer-events-none'>
        <img src="/images/aethesic/Rectangle 24.png" className='w-full h-full object-cover' alt="bottom bar" />
      </div>
      <div className='absolute top-0 rotate-180 left-0 right-0 z-20 w-full h-[53px] pointer-events-none'>
        <img src="/images/aethesic/Rectangle 24.png" className='w-full h-full object-cover' alt="top bar" />
      </div>
    </section>
  );
};

export default AestheticGynecologyGuide;