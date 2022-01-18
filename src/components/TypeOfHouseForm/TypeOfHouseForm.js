import React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { setTypeHouse } from "../../redux/search/actions";
import { setNewLocationChecks } from "../../utils/setNewLocation";

export default function TypeOfHouseForm() {
  const dispatch = useDispatch();
  const { typeOfHouse } = useSelector((state) => state.search);
  const location = useLocation();
  const navigate = useNavigate();
  const filter = "type";

  return (
    <Box sx={{ display: "flex" }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={typeOfHouse.flat}
                onChange={(e) => {
                  const newState = {
                    ...typeOfHouse,
                    [e.target.name]: e.target.checked,
                  };
                  dispatch(setTypeHouse(newState));
                  navigate(setNewLocationChecks(location, filter, newState));
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
                onChange={(e) => {
                  const newState = {
                    ...typeOfHouse,
                    [e.target.name]: e.target.checked,
                  };
                  dispatch(setTypeHouse(newState));
                  navigate(setNewLocationChecks(location, filter, newState));
                }}
                name="house"
              />
            }
            label="House"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={typeOfHouse.duplex}
                onChange={(e) => {
                  const newState = {
                    ...typeOfHouse,
                    [e.target.name]: e.target.checked,
                  };
                  dispatch(setTypeHouse(newState));
                  navigate(setNewLocationChecks(location, filter, newState));
                }}
                name="duplex"
              />
            }
            label="Duplex"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={typeOfHouse.penthouse}
                onChange={(e) => {
                  const newState = {
                    ...typeOfHouse,
                    [e.target.name]: e.target.checked,
                  };
                  dispatch(setTypeHouse(newState));
                  navigate(setNewLocationChecks(location, filter, newState));
                }}
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
