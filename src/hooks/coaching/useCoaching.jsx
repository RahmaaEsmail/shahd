"use client";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/query-constant";
import { handleGetAllCoachingData } from "../../services/coaching/coaching";

export const useCoaching = () => {
  return useQuery({
    queryKey: QUERY_KEYS.COACHING_DATA,
    queryFn: () => handleGetAllCoachingData(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 5 * 60,
  });
};
