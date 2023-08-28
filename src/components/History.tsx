"use client";

import { HistoryItem as HistoryItemType, User } from "@/interfaces/User";
import { getHistoryByUseridService } from "@/services/getHistoryByUserId.service";
import { HistoryItem } from "./HistoryItem";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useHistoryStore } from "@/store/HistoryStore";

const getData = async (id: string) => {
  const data = await getHistoryByUseridService(id);
  const setHistory = useHistoryStore.getState().setHistory;
  setHistory(data.history, false);
};

export function History() {
  const { data } = useSession();
  const history = useHistoryStore((state) => state.history);

  useEffect(() => {
    getData(data?.user.id);
  }, [data?.user.id]);

  return (
    <div
      id="History"
      className="flex flex-col flex-1 transition-opacity duration-500 overflow-y-auto"
    >
      {history?.map((historyItem) => (
        <HistoryItem key={historyItem.id} historyItem={historyItem} />
      ))}
    </div>
  );
}
