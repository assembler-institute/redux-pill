import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { FilterReducer } from "./reducer/FilterReducer.js";
import { ApiReducer } from "./reducer/ApiReducer.js";

const reducers = combineReducers({
  ApiReducer: ApiReducer,
  FilterReducer: FilterReducer,
});
export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
