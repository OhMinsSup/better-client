"use client";
import React from "react";
import { Provider } from "~/libs/providers/map-provider";
import { ScriptsKakaoMap } from "~/components/scripts/scripts-kakao-map";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <ScriptsKakaoMap fallback={<>Loading....</>}>
      <Provider>{children}</Provider>
    </ScriptsKakaoMap>
  );
}
