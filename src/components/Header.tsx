"use client";
import { useState } from "react";
import { CloseMenuDesk, Dots, HamburguersMenu, PlusIcon, XIcon } from "./Icons";

export function Header() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <header
        className={`bg-primary relative transition-margin duration-75 lg:w-[340px] ${
          menuActive ? "lg:ml-0" : "lg:ml-[-340px]"
        }`}
      >
        <div className="flex justify-between py-4 px-4 border-b-2 border-white/20 lg:hidden">
          <button
            className="text-white"
            onClick={() => setMenuActive(!menuActive)}
          >
            <HamburguersMenu />
          </button>
          <span className="text-white">New Chat</span>
          <button className="text-white">
            <PlusIcon />
          </button>
        </div>
        <div
          className={`bg-secondary transition-all duration-150 bottom-0 fixed top-0 h-full z-10 lg:flex lg:relative ${
            menuActive ? "left-0" : "left-[-100%] lg:left-0"
          }
         
          `}
        >
          <div className="flex h-full min-h-0 flex-col ">
            <div className="scrollbar-trigger relative h-full w-full flex-1 items-start border-white/20">
              <nav
                className="flex h-full w-full flex-col p-2"
                aria-label="Chat history"
              >
                <div className="mb-1 relative flex flex-row gap-2">
                  <a className="flex p-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 flex-shrink-0 flex-grow">
                    <PlusIcon />
                    New chat
                  </a>
                  <button
                    className="absolute top-1/2 lg:hidden translate-y-[-50%] right-[-10%] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setMenuActive(!menuActive)}
                  >
                    <XIcon />
                  </button>
                  <button
                    onClick={() => setMenuActive(!menuActive)}
                    className={`hidden lg:flex p-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer rounded-md border border-white/20 hover:bg-gray-500/10 h-11 ${
                      menuActive ? "left-[-100%]" : "fixed top-3 left-3 z-[10]"
                    }`}
                  >
                    <CloseMenuDesk />
                  </button>
                </div>
                <div className="absolute left-0 top-14 z-20 overflow-hidden transition-all duration-500 invisible max-h-0">
                  <div className="h-24 bg-gradient-to-t from-gray-900/0 to-gray-900"></div>
                </div>
                <div className="flex-col flex-1 transition-opacity duration-500 overflow-y-auto"></div>
                <div className="border-t border-white/20 pt-2 empty:hidden">
                  <div className="group relative" data-headlessui-state="">
                    <button className="flex w-full items-center gap-2.5 rounded-md px-3 py-3 text-sm transition-colors duration-200 hover:bg-gray-800 group-ui-open:bg-gray-800">
                      <div className="flex-shrink-0">
                        <div className="relative flex">imagen user</div>
                      </div>
                      <div className="grow overflow-hidden text-ellipsis whitespace-nowrap text-left text-white">
                        gian_franco_08@hotmail.com
                      </div>
                      <Dots />
                    </button>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <div
        onClick={() => setMenuActive(!menuActive)}
        className={`fixed inset-0 bg-[#444654]/50 ${
          menuActive
            ? "opacity-1 z-[1] lg:opacity-0 lg:z-[-1]"
            : "opacity-0 z-[-1] "
        }`}
      />
    </>
  );
}
