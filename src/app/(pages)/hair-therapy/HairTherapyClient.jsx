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
import { useMemo } from "react";

export default function HairTherapyPage() {
  const { data, isLoading } = useHairTherapy();

  const hairTherapyAbout = useMemo(() => {
    return {
      main_image: data?.data?.ht_about_main?.image_url,
      cards: data?.data?.ht_about_cards,
    };
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <HairTherapyBanner />
      <HairTherapyAbout data={hairTherapyAbout} />
      <HairTherapyTestimonial data={data?.data?.ht_transplant} />
      <HairTherapyPrePost data={[]} />
      <HairTherapyTransformation data={data?.data?.ht_transformation} />
      <HairTherapyBeforeAfter data={data?.data?.before_after} />
      <HairTherapyPackage data={data?.data?.pricing} />
      <HairTherapyTeam data={data?.data?.team_members} />
    </div>
  );
}
