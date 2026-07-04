import { QUERY_KEYS } from "@/constants/query-constant";
import {
  handleGetAllBeforeAfter,
  handleGetAllBeforeAfterBanner,
  handleGetResultsBeforeAfter,
} from "@/services/before-after/before-after";
import { useQuery } from "@tanstack/react-query";

export const useBeforeAfterBanner = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.BEFORE_AFTER_BANNER_DATA],
    queryFn: handleGetAllBeforeAfterBanner,
    staleTime: 1000 * 5 * 60,
    gcTime: 1000 * 5 * 60,
  });
};

export const useBeforeAfter = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.BEFORE_AFTER_DATA],
    queryFn: handleGetAllBeforeAfter,
    staleTime: 1000 * 5 * 60,
    gcTime: 1000 * 5 * 60,
  });
};

export const useBeforeAfterResults = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.BEFORE_AFTER_RESULTS_DATA],
    queryFn: handleGetResultsBeforeAfter,
    staleTime: 1000 * 5 * 60,
    gcTime: 1000 * 5 * 60,
  });
};
