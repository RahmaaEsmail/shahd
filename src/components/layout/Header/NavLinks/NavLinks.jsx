"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState , useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { header_links } from '../../../../data/HeaderData';
import { useTranslation } from 'react-i18next';

const itemVariants = {
  hidden: { y: -10, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

const dropdownVariants = {
  hidden: { 
    opacity: 0, 
    y: -10,
    scale: 0.95,
    transition: { duration: 0.2 }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: { duration: 0.2 }
  }
};

export default function NavLinks() {
  const { t , i18n} = useTranslation();
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
   
  const de_lang = i18n?.language == "de";

  return (
    <motion.nav 
      className="bg-light-primary px-2  py-3 border border-primary rounded-full flex items-center gap-1"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5, type: "spring", stiffness: 100 }}
    >
      {header_links?.map((item, index) => {
        const isActive = item?.path === '/' 
          ? pathname === '/' 
          : pathname === item?.path || pathname.startsWith(`${item?.path}/`);

        const hasChildren = item?.isChildren;
        // const isHovered = hoveredIndex === index;
        const isDropdownOpen = openDropdown === index;

        return (
          <motion.div
            key={item?.path || index}
            className="relative"
            custom={index}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            onMouseEnter={() => {
              setHoveredIndex(index);
              if (hasChildren) setOpenDropdown(index);
            }}
            onMouseLeave={() => {
              setHoveredIndex(null);
              setOpenDropdown(null);
            }}
          >
            <Link href={item?.path}>
              <motion.div
                className={`relative px-2 font-poppins py-2 flex items-center gap-1 ${i18n?.language == "de" ? "text-sm!" : "text-sm!"}    capitalize rounded-full transition-colors ${
                  isActive ? "text-white!" : "text-black!"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Animated background */}
                <AnimatePresence>
                  {(isActive) && (
                    <motion.div
                      layoutId="navBackground"
                      className={`absolute inset-0 rounded-full ${isActive ? 'bg-primary!' : 'bg-primary/10'}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </AnimatePresence>
                
                <span className="relative whitespace-nowrap text-md font-poppins capitalize z-10">{t(item?.name)}</span>
                
                {hasChildren && (
                  <motion.span
                    className="relative z-10"
                    animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={16} strokeWidth={2.5} />
                  </motion.span>
                )}
              </motion.div>
            </Link>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {hasChildren && isDropdownOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                >
                  {item?.children?.map((child, childIndex) => (
                    <motion.div
                      key={child?.path}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: childIndex * 0.05 }}
                    >
                      <Link href={child?.path}>
                        <motion.div
                          className="px-2 py-3 text-sm font-poppins text-gray-700 hover:bg-light-primary hover:text-primary transition-colors"
                          whileHover={{ x: 4 }}
                        >
                          {t(child?.name)}
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </motion.nav>
  );
}
