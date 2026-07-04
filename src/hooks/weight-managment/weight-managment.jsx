"use client";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/query-constant";
import { handleGetAllWeightManagementData } from "../../services/weight-management/weight-management";

export const useWeightManagement = () => {
  return useQuery({
    queryKey: QUERY_KEYS.WEIGHT_MANAGEMENT_DATA,
    queryFn: () => handleGetAllWeightManagementData(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 5 * 60,
  });
};
