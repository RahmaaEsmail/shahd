"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/query-constant";
import { handleCheckout } from "../../services/checkout/checkout";

export const useCheckout = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [QUERY_KEYS.CHECKOUT],
    mutationFn: (data) => handleCheckout(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.CART_DATA] });
    },
  });
};
