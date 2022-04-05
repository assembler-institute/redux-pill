import { Dispatch } from "redux";
import { fetchProperties } from "../services/fetchProperties";
import { FIRST_SEARCH } from "./types";

export const setFirstSearch = (value: string) => {
  return async (dispatch: Dispatch) => {
    const data = await fetchProperties();
    const filteredProperties = data.filter((properties): IPropertie | void => {
      if (properties.country === value) return properties;
      if (properties.city === value) return properties;
      return;
    });
    return dispatch({
      type: FIRST_SEARCH,
      payload: filteredProperties,
    });
  };
};
