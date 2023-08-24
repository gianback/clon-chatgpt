import { authOptions } from "@/utilities/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Header } from "@/components/Header";
import { Presentation } from "@/components/Presentation";
import { Overlay } from "@/components/Overlay";
import { History } from "@/components/History";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/auth/signin");
  }

  return (
    <main className="h-screen overflow-hidden w-full relative flex flex-col z-0 lg:flex-row">
      <Header>
        <History />
      </Header>
      <Presentation />
      <Overlay />
    </main>
  );
}
