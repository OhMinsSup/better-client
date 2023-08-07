import React from "react";
import { EditHeader } from "~/components/edit/edit-header";
import { Maps } from "~/components/edit/maps";
import { ScriptsKakaoMap } from "~/components/scripts/scripts-kakao-map";
import { Provider as MapEditProvider } from "~/libs/providers/map-edit-provider";

export default function Page() {
  return (
    <MapEditProvider>
      <EditHeader />
      <div className="px-4 pb-4 w-full min-h-screen">
        <ScriptsKakaoMap fallback={<>Loading....</>}>
          <Maps />
        </ScriptsKakaoMap>
      </div>
    </MapEditProvider>
  );
}
