"use client";
import { HamburguersMenu, PlusIcon } from "./Icons";
import { useMenuStore } from "@/store/MenuStore";
import { HeaderBottom } from "./HeaderBottom";
import { HeaderTopDesktop } from "./HeaderTopDesktop";

interface HeaderProps {
  children: React.ReactNode;
}

export function Header({ children }: HeaderProps) {
  const { menuActive, setMenuActive } = useMenuStore();

  return (
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
      <nav
        className={`bg-secondary transition-all duration-150 bottom-0 fixed top-0 h-full z-10 lg:flex lg:relative ${
          menuActive ? "left-0" : "left-[-100%] lg:left-0"
        }
         
          `}
      >
        <div className="flex h-full min-h-0 flex-col w-full">
          <div className="scrollbar-trigger relative h-full w-full flex-1 items-start border-white/20">
            <div
              className="flex h-full w-full flex-col p-2"
              aria-label="Chat history"
            >
              <HeaderTopDesktop />
              <div className="absolute left-0 top-14 z-20 overflow-hidden transition-all duration-500 invisible max-h-0">
                <div className="h-24 bg-gradient-to-t from-gray-900/0 to-gray-900"></div>
              </div>
              {children}
              <HeaderBottom />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
