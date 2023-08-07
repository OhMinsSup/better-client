import omit from "lodash-es/omit";
import type { SetOptions } from "./maps-types";

export class MapsManager {
  private _$element: HTMLElement | null = null;

  private _maps: kakao.maps.Map | null = null;

  private _options: Omit<SetOptions, "element"> | undefined;

  setOptions(opts: Pick<SetOptions, "element"> & Partial<SetOptions>) {
    this._$element = opts.element;

    if (!opts.center) {
      opts.center = new kakao.maps.LatLng(33.450701, 126.570667);
    }

    this._options = omit(opts, "element") as Omit<SetOptions, "element">;
  }

  makeMap() {
    if (this._maps) {
      return;
    }

    if (!this._$element) {
      return;
    }

    if (!this._options) {
      return;
    }

    this._maps = new kakao.maps.Map(this._$element, this._options);
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
