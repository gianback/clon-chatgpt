import { Overlay } from "@/components/Overlay";
import { Presentation } from "@/components/Presentation";

export default async function QueryDetails({
  params,
}: {
  params: { id: string };
}) {
  //fetch de la query y pintas
  console.log(params.id);
  return (
    <main className="h-screen overflow-hidden w-full relative flex flex-col z-0 lg:flex-row">
      <Presentation />
      <Overlay />
    </main>
  );
}
