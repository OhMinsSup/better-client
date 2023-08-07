import type { SetOptions } from "./maps-types";

export class MapsManager {
  private _$element: HTMLElement | null = null;

  private _maps: kakao.maps.Map | null = null;

  constructor() {}

  setOptions(opts: SetOptions) {
    this._$element = opts.element;
  }

  makeMap() {
    if (this._maps) {
      return;
    }

    if (!this._$element) {
      return;
    }

    this._maps = new kakao.maps.Map(this._$element, {
      center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
    });
  }

  clear() {
    if (this._maps) {
      this._maps = null;
    }

    if (this._$element) {
      this._$element = null;
    }
  }

  public get maps() {
    return this._maps;
  }
}
