export type SetOptions = {
  element: HTMLElement | null;
} & kakao.maps.MapOptions;

export type MarkerMnangerOptions = {
  map: kakao.maps.Map;
};

export type MoveCurrentPositionParams =
  | {
      lat: number;
      lng: number;
    }
  | kakao.maps.LatLng
  | kakao.maps.Coords
  | kakao.maps.LatLngBounds
  | GeolocationCoordinates;

export type MapKey = {
  key: string;
  used: boolean;
  timestamp?: number;
};
