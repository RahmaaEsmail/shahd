"use client";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/query-constant";
import { handleGetAllAcademyData } from "../../services/academy/academy";

export const useAcademy = () => {
  return useQuery({
    queryKey: QUERY_KEYS.ACADEMY_DATA,
    queryFn: () => handleGetAllAcademyData(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 5 * 60,
  });
};
