"use client";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/query-constant";
import {
  handleGetAllServicesData,
  handleGetServiceDetails,
} from "../../services/services/services";

export const useServices = () => {
  return useQuery({
    queryKey: QUERY_KEYS.SERVICES_DATA,
    queryFn: () => handleGetAllServicesData(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 5 * 60,
  });
};

export const useServiceDetails = (id) => {
  return useQuery({
    queryKey: [QUERY_KEYS.SERVICE_DETAILS, id],
    queryFn: () => handleGetServiceDetails(id),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 5 * 60,
  });
};
