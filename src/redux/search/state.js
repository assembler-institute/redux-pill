const initialState = {
  searchedText: "Search by city",
  isLoading: false,
  hasError: false,
  foundProperties: [],
  filters: {
    condition: false,
    type: false,
    room: false,
    bath: false,
    size: false,
    minPrice: [false, 0],
    maxPrice: [false, 0],
    pet: [false, false],
    lift: [false, true],
    garden: [false, false],
    air_conditioning: [false, false],
    terrace: [false, true],
    publication_date: [false, ""],
  },
};
export default initialState;
