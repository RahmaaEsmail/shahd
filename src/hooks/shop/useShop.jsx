"use client";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/query-constant";
import { handleGetAllShopData } from "../../services/shop/shop";

export const useShop = () => {
  return useQuery({
    queryKey: QUERY_KEYS.SHOP_DATA,
    queryFn: () => handleGetAllShopData(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 5 * 60,
  });
};
