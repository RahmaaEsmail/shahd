"use client";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/query-constant";
import { handleGetAllAboutData } from "../../services/about/about";

export const useAbout = () => {
  return useQuery({
    queryKey: QUERY_KEYS.ABOUT_DATA,
    queryFn: () => handleGetAllAboutData(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 5 * 60,
  });
};
