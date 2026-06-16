"use client";
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ProductDetailsImages() {
  // Sample thumbnail images - replace with your actual images
  const thumbnails = [
    { id: 1, src: "/SHAHD-IMAGE/product-details/Rectangle 36.webp", alt: "Book thumbnail 1" },
    { id: 2, src: "/SHAHD-IMAGE/product-details/Rectangle 36.webp", alt: "Book thumbnail 2" },
    { id: 3, src: "/SHAHD-IMAGE/product-details/Rectangle 36.webp", alt: "Book thumbnail 3" },
    { id: 4, src: "/SHAHD-IMAGE/product-details/Rectangle 36.webp", alt: "Book thumbnail 4" },
    { id: 5, src: "/SHAHD-IMAGE/product-details/Rectangle 36.webp", alt: "Book thumbnail 5" },
    { id: 6, src: "/SHAHD-IMAGE/product-details/Rectangle 36.webp", alt: "Book thumbnail 6" },
    { id: 7, src: "/SHAHD-IMAGE/product-details/Rectangle 36.webp", alt: "Book thumbnail 7" },
  ];

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const scrollContainerRef = useRef(null);

  // Handle thumbnail click
  const handleThumbnailClick = (index) => {
    setSelectedIndex(index);
  };

  // Handle navigation
  const handlePrevious = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : thumbnails.length - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev < thumbnails.length - 1 ? prev + 1 : 0));
  };

  // Auto-scroll selected thumbnail into view
  React.useEffect(() => {
    if (scrollContainerRef.current) {
      const selectedElement = scrollContainerRef.current.children[selectedIndex];
      if (selectedElement) {
        selectedElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }
    }
  }, [selectedIndex]);

  return (
    <motion.div
      className="flex flex-col-reverse lg:grid lg:grid-cols-[180px_1fr] gap-4 md:gap-6 h-[440px] w-full!"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Thumbnail Container */}
      <div
        ref={scrollContainerRef}
        className='flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto hide-scrollbar scrollbar-hide pb-2 lg:pb-0'
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {/* Custom CSS to hide scrollbar */}
        <style jsx>{`
          div.scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
 
        {thumbnails.map((thumb, index) => (
          <motion.div
            key={thumb.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleThumbnailClick(index)}
            className={`relative w-24 h-24 sm:w-32 sm:h-32 lg:w-[180px] lg:h-[180px] rounded-[12px] lg:rounded-[16px] overflow-hidden cursor-pointer shrink-0 transition-all duration-300 ${selectedIndex === index
              ? 'border  border-primary'
              : 'border border-transparent hover:border-primary/50'
              }`}
          >
            <Image
              src={thumb.src}
              alt={thumb.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 150px, 200px"
            />
 
            {/* Selected indicator */}
            {selectedIndex === index && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-primary/10"
              />
            )}
          </motion.div>
        ))}
      </div>
 
      {/* Main Image Container */}
      <motion.div
        className="w-full relative rounded-[20px] lg:rounded-[24px] overflow-hidden h-[450px]  group"
        key={selectedIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Main Image */}
        <Image
          src={thumbnails[selectedIndex].src}
          alt="product image"
          fill
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          priority
        />
 
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
 
        {/* Navigation Buttons - visible on hover or mobile always check */}
        <div className='absolute inset-0 flex items-center justify-between px-4 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300'>
          {/* Left Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrevious}
            className='flex justify-center items-center bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-700 w-10 h-10 lg:w-12 lg:h-12 rounded-xl shadow-lg'
          >
            <ChevronLeft size={20} />
          </motion.button>
 
          {/* Right Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className='flex justify-center items-center bg-primary border border-white text-white w-10 h-10 lg:w-12 lg:h-12 rounded-xl shadow-lg'
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}