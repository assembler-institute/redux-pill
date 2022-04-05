import { ActionCreator, Dispatch } from "redux";
import * as type from "./type";
export const setValue = (value: string): ActionCreator<void> => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: type.SET_VALUE,
      payload: value,
    });
  };
};
