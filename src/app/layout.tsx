import { Header } from "@/components/Header";
import type { Metadata } from "next";

import "./globals.css";

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
      <body className="h-screen overflow-hidden w-full relative flex flex-col z-0 lg:flex-row">
        <Header />
        {children}
      </body>
    </html>
  );
}
