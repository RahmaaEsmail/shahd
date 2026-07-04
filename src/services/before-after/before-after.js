import { userEndPoints } from "../../api/userEndPoints";
import { apiInstance } from "@/api/apiInstance";

export const handleGetAllBeforeAfterBanner =async () => {
  const response = await apiInstance.get(userEndPoints.get_before_after_banner);
  return response.data;
};

export const handleGetAllBeforeAfter =async () => {
    const response = await apiInstance.get(userEndPoints.get_before_after);
    return response.data;
  };  

export const handleGetResultsBeforeAfter =async () => {
    const response = await apiInstance.get(userEndPoints.get_before_after_result);
    return response.data;
  };  