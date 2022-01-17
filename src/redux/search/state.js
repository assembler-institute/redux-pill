const initialState = {
  searchedValue: "",
  typeOfHouse: { flat: true, house: true, duplex: true, penthouse: true },
  bedrooms: { zero: true, one: true, two: true, three: true, more: true },
  bathrooms: { one: true, two: true, more: true },
  equipment: "indifferent",
  condition: { new: true, good: true, renovation: true },
  priceRange: [100000, 300000],
  publicationDate: "last week",
  moreFilters: {
    pets: false,
    lift: false,
    garden: false,
    air: false,
    swimmingPool: false,
    terrace: false,
  },
};

export default initialState;
