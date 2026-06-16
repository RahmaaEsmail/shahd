// "use client";

// import { motion, AnimatePresence } from 'framer-motion';
// import { useState, useEffect } from 'react';
// import MainLogo from '../../components/layout/Header/MainLogo/MainLogo';
// import NavLinks from '../../components/layout/Header/NavLinks/NavLinks';
// import AuthButtons from '../../components/layout/Header/AuthButtons/AuthButtons';
// import { usePathname } from 'next/navigation';
// import { Menu, X, ChevronRight } from 'lucide-react';
// import Link from 'next/link';
// import { header_links } from '../../data/HeaderData';

// export default function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const pathname = usePathname();

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     if (typeof window !== 'undefined') {
//       window.addEventListener('scroll', handleScroll);
//     }
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close sidebar on route change
//   useEffect(() => {
//     setIsSidebarOpen(false);
//   }, [pathname]);

//   // Lock body scroll when sidebar is open
//   useEffect(() => {
//     document.body.style.overflow = isSidebarOpen ? 'hidden' : 'unset';
//     return () => { document.body.style.overflow = 'unset'; };
//   }, [isSidebarOpen]);

//   return (
//     <>
//       <motion.header
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//         className={`${pathname == "/book/buy-book" ? "absolute" : "fixed"} top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
//           isScrolled ? 'bg-primary/20 backdrop-blur-md shadow-sm' : 'bg-transparent'
//         }`}
//       >
//         <div className="main-container mx-auto">
//           <motion.div
//             className="flex items-center justify-between py-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2, duration: 0.4 }}
//           >
//             {/* Logo */}
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ delay: 0.3, duration: 0.5, type: "spring", stiffness: 100 }}
//             >
//               <MainLogo isScrolled={isScrolled} />
//             </motion.div>

//             {/* Desktop Navigation Links */}
//             <motion.div
//               initial={{ y: -20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.4, duration: 0.5 }}
//               className="hidden lg:block"
//             >
//               <NavLinks />
//             </motion.div>

//             {/* Desktop Auth Buttons */}
//             <motion.div
//               className="hidden lg:flex items-center gap-3"
//               initial={{ x: 20, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ delay: 0.5, duration: 0.5 }}
//             >
//               <AuthButtons isScrolled={isScrolled} />
//             </motion.div>

//             {/* Mobile Hamburger Button */}
//             <motion.button
//               whileTap={{ scale: 0.9 }}
//               onClick={() => setIsSidebarOpen(true)}
//               className="bg-primary w-[50px] h-[50px] lg:hidden flex rounded-[14px] justify-center items-center"
//             >
//               <Menu className="text-white" size={24} />
//             </motion.button>
//           </motion.div>
//         </div>
//       </motion.header>

//       {/* Sidebar Overlay + Drawer */}
//       <AnimatePresence>
//         {isSidebarOpen && (
//           <>
//             {/* Backdrop */}
//             <motion.div
//               key="backdrop"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               onClick={() => setIsSidebarOpen(false)}
//               className="fixed inset-0 z-[99998] bg-black/40 backdrop-blur-sm lg:hidden"
//             />

//             {/* Sidebar Drawer */}
//             <motion.aside
//               key="sidebar"
//               initial={{ x: '100%' }}
//               animate={{ x: 0 }}
//               exit={{ x: '100%' }}
//               transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//               className="fixed top-0 right-0 h-full w-[500px] z-[9999999] bg-white shadow-2xl flex flex-col lg:hidden overflow-y-auto"
//             >
//               {/* Sidebar Header */}
//               <div className="flex items-center justify-between p-5 border-b border-primary/10">
//                 <MainLogo isScrolled={true} />
//                 <motion.button
//                   whileTap={{ scale: 0.9 }}
//                   onClick={() => setIsSidebarOpen(false)}
//                   className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
//                 >
//                   <X size={20} />
//                 </motion.button>
//               </div>

//               {/* Navigation Links */}
//               <nav className="flex flex-col gap-1 p-4 flex-1">
//                 {header_links?.map((item, index) => {
//                   const isActive = pathname === item.path;
//                   return (
//                     <motion.div
//                       key={item.path}
//                       initial={{ x: 30, opacity: 0 }}
//                       animate={{ x: 0, opacity: 1 }}
//                       transition={{ delay: index * 0.05, duration: 0.3 }}
//                     >
//                       <Link
//                         href={item.path}
//                         className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-lg font-medium tracking-wide transition-all duration-200 ${
//                           isActive
//                             ? 'bg-primary text-white shadow-md shadow-primary/25'
//                             : 'text-gray-700 hover:bg-primary/8 hover:text-primary'
//                         }`}
//                       >
//                         <span>{item.name}</span>
//                         <ChevronRight
//                           size={18}
//                           className={isActive ? 'text-white' : 'text-primary/40'}
//                         />
//                       </Link>

//                       {/* Sub-links for items with children */}
//                       {item.isChildren && item.children && (
//                         <div className="ml-4 mt-1 flex flex-col gap-1">
//                           {item.children.map((child) => (
//                             <Link
//                               key={child.path}
//                               href={child.path}
//                               className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-base transition-all duration-200 ${
//                                 pathname === child.path
//                                   ? 'text-primary font-semibold'
//                                   : 'text-gray-500 hover:text-primary'
//                               }`}
//                             >
//                               <span className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
//                               {child.name}
//                             </Link>
//                           ))}
//                         </div>
//                       )}
//                     </motion.div>
//                   );
//                 })}
//               </nav>

//               {/* Auth Buttons */}
//               <motion.div
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.35 }}
//                 className="p-4 border-t border-primary/10 flex flex-col gap-3"
//               >
//                 <Link href="/sign-up" className="w-full">
//                   <button className="w-full py-3.5 rounded-2xl text-base font-medium uppercase tracking-widest text-primary border-2 border-primary/30 hover:bg-primary/5 transition-all">
//                     Sign Up
//                   </button>
//                 </Link>
//                 <Link href="/booking" className="w-full">
//                   <button className="w-full py-3.5 rounded-2xl text-base font-medium uppercase tracking-widest bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all">
//                     Booking
//                   </button>
//                 </Link>
//               </motion.div>
//             </motion.aside>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }


"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import MainLogo from '../../components/layout/Header/MainLogo/MainLogo';
import NavLinks from '../../components/layout/Header/NavLinks/NavLinks';
import AuthButtons from '../../components/layout/Header/AuthButtons/AuthButtons';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { header_links } from '../../data/HeaderData';
import Sidebar from '../Sidebar/Sidebar';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null); // Accordion state
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? 'hidden' : 'unset';
  }, [isSidebarOpen]);

  const toggleAccordion = (name) => {
    setExpandedItem(expandedItem === name ? null : name);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`${pathname === "/book/buy-book" ? "absolute" : "fixed"}
         top-0 left-0 right-0 z-9999 transition-all duration-300 
         ${isScrolled ? 'bg-primary/60 backdrop-blur-lg shadow-sm' : 'bg-transparent'
          }`}
      >
        <div className="main-container mx-auto px-4">
          <div className="flex items-center  gap-1 justify-between">
            {/* Logo - Scale down slightly on mobile to save space */}
            <div className="scale-90 sm:scale-100 origin-left">
              <MainLogo isScrolled={isScrolled} />
            </div>

            {/* Desktop Nav */}
            <div className="hidden xl:block">
              <NavLinks />
            </div>

            {/* Desktop Auth */}
            <div className="hidden xl:flex items-center gap-3">
              <AuthButtons isScrolled={isScrolled} />
            </div>

            {/* Mobile Trigger */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsSidebarOpen(true)}
              className="bg-primary w-12 h-12 xl:hidden flex rounded-xl justify-center items-center shadow-lg shadow-primary/20"
            >
              <Menu className="text-white" size={22} />
            </motion.button>
          </div>
        </div>
      </motion.header>

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        expandedItem={expandedItem}
        setExpandedItem={setExpandedItem}
        header_links={header_links}
        pathname={pathname}
        toggleAccordion={toggleAccordion}
      />
    </>
  );
}