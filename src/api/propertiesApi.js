import { API } from "../constants/routes";

const axios = require("axios").default;

function makePropertiesApi() {
  return axios.create({ baseUrl: `${API.MAIN}${API.PROPERTIES}` });
}

export function getAllProperties(api = makePropertiesApi()) {
  console.log(`${API.MAIN}${API.PROPERTIES}`);
  return api.get("");
}

export function getPropertie(productId, api = makePropertiesApi()) {
  return api.get(`/${productId}`);
}
