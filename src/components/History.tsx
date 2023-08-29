"use client";

import { useEffect } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useSession } from "next-auth/react";

import { HistoryItem } from "./HistoryItem";
import { useHistoryStore } from "@/store";
import { getHistoryByUserIdUtility } from "@/utilities/getHistoryByUserId.utility";

export function History() {
  const { data } = useSession();
  const [parent] = useAutoAnimate();
  const history = useHistoryStore((state) => state.history);

  useEffect(() => {
    getHistoryByUserIdUtility(data?.user.id);
  }, [data?.user.id]);

  return (
    <div
      id="History"
      className="flex flex-col flex-1 transition-opacity duration-500 overflow-y-auto"
      ref={parent}
    >
      {history?.map((historyItem) => (
        <HistoryItem key={historyItem.id} historyItem={historyItem} />
      ))}
    </div>
  );
}
