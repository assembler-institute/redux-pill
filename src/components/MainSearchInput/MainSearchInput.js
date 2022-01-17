import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// import { mainSearch } from "../../redux/search/actions";

export default function CustomizedInputBase() {
  // const { searchedValue } = useSelector((state) => state.search);
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      onSubmit={(e) => {
        e.preventDefault();
        setTimeout(() => {
          // console.log(searchedValue || "no value");
        }, 1500);
      }}
    >
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          border: "1px solid #c6ff00",
          padding: "0.5rem",
          borderRadius: "0.3rem",
          color: "#4caf50",
        }}
        placeholder="Search for country, city, street..."
        inputProps={{ "aria-label": "search google maps" }}
        onChange={(e) => {
          e.preventDefault();
          setTimeout(() => {
            // mainSearch(e.target.value);
          }, 1000);
        }}
      />
      <IconButton type="submit" sx={{ p: "10px" }}>
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <Link to="/dashboard">
        <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
          <DirectionsIcon />
        </IconButton>
      </Link>
    </Paper>
  );
}
