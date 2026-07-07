"use client";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/query-constant";
import {
  handleGetAllShopData,
  handleGetProductDetails,
} from "../../services/shop/shop";

export const useShop = () => {
  return useQuery({
    queryKey: QUERY_KEYS.SHOP_DATA,
    queryFn: () => handleGetAllShopData(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 5 * 60,
  });
};

export const useProductDetails = (id) => {
  return useQuery({
    queryKey: [...QUERY_KEYS.PRODUCT_DETAILS, id],
    queryFn: () => handleGetProductDetails(id),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 5 * 60,
  });
};
