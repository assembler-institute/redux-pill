import { actionTypes } from "./types";
import { initialState } from "./state";
export default function fetchReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
        hasError: true,
      };
    case actionTypes.DATA_LOADING:
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
        hasError: false,
      };
    case actionTypes.DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        dataFetched: [...action.payload],
        hasError: false,
      };

    default:
      return state;
  }
}
