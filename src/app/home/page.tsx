import { Overlay, Presentation } from "@/components";

export default async function Main() {
  return (
    <main className="h-screen overflow-hidden w-full relative flex flex-col z-0 lg:flex-row">
      <Presentation />
      <Overlay />
    </main>
  );
}
