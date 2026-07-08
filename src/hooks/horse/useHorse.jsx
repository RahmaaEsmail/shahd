"use client";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/query-constant";
import {
  handleGetAllHorseData,
  handleGetHorseProductData,
} from "../../services/horse/horse";

export const useHorse = () => {
  return useQuery({
    queryKey: QUERY_KEYS.HORSE_DATA,
    queryFn: () => handleGetAllHorseData(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 5 * 60,
  });
};

export const useHorseProductDetails = ({ id }) => {
  return useQuery({
    queryKey: ["HORSE_PRODUCT_DETAILS", id],
    queryFn: () => handleGetHorseProductData({ id }),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 5 * 60,
  });
};
