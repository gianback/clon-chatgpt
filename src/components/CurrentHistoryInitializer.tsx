"use client";

import { useCurrentQueryStore } from "@/store";
import { useRef } from "react";

interface Props {
  currentHistory: string[];
  paramsId: string;
}
export function CurrentHistoryInitializer({ currentHistory, paramsId }: Props) {
  const initialized = useRef(false);
  if (!initialized.current) {
    useCurrentQueryStore.setState({ queryList: currentHistory });
    useCurrentQueryStore.setState({ currentId: paramsId });
    initialized.current = true;
  }

  return null;
}
