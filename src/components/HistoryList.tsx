"use client"

import { User } from "@/interfaces";
import { HistoryItem } from "."
import { useHistoryStore } from "@/store";
import { useAutoAnimate } from "@formkit/auto-animate/react";

interface Props{
    data: User
}

export function HistoryList({data}:Props){
    const {history} = data
    const [parent] = useAutoAnimate();

    return(
<div
      id="History"
      className="flex flex-col flex-1 transition-opacity duration-500 overflow-y-auto"
      ref={parent}
      >
      {history?.map((historyItem) => (
        <HistoryItem key={historyItem.id} historyItem={historyItem} />
        ))}
    </div>

    )
}