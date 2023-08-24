"use client";
import { useSession } from "next-auth/react";
import { Dots } from ".";

export function HeaderBottom() {
  const { data: session } = useSession();

  return (
    <div className="border-t border-white/20 pt-2 empty:hidden">
      <div className="group relative" data-headlessui-state="">
        <button className="flex w-full items-center gap-2.5 rounded-md px-3 py-3 text-sm transition-colors duration-200 hover:bg-gray-800 group-ui-open:bg-gray-800">
          <div className="flex-shrink-0">
            {session ? (
              <picture className="relative flex justify-center align-center">
                <img
                  src={session?.user?.image as string}
                  alt=""
                  className="w-8"
                />
              </picture>
            ) : (
              <div className="w-8 h-8 bg-primary animate-pulse" />
            )}
          </div>
          <div className="grow overflow-hidden text-ellipsis whitespace-nowrap text-left text-white">
            {session ? (
              <span>{session?.user?.email}</span>
            ) : (
              <div className="w-40 h-8 bg-primary animate-pulse"></div>
            )}
          </div>
          <Dots />
        </button>
      </div>
    </div>
  );
}
