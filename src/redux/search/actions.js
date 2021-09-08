import {
  SET_SEARCH,
  GET_SEARCH,
  RESET_SEARCH,
  LOADING_SEARCH,
  ERROR_SEARCH,
} from "./types";

import { getSearched } from "../../api/propertiesApi";

export const setSearch = (value) => ({
  type: SET_SEARCH,
  payload: value,
});

export const getSearch = (searched) => {
  return async (dispatch) => {
    dispatch(resetSearch());
    dispatch(setSearch(searched));
    dispatch(loadingSearch());

    const { data } = await getSearched(searched);

    dispatch({
      type: GET_SEARCH,
      payload: data,
    });
  };
};

export const resetSearch = () => ({
  type: RESET_SEARCH,
});

export const loadingSearch = () => ({
  type: LOADING_SEARCH,
});

export const errorSearch = () => ({
  type: ERROR_SEARCH,
});

export const setFilters = () => {};
