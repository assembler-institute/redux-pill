import React from "react";

import withLayout from "../../hoc/withLayout/withLayout";
import CustomizedInputBase from "../../components/MainSearchInput/MainSearchInput";
import SimpleContainer from "../../components/Container/Container";
import FilterGrid from "../../components/FilterGrid/FilterGrid";
import ResultBox from "../../components/ResultBox/ResultBox";

function Dashboard() {
  return (
    <SimpleContainer>
      <CustomizedInputBase />
      <FilterGrid />
      <ResultBox />
    </SimpleContainer>
  );
}

export default withLayout(Dashboard);
