import React from "react";
import CustomizedInputBase from "../../components/MainSearchInput/MainSearchInput";
import SimpleContainer from "../../components/Container/Container";
import FilterGrid from "../../components/FilterGrid/FilterGrid";
import ResultBox from "../../components/ResultBox/ResultBox";

export default function Dashboard() {
  return (
    <SimpleContainer>
      <CustomizedInputBase />
      <FilterGrid />
      <ResultBox />
    </SimpleContainer>
  );
}
