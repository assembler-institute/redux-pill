import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import withLayout from "../../HOC/withLayout";

import PropertiesList from "../../components/PropertiesList";
import FilterList from "../../components/FiltersList";

// import { getAllProperties } from "../../api/propertiesApi";

function Dashboard() {
  const [filters, setFilters] = useState({
    condition: ["new"],
    type: [],
    room: false,
    bath: false,
    size: false,
    minPrice: [false, 0],
    maxPrice: [false, 0],
    pet: [false, false],
    lift: [false, true],
    garden: "",
    air_conditioning: [false, false],
    terrace: [false, true],
    publication_date: [false, ""],
  });

  useEffect(() => {}, [filters]);

  const search = useSelector((state) => state.search);

  const dispatch = useDispatch();

  function handleFilters(e) {
    let query = "";
    const filterName = e.target.name;
    const filterValue = e.target.value;
    const filterArr = filters[filterName];

    if (Array.isArray(filterArr) && filterArr.includes(filterValue)) {
      const updatedFilter = filterArr.splice(filterArr.indexOf(filterValue), 1);
      setFilters(...filters, updatedFilter);
      query += `&${filterName}=${filterValue}`;
      console.log(updatedFilter, "IS in the array");
    } else if (Array.isArray(filterArr)) {
      console.log(filters, "is NOT in the array");
    } else {
    }

    /* console.log(search, "search"); */
    /* console.log(e.target.value, "checked"); */
  }

  return (
    <>
      <h1 className="mb-4">Found properties</h1>
      <FilterList />
      <PropertiesList foundProperties={search.foundProperties} />
    </>
  );
}

export default withLayout(Dashboard);
