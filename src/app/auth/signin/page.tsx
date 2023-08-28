import { Button } from "@/components/Buttons";
import { authOptions } from "@/utilities/auth.utility";
import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";
export default async function SignIn() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/home");
  }
  return (
    <main className="h-screen bg-primary w-full flex items-center justify-center flex-col">
      <h1 className="text-5xl font-medium mb-16 text-white text-center">
        Log in to Chatgpt
      </h1>
      <div className="flex flex-col gap-4">
        <Button type="github" />
        <Button type="google" />
      </div>
    </main>
  );
}
