import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Overlay, Presentation } from "@/components";
import { authOptions } from "@/utilities/auth.utility";

export default async function Main() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/auth/signin");
  }

  return (
    <main className="h-screen overflow-hidden w-full relative flex flex-col z-0 lg:flex-row">
      <Presentation />
      <Overlay />
    </main>
  );
}
