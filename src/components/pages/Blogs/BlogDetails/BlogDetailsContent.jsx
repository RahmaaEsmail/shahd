"use client";
import React from 'react';
import BlogBanner from './BlogBanner';
import BlogBody from './BlogBody';
import BlogSidebar from './BlogSidebar';

export default function BlogDetailsContent({ blog, relatedBlogs = [] }) {
  if (!blog) return null;

  return (
    <article className="relative bg-[#FFF9F7] pb-32">
      {/* Editorial Banner */}
      <BlogBanner blog={blog} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
          
          {/* Main Article Body (8 cols) */}
          <BlogBody blog={blog} relatedBlogs={relatedBlogs} />

          {/* Editorial Sidebar (4 cols) */}
          <BlogSidebar blog={blog} relatedBlogs={relatedBlogs} />

        </div>
      </div>
    </article>
  );
}