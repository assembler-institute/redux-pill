import { combineReducers } from "redux";
import searchReducer from "./search/reducer";
import fetchReducer from "./fetch/reducer";

const reducers = combineReducers({
  search: searchReducer,
  fetch: fetchReducer,
});

export default reducers;
