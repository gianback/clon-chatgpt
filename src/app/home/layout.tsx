import type { Metadata } from "next";
import { Header, HistorySection } from "@/components";
import { UserStoreInitializer } from "@/components/UserStoreInitializer";
import { userStore } from "@/store/userStore";
import { Session, getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/utilities/auth.utility";
import "../globals.css";

export const metadata: Metadata = {
  title: "Clone ChatGpt",
  description: "A funny ChatGPT clone",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
    <html lang="en">
      <body>
        <div className="h-screen overflow-hidden w-full relative flex flex-col z-0 lg:flex-row">
          <UserStoreInitializer session={session} />
          <Header>
            <HistorySection />
          </Header>
          {children}
        </div>
      </body>
    </html>
  );
}
