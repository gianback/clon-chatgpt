import type { Metadata } from "next";
import { Header, HistorySection } from "@/components";

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
  return (
    <html lang="en">
      <body>
        <div className="h-screen overflow-hidden w-full relative flex flex-col z-0 lg:flex-row">
          <Header>
            <HistorySection />
          </Header>
          {children}
        </div>
      </body>
    </html>
  );
}
