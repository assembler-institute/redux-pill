import axios from "axios";
import { API, PROPERTIES } from "../constants/routes";

export const propertiesReducer = (state = [], action) => {
  console.log("properties Reducer", action);
  return state;
};

export const GetApi = () => {
  return async (dispatch) => {
    const page = await getAllProperties();
    dispatch({ type: "All_PROPERTIES", paylodad: page });
  };
};

async function getAllProperties(api = makeApi()) {
  return api.get(`/`);
}

async function getProperty(userId, api = makeApi()) {
  return api.get(`/${userId}`);
}

export const makeApi = () => {
  return axios.create({
    baseURL: `${API}${PROPERTIES}`,
  });
};
