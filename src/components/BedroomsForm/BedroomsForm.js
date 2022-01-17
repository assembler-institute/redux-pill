import React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";

import { setBedrooms } from "../../redux/search/actions";

export default function BedroomsForm() {
  const dispatch = useDispatch();
  const { bedrooms } = useSelector((state) => state.search);

  return (
    <Box sx={{ display: "flex" }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={bedrooms.zero}
                onChange={(event) =>
                  dispatch(
                    setBedrooms({
                      ...bedrooms,
                      [event.target.name]: event.target.checked,
                    })
                  )
                }
                name="zero"
              />
            }
            label="0 (studio)"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={bedrooms.one}
                onChange={(event) =>
                  dispatch(
                    setBedrooms({
                      ...bedrooms,
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
                checked={bedrooms.two}
                onChange={(event) =>
                  dispatch(
                    setBedrooms({
                      ...bedrooms,
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
                checked={bedrooms.three}
                onChange={(event) =>
                  dispatch(
                    setBedrooms({
                      ...bedrooms,
                      [event.target.name]: event.target.checked,
                    })
                  )
                }
                name="three"
              />
            }
            label="3"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={bedrooms.more}
                onChange={(event) =>
                  dispatch(
                    setBedrooms({
                      ...bedrooms,
                      [event.target.name]: event.target.checked,
                    })
                  )
                }
                name="more"
              />
            }
            label="4 or +"
          />
        </FormGroup>
        <FormHelperText>Select as many as you want</FormHelperText>
      </FormControl>
    </Box>
  );
}
