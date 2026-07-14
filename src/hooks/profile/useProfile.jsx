"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { QUERY_KEYS } from "../../constants/query-constant";
import {
  handleGetProfileData,
  handleEditProfileData,
  handleGetUserProfileOverview,
  handleGetUserBookings,
  handleGetUserOrders,
  handleGetUserSubscriptions,
} from "../../services/profile/profile";
import { updateCurrentUserInStorage } from "../auth/useCurrentUser";

const getErrorMessage = (err) =>
  err?.response?.data?.message || err?.message || "Something went wrong, please try again.";

export const useProfileData = (user_id) => {
  return useQuery({
    queryKey: [QUERY_KEYS.PROFILE_SETTINGS, user_id],
    queryFn: () => handleGetProfileData(user_id),
    enabled: !!user_id,
    staleTime: 1000 * 5 * 60,
  });
};

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["UPDATE_PROFILE"],
    mutationFn: (data) => handleEditProfileData(data),
    onSuccess: (res, variables) => {
      if (res?.status === "success") {
        toast.success(res?.message || "Profile updated successfully");
        
        // Update local storage user data
        const updatedData = res?.data || res?.user || {};
        const name = updatedData.name || variables?.name;
        const email = updatedData.email || variables?.email;
        const phone = updatedData.phone || variables?.phone;
        updateCurrentUserInStorage({ name, email, phone });

        queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.PROFILE_SETTINGS] });
      } else {
        toast.error(res?.message || "Something went wrong, please try again.");
      }
    },
    onError: (err) => toast.error(getErrorMessage(err)),
  });
};

export const useUserProfileOverview = (user_id) => {
  return useQuery({
    queryKey: [QUERY_KEYS.PROFILE_OVERVIEW, user_id],
    queryFn: () => handleGetUserProfileOverview(user_id),
    enabled: !!user_id,
    staleTime: 1000 * 5 * 60,
  });
};

export const useUserBookings = (user_id) => {
  return useQuery({
    queryKey: [QUERY_KEYS.PROFILE_BOOKINGS, user_id],
    queryFn: () => handleGetUserBookings(user_id),
    enabled: !!user_id,
    staleTime: 1000 * 5 * 60,
  });
};

export const useUserOrders = (user_id) => {
  return useQuery({
    queryKey: [QUERY_KEYS.PROFILE_ORDERS, user_id],
    queryFn: () => handleGetUserOrders(user_id),
    enabled: !!user_id,
    staleTime: 1000 * 5 * 60,
  });
};

export const useUserSubscriptions = (user_id) => {
  return useQuery({
    queryKey: [QUERY_KEYS.PROFILE_SUBSCRIPTIONS, user_id],
    queryFn: () => handleGetUserSubscriptions(user_id),
    enabled: !!user_id,
    staleTime: 1000 * 5 * 60,
  });
};
