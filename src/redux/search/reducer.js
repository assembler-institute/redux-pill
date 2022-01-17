import { actionTypes } from "./types";
import initialState from "./state";
export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FILTER:
      return {
        ...state,
      };
    case actionTypes.SEARCH_FILTER:
      return {
        ...state,
        searchedValue: action.payload,
      };
    case actionTypes.COMPILE_DATA:
      return {
        ...state,
      };
    case actionTypes.ERASE_FORM_DATA:
      return {
        ...state,
        typeOfHouse: initialState.typeOfHouse,
        bedrooms: initialState.bedrooms,
      };
    case actionTypes.SET_TYPE_HOUSE:
      return {
        ...state,
        typeOfHouse: action.payload,
      };
    case actionTypes.SET_BEDROOMS:
      return {
        ...state,
        bedrooms: action.payload,
      };
    case actionTypes.SET_BATHROOMS:
      return {
        ...state,
        bathrooms: action.payload,
      };
    case actionTypes.SET_EQUIPMENT:
      return {
        ...state,
        equipment: action.payload,
      };
    case actionTypes.SET_CONDITION:
      return {
        ...state,
        condition: action.payload,
      };
    case actionTypes.SET_PRICE_RANGE:
      return {
        ...state,
        priceRange: action.payload,
      };
    case actionTypes.SET_PUBL_DATE:
      return {
        ...state,
        publicationDate: action.payload,
      };
    case actionTypes.SET_MORE_FILTERS:
      return {
        ...state,
        moreFilters: action.payload,
      };
    default:
      return state;
  }
}
