import { create } from "zustand";

interface UserState {
  id: string;
  setId: (id: string) => void;
  name: string;
  setname: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
  picture: string;
  setPicture: (picture: string) => void;
}

export const userStore = create<UserState>()((set) => ({
  id: "",
  setId: (id) => set((state) => ({ ...state, id })),
  name: "",
  setname: (name) => set((state) => ({ ...state, name })),
  email: "",
  setEmail: (email) => set((state) => ({ ...state, email })),
  picture: "",
  setPicture: (picture) => set((state) => ({ ...state, picture })),
}));
