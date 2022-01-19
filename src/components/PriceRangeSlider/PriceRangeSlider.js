import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { setPriceRange } from "../../redux/search/actions";
import { setNewLocationPrice } from "../../utils/setNewLocation";

const marks = [
  {
    value: 20000,
    label: "20k",
  },
  {
    value: 500000,
    label: "50k",
  },
];

export default function PriceRangeSlider() {
  const dispatch = useDispatch();
  const { priceRange } = useSelector((state) => state.search);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box sx={{ width: "auto", marginLeft: "1.1rem" }}>
      <Slider
        value={priceRange}
        onChange={(event, newValue) => {
          dispatch(setPriceRange(newValue));
          navigate(setNewLocationPrice(location, newValue));
        }}
        valueLabelDisplay="auto"
        marks={marks}
        min={20000}
        max={500000}
      />
    </Box>
  );
}
