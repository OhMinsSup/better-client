import React from "react";
import { SiteHeader } from "~/components/shared/site-header";
import { SiteFooter } from "~/components/shared/site-footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
