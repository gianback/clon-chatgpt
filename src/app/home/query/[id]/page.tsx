"use client";

import { Overlay, Presentation } from "@/components";
import { saveQueryListUtility } from "@/utilities/saveQueryList.utility";
import { useEffect } from "react";

export default function QueryDetails({ params }: { params: { id: string } }) {
  useEffect(() => {
    saveQueryListUtility(params.id);
  }, [params.id]);

  return (
    <main className="h-screen overflow-hidden w-full relative flex flex-col z-0 lg:flex-row">
      <Presentation />
      <Overlay />
    </main>
  );
}
