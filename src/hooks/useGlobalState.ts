import { GlobalState } from "@/domain/globalState";
import { GlobalStateContext } from "@/providers/stateProvider";
import { Dispatch, SetStateAction, useContext } from "react";

export const useGlobalState = (): [GlobalState, Dispatch<SetStateAction<GlobalState>>] => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw Error('useState must be used inside of a StateProvider');
  }
  return context;
}