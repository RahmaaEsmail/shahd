import axios from "axios";
import { config } from "./config";
import i18n from "../i18n/i18n";

export const apiInstance = axios.create({
  baseURL: config.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

apiInstance.interceptors.request.use((req) => {
  const token = localStorage.getItem(config.localStorageTokenName) ? localStorage?.getItem(config.localStorageTokenName) : "";
   console.log("i18n.language", i18n.language);
  const currentLang = i18n.language ? i18n.language.split("-")[0] : "en";

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  } else {
    delete req.headers.Authorization;
  }

  req.params = {
    ...req.params,
    lang: currentLang,
  };

  return req;

}, (error) => Promise.reject(error))



apiInstance.interceptors.response.use((res) => res , (error) => {
  if(error?.response?.status == 401) {
    localStorage.removeItem(config.localStorageTokenName)
    localStorage.removeItem(config.localStorageUserData)
    window.location.replace("/login");
  }
  return Promise.reject(error);
})