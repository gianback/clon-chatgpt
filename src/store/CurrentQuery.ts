import { create } from "zustand";

interface UseCurrentQueryStore {
  currentId: string;
  setCurrentId: (newId: string) => void;
  queryList: string[];
  setQueryList: (queryList: string[], concat?: boolean) => void;
  firstReq: boolean;
  setFirstReq: (firstReq: boolean) => void;
}

export const useCurrentQueryStore = create<UseCurrentQueryStore>()((set) => ({
  currentId: "",
  setCurrentId: (newId) => set((_state) => ({ currentId: newId })),
  queryList: [],
  setQueryList: (queryList, concat = true) =>
    set((state) => ({
      queryList: concat ? [...state.queryList, ...queryList] : queryList,
    })),
  firstReq: false,
  setFirstReq: (firstReq) => set((_state) => ({ firstReq })),
}));
