import { authOptions } from "@/utilities/auth";
import { NextPageContext } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Header } from "@/components/Header";
import { Presentation } from "@/components/Presentation";

export default async function Home(cxt: NextPageContext) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/auth/signin");
  }

  console.log(session);
  return (
    <main className="h-screen overflow-hidden w-full relative flex flex-col z-0 lg:flex-row">
      <Header />
      <Presentation />
    </main>
  );
}
