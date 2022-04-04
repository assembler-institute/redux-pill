import React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { setBedrooms } from "../../redux/search/actions";
import { setNewLocationChecks } from "../../utils/setNewLocation";
import { Grid } from "@mui/material";

export default function BedroomsForm() {
  const dispatch = useDispatch();
  const { bedrooms } = useSelector((state) => state.search);
  const location = useLocation();
  const navigate = useNavigate();
  const filter = "room";
  return (
    <Box sx={{ display: "flex" }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormGroup>
          <Grid container justifyContent={"flex-start"}>
            <Grid item xs={12} md={6} lg={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={bedrooms.zero}
                    onChange={(e) => {
                      const newState = {
                        ...bedrooms,
                        [e.target.name]: e.target.checked,
                      };
                      dispatch(setBedrooms(newState));
                      navigate(
                        setNewLocationChecks(location, filter, newState)
                      );
                    }}
                    name="zero"
                  />
                }
                label="studio"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={bedrooms.one}
                    onChange={(e) => {
                      const newState = {
                        ...bedrooms,
                        [e.target.name]: e.target.checked,
                      };
                      dispatch(setBedrooms(newState));
                      navigate(
                        setNewLocationChecks(location, filter, newState)
                      );
                    }}
                    name="one"
                  />
                }
                label="1"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={bedrooms.two}
                    onChange={(e) => {
                      const newState = {
                        ...bedrooms,
                        [e.target.name]: e.target.checked,
                      };
                      dispatch(setBedrooms(newState));
                      navigate(
                        setNewLocationChecks(location, filter, newState)
                      );
                    }}
                    name="two"
                  />
                }
                label="2"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={bedrooms.three}
                    onChange={(e) => {
                      const newState = {
                        ...bedrooms,
                        [e.target.name]: e.target.checked,
                      };
                      dispatch(setBedrooms(newState));
                      navigate(
                        setNewLocationChecks(location, filter, newState)
                      );
                    }}
                    name="three"
                  />
                }
                label="3"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={bedrooms.more}
                    onChange={(e) => {
                      const newState = {
                        ...bedrooms,
                        [e.target.name]: e.target.checked,
                      };
                      dispatch(setBedrooms(newState));
                      navigate(
                        setNewLocationChecks(location, filter, newState)
                      );
                    }}
                    name="more"
                  />
                }
                label="more"
              />
            </Grid>
          </Grid>
        </FormGroup>
        <FormHelperText>Select as many as you want</FormHelperText>
      </FormControl>
    </Box>
  );
}
