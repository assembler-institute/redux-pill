import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { searchFilter } from "../../redux/search/actions";

export default function CustomizedInputBase() {
  const dispatch = useDispatch();
  const { searchedValue } = useSelector((state) => state.search);
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(searchFilter(value));
        navigate("/dashboard");
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
        defaultValue={searchedValue ? searchedValue : ""}
        inputProps={{ "aria-label": "search google maps" }}
        onChange={(e) => {
          setTimeout(() => {
            setValue(e.target.value);
            dispatch(searchFilter(e.target.value));
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
