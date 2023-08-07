import React from "react";
import { Provider as MapEditProvider } from "~/libs/providers/map-edit-provider";
import { EditHeader } from "~/components/edit/edit-header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <MapEditProvider>
        <EditHeader />
        <div className="px-4 pb-4 w-full min-h-screen">{children}</div>
      </MapEditProvider>
    </>
  );
}
