"use client";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/query-constant";
import {
  handleGetAllHomeData,
  handleGetAllHomeServices,
} from "../../services/home/home";

export const useHome = () => {
  return useQuery({
    queryKey: QUERY_KEYS.HOME_DATA,
    queryFn: () => handleGetAllHomeData(),
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    staleTime: 1000 * 5 * 60,
  });
};

export const useGetHomeServices = (params) => {
  return useQuery({
    queryKey: [QUERY_KEYS.HOME_SERVICES, params],
    queryFn: () => handleGetAllHomeServices(params),
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    staleTime: 1000 * 5 * 60,
  });
};
