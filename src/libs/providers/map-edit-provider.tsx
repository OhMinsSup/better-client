"use client";
import { useMemo, useReducer } from "react";
import { createContext } from "~/libs/react/context";
import { MapsManager } from "~/libs/maps";

export enum Action {
  CLEAR = "CLEAR",
}

type ClearAction = {
  type: Action.CLEAR;
};

export type ActionType = ClearAction;

interface MapEditState {
  $mapClient: MapsManager | undefined;
}

interface MapEditContext extends MapEditState {
  clear: () => void;
  dispatch: React.Dispatch<ActionType>;
}

const initialState: MapEditState = {
  $mapClient: undefined,
};

const [MapEditProvider, useMapEditContext] = createContext<MapEditContext>({
  name: "useMapEditContext",
  errorMessage: "useMapEditContext: `context` is undefined.",
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
  $mapClient: MapsManager | undefined;
  children: React.ReactNode;
}

function Provider({ children, $mapClient }: Props) {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    $mapClient,
  });

  const clear = () => dispatch({ type: Action.CLEAR });

  const actions = useMemo(
    () => ({
      ...state,
      clear,
      dispatch,
    }),
    [state]
  );

  return <MapEditProvider value={actions}>{children}</MapEditProvider>;
}

export { Provider, useMapEditContext };
