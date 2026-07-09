"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { QUERY_KEYS } from "../../constants/query-constant";
import { useCurrentUser } from "../auth/useCurrentUser";
import {
  handleAddToCart,
  handleClearCart,
  handleDeleteCartItem,
  handleGetCart,
  handleUpdateCart,
} from "../../services/cart/cart";

const getErrorMessage = (err) =>
  err?.response?.data?.message || err?.message || "Something went wrong, please try again.";

export const useCart = (user_id) => {
  return useQuery({
    queryKey: [QUERY_KEYS.CART_DATA, user_id],
    queryFn: () => handleGetCart(user_id),
    enabled: !!user_id,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 5 * 60,
  });
};

export const useAddToCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [QUERY_KEYS.ADD_TO_CART],
    mutationFn: (data) => handleAddToCart(data),
    onSuccess: (res) => {
      if (res?.status === "success") {
        toast.success(res?.message || "Added to cart");
        queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.CART_DATA] });
      } else {
        toast.error(res?.message || "Something went wrong, please try again.");
      }
    },
    onError: (err) => toast.error(getErrorMessage(err)),
  });
};

export const useUpdateCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [QUERY_KEYS.UPDATE_CART],
    mutationFn: (data) => handleUpdateCart(data),
    onSuccess: (res) => {
      if (res?.status === "success") {
        queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.CART_DATA] });
      } else {
        toast.error(res?.message || "Something went wrong, please try again.");
      }
    },
    onError: (err) => toast.error(getErrorMessage(err)),
  });
};

export const useDeleteCartItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [QUERY_KEYS.DELETE_CART],
    mutationFn: (data) => handleDeleteCartItem(data),
    onSuccess: (res) => {
      if (res?.status === "success") {
        toast.success(res?.message || "Item removed from cart");
        queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.CART_DATA] });
      } else {
        toast.error(res?.message || "Something went wrong, please try again.");
      }
    },
    onError: (err) => toast.error(getErrorMessage(err)),
  });
};

export const useClearCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [QUERY_KEYS.CLEAR_CART],
    mutationFn: (data) => handleClearCart(data),
    onSuccess: (res) => {
      if (res?.status === "success") {
        toast.success(res?.message || "Cart cleared");
        queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.CART_DATA] });
      } else {
        toast.error(res?.message || "Something went wrong, please try again.");
      }
    },
    onError: (err) => toast.error(getErrorMessage(err)),
  });
};

// Shared guard: redirects guests to /login, otherwise fires the add-to-cart
// mutation with the current user's id. Used by every "Add to Cart" button.
export const useAddToCartAction = () => {
  const router = useRouter();
  const user = useCurrentUser();
  const { mutate, mutateAsync, isPending } = useAddToCart();

  const addToCart = (product_id, quantity = 1, options) => {
    if (!user) {
      router.push("/login");
      return;
    }
    mutate({ user_id: user.user_id, product_id, quantity }, options);
  };

  return { addToCart, isAddingToCart: isPending, mutateAsync, user };
};
