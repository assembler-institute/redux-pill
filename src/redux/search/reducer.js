import { actionTypes } from "./types";
import initialState from "./state";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FILTER:
      return {
        ...state,
      };
    default:
      break;
  }
}
