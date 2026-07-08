"use client";
import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function HomeBlogRightContent({
  setSelectedBlog,
  images,
  selectedBlog,
}) {
  const [axis, setAxis] = useState("y");

  useEffect(() => {
    const handleResize = () => {
      setAxis(window.innerWidth < 1024 ? "x" : "y");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      axis: axis,
      dragFree: false,
      containScroll: "trimSnaps",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })],
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const handleBlogSelect = (blog) => {
    setSelectedBlog(blog);
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="lg:h-125.5 w-full h-auto ms-auto lg:w-64 bg-white/10 backdrop-blur-2xl rounded-[30px] p-4 flex flex-col overflow-hidden relative group"
    >
      {/* Carousel Viewport */}
      <div className="overflow-hidden h-full rounded-[25px]" ref={emblaRef}>
        <div
          className={`flex ${axis === "x" ? "flex-row" : "flex-col"} w-full h-full gap-4`}
        >
          {images.map((item) => (
            <div
              key={item.id}
              className={`${axis === "x" ? "flex-[0_0_70%] sm:flex-[0_0_50%]" : "flex-[0_0_35%]"} min-h-0 cursor-pointer`}
              onClick={() => handleBlogSelect(item)}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative rounded-[15px] flex justify-center overflow-hidden transition-all  duration-300 h-full! ${
                  selectedBlog.id === item.id
                    ? "shadow-[-12px_2px_60px_15px_#B97C7C]"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                <div className="relative w-full aspect-video lg:aspect-auto lg:h-full">
                  <Image
                    src={item.img}
                    className="rounded-[15px] transition-transform duration-500 hover:scale-110 object-cover"
                    fill
                    alt={item.title}
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
