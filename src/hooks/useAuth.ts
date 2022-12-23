import React from "react";

export function useAuth() {
  const accessToken = localStorage.getItem("accessToken") || "";
  const isAuth = Boolean(accessToken);

  return {
    isAuth,
  };
}
