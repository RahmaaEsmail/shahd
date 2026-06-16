import React from 'react';
import BlogsBanner from '@/components/pages/Blogs/BlogsBanner/BlogsBanner';
import BlogsMain from '@/components/pages/Blogs/BlogsMain/BlogsMain';

export const metadata = {
  title: 'Blogs | Dr. Shahd Awad',
  description: 'Expert insights into Aesthetic Gynecology, Skincare, and Wellness by Dr. Shahd Awad.',
};

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-[#FFF9F7]">
      {/* Banner Section */}
      <BlogsBanner />

      {/* Main Content Section */}
      <BlogsMain />
    </main>
  );
}
