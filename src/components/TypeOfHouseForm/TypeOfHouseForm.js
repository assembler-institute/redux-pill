import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";

import { compileData } from "../../redux/search/actions";

export default function TypeOfHouseForm() {
  const dispatch = useDispatch();
  const [type, setType] = useState({
    flat: true,
    house: true,
    duplex: true,
    penthouse: true,
  });
  const { typeOfHouse } = useSelector((state) => state.search);

  const handleChange = (event) => {
    setType({
      ...type,
      [event.target.name]: event.target.checked,
    });
  };

  useEffect(() => {
    dispatch(compileData(type));
  }, [type]);
  return (
    <Box sx={{ display: "flex" }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={typeOfHouse.flat}
                onChange={(e) => {
                  handleChange(e);
                }}
                name="flat"
              />
            }
            label="Flat/Apartment"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={typeOfHouse.house}
                onChange={(e) => handleChange(e)}
                name="house"
              />
            }
            label="House"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={typeOfHouse.duplex}
                onChange={(e) => handleChange(e)}
                name="duplex"
              />
            }
            label="Duplex"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={typeOfHouse.penthouse}
                onChange={(e) => handleChange(e)}
                name="penthouse"
              />
            }
            label="Penthouse"
          />
        </FormGroup>
        <FormHelperText>Select as many as you want</FormHelperText>
      </FormControl>
    </Box>
  );
}
