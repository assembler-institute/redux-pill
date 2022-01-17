import React, { useState, useEffect, useDebugValue } from "react";
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
  const [value, setValue] = useState({
    new: true,
    good: true,
    renovation: true,
  });
  const { condition } = useSelector((state) => state.search);

  const handleChange = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.checked,
    });
  };

  useEffect(() => {
    dispatch(setCondition(value));
  }, [value]);
  return (
    <Box sx={{ display: "flex" }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={condition.new}
                onChange={(e) => {
                  handleChange(e);
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
                onChange={(e) => handleChange(e)}
                name="good"
              />
            }
            label="Good Condition"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={condition.renovation}
                onChange={(e) => handleChange(e)}
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
