"use client";
import HomeAbout from "@/components/pages/Home/HomeAbout/HomeAbout";
import AboutUsStatistics from "@/components/pages/Aboutus/AboutUsStatistics/AboutUsStatistics";
import AboutUsContent from "@/components/pages/Aboutus/AboutUsContent/AboutUsContent";
import AboutChooseUs from "@/components/pages/Aboutus/AboutChooseUs/AboutChooseUs";
import AboutContact from "@/components/pages/Aboutus/AboutContact/AboutContact";
import AboutJourney from "@/components/pages/Aboutus/AboutJourney/AboutJourney";
import { useAbout } from "@/hooks/about/useAbout";
import Loading from "../../loading";

export default function AboutClient() {
  const { data: aboutData, isLoading: aboutIsLoading } = useAbout();

  console.log("aboutData", aboutData);

  if (aboutIsLoading) {
    return <Loading />;
  }

  return (
    <div className="mt-25">
      <div className="main-container overflow-hidden mx-auto">
        <HomeAbout data={aboutData?.data?.about_banners} />
      </div>
      <AboutUsStatistics />
      <div className="main-container mx-auto px-4 lg:px-8">
        <AboutUsContent />
      </div>
      <AboutJourney data={aboutData?.data?.our_journey} />
      <div
        style={{
          background:
            "linear-gradient(181.13deg, #FFFFFF 1.07%, #FFEDEE 61.95%, #FFFFFF 99.15%)",
        }}
      >
        <div className="main-container mt-10 mx-auto px-4 lg:px-8">
          <AboutChooseUs data={aboutData?.data?.about_choose} />
        </div>
      </div>
      <AboutContact />
    </div>
  );
}
