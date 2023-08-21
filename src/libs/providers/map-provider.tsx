"use client";
import { useMemo, useReducer } from "react";
import { createContext } from "~/libs/react/context";
import { MapsManagers } from "../maps/maps-managers";

export enum Action {
  CLEAR = "CLEAR",
  FORCE_UPDATE = "FORCE_UPDATE",
}

type ClearAction = {
  type: Action.CLEAR;
};

type ForceUpdateAction = {
  type: Action.FORCE_UPDATE;
};

export type ActionType = ClearAction | ForceUpdateAction;

interface MapState {
  updated: Record<string, unknown>;
  $managers: MapsManagers;
}

interface MapContext extends MapState {
  clear: () => void;
  forceUpdate: () => void;
  dispatch: React.Dispatch<ActionType>;
}

const initialState: MapState = {
  updated: {},
  $managers: new MapsManagers(),
};

const [MapProvider, useMapContext] = createContext<MapContext>({
  name: "useMapContext",
  errorMessage: "useMapContext: `context` is undefined.",
  defaultValue: initialState,
});

function reducer(state = initialState, action: ActionType) {
  switch (action.type) {
    case Action.CLEAR:
      return initialState;
    case Action.FORCE_UPDATE:
      return {
        ...state,
        updated: {},
      };
    default:
      return state;
  }
}

interface Props {
  children: React.ReactNode;
}

function Provider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clear = () => dispatch({ type: Action.CLEAR });

  const forceUpdate = () => dispatch({ type: Action.FORCE_UPDATE });

  const actions = useMemo(
    () => ({
      ...state,
      clear,
      forceUpdate,
      dispatch,
    }),
    [state]
  );

  return <MapProvider value={actions}>{children}</MapProvider>;
}

export { Provider, useMapContext };
