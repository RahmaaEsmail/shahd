"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function BlogBody({ blog, relatedBlogs }) {
  const { t } = useTranslation();
  // Split content into two halves for the editorial layout
  const fullContent = blog?.content || "";
  const mid = Math.floor(fullContent.length / 2);
  // Try to split at a paragraph boundary near the middle
  const splitIndex = fullContent.indexOf("</p>", mid);
  const firstHalf = splitIndex > -1 ? fullContent.substring(0, splitIndex + 4) : fullContent;
  const secondHalf = splitIndex > -1 ? fullContent.substring(splitIndex + 4) : "";

  const mainImg = blog?.img || null;
  const sideImg1 = blog?.img2 || relatedBlogs[0]?.img || null;
  const sideImg2 = blog?.img3 || relatedBlogs[1]?.img || null;
  const hasGallery = mainImg || sideImg1 || sideImg2;

  return (
    <div className="lg:col-span-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="prose prose-xl max-w-none"
      >
        {/* Intro Section */}
        <div
          className="blog-text-content first-letter:text-7xl first-letter:font-serif first-letter:text-[#DDB2B5] first-letter:mr-3 first-letter:float-left"
          dangerouslySetInnerHTML={{ __html: firstHalf }}
        />

        {/* 3. BENTO GALLERY (Editorial Style) — only rendered when there are images */}
        {hasGallery && (
          <div className="my-20 grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
            {mainImg && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                className={`relative h-[300px] md:h-full rounded-[3rem] overflow-hidden shadow-2xl group ${
                  sideImg1 || sideImg2 ? "md:col-span-8" : "md:col-span-12"
                }`}
              >
                <Image
                  src={mainImg}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={blog.title || "Blog image"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </motion.div>
            )}

            {(sideImg1 || sideImg2) && (
              <div className="md:col-span-4 flex flex-col gap-6">
                {sideImg1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    className="relative flex-1 min-h-[250px] rounded-[2.5rem] overflow-hidden shadow-xl group"
                  >
                    <Image
                      src={sideImg1}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      alt={relatedBlogs[0]?.title || "Related blog"}
                    />
                  </motion.div>
                )}
                {sideImg2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.1 }}
                    className="relative flex-1 min-h-[250px] rounded-[2.5rem] overflow-hidden shadow-xl group"
                  >
                    <Image
                      src={sideImg2}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      alt={relatedBlogs[1]?.title || "Related blog"}
                    />
                  </motion.div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Conclusion Section */}
        {secondHalf && (
          <div
            className="blog-text-content"
            dangerouslySetInnerHTML={{ __html: secondHalf }}
          />
        )}
      </motion.div>

      <style jsx global>{`
        .blog-text-content h2 {
          color: #414141;
          font-weight: 300;
          font-size: 3rem;
          margin: 5rem 0 2rem;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }
        .blog-text-content h3 {
          color: #7189a2;
          font-weight: 400;
          font-size: 1.75rem;
          margin: 3rem 0 1.5rem;
        }
        .blog-text-content p {
          margin-bottom: 2.5rem;
          line-height: 2.1;
          font-family: "Poppins", sans-serif;
          color: #414141;
          font-weight: 300;
        }
        .blog-text-content strong {
          color: #ddb2b5;
          font-weight: 500;
        }
        .blog-text-content blockquote {
          border-left: none;
          padding: 3rem;
          background: #f8f8f8;
          border-radius: 2rem;
          font-style: italic;
          color: #7189a2;
          font-size: 1.5rem;
          margin: 4rem 0;
          position: relative;
        }
        .blog-text-content blockquote::before {
          content: '"';
          position: absolute;
          top: 1rem;
          left: 2rem;
          font-size: 5rem;
          color: #ddb2b5;
          opacity: 0.3;
        }
      `}</style>
    </div>
  );
}
