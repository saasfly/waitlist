import * as React from "react";

import { cn } from "@saasfly/ui";
import * as Icons from "@saasfly/ui/icons";

import { ModeToggle } from "~/components/mode-toggle";

function getCopyrightText() {
  const currentYear = new Date().getFullYear();
  const copyrightTemplate = String(
    "Copyright © ${currentYear} Nextify Limited. All rights reserved.",
  );
  return copyrightTemplate?.replace("${currentYear}", String(currentYear));
}

export function SiteFooter({ className }: { className?: string }) {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Icons.Nextjs className="mx-auto h-6 w-6" />
          <p className="text-center text-sm leading-loose md:text-left">
            {getCopyrightText()}
          </p>
        </div>
        <ModeToggle />
      </div>
    </footer>
  );
}
