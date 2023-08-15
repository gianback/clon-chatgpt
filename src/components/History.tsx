"use client";
import { usePromptStore } from "@/store/PromptStore";
import ReactMarkdown from "react-markdown";
import { OpenaiIcon } from "./Icons";
export const History = () => {
  const history = usePromptStore((state) => state.history);
  return (
    <ul className="max-w-[48rem] px-4 lg:px-0 w-full mx-auto h-[44rem]">
      {history?.map(({ id, prompt }) => (
        <li
          key={id}
          className="text-white flex gap-8 py-6 w-[48rem] max-w-full"
        >
          <div className="bg-[#19c37d] w-[30px] h-[30px] flex-shrink-0 flex items-center justify-center">
            <OpenaiIcon />
          </div>
          <div>
            <ReactMarkdown>{prompt}</ReactMarkdown>
          </div>
        </li>
      ))}
    </ul>
  );
};
