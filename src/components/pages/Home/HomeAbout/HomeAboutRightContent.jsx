"use client";
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { Button } from '../../../ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function HomeAboutRightContent({ activeIndex, CARDS, setActiveIndex, setDirection }) {
  // Embla Carousel Setup for Infinite Loop
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
    dragFree: false,
    containScroll: false,
    slidesToScroll: 1
  }, [Autoplay()]);

  const [hoveredId, setHoveredId] = useState(null);
  const router  = useRouter();

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.plugins().autoplay?.play()

    const onSelect = () => {
      const selected = emblaApi.selectedScrollSnap();
      setActiveIndex(selected);
    };

    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi, setActiveIndex]);

  const handleCardClick = (index) => {
    // Determine direction for animation
    const newDirection = index > activeIndex ? 1 : -1;
    setDirection(newDirection);
    setActiveIndex(index);

    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  };

  return (
    <div className="flex flex-col h-full pt-4">
      {/* Header Section */}
      <div className="mb-10 max-w-5xl mx-4">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-secondary text-lg md:text-[36px] font-bold font-poppins tracking-wide uppercase mb-2"
        >
          About Dr. Shahd Awad
        </motion.h3>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1 }}
          className="text-primary text-3xl md:text-4xl lg:text-[56px] font-normal max-w-xl leading-tight mb-6"
        >
          Redefining Beauty with Heart, Skill and Vision
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row md:items-end gap-6 justify-between"
        >
          <p className="text-text font-poppins text-base md:text-lg leading-7 max-w-xl">
            Dr. Shahd Awad is more than a cosmetic doctor — she's a visionary who blends science, artistry, and compassion to create timeless beauty.
          </p>
          <Button 
          onClick={() => router.push('/about-us')}
          variant="secondary" className="whitespace-nowrap p-[30px_24px] rounded-[100px] text-[24px] text-white font-normal">
            Learn More
          </Button>
        </motion.div>
      </div>

      {/* Carousel Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-auto w-full overflow-hidden"
      >
        {/* Embla Viewport */}
        <div ref={emblaRef}>
          <div className="flex">
            {CARDS.map((card, index) => {
              const isHovered = hoveredId === card.id;
              
              return (
                <div
                  key={card.id}
                  className="flex-[0_0_50%] md:flex-[0_0_30%] pl-4 min-w-0"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onMouseEnter={() => setHoveredId(card.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onClick={() => handleCardClick(index)}
                    className="relative aspect-3/4 rounded-[24px] overflow-hidden cursor-pointer group"
                  >
                    <Image
                      src={card.image}
                      alt={card.label}
                      fill
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Card Overlay */}
                    <div className={`absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 ${
                      activeIndex === index ? 'opacity-100' : 'opacity-70 group-hover:opacity-90'
                    }`} />

                    {/* Card Content - Changes on hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white transition-all duration-300">
                      {!isHovered ? (
                        /* Default state - shows label and subtitle */
                        <>
                          <h4 className={`text-lg md:text-xl font-normal uppercase tracking-wider mb-1 transition-all duration-300 ${
                            activeIndex === index ? 'text-[#D29B9F]' : ''
                          }`}>
                            {card.label}
                          </h4>
                          <p className="text-xs md:text-sm font-light uppercase font-poppins text-[#FFF9F7] line-clamp-2">
                            {card.subtitle}
                          </p>
                        </>
                      ) : (
                        /* Hover state - shows hoverTitle and hoverDescription */
                        <div className="space-y-3">
                          <h4 className="text-lg md:text-xl font-normal uppercase font-poppins tracking-wider mb-1 transition-all duration-300">
                            {card?.label || "FEATURED"}
                          </h4>
                          <p className="text-xs md:text-[30px] font-noraml text-white">
                            {card.desc}
                          </p>
                          <h3 className="text-xs md:text-sm font-normal uppercase font-poppins text-[#FFF9F7] line-clamp-2">
                            {card.subtitle}
                          </h3>
                           
           
                             <ArrowRight size={25} color='white' />
                          
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}