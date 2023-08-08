import omit from "lodash-es/omit";
import { MapUnknownError } from "../errors/maps-error";
import type { MoveCurrentPositionParams, SetOptions } from "./maps-types";
import { MarkerMnanger } from "./marker-manager";

export class MapsManager {
  private _$element: HTMLElement | null = null;

  private _maps: kakao.maps.Map | null = null;

  private _options: Omit<SetOptions, "element"> | null = null;

  private _markerManager: MarkerMnanger | null = null;

  setOptions(opts: Pick<SetOptions, "element"> & Partial<SetOptions>) {
    this._$element = opts.element;

    if (!opts.center) {
      opts.center = new kakao.maps.LatLng(33.450701, 126.570667);
    }

    this._options = omit(opts, "element") as Omit<SetOptions, "element">;
  }

  makeMap() {
    if (this._maps) return;

    if (!this._$element) {
      throw new MapUnknownError(
        "MapsManager._$element is null. Please set element first."
      );
    }

    if (!this._options) {
      throw new MapUnknownError(
        "MapsManager._options is null. Please set options first."
      );
    }

    this._maps = new kakao.maps.Map(this._$element, this._options);

    this._markerManager = new MarkerMnanger({
      map: this._maps,
    });
  }

  clear() {
    if (this._maps) {
      this._maps = null;
    }

    if (this._$element) {
      this._$element = null;
    }

    if (this._options) {
      this._options = null;
    }

    if (this._markerManager) {
      this._markerManager = null;
    }
  }

  zoomIn() {
    if (!this._maps) {
      throw new MapUnknownError(
        "MapsManager._maps is null. Please make map first."
      );
    }

    if (this._maps.getLevel() === 14) return;
    this._maps.setLevel(this._maps.getLevel() + 1);
  }

  zoomOut() {
    if (!this._maps) {
      throw new MapUnknownError(
        "MapsManager._maps is null. Please make map first."
      );
    }

    if (this._maps.getLevel() === 0) return;
    this._maps.setLevel(this._maps.getLevel() - 1);
  }

  moveCurrentPosition(params: MoveCurrentPositionParams) {
    if (!this._maps) {
      throw new MapUnknownError(
        "MapsManager._maps is null. Please make map first."
      );
    }

    if (
      params instanceof kakao.maps.LatLng ||
      params instanceof kakao.maps.LatLngBounds ||
      params instanceof kakao.maps.Coords
    ) {
      this._maps.panTo(params);
    } else if (params instanceof GeolocationCoordinates) {
      const lat = params.latitude;
      const lng = params.longitude;

      const moveLatLon = new kakao.maps.LatLng(lat, lng);

      this._maps.panTo(moveLatLon);
    } else {
      const lat = params.lat;
      const lng = params.lng;

      const moveLatLon = new kakao.maps.LatLng(lat, lng);

      this._maps.panTo(moveLatLon);
    }
  }

  public get $maps() {
    return this._maps;
  }

  public get $marker() {
    return this._markerManager;
  }
}
