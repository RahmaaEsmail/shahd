"use client";
import HairTherapyBanner from "@/components/pages/HairTherapy/HairTherapyBanner/HairTherapyBanner";
import HairTherapyAbout from "@/components/pages/HairTherapy/HairTherapyAbout/HairTherapyAbout";
import HairTherapyTestimonial from "@/components/pages/HairTherapy/HairTherapyTestimonial/HairTherapyTestimonial";
import HairTherapyTeam from "@/components/pages/HairTherapy/HairTherapyTeam/HairTherapyTeam";
import HairTherapyPrePost from "@/components/pages/HairTherapy/HairTherapyPrePost/HairTherapyPrePost";
import HairTherapyTransformation from "@/components/pages/HairTherapy/HairTherapyTransformation/HairTherapyTransformation";
import HairTherapyBeforeAfter from "@/components/pages/HairTherapy/HairTherapyBeforeAfter/HairTherapyBeforeAfter";
import HairTherapyPackage from "@/components/pages/HairTherapy/HairTherapyPackage/HairTherapyPackage";
import { useHairTherapy } from "../../../hooks/hair-therapy/useHairTherapy";
import Loading from "../../loading";

export default function page() {
  const { data, isLoading } = useHairTherapy();

  if (isLoading) {
    return <Loading />;
  }

  console.log("hair therapy data", data);

  return (
    <div>
      <HairTherapyBanner />
      <HairTherapyAbout data={data?.data} />
      <HairTherapyTestimonial data={data?.data?.ht_transplant} />
      <HairTherapyPrePost data={data?.data?.ht_care_guide} />
      <HairTherapyTransformation data={data?.data?.ht_transformation} />
      <HairTherapyBeforeAfter data={data?.data?.ht_transformation} />
      <HairTherapyPackage />
      <HairTherapyTeam />
    </div>
  );
}
