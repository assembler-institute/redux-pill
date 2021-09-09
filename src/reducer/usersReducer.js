import axios from "axios";
import { API, USERS } from "../constants/routes";

export const usersReducer = (state = [], action) => {
  return state;
};

export const GetApi = () => {
  return async (dispatch) => {
    const page = await getAllUsers();
    dispatch({ type: "ALL_USERS", paylodad: page });
  };
};
// nos traemos todos los usuarios
async function getAllUsers(api = makeApi()) {
  return api.get(`/`);
}
// traemos solo un usuario
async function getUser(userId, api = makeApi()) {
  return api.get(`/${userId}`);
}
// creamos la url para hacer la peticion axios cn axios.create()
export const makeApi = () => {
  return axios.create({
    baseURL: `${API}${USERS}`,
  });
};
