"use client";
import { HistoryItem } from ".";
import { useHistoryStore } from "@/store";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export function HistoryList() {
  const [parent] = useAutoAnimate();
  const history = useHistoryStore((state) => state.history);

  return (
    <div
      id="History"
      className="flex flex-col flex-1 transition-opacity duration-500 overflow-y-auto overflow-x-hidden"
      ref={parent}
    >
      {history?.map((historyItem) => (
        <HistoryItem key={historyItem.id} historyItem={historyItem} />
      ))}
    </div>
  );
}
