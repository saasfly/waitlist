import { Suspense } from "react";

import { NavBar } from "~/components/navbar";
import { SiteFooter } from "~/components/site-footer";
import { getMarketingConfig } from "~/config/ui/marketing";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Suspense fallback="...">
        <NavBar
          items={getMarketingConfig().mainNav}
          scroll={true}
          dropdown={{ dashboard: "Dashboard" }}
        />
      </Suspense>
      <main className="flex-1">{children}</main>
      <SiteFooter className="border-t" />
    </div>
  );
}
