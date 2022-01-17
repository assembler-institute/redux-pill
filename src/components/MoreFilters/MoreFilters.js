import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";

import { setMoreFilters } from "../../redux/search/actions";

export default function MoreFilters() {
  const dispatch = useDispatch();
  const [filter, setFilters] = useState({
    pets: false,
    lift: false,
    garden: false,
    air: false,
    swimmingPool: false,
    terrace: false,
  });
  const { moreFilters } = useSelector((state) => state.search);

  const handleChange = (event) => {
    setFilters({
      ...filter,
      [event.target.name]: event.target.checked,
    });
  };

  useEffect(() => {
    dispatch(setMoreFilters(filter));
  }, [filter]);
  return (
    <Box sx={{ display: "flex" }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={moreFilters.pets}
                onChange={(e) => {
                  handleChange(e);
                }}
                name="pets"
              />
            }
            label="Pets allowed"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={moreFilters.lift}
                onChange={(e) => handleChange(e)}
                name="lift"
              />
            }
            label="Lift"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={moreFilters.garden}
                onChange={(e) => handleChange(e)}
                name="garden"
              />
            }
            label="Garden"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={moreFilters.air}
                onChange={(e) => handleChange(e)}
                name="air"
              />
            }
            label="Air Conditioning"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={moreFilters.swimmingPool}
                onChange={(e) => handleChange(e)}
                name="swimmingPool"
              />
            }
            label="Swimming Pool"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={moreFilters.terrace}
                onChange={(e) => handleChange(e)}
                name="terrace"
              />
            }
            label="Terrace"
          />
        </FormGroup>
        <FormHelperText>Select as many as you want</FormHelperText>
      </FormControl>
    </Box>
  );
}
