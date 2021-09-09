import axios from "axios";
import { API, PROPERTIES } from "../constants/routes";
export const makeApi = () => {
  return axios.create({
    baseURL: `${API}${PROPERTIES}`,
  });
};
export const getProperties = (api = makeApi()) => {
  return api.get(`/`);
};
export const getProperty= (userId, api = makeApi()) => {
  return api.get(`/${userId}`);
};