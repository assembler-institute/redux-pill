import React from "react";
import Typography from "@mui/material/Typography";

import OutlinedCard from "../../components/Card/Card";
import CustomizedInputBase from "../../components/MainSearchInput/MainSearchInput";
import withLayout from "../../hoc/withLayout/withLayout";

import "./Home.scss";

function Home() {
  return (
    <>
      <div className="flexDiv">
        <OutlinedCard />
        <CustomizedInputBase />
      </div>
      <Typography variant="h5" gutterBottom component="div">
        Popular Listing
      </Typography>
      <div className="gridPopular"></div>
    </>
  );
}
export default withLayout(Home);
