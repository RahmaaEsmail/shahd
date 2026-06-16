// "use client";
// import React, { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion';
// import StoreProductsHeader from './StoreProductsHeader';
// import StoreProductsGrid from './StoreProductsGrid';
// import { useRouter } from 'next/navigation';

// // Animation variants
// const sectionVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       duration: 0.6,
//       when: "beforeChildren",
//       staggerChildren: 0.2
//     }
//   }
// };

// const buttonVariants = {
//   initial : {
//     opacity: 0,
//     y: 20,
//   },
//   animate : {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: "spring",
//       stiffness: 100,
//       damping: 15,
//       mass: 1
//     }
//   },
//   hover: {
//     scale: 1.05,
//     boxShadow: "0px 8px 20px rgba(221, 178, 181, 0.4)",
//     transition: {
//       type: "spring",
//       stiffness: 400,
//       damping: 10
//     }
//   },
//   tap: {
//     scale: 0.95
//   }
// };

// const overlayVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { duration: 0.8 }
//   }
// };

// export default function StoreProducts() {
//   const [activeTab, setActiveTab] = useState(1);
//   const router = useRouter();
//   return (
//     <motion.section
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: false, amount: 0.3 }}
//       variants={sectionVariants}
//       style={{
//         backgroundImage: "url('/SHAHD-IMAGE/store/Desktop - 20.webp')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         width: "100%",
//         // minHeight: "100vh",
//       }}
//       className='relative min-h-[120vh]'
//     >
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false, amount: 0.3 }}
//         variants={overlayVariants}
//         className='absolute inset-0 min-h-screen w-full pb-6'
//         style={{
//           background: "linear-gradient(180deg, rgba(255, 255, 255, 0.79) 0%, rgba(221, 178, 181, 0.79) 50%, rgba(255, 255, 255, 0.79) 100%)"
//         }}
//       >
//         <div className="container absolute z-10 mx-auto px-4 py-12">
//           <StoreProductsHeader setActiveTab={setActiveTab} activeTab={activeTab} />
//           {/* <AnimatePresence mode="wait"> */}
//             <StoreProductsGrid key={activeTab} activeTab={activeTab} />
//             <motion.button
//               variants={buttonVariants}
//               onClick={() => router.push('/products')}
//               initial="initial"
//               whileInView="animate"
//               viewport={{ once: false, amount: 0.3 }}
//               whileHover="hover"  
//               whileTap="tap"
//               className="w-full mt-10 lg:w-[189px] h-[44px] lg:h-[52px] rounded-full text-white flex justify-center items-center text-lg lg:text-2xl font-normal bg-linear-to-r from-[#DDB2B5] to-[#EFD4CE] hover:shadow-lg active:scale-95 transition-all duration-300 mx-auto"
//             >
//               See more
//             </motion.button>
//           {/* </AnimatePresence> */}
//         </div>
//       </motion.div>
//     </motion.section>
//   )
// }


"use client";
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import StoreProductsHeader from './StoreProductsHeader';
import StoreProductsGrid from './StoreProductsGrid';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export default function StoreProducts() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(1);
  const router = useRouter();
  
  return (
    <section
      style={{
        backgroundImage: "url('/SHAHD-IMAGE/Store/Desktop - 20.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      className='relative w-full min-h-screen'
    >
      {/* Overlay Layer */}
      <div 
        className='absolute inset-0 w-full h-full'
        style={{
          background: "linear-gradient(180deg, rgba(255, 255, 255, 0.79) 0%, rgba(221, 178, 181, 0.79) 50%, rgba(255, 255, 255, 0.79) 100%)"
        }}
      />
      
      {/* Content Container - Centered with flex */}
      <div className="relative z-10 w-full h-full">
        <div className="main-container mx-auto px-4 py-4 flex flex-col items-center min-h-full">
          <StoreProductsHeader setActiveTab={setActiveTab} activeTab={activeTab} />
          
          <AnimatePresence mode="wait">
            <StoreProductsGrid key={activeTab} activeTab={activeTab} />
          </AnimatePresence>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, type: "spring" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/products')}
            className="mt-12 w-full lg:w-[189px] h-[44px] rounded-full text-white flex justify-center items-center text-lg   font-normal bg-gradient-to-r from-[#DDB2B5] to-[#EFD4CE] hover:shadow-lg active:scale-95 transition-all duration-300 mx-auto"
          >
            {t("See more")}
          </motion.button>
        </div>
      </div>
    </section>
  )
}