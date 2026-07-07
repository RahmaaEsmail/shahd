import { userEndPoints } from "../../api/userEndPoints";
import { apiInstance } from "@/api/apiInstance";

export const handleLogin = async (data) => {
  const response = await apiInstance.post(userEndPoints.login, data);
  return response.data;
};

export const handleRegister = async (data) => {
  const response = await apiInstance.post(userEndPoints.register, data);
  return response.data;
};

export const handleCheckEmail = async (data) => {
  const response = await apiInstance.post(userEndPoints.check_email, data);
  return response.data;
};

export const handleResetPassRequest = async (data) => {
  const response = await apiInstance.post(userEndPoints.reset_pass_request, data);
  return response.data;
};

export const handleResetPassUpdate = async (data) => {
  const response = await apiInstance.post(userEndPoints.reset_pass_update, data);
  return response.data;
};

export const handleSmsSender = async (data) => {
  const response = await apiInstance.post(userEndPoints.sms_sender, data);
  return response.data;
};

export const handleVerifiedCode = async (data) => {
  const response = await apiInstance.post(userEndPoints.verified_code, data);
  return response.data;
};

export const handleVerifiedCodeForget = async (data) => {
  const response = await apiInstance.post(userEndPoints.verified_code_forget, data);
  return response.data;
};
