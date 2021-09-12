import React, { useEffect } from "react";
import HomeListing from "../../components/homelisting/HomeListing.js";
import { GetApi } from "../../reducer/propertiesReducer.js";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  const allProperties = useSelector((state) => state.propertiesReducer);

  useEffect(() => {
    dispatch(GetApi());
  },[dispatch]);

  return (
    <div>
      <HomeListing allProperties={allProperties[0]}/>
    </div>
  );
}
