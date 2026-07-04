"use client";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/query-constant";
import { handleGetAllHairTherapyData } from "../../services/hair-therapy/hair-therapy";

export const useHairTherapy = () => {
  return useQuery({
    queryKey: QUERY_KEYS.HAIR_THERAPY_DATA,
    queryFn: () => handleGetAllHairTherapyData(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 5 * 60,
  });
};
