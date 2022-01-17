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
  const [value, setValue] = React.useState([100000, 300000]);
  const { priceRange } = useSelector((state) => state.search);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    dispatch(setPriceRange(value));
  }, [value]);

  return (
    <Box sx={{ width: 260, marginLeft: "1.1rem" }}>
      <Slider
        value={priceRange}
        onChange={handleChange}
        valueLabelDisplay="auto"
        marks={marks}
        min={20000}
        max={500000}
      />
    </Box>
  );
}
