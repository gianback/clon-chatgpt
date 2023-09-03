"use client";
import ReactMarkdown from "react-markdown";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useSession } from "next-auth/react";

import { useCurrentQueryStore } from "@/store";
import { OpenaiIcon } from ".";
import { userStore } from "@/store/userStore";

export const CurrentHistory = () => {
  const { queryList } = useCurrentQueryStore();
  const [parent] = useAutoAnimate();
  const { picture } = userStore();

  return (
    <ul
      id="CurrentHistory"
      className="w-full h-full mx-auto flex flex-col items-center overflow-y-auto overflow-x-hidden"
      ref={parent}
    >
      {queryList?.map((prompt, index) => (
        <li
          key={prompt + index}
          className={`text-white px-4 lg:px-0 w-full flex justify-center fadeIn ${
            (index + 1) % 2 !== 0 ? "bg-primary" : "bg-quinary"
          }`}
        >
          <div className="max-w-[48rem] flex gap-8 py-6 w-[48rem] ">
            <div className="bg-[#19c37d] w-[30px] h-[30px] flex-shrink-0 flex items-center justify-center">
              {(index + 1) % 2 !== 1 ? (
                <OpenaiIcon />
              ) : (
                <picture>
                  <img src={picture} alt="user image" />
                </picture>
              )}
            </div>
            <div>
              <ReactMarkdown>{prompt}</ReactMarkdown>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
