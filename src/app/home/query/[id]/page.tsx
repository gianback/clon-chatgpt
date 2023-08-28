"use client";
import { Overlay } from "@/components/Overlay";
import { Presentation } from "@/components/Presentation";
import { getHistoryByIdService } from "@/services/getHistoryById.service";
import { useCurrentQueryStore } from "@/store/CurrentQuery";
import { useEffect } from "react";

const saveData = async (id: string) => {
  const setQueryList = useCurrentQueryStore.getState().setQueryList;
  const setCurrentId = useCurrentQueryStore.getState().setCurrentId;
  const setIsLoading = useCurrentQueryStore.getState().setIsLoading;
  try {
    setIsLoading(true);
    const response = await getHistoryByIdService(id);
    setQueryList(response.querys, false);
    setCurrentId(id);
  } catch (error) {
    throw new Error("Error get history by id");
  } finally {
    setIsLoading(false);
  }
};

export default function QueryDetails({ params }: { params: { id: string } }) {
  useEffect(() => {
    saveData(params.id);
  }, [params.id]);

  return (
    <main className="h-screen overflow-hidden w-full relative flex flex-col z-0 lg:flex-row">
      <Presentation />
      <Overlay />
    </main>
  );
}
