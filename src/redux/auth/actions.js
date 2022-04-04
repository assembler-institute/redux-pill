import { actionTypes } from "./types";

export const signUpSuccess = (value) => ({
  type: actionTypes.SIGN_UP_SUCCESS,
  payload: value,
});

export const signInSuccess = (value) => ({
  type: actionTypes.SIGN_IN_SUCCESS,
  payload: value,
});

export const isSigningIn = () => ({
  type: actionTypes.IS_SIGNING_IN,
});

export const signInError = (error) => ({
  type: actionTypes.SIGN_IN_ERROR,
  paylaod: error,
});

export const signUpError = (error) => ({
  type: actionTypes.SIGN_UP_ERROR,
  paylaod: error,
});

export const signOut = () => ({
  type: actionTypes.SIGN_OUT,
});
