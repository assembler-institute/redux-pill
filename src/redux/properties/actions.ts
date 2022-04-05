import { fetchProperties } from "../services/fetchProperties";
import { FIRST_SEARCH } from "./types";

export const setPropertiesByCountryOrCity = async (value: string) => {
  const data = await fetchProperties();
  const filteredProperties = data.filter((properties): IPropertie | void => {
    if (properties.country === value) return properties;
    if (properties.city === value) return properties;
    return;
  });
  return {
    type: FIRST_SEARCH,
    payload: filteredProperties,
  };
};
