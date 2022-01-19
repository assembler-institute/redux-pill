import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import {
  setNewLocationChecks,
  setNewLocationSelect,
} from "../../utils/setNewLocation";
import "./Equipment.scss";
import { setEquipment } from "../../redux/search/actions";

export default function EquipmentSelect() {
  const dispatch = useDispatch();
  const { equipment } = useSelector((state) => state.search);
  const location = useLocation();
  const navigate = useNavigate();
  const filter = "equipment";

  return (
    <div>
      <FormControl sx={{ m: 1 }} className="formEquipment">
        <InputLabel id="demo-simple-select-autowidth-label">
          Equipment
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={equipment}
          onChange={(event) => {
            dispatch(setEquipment(event.target.value));
            navigate(
              setNewLocationSelect(location, filter, event.target.value)
            );
          }}
          autoWidth
          label="furniture"
        >
          <MenuItem value="indifferent">
            <em>Does not matter</em>
          </MenuItem>
          <MenuItem value={"fully"}>Fully Furnished</MenuItem>
          <MenuItem value={"partially"}>Partially Furnished</MenuItem>
          <MenuItem value={"empty"}>Empty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
