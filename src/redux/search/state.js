const initialState = {
  searchedText: "Search by city",
  isLoading: false,
  hasError: false,
  foundProperties: [],
  filteredQuery: "",
  filters: {
    condition: { new: false, good: false, reform: false },
    type: {
      "flat/apartment": false,
      duplex: false,
      house: false,
      penthouse: false,
    },
    room: { one: false, two: false, three: false, fourOrMore: false },
    bath: { one: false, two: false, threeOrMore: false },
    size: 0,
    minPrice: 0,
    maxPrice: 0,
    pet: false,
    lift: false,
    garden: false,
    air: false,
    terrace: false,
    publication_date: "",
    equipment: "",
  },
};
export default initialState;
