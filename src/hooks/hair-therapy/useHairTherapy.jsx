"use client";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/query-constant";
import { 
  handleGetAllHairTherapyData,
  handleGetPricing 
} from "../../services/hair-therapy/hair-therapy";

export const useHairTherapy = () => {
  return useQuery({
    queryKey: QUERY_KEYS.HAIR_THERAPY_DATA,
    queryFn: () => handleGetAllHairTherapyData(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 5 * 60,
  });
};

export const usePricing = (userId = 1) => {
  return useQuery({
    queryKey: [QUERY_KEYS.HAIR_THERAPY_PRICING, userId],
    queryFn: () => handleGetPricing(userId),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 5 * 60,
  });
};
