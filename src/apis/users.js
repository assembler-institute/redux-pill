import axios from "axios";
import { API, USERS } from "../constants/routes";
export const makeApi = () => {
  return axios.create({
    baseURL: `${API}${USERS}`,
  });
};
export const getUsers = (api = makeApi()) => {
  return api.get(`/`);
};
export const getUser = (userId, api = makeApi()) => {
  return api.get(`/${userId}`);
};
