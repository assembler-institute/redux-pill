import { API } from "../constants/routes";

const axios = require("axios").default;

function makePropertiesApi() {
  return axios.create({ baseURL: `${API.MAIN}${API.PROPERTIES}` });
}

export function getAllProperties(api = makePropertiesApi()) {
  return api.get("");
}

export function getPropertie(productId, api = makePropertiesApi()) {
  return api.get(`/${productId}`);
}
