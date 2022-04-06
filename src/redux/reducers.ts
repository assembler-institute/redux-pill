import { combineReducers } from "redux";
import { reducer as searchReducer } from "./searchValue/reducer";
import { reducer as propertiesReducer } from "./properties/reducer";
import { reducer as isLoadingReducer } from "./isLoading/reducer";
const reducers = combineReducers({
  search: searchReducer,
  properties: propertiesReducer,
  isLoading: isLoadingReducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
