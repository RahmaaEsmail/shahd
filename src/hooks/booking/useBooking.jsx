"use client";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/query-constant";
import {
  handleCreateBooking,
  handleGetBookingAvailableDate,
  handleGetBookingAvailableSlots,
  handleGetBookingBanner,
  handleGetBookingServices,
} from "../../services/bookings/bookings";

export const useBookingBanner = () => {
  return useQuery({
    queryKey: QUERY_KEYS.BOOKING_BANNER_DATA,
    queryFn: () => handleGetBookingBanner(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 5 * 60,
  });
};

export const useBookingServices = () => {
  return useQuery({
    queryKey: QUERY_KEYS.BOOKING_SERVICES_DATA,
    queryFn: () => handleGetBookingServices(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 5 * 60,
  });
};

export const useBookingSlots = (date_id) => {
  return useQuery({
    queryKey: [QUERY_KEYS.BOOKING_SLOTS_DATA, date_id],
    queryFn: () => handleGetBookingAvailableSlots(date_id),
    enabled: !!date_id,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 5 * 60,
  });
};

export const useBookingDates = () => {
  return useQuery({
    queryKey: QUERY_KEYS.BOOKING_DATES_DATA,
    queryFn: () => handleGetBookingAvailableDate(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 5 * 60,
  });
};

export const useCreateBooking = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [QUERY_KEYS.CREATE_BOOKING],
    mutationFn: (data) => handleCreateBooking(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.BOOKING_SLOTS_DATA] });
    },
  });
};
