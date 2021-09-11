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
      const target = state[0].typeOfHome;
      const source = action.payload.typeOfHome;
      const returnedTarget = Object.assign(target, source);
      return [...state, { typeOfHome: returnedTarget }];
    default:
      return state;
  }
};
