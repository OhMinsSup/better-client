"use client";
import React, { useEffect, useRef, useState } from "react";
import { getTargetElement } from "~/libs/browser/dom";
import { MapsManager } from "~/libs/maps";

export default function Maps() {
  const $ele = useRef<HTMLDivElement | null>(null);
  const [mapClient] = useState(() => new MapsManager());

  useEffect(() => {
    const element = getTargetElement($ele);

    if (element) {
      mapClient.setOptions({
        element: element,
      });

      mapClient.makeMap();
    }

    return () => {
      mapClient.clear();
    };
  }, []);

  return <div className="w-full h-[calc(100vh-15px)] rounded-md" ref={$ele} />;
}
