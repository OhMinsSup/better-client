import React from "react";
import { Provider as MapEditProvider } from "~/libs/providers/map-edit-provider";
import { EditHeader } from "~/components/edit/edit-header";
import { Toolbar } from "~/components/edit/toolbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <MapEditProvider>
        <EditHeader />
        <div className="px-4 pb-4 w-full min-h-screen">
          <Toolbar />
          {children}
        </div>
      </MapEditProvider>
    </>
  );
}
