// "use client";
// import { AnimatePresence , motion } from 'framer-motion';
// import Link from 'next/link';
// import { X, ChevronDown, Heart, ShoppingCart, LogOut, User } from 'lucide-react';
// import MainLogo from '../../components/layout/Header/MainLogo/MainLogo';
// import { useTranslation } from 'react-i18next';
// import { useRouter } from 'next/navigation';
// import { useCurrentUser, logoutUser } from '@/hooks/auth/useCurrentUser';
// import { useCart } from '@/hooks/cart/useCart';
// import { useWishlist } from '@/hooks/wishlist/useWishlist';

// export default function Sidebar({ isScrolled, isSidebarOpen, setIsSidebarOpen, expandedItem, isActive, isChildren, isExpanded, toggleAccordion, header_links, pathname }) {
//   const { t } = useTranslation();
//   const router = useRouter();
//   const user = useCurrentUser();

//   const { data: wishlistData } = useWishlist(user?.user_id);
//   const { data: cartData } = useCart(user?.user_id);

//   const wishlistItems = Array.isArray(wishlistData?.data)
//     ? wishlistData.data
//     : wishlistData?.data?.items || [];
//   const cartItems = Array.isArray(cartData?.data)
//     ? cartData.data
//     : cartData?.data?.items || [];

//   const wishlistCount = wishlistItems.length;
//   const cartCount = cartItems.length;

//   const handleLogout = () => {
//     logoutUser();
//     setIsSidebarOpen(false);
//     router.push("/login");
//   };

//   return (
//     <AnimatePresence>
//       {isSidebarOpen && (
//         <>
//           {/* Backdrop */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setIsSidebarOpen(false)}
//             className="fixed inset-0 z-9998 bg-primary/30 backdrop-blur-sm xl:hidden"
//           />

//           {/* Sidebar Drawer */}
//           <motion.aside
//             initial={{ x: '100%' }}
//             animate={{ x: 0 }}
//             exit={{ x: '100%' }}
//             transition={{ type: 'spring', damping: 25, stiffness: 200 }}
//             className="fixed top-0 right-0 h-full w-full sm:w-[420px] z-9999 bg-white shadow-2xl flex flex-col xl:hidden"
//           >
//             {/* Header */}
//             <div className="flex items-center justify-between p-6 border-b border-gray-50 gap-4">
//               <div className='flex-1'>
//                 <MainLogo isSidebarOpen={isSidebarOpen} isScrolled={true} />
//               </div>

//               <div className="flex items-center gap-3">
//                 <Link href="/favorite" className="relative p-2 text-gray-500 hover:text-primary transition-colors">
//                   <Heart size={22} />
//                   {wishlistCount > 0 && (
//                     <span className="absolute top-0 right-0 bg-primary text-white text-[9px] font-bold min-w-[16px] h-4 rounded-full flex items-center justify-center border border-white">
//                       {wishlistCount}
//                     </span>
//                   )}
//                 </Link>
//                 <Link href="/cart" className="relative p-2 text-primary hover:opacity-80 transition-opacity">
//                   <ShoppingCart size={22} />
//                   {cartCount > 0 && (
//                     <span className="absolute top-0 right-0 bg-primary text-white text-[9px] font-bold min-w-[16px] h-4 rounded-full flex items-center justify-center border border-white">
//                       {cartCount}
//                     </span>
//                   )}
//                 </Link>
//                 <button
//                     onClick={() => setIsSidebarOpen(false)}
//                     className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-primary/10 hover:text-primary transition-all ml-2"
//                 >
//                     <X size={20} />
//                 </button>
//               </div>
//             </div>

//             {/* Scrollable Nav Area */}
//             <nav className="flex-1 overflow-y-auto px-2 py-6 space-y-2">
//               {header_links?.map((item, index) => {
//                 const isActive = pathname === item.path;
//                 const hasChildren = item.isChildren && item.children;
//                 const isExpanded = expandedItem === item.name;

//                 return (
//                   <div key={item.path} className="flex flex-col">
//                     <div className="flex items-center gap-2">
//                       <Link
//                         href={item.path}
//                         className={`flex-1 px-5 py-4 rounded-2xl text-lg font-medium transition-all ${isActive
//                           ? 'bg-primary text-white shadow-lg shadow-primary/20'
//                           : 'text-gray-700 hover:bg-gray-50'
//                           }`}
//                       >
//                         {t(item.name)}
//                       </Link>

//                       {hasChildren && (
//                         <button
//                           onClick={() => toggleAccordion(item.name)}
//                           className={`p-4 rounded-2xl transition-colors ${isExpanded ? 'bg-primary/10 text-primary' : 'bg-gray-50 text-gray-400'}`}
//                         >
//                           <ChevronDown size={20} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
//                         </button>
//                       )}
//                     </div>

//                     {/* Sub-menu Accordion */}
//                     <AnimatePresence>
//                       {hasChildren && isExpanded && (
//                         <motion.div
//                           initial={{ height: 0, opacity: 0 }}
//                           animate={{ height: 'auto', opacity: 1 }}
//                           exit={{ height: 0, opacity: 0 }}
//                           className="overflow-hidden bg-gray-50/50 rounded-2xl mt-2 ml-4 border-l-2 border-primary/20"
//                         >
//                           {item.children.map((child) => (
//                             <Link
//                               key={child.path}
//                               href={child.path}
//                               className={`flex items-center px-6 py-3.5 text-base transition-colors ${pathname === child.path ? 'text-primary font-bold' : 'text-gray-500 hover:text-primary'
//                                 }`}
//                             >
//                               {t(child.name)}
//                             </Link>
//                           ))}
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 );
//               })}
//             </nav>

//             {/* Footer Actions */}
//             <div className="p-6 bg-gray-50 border-t border-gray-100 flex flex-col gap-3">
//               {user ? (
//                 <>
//                   <div className="flex items-center gap-3 px-2 py-1 mb-1">
//                     <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-poppins font-semibold">
//                       {user?.name?.charAt(0).toUpperCase() || "U"}
//                     </div>
//                     <div className="flex flex-col">
//                       <span className="text-xs text-gray-500 font-poppins">{t("Welcome back")}</span>
//                       <span className="text-base font-semibold text-text font-poppins capitalize">{user?.name}</span>
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-2 gap-2">
//                     <Link href="/profile/settings" className="w-full">
//                       <button className="w-full py-2.5 rounded-xl text-xs font-poppins font-medium border border-primary/25 bg-white text-primary hover:bg-primary/5 transition-all cursor-pointer">
//                         {t("Settings")}
//                       </button>
//                     </Link>
//                     <Link href="/profile/bookings" className="w-full">
//                       <button className="w-full py-2.5 rounded-xl text-xs font-poppins font-medium border border-primary/25 bg-white text-primary hover:bg-primary/5 transition-all cursor-pointer">
//                         {t("My Bookings")}
//                       </button>
//                     </Link>
//                     <Link href="/profile/orders" className="w-full">
//                       <button className="w-full py-2.5 rounded-xl text-xs font-poppins font-medium border border-primary/25 bg-white text-primary hover:bg-primary/5 transition-all cursor-pointer">
//                         {t("My Orders")}
//                       </button>
//                     </Link>
//                     <Link href="/profile/wishlist" className="w-full">
//                       <button className="w-full py-2.5 rounded-xl text-xs font-poppins font-medium border border-primary/25 bg-white text-primary hover:bg-primary/5 transition-all cursor-pointer">
//                         {t("My Wishlist")}
//                       </button>
//                     </Link>
//                   </div>

//                   <Link href="/booking" className="w-full mt-1">
//                     <button className="w-full py-3.5 rounded-2xl bg-primary text-white font-poppins text-sm font-medium shadow-lg shadow-primary/25 hover:brightness-110 transition-all cursor-pointer">
//                       {t("Booking Now")}
//                     </button>
//                   </Link>

//                   <button
//                     onClick={handleLogout}
//                     className="w-full py-3 rounded-2xl text-red-500 font-poppins text-sm font-medium hover:bg-red-50 transition-all cursor-pointer flex items-center justify-center gap-2 border border-red-200 mt-1 bg-white"
//                   >
//                     <LogOut size={16} />
//                     <span>{t("Logout")}</span>
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   <div className="flex gap-2">
//                     <Link href="/login" className="flex-1">
//                       <button className="w-full py-3.5 rounded-2xl text-primary font-poppins text-sm font-medium border border-primary/20 bg-white hover:bg-primary/5 transition-all cursor-pointer">
//                         {t("Sign In")}
//                       </button>
//                     </Link>
//                     <Link href="/signup" className="flex-1">
//                       <button className="w-full py-3.5 rounded-2xl text-primary font-poppins text-sm font-medium border border-primary/20 bg-white hover:bg-primary/5 transition-all cursor-pointer">
//                         {t("Sign Up")}
//                       </button>
//                     </Link>
//                   </div>
//                   <Link href="/booking" className="w-full">
//                     <button className="w-full py-4 rounded-2xl bg-primary text-white font-poppins text-sm font-medium shadow-lg shadow-primary/25 hover:brightness-110 transition-all cursor-pointer">
//                       {t("Booking Now")}
//                     </button>
//                   </Link>
//                 </>
//               )}
//             </div>
//           </motion.aside>
//         </>
//       )}
//     </AnimatePresence>
//   );
// }

"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import {
  X,
  ChevronDown,
  Heart,
  ShoppingCart,
  LogOut,
  Settings,
  Calendar,
  Package,
  Heart as HeartFilled,
  CreditCard,
} from "lucide-react";
import MainLogo from "../../components/layout/Header/MainLogo/MainLogo";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { useCurrentUser, logoutUser } from "@/hooks/auth/useCurrentUser";
import { useCart } from "@/hooks/cart/useCart";
import { useWishlist } from "@/hooks/wishlist/useWishlist";

export default function Sidebar({
  isScrolled,
  isSidebarOpen,
  setIsSidebarOpen,
  expandedItem,
  isActive,
  isChildren,
  isExpanded,
  toggleAccordion,
  header_links,
  pathname,
}) {
  const { t } = useTranslation();
  const router = useRouter();
  const user = useCurrentUser();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const { data: wishlistData } = useWishlist(user?.user_id);
  const { data: cartData } = useCart(user?.user_id);

  const wishlistItems = Array.isArray(wishlistData?.data)
    ? wishlistData.data
    : wishlistData?.data?.items || [];
  const cartItems = Array.isArray(cartData?.data)
    ? cartData.data
    : cartData?.data?.items || [];

  const wishlistCount = wishlistItems.length;
  const cartCount = cartItems.length;

  const handleLogout = () => {
    logoutUser();
    setIsSidebarOpen(false);
    router.push("/login");
  };

  return (
    <AnimatePresence>
      {isSidebarOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 z-[99998] bg-primary/30 backdrop-blur-sm xl:hidden"
          />

          {/* Sidebar Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[380px] max-w-full z-[99999] bg-white shadow-2xl flex flex-col xl:hidden overflow-x-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-2 p-4 border-b border-gray-50">
              <div className="min-w-0 flex-1 [&_img]:max-w-[130px] [&_svg]:max-w-[130px]">
                <MainLogo isSidebarOpen={isSidebarOpen} isScrolled={true} />
              </div>

              <div className="flex items-center gap-1 flex-shrink-0">
                <Link
                  href="/favorite"
                  className="relative p-2 text-gray-500 hover:text-primary transition-colors"
                >
                  <Heart size={20} />
                  {wishlistCount > 0 && (
                    <span className="absolute top-0.5 right-0.5 bg-primary text-white text-[9px] font-bold min-w-[15px] h-[15px] rounded-full flex items-center justify-center border border-white">
                      {wishlistCount}
                    </span>
                  )}
                </Link>
                <Link
                  href="/cart"
                  className="relative p-2 text-primary hover:opacity-80 transition-opacity"
                >
                  <ShoppingCart size={20} />
                  {cartCount > 0 && (
                    <span className="absolute top-0.5 right-0.5 bg-primary text-white text-[9px] font-bold min-w-[15px] h-[15px] rounded-full flex items-center justify-center border border-white">
                      {cartCount}
                    </span>
                  )}
                </Link>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-primary/10 hover:text-primary transition-all ml-1 flex-shrink-0"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Profile Dropdown (only when logged in) */}
            {user && (
              <div className="border-b border-gray-100 bg-gray-50/70">
                <button
                  onClick={() => setIsProfileOpen((prev) => !prev)}
                  className="w-full flex items-center gap-3 px-4 py-3 text-left"
                >
                  <div className="w-9 h-9 flex-shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center font-poppins font-semibold text-sm">
                    {user?.name?.charAt(0).toUpperCase() || "U"}
                  </div>
                  <div className="flex flex-col min-w-0 leading-tight flex-1">
                    <span className="text-[11px] text-gray-500 font-poppins">
                      {t("Welcome back")}
                    </span>
                    <span className="text-sm font-semibold text-text font-poppins capitalize truncate">
                      {user?.name}
                    </span>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`text-gray-400 flex-shrink-0 transition-transform duration-300 ${isProfileOpen ? "rotate-180 text-primary" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {isProfileOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-3 flex font-poppins! flex-col gap-1">
                        <Link
                          href="/profile/settings"
                          onClick={() => setIsSidebarOpen(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-white transition-colors"
                        >
                          <Settings
                            size={16}
                            className="text-primary flex-shrink-0"
                          />
                          {t("Settings")}
                        </Link>
                        <Link
                          href="/profile/bookings"
                          onClick={() => setIsSidebarOpen(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-white transition-colors"
                        >
                          <Calendar
                            size={16}
                            className="text-primary flex-shrink-0"
                          />
                          {t("My Bookings")}
                        </Link>
                        <Link
                          href="/profile/subscriptions"
                          onClick={() => setIsSidebarOpen(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-white transition-colors"
                        >
                          <CreditCard
                            size={16}
                            className="text-primary flex-shrink-0"
                          />
                          {t("My Subscriptions")}
                        </Link>
                        <Link
                          href="/profile/orders"
                          onClick={() => setIsSidebarOpen(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-white transition-colors"
                        >
                          <Package
                            size={16}
                            className="text-primary flex-shrink-0"
                          />
                          {t("My Orders")}
                        </Link>
                        <Link
                          href="/profile/wishlist"
                          onClick={() => setIsSidebarOpen(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-white transition-colors"
                        >
                          <HeartFilled
                            size={16}
                            className="text-primary flex-shrink-0"
                          />
                          {t("My Wishlist")}
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-red-500 hover:bg-red-50 transition-colors mt-1 border-t border-gray-100 pt-3"
                        >
                          <LogOut size={16} className="flex-shrink-0" />
                          {t("Logout")}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Scrollable Nav Area */}
            <nav className="flex-1 overflow-y-auto overflow-x-hidden px-2 py-4 space-y-1.5">
              {header_links?.map((item, index) => {
                const isActive = pathname === item.path;
                const hasChildren = item.isChildren && item.children;
                const isExpanded = expandedItem === item.name;

                return (
                  <div key={item.path} className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <Link
                        href={item.path}
                        className={`flex-1 min-w-0 px-4 py-3 rounded-xl text-base font-medium transition-all truncate ${
                          isActive
                            ? "bg-primary text-white shadow-lg shadow-primary/20"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {t(item.name)}
                      </Link>

                      {hasChildren && (
                        <button
                          onClick={() => toggleAccordion(item.name)}
                          className={`p-3 rounded-xl transition-colors flex-shrink-0 ${isExpanded ? "bg-primary/10 text-primary" : "bg-gray-50 text-gray-400"}`}
                        >
                          <ChevronDown
                            size={18}
                            className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Sub-menu Accordion */}
                    <AnimatePresence>
                      {hasChildren && isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden bg-gray-50/50 rounded-xl mt-1.5 ml-3 border-l-2 border-primary/20"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.path}
                              href={child.path}
                              className={`flex items-center px-5 py-3 text-sm transition-colors truncate ${
                                pathname === child.path
                                  ? "text-primary font-bold"
                                  : "text-gray-500 hover:text-primary"
                              }`}
                            >
                              {t(child.name)}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            {/* Footer Actions */}
            <div
              className="p-4 pb-6 bg-gray-50 border-t border-gray-100 flex flex-col gap-2"
              style={{
                paddingBottom:
                  "calc(1.5rem + env(safe-area-inset-bottom, 0px))",
              }}
            >
              {user ? (
                <Link href="/booking" className="w-full">
                  <button className="w-full py-3 rounded-xl bg-primary text-white font-poppins text-sm font-medium shadow-lg shadow-primary/25 hover:brightness-110 transition-all cursor-pointer">
                    {t("Booking Now")}
                  </button>
                </Link>
              ) : (
                <>
                  <div className="flex gap-2">
                    <Link href="/login" className="flex-1">
                      <button className="w-full py-3 rounded-xl text-primary font-poppins text-sm font-medium border border-primary/20 bg-white hover:bg-primary/5 transition-all cursor-pointer">
                        {t("Sign In")}
                      </button>
                    </Link>
                    <Link href="/signup" className="flex-1">
                      <button className="w-full py-3 rounded-xl text-primary font-poppins text-sm font-medium border border-primary/20 bg-white hover:bg-primary/5 transition-all cursor-pointer">
                        {t("Sign Up")}
                      </button>
                    </Link>
                  </div>
                  <Link href="/booking" className="w-full">
                    <button className="w-full py-3.5 rounded-xl bg-primary text-white font-poppins text-sm font-medium shadow-lg shadow-primary/25 hover:brightness-110 transition-all cursor-pointer">
                      {t("Booking Now")}
                    </button>
                  </Link>
                </>
              )}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
