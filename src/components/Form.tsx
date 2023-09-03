"use client";
import { FormEvent, useState } from "react";
import { useSession } from "next-auth/react";
import { Loading, SendPromptIcon } from "./Icons";
import { useCurrentQueryStore, useHistoryStore } from "@/store";

import {
  createQueryService,
  createAnswerService,
  updateQueryService,
} from "@/services";
import { CreateQueryError } from "@/utilities/errors.utility";

export function Form() {
  const { data: userData } = useSession();
  const [isLoading, setisLoading] = useState(false);
  const { setCurrentId, currentId, setQueryList } = useCurrentQueryStore();
  const setHistory = useHistoryStore((state) => state.setHistory);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const prompt = formData.get("input") as string;

    if (prompt.trim() === "") return;

    form.reset();

    setQueryList([prompt]);

    try {
      setisLoading(true);

      const answer = await createAnswerService(prompt);

      if (!currentId) {
        const { queryCreated } = await createQueryService({
          historyItem: [prompt, answer],
          userId: userData?.user.id,
        });

        setCurrentId(queryCreated.id);
        setHistory([queryCreated]);
      } else {
        await updateQueryService({
          historyItemid: currentId,
          newQuery: [prompt, answer],
        });
      }
      setQueryList([answer]);
    } catch (error: any) {
      throw new CreateQueryError("Error creating query");
    } finally {
      setisLoading(false);
    }
  };

  return (
    <form
      className="strecth mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 lg:mx-auto lg:max-w-[50rem]"
      onSubmit={handleSubmit}
    >
      <div className="relative flex flex-col h-full flex-1 items-stretch bg-quaternary py-2 px-3 lg:py-4 lg:px-5 rounded-lg ">
        <input
          name="input"
          placeholder="Send a message"
          className="max-h-[200px] outline-none  h-[25px] overflow-y-hidden text-white m-0 w-full resize-none border-0 bg-transparent p-0 pr-10 focus:ring-0 focus-visible:ring-0 md:pr-12 pl-3 md:pl-0 shadow-sm"
        ></input>
        <button
          type="submit"
          disabled={isLoading}
          className="top-[50%] cursor-pointer translate-y-[-50%] absolute flex items-center justify-center p-1 rounded-md md:bottom-3 md:p-2 md:right-3  right-2 disabled:text-gray-400 enabled:bg-brand-purple text-white bottom-1.5 transition-colors disabled:opacity-40"
        >
          {isLoading ? <Loading /> : <SendPromptIcon />}
        </button>
      </div>
    </form>
  );
}
