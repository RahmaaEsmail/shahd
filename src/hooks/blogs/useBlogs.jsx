import { useQuery } from "@tanstack/react-query";
import { handleGetAllBlogs, handleGetBlogDetails } from "../../services/blogs/blogs";
import { QUERY_KEYS } from "../../constants/query-constant";

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

export function useBlogDetails(id) {
  const {
    data: blogDetailsData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [QUERY_KEYS.BLOG_DETAILS_DATA, id],
    queryFn: () => handleGetBlogDetails(id),
    retry: 1,
    enabled: !!id,
  });
  return { blogDetailsData, isLoading, isError, error };
}
