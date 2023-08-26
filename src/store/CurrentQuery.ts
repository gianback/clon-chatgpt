import { create } from "zustand";

interface UseCurrentQueryStore {
  currentId: string;
  setCurrentId: (newId: string) => void;
  queryList: string[];
  setQueryList: (queryList: string) => void;
  firstReq: boolean;
  setFirstReq: (firstReq: boolean) => void;
}

export const useCurrentQueryStore = create<UseCurrentQueryStore>()((set) => ({
  currentId: "",
  setCurrentId: (newId) => set((_state) => ({ currentId: newId })),
  queryList: [],
  setQueryList: (queryList) =>
    set((state) => ({ queryList: state.queryList.concat(queryList) })),
  firstReq: false,
  setFirstReq: (firstReq) => set((_state) => ({ firstReq })),
}));
