import { actionTypes } from "./types";
import { initialState } from "./state";
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SIGN_IN_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
        isSigningIn: false,
        isAuth: false,
      };
    case actionTypes.SIGN_UP_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
        isSigningIn: false,
        isAuth: false,
      };
    case actionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        errorMessage: false,
        isSigningIn: false,
        isAuth: true,
        user: action.payload,
      };
    case actionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        errorMessage: false,
        isSigningIn: false,
        isAuth: true,
        user: action.payload,
      };
    case actionTypes.SIGN_OUT:
      return {
        ...state,
        errorMessage: false,
        isSigningIn: false,
        isAuth: false,
        user: null,
      };
    case actionTypes.IS_SIGNING_IN:
      return {
        ...state,
        errorMessage: false,
        isSigningIn: true,
        isAuth: false,
        user: null,
      };
    default:
      return state;
  }
}
