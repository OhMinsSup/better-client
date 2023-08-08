import type { MarkerMnangerOptions } from "./maps-types";

export class MarkerMnanger {
  private _maps: kakao.maps.Map;

  constructor(opts: MarkerMnangerOptions) {
    this._maps = opts.map;

    this._addEventListener();
  }

  private _addEventListener() {}

  get $maps() {
    return this._maps;
  }
}
