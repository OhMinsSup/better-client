import React from "react";
import { Maps } from "~/components/edit/maps";
import { ScriptsKakaoMap } from "~/components/scripts/scripts-kakao-map";

export default function Page() {
  return (
    <ScriptsKakaoMap fallback={<>Loading....</>}>
      <Maps />
    </ScriptsKakaoMap>
  );
}
