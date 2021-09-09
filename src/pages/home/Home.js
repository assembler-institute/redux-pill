import React, { useEffect } from "react";
import HomeListing from "../../components/homelisting/HomeListing.js";
import { GetApi } from "../../reducer/ApiReducer.js";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetApi());
  }, [dispatch]);
  return (
    <div>
      <HomeListing />
    </div>
  );
}
