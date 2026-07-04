"use client";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/query-constant";
import { handleGetAllHomeData } from "../../services/home/home";

export const useHome = () => {
  return useQuery({
    queryKey: QUERY_KEYS.HOME_DATA,
    queryFn: () => handleGetAllHomeData(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 5 * 60,
  });
};
