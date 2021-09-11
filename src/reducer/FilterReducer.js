const initialState = [
  {
    typeOfHome: {
      flatCheckbox: false,
      houseCheckbox: false,
      duplexCheckbox: false,
      penthouseCheckbox: false,
    },
  },
];

export const FilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "toggle/typeOfHome":
      console.log(action);
      return [...state, action.payload];

    default:
  }
  // console.log(action);
  return state;
};
