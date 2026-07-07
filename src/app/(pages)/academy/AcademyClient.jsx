"use client";
import AcademyBanner from "@/components/pages/AcademyPage/AcademyBanner/AcademyBanner";
import AcademyUpdate from "@/components/pages/AcademyPage/AcademyUpdate/AcademyUpdate";
import AcademyCourses from "@/components/pages/AcademyPage/AcademyCourses/AcademyCourses";
import AcademyWorkshop from "@/components/pages/AcademyPage/AcademyWorkshop/AcademyWorkshop";
import AcademyLicense from "@/components/pages/AcademyPage/AcademyLicense/AcademyLicense";
import AcademyAesthetic from "@/components/pages/AcademyPage/AcademyAesthetic/AcademyAesthetic";
import AcademyTeam from "@/components/pages/AcademyPage/AcademyTeam/AcademyTeam";
import { useAcademy } from "../../../hooks/academy/useAcademy";
import Loading from "../../loading";

export default function page() {
  const { data, isLoading } = useAcademy();
  console.log("data", data);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <AcademyBanner data={data?.data?.academy_banner} />
      <AcademyUpdate data={data?.data?.academy_social_updates} />
      <AcademyCourses data={data?.data?.academy_courses} />
      <AcademyWorkshop data={data?.data?.academy_workshop} />
      <AcademyAesthetic data={data?.data?.academy_about} />
      <AcademyLicense data={data?.data?.academy_license} />
      <AcademyTeam data={data?.data?.team_members} />
    </div>
  );
}
