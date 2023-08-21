"use client";
import React from "react";
import { Provider } from "~/libs/providers/map-provider";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <Provider>{children}</Provider>;
}
