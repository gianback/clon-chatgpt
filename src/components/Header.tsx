"use client";
import { useState } from "react";
import { Dots, HamburguersMenu, PlusIcon, XIcon } from "./Icons";

export function Header() {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <>
      <header
        className="bg-primary flex justify-between py-4 px-4"
        style={{ borderBottom: "1px solid white" }}
      >
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
        {/* flex-shrink-0 overflow-x-hidden w-full bg-primary */}
        <div
          className={`bg-secondary transition-all duration-150 bottom-0 fixed top-0 z-10 ${
            menuActive ? "left-0" : "left-[-100%]"
          }`}
        >
          <div className="flex  h-full min-h-0 flex-col ">
            <div className="scrollbar-trigger relative h-full w-full flex-1 items-start border-white/20">
              {/* <h2
              style={{
                position: "absolute",
                border: "0px",
                width: "1px",
                height: "1px",
                padding: "0px",
                margin: "-1px",
                overflow: "hidden",
                clip: "rect(0px, 0px, 0px, 0px)",
                whiteSpace: "nowrap",
                overflowWrap: "normal",
              }}
            >
              Chat history
            </h2> */}
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
                    className="absolute top-1/2 translate-y-[-50%] right-[-10%] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setMenuActive(!menuActive)}
                  >
                    <XIcon />
                  </button>
                </div>
                <div className="absolute left-0 top-14 z-20 overflow-hidden transition-all duration-500 invisible max-h-0">
                  <div className="bg-gray-900 px-4 py-3">
                    <div className="p-1 text-sm text-gray-100">
                      Chat History is off for this browser.
                    </div>
                    <div className="p-1 text-xs text-gray-500">
                      When history is turned off, new chats on this browser wont
                      appear in your history on any of your devices, be used to
                      train our models, or stored for longer than 30 days.{" "}
                      <strong>
                        This setting does not sync across browsers or devices.
                      </strong>{" "}
                      <a
                        href="https://help.openai.com/en/articles/7730893"
                        target="_blank"
                        className="underline"
                        rel="noreferrer"
                      >
                        Learn more
                      </a>
                    </div>
                    <button className="btn relative btn-primary mt-4 w-full">
                      <div className="flex w-full gap-2 items-center justify-center">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                          height="1em"
                          width="1em"
                        >
                          <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
                          <line x1="12" y1="2" x2="12" y2="12"></line>
                        </svg>
                        Enable chat history
                      </div>
                    </button>
                  </div>
                  <div className="h-24 bg-gradient-to-t from-gray-900/0 to-gray-900"></div>
                </div>
                <div className="flex-col flex-1 transition-opacity duration-500 overflow-y-auto"></div>
                <div className="border-t border-white/20 pt-2 empty:hidden">
                  <div className="group relative" data-headlessui-state="">
                    <button
                      className="flex w-full items-center gap-2.5 rounded-md px-3 py-3 text-sm transition-colors duration-200 hover:bg-gray-800 group-ui-open:bg-gray-800"
                      type="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-state="closed"
                      id="headlessui-menu-button-:r9:"
                      data-headlessui-state=""
                    >
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
          menuActive ? "opacity-1 z-[1]" : "opacity-0 z-[-1]"
        }`}
      />
    </>
  );
}
