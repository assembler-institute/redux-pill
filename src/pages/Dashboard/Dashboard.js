import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import withLayout from "../../hoc/withLayout/withLayout";
import CustomizedInputBase from "../../components/MainSearchInput/MainSearchInput";
import SimpleContainer from "../../components/Container/Container";
import FilterGrid from "../../components/FilterGrid/FilterGrid";
import ResultBox from "../../components/ResultBox/ResultBox";
import { fetchCondos } from "../../db/seed-data";
import { dataError, dataLoading, dataSuccess } from "../../redux/fetch/actions";
import { useLocation } from "react-router-dom";

function Dashboard() {
  const dispatch = useDispatch();
  const location = useLocation();
  const globalState = useSelector((state) => state.search);
  useEffect(() => {
    console.log(location.search);
    dispatch(dataLoading());
    (async function fetchData() {
      try {
        const properties = await fetchCondos(location.search);
        dispatch(dataSuccess(properties));
      } catch (err) {
        dispatch(dataError(err));
      }
    })();
  }, [globalState]);
  return (
    <SimpleContainer>
      <CustomizedInputBase />
      <FilterGrid />
      <ResultBox />
    </SimpleContainer>
  );
}

export default withLayout(Dashboard);
