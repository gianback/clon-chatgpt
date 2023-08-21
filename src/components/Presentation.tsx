"use client";
import { Form, History } from "@/components";
import { usePromptStore } from "@/store/PromptStore";
import { useSession } from "next-auth/react";

export function Presentation() {
  const history = usePromptStore((state) => state.history);
  const { data } = useSession();

  return (
    <section className="relative flex min-h-[94vh] max-w-full flex-1 overflow-hidden bg-primary">
      <div className="flex h-full min-h-[94vh] max-w-full flex-1 flex-col">
        <main className="relative min-h-[inherit] w-full transition-width flex flex-col overflow-auto items-stretch flex-1">
          <h2
            className={`${
              history.length > 0 && "hidden"
            } text-white text-4xl font-semibold text-center mt-6 sm:mt-[6vh] ml-auto mr-auto mb-4 sm:mb-16 flex gap-2 items-center justify-center`}
          >
            ChatGPT
          </h2>
          <div className="h-full flex flex-col ">
            <History />
            <div className="h-[60px] lg:h-[90px] w-full" />
            <div className="bg-primary absolute bottom-0 left-0 w-full border-t border-tertiary md:border-transparent md:dark:border-transparent md:bg-vert-light-gradien dark:bg-gray-800 dark:md:bg-vert-dark-gradient pt-2 pb-2 md:pl-2 md:w-[calc(100%-1.5rem)]">
              <Form />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
