"use client";
import { HamburguersMenu, PlusIcon } from "./Icons";
import { HeaderBottom } from "./HeaderBottom";
import { HeaderTopDesktop } from "./HeaderTopDesktop";
import { useRouter } from "next/navigation";
import { newChatUtility } from "@/utilities/newChat.utility";
import { useCurrentQueryStore, useMenuStore } from "@/store";

interface HeaderProps {
  children: React.ReactNode;
}

export function Header({ children }: HeaderProps) {
  const { menuActive, setMenuActive } = useMenuStore();
  const queryList = useCurrentQueryStore((state) => state.queryList);
  const router = useRouter();

  const handleNewChat = () => {
    newChatUtility();
    router.push("/home");
  };

  return (
    <header
      className={`bg-primary relative transition-margin duration-75 z-10 lg:w-[340px] ${
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
        <button className="text-white">{queryList[0] ?? "New Chat"}</button>
        <button className="text-white" onClick={handleNewChat}>
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
