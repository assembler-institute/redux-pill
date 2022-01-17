import React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";

import { setCondition } from "../../redux/search/actions";

export default function ConditionForm() {
  const dispatch = useDispatch();
  const { condition } = useSelector((state) => state.search);

  return (
    <Box sx={{ display: "flex" }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={condition.new}
                onChange={(event) => {
                  dispatch(
                    setCondition({
                      ...condition,
                      [event.target.name]: event.target.checked,
                    })
                  );
                }}
                name="new"
              />
            }
            label="New"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={condition.good}
                onChange={(event) => {
                  dispatch(
                    setCondition({
                      ...condition,
                      [event.target.name]: event.target.checked,
                    })
                  );
                }}
                name="good"
              />
            }
            label="Good Condition"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={condition.renovation}
                onChange={(event) => {
                  dispatch(
                    setCondition({
                      ...condition,
                      [event.target.name]: event.target.checked,
                    })
                  );
                }}
                name="renovation"
              />
            }
            label="Needs Renovation"
          />
        </FormGroup>
        <FormHelperText>Select as many as you want</FormHelperText>
      </FormControl>
    </Box>
  );
}
