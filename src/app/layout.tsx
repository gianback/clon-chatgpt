import { Header } from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";

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
      <body className="min-h-screen overflow-hidden w-full h-full relative flex flex-col z-0 lg:flex-row">
        <Header />
        {children}
      </body>
    </html>
  );
}
