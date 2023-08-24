import { create } from "zustand";

interface UseCurrentQuery {
  currentId: string;
  setCurrentId: (newId: string) => void;
  queryList: string[];
  setQueryList: (queryList: string[]) => void;
  firstReq: boolean;
  setFirstReq: (firstReq: boolean) => void;
}

export const useCurrentQuery = create<UseCurrentQuery>()((set) => ({
  currentId: "",
  setCurrentId: (newId) => set((_state) => ({ currentId: newId })),
  queryList: [],
  setQueryList: (queryList) => set((_state) => ({ queryList })),
  firstReq: false,
  setFirstReq: (firstReq) => set((_state) => ({ firstReq })),
}));
