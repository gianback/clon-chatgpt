"use client";
import { GithubIcon, GoogleIcon } from ".";
import { signIn } from "next-auth/react";

type ButtonType = {
  type: "github" | "google";
};

export function Button({ type }: ButtonType) {
  return (
    <button
      className="flex gap-3 bg-black hover:bg-black/80 rounded-lg items-center justify-center text-white py-3 px-9"
      onClick={() => signIn(type)}
    >
      {type === "github" ? <GithubIcon /> : <GoogleIcon />}

      <span>
        Continue with <span className="capitalize">{type}</span>
      </span>
    </button>
  );
}
