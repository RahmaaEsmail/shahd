"use client";
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const data = [
  {
    id: 1,
    img: "/SHAHD-IMAGE/service-details/63dca66b0e22df555f6fa459b4aa3d00585b7e5b.webp",
    title: "CONSULTATION & HAIR ANALYSIS",
    desc: "YOUR JOURNEY BEGINS WITH A PERSONAL CONSULTATION WITH DR. SHAHD AWAD."
  },
  {
    id: 2,
    img: "/SHAHD-IMAGE/service-details/63dca66b0e22df555f6fa459b4aa3d00585b7e5b.webp",
    title: "BLOOD COLLECTION & PREPARATION",
    desc: "A SMALL SAMPLE OF YOUR BLOOD IS DRAWN SAFELY AND PLACED IN A SPECIAL CENTRIFUGE."
  },
  {
    id: 3,
    img: "/SHAHD-IMAGE/service-details/63dca66b0e22df555f6fa459b4aa3d00585b7e5b.webp",
    title: "PRP INJECTION SESSION",
    desc: "THE PREPARED PRP IS GENTLY INJECTED INTO TARGETED AREAS OF THE SCALP USING FINE TECHNIQUES."
  },
  {
    id: 4,
    img: "/SHAHD-IMAGE/service-details/63dca66b0e22df555f6fa459b4aa3d00585b7e5b.webp",
    title: "NOURISHMENT & RECOVERY",
    desc: "AFTER TREATMENT, YOUR SCALP BEGINS TO NATURALLY ACTIVATE COLLAGEN AND NEW CELL GROWTH."
  }
];

// Animation Variants
const cardVariants = {
  rest: { 
    transition: { 
      staggerChildren: 0.05,
      staggerDirection: -1
    } 
  },
  hover: { 
    transition: { 
      staggerChildren: 0.1,
      staggerDirection: 1
    } 
  }
};

const backgroundVariants = {
  rest: { 
    opacity: 0, 
    scale: 1.1,
    transition: { duration: 0.3 }
  },
  hover: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const patternVariants = {
  rest: { 
    opacity: 1,
    transition: { duration: 0.3 }
  },
  hover: { 
    opacity: 0,
    transition: { duration: 0.4 }
  }
};

const numberVariants = {
  rest: { 
    color: "#DDB2B5",
    transition: { duration: 0.2 }
  },
  hover: { 
    color: "#FFFFFF",
    transition: { duration: 0.2 }
  }
};

const buttonVariants = {
  rest: { 
    backgroundColor: "#EBEBEB", 
    color: "#DDB2B5", 
    borderColor: "#DDB2B5",
    transition: { duration: 0.2 }
  },
  hover: { 
    backgroundColor: "transparent", 
    color: "#FFFFFF", 
    borderColor: "#FFFFFF",
    transition: { duration: 0.2 }
  }
};

const descriptionVariants = {
  rest: { 
    color: "#414141",
    transition: { duration: 0.2 }
  },
  hover: { 
    color: "#FFFFFF",
    transition: { duration: 0.2 }
  }
};

// Container animation for entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function ServiceDetailsCases({ service }) {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1, margin: "-50px" }}
      className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full overflow-hidden border-y border-[#EBEBEB]'
    >
      {data.map((item) => (
        <motion.div 
          key={item.id}
          variants={itemVariants}
          className="relative min-h-[500px] sm:min-h-[600px] flex flex-col group border-b md:border-b-0 md:border-r border-[#EBEBEB] last:border-b-0 lg:last:border-r-0 overflow-hidden cursor-pointer"
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          {/* Background Image - Only visible on hover */}
          <motion.div 
            className="absolute inset-0 z-0"
            variants={backgroundVariants}
          >
            <Image 
              src={item.img} 
              alt={item.title}
              fill 
              className="object-cover"
            />
            {/* Dark overlay to make text readable on hover */}
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>

          {/* Decorative Floral/Bg Pattern */}
          <motion.div 
            className="absolute inset-0 z-1"
            variants={patternVariants}
          >
            <Image 
              src="/SHAHD-IMAGE/service-details/0eebc8d3f65aa5f9625acdfffa3556590d320721.webp" 
              alt='pattern'
              fill 
              className='object-cover opacity-60'
            />
          </motion.div>

          {/* Text Content */}
          <div className='relative z-10 h-full flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12 gap-6'>
            <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 items-center text-center">
              <motion.p 
                variants={numberVariants}
                className='text-[150px] sm:text-[200px] md:text-[250px] font-poppins font-275 leading-none select-none'
              >
                {item.id}
              </motion.p>
            
              {/* Title Button-style */}
              <motion.button 
                variants={buttonVariants}
                className='w-full border rounded-full py-3 px-4 text-lg sm:text-xl  font-normal uppercase tracking-wide transition-colors'
              >
                {item.title}
              </motion.button>

              {/* Description */}
              <motion.p 
                variants={descriptionVariants}
                className='text-sm sm:text-base leading-relaxed font-poppins font-medium uppercase text-center md:text-left'
              >
                {item.desc}
              </motion.p>
            </div>
          </div>

          {/* Subtle border glow on hover */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            variants={{
              rest: { 
                boxShadow: "inset 0 0 0px rgba(221, 178, 181, 0)"
              },
              hover: { 
                boxShadow: "inset 0 0 30px rgba(221, 178, 181, 0.2)",
                transition: { duration: 0.4 }
              }
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}