"use client";
import { useMenuStore } from "@/store/MenuStore";

export function Overlay() {
  const { menuActive, setMenuActive } = useMenuStore();

  return (
    <div
      onClick={() => setMenuActive(!menuActive)}
      className={`fixed inset-0 bg-[#444654]/50 ${
        menuActive
          ? "opacity-1 z-[1] lg:opacity-0 lg:z-[-1]"
          : "opacity-0 z-[-1] "
      }`}
    />
  );
}
