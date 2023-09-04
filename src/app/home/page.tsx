import { Session, getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/utilities/auth.utility";
import { Overlay, Presentation } from "@/components";
import { UserStoreInitializer } from "@/components/UserStoreInitializer";
import { userStore } from "@/store/userStore";

export default async function Main() {
  const session = (await getServerSession(authOptions)) as Session;
  if (!session) {
    redirect("/auth/signin");
  }
  userStore.setState({
    email: session?.user?.email,
    id: session?.user?.id,
    picture: session?.user?.image,
  });

  return (
    <main className="h-screen overflow-hidden w-full relative flex flex-col z-0 lg:flex-row">
      <UserStoreInitializer session={session} />
      <Presentation />
      <Overlay />
    </main>
  );
}
