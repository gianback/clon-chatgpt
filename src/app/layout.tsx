import type { Metadata } from "next";
import "./globals.css";
import { NextAuthProvider } from "@/components";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "@/utilities/auth.utility";
import { UserStoreInitializer } from "@/components/UserStoreInitializer";
import { userStore } from "@/store/userStore";

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
  userStore.setState({
    email: session?.user?.email,
    id: session?.user?.id,
    picture: session?.user?.image,
  });
  return (
    <html lang="en">
      <body>
        <UserStoreInitializer session={session} />
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
