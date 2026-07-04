"use client";
import HomeBanner from "@/components/pages/Home/HomeBanner/HomeBanner";
import BannerMarquee from "@/components/pages/Home/HomeBanner/BannerMarquee";
import HomeAbout from "@/components/pages/Home/HomeAbout/HomeAbout";
import HomeServices from "@/components/pages/Home/HomeServices/HomeServices";
import HomeBlogs from "@/components/pages/Home/HomeBlogs/HomeBlogs";
import HomeBeforeAfter from "@/components/pages/Home/HomeBeforeAfter/HomeBeforeAfter";
import HomeTestimonial from "@/components/pages/Home/HomeTestimonial/HomeTestimonial";
import { useHome } from "../../hooks/home/useHome";
import Loading from "../loading";

export default function HomeClient() {
  const { data: homeData, isLoading } = useHome();

  console.log("homeData", homeData);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="mt-20">
      <div className="main-container   mx-auto px-4 lg:px-8">
        <HomeBanner data={homeData?.data?.home_banner} />
      </div>
      <BannerMarquee />
      <HomeAbout data={homeData?.data?.about_banners} />
      <HomeServices />
      <HomeBeforeAfter data={homeData?.data?.before_after} />
      <HomeTestimonial data={homeData?.data?.testimonials} />
      <HomeBlogs data={homeData?.data?.blogs} />
    </div>
  );
}
