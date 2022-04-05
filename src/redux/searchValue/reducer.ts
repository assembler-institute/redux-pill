import * as type from "./type";

const initialState: string = "";

export const reducer = (
  state: string = initialState,
  action: ISearchAction
): string => {
  switch (action.type) {
    case type.SET_VALUE:
      return action.payload;
    default:
      return state;
  }
};
