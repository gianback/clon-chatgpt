"use client";
import { FormEvent, useState } from "react";
import { SendPromptIcon } from "./Icons";
import { createAnswerService } from "@/services/";
import { createQueryService } from "@/services/create.query.service";
import { useSession } from "next-auth/react";
import { useCurrentQueryStore } from "@/store/CurrentQuery";
import { updateQueryService } from "@/services/update.query.service";

export function Form() {
  const { data: userData } = useSession();
  const [isLoading, setisLoading] = useState(false);
  const { setCurrentId, currentId, setQueryList } = useCurrentQueryStore();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const prompt = formData.get("input") as string;
    form.reset();
    setQueryList(prompt);
    try {
      setisLoading(true);
      const answer = await createAnswerService(prompt);

      if (!currentId) {
        const { queryCreated } = await createQueryService({
          historyItem: [prompt, answer],
          userId: userData?.user.id,
        });
        setCurrentId(queryCreated.id);
      } else {
        await updateQueryService({
          historyItemid: currentId,
          newQuery: [prompt, answer],
        });
      }
      setQueryList(answer);
    } catch (error) {
      throw new Error("Error submit");
    } finally {
      setisLoading(false);
    }
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
          {isLoading ? (
            <svg
              aria-hidden="true"
              role="status"
              className="inline w-4 h-4 mr-3 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
          ) : (
            <SendPromptIcon />
          )}
        </button>
      </div>
    </form>
  );
}
