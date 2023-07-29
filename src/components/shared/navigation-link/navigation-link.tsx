"use client";
import React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import type { SiteMenuConfig } from "~/config/site";
import { cn } from "~/utils/util";

interface NavigationLinkProps extends SiteMenuConfig {}

export default function NavigationLink(props: NavigationLinkProps) {
  const segment = useSelectedLayoutSegment();
  return (
    <Link
      href={props.href}
      className={cn(
        "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm py-2.5 px-5",
        segment === props.segment ? "text-foreground" : "text-foreground/60",
        props.disabled && "cursor-not-allowed opacity-80"
      )}
    >
      {props.text}
    </Link>
  );
}
