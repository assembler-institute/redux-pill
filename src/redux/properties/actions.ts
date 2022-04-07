import { Dispatch } from "redux";
import { fetchProperties } from "../services/fetchProperties";
import { FILTERED_SEARCH, FIRST_SEARCH } from "./types";

export const setFirstSearch = (value: string) => {
  return async (dispatch: Dispatch) => {
    const properties = await fetchProperties(`city=${value}`);

    return dispatch({
      type: FIRST_SEARCH,
      payload: properties,
    });
  };
};

export const setSearchWithFilter = (formValues: IFormFilter) => {
  return async (dispatch: Dispatch) => {
    let query: string = "";
    // getting object keys and values
    const formKeys = Object.keys(formValues);
    const values = Object.values(formValues);

    formKeys.forEach((element, idx) => {
      if (values[idx]) {
        if (Array.isArray(values[idx])) {
          values[idx].forEach((val: string) => {
            query += `${element}=${val}&`;
          });
          return;
        }
        query += `${element}=${values[idx]}&`;
      }
    });
    query = query.substring(0, query.length - 1);
    const properties = await fetchProperties(query);
    return dispatch({
      type: FILTERED_SEARCH,
      payload: properties,
    });
  };
};
