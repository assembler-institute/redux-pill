const initialState = {
  typeOfHome: {
    flatCheckbox: false,
    houseCheckbox: false,
    duplexCheckbox: false,
    penthouseCheckbox: false,
  },
  moreFilters: {
    petsAllowed: false,
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
      const typeOfHomeFromPastState = state.typeOfHome;
      const typeOfHomeFromNewState = action.payload.typeOfHome;
      Object.assign(typeOfHomeFromPastState, typeOfHomeFromNewState);
      return {...state};
    case "toggle/moreFilters":
      const moreFiltersFromPastState = state.moreFilters;
      const moreFiltersFromNewState = action.payload.moreFilters;
      Object.assign(moreFiltersFromPastState, moreFiltersFromNewState);
      return {...state};
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
