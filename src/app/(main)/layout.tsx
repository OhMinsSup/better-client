import React from "react";
import { SiteHeader } from "~/components/shared/site-header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <SiteHeader />
      {children}
    </>
  );
}
