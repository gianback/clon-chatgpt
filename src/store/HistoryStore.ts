import { HistoryItem } from "@prisma/client";
import { create } from "zustand";

interface HistoryStore {
  history: HistoryItem[];
  setHistory: (newHistory: HistoryItem[], concat?: boolean) => void;
}

export const useHistoryStore = create<HistoryStore>()((set) => ({
  history: [],
  setHistory: (newHistory, concat = true) =>
    set((state) => ({
      history: concat ? [...newHistory, ...state.history] : newHistory,
    })),
}));
