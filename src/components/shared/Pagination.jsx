"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

// Animation variants
const buttonVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.1,
    transition: { duration: 0.2 }
  },
  tap: { 
    scale: 0.95,
    transition: { duration: 0.1 }
  }
};

const pageNumberVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  },
  exit: { 
    opacity: 0, 
    y: -10,
    transition: { duration: 0.2 }
  },
  hover: { 
    scale: 1.1,
    backgroundColor: "rgba(221, 178, 181, 0.1)",
    transition: { duration: 0.2 }
  }
};

const ellipsisVariants = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30
    }
  }
};

export default function Pagination({ 
  currentPage, 
  totalPages, 
  onPageChange,
  maxVisible = 5,
  showFirstLast = false,
  size = 'default' // 'small' | 'default' | 'large'
}) {
  // Size classes
  const sizeClasses = {
    small: {
      button: 'w-8 h-8 text-sm',
      navButton: 'px-3 py-1 text-sm',
      icon: 'w-4 h-4'
    },
    default: {
      button: 'w-10 h-10 text-base',
      navButton: 'px-4 py-2 text-base',
      icon: 'w-5 h-5'
    },
    large: {
      button: 'w-12 h-12 text-lg',
      navButton: 'px-6 py-3 text-lg',
      icon: 'w-6 h-6'
    }
  };

  const classes = sizeClasses[size];

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);
    
    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const pageNumbers = getPageNumbers();
  const showLeftEllipsis = pageNumbers[0] > 1;
  const showRightEllipsis = pageNumbers[pageNumbers.length - 1] < totalPages;

  return (
    <nav className="flex justify-center items-center gap-2 mt-16 flex-wrap" aria-label="Pagination">
      {/* Previous Button */}
      <motion.button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${classes.navButton} rounded-full border border-[#DADADA] text-[#555] transition-colors flex items-center gap-1 ${
          currentPage === 1 
            ? 'opacity-50 cursor-not-allowed' 
            : 'hover:border-primary hover:bg-primary hover:text-white'
        }`}
        variants={buttonVariants}
        initial="initial"
        whileHover={currentPage !== 1 ? "hover" : {}}
        whileTap={currentPage !== 1 ? "tap" : {}}
        aria-label="Previous page"
      >
        <ChevronLeft className={classes.icon} />
        <span className="hidden sm:inline">Previous</span>
      </motion.button>

      {/* First page if needed */}
      {showFirstLast && showLeftEllipsis && (
        <>
          <motion.button
            onClick={() => onPageChange(1)}
            className={`${classes.button} rounded-full border border-[#DADADA] text-[#555] hover:border-primary hover:bg-primary hover:text-white transition-colors`}
            variants={pageNumberVariants}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            whileTap="tap"
            aria-label="Page 1"
          >
            1
          </motion.button>
          {showLeftEllipsis && (
            <motion.span 
              className="text-[#555]"
              variants={ellipsisVariants}
              initial="initial"
              animate="animate"
            >
              <MoreHorizontal className="w-5 h-5" />
            </motion.span>
          )}
        </>
      )}

      {/* Page Numbers */}
      <AnimatePresence mode="popLayout">
        {pageNumbers.map((page) => (
          <motion.button
            key={page}
            onClick={() => onPageChange(page)}
            className={`${classes.button} rounded-full flex justify-center items-center transition-colors ${
              currentPage == page
                ? 'border border-primary bg-primary! text-white'
                : 'border border-[#DADADA] text-[#555] hover:border-primary hover:bg-primary hover:text-white'
            }`}
            variants={pageNumberVariants}
            initial="initial"
            whileInView="animate"
            exit="exit"
            whileHover="hover"
            whileTap="tap"
            layout
            aria-label={`Page ${page}`}
            aria-current={currentPage === page ? 'page' : undefined}
          >
            {page}
          </motion.button>
        ))}
      </AnimatePresence>

      {/* Last page if needed */}
      {showFirstLast && showRightEllipsis && (
        <>
          {showRightEllipsis && (
            <motion.span 
              className="text-[#555]"
              variants={ellipsisVariants}
              initial="initial"
              animate="animate"
            >
              <MoreHorizontal className="w-5 h-5" />
            </motion.span>
          )}
          <motion.button
            onClick={() => onPageChange(totalPages)}
            className={`${classes.button} rounded-full border border-[#DADADA] text-[#555] hover:border-primary hover:bg-primary hover:text-white transition-colors`}
            variants={pageNumberVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            aria-label={`Page ${totalPages}`}
          >
            {totalPages}
          </motion.button>
        </>
      )}

      {/* Next Button */}
      <motion.button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${classes.navButton} rounded-full border border-[#DADADA] text-[#555] transition-colors flex items-center gap-1 ${
          currentPage === totalPages
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:border-primary hover:bg-primary hover:text-white'
        }`}
        variants={buttonVariants}
        initial="initial"
        whileHover={currentPage !== totalPages ? "hover" : {}}
        whileTap={currentPage !== totalPages ? "tap" : {}}
        aria-label="Next page"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className={classes.icon} />
      </motion.button>
    </nav>
  );
}