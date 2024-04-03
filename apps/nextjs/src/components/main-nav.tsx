"use client";

import React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useTheme } from "next-themes";

import { cn } from "@saasfly/ui";
import * as Icons from "@saasfly/ui/icons";

import { MobileNav } from "~/components/mobile-nav";
import type { MainNavItem } from "~/types";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  const isDarkMode = theme === "dark";
  const logoColor = isDarkMode ? "#FFFFFF" : "#000000";
  if (!mounted) return null;

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Link href="/" className="hidden items-center space-x-2 md:flex">
          <Icons.Saasfly className="h-8 w-8" fill={logoColor} />
        </Link>
        {items?.length ? (
          <nav className="hidden space-x-6 md:flex">
            {items?.map((item, index) => (
              <Link
                key={index}
                href={item.disabled ? "#" : `${item.href}`}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-foreground/80",
                  item.href.startsWith(`/${segment}`)
                    ? "text-foreground"
                    : "text-foreground/60",
                  item.disabled && "cursor-not-allowed opacity-80",
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
      <button
        className="md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? (
          <Icons.Close className="h-6 w-6" />
        ) : (
          <Icons.Command className="h-6 w-6" />
        )}
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
}
