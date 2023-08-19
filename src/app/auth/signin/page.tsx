"use client";
import { GithubIcon, GoogleIcon } from "@/components";
import { signIn } from "next-auth/react";
export default function SignIn() {
  return (
    <main className="h-screen bg-primary w-full flex items-center justify-center flex-col">
      <h1 className="text-5xl font-medium mb-16 text-white">
        Log in to Chatgpt
      </h1>
      <button
        className="flex gap-3 bg-black hover:bg-black/80 rounded-lg items-center justify-center text-white py-3 px-9"
        onClick={() => signIn("github")}
      >
        <GithubIcon />
        <span>Continue with GitHub</span>
      </button>
      <button
        className="flex mt-4 gap-3 bg-black hover:bg-black/80 rounded-lg items-center justify-center text-white py-3 px-9"
        onClick={() => signIn("github")}
      >
        <GoogleIcon />
        <span>Continue with Google</span>
      </button>
    </main>
  );
}
