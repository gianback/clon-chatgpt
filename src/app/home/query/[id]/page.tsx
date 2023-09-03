import { Overlay, Presentation } from "@/components";
import { CurrentHistoryInitializer } from "@/components/CurrentHistoryInitializer";
import { getHistoryByIdService } from "@/services/getHistoryById.service";

export default async function QueryDetails({
  params,
}: {
  params: { id: string };
}) {
  const response = await getHistoryByIdService(params.id);

  return (
    <main className="h-screen overflow-hidden w-full relative flex flex-col z-0 lg:flex-row">
      <CurrentHistoryInitializer
        currentHistory={response.querys}
        paramsId={params.id}
      />
      <Presentation />
      <Overlay />
    </main>
  );
}
