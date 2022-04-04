import { combineReducers } from "redux";
import searchReducer from "./search/reducer";
import fetchReducer from "./fetch/reducer";
import authReducer from "./auth/reducer";

const reducers = combineReducers({
  search: searchReducer,
  fetch: fetchReducer,
  auth: authReducer,
});

export default reducers;
