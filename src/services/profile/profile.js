import { apiInstance } from "../../api/apiInstance";
import { userEndPoints } from "../../api/userEndPoints";

export const handleGetProfileData = async (user_id) => {
  const response = await apiInstance.get(userEndPoints.get_profile_data, { params: { user_id } });
  return response.data;
};

export const handleEditProfileData = async (data) => {
  const response = await apiInstance.post(userEndPoints.edit_profile_data, data);
  return response.data;
};

export const handleGetUserProfileOverview = async (user_id) => {
  const response = await apiInstance.get(userEndPoints.get_user_profile_overview, { params: { user_id } });
  return response.data;
};

export const handleGetUserBookings = async (user_id) => {
  const response = await apiInstance.get(userEndPoints.get_user_bookings, { params: { user_id } });
  return response.data;
};

export const handleGetUserOrders = async (user_id) => {
  const response = await apiInstance.get(userEndPoints.get_user_orders, { params: { user_id } });
  return response.data;
};
