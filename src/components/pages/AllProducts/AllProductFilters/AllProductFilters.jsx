"use client";
 
import React, { useEffect, useState, useRef, useMemo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Star, Filter, X } from "lucide-react";
import { 
  motion, 
  AnimatePresence, 
  useAnimate, 
  useDragControls, 
  useMotionValue 
} from "framer-motion";
import { productFilterData } from "@/data/productFilters";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import dynamic from "next/dynamic";
import useFilterStore from "@/zustandStore/FilterStore";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
 
const Sticky = dynamic(() => import('react-stickynode'), { ssr: false });

const DragCloseDrawer = ({ open, setOpen, children }) => {
  const [scope, animate] = useAnimate();
  const [drawerHeight, setDrawerHeight] = useState(0);
  const drawerRef = useRef(null);

  const y = useMotionValue(0);
  const controls = useDragControls();

  // Measure height without react-use-measure
  useEffect(() => {
    if (!drawerRef.current) return;
    
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setDrawerHeight(entry.contentRect.height);
      }
    });

    observer.observe(drawerRef.current);
    return () => observer.disconnect();
  }, [open]);

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, drawerHeight || 1000],
    });

    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 200,
            }}
            className="absolute bottom-0 h-auto max-h-[85vh] w-full overflow-hidden rounded-t-[32px] bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
          >
            {/* Drag Handle */}
            <div className="absolute left-0 right-0 top-0 z-20 flex justify-center bg-white py-4">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="h-1.5 w-14 cursor-grab touch-none rounded-full bg-gray-200 active:cursor-grabbing hover:bg-primary/30 transition-colors"
                aria-label="Drag to close"
              ></button>
            </div>

            {/* Header Content */}
            <div className="pt-10 px-6 pb-2 border-b border-gray-50 flex items-center justify-between">
                <h2 className="text-2xl font-normal font-bebas uppercase tracking-wider flex items-center gap-3 text-primary">
                    <Filter size={24} />
                    {t("Filter Options")}
                </h2>
                <button 
                  onClick={handleClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} className="text-gray-400" />
                </button>
            </div>

            {/* Scrollable Content */}
            <div className="relative z-10 overflow-y-auto max-h-[60vh] p-6 pt-4 custom-scrollbar">
              {children}
            </div>

            {/* Action Footer */}
            <div className="p-6 border-t border-gray-100 flex gap-3 bg-white">
                <Button 
                    className="flex-1 rounded-full py-7 text-xl font-bebas tracking-widest shadow-lg shadow-primary/20 bg-primary text-white hover:bg-primary/90"
                    onClick={handleClose}
                >
                    {t("Apply Filters")}
                </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const contentVariants = {
  collapsed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, ease: "easeInOut" }
  },
  expanded: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3, ease: "easeInOut" }
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.2 }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.05
    }
  }
};

const sliderVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, delay: 0.2 }
  }
};

// Component for the actual filter inputs to avoid duplication
const FilterContent = () => {
  const {
    selectedCategories,
    selectedReviews,
    selectedPromotions,
    selectedAvailability,
    priceRange,
    toggleCategory,
    toggleReview,
    togglePromotion,
    toggleAvailability,
    setPriceRange
  } = useFilterStore();
  const { t } = useTranslation();

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  const isCategorySelected = (option) => selectedCategories.includes(option);
  const isReviewSelected = (stars) => selectedReviews.includes(stars.toString());
  const isPromotionSelected = (opt) => selectedPromotions.includes(opt);
  const isAvailabilitySelected = (opt) => selectedAvailability.includes(opt);

  return (
    <Accordion type="multiple" className="w-full" defaultValue={["category"]}>
      {/* Dynamic Sections from Utils */}
      {productFilterData.map((section, index) => (
        <motion.div
          key={section.id}
          variants={itemVariants}
          custom={index}
          className="flex flex-col gap-[5px]"
        >
          <AccordionItem
            value={section.id}
            className="border! border-[#DADADA] p-[16px_24px] rounded-[16px] my-2 lg:my-4! last:mb-0"
          >
            <AccordionTrigger className="text-lg lg:text-xl font-normal font-poppins no-underline hover:no-underline py-0">
              {t(section.trigger)}
            </AccordionTrigger>
            <AnimatePresence initial={false}>
              <AccordionContent className="p-0 overflow-hidden">
                <motion.div
                  variants={contentVariants}
                  initial="collapsed"
                  animate="expanded"
                  exit="collapsed"
                  className="pt-3 ps-4 pb-1 flex flex-col gap-3"
                >
                  {section.options.map((option, idx) => (
                    <motion.label
                      key={idx}
                      className="flex items-center gap-3 cursor-pointer group"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      whileHover={{ x: 5 }}
                    >
                      <Checkbox
                        checked={isCategorySelected(option)}
                        onCheckedChange={() => toggleCategory(option)}
                        className="w-5 h-5 border-[#DADADA] bg-transparent! data-[state=checked]:bg-primary! data-[state=checked]:border-primary!"
                      />
                      <span className="text-base lg:text-[18px] font-poppins font-light text-black">
                        {t(option)}
                      </span>
                    </motion.label>
                  ))}
                </motion.div>
              </AccordionContent>
            </AnimatePresence>
          </AccordionItem>
        </motion.div>
      ))}

      {/* Price Filter */}
      <motion.div
        className="border-t border-[#DADADA] mt-6 pt-6"
        variants={itemVariants}
      >
        <p className="text-lg lg:text-xl font-normal font-poppins no-underline hover:no-underline py-0">
          {t("By Price")}
        </p>
        <motion.div
          className="flex mt-3 flex-col gap-2 ps-4"
          variants={sliderVariants}
          initial="hidden"
          animate="visible"
        >
          <p className="text-sm lg:text-base font-poppins text-[#6A6A6A] font-light">
            $ {priceRange[0].toFixed(2)} - $ {priceRange[1].toFixed(2)}
          </p>
          <Slider
            value={priceRange}
            onValueChange={handlePriceChange}
            min={0}
            max={200}
            step={5}
            className="w-full max-w-xs"
          />
        </motion.div>
      </motion.div>

      {/* By Review */}
      <motion.div
        className="border-t border-[#DADADA] mt-6 pt-6 flex flex-col gap-4"
        variants={itemVariants}
      >
        <h5 className="text-lg lg:text-xl font-normal font-poppins text-black">{t("By Review")}</h5>
        <motion.div
          className="flex flex-col gap-3 ps-2"
          variants={containerVariants}
        >
          {[5, 4, 3, 2, 1].map((stars, index) => (
            <motion.label
              key={stars}
              className="flex items-center gap-3 cursor-pointer"
              variants={itemVariants}
              whileHover={{ x: 5 }}
              custom={index}
            >
              <Checkbox
                checked={isReviewSelected(stars)}
                onCheckedChange={() => toggleReview(stars)}
                className="w-5 h-5 border-[#DADADA] bg-transparent! data-[state=checked]:bg-primary! data-[state=checked]:border-primary!" />
              <motion.div
                className="flex items-center gap-1"
                whileHover={{ scale: 1.02 }}
              >
                {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={i < stars ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                    />
                ))}
                <motion.span
                  className="text-sm lg:text-base font-poppins text-[#6A6A6A] ml-1"
                >
                  {stars} {t("Stars")}
                </motion.span>
              </motion.div>
            </motion.label>
          ))}
        </motion.div>
      </motion.div>

      {/* By Promotions & Availability */}
      {[
        { title: "By Promotions", options: ["New Arrivals", "Best Sellers", "On Sale"], type: 'promotion' },
        { title: "Availability", options: ["In Stock", "Out Of Stock"], type: 'availability' }
      ].map((group, groupIndex) => (
        <motion.div
          key={group.title}
          className="border-t border-[#DADADA] mt-6 pt-6 flex flex-col gap-4"
          variants={itemVariants}
          custom={groupIndex + 3}
        >
          <h5 className="text-lg lg:text-xl font-normal font-poppins text-black">{t(group.title)}</h5>
          <motion.div
            className="flex flex-col gap-3 ps-2"
            variants={containerVariants}
          >
            {group.options.map((opt, optIndex) => (
              <motion.label
                key={opt}
                className="flex items-center gap-3 cursor-pointer"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                custom={optIndex}
              >
                <Checkbox
                  checked={group.type === 'promotion' ? isPromotionSelected(opt) : isAvailabilitySelected(opt)}
                  onCheckedChange={() => group.type === 'promotion' ? togglePromotion(opt) : toggleAvailability(opt)}
                  className="w-5 h-5 border-[#DADADA] bg-transparent! data-[state=checked]:bg-primary! data-[state=checked]:border-primary!" />
                <motion.span
                  className="text-base lg:text-[18px] font-poppins font-light text-black"
                  whileHover={{ color: "#0066FF" }}
                >
                  {t(opt)}
                </motion.span>
              </motion.label>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </Accordion>
  );
};

export default function AllProductFilters() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="lg:hidden w-full mb-6">
        <Button 
            variant="outline" 
            onClick={() => setIsOpen(true)}
            className="w-full flex items-center justify-between py-6 rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all text-lg font-poppins"
        >
          <div className="flex items-center gap-2">
            <Filter size={20} />
            <span>{t("Filter Products")}</span>
          </div>
          <span className="text-sm font-light opacity-70">{t("Tap to Sort & Filter")}</span>
        </Button>

        <DragCloseDrawer open={isOpen} setOpen={setIsOpen}>
          <FilterContent />
        </DragCloseDrawer>
      </div>

      {/* Desktop Sidebar */}
      <motion.div
        className="hidden lg:block w-full max-w-[340px] pr-4 transition-all duration-300"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
      >
        <motion.p
          className="text-[22px] font-medium font-poppins pb-4 border-b border-[#DADADA] mb-2"
          variants={itemVariants}
        >
          {t("Filter Options")}
        </motion.p>
        <FilterContent />
      </motion.div>
    </>
  );
}