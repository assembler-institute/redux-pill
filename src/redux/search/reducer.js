import { actionTypes } from "./types";
import initialState from "./state";
export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FILTER:
      return {
        ...state,
      };
    case actionTypes.MAIN_SEARCH:
      return {
        ...state,
        searchedValue: action.payload,
      };
    case actionTypes.COMPILE_DATA:
      console.log(action.payload);
      return {
        ...state,
        typeOfHouse: action.payload,
      };
    case actionTypes.ERASE_FORM_DATA:
      return {
        ...state,
        typeOfHouse: initialState.typeOfHouse,
      };
    default:
      return state;
  }
}
