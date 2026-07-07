"use client";

import { useMutation } from "@tanstack/react-query";
import {
  handleLogin,
  handleRegister,
  handleCheckEmail,
  handleResetPassRequest,
  handleResetPassUpdate,
  handleSmsSender,
  handleVerifiedCode,
  handleVerifiedCodeForget,
} from "../../services/auth/auth";

export const useLogin = () => {
  return useMutation({
    mutationFn: handleLogin,
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: handleRegister,
  });
};

export const useCheckEmail = () => {
  return useMutation({
    mutationFn: handleCheckEmail,
  });
};

export const useResetPassRequest = () => {
  return useMutation({
    mutationFn: handleResetPassRequest,
  });
};

export const useResetPassUpdate = () => {
  return useMutation({
    mutationFn: handleResetPassUpdate,
  });
};

export const useSmsSender = () => {
  return useMutation({
    mutationFn: handleSmsSender,
  });
};

export const useVerifiedCode = () => {
  return useMutation({
    mutationFn: handleVerifiedCode,
  });
};

export const useVerifiedCodeForget = () => {
  return useMutation({
    mutationFn: handleVerifiedCodeForget,
  });
};
