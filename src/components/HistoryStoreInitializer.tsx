"use client";

import { HistoryItem } from "@/interfaces";
import { useHistoryStore } from "@/store";
import { useRef } from "react";

interface Props {
  history: HistoryItem[];
}
export function HistoryStoreInitializer({ history }: Props) {
  const initialized = useRef(false);
  if (!initialized.current) {
    useHistoryStore.setState({ history });
    initialized.current = true;
  }

  return null;
}
