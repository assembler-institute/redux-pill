import * as type from "./type";
export const setValue = (value: string) => {
  return {
    type: type.SET_VALUE,
    payload: value,
  };
};
