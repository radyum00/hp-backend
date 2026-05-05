import { create } from "zustand";
import API, { setAuthToken } from "../api/client";

interface AuthState {
  user: any;
  access: string | null;
  refresh: string | null;

  login: (email: string, password: string) => Promise<void>;
  register: (
    username: string,
    email: string,
    password: string,
    password_confirm: string
  ) => Promise<void>;
  verify: (email: string, code: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  access: null,
  refresh: null,

  login: async (email, password) => {
    const res = await API.post("/accounts/login/", {
      email,
      password,
    });

    const { user, access, refresh } = res.data;

    set({ user, access, refresh });
    setAuthToken(access);
  },

  register: async (username, email, password, password_confirm) => {
    await API.post("/accounts/register/", {
      username,
      email,
      password,
      password_confirm,
    });
  },

  verify: async (email, code) => {
    await API.post("/accounts/verify-email/", {
      email,
      code,
    });
  },

  logout: () => {
    set({ user: null, access: null, refresh: null });
    setAuthToken(undefined);
  },
}));
