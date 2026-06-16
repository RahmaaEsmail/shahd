"use client";
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function BuyBookImages() {
  const thumbnails = [
    { id: 1, src: "/SHAHD-IMAGE/Buy-book/Rectangle 42.webp", alt: "Book thumbnail 1" },
    { id: 2, src: "/SHAHD-IMAGE/Buy-book/Rectangle 40.webp", alt: "Book thumbnail 2" },
    { id: 3, src: "/SHAHD-IMAGE/Buy-book/Group 30.webp", alt: "Book thumbnail 3" },
    { id: 4, src: "/SHAHD-IMAGE/Buy-book/Rectangle 40.webp", alt: "Book thumbnail 4" },
    { id: 5, src: "/SHAHD-IMAGE/Buy-book/Group 30.webp", alt: "Book thumbnail 5" },
    { id: 6, src: "/SHAHD-IMAGE/Buy-book/Rectangle 42.webp", alt: "Book thumbnail 6" },
    { id: 7, src: "/SHAHD-IMAGE/Buy-book/Rectangle 40.webp", alt: "Book thumbnail 7" },
  ];

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const scrollContainerRef = useRef(null);

  const handleThumbnailClick = (index) => {
    setSelectedIndex(index);
  };

  const handlePrevious = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : thumbnails.length - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev < thumbnails.length - 1 ? prev + 1 : 0));
  };

  React.useEffect(() => {
    if (scrollContainerRef.current) {
      const selectedElement = scrollContainerRef.current.children[selectedIndex];
      if (selectedElement) {
        selectedElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [selectedIndex]);

  return (
    <motion.div
      className="flex flex-col-reverse lg:grid lg:grid-cols-[140px_1fr] xl:grid-cols-[180px_1fr] gap-4 lg:h-[500px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Thumbnail Container */}
      <div
        ref={scrollContainerRef}
        className='flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto hide-scrollbar scrollbar-hide py-2 lg:py-0 px-1 lg:px-0'
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {thumbnails.map((thumb, index) => (
          <motion.div
            key={thumb.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleThumbnailClick(index)}
            className={`relative w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-full lg:h-[140px] xl:h-[180px] rounded-[12px] lg:rounded-[16px] overflow-hidden cursor-pointer shrink-0 transition-all duration-300 ${
              selectedIndex === index
                ? 'shadow-lg scale-100'
                : 'opacity-70 hover:opacity-100'
            }`}
          >
            <Image
              src={thumb.src}
              alt={thumb.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100px, 200px"
            />
          </motion.div>
        ))}
      </div>

      {/* Main Image Viewport */}
      <motion.div
        className="w-full relative rounded-[20px] lg:rounded-[24px] overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-full group shadow-2xl"
        key={selectedIndex}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Image
          src={thumbnails[selectedIndex].src}
          alt="Main book preview"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          priority
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Navigation Overlays */}
        <div className='absolute inset-0 flex items-center justify-between px-4 lg:px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrevious}
            className='flex justify-center items-center bg-white/90 backdrop-blur-md border border-gray-200 text-gray-800 w-10 h-10 lg:w-12 lg:h-12 rounded-xl shadow-xl'
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className='flex justify-center items-center bg-primary text-white w-10 h-10 lg:w-12 lg:h-12 rounded-xl shadow-xl border border-white/20'
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}