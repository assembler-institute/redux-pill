import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { FilterReducer } from "./reducer/FilterReducer.js";
import { propertiesReducer } from "./reducer/propertiesReducer.js";
import { usersReducer } from "./reducer/usersReducer.js";
const reducers = combineReducers({
  propertiesReducer: propertiesReducer,
  FilterReducer: FilterReducer,
  usersReducer: usersReducer,
});
export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
