import type { Metadata } from "next";
import "./globals.css";
import { NextAuthProvider } from "@/components/NextAuthProvider";

export const metadata: Metadata = {
  title: "Clone ChatGpt",
  description: "A funny ChatGPT clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* suppressHydrationWarning={true} */}
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
