"use client";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { Provider as MapEditProvider } from "~/libs/providers/map-edit-provider";
import { EditHeader } from "~/components/edit/edit-header";
import { useMapContext } from "~/libs/providers/map-provider";
import { generateUUID } from "~/utils/util";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const mounted = useRef(false);
  const { $managers, forceUpdate, updated } = useMapContext();

  const tabs = useMemo(() => {
    return $managers.toArrayKeys();
  }, [$managers, updated]);

  const currentTab = useMemo(() => {
    return $managers.$key ?? undefined;
  }, [$managers.$key, updated]);

  const onChangeTab = useCallback(
    (key: string) => {
      $managers.changeKey(key);
      forceUpdate();
    },
    [$managers, forceUpdate]
  );

  useEffect(() => {
    function start() {
      if (mounted.current) return;
      const uuid = generateUUID();
      $managers.add(uuid);
      mounted.current = true;
      forceUpdate();
    }

    function stop() {
      $managers.clear();
      mounted.current = false;
    }

    start();

    return () => {
      stop();
    };
  }, []);

  return (
    <>
      <EditHeader />
      {tabs.length > 1 ? (
        <Tabs
          className="space-y-4 px-4 pb-4"
          value={currentTab}
          onValueChange={onChangeTab}
        >
          <TabsList>
            {tabs.map((tab, index) => (
              <TabsTrigger key={tab.key} value={tab.key}>
                나의 {`${index + 1}일`}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((tab) => (
            <TabsContent key={tab.key} value={tab.key}>
              <div className="w-full min-h-screen">
                <MapEditProvider $mapClient={$managers.get(tab.key)}>
                  {children}
                </MapEditProvider>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      ) : (
        <>
          {tabs.map((tab) => (
            <React.Fragment key={tab.key}>
              <div className="px-4 pb-4 w-full min-h-screen">
                <MapEditProvider $mapClient={$managers.get(tab.key)}>
                  {children}
                </MapEditProvider>
              </div>
            </React.Fragment>
          ))}
        </>
      )}
    </>
  );
}
