import { AnyAction, Reducer } from "redux";

import * as types from "./types";

const initialState: PropertieState = [];
export const reducer = (
  state: PropertieState = initialState,
  action: IPropertieAction
) => {
  switch (action.type) {
    case types.FIRST_SEARCH:
      return [action.payload];
    default:
      return state;
  }
};
