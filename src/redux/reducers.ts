import { combineReducers } from "redux";
import { reducer as searchReducer } from "./searchValue/reducer";
import { reducer as propertiesReducer } from "./properties/reducer";
const reducers = combineReducers({
  searchReducer: searchReducer,
  propertiesReducer: propertiesReducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
