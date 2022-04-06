import { Dispatch } from "redux";
import { fetchProperties } from "../services/fetchProperties";
import { FIRST_SEARCH } from "./types";

export const setFirstSearch = (value: string) => {
  return async (dispatch: Dispatch) => {
    const data = await fetchProperties();
    const filteredProperties = data.filter((propertie) => {
      if (propertie.country === value) return propertie;
      if (propertie.city === value) return propertie;
    });
    return dispatch({
      type: FIRST_SEARCH,
      payload: filteredProperties,
    });
  };
};

export const setSearchWithFilter = (formValues: any) => {
  console.log(formValues);
};
