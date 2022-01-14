import React from "react";
import Typography from "@mui/material/Typography";

import PrimarySearchAppBar from "../../components/Navbar/Navbar";
import OutlinedCard from "../../components/Card/Card";
import CustomizedInputBase from "../../components/MainSearchInput/MainSearchInput";

import "./Home.scss";

export default function Home() {
  return (
    <>
      <PrimarySearchAppBar />
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
