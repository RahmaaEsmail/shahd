"use client";

import { useEffect, useState } from "react";
import { config } from "@/api/config";

export const AUTH_CHANGE_EVENT = "auth-change";

const readUser = () => {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(config.localStorageUserData);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

export const logoutUser = () => {
  localStorage.removeItem(config.localStorageTokenName);
  localStorage.removeItem(config.localStorageUserData);
  window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));
};

// Returns `undefined` until the initial localStorage read completes (avoids a
// false "logged out" flash / redirect on mount), then `null` or the user object.
export const useCurrentUser = () => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    setUser(readUser());

    const syncUser = () => setUser(readUser());

    window.addEventListener(AUTH_CHANGE_EVENT, syncUser);
    window.addEventListener("storage", syncUser);

    return () => {
      window.removeEventListener(AUTH_CHANGE_EVENT, syncUser);
      window.removeEventListener("storage", syncUser);
    };
  }, []);

  return user;
};
