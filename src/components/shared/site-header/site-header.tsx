import React from "react";
import styles from "./styles.module.css";
import { Icons } from "../icons";
import { siteConfig, siteMenuConfig } from "~/config/site";
import Link from "next/link";
import { cn } from "~/utils/util";
import { NavigationLink } from "~/components/shared/navigation-link";
import { SiteHeaderRight } from "~/components/shared/site-header-right";
import { Button } from "~/components/ui/button";

export default function SiteHeader() {
  return (
    <>
      <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="flex w-full py-4 min-h-[73px]">
          <div className={styles.container}>
            <div className={cn(styles.logo_container, "gap-x-3")}>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="w-8 h-8 xl:hidden"
              >
                <Icons.menu className="h-4 w-4" />
              </Button>
              <Link
                href="/"
                aria-label="Better Logo"
                className="flex items-center justify-center gap-x-3"
              >
                <Icons.logo className="h-6 w-6" />
                <span className="hidden font-bold sm:inline-block">
                  {siteConfig.name}
                </span>
              </Link>
            </div>
            <div
              className={cn(
                styles.navigation_container,
                "text-accent-foreground"
              )}
            >
              {siteMenuConfig.main
                .filter((item) => !item.hidden)
                .map((item) => {
                  return <NavigationLink key={item.id} {...item} />;
                })}
            </div>
            <div className={styles.right_container}>
              <SiteHeaderRight />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
