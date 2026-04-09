"use client";
import {motion} from 'framer-motion';
import React, {useState} from 'react';
import Image from 'next/image';
import {Play} from 'lucide-react';

const GalleryItem = ({ src, alt, hasPlayButton = true, index  , cardRevealVariants}) => {
  const [isHovered, setIsHovered] = useState(false);

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 1 },
    visible: { scale: 1.1 }
  };

  return (
    <motion.div
      custom={index}
      variants={cardRevealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: false, // Set to true if you want animation only once
        amount: 0.3,
        margin: "-50px" // Trigger when element is 50px into viewport
      }}
      className='relative rounded-[16px] overflow-hidden w-full h-full cursor-pointer group'
      style={{ aspectRatio: '16/9' }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Dark overlay on hover */}
      <motion.div 
        className='absolute inset-0 bg-black/40 z-10'
        variants={overlayVariants}
        initial="hidden"
        animate={isHovered ? "visible" : "hidden"}
        transition={{ duration: 0.3 }}
      />
      
      {/* Image with zoom on hover */}
      <motion.div 
        className='relative w-full h-full'
        variants={imageVariants}
        initial="hidden"
        animate={isHovered ? "visible" : "hidden"}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Image 
          fill
          className="object-cover"
          alt={alt} 
          src={src}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
      
      {/* Play button with animation */}
      {hasPlayButton && (
        <motion.div 
          className='absolute inset-0 flex items-center justify-center z-20 pointer-events-none'
          variants={buttonVariants}
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
        >
          <motion.div 
            className="bg-[#AF7F73] w-[52px] h-[52px] rounded-[16px] flex justify-center items-center shadow-xl cursor-pointer pointer-events-auto"
            whileHover={{ scale: 1.1, backgroundColor: "#9f6f63" }}
            transition={{ duration: 0.2 }}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Play color='white' size={16} />
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default GalleryItem;