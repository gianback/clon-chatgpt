"use client";
import { usePromptStore } from "@/store/PromptStore";
import ReactMarkdown from "react-markdown";
import { OpenaiIcon } from "./Icons";
export const History = () => {
  const history = usePromptStore((state) => state.history);
  return (
    <ul className="w-full h-full mx-auto flex flex-col items-center overflow-y-auto">
      {history?.map(({ id, prompt }, index) => (
        <li
          key={id}
          className={`text-white px-4 lg:px-0 w-full flex justify-center ${
            (index + 1) % 2 !== 0 ? "bg-primary" : "bg-quinary"
          }`}
        >
          <div className="max-w-[48rem] flex gap-8 py-6 w-[48rem] ">
            <div className="bg-[#19c37d] w-[30px] h-[30px] flex-shrink-0 flex items-center justify-center">
              <OpenaiIcon />
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
