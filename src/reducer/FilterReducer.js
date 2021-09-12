const initialState = {
  searchBar: "",
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
  bedrooms: "1",
  condition: "new home",
  equipment: "indiferent",
  price: "100",
  publicationDate: "today",
};

export const FilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "toggle/searchBar":
      const searchBarTextFromPastState = state;
      const searchBarTextFromNewState = action.payload;
      Object.assign(searchBarTextFromPastState, searchBarTextFromNewState);
      // console.log(searchBarTextFromPastState, searchBarTextFromNewState);
      return { ...state };
    case "toggle/typeOfHome":
      const typeOfHomeFromPastState = state.typeOfHome;
      const typeOfHomeFromNewState = action.payload.typeOfHome;
      Object.assign(typeOfHomeFromPastState, typeOfHomeFromNewState);
      return { ...state };
    case "toggle/moreFilters":
      const moreFiltersFromPastState = state.moreFilters;
      const moreFiltersFromNewState = action.payload.moreFilters;
      Object.assign(moreFiltersFromPastState, moreFiltersFromNewState);
      return { ...state };
    case "toggle/bedrooms":
      const moreBedroomsPastState = state;
      const moreBedroomsFromNewState = action.payload;
      Object.assign(moreBedroomsPastState, moreBedroomsFromNewState);
      return { ...state };
    case "toggle/condition":
      const conditionPastState = state;
      const conditionFromNewState = action.payload;
      Object.assign(conditionPastState, conditionFromNewState);
      return { ...state };
    case "toggle/equipment":
      const equipmentPastState = state;
      const equipmentFromNewState = action.payload;
      Object.assign(equipmentPastState, equipmentFromNewState);
      return { ...state };
    case "toggle/price":
      const pricePastState = state;
      const priceFromNewState = action.payload;
      Object.assign(pricePastState, priceFromNewState);
      // console.log(pricePastState, priceFromNewState);
      return { ...state };
    case "toggle/publicationDate":
      const publicationDatePastState = state;
      const publicationDateFromNewState = action.payload;
      Object.assign(publicationDatePastState, publicationDateFromNewState);
      return { ...state };
    default:
      return state;
  }
};
