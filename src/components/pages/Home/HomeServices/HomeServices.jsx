"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "women", label: "SERVICES FOR WOMEN" },
  { id: "men", label: "SERVICES FOR MEN" },
];

// Map hover states to service IDs for easy lookup
const hoverToServiceMap = {
  all: [1, 2, 3, 4, 5, 6],
  wrinkle: [1],
  cheek: [2],
  lip: [3],
  hair: [4],
  eyebrow: [5],
  nose: [6],
};

const servicesData = {
  women: [
    {
      id: 1,
      title: "WRINKLE TREATMENT",
      side: "left",
      top: "14%",
      hoverKey: "wrinkle",
      images: [
        { img: "/images/HomeServices/wrinkle.png", title: "WRINKLE TREATMENT" },
        { img: "/images/HomeServices/wrinkle.png", title: "WRINKLE TREATMENT 2" },
        { img: "/images/HomeServices/wrinkle.png", title: "WRINKLE TREATMENT 3" },
      ],
    },
    {
      id: 2,
      title: "CHEEK ENHANCEMENT",
      hoverKey: "cheek",
      side: "left",
      top: "50%",
      images: [
        { img: "/images/HomeServices/cheek.png", title: "CHEEK ENHANCEMENT" },
        { img: "/images/HomeServices/cheek.png", title: "CHEEK ENHANCEMENT 2" },
        { img: "/images/HomeServices/cheek.png", title: "CHEEK ENHANCEMENT 3" },
      ],
    },
    {
      id: 3,
      title: "LIP ENHANCEMENT",
      side: "left",
      top: "60%",
      hoverKey: "lip",
      images: [
        { img: "/images/HomeServices/lip.png", title: "LIP ENHANCEMENT" },
      ],
    },
    {
      id: 4,
      title: "HAIR TREATMENT",
      side: "right",
      top: "3%",
      hoverKey: "hair",
      images: [
        { img: "/images/HomeServices/hair.png", title: "HAIR TREATMENT" },
      ],
    },
    {
      id: 5,
      title: "EYEBROW ENHANCEMENT",
      side: "right",
      top: "30%",
      hoverKey: "eyebrow",
      images: [
        { img: "/images/HomeServices/eyebrow.png", title: "EYEBROW ENHANCEMENT" },
      ],
    },
    {
      id: 6,
      title: "NOSE AESTHETICS",
      side: "right",
      top: "50%",
      hoverKey: "nose",
      images: [
        { img: "/images/HomeServices/nose.png", title: "NOSE AESTHETICS" },
      ],
    },
  ],
  men: [
    {
      id: 1,
      title: "WRINKLE TREATMENT",
      side: "left",
      top: "14%",
      hoverKey: "wrinkle",
      images: [
        { img: "/images/HomeServices/wrinkle.png", title: "WRINKLE TREATMENT" },
        { img: "/images/HomeServices/wrinkle.png", title: "WRINKLE TREATMENT 2" },
        { img: "/images/HomeServices/wrinkle.png", title: "WRINKLE TREATMENT 3" },
      ],
    },
    {
      id: 2,
      title: "CHEEK ENHANCEMENT",
      hoverKey: "cheek",
      side: "left",
      top: "50%",
      images: [
        { img: "/images/HomeServices/cheek.png", title: "CHEEK ENHANCEMENT" },
        { img: "/images/HomeServices/cheek.png", title: "CHEEK ENHANCEMENT 2" },
        { img: "/images/HomeServices/cheek.png", title: "CHEEK ENHANCEMENT 3" },
      ],
    },
    {
      id: 3,
      title: "LIP ENHANCEMENT",
      side: "left",
      top: "60%",
      hoverKey: "lip",
      images: [
        { img: "/images/HomeServices/lip.png", title: "LIP ENHANCEMENT" },
      ],
    },
    {
      id: 4,
      title: "HAIR TREATMENT",
      side: "right",
      top: "3%",
      hoverKey: "hair",
      images: [
        { img: "/images/HomeServices/hair.png", title: "HAIR TREATMENT" },
      ],
    },
    {
      id: 5,
      title: "EYEBROW ENHANCEMENT",
      side: "right",
      top: "30%",
      hoverKey: "eyebrow",
      images: [
        { img: "/images/HomeServices/eyebrow.png", title: "EYEBROW ENHANCEMENT" },
      ],
    },
    {
      id: 6,
      title: "NOSE AESTHETICS",
      side: "right",
      top: "50%",
      hoverKey: "nose",
      images: [
        { img: "/images/HomeServices/nose.png", title: "NOSE AESTHETICS" },
      ],
    },
  ],
};

const hotspots = [
  { key: "wrinkle", src: "/images/HomeServices/Group 27.png", position: "top-[14%] left-0", serviceId: 1 },
  { key: "cheek", src: "/images/HomeServices/Group 27.png", position: "top-[50%] left-0", serviceId: 2 },
  { key: "lip", src: "/images/HomeServices/Group 26.png", position: "top-[60%] -left-10", serviceId: 3 },
  { key: "hair", src: "/images/HomeServices/Frame 1000005599.png", position: "top-[3%] right-0", serviceId: 4 },
  { key: "eyebrow", src: "/images/HomeServices/Group 23.png", position: "top-[30%] right-0", serviceId: 5 },
  { key: "nose", src: "/images/HomeServices/Group 24.png", position: "top-[50%] right-0", serviceId: 6 },
];

// Animation variants
const cardVariants = {
  initial: { opacity: 0, y: 20, scale: 0.9 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -20, scale: 0.9 },
  hover: { scale: 1.05, transition: { duration: 0.2 } }
};

const hotspotVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.2,
    filter: "drop-shadow(0 10px 15px rgba(232, 164, 168, 0.4))",
    transition: { duration: 0.2 }
  },
  tap: { scale: 0.95 }
};

export default function HomeServices() {
  const [activeTab, setActiveTab] = useState("women");
  const [isHovered, setIsHovered] = useState("all");
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log("isHovered", isHovered);
  }, [isHovered]);

  const isAllView = isHovered === "all";
  const visibleServiceIds = hoverToServiceMap[isHovered] || hoverToServiceMap.all;

  // Get visible services
  const visibleServices = servicesData[activeTab].filter((service) =>
    visibleServiceIds.includes(service.id)
  );

  useEffect(() => {
    console.log("servicesData[activeTab]", servicesData[activeTab]);
  }, [activeTab]);

  // Get single active service for hover mode
  const activeService = !isAllView ? visibleServices[0] : null;

  // Check if a specific hotspot should be visible
  const isHotspotVisible = (key) => {
    return isHovered === "all" || isHovered === key;
  };

  // Handle hotspot hover with position tracking
  const handleHotspotHover = (key, event) => {
    setIsHovered(key);
    if (event) {
      setHoverPosition({
        x: event.clientX,
        y: event.clientY
      });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#FFF9F7]">
      {/* Background with fade animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/Services/Desktop - 20.jpg')",
          backgroundSize: "cover",
        }}
      />

      <div className="relative z-10 main-container mx-auto py-12">
        {/* Tabs with animation */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex p-[16px_12px] rounded-full bg-[#FCF7F8]/20 backdrop-blur-lg border-2 border-[#FCF7F8]">
            {tabs.map((tab, index) => {
              const isWomen = tab.id === "women";
              const isActive = activeTab === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "px-8 py-3 rounded-full text-2xl font-normal tracking-wider transition-all duration-300",
                    isActive ? "bg-white" : "bg-transparent",
                    isWomen 
                      ? (isActive 
                          ? "shadow-[4px_5px_5px_#DDB2B5] border-2 border-primary text-primary" 
                          : "text-primary/70  hover:text-primary hover:border-primary")
                      : (isActive 
                          ? "shadow-[4px_5px_5px_rgba(0,0,0,0.1)] border-2 border-secondary text-secondary" 
                          : "text-secondary/70 hover:text-secondary hover:border-secondary")
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 }}
                >
                  {tab.label}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Services Layout */}
        <div className="relative flex justify-center items-center min-h-[600px]">

          {/* LEFT SIDE CARDS - Hidden on mobile */}
          <motion.div
            className="absolute left-0 md:left-7 2xl:left-16 top-0 h-full z-20 pointer-events-none hidden md:block"
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {/* ALL VIEW: Show first image of each left service */}
              {isAllView && (
                <motion.div
                  key="all-left"
                  initial={{ opacity: 0 }}
                  viewport={{ once: false }}
                  whileInView={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8 absolute top-1/2 -translate-y-1/2"
                >
                  {visibleServices
                    .filter((s) => s.side === "left")
                    .map((service, index) => (
                      <motion.div
                        key={service.id}
                        variants={cardVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: false }}
                        exit="exit"
                        transition={{ delay: index * 0.1 }}
                        whileHover="hover"
                      >
                        <ServiceCard
                          image={service.images[0]?.img}
                          serviceTitle={service.images[0]?.title}
                        />
                      </motion.div>
                    ))}
                </motion.div>
              )}

              {/* HOVER VIEW: Show ALL images of hovered service (if it's left side) */}
              {!isAllView && activeService && activeService.side === "left" && (
                <motion.div
                  key={`hover-left-${activeService.id}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  exit={{ opacity: 0, x: -30 }}
                  className="absolute transition-all duration-500"
                  style={{
                    top: activeService.images?.length > 1 ? "" : activeService.top,
                    transform: activeService.images?.length > 1 ? "" : "translateY(-50%)"
                  }}
                >
                  <div className="space-y-4">
                    {activeService.images.map((image, index) => (
                      <motion.div
                        key={`${activeService.id}-${index}`}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, x: 10 }}
                      >
                        <ServiceCard
                          image={image?.img}
                          serviceTitle={image?.title || activeService.title}
                          isHighlighted={index === 0}
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Center Face */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative w-64 h-80 sm:w-80 sm:h-100 md:w-90 md:h-100 lg:w-125 lg:h-150 z-10"
          >
            <Image
              src={activeTab == "men" ? "/images/Image_fx (30) 2.png" : "/images/HomeServices/Rectangle 6.png"}
              alt="Services"
              fill
              className="object-contain"
              priority
            />

            {/* Hotspots */}
            <AnimatePresence>
              {hotspots.map((hotspot) => {
                const isVisible = isHotspotVisible(hotspot.key);
                const isActive = isHovered === hotspot.key;

                return isVisible ? (
                  <motion.div
                    key={hotspot.key}
                    variants={hotspotVariants}
                    initial="initial"
                    whileInView={isActive ? "hover" : "initial"}
                    viewport={{ once: false }}
                    whileHover="hover"
                    whileTap="tap"
                    className={cn(
                      "absolute cursor-pointer transition-all duration-300 pointer-events-auto",
                      hotspot.position,
                      isActive && "z-30"
                    )}
                    onMouseEnter={(e) => handleHotspotHover(hotspot.key, e)}
                    onMouseLeave={() => setIsHovered("all")}
                  >
                    <motion.img
                      src={hotspot.src}
                      alt={hotspot.key}
                      className="transition-all duration-300"
                      viewport={{ once: false }}
                      whileInView={isActive ? {
                        rotate: [0, -5, 5, -5, 0],
                        transition: { duration: 0.5 }
                      } : {}}
                    />

                    {/* Ripple effect on hover */}
                    {/* {isActive && (
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0.5 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="absolute inset-0 rounded-full bg-[#E8A4A8]"
                      />
                    )} */}
                  </motion.div>
                ) : null;
              })}
            </AnimatePresence>

            {/* Face overlay glow on hover */}
            <AnimatePresence>
              {!isAllView && activeService && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.15 }}
                  viewport={{ once: false }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-[#E8A4A8] rounded-full blur-3xl pointer-events-none"
                />
              )}
            </AnimatePresence>
          </motion.div>

          {/* RIGHT SIDE CARDS - Hidden on mobile */}
          <motion.div
            className="absolute right-70 lg:right-80 xl:right-100 2xl:right-126 top-0 h-full z-20 pointer-events-none hidden md:block"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {/* ALL VIEW: Show first image of each right service */}
              {isAllView && (
                <motion.div
                  key="all-right"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  exit={{ opacity: 0 }}
                  className="space-y-8 absolute top-1/2 -translate-y-1/2"
                >
                  {visibleServices
                    .filter((s) => s.side === "right")
                    .map((service, index) => (
                      <motion.div
                        key={service.id}
                        variants={cardVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: false }}
                        exit="exit"
                        transition={{ delay: index * 0.1 }}
                        whileHover="hover"
                      >
                        <ServiceCard
                          image={service?.images[0]?.img}
                          serviceTitle={service?.images[0]?.title}
                        />
                      </motion.div>
                    ))}
                </motion.div>
              )}

              {/* HOVER VIEW: Show ALL images of hovered service (if it's right side) */}
              {!isAllView && activeService && activeService.side === "right" && (
                <motion.div
                  key={`hover-right-${activeService.id}`}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  exit={{ opacity: 0, x: 30 }}
                  className="absolute transition-all duration-500"
                  style={{
                    top: activeService.images?.length > 1 ? "" : activeService.top,
                    transform: activeService.images?.length > 1 ? "" : "translateY(-50%)"
                  }}
                >
                  <div className="space-y-4">
                    {activeService.images.map((image, index) => (
                      <motion.div
                        key={`${activeService.id}-${index}`}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, x: -10 }}
                      >
                        <ServiceCard
                          image={image?.img}
                          serviceTitle={image?.title || activeService.title}
                          isHighlighted={index === 0}
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Mobile Popup & Desktop Floating service info */}
          <AnimatePresence>
            {!isAllView && activeService && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                exit={{ opacity: 0, y: 50 }}
                className={cn(
                  "absolute z-30 bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6",
                  // Mobile styled as centered popup, Desktop styled as bottom floating info
                  "bottom-10 left-1/2 -translate-x-1/2 w-[90%] md:w-auto max-w-md border border-primary/20"
                )}
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  {/* Service Image/List for Mobile */}
                  <div className="flex flex-col gap-4 w-full">
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30 shrink-0">
                        <Image
                          src={activeService.images[0]?.img}
                          alt={activeService.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className={cn(
                          "font-bold text-xl",
                          activeTab === "women" ? "text-primary" : "text-secondary"
                        )}>
                          {activeService.title}
                        </h4>
                        <p className="text-gray-500 text-sm">Tap to learn more about this treatment</p>
                      </div>
                    </div>

                    {/* Show Service cards in the popup on MOBILE */}
                    <div className="flex md:hidden flex-wrap gap-4 mt-2 justify-center">
                      {activeService.images.map((image, idx) => (
                        <div key={idx} className="w-full max-w-[200px]">
                          <ServiceCard 
                            image={image.img} 
                            serviceTitle={image.title}
                            isMobilePopup={true}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// Updated ServiceCard with Framer Motion
function ServiceCard({ image, serviceTitle, isHighlighted = false, isMobilePopup = false }) {
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden group cursor-pointer shadow-lg pointer-events-auto",
        isMobilePopup 
          ? "w-full h-32 rounded-2xl" 
          : "w-60 h-30 xl:w-95 xl:h-35 2xl:w-112.5 2xl:h-45 rounded-[30px]",
        isHighlighted && !isMobilePopup && "ring-4 ring-[#E8A4A8] ring-offset-4 ring-offset-[#FFF9F7]"
      )}
      whileHover="hover"
      variants={cardVariants}
    >
      <Image
        src={image}
        alt={serviceTitle || "Service"}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 280px, 500px"
      />

      {/* Gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"
        variants={{
          hover: { opacity: 0.8 }
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Title container */}
      <motion.div
        className={cn(
          "absolute bg-primary rounded-full flex items-center shadow-lg",
          isMobilePopup ? "top-2 left-2 px-3 py-1.5" : "top-4 left-4 px-6 py-3 max-w-[90%]"
        )}
        variants={{
          hover: { scale: 1.05, x: 5 }
        }}
        transition={{ duration: 0.3 }}
      >
        <span className={cn(
          "text-[#FFF9F7] font-normal tracking-wider uppercase truncate",
          isMobilePopup ? "text-[10px]" : "text-sm lg:text-base"
        )}>
          {serviceTitle || "Service"}
        </span>
      </motion.div>

      {/* Shine effect on hover */}
      {!isMobilePopup && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          variants={{
            hover: { x: "100%" }
          }}
          transition={{ duration: 0.8 }}
        />
      )}
    </motion.div>
  );
}