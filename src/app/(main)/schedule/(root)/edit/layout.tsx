"use client";
import React, { useEffect, useMemo, useRef } from "react";
import { Provider as MapEditProvider } from "~/libs/providers/map-edit-provider";
import { EditHeader } from "~/components/edit/edit-header";
import { useMapContext } from "~/libs/providers/map-provider";
import { generateUUID } from "~/utils/util";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { useForceUpdate } from "~/libs/hooks/useForceUpdate";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const mounted = useRef(false);
  const { $managers } = useMapContext();
  const forceUpdate = useForceUpdate();

  const tabs = useMemo(() => {
    return $managers.toArrayKeys();
  }, [$managers, forceUpdate]);

  useEffect(() => {
    if (mounted.current) return;
    const uuid = generateUUID();

    $managers.add(uuid);

    mounted.current = true;

    forceUpdate();

    return () => {
      $managers.clear();
      mounted.current = false;
    };
  }, []);

  return (
    <>
      <EditHeader />
      <div className="px-4 pb-4 w-full min-h-screen">
        {tabs.length > 1 ? (
          <Tabs>
            <TabsList className="grid w-full grid-cols-2">
              {tabs.map((tab, index) => (
                <TabsTrigger key={tab.key} value={tab.key}>
                  {`${index + 1}일`}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabs.map((tab) => (
              <TabsContent key={tab.key} value={tab.key}>
                <MapEditProvider $mapClient={$managers.get(tab.key)}>
                  {children}
                </MapEditProvider>
              </TabsContent>
            ))}
          </Tabs>
        ) : (
          <>
            {tabs.map((tab) => (
              <React.Fragment key={tab.key}>
                <MapEditProvider $mapClient={$managers.get(tab.key)}>
                  {children}
                </MapEditProvider>
              </React.Fragment>
            ))}
          </>
        )}
      </div>
    </>
  );
}
