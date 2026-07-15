"use client";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/query-constant";
import {
  handleGetAllHairTherapyData,
  handleGetPricing,
} from "../../services/hair-therapy/hair-therapy";
import { config } from "../../api/config";

export const useHairTherapy = () => {
  return useQuery({
    queryKey: QUERY_KEYS.HAIR_THERAPY_DATA,
    queryFn: () => handleGetAllHairTherapyData(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 5 * 60,
  });
};

export const usePricing = () => {
  const userId =
    JSON.parse(localStorage.getItem(config.localStorageUserData)) ?? "";
  return useQuery({
    queryKey: [QUERY_KEYS.HAIR_THERAPY_PRICING, userId],
    queryFn: () => handleGetPricing(userId?.user_id),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 5 * 60,
  });
};
