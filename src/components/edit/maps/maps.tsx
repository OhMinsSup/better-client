"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useGeolocated } from "react-geolocated";
import { getTargetElement } from "~/libs/browser/dom";
import { Toolbar } from "~/components/edit/toolbar";
import { useMapEditContext } from "~/libs/providers/map-edit-provider";

export default function Maps() {
  const $ele = useRef<HTMLDivElement | null>(null);
  const { $mapClient } = useMapEditContext();

  const { coords, isGeolocationAvailable, isGeolocationEnabled, getPosition } =
    useGeolocated({
      userDecisionTimeout: 5000,
    });

  const triggerPosition = useCallback(() => {
    if (coords) {
      $mapClient?.moveCurrentPosition(coords);
    }
  }, [$mapClient, coords]);

  useEffect(() => {
    const element = getTargetElement($ele);

    if (
      isGeolocationAvailable &&
      isGeolocationEnabled &&
      coords instanceof GeolocationCoordinates
    ) {
      if (element) {
        $mapClient.setOptions({
          element: element,
          center: new kakao.maps.LatLng(coords.latitude, coords.longitude),
        });

        $mapClient.makeMap();
      }
    }

    return () => {
      $mapClient.clear();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isGeolocationAvailable, isGeolocationEnabled, coords]);

  return (
    <>
      <Toolbar triggerPosition={triggerPosition} />
      <div
        className="w-full h-[calc(100vh-15px)] rounded-md border"
        ref={$ele}
      />
    </>
  );
}
