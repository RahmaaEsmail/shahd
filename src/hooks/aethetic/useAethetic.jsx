"use client";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/query-constant";
import { handleGetAllAestheticGynecologyData } from "../../services/aethetic-gynocology/aethetic-gynocology";

export const useAethetic = () => {
  return useQuery({
    queryKey: QUERY_KEYS.AESTHETIC_GYNECOLOGY_DATA,
    queryFn: () => handleGetAllAestheticGynecologyData(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 5 * 60,
  });
};
