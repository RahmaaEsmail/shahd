import { useQuery } from "@tanstack/react-query";
import { handleGetAllBlogs } from "../../services/blogs/blogs";

export default function useBlogs({ id }) {
  const {
    data: blogsData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: () => handleGetAllBlogs({ id }),
    retry: 1,
  });
  return { blogsData, isLoading, isError, error };
}
