"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

import { blogsData } from '@/data/blogs';
import Link from 'next/link';

const categories = ["All", "Aesthetics", "Skincare", "Wellness", "Laser", "Tips", "Education", "Guide"];

export default function BlogsMain() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs = activeCategory === "All" 
    ? blogsData 
    : blogsData.filter(blog => blog.category === activeCategory);

  return (
    <div className="bg-[#FFF9F7] py-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 border",
                activeCategory === cat 
                  ? "bg-[#DDB2B5] text-white border-[#DDB2B5] shadow-lg" 
                  : "bg-white text-gray-500 border-gray-100 hover:border-[#DDB2B5]/50"
              )}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Blogs Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-40">
            <p className="text-gray-400 font-poppins italic">No blogs found in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function BlogCard({ blog }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -10 }}
      className="group bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-50 flex flex-col h-full"
    >
      <Link href={`/blogs/${blog.id}`} className="block">
        {/* Image Container */}
        <div className="relative h-[280px] w-full overflow-hidden">
          <Image
            src={blog.img}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-[#DDB2B5] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
              {blog.category}
            </span>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <p className="text-[#7189A2] text-xs font-semibold uppercase tracking-wider mb-3">
          {blog.date}
        </p>
        <Link href={`/blogs/${blog.id}`}>
          <h3 className="text-[#414141] text-xl md:text-2xl font-semibold mb-4 leading-tight group-hover:text-[#DDB2B5] transition-colors duration-300">
            {blog.title}
          </h3>
        </Link>
        <p className="text-gray-500 text-sm font-poppins font-light leading-relaxed mb-8 line-clamp-3">
          {blog.excerpt}
        </p>

        {/* Read More Link */}
        <div className="mt-auto pt-4 border-t border-gray-50">
          <Link 
            href={`/blogs/${blog.id}`} 
            className="flex items-center gap-2 text-[#7189A2] font-semibold text-sm group/btn hover:text-[#DDB2B5] transition-colors duration-300"
          >
            Read Full Article
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-2" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
