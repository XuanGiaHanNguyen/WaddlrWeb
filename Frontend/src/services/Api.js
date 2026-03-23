// src/lib/api.js
import { supabase } from "./Supabase";

const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8000";

async function request(path, init = {}) {
  // Always pull the latest session token from Supabase
  const { data: { session } } = await supabase.auth.getSession();
  const token = session?.access_token;

  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...init.headers,
  };

  const res = await fetch(`${BASE_URL}${path}`, { ...init, headers });

  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: "Request failed" }));
    throw new Error(err.detail ?? "Request failed");
  }

  return res.json();
}

export const api = {
  getMe:       () => request("/me"),
  getDashboard:() => request("/dashboard"),
};