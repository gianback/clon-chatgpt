import { create } from "zustand";

interface MenuState {
  menuActive: boolean;
  setMenuActive: (menuActive: boolean) => void;
}

export const useMenuStore = create<MenuState>()((set) => ({
  menuActive: false,
  setMenuActive: (menuActive) => set((_state) => ({ menuActive })),
}));
