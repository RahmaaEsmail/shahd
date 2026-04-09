import React from 'react'
import WeightManagementBanner from '@/components/pages/WeightManagement/WeightManagementBanner/WeightManagementBanner'
import WeightManagementNutritionFood from '@/components/pages/WeightManagement/WeightManagementNutritionFood/WeightManagementNutritionFood'
import AcademyTeam from '@/components/pages/AcademyPage/AcademyTeam/AcademyTeam'
import WeightManagementChooseUs from '@/components/pages/WeightManagement/WeightManagementChooseUs/WeightManagementChooseUs'
import WeightManagementTeam from '@/components/pages/WeightManagement/WeightManagementTeam/WeightManagementTeam'
import WeightManagementMedicalMachine from '@/components/pages/WeightManagement/WeightManagementMedicalMachine/WeightManagementMedicalMachine'
import MedicalWeightManagement from '@/components/pages/WeightManagement/MedicalWeightManagement/MedicalWeightManagement'
import WeightManagementFoodieProject from '@/components/pages/WeightManagement/WeightManagementFoodieProject/WeightManagementFoodieProject'
import WeightManagementImages from '@/components/pages/WeightManagement/WeightManagementImages/WeightManagementImages'
import WeightManagementApp from '@/components/pages/WeightManagement/WeightManagementApp/WeightManagementApp'

export default function page() {
  return (
    <div>
      <WeightManagementBanner />
      <WeightManagementNutritionFood />
      <WeightManagementChooseUs />
      <WeightManagementMedicalMachine/>
      <MedicalWeightManagement/>
      <WeightManagementTeam/>
      <WeightManagementFoodieProject/>
      <WeightManagementImages/>
      <WeightManagementApp/>
    </div>
  )
}
