"use client";
import React from "react";
import { blogsData } from "@/data/blogs";
import BlogDetailsContent from "@/components/pages/Blogs/BlogDetails/BlogDetailsContent";
import useBlogs from "@/hooks/blogs/useBlogs";
import Loading from "@/app/loading";
import { useTranslation } from "react-i18next";

export default function BlogDetailsPage({ id }) {
  const { blogsData: apiData, isLoading } = useBlogs({ id });
  const { i18n } = useTranslation();

  if (isLoading) return <Loading />;

  const lang = i18n.language?.startsWith("ar")
    ? "ar"
    : i18n.language?.startsWith("sk")
      ? "sk"
      : "en";

  let blog;
  let relatedBlogs;

  if (apiData?.data) {
    const raw = apiData.data;

    // Map API fields to a unified blog shape
    blog = {
      ...raw,
      title: raw[`title_${lang}`] || raw.title_en,
      content: raw[`content_${lang}`] || raw.content_en,
      description: raw[`description_${lang}`] || raw.description_en,
      img: raw.image_1_url || raw.image_2_url || null,
      img2: raw.image_2_url || null,
      img3: raw.image_3_url || null,
      date: raw.created_at ? raw.created_at.split(" ")[0] : "",
      category: raw.category || "",
    };

    // Related blogs come from the API response
    relatedBlogs = (raw.related_blogs || []).map((r) => ({
      ...r,
      title: r[`title_${lang}`] || r.title_en,
      img: r.image_1_url || r.image_1_raw
        ? `https://drshahdawad.com/ShahdAwad/uploads/blogs/${r.image_1_raw || r.image_1}`
        : null,
      category: r.category || "",
    }));
  } else {
    // Fallback to static data
    blog = blogsData.find((b) => b.id.toString() === id?.toString());
    relatedBlogs = blogsData
      .filter((b) => b.id.toString() !== id?.toString())
      .sort((a, b) => (blog?.category && a.category === blog.category ? -1 : 1))
      .slice(0, 3);
  }

  return (
    <main className="min-h-screen bg-[#FFF9F7]">
      <BlogDetailsContent blog={blog} relatedBlogs={relatedBlogs} />
    </main>
  );
}
