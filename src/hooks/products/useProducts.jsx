import { useQuery } from "@tanstack/react-query";
import {
  handleGetAllProduct,
  handleGetAllProductFilter,
} from "../../services/products/products";

export const useGetProducts = (params = {}) => {
  return useQuery({
    queryKey: ["Products", params],
    queryFn: () => handleGetAllProduct(params),
    staleTime: 1000 * 5 * 60,
  });
};

export const useGetProductsFilteration = () => {
  return useQuery({
    queryKey: ["ProductsFilteration"],
    queryFn: handleGetAllProductFilter,
    staleTime: 1000 * 5 * 60,
  });
};
