"use client";
import { useMemo, useReducer } from "react";
import { createContext } from "~/libs/react/context";

export enum Action {
  CLEAR = "CLEAR",
}

type ClearAction = {
  type: Action.CLEAR;
};

export type ActionType = ClearAction;

interface MapEditState {}

interface MapEditContext extends MapEditState {
  clear: () => void;
  dispatch: React.Dispatch<ActionType>;
}

const initialState: MapEditState = {};

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

  return <MapEditProvider value={actions}>{children}</MapEditProvider>;
}

export { Provider, useMapEditContext };
