"use client";
import { Form, CurrentHistory } from "@/components";
import { useCurrentQueryStore } from "@/store/CurrentQuery";
import { Spinner } from "./Spinners";

export function Presentation() {
  const queryList = useCurrentQueryStore((state) => state.queryList);
  const isLoading = useCurrentQueryStore((state) => state.isLoading);
  return (
    <section className="relative flex min-h-[94vh] max-w-full flex-1 overflow-hidden bg-primary">
      <div className="flex h-full min-h-[94vh] max-w-full flex-1 flex-col overflow-x-hidden">
        <main className="relative min-h-[inherit] w-full transition-width flex flex-col overflow-auto overflow-x-hidden items-stretch flex-1">
          <h2
            className={`${
              queryList.length > 0 && "hidden"
            } text-white text-4xl font-semibold text-center mt-6 sm:mt-[6vh] ml-auto mr-auto mb-4 sm:mb-16 flex gap-2 items-center justify-center`}
          >
            ChatGPT
          </h2>
          <div className="h-full flex flex-col ">
            {isLoading ? <Spinner /> : <CurrentHistory />}
            <div className="h-[80px] lg:h-[90px] w-full" />
            <div className="bg-primary absolute bottom-[5px] left-0 w-full border-t border-tertiary md:border-transparent md md:bg-vert-light-gradien  pt-2 pb-2 md:pl-2">
              <Form />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
