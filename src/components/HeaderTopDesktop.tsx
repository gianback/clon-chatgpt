"use client";
import { useMenuStore } from "@/store/MenuStore";
import { CloseMenuDesk, PlusIcon, XIcon } from ".";

export function HeaderTopDesktop() {
  const { menuActive, setMenuActive } = useMenuStore();

  return (
    <div className="mb-1 relative flex flex-row gap-2">
      <a className="flex p-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 flex-shrink-0 flex-grow">
        <PlusIcon />
        New chat
      </a>
      <button
        className="absolute top-1/2 lg:hidden translate-y-[-50%] right-[-14%] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
  );
}
