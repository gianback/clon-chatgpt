"use client";
import { signOut } from "next-auth/react";
import { Dots, LogOutIcon } from ".";
import { useState } from "react";
import { userStore } from "@/store/userStore";

export function HeaderBottom() {
  const [email, picture] = userStore((state) => [state.email, state.picture]);
  const [isLogoutMenuActive, setIsLogoutMenuActive] = useState(false);

  return (
    <section className="border-t border-white/20 pt-2 empty:hidden relative">
      <div className="group relative">
        <div className="flex w-full items-center gap-2.5 rounded-md px-3 py-3 text-sm transition-colors duration-200 hover:bg-gray-800 group-ui-open:bg-gray-800">
          <div className="flex-shrink-0">
            {picture ? (
              <picture className="relative flex justify-center align-center">
                <img src={picture as string} alt="" className="w-8" />
              </picture>
            ) : (
              <div className="w-8 h-8 bg-primary animate-pulse" />
            )}
          </div>
          <div className="grow overflow-hidden text-ellipsis whitespace-nowrap text-left text-white">
            {email ? (
              <span>{email}</span>
            ) : (
              <div className="w-40 h-8 bg-primary animate-pulse"></div>
            )}
          </div>
          <button
            className="relative"
            onClick={() => setIsLogoutMenuActive(!isLogoutMenuActive)}
          >
            <Dots />
          </button>
        </div>
        <div
          className={`absolute flex gap-3 items-center left-0 right-0 top-[-100%] transition-opacity duration-200 ease-in rounded-md bg-black p-4 ${
            isLogoutMenuActive ? "opacity-1" : "opacity-0"
          }`}
        >
          <span className="flex-shrink-0 text-white">
            <LogOutIcon />
          </span>
          <button
            className="text-white flex-1 text-left"
            onClick={() => signOut()}
          >
            Logout
          </button>
        </div>
      </div>
    </section>
  );
}
