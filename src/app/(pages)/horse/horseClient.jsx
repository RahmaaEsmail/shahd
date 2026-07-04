"use client";
import HorseBanner from "@/components/pages/horsePage/HorseBanner/HorseBanner";
import HorseContactUs from "@/components/pages/horsePage/HorseContactUs/HorseContactUs";
import HorseProducts from "@/components/pages/horsePage/HorseProducts/HorseProducts";
import HorseAbout from "@/components/pages/horsePage/HorseAbout/HorseAbout";
import HorseGallery from "@/components/pages/horsePage/HorseGallery/HorseGallery";
import { useHorse } from "@/hooks/horse/useHorse";
import Loading from "../../loading";

export default function HorseClient() {
  const { data, isLoading } = useHorse();

  console.log("horse data", data);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <HorseBanner data={data?.data?.horse_banner} />
      <HorseAbout data={data?.data?.horse_about} />
      <HorseGallery data={data?.data?.horse_gallery} />
      <HorseProducts data={data?.data?.horse_products} />
      <HorseContactUs />
    </div>
  );
}
