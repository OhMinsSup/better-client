"use client";
import { useMemo, useReducer } from "react";
import { createContext } from "~/libs/react/context";
import { MapsManagers } from "../maps/maps-managers";

export enum Action {
  CLEAR = "CLEAR",
}

type ClearAction = {
  type: Action.CLEAR;
};

export type ActionType = ClearAction;

interface MapState {
  $managers: MapsManagers;
}

interface MapContext extends MapState {
  clear: () => void;
  dispatch: React.Dispatch<ActionType>;
}

const initialState: MapState = {
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

  const actions = useMemo(
    () => ({
      ...state,
      clear,
      dispatch,
    }),
    [state]
  );

  return <MapProvider value={actions}>{children}</MapProvider>;
}

export { Provider, useMapContext };
