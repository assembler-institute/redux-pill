import { actionTypes } from "./types";

export const dataLoading = () => ({
  type: actionTypes.DATA_LOADING,
});

export const dataError = (err) => ({
  type: actionTypes.DATA_ERROR,
  payload: err,
});

export const dataSuccess = (data) => ({
  type: actionTypes.DATA_SUCCESS,
  payload: data,
});
