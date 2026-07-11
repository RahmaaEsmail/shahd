"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { QUERY_KEYS } from "../../constants/query-constant";
import { useCurrentUser } from "../auth/useCurrentUser";
import { handleGetWishlist, handleToggleWishlist } from "../../services/wishlist/wishlist";

const getErrorMessage = (err) =>
  err?.response?.data?.message || err?.message || "Something went wrong, please try again.";

export const useWishlist = (user_id) => {
  return useQuery({
    queryKey: [QUERY_KEYS.WISHLIST_DATA, user_id],
    queryFn: () => handleGetWishlist(user_id),
    enabled: !!user_id,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 5 * 60,
  });
};

export const useToggleWishlist = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [QUERY_KEYS.TOGGLE_WISHLIST],
    mutationFn: (data) => handleToggleWishlist(data),
    onSuccess: (res) => {
      if (res?.status === "success") {
        toast.success(res?.message || "Wishlist updated");
        queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.WISHLIST_DATA] });
      } else {
        toast.error(res?.message || "Something went wrong, please try again.");
      }
    },
    onError: (err) => toast.error(getErrorMessage(err)),
  });
};

export const useToggleWishlistAction = () => {
  const router = useRouter();
  const user = useCurrentUser();
  const { mutate, mutateAsync, isPending } = useToggleWishlist();

  const toggleWishlist = (product_id, options) => {
    if (!user) {
      toast.error("Please login first.");
      router.push("/login");
      return;
    }
    mutate({ user_id: user.user_id, product_id }, options);
  };

  return { toggleWishlist, isToggling: isPending, mutateAsync, user };
};
