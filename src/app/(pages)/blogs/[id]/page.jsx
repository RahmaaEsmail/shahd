import React from 'react';
import { blogsData } from '@/data/blogs';
import BlogDetailsContent from '@/components/pages/Blogs/BlogDetails/BlogDetailsContent';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const { id } = await params;
  const blog = blogsData.find((b) => b.id.toString() === id);
  
  if (!blog) return { title: 'Blog Not Found' };

  return {
    title: `${blog.title} | Dr. Shahd Awad`,
    description: blog.sub_title || blog.excerpt,
  };
}

// Pre-render all blog paths for static export
export async function generateStaticParams() {
  return blogsData.map((blog) => ({
    id: blog.id.toString(),
  }));
}

export default async function BlogDetailsPage({ params }) {
  const { id } = await params;
  const blog = blogsData.find((b) => b.id.toString() === id);

  if (!blog) {
    notFound();
  }

  // Static Data for Related Blogs: 
  // Finds 3 blogs in the same category, or the most recent 3
  const relatedBlogs = blogsData
    .filter((b) => b.id.toString() !== id)
    .sort((a, b) => (a.category === blog.category ? -1 : 1))
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[#FFF9F7]">
      <BlogDetailsContent blog={blog} relatedBlogs={relatedBlogs} />
    </main>
  );
}