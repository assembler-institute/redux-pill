import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useDispatch, useSelector } from "react-redux";

import { setPriceRange } from "../../redux/search/actions";

const marks = [
  {
    value: 20000,
    label: "20000€",
  },
  {
    value: 500000,
    label: "500000€",
  },
];

export default function PriceRangeSlider() {
  const dispatch = useDispatch();
  const { priceRange } = useSelector((state) => state.search);

  return (
    <Box sx={{ width: 260, marginLeft: "1.1rem" }}>
      <Slider
        value={priceRange}
        onChange={(event, newValue) => dispatch(setPriceRange(newValue))}
        valueLabelDisplay="auto"
        marks={marks}
        min={20000}
        max={500000}
      />
    </Box>
  );
}
