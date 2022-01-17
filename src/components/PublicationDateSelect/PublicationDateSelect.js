import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";

import { setPublicationDate } from "../../redux/search/actions";

export default function PublicationDateSelect() {
  const dispatch = useDispatch();
  const { publicationDate } = useSelector((state) => state.search);
  const [date, setDate] = React.useState("last week");

  const handleChange = (event) => {
    setDate(event.target.value);
  };

  React.useEffect(() => {
    dispatch(setPublicationDate(date));
  }, [date]);

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Date</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={publicationDate}
          onChange={handleChange}
          autoWidth
          label="publicationDate"
        >
          <MenuItem value="last week">
            <em>Last Week</em>
          </MenuItem>
          <MenuItem value={"last 24"}>Last 24 hours</MenuItem>
          <MenuItem value={"last 48"}>Last 48 hours</MenuItem>
          <MenuItem value={"last month"}>Last Month</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
