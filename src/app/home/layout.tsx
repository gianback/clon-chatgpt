import type { Metadata } from "next";
import { Header, HistorySection } from "@/components";

import "../globals.css";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "@/utilities/auth.utility";
import { UserStoreInitializer } from "@/components/UserStoreInitializer";

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

  return (
    <html lang="en">
      <body>
        <div className="h-screen overflow-hidden w-full relative flex flex-col z-0 lg:flex-row">
          <UserStoreInitializer session={session} />
          <Header>
            <HistorySection id={session?.user.id} />
          </Header>
          {children}
        </div>
      </body>
    </html>
  );
}
