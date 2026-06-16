"use client";
import { AnimatePresence , motion } from 'framer-motion';
import Link from 'next/link';
import { X, ChevronDown, Search, Heart, ShoppingCart } from 'lucide-react';
import MainLogo from '../../components/layout/Header/MainLogo/MainLogo';
import { useTranslation } from 'react-i18next';

export default function Sidebar({ isScrolled, isSidebarOpen, setIsSidebarOpen, expandedItem, isActive, isChildren, isExpanded, toggleAccordion, header_links, pathname }) {
  const { t } = useTranslation();
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
            className="fixed inset-0 z-9998 bg-primary/30 backdrop-blur-sm xl:hidden"
          />

          {/* Sidebar Drawer */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[420px] z-9999 bg-white shadow-2xl flex flex-col xl:hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-50 gap-4">
              <div className='flex-1'>
                <MainLogo isSidebarOpen={isSidebarOpen} isScrolled={true} />
              </div>
              
              <div className="flex items-center gap-3">
               
                <Link href="/favorite" className="p-2 text-gray-500 hover:text-primary transition-colors">
                  <Heart size={22} />
                </Link>
                <Link href="/cart" className="p-2 text-primary hover:opacity-80 transition-opacity">
                  <ShoppingCart size={22} />
                </Link>
                <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-primary/10 hover:text-primary transition-all ml-2"
                >
                    <X size={20} />
                </button>
              </div>
            </div>

            {/* Scrollable Nav Area */}
            <nav className="flex-1 overflow-y-auto px-2 py-6 space-y-2">
              {header_links?.map((item, index) => {
                const isActive = pathname === item.path;
                const hasChildren = item.isChildren && item.children;
                const isExpanded = expandedItem === item.name;

                return (
                  <div key={item.path} className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <Link
                        href={item.path}
                        className={`flex-1 px-5 py-4 rounded-2xl text-lg font-medium transition-all ${isActive
                          ? 'bg-primary text-white shadow-lg shadow-primary/20'
                          : 'text-gray-700 hover:bg-gray-50'
                          }`}
                      >
                        {t(item.name)}
                      </Link>

                      {hasChildren && (
                        <button
                          onClick={() => toggleAccordion(item.name)}
                          className={`p-4 rounded-2xl transition-colors ${isExpanded ? 'bg-primary/10 text-primary' : 'bg-gray-50 text-gray-400'}`}
                        >
                          <ChevronDown size={20} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </div>

                    {/* Sub-menu Accordion */}
                    <AnimatePresence>
                      {hasChildren && isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden bg-gray-50/50 rounded-2xl mt-2 ml-4 border-l-2 border-primary/20"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.path}
                              href={child.path}
                              className={`flex items-center px-6 py-3.5 text-base transition-colors ${pathname === child.path ? 'text-primary font-bold' : 'text-gray-500 hover:text-primary'
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
            <div className="p-6 bg-gray-50 border-t border-gray-100 flex flex-col gap-3">
              <Link href="/signup" className="w-full">
                <button className="w-full py-4 rounded-2xl text-primary font-normal border-2 border-primary/20 bg-white hover:bg-primary/5 transition-all">
                  {t("Sign Up")}
                </button>
              </Link>
              <Link href="/booking" className="w-full">
                <button className="w-full py-4 rounded-2xl bg-primary text-white font-normal shadow-lg shadow-primary/25 hover:brightness-110 transition-all">
                  {t("Booking")}
                </button>
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
