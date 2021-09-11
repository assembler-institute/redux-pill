const initialState = {
  typeOfHome: {
    flatCheckbox: false,
    houseCheckbox: false,
    duplexCheckbox: false,
    penthouseCheckbox: false,
  },
  moreFilters: {
    petsAllwed: false,
    garden: false,
    swimmingPool: false,
    airConditioning: false,
    terrace: false,
    lift: false,
  },
  bedrooms: 1,
  condition: "new",
  equipment: "indiferent",
  price: 100,
  publicationDate: Date.now(),
};

export const FilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "toggle/typeOfHome":
      const target = state.typeOfHome;
      const source = action.payload.typeOfHome;
      Object.assign(target, source);
      return {...state};
    case "toggle/moreFilters":
      return state;
    case "toggle/bedrooms":
      return state;
    case "toggle/condition":
      return state;
    case "toggle/equipment":
      return state;
    case "toggle/price":
      return state;
    case "toggle/publicationDate":
      return state;
    default:
      return state;
  }
};
