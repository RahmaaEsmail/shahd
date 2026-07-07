"use client";
import WeightManagementBanner from "@/components/pages/WeightManagement/WeightManagementBanner/WeightManagementBanner";
import WeightManagementNutritionFood from "@/components/pages/WeightManagement/WeightManagementNutritionFood/WeightManagementNutritionFood";
import AcademyTeam from "@/components/pages/AcademyPage/AcademyTeam/AcademyTeam";
import WeightManagementChooseUs from "@/components/pages/WeightManagement/WeightManagementChooseUs/WeightManagementChooseUs";
import WeightManagementTeam from "@/components/pages/WeightManagement/WeightManagementTeam/WeightManagementTeam";
import WeightManagementMedicalMachine from "@/components/pages/WeightManagement/WeightManagementMedicalMachine/WeightManagementMedicalMachine";
import MedicalWeightManagement from "@/components/pages/WeightManagement/MedicalWeightManagement/MedicalWeightManagement";
import WeightManagementFoodieProject from "@/components/pages/WeightManagement/WeightManagementFoodieProject/WeightManagementFoodieProject";
import WeightManagementImages from "@/components/pages/WeightManagement/WeightManagementImages/WeightManagementImages";
import WeightManagementApp from "@/components/pages/WeightManagement/WeightManagementApp/WeightManagementApp";
import { useWeightManagement } from "../../../hooks/weight-managment/weight-managment";
import Loading from "../../loading";

export default function page() {
  const { data, isLoading } = useWeightManagement();

  console.log("weight managemet", data);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <WeightManagementBanner data={data?.data?.wm_banner} />
      <WeightManagementNutritionFood data={data?.data?.wm_nutrition} />
      <WeightManagementChooseUs
        cardsData={data?.data?.wm_why_choose_us_cards}
        mainData={data?.data?.wm_why_choose_us_main}
      />
      <WeightManagementMedicalMachine data={data?.data?.wm_medical_expertise} />
      <MedicalWeightManagement />
      <WeightManagementTeam data={data?.data?.team_members} />
      <WeightManagementFoodieProject />
      <WeightManagementImages data={data?.data?.wm_swiper} />
      <WeightManagementApp />
    </div>
  );
}
