"use client";
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Play, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  },
  hover: {
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      delay: 0.2
    }
  }
};

const stepVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3 + i * 0.1,
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  }),
  hover: {
    scale: 1.02,
    x: 10,
    color: "#DDB2B5",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const playButtonVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  },
  hover: {
    scale: 1.2,
    rotate: 90,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: {
    scale: 0.9
  }
};

const dialogVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.2
    }
  }
};

export default function ProductDetailsUsage() {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const playerRef = useRef(null);

  const usageSteps = [
    "Wet Your Face With Lukewarm Water",
    "Apply A Small Amount To Your Hands",
    "Gently Massage Onto Face In Circular Motions",
    "Rinse Thoroughly",
    "Pat Dry With A Clean Towel",
    "Apply your favorite moisturizer",
    "Enjoy your glowing skin!"
  ];

  const handleDialogClose = () => {
    setIsPlaying(false);
    setIsDialogOpen(false);
    // Properly cleanup video player
    if (playerRef.current) {
      playerRef.current.seekTo(0);
    }
  };

  const handlePlayClick = () => {
    setIsPlaying(true);
    setIsDialogOpen(true);
  };

  return (
    <motion.div 
      className='main-container grid grid-cols-1 md:grid-cols-2 items-stretch gap-4 py-8' 
      dir="ltr"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
    >
      {/* Left Card: Story/Quote */}
      <motion.div 
        variants={cardVariants}
        whileHover="hover"
        className='h-[400px]  relative rounded-[32px] overflow-hidden group cursor-pointer'
      >
        <Image 
          className='object-cover transition-transform duration-500 group-hover:scale-105' 
          src="/SHAHD-IMAGE/product-details/service details.webp" 
          alt="Dr. Shahd Quote" 
          fill 
        />
        <motion.div 
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.2 }}
          className='absolute inset-0 bg-black/10 z-10' 
        />
        <motion.div 
          variants={textVariants}
          className='absolute z-20 top-6 left-6 md:top-10 md:left-10 text-white flex flex-col justify-between h-[85%] pr-6'
        >
          <motion.p 
            className='text-xl font-poppins font-light'
            whileHover={{ x: 10 }}
          >
            {t('From Dr.Shahd')}
          </motion.p>
          <motion.h2 
            className='text-3xl sm:text-4xl font-semibold font-poppins max-w-lg leading-tight'
            whileHover={{ scale: 1.02, x: 10 }}
          >
            {t('MY GO-TO DAILY CLEANSER')}
          </motion.h2>
        </motion.div>
      </motion.div>
 
      {/* Right Card: Usage & Video */}
      <motion.div 
        variants={cardVariants}
        style={{
          background: `linear-gradient(rgba(255, 255, 255, 0.27), rgba(255, 255, 255, 0.27)), url('/SHAHD-IMAGE/product-details/c17080f024061945d283c30609d7dfd468f6fbf8.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        className='h-[400px] p-5 rounded-[32px] overflow-hidden flex flex-col gap-4'
      >
        {/* Video Thumbnail Section with Shadcn Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={handleDialogClose}>
          <DialogTrigger asChild>
            <motion.div 
              className='relative h-[200px] rounded-[32px] overflow-hidden cursor-pointer group'
              whileHover="hover"
              variants={cardVariants}
              onClick={handlePlayClick}
            >
              <Image 
                src="/SHAHD-IMAGE/product-details/Rectangle 70.webp" 
                alt="Usage Video Thumbnail" 
                fill 
                className='object-cover h-[200px]!'
              />
              {/* Gradient Overlay */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.3 }}
                className='absolute inset-0 bg-linear-to-t from-black/50 to-transparent'
              />
              
              {/* Play Button Overlay */}
              <motion.div 
                className='absolute inset-0 flex items-center justify-center z-20'
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.button 
                  variants={playButtonVariants}
                  initial="hidden"
                  whileHover="hover"
                  whileTap="tap"
                  className='bg-primary text-white w-14 h-14 md:w-16 md:h-16 rounded-full flex justify-center items-center shadow-lg'
                >
                  <Play size={28} style={{ marginLeft: 4 }} />
                </motion.button>
              </motion.div>
 
              {/* Pulse animation on thumbnail */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-primary/20 rounded-full w-20 h-20 m-auto"
              />
            </motion.div>
          </DialogTrigger>
 
          <DialogContent className="sm:max-w-[800px] p-0 bg-transparent border-none overflow-hidden max-w-[95vw]">
            <motion.div
              variants={dialogVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className='relative'
            >
              {/* Close button */}
              <motion.button
                className='absolute -top-10 right-0 text-white z-50 bg-black/50 rounded-full p-2'
                whileHover={{ scale: 1.1, backgroundColor: "#DDB2B5" }}
                whileTap={{ scale: 0.9 }}
                onClick={handleDialogClose}
              >
                <X size={20} />
              </motion.button>
              
              <div className='aspect-video w-full'>
                <ReactPlayer 
                  ref={playerRef}
                  url='https://www.youtube.com/watch?v=your-video-id' 
                  controls 
                  width='100%' 
                  height='100%' 
                  playing={isPlaying}
                  onPause={() => setIsPlaying(false)}
                  onPlay={() => setIsPlaying(true)}
                  onEnded={() => setIsPlaying(false)}
                  config={{
                    youtube: {
                      playerVars: { 
                        modestbranding: 1,
                        rel: 0
                      }
                    }
                  }}
                />
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>
 
        {/* Instructions List Section */}
        <motion.div 
          className='flex-1 p-4 h-[350px] overflow-y-auto rounded-[32px] flex flex-col'
          variants={textVariants}
        >
          <motion.h6 
            className='font-bold text-xl  font-poppins mb-2 text-[#4D3E3F]'
            whileHover={{ x: 10, color: "#DDB2B5" }}
          >
            {t('How To Use?')}
          </motion.h6>
          
          <div className='overflow-y-auto overflow-x-hidden pr-2 ps-4 custom-scrollbar flex-1'>
            <motion.ol 
              className='flex flex-col gap-3 list-decimal list-inside'
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3
                  }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              {usageSteps.map((step, index) => (
                <motion.li 
                  key={index} 
                  custom={index}
                  variants={stepVariants}
                  whileHover="hover"
                  className='font-medium text-lg md:text-xl  leading-relaxed font-poppins cursor-default text-gray-800'
                >
                  {t(step)}
                </motion.li>
              ))}
            </motion.ol>
          </div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #DDB2B5; 
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(221, 178, 181, 0.1);
        }
      `}</style>
    </motion.div>
  );
}