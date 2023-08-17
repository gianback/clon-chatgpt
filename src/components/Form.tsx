"use client";
import { FormEvent } from "react";
import { SendPrompt } from "./Icons";
import { getAnswerService } from "@/services/";
import { usePromptStore } from "@/store/PromptStore";
import crypto from "crypto";

export function Form() {
  const { setPrompt } = usePromptStore();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const input = formData.get("input") as string;
    setPrompt({ id: window.crypto.randomUUID(), prompt: input });
    form.reset();
    const response = await getAnswerService(input);
    setPrompt({ id: window.crypto.randomUUID(), prompt: response });
  };

  return (
    <form
      className="strecth mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl"
      onSubmit={handleSubmit}
    >
      <div className="relative flex flex-col h-full flex-1 items-stretch bg-quaternary py-2 px-3 lg:py-4 lg:px-5 rounded-lg ">
        <input
          name="input"
          placeholder="Send a message"
          className="max-h-[200px] outline-none  h-[25px] overflow-y-hidden text-tertiary m-0 w-full resize-none border-0 bg-transparent p-0 pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pr-12 pl-3 md:pl-0 shadow-sm"
        ></input>
        <button
          type="submit"
          className="top-[50%] cursor-pointer translate-y-[-50%] absolute flex items-center justify-center p-1 rounded-md md:bottom-3 md:p-2 md:right-3 dark:hover:bg-gray-900 dark:disabled:hover:bg-transparent right-2 disabled:text-gray-400 enabled:bg-brand-purple text-white bottom-1.5 transition-colors disabled:opacity-40"
        >
          <SendPrompt />
        </button>
      </div>
    </form>
  );
}
