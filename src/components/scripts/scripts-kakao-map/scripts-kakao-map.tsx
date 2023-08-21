"use client";
import React, { useState } from "react";
import Script from "next/script";
import { env } from "../../../../env.mjs";

interface ScriptKakaoMapProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export default function ScriptKakaoMap({
  children,
  fallback,
}: ScriptKakaoMapProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Script
        id="kakao-map-init"
        strategy="afterInteractive"
        src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY}&autoload=false`}
        onLoad={() => {
          console.log("kakao map loaded");
          window.kakao.maps.load(() => {
            setLoaded(true);
          });
        }}
      />
      {loaded ? <>{children}</> : <>{fallback}</>}
    </>
  );
}
