import React from "react";
import { EditHeader } from "~/components/edit/edit-header";
import { Maps } from "~/components/edit/maps";
import { ScriptsKakaoMap } from "~/components/scripts/scripts-kakao-map";

export default function Page() {
  return (
    <>
      <EditHeader />
      <div className="px-4 w-full h-screen">
        <ScriptsKakaoMap fallback={<>Loading....</>}>
          <Maps />
        </ScriptsKakaoMap>
      </div>
    </>
  );
}
