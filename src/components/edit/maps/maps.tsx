"use client";
import React, { useEffect, useRef, useState } from "react";
import { useGeolocated } from "react-geolocated";
import { getTargetElement } from "~/libs/browser/dom";
import { MapsManager } from "~/libs/maps";

export default function Maps() {
  const $ele = useRef<HTMLDivElement | null>(null);
  const [mapClient] = useState(() => new MapsManager());

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      userDecisionTimeout: 5000,
    });

  useEffect(() => {
    const element = getTargetElement($ele);

    if (
      isGeolocationAvailable &&
      isGeolocationEnabled &&
      coords instanceof GeolocationCoordinates
    ) {
      if (element) {
        mapClient.setOptions({
          element: element,
          center: new kakao.maps.LatLng(coords.latitude, coords.longitude),
        });

        mapClient.makeMap();
      }
    }

    return () => {
      mapClient.clear();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isGeolocationAvailable, isGeolocationEnabled, coords]);

  return (
    <div className="w-full h-[calc(100vh-15px)] rounded-md border" ref={$ele} />
  );
}
