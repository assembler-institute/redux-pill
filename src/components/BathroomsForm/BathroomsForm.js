import React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";

import { setBathrooms } from "../../redux/search/actions";

export default function BathroomsForm() {
  const dispatch = useDispatch();
  const { bathrooms } = useSelector((state) => state.search);
  return (
    <Box sx={{ display: "flex" }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={bathrooms.one}
                onChange={(event) =>
                  dispatch(
                    setBathrooms({
                      ...bathrooms,
                      [event.target.name]: event.target.checked,
                    })
                  )
                }
                name="one"
              />
            }
            label="1"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={bathrooms.two}
                onChange={(event) =>
                  dispatch(
                    setBathrooms({
                      ...bathrooms,
                      [event.target.name]: event.target.checked,
                    })
                  )
                }
                name="two"
              />
            }
            label="2"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={bathrooms.more}
                onChange={(event) =>
                  dispatch(
                    setBathrooms({
                      ...bathrooms,
                      [event.target.name]: event.target.checked,
                    })
                  )
                }
                name="more"
              />
            }
            label="3 or +"
          />
        </FormGroup>
        <FormHelperText>Select as many as you want</FormHelperText>
      </FormControl>
    </Box>
  );
}
