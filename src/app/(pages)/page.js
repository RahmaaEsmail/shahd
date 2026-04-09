import React from "react";
import HomeBanner from "@/components/pages/Home/HomeBanner/HomeBanner";
import BannerMarquee from "@/components/pages/Home/HomeBanner/BannerMarquee";
import HomeAbout from "@/components/pages/Home/HomeAbout/HomeAbout";
import HomeServices from "@/components/pages/Home/HomeServices/HomeServices";
import HomeBlogs from "@/components/pages/Home/HomeBlogs/HomeBlogs";
import HomeBeforeAfter from "@/components/pages/Home/HomeBeforeAfter/HomeBeforeAfter";
import HomeTestimonial from "@/components/pages/Home/HomeTestimonial/HomeTestimonial";

export default function page() {
  return (
    <div className="mt-30">
      <div className="main-container mx-auto px-4 lg:px-8">
        <HomeBanner />
      </div>
      <BannerMarquee />
      <HomeAbout />
      <HomeServices />
      <HomeBeforeAfter />
      <HomeTestimonial />
      <HomeBlogs />
    </div>
  );
}
