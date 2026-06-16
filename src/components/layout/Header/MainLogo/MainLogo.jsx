"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

// Define logo variants for different states
// const LOGO_VARIANTS = {
//   default: '/SHAHD-IMAGE/horizontal logo 1.webp',
//   dark: '/SHAHD-IMAGE/horizontal logo 2.webp',
//   light: '/SHAHD-IMAGE/horizontal logo 4.webp',
// };

const LOGO_VARIANTS = {
  default: '/SHAHD-IMAGE/6 (1).webp',
  dark: '/SHAHD-IMAGE/7.webp',
  light: '/SHAHD-IMAGE/7.webp',
};

// Define which paths use which logo variant
const PATH_LOGO_MAPPING = {
  light: ['products'],
  dark: ['horse',"contact-us", 'service', 'shop', 'cart', 'coaching', 'hair-therapy', 'weight-management' , 'blogs',"favorite"],
};

export default function MainLogo({ isScrolled, isSidebarOpen }) {
  const pathname = usePathname();

  // Determine which logo to show based on path and scroll state
  const logoSrc = useMemo(() => {
    // If scrolled or on homepage, show default logo
    if (pathname === '/') {
      return LOGO_VARIANTS.default;
    }

    if (isScrolled) {
      return LOGO_VARIANTS.light;
    }

    // Check for light logo paths
    if (PATH_LOGO_MAPPING.light.some(path => pathname.includes(path))) {
      return LOGO_VARIANTS.light;
    }

    // Check for dark logo paths
    if (PATH_LOGO_MAPPING.dark.some(path => pathname.includes(path))) {
      return LOGO_VARIANTS.dark;
    }

    // Default fallback
    return LOGO_VARIANTS.default;
  }, [pathname, isScrolled]);

  // Animation variants
  const logoAnimation = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring", stiffness: 400, damping: 17 }
  };

  return (
    <Link href="/" className="block" aria-label="Go to homepage">
      <motion.div {...logoAnimation} className='w-[230px]  py-3'>
        <Image
          src={logoSrc}
          width={260}
          height={64}
          alt="Shahd Awad Logo"
          className={` ${isSidebarOpen ? 'w-[80%] h-auto md:w-[80%]' : 'w-[200px] sm:w-[230px]'} object-contain priority
 ps-3 lg:ps-0 md:h-[80px] aspect-auto md:aspect-4/5  lg:object-contain max-[1409px]:w-[260px] max-[1409px]:h-[70px]`} // Combined and cleaned up responsive sizing
          priority
          quality={95}
        />
      </motion.div>
    </Link>
  );
}