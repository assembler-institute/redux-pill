import axios from "axios";
const baseUrl = "http://localhost:3000";

export const ApiReducer = (state = [], action) => {
  console.log("Api Reducer", action);
  return state;
};

export const GetApi = () => {
  return async (dispatch) => {
    const page = await GetAllPages();
    dispatch({ type: "allPages", paylodad: page });
  };
};

async function GetAllPages() {
  const response = await axios.get(baseUrl);
  //    return console.log(response.data);
  return response.data;
}
