"use client";
import React from 'react';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const data = [
  {
    id: 1,
    name: "Kristin Watson",
    title: "Absolutly Loved This Product!!!",
    desc: "A Gentle Yet Effective Formula Designed To Nourish, Hydrate, And Enhance Your Natural Glow. This Product Delivers Smooth, Radiant Skin While Supporting Your Overall Skin Health — Perfect For Daily Use And All Skin Types.",
    img: "/images/product-details/Ellipse 25.png",
    is_verified: true,
    rating: 5,
    date: "1 Month Ago"
  },
  {
    id: 2,
    name: "Kristin Watson",
    title: "Absolutly Loved This Product!!!",
    desc: "A Gentle Yet Effective Formula Designed To Nourish, Hydrate, And Enhance Your Natural Glow. This Product Delivers Smooth, Radiant Skin While Supporting Your Overall Skin Health — Perfect For Daily Use And All Skin Types.",
    img: "/images/product-details/Ellipse 25.png",
    is_verified: true,
    rating: 5,
    date: "1 Month Ago"
  }
];

// Motion Variants for bidirectional scrolling
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.6
    }
  }
};

const headerVariants = {
  hidden: { 
    opacity: 0, 
    y: -30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const buttonVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
    y: 20
  },
  visible: { 
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      delay: 0.4
    }
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: {
    scale: 0.95
  }
};

const starVariants = {
  hidden: { 
    opacity: 0,
    rotate: -180,
    scale: 0
  },
  visible: (i) => ({
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      delay: 0.5 + (i * 0.1),
      type: "spring",
      stiffness: 200,
      damping: 15
    }
  })
};

export default function ProductDetailsReviews() {
  return (
    <div
      className='min-h-[500px] md:min-h-screen relative py-12 md:py-20 px-4 overflow-hidden'
      style={{
        backgroundImage: "url('/images/product-details/Desktop - 42.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Animated background overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"
      />

      <motion.h2 
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3, margin: "-50px" }}
        className='text-3xl md:text-5xl lg:text-[64px] font-normal text-center text-primary uppercase tracking-wider mb-8 md:mb-16 relative z-10'
      >
        Reviews List
      </motion.h2>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ 
          once: false, 
          amount: 0.1,
          margin: "-50px"
        }}
        className='flex flex-col main-container gap-6 relative z-10'
      >
        {data.map((item, index) => (
          <motion.div 
            key={item.id} 
            variants={itemVariants}
            custom={index}
            initial="hidden"
            whileInView="visible"
            className='bg-white/50 backdrop-blur-md rounded-[28px] md:rounded-[40px] border border-white/30 p-6 md:p-10 shadow-lg'
          >
            {/* Top Row: User Info and Date */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex gap-4 items-center">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative w-14 h-14 md:w-16 md:h-16 shrink-0"
                >
                    <Image 
                        src={item.img} 
                        alt={item.name} 
                        fill 
                        className='rounded-full object-cover border-2 border-primary/20' 
                    />
                </motion.div>
                <div>
                  <motion.h3 
                    className='text-lg md:text-xl font-semibold text-gray-900 font-poppins leading-tight'
                  >
                    {item.name}
                  </motion.h3>
                  <motion.p 
                    className='text-sm md:text-base font-light text-gray-500 font-poppins'
                  >
                    ({item.is_verified ? "Verified Purchase" : "Unverified"})
                  </motion.p>
                </div>
              </div>
              <motion.span 
                className='text-primary border border-primary px-3 py-1 rounded-full text-sm md:text-base font-medium font-poppins bg-white/50 shrink-0'
              >
                {item.date}
              </motion.span>
            </div>

            {/* Content Section */}
            <div className="flex flex-col gap-3 md:gap-4 text-left">
              <motion.h4 
                className='text-xl md:text-2xl font-semibold font-poppins text-[#4D3E3F] leading-snug'
              >
                {item.title}
              </motion.h4>
              
              <motion.p 
                className='text-base md:text-lg lg:text-xl leading-relaxed font-normal text-gray-700 font-poppins max-w-5xl'
              >
                {item.desc}
              </motion.p>
              
              {/* Rating Section */}
              <div className="flex items-center gap-3 mt-2 md:mt-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      size={18} 
                      fill={i < item.rating ? "#F7C128" : "transparent"} 
                      color="#F7C128" 
                    />
                  ))}
                </div>
                <span className='text-sm md:text-base font-medium text-gray-500 font-poppins'>
                   {item.rating}.0 Rating
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Read More Button */}
      <motion.div 
        variants={buttonVariants}
        initial="hidden"
        whileInView="visible"
        className="flex justify-center mt-12 md:mt-16 relative z-10"
      >
        <motion.button 
          whileHover="hover"
          whileTap="tap"
          style={{
            background: "linear-gradient(90deg, #DDB2B5 0%, #EFD4CE 100%)"
          }}
          className="text-white px-8 md:px-12 py-3 md:py-4 rounded-full uppercase font-medium text-lg md:text-2xl shadow-xl transition-shadow"
        >
          Read More
        </motion.button>
      </motion.div>
    </div>
  );
}