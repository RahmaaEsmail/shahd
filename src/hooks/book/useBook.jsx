"use client";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/query-constant";
import { handleGetAllBookData } from "../../services/book/book";

export const useBook = () => {
  return useQuery({
    queryKey: QUERY_KEYS.BOOK_DATA,
    queryFn: () => handleGetAllBookData(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 5 * 60,
  });
};
