import { createContext, useContext, useReducer } from "react";

export const ContextStore = createContext();

export const StateProvider = ({ reducer, initState, children }) => (
  <ContextStore.Provider value={useReducer(reducer, initState)}>
    {children}
  </ContextStore.Provider>
);

export const useAppState = () => useContext(ContextStore);
