"use client";

import { MainNav } from "~/components/main-nav";
import useScroll from "~/hooks/use-scroll";
import type { MainNavItem } from "~/types";

interface NavBarProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
  rightElements?: React.ReactNode;
  scroll?: boolean;
  dropdown: Record<string, string>;
}

export function NavBar({
  items,
  children,
  rightElements,
  scroll = false,
}: NavBarProps) {
  const scrolled = useScroll(50);
  return (
    <header
      className={`sticky top-0 z-40 flex w-full justify-center bg-background/60 backdrop-blur-xl transition-all ${
        scroll ? (scrolled ? "border-b" : "bg-background/0") : "border-b"
      }`}
    >
      <div className="container flex h-16 items-center justify-between py-4">
        <MainNav items={items}>{children}</MainNav>

        <div className="flex items-center space-x-3">{rightElements}</div>
      </div>
    </header>
  );
}
