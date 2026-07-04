import { userEndPoints } from "../../api/userEndPoints";
import { apiInstance } from "@/api/apiInstance";

export const handleGetAllBlogs =async ({id}) => {
  const response = await apiInstance.get(`${userEndPoints.get_blogs}?id=${id}&blog_id=${id}`);
  return response.data;
};  