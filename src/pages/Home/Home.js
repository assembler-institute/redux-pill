import React from "react";
import Typography from "@mui/material/Typography";

import OutlinedCard from "../../components/Card/Card";
import CustomizedInputBase from "../../components/MainSearchInput/MainSearchInput";
import withLayout from "../../hoc/withLayout/withLayout";

import "./Home.scss";
import { Box } from "@mui/material";
import PopularList from "../../components/PopularList/PopularList";

function Home() {
  return (
    <>
      <div className="flexDiv">
        <OutlinedCard />
        <CustomizedInputBase />
      </div>
      <Box
        sx={{
          margin: "2rem 5rem",
          borderRadius: "0.3rem",
          border: "1px solid #6fbf73",
          padding: "1rem",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" gutterBottom component="div">
          Popular Listing
        </Typography>
        <PopularList sx={{ margin: "auto" }} />
      </Box>
    </>
  );
}
export default withLayout(Home);
