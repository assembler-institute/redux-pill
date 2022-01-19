import React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";

import { setNewLocationChecks } from "../../utils/setNewLocation";
import { setCondition } from "../../redux/search/actions";

export default function ConditionForm() {
  const dispatch = useDispatch();
  const { condition } = useSelector((state) => state.search);
  const location = useLocation();
  const navigate = useNavigate();
  const filter = "condition";

  return (
    <Box sx={{ display: "flex" }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormGroup>
          <Grid container>
            <Grid item xs={12} lg={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={condition.new}
                    onChange={(e) => {
                      const newState = {
                        ...condition,
                        [e.target.name]: e.target.checked,
                      };
                      dispatch(setCondition(newState));
                      navigate(
                        setNewLocationChecks(location, filter, newState)
                      );
                    }}
                    name="new"
                  />
                }
                label="New"
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={condition.good}
                    onChange={(e) => {
                      const newState = {
                        ...condition,
                        [e.target.name]: e.target.checked,
                      };
                      dispatch(setCondition(newState));
                      navigate(
                        setNewLocationChecks(location, filter, newState)
                      );
                    }}
                    name="good"
                  />
                }
                label="Good Condition"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={condition.renovation}
                    onChange={(e) => {
                      const newState = {
                        ...condition,
                        [e.target.name]: e.target.checked,
                      };
                      dispatch(setCondition(newState));
                      navigate(
                        setNewLocationChecks(location, filter, newState)
                      );
                    }}
                    name="renovation"
                  />
                }
                label="Needs Renovation"
              />
            </Grid>
          </Grid>
        </FormGroup>
        <FormHelperText>Select as many as you want</FormHelperText>
      </FormControl>
    </Box>
  );
}
