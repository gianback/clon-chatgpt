import type { Metadata } from "next";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Clone ChatGpt",
  description: "A funny ChatGPT clone",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
