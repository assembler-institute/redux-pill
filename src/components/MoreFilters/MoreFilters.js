import React from "react";
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
  const { moreFilters } = useSelector((state) => state.search);

  return (
    <Box sx={{ display: "flex" }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={moreFilters.pets}
                onChange={(event) => {
                  dispatch(
                    setMoreFilters({
                      ...moreFilters,
                      [event.target.name]: event.target.checked,
                    })
                  );
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
                onChange={(event) => {
                  dispatch(
                    setMoreFilters({
                      ...moreFilters,
                      [event.target.name]: event.target.checked,
                    })
                  );
                }}
                name="lift"
              />
            }
            label="Lift"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={moreFilters.garden}
                onChange={(event) => {
                  dispatch(
                    setMoreFilters({
                      ...moreFilters,
                      [event.target.name]: event.target.checked,
                    })
                  );
                }}
                name="garden"
              />
            }
            label="Garden"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={moreFilters.air}
                onChange={(event) => {
                  dispatch(
                    setMoreFilters({
                      ...moreFilters,
                      [event.target.name]: event.target.checked,
                    })
                  );
                }}
                name="air"
              />
            }
            label="Air Conditioning"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={moreFilters.swimmingPool}
                onChange={(event) => {
                  dispatch(
                    setMoreFilters({
                      ...moreFilters,
                      [event.target.name]: event.target.checked,
                    })
                  );
                }}
                name="swimmingPool"
              />
            }
            label="Swimming Pool"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={moreFilters.terrace}
                onChange={(event) => {
                  dispatch(
                    setMoreFilters({
                      ...moreFilters,
                      [event.target.name]: event.target.checked,
                    })
                  );
                }}
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
