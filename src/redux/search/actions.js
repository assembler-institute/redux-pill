import { actionTypes } from "./types";

export const filter = () => ({
  type: actionTypes.FILTER,
});

export const mainSearch = (value) => ({
  type: actionTypes.MAIN_SEARCH,
  payload: value,
});

export const compileData = (value) => ({
  type: actionTypes.COMPILE_DATA,
  payload: value,
});

export const eraseFormData = () => ({
  type: actionTypes.ERASE_FORM_DATA,
});
