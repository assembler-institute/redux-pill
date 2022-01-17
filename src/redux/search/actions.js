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

export const setTypeHouse = (value) => ({
  type: actionTypes.SET_TYPE_HOUSE,
  payload: value,
});

export const setBedrooms = (value) => ({
  type: actionTypes.SET_BEDROOMS,
  payload: value,
});

export const setBathrooms = (value) => ({
  type: actionTypes.SET_BATHROOMS,
  payload: value,
});

export const setEquipment = (value) => ({
  type: actionTypes.SET_EQUIPMENT,
  payload: value,
});

export const setCondition = (value) => ({
  type: actionTypes.SET_CONDITION,
  payload: value,
});

export const setPriceRange = (value) => ({
  type: actionTypes.SET_PRICE_RANGE,
  payload: value,
});

export const setPublicationDate = (value) => ({
  type: actionTypes.SET_PUBL_DATE,
  payload: value,
});

export const setMoreFilters = (value) => ({
  type: actionTypes.SET_MORE_FILTERS,
  payload: value,
});
