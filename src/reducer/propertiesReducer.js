import axios from "axios";
import { API, PROPERTIES } from "../constants/routes";

export const propertiesReducer = (state = [], action) => {
  switch (action.type) {
    case "All_PROPERTIES":
      return [...state, action.paylodad];
    case "ONE_PROPERTY":
      return [...state, action.paylodad];
    default:
      return state;
  }
};

export const GetApi = () => {
  return async (dispatch) => {
    const properties = await getAllProperties();
    // console.log(properties.data);
    dispatch({ type: "All_PROPERTIES", paylodad: properties.data });
  };
};
// nos traemos todas las properties
async function getAllProperties(api = makeApi()) {
  return api.get(`/`);
}
// traemos solo una properti
// async function getProperty(userId, api = makeApi()) {
//   return api.get(`/${userId}`);
// }
// creamos la url para hacer la peticion axios cn axios.create()
export const makeApi = () => {
  return axios.create({
    baseURL: `${API}${PROPERTIES}`,
  });
};
